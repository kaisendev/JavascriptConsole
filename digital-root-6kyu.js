
function digital_root (num)
{
    if(num < 10)
        return num

    for(var i=0, sum = 0, n = String(num); i < n.length; i++)
    {
        sum += Number(n[i])      
    }

    return digital_root(sum)    
}
