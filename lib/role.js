/* The content in the employee and role 
files are all going to be very similar. They are all
extensions of the Deparment class, with minor additions 
worked into them. */


const Department = require('./department');

class Role extends Department {
    constructor(id, position, github) {
        super(id);
        this.position = position;
    };

    getGitHub() {
        return this.github;
    };

    createNew() {
        return "role";
    };
}

module.exports = Role;