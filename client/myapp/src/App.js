import { useRoutes } from "react-router-dom";
import Navbar from "./compontents/Navbar";
import { router } from "./router";
const App = () => {
const Routers =   useRoutes(router)
  return (
    <>
   <Navbar/>
   {Routers}
    </>
  );
}

export default App;
