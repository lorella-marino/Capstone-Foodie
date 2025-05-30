import { useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import Login from "./Login";
import Register from "./Register";
import UserProfilo from "./UserProfilo";
import { useState } from "react";

const UserPanel = ({ show, onHide }) => {
  const token = useSelector((state) => state.login.token);
  const isLoggedIn = Boolean(token);

  const [showRegister, setShowRegister] = useState(false);

  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{isLoggedIn ? "Il tuo profilo" : "Accedi o Registrati"}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        {isLoggedIn ? (
          <UserProfilo />
        ) : (
          <>
            {showRegister ? (
              <Register
                onRegisterSuccess={() => {
                  setShowRegister(false);
                }}
              />
            ) : (
              <Login onClickRegister={() => setShowRegister(true)} />
            )}
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UserPanel;
