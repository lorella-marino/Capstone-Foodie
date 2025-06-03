import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../redux/actions";
import { Col, Row, Spinner } from "react-bootstrap";
import LocationsAdmin from "./admin/LocationsAdmin";
import { isAdmin } from "../utils/getUserRoles";

const Locations = () => {
  const dispatch = useDispatch();
  const { list, loading, errore } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <Row id="locations" className="g-3">
      <Col lg={5}>
        <h2>Locations</h2>
        {loading && <Spinner animation="border" />}
        {errore && <p>Errore: {errore}</p>}
        {!loading &&
          !errore &&
          (isAdmin() ? (
            <LocationsAdmin />
          ) : (
            list.map((loc) => (
              <a key={loc.id} href={loc.url} className="d-block text-black">
                {loc.via}
              </a>
            ))
          ))}
      </Col>
      <Col lg={7} className=" d-flex  flex-column  justify-content-center">
        <div style={{ backgroundColor: "#faf6f0", borderRadius: "20px", padding: "20px" }} className="text-center">
          {/* <img src="src/assets/italia.png" alt="mappa" className="img-fluid rounded w-75 " /> */}
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1pMDeJbZYQOBvtFL56riaxMsVfBx8vMc&ehbc=2E312F&noprof=1"
            className="w-100"
            height="480"
          ></iframe>
        </div>
      </Col>
    </Row>
  );
};

export default Locations;
