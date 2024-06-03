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
use('movies');

//db.createCollection("customers")
//db.createCollection("actor")
//db.createCollection("adress")

// db.actor.insert([{
//     id : "Fernanda",
//     fullname : "Fernanda Ramos",
//     email : "fernadaramos4@uol.com.br",
//     age : 24
//    },
//    {
//     id : "Mark",
//     fullname : "Mark Philips",
//     email : "mphilips12@shaw.ca",
//     city : "San Francisco"
//    },
//    {
//     id : "Jennifer",
//     fullname : "Jennifer Peterson",
//     email : "jenniferp@rogers.ca",
//     occupation : "teacher"
//    }])

// db.actor.update(
//     {id:"Jennifer"},
//     {$set:{fullname:'Jennifer alfarizi'}}
//     )

// db.actor.remove(
//     {id:"Jennifer"}
//     )
// db.adress.insertOne(
//     {
//      Nama_Produk : "Kulkas",
//      Harga : 100000,
//      Berat_Produk : 8.9,
//      Rusak : false,
//      Tanggal_Masuk : new Date(),
//      Tag : ["Elektronik", "Perabotan"],
//      Dimensi : {
//      tinggi : 80,
//      panjang : 50,
//      lebar : 20
//      },
//      Id_Product : ObjectId()
//     }
//      )

// db.adress.insertMany([{
//     Nama_Produk : "TV",
//      Harga : 100000,
//      Berat_Produk : 8.9,
//      Rusak : false,
//      Tanggal_Masuk : new Date(),
//      Tag : ["Elektronik", "Perabotan"],
//      Dimensi : {
//      tinggi : 80,
//      panjang : 50,
//      lebar : 20
//      },
//      Id_Product : ObjectId()
//     },{
//     Nama_Produk : "Telephone",
//      Harga : 100000,
//      Berat_Produk : 8.9,
//      Rusak : false,
//      Tanggal_Masuk : new Date(),
//      Tag : ["Elektronik", "Perabotan"],
//      Dimensi : {
//      tinggi : 80,
//      panjang : 50,
//      lebar : 20
//      },
//      Id_Product : ObjectId()
//     }
// ])

// db.createCollection('continent', {
//   validator: {
//     $jsonSchema: {
//       bsonType: 'object',
//       title: 'continent validator',
//       required: ['continent', 'last_update'],
//       properties: {
//         continent: {
//           bsonType: 'string',
//           description: 'continent harus dalam rupa string dan wajib diisi',
//         },
//         last_update: {
//           bsonType: 'date',
//           description: 'last_update harus dalam rupa string dan wajib diisi',
//         },
//       },
//     },
//   },
// });

// db.continent.insertOne({
//     continent: "asia",
//     last_update: ISODate()
// })

db.customers.aggregate({
    $lookup:{
    "actor"
    localField: "fullname",
    foreignField: "fullname",
    as :"join"
    }
    });

// db.continent.drop ()


