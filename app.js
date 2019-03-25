console.log('Starting app...');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const title = {
    describe: 'Title of note',
    required: true,
    alias: 't'
};

const body = {
    describe: 'Body of note',
    required: true,
    alias: 'b'
};

const argv = yargs
.command('add', 'Add a new Note', { title, body })
.command('list', 'List all Notes')
.command('read', 'Read a Note', { title })
.command('remove', 'Delete a Note', { title })
.help()
.argv;

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
