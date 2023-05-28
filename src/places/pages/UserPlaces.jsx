import React from "react";

import PlaceList from "../Components/PlaceList";
const items = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of themost famour sky scraper of the world! ",
    imageUrl:
      "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    location: {
      lat: 48.857487,
      lang: -36.7272949,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Great Wall of China",
    description: "An ancient wall and UNESCO World Heritage site in China.",
    imageUrl:
      "https://images.chinahighlights.com/allpicture/2022/04/ef3ffd023d184272a99401d7_cut_800x500_9.jpg",
    address: "Huairou, China",
    location: {
      lat: 40.431908,
      lang: 116.568176,
    },
    creator: "u2",
  },

  {
    id: "p3",
    title: "Machu Picchu",
    description:
      "A 15th-century Inca citadel located in the Andes Mountains, Peru.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
    address: "Machu Picchu, Peru",
    location: {
      lat: -13.1631,
      lang: -72.545,
    },
    creator: "u3",
  },

  {
    id: "p4",
    title: "Taj Mahal",
    description:
      "A mausoleum in Agra, India, known for its architectural beauty.",
    imageUrl:
      "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
    address:
      "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
    location: {
      lat: 27.1751,
      lang: 78.0421,
    },
    creator: "u1",
  },
];
const UserPlaces = (props) => {
  return <PlaceList items={items} />;
};

export default UserPlaces;
