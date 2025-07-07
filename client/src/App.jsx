import "./App.css";
import { router } from "./router/router";
import { useRoutes } from "react-router-dom";

function App() {
  return useRoutes(router);
}

export default App;
