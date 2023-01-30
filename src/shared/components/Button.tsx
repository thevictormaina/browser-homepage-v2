import { PropsWithChildren } from "react";
import { Icon } from "@iconify-icon/react";

type ButtonProps = { icon: string, type?: "button" | "submit" | "reset" | undefined } & PropsWithChildren;


function Button({ children, icon, type }: ButtonProps) {
  return (
    <button type={type || 'button'} className="btn">
      <Icon icon={icon} />
      {children}
    </button>
  );
}

export default Button;
