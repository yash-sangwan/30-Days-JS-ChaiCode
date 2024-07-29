        // This Day 14 will throw many error because the classes are made again with the same name to solve each task properly

// Task 1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("yash",19)

person.greet()

// Task 2

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  const person2 = new Person("yash", 19);
  person.updateAge(20);
  
  // Task 3

  class Student extends Person{
    constructor(name,age,studentId){
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
      }
  }
  
const student1 = new Student("yash", 19, 'S12345');
console.log(student.getStudentId()); 

// Task 4

class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    greet() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }

const student2 = new Student("yash", 19, 'S12345');
console.log(student.greet());

// Task 5

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    static genericGreet() {
      return 'Hello, this is a generic greeting.';
    }
  }
  
  console.log(Person.genericGreet()); 

  // Task 6

  class Student extends Person {
    static studentCount = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.studentCount += 1;
    }
  
    greet() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }
  
  const student3 = new Student("yash", 22, 'S12345');
  const student4 = new Student("adi", 23, 'S12346');
  
  console.log(Student.studentCount); 
  
  // Task 7

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    greet() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  }
  
  const person = new Person("Yash", "Sangwan", 19);
  console.log(person.fullName); 

  // Task 8

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    greet() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  }
  
  const person5 = new Person('John', 'Doe', 30);
  person.fullName = 'Jane Smith';
  console.log(person.fullName);
  
  
  
  
