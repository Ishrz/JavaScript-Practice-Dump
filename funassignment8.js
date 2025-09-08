function count( ){
    let count=0;
    return function counter(){
        count++;
        console.log(count);
    }
}
// const counter = count();
// counter();
// counter();