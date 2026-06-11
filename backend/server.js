import cors from "cors";
import express, { response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5200;

let users = [
    {id: 1, name: 'John Doe', email: 'john@example.com'},
    {id: 2, name: 'Jane Smith', email: 'jane@example.com'},
    {id: 3, name: 'Harly Quinn', email: 'harly@example.com'}
];

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message: 'User not found'});
    res.json(user);
});

app.post('/api/users', (req, res) => {

    const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    };

    users.forEach((user) => {
        if(user.id === newUser.id) return res.status(409).json({message: "User with id already exists"});
    })

    users.push(newUser);
    res.status(201).json({message: "User Created", users});
});

app.post('/api/users/:id', (req, res) => {

    users.find(u => { 
        if(u.id === parseInt(req.params.id)) {
            u.name = req.body.name;
            u.email = req.body.email;

            return res.status(200).json({message: 'User updated'});
        }else {
            return res.status(404).json({message: 'User not found'})
        }            
    });
});

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});