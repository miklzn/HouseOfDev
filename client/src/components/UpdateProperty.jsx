import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProperty = () => {
  const [property, setProperty] = useState({});
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [environments, setEnvironments] = useState("");
  const [garage, setGarage] = useState("");
  const [category, setCategory] = useState("");
  const [operation, setOperation] = useState("");
  const [price, setPrice] = useState(property.price);
  const [available, setAvailable] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/properties/${id}`)
      .then((res) => {
        setProperty(res.data);
        setTitle(res.data.title);
        setAdress(res.data.adress);
        setCity(res.data.city);
        setState(res.data.state);
        setCountry(res.data.country);
        setRooms(res.data.rooms);
        setBathrooms(res.data.bathrooms);
        setEnvironments(res.data.environments);
        setGarage(res.data.garage);
        setCategory(res.data.category);
        setOperation(res.data.operation);
        setPrice(res.data.price);
        setAvailable(res.data.available);
        setDescription(res.data.description);
        setImage(res.data.image);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/api/properties/change/${id}`,
        {
          title: title,
          adress: adress,
          city: city,
          state: state,
          country: country,
          rooms: rooms,
          bathrooms: bathrooms,
          environments: environments,
          garage: garage,
          category: category,
          operation: operation,
          price: price,
          available: available,
          description: description,
          image: image,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => navigate(`/properties/${id}`))
      .catch((error) => console.log(error));
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeAdress = (e) => {
    setAdress(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeRooms = (e) => {
    setRooms(e.target.value);
  };

  const handleChangeBathrooms = (e) => {
    setBathrooms(e.target.value);
  };

  const handleChangeEnvironments = (e) => {
    setEnvironments(e.target.value);
  };

  const handleChangeGarage = (e) => {
    setGarage(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeOperation = (e) => {
    setOperation(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeAvailable = (e) => {
    setAvailable(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <>
      <section>
        <div>
          <div className="relative h-[73vh] min-[480px]:h-[80vh] md:h-[82vh] lg:h-[110vh]">
            <img
              className="absolute rounded-b-3xl h-full w-full object-cover"
              src={property.image}
              alt=""
            />
            <div className="absolute flex w-full h-full backdrop-opacity-10 backdrop-invert bg-transparent bg-gradient-to-b from-transparent to-black/90 h-full rounded-b-3xl items-center text-center lg:items-start">
              <div className="mx-[5vw] w-full text-white font-dmSans my-10 lg:mt-[40vh] xl:px-[5vw]">
                <h3 className="text-[3rem] font-semibold mb-4 leading-10 min-[480px]:text-[2.375rem] md:text-5xl lg:text-6xl">
                  Update property
                </h3>
              </div>
            </div>
          </div>
          <div className="mx-[5vw] lg:mx-[10vw] xl:mx-[17vw]">
            <div className="sticky mb-20 lg:sticky lg:top-5 lg:mb-32">
              <div
                className="w-full h-auto py-10 px-6 border shadow-card rounded-3xl bg-white
          -mt-36 min-[480px]:py-12 min-[480px]:px-10 sm:py-[3.125rem] sm:px-[2rem] lg:w-auto lg:-mt-[17rem] lg:px-16 lg:py-16 xl:-mt-[21rem]"
              >
                <form onSubmit={handleSubmit}>
                  <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="title"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Title
                        </label>
                        <div className="mt-1">
                          <input
                            id="title"
                            name="title"
                            type="text"
                            defaultValue={property.title}
                            onChange={handleChangeTitle}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="adress"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Adress
                        </label>
                        <div className="mt-1">
                          <input
                            id="adress"
                            name="adress"
                            type="text"
                            defaultValue={property.adress}
                            onChange={handleChangeAdress}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="city"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            id="city"
                            name="city"
                            type="text"
                            defaultValue={property.city}
                            onChange={handleChangeCity}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="state"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          State
                        </label>
                        <div className="mt-1">
                          <input
                            id="state"
                            name="state"
                            type="text"
                            defaultValue={property.state}
                            onChange={handleChangeState}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="country"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Country
                        </label>
                        <div className="mt-1">
                          <input
                            id="country"
                            name="country"
                            type="text"
                            defaultValue={property.country}
                            onChange={handleChangeCountry}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="rooms"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Rooms
                        </label>
                        <div className="mt-1">
                          <input
                            id="rooms"
                            name="rooms"
                            type="number"
                            defaultValue={property.rooms}
                            onChange={handleChangeRooms}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="bathrooms"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Bathrooms
                        </label>
                        <div className="mt-1">
                          <input
                            id="bathrooms"
                            name="bathrooms"
                            type="number"
                            defaultValue={property.bathrooms}
                            onChange={handleChangeBathrooms}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="environments"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Environments
                        </label>
                        <div className="mt-1">
                          <input
                            id="environments"
                            name="environments"
                            type="number"
                            defaultValue={property.environments}
                            onChange={handleChangeEnvironments}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="garage"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Garage
                        </label>
                        <div className="mt-1">
                          <input
                            id="garage"
                            name="garage"
                            type="number"
                            defaultValue={property.garage}
                            onChange={handleChangeGarage}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-[480px]:flex min-[480px]:space-x-2 md:space-x-4">
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="category"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Category
                        </label>
                        <select
                          type="text"
                          name="category"
                          id="category"
                          onChange={handleChangeCategory}
                          className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          required
                        >
                          <option value=""></option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                        </select>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="operation"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Operation
                        </label>
                        <select
                          type="text"
                          name="operation"
                          id="operation"
                          onChange={handleChangeOperation}
                          className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          required
                        >
                          <option value=""></option>
                          <option value="sale">Sale</option>
                          <option value="rent">Rent</option>
                        </select>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="price"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Price
                        </label>
                        <div className="mt-1">
                          <input
                            id="price"
                            name="price"
                            type="number"
                            defaultValue={property.price}
                            onChange={handleChangePrice}
                            required
                            className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="min-[480px]:w-full">
                      <div>
                        <label
                          htmlFor="available"
                          className="font-dmSans text-gray-700 font-semibold mb-3"
                        >
                          Availability
                        </label>
                        <select
                          type="boolean"
                          name="available"
                          id="available"
                          onChange={handleChangeAvailable}
                          className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                          required
                        >
                          <option value=""></option>
                          <option value={true}>Available</option>
                          <option value={false}>Unavailable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="min-[480px]:w-full">
                    <div>
                      <label
                        htmlFor="description"
                        className="font-dmSans text-gray-700 font-semibold mb-3"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="description"
                          name="description"
                          type="text"
                          defaultValue={property.description}
                          onChange={handleChangeDescription}
                          required
                          className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="min-[480px]:w-full">
                    <div>
                      <label
                        htmlFor="image"
                        className="font-dmSans text-gray-700 font-semibold mb-3"
                      >
                        Image
                      </label>
                      <div className="mt-1">
                        <input
                          id="image"
                          name="image"
                          type="text"
                          defaultValue={property.image}
                          onChange={handleChangeImage}
                          required
                          className="w-full py-[0.95rem] border border-gray-300 rounded-full font-dmSans text-gray-600 mb-4 shadow-button focus:ring-0 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex sm:space-x-2 sm:mt-4 sm:justify-center md:space-x-4 lg:mt-6">
                    <button
                      className="block shadow-button bg-primary w-full py-[1rem] px-6 rounded-full text-base font-dmSans text-white hover:bg-primary hover:text-white min-[480px]:w-full sm:w-auto sm:px-6 sm:py-[1.127rem] md:text-lg md:py-[1.375rem] md:px-9"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProperty;
