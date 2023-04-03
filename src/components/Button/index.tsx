import { ButtonStyle } from "./styles";
import { LoadingButtonProps } from "@mui/lab";

function ButtonCustom({ children, ...props }: LoadingButtonProps): JSX.Element {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}

export default ButtonCustom;
