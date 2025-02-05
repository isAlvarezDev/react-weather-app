import { Header, Main } from "./components/";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
import { ThemeContext } from "./context/";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`App-${isDark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;