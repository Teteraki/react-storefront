import { DashBoardContainer } from "../components/dashboard/DashboardContainer";
import { useAuth } from "../hooks/AuthContext";
import { Navigate } from "react-router-dom";

export const Dashboard = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return <DashBoardContainer />;
};
