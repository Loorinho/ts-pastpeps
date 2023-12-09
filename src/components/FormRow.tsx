import { HtmlHTMLAttributes, ReactNode } from "react";

type FormRowProps = {
  children: ReactNode;
};
const FormRow = ({ children }: FormRowProps) => {
  return <div>{children}</div>;
};

FormRow.Label = Label;
FormRow.Input = Input;
FormRow.Error = Error;

export default FormRow;

function Label({ className, ...props }: HtmlHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={className + " block text-gray-500 text-sm "}
      {...props}
    ></label>
  );
}

function Input({ className, ...props }: HtmlHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={
        className +
        " border-2 rounded-md px-2 py-1 outline-none w-full focus:ring-1"
      }
      {...props}
    ></input>
  );
}

function Error({ className, ...props }: HtmlHTMLAttributes<HTMLSpanElement>) {
  return <span className={className + " text-red-500 mb-2"} {...props}></span>;
}
