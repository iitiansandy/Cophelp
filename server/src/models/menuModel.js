const mongoose = require('mongoose');


const menuSchema = new mongoose.Schema({
    menuName: {
        type: String,
    },

    toolsName: [{
        name: {
            type: String
        },

        url: {
            type: String
        }
    }]
},
{ timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);