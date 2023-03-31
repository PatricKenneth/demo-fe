import { ButtonProps } from "@mui/material";
import { ButtonStyle } from "./styles";

function ButtonCustom({ children, ...props }: ButtonProps): JSX.Element {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}

export default ButtonCustom;
