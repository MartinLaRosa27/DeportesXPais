import { useContext } from "react";
import DeportesContext from "../context/DeportesProvider.jsx";

export const useDeportes = () => {
  return useContext(DeportesContext);
};
