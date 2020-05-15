const express = require("express");

const router = express.Router();

const optionsController = require("../controller/optionsController");



//different routes
router.post('/:id/delete', optionsController.deleteOption);
router.post('/:id/add_vote', optionsController.add_Vote);

module.exports = router;
