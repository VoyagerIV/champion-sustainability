export let users = [
  {
    username: "susansmith",
    email: "susan@gmail.com",
    password: "pass",
    badges: []
  },
  {
    username: "johnsmith",
    email: "john@gmail.com",
    password: "pass",
    badges: []
  },
];

export let events = [
  {
    id: 1,
    image: "Image url",
    title: "Event title",
    organiser: "susamsmith", // unique username
    date: "Event date",
    time: "Event time",
    location: "Event location",
    description: "Event description",
    categories: ["category1", "category2"],
    comments: [
      {
        poster: "johnsmith",
        posterImg:
          "https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg",
        rating: 5, // rating out of 5, 0 for no rating?
        comment: "Comment text",
      },
    ],
  },
];