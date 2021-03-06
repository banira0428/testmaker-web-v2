import { useEffect, useState } from "react";
import { getDownloadUrl } from '../../lib/services/storage';

type Props = {
  image: File;
  setImage(file: File): void;
  imageRef?: string;
};

export default function ImageEditor(props: Props) {
  const [data, setData] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
 
  useEffect(() => {
    if (props.image == null) {
      setData("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setData(reader.result as string);
    reader.readAsDataURL(props.image);
  }, [props.image]);

  useEffect(() => {
    if(props.imageRef != null && props.imageRef !== ""){
      getDownloadUrl(props.imageRef).then((url) => {
        setImageUrl(url)
      }).catch(() => {
        setImageUrl("")
      })
    }else{
      setImageUrl("")
    }
  },[props.imageRef])

  return (
    <div>
      <div className="relative mt-5">
        <div className="absolute w-full border-2 p-2 rounded">
          <p>画像ファイルを選択</p>
        </div>
        <input
          type="file"
          accept="image/*"
          className="opacity-0 w-full h-full p-2"
          onChange={(e) => {
            props.setImage(
              e.target.files.length !== 0 ? e.target.files[0] : null
            );
          }}
        />
      </div>
      {data !== "" && (
        <img src={data} className="mx-auto m-3 max-w-xs border" />
      )}
      {data === "" && imageUrl != "" && (
        <img src={imageUrl} className="mx-auto m-3 max-w-xs border" />
      )}
    </div>
  );
}
