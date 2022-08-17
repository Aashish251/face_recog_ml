const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: '123',
      name: 'Aashish',
      email: 'ashish@gmail.com',
      password: 'ashish',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'John',
      email: 'john@gmail.com',
      password: 'john',
      entries: 0,
      joined: new Date()
    }
  ]
}

app.get('/', (req, res) => {
  res.send("Responding to localhost:3000");
})

app.post('/signin', (req, res) => {
  // console.log(req.body);
  let found = false;
  for(let i=0; i<database.users.length; i++){
    if(req.body.email === database.users[i].email && req.body.password === database.users[i].password){
      found = true;
      res.json(database.users[i]);
    }  
  }
  if(!found) {
    res.status(400).json('error logging in');
  }
})

app.post('/register', (req, res) => {
  const {name, email, password} = req.body;
  const newUser = {
    id: '201',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  }
  database.users.push(newUser);
  console.log(newUser);
  res.json(newUser);
})

app.get('/profile/:id', (req, res) => {
  const {id} = req.params;
  let found = false;
  database.users.forEach(user => {
    if(user.id === id){
      found = true;
      return res.json(user);
    }
  })
  if(!found){
    res.status(400).json('not found');
  }
})

app.put('/image', (req, res) => {
  const {id} = req.body;
  let found = false;
  database.users.forEach(user => {
    // console.log(user.id === id, user.id, id)
    if(user.id === id){
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  })
  if(!found){
    res.status(400).json('not found');
  }
})

app.listen(3000, () => {
  console.log("Server is listening at http://localhost:3000");
})