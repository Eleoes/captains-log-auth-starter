const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogSchema = new Schema({
    title: String,
    entry: String,
    shipIsBroken: Boolean,
}, { timestamps: true });

const Log = mongoose.model("Log", LogSchema);

module.exports = Log;