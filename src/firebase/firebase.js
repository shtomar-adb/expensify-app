import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };
  // Initialize Firebase

  console.log(JSON.stringify(firebaseConfig));
  
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase ,googleAuthProvider ,database as default};
  //   database.ref().remove();

//   database.ref().set({
//       name: "Shivam Tomar",
//       age: 31,
//       isSingle: false,
//       stressLevel: 6,
//       job: {
//         title: 'Software Developer',
//         company: 'Adobe'
//       },
//       locations: {
//           city: "San Jose",
//           country: "USA"
//       }
//   });

//   database.ref().on('value', (snapshot) => {
//     const profile = snapshot.val();  
//     console.log(`${profile.name} is a ${profile.job.title} at ${profile.locations.city}`);
//   });

  //Let say moved to Amazon which increased by stress to 9. City is changes to Seattle (Amazon's headquarter).
//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'locations/city': 'Seattle'

//   });

//   databse.ref('name').set('SHIVAM');
//   databse.ref('locations/city').set('SanJose');

//   const attributes = {
//       height: "170cms",
//   };

//   databse.ref('attributes').set(attributes).then(() => {
//     console.log('Successfully added attributes');
//   }).catch(() => {
//     console.log('Failed adding attributes');
//   });
//   databse.ref('attributes/weight').set('150lbs');
// databse.ref('isSingle').remove().then(() => {   
//     console.log('Deleted successfully');
// }).catch((error) => {
//     console.log(`Error deleteing :: ${error}`);
// });

//Adding Array to database using call to push function.

// database.ref().remove();

// database.ref('expense').push({
//     desription: 'Rent',
//     note: '',
//     amount: 100,
//     createdAt: 123456789
// });

// database.ref('expense').push({
//     desription: 'Utility',
//     note: '',
//     amount: 200,
//     createdAt: 123456788
// });

// database.ref('expense').push({
//     desription: 'Travel',
//     note: '',
//     amount: 300,
//     createdAt: 123456785
// });

// database.ref('expense').on('value', (snapshot) => {  
//     console.log('Printing Array data');
//     const dataArr = [];
//     snapshot.forEach((childSnapshot) => {
//         dataArr.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(dataArr);
// });

// database.ref('expense').on('child_removed', (snapshot) => {  
//     console.log('Data removed.');
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expense').on('child_changed', (snapshot) => {  
//     console.log('Data changed.');
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expense').on('child_added', (snapshot) => {  
//     console.log('Data Added.');
//     console.log(snapshot.key, snapshot.val());
// });

// const getPromise = () => new Promise((resolve, reject) => {
//   resolve('first then');
// });

// getPromise().then((data) => {
//   console.log(data);
// }).then(() => {
//   console.log('second then');
// });



