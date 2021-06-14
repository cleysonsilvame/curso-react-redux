const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose
  .connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => {
    console.log(`connection to '${res.connection.name}' established`);
  }).catch(err => {
    console.log(`db error ${err.message}`)
  });
