type Props = {
  placeholder: string;
  onChange(text: string): void;
  value: string;
  disabled?: boolean;
  id?: string;
};

export default function TextArea(props: Props) {
  return (
    <textarea
      className="w-full mt-2 p-1 border-2"
      placeholder={props.placeholder}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      value={props.value}
      disabled={props.disabled}
      id={props.id}
    />
  );
}
