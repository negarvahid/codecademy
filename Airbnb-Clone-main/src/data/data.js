import ImageOne from "../img/one.jpg";
import ImageTwo from "../img/two.jpg";
import ImageThree from "../img/three.jpg";

export default [
  {
    id: 1,
    title: "Luxury Beachfront Villa in Bali",
    description:
      "Escape to paradise in this stunning villa situated right on the beach in Bali. Enjoy breathtaking ocean views, private pool, and top-notch amenities including a gourmet kitchen and spacious living areas.",
    price: 500,
    coverImg: ImageOne,
    stats: {
      rating: 4.9,
      reviewCount: 18,
    },
    location: "Bali, Indonesia",
    openSpots: 2,
  },
  {
    id: 2,
    title: "Private Chalet in the Swiss Alps",
    description:
      "Experience the ultimate mountain getaway in this luxurious chalet nestled in the heart of the Swiss Alps. Enjoy stunning views, cozy fireplace, and all the comforts of home in this picturesque setting.",
    price: 350,
    coverImg: ImageTwo,
    stats: {
      rating: 4.7,
      reviewCount: 12,
    },
    location: "Swiss Alps, Switzerland",
    openSpots: 4,
  },
  {
    id: 3,
    title: "Safari Adventure in Kenya",
    description:
      "Embark on the adventure of a lifetime with this incredible safari experience in Kenya. Spot the Big Five and other exotic wildlife, stay in a luxurious tented camp, and enjoy guided tours led by expert local guides.",
    price: 800,
    coverImg: ImageThree,
    stats: {
      rating: 4.8,
      reviewCount: 7,
    },
    location: "Masai Mara, Kenya",
    openSpots: 6,
  },
];
