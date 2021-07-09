var mongoose = require("mongoose");
const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;

if (!MONGODB_USERNAME) throw new Error("username is not defined in env");
if (!MONGODB_PASSWORD) throw new Error("password is not defined in env");
if (!MONGODB_DATABASE) throw new Error("database is not defined in env");

let cachedConnection = global.mongoose;

module.exports = async function connectToDatabase() {
  if (!cachedConnection) {
    cachedConnection = global.mongoose = { connection: null, promise: null };
  }

  //Set up default mongoose connection
  var mongoDB = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.dci16.mongodb.net/${MONGODB_DATABASE}`;

  if (cachedConnection.connection) return cachedConnection.connection;

  if (!cachedConnection.promise)
    try {
      cachedConnection.promise = mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      throw new Error("could not connect to mongodb");
    }

  cachedConnection.connection = await cachedConnection.promise;
  console.log("connection is established");
  return cachedConnection.connection;
};
