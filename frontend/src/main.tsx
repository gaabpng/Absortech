import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const AppContent = (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  AppContent
);
