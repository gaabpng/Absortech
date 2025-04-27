import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
])

export default router