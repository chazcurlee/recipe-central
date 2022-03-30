const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static(`${__dirname}/client/build`))


const recipesController = require('./controllers/recipesController');
const { Recipe, Chef } = require('./models')
// app.post('/recipes', recipesController.getBreakfast)
// app.get('/:meal', recipesController.getBreakfast)

app.get('/recipe', recipesController.getRecipe)
app.get('/chef', recipesController.getChef)
app.post('/recipe', recipesController.addRecipe)
// app.get('/recipes', async (req, res) => {

//     let test = await Recipe.find({category: "Breakfast"})
//     res.json(test)

// })

app.post('/recipes', recipesController.addRecipe)




app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })
app.listen(PORT, () => console.log(`Listening on port ${PORT}` ))
