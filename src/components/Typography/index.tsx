import { TypographyProps } from "@mui/material";
import { TypographyStyle } from "./styles";
import React from "react";

type TypographyCustomType = TypographyProps & { component?: React.ElementType };

function TypographyCustom({ children, ...props }: TypographyCustomType): JSX.Element {
  return <TypographyStyle {...props}>{children}</TypographyStyle>;
}

export default TypographyCustom;
