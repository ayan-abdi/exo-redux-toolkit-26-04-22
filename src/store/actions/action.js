// import { createAction } from "@reduxjs/toolkit";
// import axios from "axios";

// export const userToken = createAction(
//   "user/token",
//   ({ token, expire, pseudo }) => {
//     return {
//       payload: {
//         token,
//         expire,
//         pseudo,
//       },
//     };
//   }
// );

// export const userLogout = createAction("user/logout");

// export const userLogin = ({pseudo, password}) => {
//     // le param pour se connecter(pseudo,password)
//   // Pour renvoyer la requete voici ce qu'il faut faire
//   return (dispatch) => {
//     axios
//       .get("localhost:8080/api/auth/register")
//       .then(() => {})
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
