const { Chef, Recipe } = require('../models')




// const getRecipe = async (req, res) => {

//     let test = await Recipe.find({category: req.params.meal})

//     res.json(test)




// }

const getBreakfast = async (req, res) => {

    let test = await Recipe.find({category: "Breakfast"})

    res.json(test)




}

const getLunch = async (req, res) => {

    let lunch = await Recipe.find({category: "Lunch"})
    res.json(lunch)



}

const getDinner = async (req, res) => {

    let dinner = await Recipe.find({category: "Dinner"})
    res.json(dinner)



}

const getSnack = async (req, res) => {

    let snack = await Recipe.find({category: "Snack"})
    res.json(snack)



}

const addRecipe = async (req, res) => {

    let inp = req.body
    Recipe.create(inp)


}




module.exports ={
    getBreakfast,
    getLunch,
    getDinner,
    getSnack,
    addRecipe



}