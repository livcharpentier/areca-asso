import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Liens reçus par mail (invitation, mot de passe oublié) : toujours vers l'Espace membres
if (/type=(invite|recovery)|error_description=/.test(window.location.hash) && window.location.pathname !== "/responsables") {
  window.location.replace("/responsables" + window.location.hash);
}

createRoot(document.getElementById("root")!).render(<App />);
