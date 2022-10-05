import React, { useState } from "react";
import { useBuscador } from "../hooks/useBuscador.jsx";
import { useDeportes } from "../hooks/useDeportes.jsx";

export const Buscador = () => {
  //
  const { paises } = useBuscador();
  const { deportes } = useBuscador();
  const { getMisDeportes } = useDeportes();

  //
  const [busqueda, setBusqueda] = useState({
    pais: "",
    deporte: "",
  });
  const [error, setError] = useState(false);

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.pais.length <= 0 || busqueda.deporte.length <= 0) {
      setError(true);
    } else {
      setError(false);
      getMisDeportes(busqueda);
    }
  };

  //
  return (
    <div className="buscador">
      <div className="container">
        {error ? (
          <div className="alert alert-danger" role="alert">
            Datos ingresados erróneos
          </div>
        ) : (
          <></>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* PAIS */}
          <label className="form-label">País</label>
          <select
            className="form-select"
            required
            name="pais"
            value={busqueda.pais}
            onChange={(e) => {
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              });
            }}
          >
            <option defaultValue="">Nombre del pais...</option>
            {paises.map((pais) => (
              <option value={pais.name_en} key={pais.name_en}>
                {pais.name_en}
              </option>
            ))}
          </select>
          {/* DEPORTE */}
          <label className="form-label">Deportes</label>
          <select
            className="form-select"
            required
            name="deporte"
            value={busqueda.deporte}
            onChange={(e) => {
              setBusqueda({
                ...busqueda,
                [e.target.name]: e.target.value,
              });
            }}
          >
            <option defaultValue="">Nombre del deporte...</option>
            {deportes.map((deporte) => (
              <option value={deporte.strSport} key={deporte.strSport}>
                {deporte.strSport}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};
