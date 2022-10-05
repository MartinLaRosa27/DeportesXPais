import { useState, useEffect, createContext } from "react";
import axios from "axios";
const BuscadorContext = createContext();

export const BuscadorProvider = ({ children }) => {
  const [paises, setPaises] = useState([]);
  const [deportes, setDeportes] = useState([]);

  const getPaises = async () => {
    try {
      const { data } = await axios.get(
        "https://www.thesportsdb.com/api/v1/json/2/all_countries.php"
      );
      setPaises(data.countries);
    } catch (e) {
      console.log(e);
    }
  };

  const getDeportes = async () => {
    try {
      const { data } = await axios.get(
        "https://www.thesportsdb.com/api/v1/json/2/all_sports.php"
      );
      setDeportes(data.sports);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPaises();
    getDeportes();
  }, []);

  return (
    <BuscadorContext.Provider value={{ paises, deportes }}>
      {children}
    </BuscadorContext.Provider>
  );
};

export default BuscadorContext;
