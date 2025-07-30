// UserContext.js
import { createContext } from "react";

const UserContext = createContext({
  user: null,
  token: "",
  login: () => { },
  logout: () => { },
  cardData:[],
});



export { UserContext };
