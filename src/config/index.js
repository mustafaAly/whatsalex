import mongodb from 'mongodb';

export default {
  //"port": 3000,
  //"mongoUrl": "mongodb+srv://taskapp:mostafa155ali2@cluster0-cplxz.mongodb.net/test?retryWrites=true",
  "port": process.env.PORT||3000,
  //"mongoUrl": "mongodb://localhost:27017/chat-api",

  "mongoUrl": process.env.MONGODB_URI,
  "bodyLimit": "100kb"
}







// import mongodb from 'mongodb';

// export default {
//   "port": 3005,
//   //"mongoUrl": "mongodb+srv://taskapp:mostafa155ali2@cluster0-cplxz.mongodb.net/whatsalex?retryWrites=true&w=majority",
//   "mongoUrl": "mongodb://localhost:27017/chat-api",
//   //"port": process.env.PORT,
//   //"mongoUrl": process.env.MONGODB_URI,
//   "bodyLimit": "100kb"
// }

