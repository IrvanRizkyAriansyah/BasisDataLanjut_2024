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

// db.customer.find({ Active: { $in: ['T'] } });

// db.customer.find({ Active: { $nin: ['T'] } });

// db.customer.find( { $and : [ { id : 2 },{ AddressID : 1 } ] } ).pretty()

// db.customer.find( { $or : [ { id : 2 },{ AddressID : 1 } ] } ).pretty()

// db.customer.find({AddressID: {$not : {$eq : 1 }}})

// db.customer.find({Email: {$exists : true }})

// db.customer.find({First_Name: {$type : "string" }})

// db.customer.find( {First_Name : { $regex : /^B/, $options : 'm'}})

// db.film.find( {$expr : { $gt : ["$Rental_Date","$Rental_Duration"] } }).pretty()

// const FindNext = db.film.find()

// FindNext.next()
// FindNext.next()

// db.actor.find().sort({id : -1})

// db.actor.find().limit(2).pretty()

// db.actor.updateMany({id: 2}, {$unset : {Last_Name: ''} } )

// db.actor.updateMany({id:2}, {$rename : {First_Name: "Name"} } )

// db.actor.updateOne({id : 3}, {$set :{First_Name : "Dendol", dob: ISODate()}},{upsert: true})
