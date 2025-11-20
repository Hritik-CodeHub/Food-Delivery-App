import React,{ useState, useEffect} from "react";
import { createContext } from "react";
import axios from "axios";

export const AdminContext=createContext();


export const AdminContextProvider =({children})=>{
 
   const [admin, setAdmin] = useState(() => {
     try {
       const adminData = localStorage.getItem("admin");
       return adminData ? JSON.parse(adminData) : null;
     } catch (error) {
       console.error("Error parsing admin data from localStorage:", error);
       return null;
     }
   }); // null = not logged in
  const [token, setToken] = useState(localStorage.getItem("admin-token") || "");
  const [cardData,setCardData]=useState([]);
  console.log(admin);
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



  const adminLogin = (adminData, jwtToken) => {
    setAdmin(adminData);
    setToken(jwtToken);
    localStorage.setItem("admin-token", jwtToken);
    localStorage.setItem("admin",JSON.stringify(adminData));
  };

  const adminLogout = () => {
    setAdmin(null);
    setToken("");
    localStorage.removeItem("admin-token");
    localStorage.removeItem("admin");
  };
 
   return(<>
    <AdminContext.Provider value={{ admin, token, adminLogin, adminLogout, }}>
    {children}
    </AdminContext.Provider>
   </>)
}

