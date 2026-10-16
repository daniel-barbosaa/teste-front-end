import type { InputHTMLAttributes } from "react";
import "./input.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return <input className="input" {...props} />;
}
