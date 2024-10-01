import mongoose from 'mongoose'

const URI = 'mongodb+srv://alenkabondarenko652:tfpu7MHl7KIDRoSk@cluster0.hfsh6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.error(err)
});
