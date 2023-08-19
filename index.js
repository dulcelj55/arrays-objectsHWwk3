// // 1.
// const fruits = ["apple", "banana", "orange", "grape"]
// fruits[2] = "kiwi";
// console.log (fruits)

// 2.
// const numbers= [2,4,6,8,10]
// numbers.push (12)
// console.log(numbers)
// numbers.shift();
// console.log(numbers)

// 3. 
// (need help on making it shorter)
// firstNames = ["John","Emma", "Michael"]
// lastNames = ["Doe", "Smith", "Johnson"]


// fullNames = [ firstNames[0]+" "+ lastNames[0], firstNames[1]+" "+ lastNames[1], firstNames[2]+" "+ lastNames[2]];
// console.log(fullNames)

// for (i= 0 ; i< firstNames.length; i++){
//   fullNames= firstNames[i] + " "  + lastNames[i];
//   console.log(fullNames)
// }


// // // 4.
// total=0
// ages=[25,30,18,42,15]
// for (i=0; i<  ages.length ; i++){
//   total = total + ages[i];
// }
//   console.log ( total)

// // 5.
// const scores=[85,92,78,95,88]


// const newScores = (score) =>{
//   let topScores = []
//   for ( let i=0; i<score.length; i++){
//     if (score[i] >= 90){
//       topScores.push(score[i])
//     }
//   } 
//   return topScores
// }
// console.log(newScores(scores))

// // 6.
// countires= ["USA","Canada","Mexico","France", "Germany"]
// const doesexist = (array) => {
//   for (let i= 0; i<array.length; i++){
//     if (array[i]=== "Mexico"){
//       return [i];
//     }
// }
// }
//   console.log(doesexist(countires));

//  7.
// numbers = [3, 7, 1, 9, 4]
// let numbers2 = []
// const sortgrade = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     numbers2.push(array[i] * array[i])
//   }
//   console.log(numbers2);

// }
// console.log(sortgrade(numbers))


 // 8. answer plus undifinedgit 
// grades= [87,95,76,88,92]
// let orderGrades = []
// const sort = (array) =>{
//   orderGrades = array.sort()
//   console.log (orderGrades)
// }
// console.log(sort(grades))


// // 9. stil indefined
// data = [10,20,30,40,50]
// let newData = []
// const doubleData = (array)=>{
//   for (let i = 0; i < array.length; i++){
//   newData.push(array[i]*2)  }
//   console.log(newData);
// }
// console.log(doubleData(data))





// //10. values =[34,12,78,53,90]






let movie = {

  name: "Titanic",

  releaseYear: 1997,

  director: "James Cameron",

  actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],

  starActor: {

      name: "Leonardo Dicaprio",

      age: 5,

      born: 1889,

      linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",

      headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"

  },

  budgetInMillions: 200

}

movie.starActor.age = 48;
console.log(movie.starActor.age);
movie.starActor.born = 1989;
console.log(movie.starActor.born);
movie.starActor[isPopular]=true;
console.log(movie.starActor.isPopular)

// let cohortFour = {

//   classSize: 5,

//   instructor: {

//       name: "Fred",

//       age: 40,

//       completedCohortIds: [3, 77, 45, 23],

//       email: "fred@fred.com",

//       assistant: {

//           name: "Brad",

//           age: 38,

//           email: "Brad@brad.com"

//       }

//   },

//   classGrades: [99, 100, 89, 88, 95]

// }

