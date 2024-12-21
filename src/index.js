import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root instance

root.render(<App />);
