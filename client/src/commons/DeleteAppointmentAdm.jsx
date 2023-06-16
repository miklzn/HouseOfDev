const DeleteAppointmentAdm = ({ handleDeleteAppointment, closeModal }) => {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
      <div className="w-full max-w-sm h-auto p-6 relative mx-2 my-auto shadow-lg bg-white rounded-3xl">
        <div className="">
          <div className="text-center p-5 justify-center min-[480px]:flex min-[480px]:items-center min-[480px]:space-x-4 min-[480px]:my-2">
            <img
              className="h-20 mx-auto mb-4 min-[480px]:mb-0"
              src="https://www.svgrepo.com/show/490979/alert.svg"
              alt=""
            />
            <h2 className="font-semibold font-dmSans">
              Would you like to delete this appointment?
            </h2>
          </div>
          <div className="flex justify-center space-x-2">
            <button
              className="w-auto rounded-full px-6 py-3 text-base font-dmSans text-center text-white bg-primary hover:bg-primaryHover focus:ring-0"
              onClick={handleDeleteAppointment}
            >
              Delete
            </button>
            <button
              className="w-auto rounded-full px-6 py-3 text-base font-dmSans text-center text-black bg-white border border-gray-200 hover:bg-primary hover:text-white focus:ring-0"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAppointmentAdm;
