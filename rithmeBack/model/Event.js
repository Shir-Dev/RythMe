const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema(
    {
        artist: [{
                    name: {type: String, required:true},
                    tour: String,
                    description: String
                }],
        description: String,
        dates: [{
                    date: Date,
                    timeZone: String,
                    hour: Date,
                    required: true
                }],
        genre: [{
                    type: {type: String}
                }],
        priceRange: [{
                        zone: String,
                        currency: String,
                        min: Number,
                        max: Number
                    }],
        location: {
            id: String,
            name: String,
            images: [{
                        url: String,
                        width: Number,
                        height: Number,
                        attribution: String
                    }],
            postalCode: String,
            city: { name: String },
            state: { name: String , stateCode: String},
            country: {name: String, countryCode: String},
            address: String,
            locationCoord: {longitude: String, latitude: String}
        },
        images: [{type: String}],
        tickets: { sold: Number, available: Number}
    }
);

module.exports = mongoose.model('Event', EventSchema);