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
                <div className="flex items-center h-20 border border-gray-200 rounded-full font-dmSans my-3">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className=" text-gray-500">Name:</h3>
                    <p className="">{`${user.name} ${user.lastName}`}</p>
                  </div>
                </div>
              ))
            : info === 1
            ? properties.map((property, i) => (
                <div className="flex items-center h-20 border border-gray-200 rounded-full font-dmSans my-3">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className=" text-gray-500">Title:</h3>
                    <p className="">{property.title}</p>
                  </div>
                  <button className="bg-primary rounded-full"> D</button>
                </div>
              ))
            : appointments.map((appointment, i) => (
                <div className="flex items-center h-20 border border-gray-200 rounded-full font-dmSans my-3">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className=" text-gray-500">Date:</h3>
                    <p className="">{appointment.date}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
export default PanelAdmin;
