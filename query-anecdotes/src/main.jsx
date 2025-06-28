import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { AnecdoteContextProvider } from "./components/AnecdoteContextProvider";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <AnecdoteContextProvider>
      <App />
    </AnecdoteContextProvider>
  </QueryClientProvider>
);
