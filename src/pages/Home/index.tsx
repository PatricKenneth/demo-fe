import ButtonCustom from "@components/Button";
import { logout } from "@store/auth/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onLogout(): void {
    dispatch(logout());
    navigate("/sign-in");
  }

  return (
    <>
      <ButtonCustom onClick={onLogout}>Sair</ButtonCustom>
      <p>Home</p>
    </>
  );
}

export default Home;
