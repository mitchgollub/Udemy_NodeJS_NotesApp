console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note created');
        console.table(note);
    } else {
        console.log('Duplicate found, Note not created');
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} Note(s)...`);
    console.table(allNotes);

} else if (command === 'read') {
    var note = notes.getNote(argv.title);

    if (note) {
        console.log(`Note "${argv.title}" Found`);
        console.table(note);
    } else {
        console.log('Note Not Found');
    }

} else if (command === 'remove') {
    var removed = notes.removeNote(argv.title);
    var message = removed ? `Note "${argv.title}" was removed` : 'Note Not Found';
    console.log(message);

} else {
    console.log('Command not recognized');
}