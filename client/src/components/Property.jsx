import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/user";
import Environment from "../utils/Environments.svg";
import Room from "../utils/Room.svg";
import Bathroom from "../utils/Bathroom.svg";
import Garage from "../utils/Garage.svg";
import Gym from "../utils/Gym.svg";
import SPool from "../utils/SPool.svg";
import Barbeque from "../utils/Barbeque.svg";
import Jacuzzi from "../utils/Jacuzzi.svg";
import Bar from "../utils/Bar.svg";
import GreenArea from "../utils/GreenArea.svg";

import DeleteAppointment from "../commons/DeleteAppointment";

const Property = () => {
  //const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointment, setAppointment] = useState("");
  const [editAppointment, setEditAppointment] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/appointments/user/${user.id}/property/${id}
      `,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setAppointment(res.data);
        setNewDate(res.data.date);
        setNewTime(res.data.time);
      })
      .catch((error) => console.log(error));
  }, [user.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3001/api/appointments/create`,
        {
          date: date,
          time: time,
          userId: user.id,
          userName: user.name,
          userLastname: user.lastName,
          propertyId: property.id,
          propertyTitle: property.title,
          propertyImage: property.image,
          propertyCountry: property.country,
          propertyCity: property.city,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleEditAppointment = (e) => {
    setEditAppointment(!editAppointment);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/api/appointments/update/${appointment.id}`,
        {
          date: newDate,
          time: newTime,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .then(() => window.location.reload())
      .catch((error) => console.log(error));
  };

  const handleChangeNewDate = (e) => {
    setNewDate(e.target.value);
  };

  const handleChangeNewTime = (e) => {
    setNewTime(e.target.value);
  };

  const handleDelete = () => {
    axios
      .delete(
        `http://localhost:3001/api/appointments/delete/${appointment.id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => console.log(res))
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const viewModal = (e) => {
    setDeleteModal(!deleteModal);
  };

  return (
    <>
      <section className="h-auto">
        <div>
          <div className="relative h-[73vh] md:h-screen lg:h-[76vh]">
            <img
              className="absolute rounded-b-3xl h-full w-full object-cover"
              src={property.image}
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full rounded-b-3xl items-end">
              <div className="mx-[5vw] text-white font-dmSans my-10 xl:px-[5vw]">
                <h3 className="text-[2rem] font-semibold mb-4 leading-10 min-[480px]:text-[2.375rem] md:text-5xl">
                  {property.title}
                </h3>
                <p className="text-gray-100 md:text-lg lg:w-[57vw] xl:w-[40vw]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit etiam
                  cras tellus sit tempor amet, nascetur quam ornare proin platea
                  diam amet
                </p>
              </div>
            </div>
          </div>
          <div className="mx-[5vw] font-dmSans lg:mx-[3vw] xl:px-[7vw]">
            <div className="lg:flex lg:space-x-5">
              <div className="lg:w-9/12">
                <div className="space-y-4 py-16 min-[480px]:grid min-[480px]:grid-cols-2 min-[480px]:space-y-0 min-[480px]:gap-6 md:grid-cols-none md:flex md:gap-4">
                  <div className="w-auto flex justify-center items-center border rounded-full p-[0.875rem] font-dmSans text-md mr-3 min-[480px]:mr-0 md:text-lg">
                    <img
                      className="w-5 mr-2 md:w-[1.375rem]"
                      src={Environment}
                      alt=""
                    />
                    {property.environments} Environments
                  </div>
                  <div className="w-auto flex justify-center items-center border rounded-full p-[0.875rem] font-dmSans text-md mr-3 min-[480px]:mr-0 md:text-lg">
                    <img
                      className="w-5 mr-2 md:w-[1.375rem]"
                      src={Room}
                      alt=""
                    />
                    {property.rooms} Rooms
                  </div>
                  <div className="w-auto flex justify-center items-center border rounded-full p-[0.875rem] font-dmSans text-md mr-3 min-[480px]:mr-0 md:text-lg">
                    <img
                      className="w-5 mr-2 md:w-[1.375rem]"
                      src={Bathroom}
                      alt=""
                    />
                    {property.bathrooms} Bathrooms
                  </div>
                  <div className="w-auto flex justify-center items-center border rounded-full p-[0.875rem] font-dmSans text-md mr-3 min-[480px]:mr-0 md:text-lg">
                    <img
                      className="w-5 mr-2 md:w-[1.375rem]"
                      src={Garage}
                      alt=""
                    />
                    {property.garage} Garage
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mt-2 mb-4 min-[480px]:text-[1.625rem] md:text-[1.875rem] md:mb-8">
                    About the house
                  </h2>
                  <p className="text-gray-600 mb-6 md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit etiam
                    cras tellus sit tempor amet, nascetur quam ornare proin
                    platea diam amet sed fringilla.
                  </p>
                  <ul className="pl-7 text-gray-600 space-y-2 mb-6 md:text-lg">
                    <li type="disc">
                      Faucibus pulvinar elementum integer enim neque volutpat ac
                      tincidunt vitae.
                    </li>
                    <li type="disc">
                      Faucibus pulvinar elementum integer enim neque volutpat ac
                      tincidunt vitae.
                    </li>
                    <li type="disc">
                      Faucibus pulvinar elementum integer enim neque volutpat ac
                      tincidunt vitae.
                    </li>
                    <li type="disc">
                      Faucibus pulvinar elementum integer enim neque volutpat ac
                      tincidunt vitae.
                    </li>
                  </ul>
                  <p className="text-gray-600 mb-6 md:text-lg">
                    Pulvinar mattis nunc sed blandit libero cursus turpis massa
                    tincidunt dui ut tellus molestie nunc non blandit massa enim
                    nec dui nunc netus et malesuada fames aliquam vestibulum
                    morbi blandit cursus risus at ultrices mi tempus scelerisque
                    purus semper eget duis at tellus in mollis nunc sed id
                    semper risus.
                  </p>
                  <p className="text-gray-600 mb-6 md:text-lg">
                    Tempus quam pellentesque nec nam aliquam sem et tortor duis
                    convallis convallis tellus id interdum sit amet nisl purus
                    in mollis nulla facilisi morbi tempus iaculis urna id
                    volutpat tincidunt vitae semper quis lectus nulla.
                  </p>
                </div>
                <hr className="border-t my-2" />
                <div>
                  <h2 className="text-2xl font-semibold my-8 md:text-[1.875rem] md:my-12">
                    Areas
                  </h2>
                  <div className="grid grid-cols-2 gap-y-10 gap-x-4 mb-10 min-[480px]:grid-cols-3 md:gap-y-12 md:mb-16">
                    <div className="flex items-center">
                      <img className="h-[30px] mr-2" src={Gym} alt="" />
                      <p>Gym</p>
                    </div>
                    <div className="flex items-center">
                      <img className="h-[30px] mr-2" src={SPool} alt="" />
                      <p>Swimming pool</p>
                    </div>
                    <div className="flex items-center">
                      <img className="h-[30px] mr-2" src={Barbeque} alt="" />
                      <p>Barbeque</p>
                    </div>
                    <div className="flex items-center">
                      <img className="h-[30px] mr-2" src={Jacuzzi} alt="" />
                      <p>Jacuzzi</p>
                    </div>
                    <div className="flex items-center">
                      <img className="h-[30px] mr-2" src={Bar} alt="" />
                      <p>Bar</p>
                    </div>
                    <div className="flex items-center">
                      <img className="h-[30px] mr-2" src={GreenArea} alt="" />
                      <p>Gardens</p>
                    </div>
                  </div>
                </div>
              </div>
              {!appointment ? (
                <div className="lg:w-5/12">
                  <div className="mb-10 lg:sticky lg:top-5 ">
                    <div className="w-full h-auto py-10 px-6 border shadow-card rounded-3xl bg-white min-[480px]:py-12 min-[480px]:px-10 sm:py-[3.125rem] sm:px-[2rem] lg:w-auto lg:-mt-[21.5625rem]">
                      <h2 className="text-[1.375rem] font-semibold mb-2">
                        Schedule a visit
                      </h2>
                      <p className="text-gray-600 mb-5 md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        etiam cras tellus sit.
                      </p>
                      <hr className="border-t mt-8 mb-10 " />
                      <div className="min-[480px]:flex min-[480px]:space-x-2">
                        <div className="w-full">
                          <label
                            htmlFor="date"
                            className="font-dmSans text-gray-700 font-semibold mb-3"
                          >
                            Date
                          </label>
                          <div className="mt-1">
                            <input
                              id="date"
                              name="date"
                              type="date"
                              onChange={handleChangeDate}
                              required
                              className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="time"
                            className="font-dmSans text-gray-700 font-semibold mb-3"
                          >
                            Time
                          </label>
                          <div className="mt-1">
                            <input
                              id="time"
                              name="time"
                              type="time"
                              onChange={handleChangeTime}
                              required
                              className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="block shadow-button bg-white border border-gray-200 w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                        onClick={handleSubmit}
                      >
                        Book
                      </button>
                      <div className="flex w-full items-center justify-center my-5">
                        <hr className="border border-gray-300 w-1/2" />
                        <div className="mx-5">OR</div>
                        <hr className="border border-gray-300 w-1/2" />
                      </div>
                      <button
                        className="block shadow-button bg-black w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                        href="/"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ) : appointment && editAppointment ? (
                <div className="lg:w-5/12">
                  <div className="mb-10 lg:sticky lg:top-5 ">
                    <div className="w-full h-auto py-10 px-6 border shadow-card rounded-3xl bg-white min-[480px]:py-12 min-[480px]:px-10 sm:py-[3.125rem] sm:px-[2rem] lg:w-auto lg:-mt-[21.5625rem]">
                      <h2 className="text-[1.375rem] font-semibold mb-2">
                        Select new date and time
                      </h2>
                      <p className="text-gray-600 mb-5 md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        etiam cras tellus sit.
                      </p>
                      <hr className="border-t mt-8 mb-10 " />
                      <div className="min-[480px]:flex min-[480px]:space-x-2">
                        <div className="w-full">
                          <label
                            htmlFor="newDate"
                            className="font-dmSans text-gray-700 font-semibold mb-3"
                          >
                            Date
                          </label>
                          <div className="mt-1">
                            <input
                              id="newDate"
                              name="newDate"
                              type="date"
                              defaultValue={appointment.date}
                              onChange={handleChangeNewDate}
                              required
                              className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="newTime"
                            className="font-dmSans text-gray-700 font-semibold mb-3"
                          >
                            Time
                          </label>
                          <div className="mt-1">
                            <input
                              id="newTime"
                              name="newTime"
                              type="time"
                              defaultValue={appointment.time}
                              onChange={handleChangeNewTime}
                              required
                              className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="block shadow-button bg-white border border-gray-200 w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                        onClick={handleEdit}
                      >
                        Send new date
                      </button>
                      <div className="flex w-full items-center justify-center my-5">
                        <hr className="border border-gray-300 w-1/2" />
                        <div className="mx-5">OR</div>
                        <hr className="border border-gray-300 w-1/2" />
                      </div>
                      <button
                        className="block shadow-button bg-primary w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white hover:bg-primaryHover hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                        onClick={handleEditAppointment}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="lg:w-5/12">
                  <div className="mb-10 lg:sticky lg:top-5 ">
                    <div className="w-full h-auto py-10 px-6 border shadow-card rounded-3xl bg-white min-[480px]:py-12 min-[480px]:px-10 sm:py-[3.125rem] sm:px-[2rem] lg:w-auto lg:-mt-[21.5625rem]">
                      <h2 className="text-[1.375rem] font-semibold mb-2">
                        You have a pending visit
                      </h2>
                      <p className="text-gray-600 mb-5 md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        etiam cras tellus sit.
                      </p>
                      <hr className="border-t mt-8 mb-10 " />
                      <div className="min-[480px]:flex min-[480px]:space-x-2">
                        <div className="w-full">
                          <label
                            htmlFor="date"
                            className="font-dmSans text-gray-700 font-semibold mb-3"
                          >
                            Date
                          </label>
                          <div className="mt-1">
                            <input
                              id="date"
                              name="date"
                              type="date"
                              disabled
                              defaultValue={appointment.date}
                              onChange={handleChangeDate}
                              required
                              className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="time"
                            className="font-dmSans text-gray-700 font-semibold mb-3"
                          >
                            Time
                          </label>
                          <div className="mt-1">
                            <input
                              id="time"
                              name="time"
                              type="time"
                              disabled
                              defaultValue={appointment.time}
                              onChange={handleChangeTime}
                              required
                              className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="block shadow-button bg-white border border-gray-200 w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-gray-900 hover:bg-primary hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                        onClick={handleEditAppointment}
                      >
                        Edit
                      </button>
                      <div className="flex w-full items-center justify-center my-5">
                        <hr className="border border-gray-300 w-1/2" />
                        <div className="mx-5">OR</div>
                        <hr className="border border-gray-300 w-1/2" />
                      </div>
                      <button
                        className="block shadow-button bg-primary w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white hover:bg-primaryHover hover:text-white min-[480px]:w-full sm:w-full sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                        onClick={viewModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="pt-20">
                <div className="min-[480px]:flex min-[480px]:items-center min-[480px]:justify-between">
                  <h2 className="text-2xl font-semibold mb-8 md:text-[1.875rem] lg:mb-10">
                    Gallery
                  </h2>
                  <button
                    className="block shadow-button bg-primary border border-gray-200 w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white mb-8 hover:bg-white hover:text-gray-900 min-[480px]:w-auto sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9 lg:mb-10"
                    href="/"
                  >
                    Browse all
                  </button>
                </div>
                <div className="grid drid-cols gap-5 mb-20 min-[480px]:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-3xl">
                    <img
                      className="rounded-3xl"
                      src="https://i.pinimg.com/originals/46/f3/3f/46f33ff5d80c2b59d4c4c6d6d6ed38e8.jpg"
                      alt=""
                    />
                  </div>
                  <div className="rounded-3xl">
                    <img
                      className="rounded-3xl"
                      src="https://i.pinimg.com/originals/46/f3/3f/46f33ff5d80c2b59d4c4c6d6d6ed38e8.jpg"
                      alt=""
                    />
                  </div>
                  <div className="rounded-3xl">
                    <img
                      className="rounded-3xl"
                      src="https://i.pinimg.com/originals/46/f3/3f/46f33ff5d80c2b59d4c4c6d6d6ed38e8.jpg"
                      alt=""
                    />
                  </div>
                  <div className="rounded-3xl">
                    <img
                      className="rounded-3xl"
                      src="https://i.pinimg.com/originals/46/f3/3f/46f33ff5d80c2b59d4c4c6d6d6ed38e8.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {deleteModal ? (
        <DeleteAppointment viewModal={viewModal} handleDelete={handleDelete} />
      ) : null}
    </>
  );
};

export default Property;
