const mongoose = require('mongoose');


const menuSchema = new mongoose.Schema({
    menuName: {
        type: String,
    },

    toolsName: []
},
{ timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);