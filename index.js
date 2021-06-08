const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const contentRoutes = require('./routes/contentRoutes');
const messageRoutes = require('./routes/messageRoutes');
const mongoUri = "mongodb+srv://yigit:1234@cluster0.yonq0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(contentRoutes);
app.use(messageRoutes);

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});




mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
})


app.get('/', (req, res) => {
    res.send("GET, POST : /products || GET: /products/:id   ||   GET,POST: /orders     ||    GET: /orders/:id  || PUT : /orders/:id/success")


})



app.listen(process.env.PORT || 5000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});