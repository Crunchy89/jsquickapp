import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import '@splidejs/splide/dist/css/splide.min.css';

const App=()=> {
  return (
    <Routes>
      <Route index element={<Home/>} />
    </Routes>
  );
}

export default App;
