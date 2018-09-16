class Student {
    constructor(name) {
        this.name = name;
        this.scores = [];
    }
    
    addScores(...scores) {
        this.scores = scores;
    };
    
    calculateAverage() {
        return this.scores.reduce((x, y) => x + y) / this.scores.length;
    };
}

let student1 = new Student('John'); 
let student2 = new Student('Pether');
let student3 = new Student('Jim');

student1.addScores(1, 4, 7);
student2.addScores(5, 8, 10);
student3.addScores(10, 8, 9);

let students = [student1, student2, student3];

let approvedStudents = students.filter(student => student.calculateAverage() >= 7);
let reprovedStudents = students.filter(student => student.calculateAverage() < 7);

let approvedStudentsAverage = approvedStudents.map(student => student.scores.reduce((p, e) => p + e)).reduce((p, e) => p + e) /
approvedStudents.map(student => student.scores.length).reduce((p, e) => p + e);
 
let reprovedStudentsAverage = reprovedStudents.map(student => student.scores.reduce((p, e) => p + e)).reduce((p, e) => p + e) /
reprovedStudents.map(student => student.scores.length).reduce((p, e) => p + e);
 
console.log('Approved students: ' + approvedStudents.map(student => student.name));
console.log('Approved students average: ' + approvedStudentsAverage);
console.log('Reproved students average: ' + reprovedStudentsAverage);
console.log('Approved students average ' + ((reprovedStudentsAverage / approvedStudentsAverage) * 100) + '%' + ' greater than reproved students.');
