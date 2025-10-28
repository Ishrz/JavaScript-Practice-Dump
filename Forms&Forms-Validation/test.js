
function rps(u, c){
    if (u===c) return 'Match is Draw';
    else if (u === 'rock' && c === 'paper') return "Computer";
    else if(u ==='paper' && c==='scissor') return "Computer";
    else if(u ==='scissor' && c==='rock') return "Computer";
    
    else if(u ==='rock' && c==='scissor') return "User";
    else if(u ==='paper' && c==='rock') return "User";
    else if(u === 'scissor' && c === 'paper') return "User";

}


user= "paper";
computer= "paper";

console.log(`The Winner Is = ${rps(user,computer)}`);
