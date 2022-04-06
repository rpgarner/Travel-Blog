const { Router } = require("express");
const controllers = require("../controllers/index");
const router = Router();

router.get('/', (req,res) => res.send('landing page'))

// router.get("/posts", controllers.getPosts);

// router.get("/posts/:id", controllers.getComments);



module.exports = router;