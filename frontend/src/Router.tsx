import { useRoutes } from "react-router-dom";

import Homepage from "src/pages/Homepage";
import Dashboard from "src/pages/Dashboard";

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default function Router() {
  return useRoutes(routes);
}
