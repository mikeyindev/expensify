import * as firebase from 'firebase';
import api from '../util';

const config = {
  apiKey: api.apiKey,
  authDomain: "expensify-3872d.firebaseapp.com",
  databaseURL: "https://expensify-3872d.firebaseio.com",
  projectId: "expensify-3872d",
  storageBucket: "expensify-3872d.appspot.com",
  messagingSenderId: "974331806528"
};

firebase.initializeApp(config);

const database = firebase.database();

// // Set data
// database.ref().set({
//   name: 'Mike Yin',
//   age: 30,
//   job: 'software developer',
//   location: {
//     city: 'Plano',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((error) => {
//   console.log('This failed: ', error);
// });

// // Update data
// database.ref().update({
//   job: 'Manager',
//   'location/city': 'New York'
// });

// // Removing data
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed.');
//   }).catch((e) => {
//     console.log('Did not remove data: ', e);
//   });

// // Fetch all the data from the database once. once() returns a Promise object
// database.ref()
//   .once('value') 
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log('Error fetching data: ', e);
//   });

  // Subscribe to the database and listen for changes. on() doesn't return a
  // Promise object.
  database.ref()
    .on('value', (snapshot) => { console.log(snapshot.val()); })

database.ref()
  .on('value', (snapshot) => { 
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job} in ${val.location.city}, ${val.location.country}`); 
  });

  // push() is used to add items to a collection. Firebase doesn't support arrays. An id is automatically assigned to each pushed item
database.ref('notes').push({
  title: 'Note 1',
  body: 'My note'
});

database.ref('notes')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });