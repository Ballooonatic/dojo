// Given the following dictionary, print the following.

// Students
// 1 - MICHAEL JORDAN - 13
// 2 - JOHN ROSALES - 11
// 3 - MARK GUILLEN - 11
// 4 - KB TONEL - 7
// Instructors
// 1 - MICHAEL CHOI - 11
// 2 - MARTIN PURYEAR - 13

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
    ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
    ]
}

console.log("Students");
for (let i = 0; i < users.Students.length; i++) {
    let name = users.Students[i].first_name.toUpperCase() + " " + users.Students[i].last_name.toUpperCase(); //concatenate the capitalized names together
    let nameLength = users.Students[i].first_name.length + users.Students[i].last_name.length; //add the number of characters
    console.log(i + 1, "-", name, "-", nameLength);
}

console.log("Instructors");
for (let i = 0; i < users.Instructors.length; i++) {
    let name = users.Instructors[i].first_name.toUpperCase() + " " + users.Instructors[i].last_name.toUpperCase();
    let nameLength = users.Instructors[i].first_name.length + users.Instructors[i].last_name.length;
    console.log(i + 1, "-", name,  "-", nameLength);               
}