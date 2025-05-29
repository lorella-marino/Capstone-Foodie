import { useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import UserPage from "./UserPage";

const UserPanel = ({ show, onHide }) => {
  const token = useSelector((state) => state.login.token);
  const isLoggedIn = Boolean(token);

  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{isLoggedIn ? "Il tuo profilo" : "Accedi o Registrati"}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isLoggedIn ? (
          <UserPage />
        ) : (
          <>
            <LoginPage />
            <div className="my-4"></div>
            <RegisterPage />
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UserPanel;
