// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, Navigate } from "react-router-dom";

// const DeleteUser = () => {
//   const { id } = useParams();
//   const [deleteUser, setDeleteUser] = useState({});

//   useEffect(() => {
//     axios
//       .delete(`http://localhost:3001/api/users/delete/${id}`, {
//         withCredentials: true,
//       })
//       .then((res) => setDeleteUser(res.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return <Navigate to={"/panelAdmin"} />;
// };
// export default DeleteUser;
