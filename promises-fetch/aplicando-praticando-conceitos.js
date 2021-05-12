// EventEmitter - Exclusivo do NODE

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User Logged', data);
        }, 2000);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Danilo Perez' });
users.userLogged({ user: 'Priscila Perez' });

// EventTarget