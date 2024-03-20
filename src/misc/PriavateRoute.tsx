import { Navigate, useLocation } from "react-router-dom";
import { AuthInterface } from "../types/types";

const PrivateRoute = ({
  children,
  Auth,
}: {
  children: JSX.Element;
  Auth: AuthInterface;
  role: "admin" | "user";
}) => {
  const { authenticated } = Auth;
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
