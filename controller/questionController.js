const mongoose = require('mongoose');

const Question=require('../models/question');
const Option=require('../models/option');

//addQuestion Controller
module.exports.addQuestion = function(req,res){
    // Add Question 
    Question.create(req.body, function(err, question){
        if(err){
            console.error(err);
            return  res.redirect('/');
        }
        return  res.json({question, data:{"message": "Question Created Sucessfully!"}});
    });
};


//view question 
module.exports.viewQuestion= async function(req,res){

    let question= await Question.findById(req.params.id)
    .populate('options')

    return res.json({question:question});
}

//Delete a question 
module.exports.delQuestion = async function(req,res){
    try {
        let question= await Question.findById(req.params.id);
        question.remove();
        await Option.deleteMany({question:req.params.id});
        
        return res.json({
            message: "Question and Options Deleted !",
        });
    } catch (error) {
        return res.json({
            message: "Internal Server Error!",
        });
    }
};