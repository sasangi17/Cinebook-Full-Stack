const dummyShowsData = [
  {
    _id: "1",
    title: "Avatar: Fire and Ash",
    backdrop_path: "/Avatar Fire and Ash.jpeg",
    release_date: "2025-06-06",
    genres: [{ name: "Action" }, { name: "Thriller" }],
    runtime: "2h 5m",
    vote_average: 8.2,
    vote_count: 2000, 
    overview:
      "Avatar: Fire and Ash is an action-thriller released on June 6, 2025. The film follows a highly trained assassin seeking revenge for the death of her family, navigating dangerous enemies and high-stakes missions in a suspenseful and thrilling journey.",
    cast: [
      { name: "Sam Worthington", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/mflBcox36s9ZPbsZPVOuhf6axaJ.jpg" },
      { name: "Zoe Saldaña", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/vQBwmsSOAd0JDaEcZ5p43J9xzsY.jpg" },
      { name: "Stephen Lang", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/gnO5VfkDgA2fsHweD0622LUY3Hu.jpg" },
      { name: "Kate Winslet", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/e3tdop3WhseRnn8KwMVLAV25Ybv.jpg" },
      { name: "Britain Dalton", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/asX3eJr9oHNs1ZgRYGwsZRAntqS.jpg" },
      { name: "Jack Champion", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/8PXFKzhjFJ0oYP60Bj1kA44XBjY.jpg" },
      { name: "Trinity Bliss", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/a3WQPKhMHOZ5TjdnqStTfquzVB7.jpg" },
    ]
  },
  {
    _id: "2",
    title: "Ballerina",
    backdrop_path: "/Ballerina.jpeg",
    release_date: "2025-06-06",
    genres: [{ name: "Action" }, { name: "Thriller" }],
    runtime: "2h 5m",
    vote_average: 8.2,
    vote_count: 1100, 
    overview:
      "Ballerina is an action-thriller movie released on June 6, 2025. The film follows a highly trained assassin seeking revenge for the death of her family.",
    cast: [
      { name: "Ana de Armas", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/tkBWBvcLTihUcVf6iwbMQTFqEEv.jpg" },
      { name: "Keanu Reeves", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/rRdru6REr9i3WIHv2mntpcgxnoY.jpg" },
      { name: "Ian McShane", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/qh9RTLbnr128TZLdGuXwUH9mdBM.jpg" },
      { name: "Lance Reddick", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/22mVtEXZbpt0J7S0LhIhdkfRrZV.jpg" },
      { name: "Anjelica Huston", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/6hnYeHa7Rc1w1MmQ3JsLSIb7yCX.jpg" },
    ]
  },
  {
    _id: "3",
    title: "Jurassic Park Rebirth",
    backdrop_path: "/Jurassic Park_ Rebirth.jpeg",
    release_date: "2025-07-02",
    genres: [{ name: "Adventure" }, { name: "Sci-Fi" }],
    runtime: "2h 14m",
    vote_average: 7.8,
    vote_count: 1120, 
    overview:
      "Jurassic Park Rebirth is an adventure sci-fi movie released on July 2, 2025.",
    cast: [
      { name: "Scarlett Johansson", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/mjReG6rR7NPMEIWb1T4YWtV11ty.jpg" },
      { name: "Jonathan Bailey", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/i9m6JsYKQot3kbMMFsvbEuFarvq.jpg" },
      { name: "Ed Skrein", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/btJvbQbWf3ciYM4SM5tMWSJEkXX.jpg" },
      { name: "Luna Blaise", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/y4GIzipFLyC90WcA27XRrokggYR.jpg" },
      { name: "David Iacono", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/3QTinnl70cvU3a22fLKCLk4Wpbx.jpg" },
    ]
  },
  {
    _id: "4",
    title: "Nuremberg",
    backdrop_path: "/Nuremberg.jpeg",
    release_date: "2025-11-07",
    genres: [{ name: "Drama" }],
    runtime: "2h 28m",
    vote_average: 7.5,
    vote_count: 1000, 
    overview:
      "Nuremberg is a drama movie released on November 7, 2025 about the historic trials.",
    cast: [
      { name: "Russell Crowe", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/uxiXuVH4vNWrKlJMVVPG1sxAJFe.jpg" },
      { name: "Rami Malek", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/zvBCjFmedqXRqa45jlLf6vBd9Nt.jpg" },
      { name: "Michael Shannon", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/6mMczfjM8CiS1WuBOgo5Xom1TcR.jpg" },
      { name: "Leo Woodall", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/aurLg09FobKlhY3fNLg2xyiNBaZ.jpg" },
      { name: "Colin Hanks", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/zi7f3V39eyEeSaxvYAq8zaXMjok.jpg" },
    ]
  },
  {
    _id: "5",
    title: "Our Fault (Culpa Nuestra)",
    backdrop_path: "/Our Fault.jpeg",
    release_date: "2025-10-16",
    genres: [{ name: "Romance" }, { name: "Drama" }],
    runtime: "1h 53m",
    vote_average: 8.0,
    vote_count: 1500, 
    overview:
      "Our Fault (Culpa Nuestra) is a romance drama that follows two young lovers navigating the highs and lows of love, family pressures, and personal growth.",
    cast: [
      { name: "Nicole Wallace", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/xlvq6OYCN6yQef4fpJQtwVyQxqr.jpg" },
      { name: "Gabriel Guevara", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/pviRYKEEmoPUfLYwP1VHJ6LQcRg.jpg" },
      { name: "Gabriela Andrada", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/h8cAdDqbDK2ayGIuxQQdNCzyCsb.jpg" },
      { name: "Fran Morcillo", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/ovPzGuRvMQhB4OrC6lfxlEGLewD.jpg" },
      { name: "Víctor Varona", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/lcwFAjHjhJXkxf59TXGSjGGOlLj.jpg" },
      { name: "Eva Ruiz", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/bcu0nmQvhxwTzh4csc4kuxJsQee.jpg" },
      { name: "Javier Morgade", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/hcDV10bTZlm1rTi0NRhoGIpdicw.jpg" },
    ]
  },
  {
    _id: "6",
    title: "My Oxford Year",
    backdrop_path: "/My Oxford Year.jpeg",
    release_date: "2025-08-01",
    genres: [{ name: "Romance" }, { name: "Comedy" }],
    runtime: "1h 53m",
    vote_average: 5.9,
    vote_count: 1000, 
    overview:
      "My Oxford Year is a coming-of-age drama that follows a young student navigating love, friendship, and self-discovery.",
    cast: [
      { name: "Sofia Carson", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/aQudxuIAd2UEGQD1YWsdrHH11Kc.jpg" },
      { name: "Corey Mylchreest", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/nP7HMr5VLNLbHqKj0Sn0g9rIL4H.jpg" },
      { name: "Poppy Gilbert", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/g3CuUHqLiKnSN0T47m8VTOjmzOD.jpg" },
      { name: "Dougray Scott", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/1fBd7n7s1Furk4kXN4YIcOD6mZb.jpg" },
      { name: "Harry Trevaldwyn", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/uYHekOiCHZoob1tW11vTceplA2e.jpg" },
      { name: "Nikhil Parmar", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/zlOjzGTlmYghKWFPzROlyiZ41l6.jpg" },
      { name: "Hugh Coles", profile_path: "https://media.themoviedb.org/t/p/w600_and_h900_face/hHIJSp0SPrCQ9F3Q8IQaz6jO2ZA.jpg" },
    ]
  }
];

export default dummyShowsData;