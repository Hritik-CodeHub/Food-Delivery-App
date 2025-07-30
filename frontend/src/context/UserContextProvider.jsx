import React,{ useState, useEffect} from "react";
import {UserContext} from "./UserContext";

import axios from "axios";

const UserContextProvider =({children})=>{
   const [user, setUser] = useState(localStorage.getItem("user") || ""); // null = not logged in
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [cardData,setCardData]=useState([]);

  useEffect(()=>{
    const fetchCardDetails = async () => {
    try {
      const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/home-content`)
      if(res.data.success){
        setCardData(res.data.data);
      }
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
  }
  fetchCardDetails();
},[]);







//   useEffect(() => {
//     if (token) {
//       // You can fetch user details from token or backend if needed
//       const fetchUser = async () => {
//         try {
//           const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get-user`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           const data = await res.json();
//           if (data.success) setUser(data.user);
//         } catch (err) {
//           console.error(err);
//         }
//       };

//       fetchUser();
//     }
//   }, [token]);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("user", userData);
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
   return(<>
    <UserContext.Provider value={{ user, token, login, logout ,cardData}}>
    {children}
    </UserContext.Provider>
   </>)
}

export default UserContextProvider;