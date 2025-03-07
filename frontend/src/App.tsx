import { useLocation } from "react-router-dom";
import { Header } from "./components";
import { Main } from "./components";
import { Footer } from "./components";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (!searchParams.has("length")) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
