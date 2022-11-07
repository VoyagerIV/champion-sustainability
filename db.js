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
    title: "Event title",
    organiser: "susamsmith", // unique username
    date: "Event date",
    time: "Event time",
    location: "Event location",
    description: "Event description",
    image: "Image url",
    categories: ["category1", "category2"],
    comments: [
      {
        poster: "johnsmith",
        rating: 1, // rating out of 5, 0 for no rating?
        comment: "Comment text",
      },
    ],
  },
];