function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

let student1 = new Student("Ayush", "Computer Science");
student1.showName();
student1.showBranch();

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

let student2 = new StudentClass("Ayush", "Computer Science");
student2.showName();
student2.showBranch();
