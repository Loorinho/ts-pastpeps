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

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={className + " block text-gray-500 text-sm "}
    ></label>
  );
}

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
}

function Input({ className, type, ...props }: InputProps) {
  console.log("Input props: ", props);
  return (
    <input
      type={type}
      className={
        className +
        " border-2 rounded-md px-2 py-1 outline-none w-full focus:ring-[#007791] focus:ring-2"
      }
      {...props}
    ></input>
  );
}

function Error({ className, ...props }: HtmlHTMLAttributes<HTMLSpanElement>) {
  return <span className={className + " text-red-500 mb-2"} {...props}></span>;
}
