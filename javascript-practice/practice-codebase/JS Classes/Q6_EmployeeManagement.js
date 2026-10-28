class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + this.salary * percent / 100;
    }
}

let employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Sara", "HR", 35000),
    new Employee(3, "Kiran", "Finance", 45000),
    new Employee(4, "Neha", "Sales", 30000),
    new Employee(5, "Ravi", "IT", 50000)
];

employees[0].applyBonus(10);

for (let employee of employees) {
    console.log(employee.name + " annual salary: Rs." + employee.getAnnualSalary());
}

let totalPayout = employees.reduce(function(total, employee) {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total annual payout: Rs." + totalPayout);
