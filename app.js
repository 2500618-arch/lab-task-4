class student {
    constructor(name, marks) {
        this.marks = marks;
        this.name = name;
    }

    get_grade(marks) {
        if (marks >= 90) return "A+";
        if (marks >= 80) return "A";
        if (marks >= 70) return "B";
        if (marks >= 60) return "C";
        if (marks >= 50) return "D";
        return "F";
    }
}

let s = [
    new student("Ali", 90),
    new student("asim", 32),
    new student("Ahb", 70),
    new student("wasif", 62),
    new student("kashif", 80),
    new student("saim", 32)
];

let passing_students = s.filter((student) => student.marks >= 50);
console.log("Pass Students:", passing_students);

let students_names = s.map((student) => student.name);
console.log("Students Names:", students_names);

let total_students = s.length;
let total_marks = s.reduce((sum, student) => sum + student.marks, 0);
let average = total_marks / s.length;

console.log(`Total Students: ${total_students} | Total Marks: ${total_marks} | Average: ${average.toFixed(2)}`);

let sort = s.sort((a, b) => b.marks - a.marks);

console.log("\nSorted Marks:");
for (let i = 0; i < 6; i++) {
    console.log(s[i].marks);
}

console.log("\nSorted Array with Destructuring:");
for (let i = 0; i < s.length; i++) {
    const { name, marks } = s[i]; 
    console.log(`Name: ${name}, Marks: ${marks}, Grade: ${s[i].get_grade(marks)}`);
}