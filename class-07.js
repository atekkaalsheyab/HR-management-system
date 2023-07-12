'use strict'
function Employee(Name, Department, Level, Image_URL) {
    this.id = 0;
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
const btable= document.getElementById("btable"); 
Employee.prototype.render1= function () {
    
        const trEl= document.createElement('tr'); 
        btable.appendChild(trEl);
        const tdEl1 = document.createElement('td'); 
        tdEl1.setAttribute('class', 'text-left');
        const tdEl2 = document.createElement('td');
        tdEl2.setAttribute('class', 'text-left');
        trEl.appendChild(tdEl1); 
        trEl.appendChild(tdEl2);
        tdEl1.textContent= this.fullName; 
        tdEl2.textContent= this.Salary;
  
}


const articles= document.getElementById('articles'); 
Employee.prototype.render2= function () {
    const card_article = document.createElement('article'); 
    articles.appendChild(card_article);
    const article_wrapper= document.createElement('div'); 
    article_wrapper.setAttribute('class', 'article-wrapper');
    card_article.appendChild(article_wrapper); 

    const card_figure = document.createElement('figure'); 
    article_wrapper.appendChild(card_figure); 

    const card_img = document.createElement('img'); 
    card_figure.appendChild(card_img); 
    card_img.setAttribute('src',this.Image_URL); 

    const article_body = document.createElement('div'); 
    article_body.setAttribute('class', 'article-body'); 
    article_wrapper.appendChild(article_body); 
    
    const card_header = document.createElement('h2'); 
    article_body.appendChild(card_header); 
    card_header.textContent= this.fullName; 

    const card_p = document.createElement('p'); 
    card_p.setAttribute('id','card_p'); 
    article_body.appendChild(card_p); 
    card_p.textContent= `Department: ${this.Department} - Level: ${this.level} \n Salary: ${this.Salary} `; 
}




Employee.prototype.genId= function(){
    this.id = Math.floor(Math.random() * 10000); 
}

let empForm = document.getElementById("empForm");
empForm.addEventListener('submit', addNewEmp);

function addNewEmp(event) {
    event.preventDefault(); 
    let empName= event.target.firstname.value + " " + event.target.lastname.value; 
    let dep= event.target.address.value; 
    let level = event.target.address2.value; 
    let img_url = event.target.img_url.value; 
    
    let newEmp= new Employee(empName, dep, level,img_url ); 
    newEmp.genId();
    newEmp.CalSalary(level); 
    newEmp.render1(); 
    newEmp.render2(); 


}
