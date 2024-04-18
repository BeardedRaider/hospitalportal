import { Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App () {
  return (
    <div className="App">
      <Navbar />
      <img src="../../../../public/images/ipad-mobile.jpg" alt="" />
    </div>
  );
}

export default Redirect;