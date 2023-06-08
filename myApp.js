require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {"useUnifiedTopology": true, "useNewUrlParser": true});

let Person;

const personSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    required: true,
  },
  favoriteFoods: [String],
});

Person = mongoose.model("Person", personSchema); //create a model = constructor

const createAndSavePerson = (done) => {
  //document - instance of the model
  let person = Person({
    name: "test",
    age: 10,
    favoriteFoods: ["test1", "test2"],
  });

  person.save(function(err, data){
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfPeople = [
  {
    name: "test",
    age: 10,
    favoriteFoods: ["test1", "test2"],
  },
  {
    name: "test1",
    age: 12,
    favoriteFoods: ["test3", "test4"],
  },
  {
    name: "test2",
    age: 14,
    favoriteFoods: ["test5", "test6"],
  }
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

var personName = "test"

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data){
    if (err) return console.error(err);
    done(null, data)
  })
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
