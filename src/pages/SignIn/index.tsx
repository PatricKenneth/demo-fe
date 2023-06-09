import { AvatarCustom } from "@components/Avatar/styles";
import BoxCustom from "@components/Box";
import ButtonCustom from "@components/Button";
import CheckboxCustom from "@components/Checkbox";
import ContainerCustom from "@components/Container";
import CopyrightCustom from "@components/Copyright";
import GridCustom from "@components/Grid";
import { LinkCustom } from "@components/Link/styles";
import TextFieldCustom from "@components/TextField";
import TypographyCustom from "@components/Typography";
import { LockOutlinedIconCustom } from "@icons/LockOutlinedIcon/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { IAuthState } from "@store/auth/interfaces";
import { useEffect } from "react";
import { useDoSignInMutation } from "@store/auth/services";
import { loginFailed, loginSuccess } from "@store/auth/reducer";
import { useNavigate } from "react-router-dom";

interface IPayloadLogin {
  username?: string;
  password?: string;
}

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().min(6, "Password should be of minimum 6 characters length").required("Password is required"),
});

function SignIn(): JSX.Element {
  const authState: IAuthState = useSelector((state: Record<string, IAuthState>) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [doSignInMutation, { isLoading, isError, isSuccess, error, data }] = useDoSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(loginSuccess({ user: data }));
    }
    if (isError) {
      const { data, originalStatus } = error as { data: string; originalStatus: number };
      dispatch(loginFailed({ error: data, errorCode: originalStatus }));
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/");
    }
  }, [authState]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    } as IPayloadLogin,
    validationSchema,
    onSubmit: ({ username, password }) => doSignInMutation({ username, password }),
  });

  return (
    <ContainerCustom component="main" maxWidth="xs">
      <BoxCustom sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <AvatarCustom sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIconCustom />
        </AvatarCustom>
        <TypographyCustom component="h1" variant="h5">
          Sign in
        </TypographyCustom>
        <BoxCustom sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit} noValidate>
            <TextFieldCustom
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Usuário"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextFieldCustom
              fullWidth
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <CheckboxCustom value="remember" color="primary" label="Remember me" />
            {isError && <TypographyCustom>{authState.error}</TypographyCustom>}
            <ButtonCustom type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} loading={isLoading}>
              Sign In
            </ButtonCustom>
            <GridCustom container>
              <GridCustom item xs>
                <LinkCustom href="#" variant="body2">
                  {"Forgot password?"}
                </LinkCustom>
              </GridCustom>
              <GridCustom item>
                <LinkCustom href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </LinkCustom>
              </GridCustom>
            </GridCustom>
          </form>
        </BoxCustom>
      </BoxCustom>
      <CopyrightCustom sx={{ mt: 8, mb: 4 }} />
    </ContainerCustom>
  );
}

export default SignIn;
