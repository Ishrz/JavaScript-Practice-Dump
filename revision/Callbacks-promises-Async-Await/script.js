function KuchDerBadChlega( fnc ){
    setTimeout( fnc, Math.floor(Math.random()*10)*1000);
}


KuchDerBadChlega( function(){
    console.log("Callback Functiion");
});

