
const mongoose=require('mongoose');

exports.dbConnection = async () => {
    mongoose.set('strictQuery', true)
  await mongoose.connect('mongodb+srv://user:user@cluster0.jwb8rv0.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
     console.log('Db Connected')
    }).catch((err) => {
     console.log(err)
     })
}
