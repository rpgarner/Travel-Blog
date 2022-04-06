const db = require("../db");
const { Comment } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// Reviews seed /////////////////////
const main = async () => {
   
  const comments = [
    {
        name: "",
        comment: "",
        rating: "",
        recomendations: "",
    },
    {
        name: "",
        comment: "",
        rating: "",
        recomendations: "",
    },
    {
        name: "",
        comment: "",
        rating: "",
        recomendations: "",
    }
  ];

  await Comment.insertMany(comments);
  console.log("Created some comments");
};
const run = async () => {
  await main();
  db.close();
};

run();