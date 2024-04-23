use('rentalfilm');

// db.customer.find({Active: {$in : ["Y","N"]}});
// db.customer.find({Active: {$nin : ["Y", "N"]}});
// db.customer.find({$and : [ {id: 2, Active :"Y"}]});
// db.customer.find({$or : [{Active :"N"}, {id: 4}]});
// db.customer.find({id: {$not: {$eq : 2}}});
// db.customer.find({Email: {$exists: true}});
// db.customer.find({First_Name: {$type: "string"}});
// db.customer.find({First_Name: {$regex: /^D/, $options: 'm'}});
// db.customer.find().next()
// const FindNext = db.customer.find()

// FindNext.next()
// FindNext.next()

// db.customer.find().sort({_id: -1});
// db.customer.find().limit(3);

// db.customer.updateMany({id: 2}, {$unset : {Last_Name: ''}})

// db.customer.updateMany({id: 2}, {$rename: {First_Name: "Name"}})

// db.customer.updateOne ({id: 2}, {$set: {Name: "Dendol", dob: ISODate()}},{upsert: true});

// db.customer.insert([{
//     id : "2",
//     First_Name : "Fernanda",
//     Last_Name: "Ramos",
//     Email : "fernadaramos4@uol.com.br",
//     Active: "Y"
//     },
//     {
//     id : "3",
//     First_Name : "Mark",
//     Last_Name: "Philips",
//     Email : "mphilips12@shaw.ca",
//     Active: "N"
//     },
//     {
//     id : "4",
//     First_Name : "Jennifer",
//     Last_Name: "Peterson",
//     Email : "jenniferp@rogers.ca",
//     Active: "T"
//     }])