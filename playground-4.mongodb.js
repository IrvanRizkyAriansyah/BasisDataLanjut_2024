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

//lookup join
db.country.aggregate([
  {
    $lookup: {
      from: 'city',
      localField: 'id',
      foreignField: 'CountryID',
      as: 'join',
    },
  },
]);

// db.createCollection('continent', {
//   validator: {
//     $jsonSchema: {
//       bsonType: 'object',
//       title: 'continent validator',
//       required: ['continent', 'last_update'],
//       properties: {
//         continent: {
//           bsonType: 'string',
//           description: "'continent' harus dalam bentuk string dan wajib diisi",
//         },
//         last_update: {
//           bsonType: 'date',
//           description:
//             "'last_update' harus dalam bentuk tanggal dan wajib diisi",
//         },
//       },
//     },
//   },
// });

// db.continent.insertOne({cont : "Asia", last_update : ISODate()})

// db.continent.insertOne({
//   continent: 'Asia',
//   last_update: new ISODate(),
// });
