const {Schema} = require('mongoose')

const Chef = new Schema(

    {

        name: {type: String, required: true},
        history: {type: String, required: true},
        img: {type: String, required: true},
        recipes: [{ type: Schema.Types.ObjectId, ref: 'recipes', required: false}, ],

        

    }, 
    {timestamps: true}

)

module.exports = Chef