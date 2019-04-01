module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const WxSchema = new Schema({
        title:String,
        id: Number,
        url: String
    })
    
    return mongoose.model('Wx', WxSchema)
}