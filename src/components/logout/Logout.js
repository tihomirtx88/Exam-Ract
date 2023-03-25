import "./Logout.scss";
import { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { MONGO_URL } from "../../urls";

const Logout = () => {
  const { logOut } = useContext(UserContext);

  const fetchLogout = () => {
    fetch(`${MONGO_URL}/users/logout`)
      .then((res) => {
        if (!res.status === 204) {
          throw Error();
        }
        logOut();
      })
      .catch(() => alert("Unsuccesful logout!"));
  };

  useEffect(() => {
    fetchLogout();
  }, []);

  return null;
};

export default Logout;
