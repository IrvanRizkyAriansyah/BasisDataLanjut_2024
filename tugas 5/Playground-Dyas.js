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
use("basdatlan");

// //Query IN
// db.customers.find({ Active: { $in: ["T"] } });

// //Query NIN
// db.customers.find({ Active: { $nin: ["Y"] } });

//Query and
// db.customers.find({ $and: [{ AddressID: 1 }, { AddressColumn: 1 }] }).pretty();

//Query OR
// db.customers.find({ $or: [{ AddressID: 2 }, { AddressID: 1 }] }).pretty();

//Query not
// db.tabel.find({ ID: { $not: { $eq: 1 } } }).pretty();

//Query Exist
// db.customers.find({Email: {$exists : true }})

// Query Type
// db.customers.find({First_Name: {$type : "string" }})

//Query Regex

// db.customers.find( {First_Name : { $regex : /^A/ , $options : "m"}
// } ).pretty()

//Query expr
// db.film.find( {$expr : { $gt : ["$Rental_Duration","$Rep;acement_Cost"] } } ).pretty()

//Query Next
// db.customers.find().next(); // Pertama
// const FindNext = db.customers.find(); // Seterusnya
// FindNext

//Query Sort
// db.customers.find().sort({ID:-1}).pretty()

//Query Limit
// db.actor.find().limit(3).pretty()

//Query unset
// db.customers.updateMany({ID: 2}, {$unset : {Email : ""} } )

//Query Rename
// db.customers.updateMany({ID: 2}, {$rename : {Last_Name: "Nama_Akhir"} } )

//Query Upset
// db.customers.updateMany({ID : 2}, {$set : {Nama_Akhir : "Shafa"} }, { upsert : true } )

//Query ElemMatch (ARRAY)
// db.staff.find( { angka : { $elemMacth : { $gt : 80, $lt : 85 } } }).pretty()

//Query Push
// db.staff.updateOne({id : 1}, {$push : {History : "SMKN"} } )

// //Query Pull
// db.staff.updateOne({id : 1}, {$pull : {History: "SDN"} } )

//AddtoSet
// db.staff.updateOne({ id: 1 }, { $addToSet: { History: "SDN" } });
