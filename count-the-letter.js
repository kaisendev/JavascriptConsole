let letterCounts = {}
let str = "foodIniO"

for( i=0; i < str.length; i++)
{
    const currentLetter = str[i].toLowerCase()
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0
    letterCounts[currentLetter]++
}