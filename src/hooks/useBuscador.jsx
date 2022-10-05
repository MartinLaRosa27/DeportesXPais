import { useContext } from "react";
import BuscadorContext from "../context/BuscadorProvider.jsx";

export const useBuscador = () => {
  return useContext(BuscadorContext);
};
