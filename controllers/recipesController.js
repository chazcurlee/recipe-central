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

const getSpecChef = async (req, res) => {

    console.log(req.params.id)
    let chef = await Chef.findById(req.params.id)
    res.json(chef)

}

const addRecipe = async (req, res) => {

    
    let inp = req.body
    Recipe.create(inp)


}

const getDetailedRecipe = async (req, res) => {


    let details = await Recipe.findById(req.params.id)
    
    res.json(details)

}

const deleteRecipe = async (req, res) => {

    
        await Recipe.findByIdAndDelete(req.params.id)
        console.log(`Recipe deleted. ID: ${req.params.id}`)

    
    

}




module.exports ={
    getRecipe,
    getChef,
    addRecipe,
    getDetailedRecipe,
    deleteRecipe,
    getSpecChef



}