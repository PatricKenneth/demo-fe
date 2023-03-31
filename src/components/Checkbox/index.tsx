import { FormControlLabelStyle } from "@components/FormControl/Label/styles";
import { CheckboxStyle } from "./styles";
import { CheckboxProps } from "@mui/material";

interface ICheckboxCustom extends CheckboxProps {
  label: string;
}

function CheckboxCustom({ label, ...props }: ICheckboxCustom): JSX.Element {
  return <FormControlLabelStyle control={<CheckboxStyle {...props} />} label={label} />;
}

export default CheckboxCustom;
