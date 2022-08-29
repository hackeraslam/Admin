import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebse";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
function PrivateRoutes() {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, async (Cuser) => {
      setUser(Cuser);
    });
  });

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
