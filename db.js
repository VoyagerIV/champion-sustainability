const treeEventDescription =
  "Trees soak up CO2 naturally, which helps to promote clean and healthy air for all of us. That’s not all though. With trees able to store CO2, they decrease the amount of CO2 in the atmosphere, while using it in the process of photosynthesis to produce sugar, provide energy, and release oxygen. Did you know that living near trees has been scientifically shown to improve our mental health? Having trees in your life is more than an aesthetic boost, they also help provide a natural boost to our cognitive and psychological health. Counsellor and psychologist, Amanda Woolveridge, believes trees can play a major role in mental health. So what are you waiting? Come join us in making our planet healthier and more sustainable.";


// event data for current user
let data = {
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
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: false,
        complete: false,
      },
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
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: false,
        complete: false,
      },
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
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: false,
        complete: false,
      },
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
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: false,
        complete: false,
      },
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
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: false,
        complete: false,
      },
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
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: false,
        complete: false,
      },
    },
    {
      id: 7,
      image:
        "https://worldslargestlesson.globalgoals.org/wp-content/uploads/2020/08/Turtle-trapped-in-plastic-scaled-e1607518143472-355x300.jpg",
      title: "Clean the Tasman Sea",
      organiser: "Sustainability Association",
      date: "11/11/2022",
      time: "10:00 AM",
      location: "Bondi Beach NSW",
      description: treeEventDescription,
      categories: ["plastic pollution"],
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: true,
        complete: false,
      },
    },
    {
      id: 8,
      image:
        "https://lp-cms-production.imgix.net/image_browser/GettyImages-1096103184.jpg?auto=format&q=40&w=870",
      title: "Beach Cleanup",
      organiser: "Sustainability Association",
      date: "11/04/2022",
      time: "10:00 AM",
      location: "Manly Beach NSW",
      description: treeEventDescription,
      categories: ["plastic pollution"],
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: true,
        complete: false,
      },
    },
    {
      id: 9,
      image:
        "https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg",
      title: "Planting Trees",
      organiser: "Parramatta Council",
      date: "11/01/2021",
      time: "10:00 AM",
      location: "Parramatta NSW 2150",
      description: treeEventDescription,
      categories: ["planting"],
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: true,
        complete: true,
      },
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1496963729609-7d408fa580b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amlyYWZmZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      title: "Tarango Zoo Volunteer",
      organiser: "Parramatta Council",
      date: "11/03/2019",
      time: "3:00 PM",
      location: "Mosman NSW 2088",
      description: treeEventDescription,
      categories: ["education", "animal"],
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: false,
        joined: true,
        complete: true,
      },
    },
    {
      id: 11,
      image:
        "https://www.aussieark.org.au/wp-content/uploads/2018/11/0V2A0510-scaled.jpg",
      title: "Sanctuary Maintenance",
      organiser: "AWC",
      date: "17/11/2022",
      time: "3:00 PM",
      location: "Sydney NSW 2000",
      description: treeEventDescription,
      categories: ["animal"],
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: true,
        joined: true,
        complete: false,
      },
    },
    {
      id: 11,
      image:
        "https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2018/05/03161812/Charry-blossoms-hero.jpg",
      title: "Cherry Blossom ",
      organiser: "Susan Smith",
      date: "13/4/2022",
      time: "3:00 PM",
      location: "Sydney NSW 2000",
      description: treeEventDescription,
      categories: ["planting"],
      capacity: 50,
      attendees: 25,
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
      status: {
        organised: true,
        joined: true,
        complete: true,
      },
    },
  ],
};

export default data;