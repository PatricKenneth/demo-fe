import { TextFieldProps } from "@mui/material";
import { TextFieldStyle } from "./styles";

function TextFieldCustom({ children, ...props }: TextFieldProps): JSX.Element {
  return <TextFieldStyle {...props}>{children}</TextFieldStyle>;
}

export default TextFieldCustom;
