const {Schema} = require('mongoose')

const Recipe = new Schema(

    {

        name: {type: String, },
        description: {type: String, },
        ingredients: {type: String, },
        steps: {type: String, },
        chef: [{ type: Schema.Types.ObjectId, ref: 'chefs', required: false}, ],
        img: {type: String, },
        

        

    }, 
    {timestamps: true}

)

module.exports = Recipe