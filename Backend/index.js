const express = require('express');
const cors = require('cors');
const connection = require('./configs/database');
const userModel = require('./models/userModel');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const AddedData = async (result, res) => {
    try {
        await userModel.insertMany(result.results);
        res.status(201).send({
            status: 'success',
            message: 'Users added on database successfully'
        })
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Users are not added to database'
        })
    }
}

app.get('/', (req, res) => {
    res.status(200).send("In home");
})

app.post('/fetchUsers', async (req, res) => {
    try {
        fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(result => {
            AddedData(result, res);
        })
        .catch(err => console.log(err, 'error'))
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
})

app.delete('/deleteUsers', async (req, res) => {
    try {
        await userModel.deleteMany();
        res.status(200).send({
            status: 'success',
            message: 'Users are deleted successfully'
        })
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
})

app.get('/userdetails', async (req, res) => {
    try {
        const {page} = req.query;
        const totalUsers = await userModel.find().count();
        const users = await userModel.find().skip((page-1)*10).limit(10);
        res.status(200).send({
            status: 'success',
            message: 'Users data',
            data: users,
            totalUsers
        })
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
})


connection();
app.listen(port, () => {
    try {
        console.log(`listening on port ${port}`);
    } catch (error) {
        console.log('Not listening');
    }
});