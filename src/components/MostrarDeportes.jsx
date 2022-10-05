import React from "react";
import { useDeportes } from "../hooks/useDeportes.jsx";

export const MostrarDeportes = () => {
  //
  const { misDeportes } = useDeportes();

  return (
    <div className="container mostrar-deportes">
      {misDeportes != null ? (
        <>
          {misDeportes.map((miDeporte) => (
            <div className="card mb-3 contenido" key={miDeporte.idLeague}>
              <img
                src={miDeporte.strBadge}
                className="card-img-top"
                alt={miDeporte.strLeague}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{miDeporte.strLeague}</h5>
                <p className="card-text">{miDeporte.strDescriptionEN}</p>
                <p className="card-text">
                  <small className="text-muted">{miDeporte.strCountry}</small>
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="alert alert-warning" role="alert">
            No se encontraron ligas del país y deporte indicado :(
          </div>
        </>
      )}
    </div>
  );
};
