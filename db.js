const treeEventDescription =
  "Trees soak up CO2 naturally, which helps to promote clean and healthy air for all of us. That’s not all though. With trees able to store CO2, they decrease the amount of CO2 in the atmosphere, while using it in the process of photosynthesis to produce sugar, provide energy, and release oxygen. Did you know that living near trees has been scientifically shown to improve our mental health? Having trees in your life is more than an aesthetic boost, they also help provide a natural boost to our cognitive and psychological health. Counsellor and psychologist, Amanda Woolveridge, believes trees can play a major role in mental health. So what are you waiting? Come join us in making our planet healthier and more sustainable.";

let data = {
  users: [
    {
      username: "susansmith",
      email: "susan@gmail.com",
      password: "pass",
      badges: [],
      attended_events: [{ event_id: 1, status: "pending" }], // {event_id, event_status: "pending" / "complete"}
      organised_events: [], // {event_id, event_status: "pending" / "complete"}
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
        "https://t4.ftcdn.net/jpg/01/67/31/95/360_F_167319527_LzetWvkmv1ApEyGQbPrB6dBCPYNFwdh7.jpg",
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
          comment:
            "Great event! Been with this team on three events so far and they're the best!",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://cdn.britannica.com/42/91642-050-332E5C66/Keukenhof-Gardens-Lisse-Netherlands.jpg",
      title: "Charlie’s Garden Meetup",
      organiser: "Charlie’s Garden",
      date: "10/10/2022",
      time: "10:30 AM",
      location: "Sydney NSW 2000",
      description: treeEventDescription,
      categories: ["planting"],
      comments: [
        {
          poster: "johnsmith",
          posterImg:
            "https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg",
          rating: 5,
          comment:
            "Great event! Been with this team on three events so far and they're the best!",
        },
      ],
    },
    {
      id: 3,
      image:
        "https://assets.weforum.org/article/image/lllYzG60bDfxJ6CRQUI5FTjkqI7-acWR4vam2s901IU.jpg",
      title: "Tree Guardians Meeting",
      organiser: "Tree Guardians",
      date: "16/10/2022",
      time: "1:00 PM",
      location: "Sydney NSW 2000",
      description: treeEventDescription,
      categories: ["planting", "education"],
      comments: [
        {
          poster: "johnsmith",
          posterImg:
            "https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg",
          rating: 5,
          comment:
            "Great event! Been with this team on three events so far and they're the best!",
        },
      ],
    },
    {
      id: 4,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cottage-garden-ideas-paving-1618238091.jpg",
      title: "Sydney Garden Meetup",
      organiser: "Sydney Garden",
      date: "24/10/2022",
      time: "1:00 PM",
      location: "Sydney NSW 2000",
      description: treeEventDescription,
      categories: ["planting"],
      comments: [
        {
          poster: "johnsmith",
          posterImg:
            "https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg",
          rating: 5,
          comment:
            "Great event! Been with this team on three events so far and they're the best!",
        },
      ],
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/child-hands-planting-young-tree-black-soil-as-save-world-concept_7186-938.jpg?w=2000",
      title: "Gardening Incursion",
      organiser: "Sunshine Primary School",
      date: "12/11/2022",
      time: "9:00 AM",
      location: "Sydney NSW 2000",
      description: treeEventDescription,
      categories: ["planting", "education"],
      comments: [
        {
          poster: "johnsmith",
          posterImg:
            "https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg",
          rating: 5,
          comment:
            "Great event! Been with this team on three events so far and they're the best!",
        },
      ],
    },
    {
      id: 6,
      image:
        "https://www.activesustainability.com/media/816156/desarrollo-sostenible.jpg",
      title: "Annual Meetup",
      organiser: "Sustainability Association",
      date: "15/11/2022",
      time: "5:00 PM",
      location: "Sydney NSW 2000",
      description: treeEventDescription,
      categories: ["planting", "education"],
      comments: [
        {
          poster: "johnsmith",
          posterImg:
            "https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg",
          rating: 5,
          comment:
            "Great event! Been with this team on three events so far and they're the best!",
        },
      ],
    },
  ],
};

export default data;