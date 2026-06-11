import React from "react";
import { createRoot } from "react-dom/client";
import { W_searchContainer } from "../components/W_searchContainer.jsx";

const root = createRoot(document.querySelector('.O_search_container'))
root.render(< W_searchContainer/>)