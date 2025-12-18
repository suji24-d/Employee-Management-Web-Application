import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />
          }
        />

        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />

        <Route
          path="/adduser"
          element={isAuthenticated ? <AddUser /> : <Navigate to="/" />}
        />

        <Route
          path="/edituser/:id"
          element={isAuthenticated ? <EditUser /> : <Navigate to="/" />}
        />

        <Route
          path="/viewuser/:id"
          element={isAuthenticated ? <ViewUser /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
