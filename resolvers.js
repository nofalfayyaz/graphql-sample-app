const db = require('./db')
const Query = {
   greeting:() => {
      return "hello from  Nofal !!!"
   },
   students:() => db.students.list(),
   
   studentById:(root,args,context,info) => {
    return db.students.get(args.id);
 }
}

module.exports = {Query}
