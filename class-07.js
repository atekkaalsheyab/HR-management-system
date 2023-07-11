'use strict'
function Employee(Name, Department, Level, Image_URL) {
    this.id = Math.floor(Math.random() * 10000);
    this.fullName = Name;
    this.Department = Department;
    this.level = Level;
    this.Image_URL = Image_URL;
    this.Salary = 0;
}

Employee.prototype.CalSalary = function (Level) {
    let min = 0;
    let max = 0;
    switch (Level) {
        case "Senior":
            min = 1500;
            max = 2000;
            this.Salary = (Math.floor(Math.random() * (max - min)) + min) - (Math.floor(Math.random() * (max - min)) + min)* (7.5/100) ;
            break;
        case "Mid-Senior":
            min = 1000;
            max = 1500;
            this.Salary = (Math.floor(Math.random() * (max - min)) + min) - (Math.floor(Math.random() * (max - min)) + min)* (7.5/100) ;
            break;
        case "Junior":
            min = 500;
            max = 1000;
            this.Salary = (Math.floor(Math.random() * (max - min)) + min) - (Math.floor(Math.random() * (max - min)) + min)* (7.5/100) ;
            break;
    }
}

Employee.prototype.render= function () {
    document.write(`${this.id} ${this.fullName} ${this.Salary}`);
}


let emp1= new Employee("Ghazi Samer", "Administration", "Junior","dd");
emp1.CalSalary(emp1.level); 
emp1.render(); 