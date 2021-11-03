
/*Creating Department Class, that takes in id and deptname
from values returned from Inquirer prompts */
class Department {
    id = 0
    deptname = ""

    constructor(id, name) {
        this.id = id;
        this.name = name;
    };
    
    getId() {
        return this.id;
    };

    getDeptName() {
        return this.name;
    };
    // I think that this is going to be an instance of 
    // polymorphism
    createNew() {
        return "deparment";
    };
};

/* I need to export the 
    information so it can be used in other functions */
 
module.exports = Department;