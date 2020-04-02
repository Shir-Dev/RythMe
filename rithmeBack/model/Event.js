const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema(
    {
        name: {type: String, required:true},
        artist: {
                    name: {type: String, required:true},
                    description: String
                },
        dates: {
                    dateTime: Date
                },
        genre: {    
                    id: {type: String},
                    name: {type: String}
                },
        priceRange: {
                        currency: String,
                        min: Number,
                        max: Number
                    },
        location: {
            name: String,
            postalCode: String,
            city: String,
            state: String,
            country: {name: String, countryCode: String},
            address: String,
            locationCoord: {longitude: Number, latitude: Number}
        },
        image: {type: String},
        tickets: { sold: Number, available: Number}
    }
);

module.exports = mongoose.model('Event', EventSchema);