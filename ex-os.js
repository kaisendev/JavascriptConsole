let xcount = 0
let ocount = 0

for(i=0; i< xo.length; i++)
{
    const cLet = xo[i].toLowerCase()
    if(cLet === 'x') xcount++
    if(cLet === 'o') ocount++
}

let bool = xcount === ocount ? true : false