import { Navigate } from "react-router-dom";

// 🔹 Mock authentication
const isAuthenticated = false; // change to true to simulate logged-in

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;