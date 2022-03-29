const {Schema} = require('mongoose')

const Recipe = new Schema(

    {

        name: {type: String, required: true},
        description: {type: String, required: true},
        ingredients: {type: String, required: true},
        steps: {type: String, required: true},
        category: {type: String, required: true},
        chef: [{ type: Schema.Types.ObjectId, ref: 'chefs', required: false}, ],
        img: {type: String, required: true},
        

        

    }, 
    {timestamps: true}

)

module.exports = Recipe