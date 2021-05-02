type Props = {
  id: string;
  label: string;
  isChecked: boolean;
  onChange(checked: boolean): void;
};

export default function CheckBox(props: Props) {
  return (
    <div className="p-2">
      <input
        type="checkbox"
        id={props.id}
        onChange={(e) => {
        props.onChange(e.target.checked)
        }}
        checked={props.isChecked}
      />
      <label htmlFor={props.id} className="ml-3">
        {props.label}
      </label>
    </div>
  );
}
