const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']




function findMatching (arr, name) {
    return arr.filter(possibleMatch => 
        possibleMatch.toLowerCase() === name.toLowerCase()
    )

}



// function findMatching(source, sought) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase() === sought.toLowerCase()
//     )
//   }


function fuzzyMatch (arr, nameToMatch) {
    return arr.filter(possibleMatch => possibleMatch.toLowerCase().indexOf(nameToMatch.toLowerCase()) === 0 )
        }