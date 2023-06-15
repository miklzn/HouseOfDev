import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import DeleteUser from "../commons/DeleteUser";
import DeleteProp from "../commons/DeleteProp";

const PanelAdmin = () => {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [info, setInfo] = useState(0);
  const [action, setAction] = useState("");
  const [userId, setUserId] = useState("");
  const [propId, setPropId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/allUsers", {
        withCredentials: true,
      })
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/properties/all", {
        withCredentials: true,
      })
      .then((res) => setProperties(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/appointments/all", {
        withCredentials: true,
      })
      .then((res) => setAppointments(res.data))
      .catch((error) => console.log(error));
  }, []);

  //Get userId
  const getUserId = (id) => {
    setUserId(id);
    return setAction("deleteUser");
  };

  //Delete user
  const handleDeleteUser = () => {
    axios
      .delete(`http://localhost:3001/api/users/delete/${userId}`, {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  //Get propId

  const getPropId = (id) => {
    setPropId(id);
    return setAction("deleteProp");
  };

  //Delete user
  const handleDeleteProp = () => {
    axios
      .delete(`http://localhost:3001/api/properties/${propId}`, {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  //Close modal
  const closeModal = () => {
    return setAction("");
  };

  console.log(propId);
  console.log(action);

  return (
    <>
      <div>
        <div className="h-auto pt-32 mx-[7vw] sm:pt-36 md:mx-[4vw] lg:mx-[6vw] xl:mx-[12vw]">
          <div className="w-full font-dmSans text-lg text-gray-600 mb-4 ">
            <h1 className="text-center">Administrator panel</h1>
          </div>
          <div className="md:flex md:space-x-2">
            <div className="h-auto w-full rounded-3xl font-dmSans md:justify-center">
              <div className="flex justify-center space-x-1">
                <button
                  className={
                    info === 0
                      ? "px-2 py-2 bg-primary h-16 rounded-full text-white"
                      : "px-2 py-2 bg-white h-16 rounded-full  text-black border border-gray-200"
                  }
                  onClick={() => {
                    setInfo(0);
                  }}
                >
                  Users ({users.length})
                </button>
                <button
                  className={
                    info === 1
                      ? "px-2 py-2 bg-primary h-16 rounded-full text-white"
                      : "px-2 py-2 bg-white h-16 rounded-full text-black border border-gray-200"
                  }
                  onClick={() => {
                    setInfo(1);
                  }}
                >
                  Properties ({properties.length})
                </button>
                <button
                  className={
                    info === 2
                      ? "px-2 py-2 bg-primary h-16 rounded-full text-white"
                      : "px-2 py-2 bg-white h-16 rounded-full text-black border border-gray-200"
                  }
                  onClick={() => {
                    setInfo(2);
                  }}
                >
                  Bookings ({appointments.length})
                </button>
              </div>
            </div>
          </div>
          <div
            className={info === 1 ? "mt-4 w-full flex justify-end" : "hidden"}
          >
            <Link to={`/properties/create`}>
              <button className="flex items-center bg-primary py-2 px-4 rounded-full text-white font-dmSans">
                New
                <img
                  className="h-5 ml-2"
                  src="https://www.svgrepo.com/show/506784/add-square.svg"
                  alt=""
                />
              </button>
            </Link>
          </div>
          <div className="min-h-[50vh] mt-5 mb-14">
            {info === 0
              ? users.map((user, i) => (
                  <div className="flex items-center justify-between h-20 border border-gray-200 rounded-full font-dmSans my-3">
                    <div className="flex items-center">
                      <img
                        className="w-14 h-14 ml-2 rounded-full"
                        src="https://media.licdn.com/dms/image/D4D03AQEyIW7bFHlRgQ/profile-displayphoto-shrink_100_100/0/1676720943921?e=1691625600&v=beta&t=c4IxNEcL9fhEev8PnJgxF-Yuh-bSBUsfiixKWEizV8o"
                        alt=""
                      />
                      <div className="flex xl:grid xl:grid-cols-5 xl:gap-x-3">
                        <div className="flex flex-col ml-2 md:ml-4">
                          <h3 className=" text-gray-500">Name:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[165px]">{`${user.name} ${user.lastName}`}</p>
                        </div>
                        <div className="flex flex-col ml-3 hidden min-[480px]:block md:ml-7">
                          <h3 className=" text-gray-500">Email:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[165px]">
                            {user.email}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden md:block md:ml-7">
                          <h3 className=" text-gray-500">Phone:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[110px]">
                            {user.phone}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden lg:block md:ml-7">
                          <h3 className=" text-gray-500">Country:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[80px]">
                            {user.country}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden lg:block md:ml-7">
                          <h3 className=" text-gray-500">City:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[110px]">
                            {user.city}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="mr-4 p-2 bg-primary rounded-full"
                        onClick={() => getUserId(user.id)}
                      >
                        <img
                          className="w-5"
                          src="https://www.svgrepo.com/show/502614/delete.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                ))
              : info === 1
              ? properties.map((property, i) => (
                  <div className="flex items-center justify-between h-20 border border-gray-200 rounded-full font-dmSans my-3">
                    <div className="flex items-center">
                      <img
                        className="w-16 h-16 ml-6 rounded-2xl"
                        src={property.image}
                        alt=""
                      />
                      <div className="flex xl:grid xl:grid-cols-5 xl:gap-x-3">
                        <div className="flex flex-col ml-2 md:ml-4">
                          <h3 className=" text-gray-500">Title:</h3>
                          <Link to={`/properties/${property.id}`}>
                            <p className="w-[25vw] overflow-hidden whitespace-nowrap min-[480px]:w-[18vw] min-[480px]:max-w-[165px] md:max-w-[110px]">
                              {property.title}
                            </p>
                          </Link>
                        </div>
                        <div className="flex flex-col ml-3 hidden min-[480px]:block md:ml-7">
                          <h3 className=" text-gray-500">Operation:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[17vw] min-[480px]:max-w-[90px]">
                            {property.operation}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden sm:block md:ml-7">
                          <h3 className=" text-gray-500">Category:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[110px]">
                            {property.category}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden md:block md:ml-7">
                          <h3 className=" text-gray-500">Price:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[12vw] min-[480px]:max-w-[110px]">
                            ${property.price}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden lg:block md:ml-7">
                          <h3 className=" text-gray-500">Country:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[150px]">
                            {`${property.city}, ${property.country}`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1 mr-4">
                      <Link to={`/properties/change/${property.id}`}>
                        <button className="p-2 bg-primary rounded-full">
                          <img
                            className="w-5"
                            src="https://www.svgrepo.com/show/509911/edit.svg"
                            alt=""
                          />
                        </button>
                      </Link>
                      <button
                        className="p-2 bg-primary rounded-full"
                        onClick={() => getPropId(property.id)}
                      >
                        <img
                          className="w-5"
                          src="https://www.svgrepo.com/show/502614/delete.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                ))
              : appointments.map((appointment, i) => (
                  <div className="flex items-center justify-between h-20 border border-gray-200 rounded-full font-dmSans my-3">
                    <div className="flex items-center">
                      <img
                        className="w-16 h-16 ml-6 rounded-2xl"
                        src={appointment.propertyImage}
                        alt=""
                      />
                      <div className="flex xl:grid xl:grid-cols-5 xl:gap-x-3 xl:w-10/12">
                        <div className="flex flex-col ml-2 md:ml-4">
                          <h3 className=" text-gray-500">Date:</h3>
                          <p className="w-[32vw] overflow-hidden whitespace-nowrap min-[480px]:max-w-[105px]">
                            {appointment.date}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden min-[480px]:block md:ml-7">
                          <h3 className=" text-gray-500">Time:</h3>
                          <p className="w-[30vw] overflow-hidden whitespace-nowrap min-[480px]:max-w-[60px]">
                            {appointment.time}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden min-[530px]:block md:ml-7">
                          <h3 className=" text-gray-500">Visitor:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[530px]:w-[20vw] sm:w-[165px]">
                            {`${appointment.userName} ${appointment.userLastname}`}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden md:block md:ml-7">
                          <h3 className=" text-gray-500">ID Property:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[110px]">
                            {appointment.propertyId}
                          </p>
                        </div>
                        <div className="flex flex-col ml-3 hidden lg:block md:ml-7">
                          <h3 className=" text-gray-500">Location:</h3>
                          <p className="w-[39.065vw] overflow-hidden whitespace-nowrap min-[480px]:w-[26.044vw] min-[480px]:max-w-[180px] xl:max-w-[160px]">
                            {`${appointment.propertyCity}, ${appointment.propertyCountry}`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="mr-4 p-2 bg-primary rounded-full">
                        <img
                          className="w-5"
                          src="https://www.svgrepo.com/show/502614/delete.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {action === "deleteUser" ? (
        <DeleteUser
          // getUserId={getUserId}
          handleDeleteUser={handleDeleteUser}
          closeModal={closeModal}
        />
      ) : action === "deleteProp" ? (
        <DeleteProp
          //getPropId={getPropId}
          handleDeleteProp={handleDeleteProp}
          closeModal={closeModal}
        />
      ) : null}
    </>
  );
};
export default PanelAdmin;
