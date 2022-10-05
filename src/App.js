import { Buscador } from "./components/Buscador.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { MostrarDeportes } from "./components/MostrarDeportes.jsx";
import { BuscadorProvider } from "./context/BuscadorProvider.jsx";
import { DeportesProvider } from "./context/DeportesProvider.jsx";

function App() {
  return (
    <>
      <Header />
      <BuscadorProvider>
        <DeportesProvider>
          <Buscador />
          <MostrarDeportes />
        </DeportesProvider>
      </BuscadorProvider>
      <Footer />
    </>
  );
}

export default App;
