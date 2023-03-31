import { GridProps } from "@mui/material";
import { GridStyle } from "./styles";

function GridCustom({ children, ...props }: GridProps): JSX.Element {
  return <GridStyle {...props}>{children}</GridStyle>;
}

export default GridCustom;
