const treeEventDescription =
  "Trees soak up CO2 naturally, which helps to promote clean and healthy air for all of us. That’s not all though. With trees able to store CO2, they decrease the amount of CO2 in the atmosphere, while using it in the process of photosynthesis to produce sugar, provide energy, and release oxygen. Did you know that living near trees has been scientifically shown to improve our mental health? Having trees in your life is more than an aesthetic boost, they also help provide a natural boost to our cognitive and psychological health. Counsellor and psychologist, Amanda Woolveridge, believes trees can play a major role in mental health. So what are you waiting? Come join us in making our planet healthier and more sustainable.";

let data = {
  users: [
    {
      username: "susansmith",
      email: "susan@gmail.com",
      password: "pass",
      badges: [],
      attended_events: [
        { event_id: 1, status: "pending" }
      ], // {event_id, event_status: "pending" / "complete"}
      organised_events: [
      
      ], // {event_id, event_status: "pending" / "complete"}
    },
    {
      username: "johnsmith",
      email: "john@gmail.com",
      password: "pass",
      badges: [],
    },
  ],
  events: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXN8ZW58MHx8MHx8&w=1000&q=80",
      title: "Team tree planting",
      organiser: "Trillion Trees Australia", // unique username
      date: "01/10/2022",
      time: "12 PM",
      location: "Sydney NSW 2000",
      description: treeEventDescription,
      categories: ["planting"],
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
  ],
};

export default data;