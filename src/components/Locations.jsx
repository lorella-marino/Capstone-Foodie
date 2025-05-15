import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../redux/actions";
import { Col, Row } from "react-bootstrap";
import LocationsAdmin from "./admin/LocationsAdmin";

const Locations = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location?.list || []);
  /*   const { role } = useSelector((state) => state.login); */
  /*   const isAdmin = role === "ROLE_ADMIN"; */

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <Row xs={1} lg={2} id="locations">
      <Col>
        <h2>Locations</h2>
        {/* isAdmin && */ <LocationsAdmin />}

        {locations.map((loc) => (
          <a key={loc.id} href={loc.url} className="d-block text-black">
            {loc.via}
          </a>
        ))}
      </Col>
      <Col className=" d-flex  flex-column  justify-content-center">
        <div style={{ backgroundColor: "#faf6f0", borderRadius: "20px", padding: "20px" }} className="text-center">
          <img src="src/assets/italia.png" alt="logo" className="img-fluid rounded w-75 " />
        </div>
      </Col>
    </Row>
  );
};
export default Locations;
