/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('rentalfilm');

// db.film.update({id: 2}, {$set : {Release_Year : 2003}});

// db.film.remove({id: 2})
// db.film.deleteOne({Rating: 10})
// db.film.deleteMany({Length: 90})
// db.customer.find().limit(2).skip(2)
// db.country.createIndex({"country" : 1})
//db.country.createIndex({"country" : 1}, {unique : true})
// db.film.createIndex({"LanguageID" : 1}, {sparse : true})
//  db.city.createIndex({"last_update" : 1}, {expireAfterSeconds :60})
// db.customer.createIndex({"AddressId" : 1}, {v : 1})
// db.film.createIndex({Title : "text"}, {weights: {Title : 5}})
// db.customer.createIndex({Email : "text"}, {default_language:
//     "english"})

// db.customer.createIndex({First_Name : "text"}, {language_override:
//     "spanish"})

db.film.aggregate([
  {
    $group: {
      _id: null,
      Total_Replacement_Cost: { $sum: '$Replacement_Cost' },
    },
  },
]);
