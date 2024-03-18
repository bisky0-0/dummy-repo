const EventEmiiter = require('events');

const customEmmiter = new EventEmiiter();

customEmmiter.on('response', (name, id) => {
    console.log(`Data recived User ${name} with id: ${id}`);
})

customEmmiter.emit('response', 'Jhon', 98)