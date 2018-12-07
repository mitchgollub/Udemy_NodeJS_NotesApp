// var obj = {
//     name: 'Mitch'
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Mitch", "age": 27}';
// var personObj = JSON.parse(personString);

// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

var originalNotes = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNotes);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);