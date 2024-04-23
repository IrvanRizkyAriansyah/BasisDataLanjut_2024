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
//Query $nin
//db.customers.find({First_Name : {$nin : [ "Sasuke" ]}})
//Query $in
//db.customers.find({First_Name : {$in : [ "Sasuke" ]}})
//Query $Find
//db.customers.find().next()
//Query $AND
//db.address.find( { $and : [ { ID : 1 },{ CityID : 1 } ] } ).pretty()
//Query $OR
//db.city.find( { $or : [ { ID : 2 },{ CountryID : 2 } ] } ).pretty()
//Query Exist
//db.customers.find( {id : { $exists : true } } ).pretty()
//Query $Type
//db.customers.find({First_Name: {$type : "string" }})
//Query $Regex
//db.city.find( {City : { $regex : /^B/ , $options : "m"}
//} ).pretty()
//Query $Expr
//db.film.find( {$expr : { $gt : ["$Rental_Duration","$Replacement_Cost"] } } ).pretty()
//Query $Next
//db.customers.find().next()
//query SOrt
//db.customers.find().sort({ID:-1}).pretty()
//query Limit
//db.customers.find().limit(5).pretty()
//Query Unset
//db.customers.updateMany({ID:1}, {$unset : {First_Name: " "} } )
db.customers.updateMany({ID:1}, {$rename : {Last_Name: "kota-baru"} } )
db.customers.updateMany({ID:1}, {$set : {kota-baru : "Jakarta"} }, { upsert : true } )