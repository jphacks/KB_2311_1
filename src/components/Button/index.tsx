type ButtonType = "submit" | "button";

type Props = {
  innerText: string;
  type: ButtonType;
  disabled?: boolean;
};

export const PlainButton = ({
  innerText,
  type,
  disabled,
}: Props): JSX.Element => (
  <button
    type={type}
    disabled={disabled}
    className={`${
      disabled ? "bg-gray-400" : "bg-pink-color"
    } py-3 px-6 rounded-xl text-white w-full`}
  >
    {innerText}
  </button>
);
