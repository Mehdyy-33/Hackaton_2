import voiture1 from "../assets/voiture-1.png";
import voiture3 from "../assets/voiture-2.png";
import voiture5 from "../assets/voiture-3.png";
import voiture8 from "../assets/voiture-5.png";
import voiture2 from "../assets/voiture-6.png";
import velo1 from "../assets/velo-1.png";
import scooter1 from "../assets/scooter-1.png";

const dataPastTrips = {
  vehicles: [
    {
      id: 1,
      date: "2021-05-01",
      time: "09:00",
      departure: "Paris",
      destination: "Lyon",
      driver: "Jean",
      car: "BMW Série 1",
      price: 26,
      style: "Past",
      image: voiture3,
    },

    {
      id: 2,
      date: "2021-08-04",
      time: "11:00",
      departure: "Paris",
      destination: "Marseille",
      driver: "Marie",
      car: "VW Golf",
      price: 45,
      style: "Past",
      image: voiture5,
    },

    {
      id: 2,
      date: "2021-09-11",
      time: "10:00",
      departure: "Paris",
      destination: "Rouen",
      driver: "Jeremie",
      car: "Peugeot 308",
      price: 35,
      style: "Past",
      image: voiture8,
    },

    {
      id: 2,
      date: "2022-02-07",
      time: "16:00",
      departure: "Paris",
      destination: "Marseille",
      driver: "Johanna",
      car: "Audi A1 Sportback",
      price: 45,
      style: "Past",
      image: voiture2,
    },

    {
      id: 2,
      date: "2022-06-04",
      time: "15:00",
      localisation: "Paris",
      marque: "scooter",
      modele: "125cm3",
      price: 32,
      style: "Past",
      image: scooter1,
    },

    {
      id: 2,
      date: "2022-07-25",
      time: "20:00",
      departure: "Paris",
      destination: "Lyon",
      driver: "Alain",
      car: "Peugeot 208",
      price: 26,
      style: "Past",
      image: voiture1,
    },

    {
      id: 2,
      date: "2022-08-11",
      time: "19:00",
      localisation: "Paris",
      car: "Trek VTT",
      price: 25,
      style: "Past",
      image: velo1,
    },
  ],
};

export default dataPastTrips;
