//Easy

 function exercise(x) {
    return `Today's exercise is ${x}`
}

console.log(exercise('Running'))
console.log(exercise('Swimming'))

//Medium

function cutPizzaSlices(numberOfSlices){
    return (numberOfPeople) => {
        let eachShare = (numberOfSlices/numberOfPeople).toFixed(2);
        return 'Each person gets ' + eachShare + ' slices';
    }
}
const sharePizza = cutPizzaSlices(10);
console.log(sharePizza(4));

//hard
 
function data(){
    let pii ={
        name: "Phoebe Buffay",
        ssn: 987654321,
    }
    return function getName(){
        return pii.name;
    }
}
 let closure = data();
 console.log(closure());
 //very hard

 class Person {
     constructor (name, age, job){
         this.name = name; 
         this.age = age;
         this.job = job;
     }
     exercise(){
         console.log("Today's exercises are jumping to conclusions and running from our problems and responsibilities.");
     }
     fetchJob (){
         console.log("This is ${this.name} and his 'job' is an ${this.job}");
     }
 }

 class Programmer extends Person {
     constructor(name, age, job, language){
     super(name, age, job);
     this.language = language;
     this.busy = true;
 }

 offerNewTask(){
    if(this.busy){
        this.busy === true;
        console.log("${this.name} has completed the task.")
        this.busy = false;
    } else if(this.busy){
        this.busy === false;
        console.log("${this.name} can accept a new task.")
        this.busy = true; 
    }
 }
learnLanguage(){
    console.log(this.language.push("Italian"));
}
listLanguages (){
    console.log("${this.name} knows ${this.language}");
}
}

//Object.setPrototypeOf(Programmer.prototype, Person);

 const dan = new Person("Dan Humphrey", 23, "Author");
 const greg = new Person("Gregory House", 56, "Diagnostician");
 const ang = new Programmer("Angela Montenegro", 37, "Forensic Computer Analyst", "English, Spanish, Madarin");
 const dal = new Programmer("Seo Dal-mi", 30, "Developer", "English, Korean");

//Programmer.prototype.constructor = Programmer;
console.log(dan);
console.log(greg);

 dan.exercise();
 ang.offerNewTask();