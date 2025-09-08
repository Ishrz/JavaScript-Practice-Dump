//pass a function into another function and execute it inside.

function abc(fun2){

    fun2();

}

abc( function(){
    console.log("Printing from args function");
})