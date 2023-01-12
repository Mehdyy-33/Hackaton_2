import scooter1 from "../assets/scooter-1.png";
import voiture5 from "../assets/voiture-5.png";

const dataTripsUpcoming = {
  vehicles: [
    {
      id: 1,
      date: "2023-13-01",
      time: "17:00",
      localisation: "Bordeaux",
      marque: "scooter",
      modele: "125cm3",
      price: "",
      style: "Upcoming",
      image: scooter1,
    },

    {
      id: 2,
      date: "2023-08-02",
      time: "15:00",
      departure: "Bordeaux",
      destination: "Paris",
      driver: "Me",
      car: "VW Golf",
      price: "",
      style: "Upcoming",
      image: voiture5,
    },
  ],
};

export default dataTripsUpcoming;
