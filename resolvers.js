const db = require('./db')
const Query = {
   greeting:() => {
      return "hello from  Nofal !!!"
   },
   students:() => db.students.list()
}

module.exports = {Query}
