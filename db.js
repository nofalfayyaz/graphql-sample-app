const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   students:store.collection('student'),
   colleges:store.collection('colleges')
};
