import React,{ useState, useEffect} from "react";
import {UserContext} from "./UserContext";

import axios from "axios";

const UserContextProvider =({children})=>{
 
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || ""); // null = not logged in
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [cardData,setCardData]=useState([]);

  useEffect(()=>{
    const fetchCardDetails = async () => {
    try {
      const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/home`)
      if(res.data.success){
        setCardData(res.data.data);
      }
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
  }
  fetchCardDetails();
},[]);



  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("user",JSON.stringify(userData));
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