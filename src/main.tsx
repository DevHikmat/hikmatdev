import ReactDOM from "react-dom/client";
import App from "./App";
import "aos/dist/aos.css";
import "./styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flip, ToastContainer } from "react-toastify";
import "./i18n";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <ToastContainer
      hideProgressBar={true}
      position="top-center"
      pauseOnFocusLoss={true}
      pauseOnHover={true}
      draggable={true}
      closeOnClick={true}
      transition={Flip}
    />
    <App />
  </div>
);