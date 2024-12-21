import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./styles/styles.css";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root instance

root.render(<App />);
