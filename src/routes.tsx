import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewLead from "./pages/NewLead";
import Dashboard from "./pages/Dashboard";
import { AppContext } from "./utils/appContext";

const Router : React.FC = () => {
  const context = useContext(AppContext);

  return (
    <BrowserRouter>
        {
          context.isLoggedIn ? (
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/newLead" element={<NewLead />} />
              <Route
                path="*"
                element={<Navigate to="/dashboard" replace />}
              />
            </Routes>
          ) : (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="*"
                  element={<Navigate to="/login" replace />}
                />
            </Routes>
          )
        }
    </BrowserRouter>
  )
}

export default Router;