const { model } = require('mongoose')
const RecipeSchema = require('./recipe')
const ChefSchema = require('./chef')


const Chef = model('chefs', ChefSchema)
const Recipe = model('recipes', RecipeSchema)

module.exports = {
    Chef,
    Recipe
}