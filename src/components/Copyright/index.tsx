import TypographyCustom from "@components/Typography";
import { CopyrightStyle } from "./styles";

interface ICopyrightCustomProps {
  sx: {
    mt: number;
    mb: number;
  };
}

function CopyrightCustom({ ...props }: ICopyrightCustomProps): JSX.Element {
  return (
    <CopyrightStyle>
      <TypographyCustom variant="body2" color="text.secondary" align="center" {...props}>
        {`Copyright © Your Website ${new Date().getFullYear()} .`}
      </TypographyCustom>
    </CopyrightStyle>
  );
}

export default CopyrightCustom;
