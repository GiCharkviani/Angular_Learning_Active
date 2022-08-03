const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://gio:charkviani1616@cluster0.hkl9m.mongodb.net/ngrxlearning?retryWrites=true&w=majority"
).then(()=>{
  console.log('Connected to database!')
}).catch(()=>{
  console.log("Connection failed!")
})

const Person = require("./models/person");
const Country = require("./models/country");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

//methods

// persons
app.get("/api/persons", async (req, res, next) => {
  try {
    const persons = await Person.find();
    if (persons) {
      return res.send({
        message: "successfull",
        persons: persons,
      });
    }

    res.status(404).send({ error: "Not found!" });
  } catch (e) {
    res.status(500).send({ error: "Server Error!" });
  }
});

app.post('/api/persons', async (req, res, next) => {
  try {
    const person = new Person({name: req.body.name, surname: req.body.surname, age: req.body.age});

    const personSaved = await person.save();

    if(!personSaved) {
      return res.status(400).send({error: "Not saved!"})
    }

    res.send({message: "User added syccessfully", person: personSaved})
  } catch (e) {
    res.status(500).send({error: "Server error!"})
  }
})

app.delete("/api/persons/:id", async (req, res, next) => {
  try {
    const personDeleted = await Person.findByIdAndDelete(req.params.id)

    if(!personDeleted) {
      return res.status(404).send({error: "Error, Person not found!"})
    }

    res.send({message: "User deleted successfully", deletedUser: personDeleted})
  } catch (error) {
    res.status(500).send({error: "Server error"})
  }
})

app.patch("/api/persons/:id", async (req, res) => {
  try {
    const updatedUser = req.body;

    const person = await Person.findByIdAndUpdate(req.params.id, updatedUser)

    if(!person) {
      res.status(404).send({error: "Person not found!"})
    }

    res.send(person)
  } catch (error) {
    res.status(500).send({error: "Server Error!"})
  }
})

//countries

app.get("/api/countries", async (req, res, next) => {
  try {
    const countries = await Country.find();
    if (countries) {
      return res.send({
        message: "successfull",
        countries: countries,
      });
    }

    res.status(404).send({ error: "Not found!" });
  } catch (e) {
    res.status(500).send({ error: "Server Error!" });
  }
});

app.post('/api/countries', async (req, res, next) => {
  try {
    const country = new Country({name: req.body.name, capital: req.body.capital});

    const countrySaved = await country.save();

    if(!countrySaved) {
      return res.status(400).send({error: "Not saved!"})
    }

    res.send({message: "User added syccessfully", country: countrySaved})
  } catch (e) {
    res.status(500).send({error: "Server error!"})
  }
})

app.delete("/api/countries/:id", async (req, res, next) => {
  try {
    const countryDeleted = await Country.findByIdAndDelete(req.params.id)

    if(!countryDeleted) {
      return res.status(404).send({error: "Error, country not found!"})
    }

    res.send({message: "User deleted successfully", deletedCountry: countryDeleted})
  } catch (error) {
    res.status(500).send({error: "Server error"})
  }
})

app.patch("/api/countries/:id", async (req, res) => {
  try {
    const updatedCountry = req.body;

    const country = await Country.findByIdAndUpdate(req.params.id, updatedCountry)

    if(!country) {
      res.status(404).send({error: "country not found!"})
    }

    res.send(country)
  } catch (error) {
    res.status(500).send({error: "Server Error!"})
  }
})


module.exports = app;
