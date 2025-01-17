// Object De Structuring and API

const course = {
    courseName: "JavaScript",
    price: "999$",
    courseInstructor: "Israr"
}
console.log(course.courseName, course.courseInstructor, course.price)
// You can do this work much cleanly which called de strucyuring as:
const {courseInstructor, courseName, price} = course
console.log(courseInstructor)

// You can change the name of keys as:
const {courseInstructor: teacher} = course
console.log(teacher)


/*
API: Doing your work through others called API
*/
// API provide data in form of JSON as:
// JSON is same like object but it do not have a name as:
// {
//     'courseName': "JavaScript",
//     'price': "free    $",
//     'courseInstructor': "Israr" //  keys are always strings
// }

// // API can be in the form of arrays as:
// [
//     {},
//     {},
//     {}
// ]