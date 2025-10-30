let course={
    title:"Javascript",
    duration:"4 weeks",
};

let courseDetail=Object.entries(course);
console.log(courseDetail);

// courseDetail.forEach( val =>
//      console.log(`${val[0]} : ${val[1]}`) 
//     )

courseDetail.forEach(function(val){
    console.log(`${val[0]} : ${val[1]}`);
})