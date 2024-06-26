import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import GameContextProvider from "./context/GameContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
