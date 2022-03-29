const { Chef, Recipe } = require('../models')




const getBreakfast = async (req, res) => {

    let test = await Recipe.find({category: "Breakfast"})
    res.json(test)




}

const getLunch = async (req, res) => {

    let lunch = await Recipe.find({category:"Lunch"})
    response.json(lunch)



}

const getDinner = async (req, res) => {

    let dinner = await Recipe.find({category:"Dinner"})
    response.json(dinner)



}

const getSnack = async (req, res) => {

    let snack = await Recipe.find({category:"Snack"})
    response.json(snack)



}




module.exports ={
    getBreakfast,
    getLunch,
    getDinner,
    getSnack



}