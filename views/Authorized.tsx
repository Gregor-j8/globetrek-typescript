import { Navigate, useLocation } from "react-router-dom"
import { ReactNode } from "react"

// We can access child components the same way we access props. Child components are passed to our props as a key/value pair where
// children is the key.
interface AuthorizedProps {
  children: ReactNode;
}


export const Authorized = ({ children }: AuthorizedProps) => {
  const location = useLocation()

  // Check if user is logged in. If they are, render the CHILD components (in this case, the ApplicationViews component)
  if (localStorage.getItem("user")) {
    return children
  }
  // If the user is NOT logged in, redirect them to the login page using the Navigate component from react-router-dom
  else {
    return <Navigate to={`/login`} state={{ from: location }} replace />
  }
}
