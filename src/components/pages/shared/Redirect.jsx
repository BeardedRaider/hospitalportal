import { Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App () {
  return (
    <div className="App">
      <Navbar />

      <div>
        <h1>Redirecting...</h1>
        <p>If you are not redirected, click <a href="/home">here</a>.</p>
      <img src="../../../../public/images/ipad-mobile.jpg" alt="" />
      </div>

    </div>
  );
}

export default Redirect;