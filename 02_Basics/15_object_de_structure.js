
// objects de-structure and JSON API

const course = {
    courseName: "javascript tutorial",
    price: "999",
    courseInstructor: "Issac newton"
}

console.log(course.courseInstructor);
// de-structuring objects
const {courseInstructor} = course
console.log(courseInstructor); // after de-structuring, you can access by courseInstructor instead of writing course.courseInstructor

const {courseName: cname} = course  // sorting courseName as cname
console.log(cname);

// structure of JSON api
// {
//     name: "issac",
//     coursesName: "js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {}
]



 
