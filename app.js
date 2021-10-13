const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Não foi especificado o nome"]
  },
  rating:{
    type: Number,
    min: 1,
    max: 50
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Linda maçã"
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const morango = new Fruit ({
  name: "Morango",
  rating: 4,
  review: "Vermelho"
});

// morango.save();

const person = new Person ({
  name: "Amy",
  age: 20,
  favouriteFruit: morango
});

// person.save();

// const kiwi =  new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "O melhor"
// });
// const orange = new Fruit ({
//   name: "Orange",
//   rating: 12,
//   review: "Laranja"
// });
// const banana = new Fruit ({
//   name: "Banana",
//   rating: 4,
//   review: "Amarela"
// });

//inserir várias frutas
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Sucesso");
//   }
//
// });


Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    // mostra todos os dados em fruits
    // console.log(fruits);

    //mostra apenas o nome das frutas
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
})

//atualizar algum dado
// Fruit.updateOne({_id: "6166edc1162f7908c9edccab"}, {name: "Pessego"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Sucesso");
//   }
// });


//Deletar
// Fruit.deleteOne({name: "Pessego"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Deletado");
//   }
// });

//Deletar muitos dados
// Person.deleteMany({name: "John"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Deletados");
//   }
// });
