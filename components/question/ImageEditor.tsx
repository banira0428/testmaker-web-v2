import { useEffect, useState } from "react";

type Props = {
  image: File;
  setImage(file: File): void;
};

export default function ImageEditor(props: Props) {

  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (props.image == null) {
      setImageUrl("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImageUrl(reader.result as string);
    reader.readAsDataURL(props.image);
  }, [props.image]);

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
            props.setImage(e.target.files.length !== 0 ? e.target.files[0] : null);
          }}
        />
      </div>
      {imageUrl !== "" && (
        <img src={imageUrl} className="mx-auto m-3 max-w-xs border" />
      )}
    </div>
  );
}
