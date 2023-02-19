const mongoose = require('mongoose');

const connection = async () => {
    await mongoose.connect('mongodb+srv://cointab:v4iXZVN4731DuMWC@cointabcluster.zfbimtg.mongodb.net/?retryWrites=true&w=majority', (err) => {
        if(err) {
            console.log('DB disconnected');
        }
        else {
            console.log('DB connected');
        }
    })
}

module.exports = connection;