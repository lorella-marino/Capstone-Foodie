import { useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import Login from "./Login";
import Register from "./Register";
import UserProfilo from "./UserProfilo";

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
          <UserProfilo />
        ) : (
          <>
            <Login />
            <div className="my-4"></div>
            <Register />
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UserPanel;
