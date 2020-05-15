const express = require("express");

const router = express.Router();

const questionController = require("../controller/questionController");
const optionController=require("../controller/optionsController");


//different routes
router.post("/create", questionController.addQuestion);
router.post('/:id/options/create', optionController.addOption);
router.post('/:id/delete', questionController.delQuestion);
router.get('/:id', questionController.viewQuestion);
module.exports = router;