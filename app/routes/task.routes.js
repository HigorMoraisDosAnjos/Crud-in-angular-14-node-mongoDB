module.exports = app => {
  const tasks = require("../controllers/task.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tasks.create);

  // Retrieve all Tutorials
  router.get("/", tasks.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tasks.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tasks.findOne);

  // Update a Tutorial with id
  router.put("/:id", tasks.update);

  // Delete a Tutorial with id
  router.delete("/:id", tasks.delete);

  // Create a new Tutorial
  router.delete("/", tasks.deleteAll);

  app.use("/api/tasks", router);
};
