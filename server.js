const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


const recipesController = require('./controllers/recipesController');
const { Recipe, Chef } = require('./models')
// app.post('/recipes', recipesController.getBreakfast)
app.get('/:meal', recipesController.getBreakfast)
app.get('/breakfast', recipesController.getBreakfast)
app.get('/lunch', recipesController.getLunch)
app.get('/dinner', recipesController.getDinner)
app.get('/snack', recipesController.getSnack)
// app.get('/recipes', async (req, res) => {

//     let test = await Recipe.find({category: "Breakfast"})
//     res.json(test)

// })

app.post('/recipes', (req, res) => {

    Chef.create(req.body)


})





app.listen(PORT, () => console.log(`Listening on port ${PORT}` ))
