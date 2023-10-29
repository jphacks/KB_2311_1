import { ErrorText } from "@/components/ErrorText";
import { FocusEventHandler, ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type PlainInputProps = {
  labelText: string;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLSelectElement> | undefined;
  register?: UseFormRegister<any>;
  registerValue: string;
  error?: string;
  defaultValue?: string | number;
  labelFont?: string;
  inputFont?: string;
  children?: ReactNode; // <option>要素を受け取るためにchildrenプロパティを追加
};

export const PlainSelectInput = ({
  labelText,
  onBlur,
  register,
  registerValue,
  error,
  defaultValue,
  labelFont = "text-xs sm:text-base",
  inputFont = "text-sm",
  children, // childrenプロパティを受け取る
}: PlainInputProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-1 mb-4 w-full">
      <label htmlFor={registerValue} className={labelFont}>
        {labelText}
      </label>
      <select
        id={registerValue}
        defaultValue={defaultValue}
        {...(register && register(registerValue ?? ""))}
        onBlur={onBlur}
        className={
          "border border-gray-300 rounded-md shadow-sm p-2 sm:p-3 w-full focus:outline-pink-color " +
          inputFont
        }
      >
        {children}
      </select>

      {error && <ErrorText errorText={error} />}
    </div>
  );
};
