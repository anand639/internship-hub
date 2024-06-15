import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Register from "./components/auth/Register";
/* import PrivateRoute from "./utils/PrivateRoute"; */
import Navbar from "./components/NavBar";
import OpportunityList from "./components/opportunities/OpportunityList";
import Login from "./components/auth/Login";
import PrivateRoute from "./utils/PrivateRoute";
import MyApplicationsList from "./components/opportunities/MyApplicationsList";
import PublicRoute from "./utils/PublicRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="*" element={<div>Error</div>} />
              <Route path="/" element={<OpportunityList />} />
              <Route
                path="/login"
                element={<PublicRoute Component={Login} />}
              />
              <Route
                path="/register"
                element={<PublicRoute Component={Register} />}
              />
              <Route
                path="/my-applications"
                element={<PrivateRoute Component={MyApplicationsList} />}
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
