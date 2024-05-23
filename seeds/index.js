const mongoose = require('mongoose');
const Animal = require('../models/animal');

mongoose.connect('mongodb://127.0.0.1:27017/animal');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDb = async() => {
    await Animal.deleteMany({});
    const a1 = new Animal({name:'kitty',animal_type:'cat',breed:'stray',age:21,house_trained:'yes'});
    await a1.save();
    const a2 = new Animal({name:'bittu',animal_type:'dog',breed:'French Bulldog',age:11,house_trained:'no'});
    await a2.save();
    const a3 = new Animal({name:'tom',animal_type:'cat',breed:'American Bobtail',age:22,house_trained:'yes'});
    await a3.save();
    const a4 = new Animal({name:'lang',animal_type:'bird',breed:'Canary Bird',age:2.5,house_trained:'no'});
    await a4.save();
    const a5 = new Animal({name:'titty',animal_type:'mice',breed:'Deer Mice',age:3,house_trained:'yes'});
    await a5.save();
    const a6 = new Animal({name:'raju',animal_type:'horse',breed:'Miniature Horse',age:41,house_trained:'no'});
    await a6.save();
    const a7 = new Animal({name:'whiskey',animal_type:'fish',breed:'Fancy Goldfish',age:1,house_trained:'yes'});
    await a7.save();
    const a8 = new Animal({name:'ghost',animal_type:'dog',breed:'Labrador Retriever',age:18,house_trained:'no'});
    await a8.save();
    const a9 = new Animal({name:'ramu',animal_type:'bird',breed:'Parakeet',age:4,house_trained:'yes'});
    await a9.save();
    const a10 = new Animal({name:'champ',animal_type:'hamster',breed:'Syrian hamster',age:2.5,house_trained:'yes'});
    await a10.save();
    const a11 = new Animal({name:'abul',animal_type:'horse',breed:'American Paint Horse',age:29,house_trained:'no'});
    await a11.save();
}

seedDb().then(() => {
    mongoose.connection.close();
});