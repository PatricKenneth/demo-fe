import { BoxProps } from "@mui/material";
import { BoxStyle } from "./styles";

function BoxCustom({ children, ...props }: BoxProps): JSX.Element {
  return <BoxStyle {...props}>{children}</BoxStyle>;
}

export default BoxCustom;
