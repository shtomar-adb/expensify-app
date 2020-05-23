//Practice for destructuring object

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { title, author } = book;
// const {name: publisherName = 'self-published'} = book.publisher;

// console.log("Title: " + title + " Author: " + author);
// console.log("Publisher: "+publisherName);

//Practice for destructuring Arrays

const item = ['Capuchinno', '$2.00', '$5.0', '$6.0'];

const [coffeName,,price] = item;

console.log(`A ${coffeName} costs ${price}`);