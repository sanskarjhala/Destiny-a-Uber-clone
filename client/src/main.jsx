import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import { Toaster } from "react-hot-toast";
import CaptainContext from "./context/CaptainContext.jsx";
import SocketContext from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContext>
      <UserContext>
        <SocketContext>
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </SocketContext>
      </UserContext>
    </CaptainContext>
  </StrictMode>
);
