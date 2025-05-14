import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations, addLocation, deleteLocation, updateLocation } from "../redux/actions/locationActions";

const LocationsAdmin = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.list);

  const [form, setForm] = useState({ via: "", url: "", id: null });

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(updateLocation(form.id, form));
    } else {
      dispatch(addLocation(form));
    }
    setForm({ via: "", url: "", id: null });
  };

  const handleEdit = (loc) => setForm(loc);
  const handleDelete = (id) => dispatch(deleteLocation(id));

  return (
    <div>
      <h2>Gestione Locations</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="via"
          placeholder="Via"
          value={form.via}
          onChange={(e) => setForm({ ...form, via: e.target.value })}
          required
        />
        <input
          name="url"
          placeholder="URL"
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.target.value })}
          required
        />
        <button type="submit">{form.id ? "Modifica" : "Aggiungi"}</button>
      </form>

      <ul>
        {locations.map((loc) => (
          <li key={loc.id}>
            {loc.via} - {loc.url} <button onClick={() => handleEdit(loc)}>Modifica</button>
            <button onClick={() => handleDelete(loc.id)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationsAdmin;
