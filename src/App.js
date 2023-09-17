import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import PlacementPage from "./pages/PlacementPage/PlacementPage";
import HirePage from "./pages/HirePage/HirePage";
import Footer from "./components/Footer/Footer.js";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hire":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  const [activeMenu, setActiveMenu] = useState(false);
  const handleChangeActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="hire-page">
      <div className="hero-parent">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                handleChangeActiveMenu={handleChangeActiveMenu}
                activeMenu={activeMenu}
                screenSize={screenSize}
              />
            }
          />

          <Route
            path="/placement"
            element={
              <PlacementPage
                handleChangeActiveMenu={handleChangeActiveMenu}
                activeMenu={activeMenu}
                screenSize={screenSize}
              />
            }
          />

          <Route
            path="/hire"
            element={
              <HirePage
                handleChangeActiveMenu={handleChangeActiveMenu}
                activeMenu={activeMenu}
                screenSize={screenSize}
              />
            }
          />
        </Routes>

        <Footer screenSize={screenSize}/>
      </div>
    </div>
  );
}
export default App;
