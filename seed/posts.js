const db = require("../db");
const { Post } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// CREATED GAME SEED TO ADD TO GAME COLLECTION /////////////////////
const main = async () => {
  //add futere game here to be seeded
  const posts = [
    {
      title: "Brazil",
      description: "This was a trip to del rio ",
      image: "https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg",
    },
    {
        title: "Chile",
        description: "visited santiago and the lake region ",
        image: "https://hips.hearstapps.com/hbu.h-cdn.co/assets/17/15/beach-town-color-valparaiso-chile.jpg",
      },
      {
        title: "Mexico",
        description: "trip to the tropical paradise of peurto vallierta",
        image: "https://visitpuertovallarta.com/uploads/static/visit-puerto-vallarta.jpg",
      },
  ];

  await Post.insertMany(posts);
  console.log("Created some posts");
};
const run = async () => {
  await main();
  db.close();
};

run();
