const { Chef, Recipe } = require('../models')




// const getRecipe = async (req, res) => {

//     let test = await Recipe.find({category: req.params.meal})

//     res.json(test)




// }

const getRecipe = async (req, res) => {

    let test = await Recipe.find({})

    res.json(test)




}

const getChef = async (req, res) => {

    let chef = await Chef.find({})
    res.json(chef)

} 

const addRecipe = async (req, res) => {

    let inp = req.body
    Recipe.create(inp)


}




module.exports ={
    getRecipe,
    getChef,
    addRecipe



}