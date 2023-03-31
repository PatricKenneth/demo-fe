import { ContainerProps } from "@mui/material";
import { ContainerStyle } from "./styles";

type ContainerCustomType = ContainerProps & { component?: React.ElementType };

function ContainerCustom({ children, ...props }: ContainerCustomType): JSX.Element {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
}

export default ContainerCustom;
