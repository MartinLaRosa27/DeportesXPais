import { useState, createContext } from "react";
import axios from "axios";
const DeportesContext = createContext();

export const DeportesProvider = ({ children }) => {
  const [misDeportes, setMisDeportes] = useState([]);

  const getMisDeportes = async (busqueda) => {
    try {
      const { data } = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${busqueda.pais}&s=${busqueda.deporte}`
      );
      setMisDeportes(data.countries);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DeportesContext.Provider value={{ misDeportes, getMisDeportes }}>
      {children}
    </DeportesContext.Provider>
  );
};

export default DeportesContext;
