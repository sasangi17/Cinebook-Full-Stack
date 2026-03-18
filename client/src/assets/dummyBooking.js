import dummyShowsData from '../assets/dummyShowsData'
const dummyBookings = [
  {
    _id: "1",
    user: { name: "AQI" },
    show: {
      _id: "1",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 118, // total = showPrice * seats
    bookedSeats: ["D1", "D2"],
    isPaid: false,
  },
  {
    _id: "2",
    user: { name: "MovieFan123" },
    show: {
      _id: "2",
      movie: dummyShowsData[1],
      showDateTime: "2025-07-02T18:00:00.000Z",
      showPrice: 75,
    },
    amount: 150,
    bookedSeats: ["A1", "A2"],
    isPaid: true,
  },
  {
    _id: "3",
    user: { name: "CinemaLover" },
    show: {
      _id: "3",
      movie: dummyShowsData[2],
      showDateTime: "2025-11-07T20:30:00.000Z",
      showPrice: 65,
    },
    amount: 195,
    bookedSeats: ["B1", "B2", "B3"],
    isPaid: false,
  },
  {
    _id: "4",
    user: { name: "AnnaFan" },
    show: {
      _id: "4",
      movie: dummyShowsData[3],
      showDateTime: "2025-10-16T15:45:00.000Z",
      showPrice: 80,
    },
    amount: 160,
    bookedSeats: ["C1", "C2"],
    isPaid: true,
  },
];

export default dummyBookings;