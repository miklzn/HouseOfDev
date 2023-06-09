import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PanelAdmin = () => {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [info, setInfo] = useState(0);

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

  console.log(appointments);

  return (
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
        <div className="mt-5 mb-14">
          {info === 0
            ? users.map((user, i) => (
                <div className="flex items-center justify-between h-20 border border-gray-200 rounded-full font-dmSans my-3">
                  <div className="flex items-center">
                    <img
                      className="w-14 h-14 ml-2 rounded-full"
                      src="https://media.licdn.com/dms/image/D4D03AQEyIW7bFHlRgQ/profile-displayphoto-shrink_100_100/0/1676720943921?e=1691625600&v=beta&t=c4IxNEcL9fhEev8PnJgxF-Yuh-bSBUsfiixKWEizV8o"
                      alt=""
                    />

                    <div className="flex flex-col ml-2">
                      <h3 className=" text-gray-500">Name:</h3>
                      <p className="">{`${user.name} ${user.lastName}`}</p>
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
                    <div className="flex flex-col ml-2">
                      <h3 className=" text-gray-500">Title:</h3>
                      <p className="">{property.title}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mr-4">
                    <button className="p-2 bg-primary rounded-full">
                      <img
                        className="w-5"
                        src="https://www.svgrepo.com/show/509911/edit.svg"
                        alt=""
                      />
                    </button>
                    <button className="p-2 bg-primary rounded-full">
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
                      src={properties[appointment.propertyId].image}
                      alt=""
                    />
                    <div className="flex flex-col ml-2">
                      <h3 className=" text-gray-500">Date:</h3>
                      <p className="">{appointment.date}</p>
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
  );
};
export default PanelAdmin;
