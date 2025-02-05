import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenExpired } from "../../../redux/authentication/authSlice";

const useAuthSync = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.isAuthTokenValid);

  useEffect(() => {
    const interval = setInterval(() => {
      const storedToken = localStorage.getItem("authToken");

      if (!storedToken) {
        dispatch(tokenExpired());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, token]);
};

export default useAuthSync;
