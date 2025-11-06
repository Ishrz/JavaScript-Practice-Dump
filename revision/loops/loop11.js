let pass= "shaikh";
let attempt=0;
let prmp=prompt("enter your password");
while( (pass !== prmp) && (attempt<3)){
    prmp=prompt("enter your password");
    attempt++;
    
}