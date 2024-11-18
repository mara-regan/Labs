const submissions = [
   { name: "Jane", score: 95, passed: true },
   { name: "Joe", score: 77, passed: true },
   { name: "Jack", score: 59, passed: false },
   { name: "Jill", score: 88, passed: true }
]
console.log(submissions)

const addSubmission = (array, newName, newScore) => {
   const submission = {
      name: newName,
      score: newScore,
      passed: newScore >= 60 ? true : false,
   }
   array.push(submission)
}
addSubmission(submissions, "Laura", 68)

const deleteSubmissionByIndex = (array, index) => {
   array.splice(index, 1)
}
deleteSubmissionByIndex(submissions, 1)

const deleteSubmissionByName = (array, name) => {
   const index = array.findIndex(submission => submission.name === name)
   array.splice(index, 1)
}
deleteSubmissionByName(submissions, "Jill")

const editSubmission = (array, index, score) => {
   array[index].score = score
   array[index].passed = score >= 60 ? true : false
}
editSubmission(submissions, 2, 70)

const findSubmissionByName = (array, name) => {
   return array.find(submissions => submissions.name === name)
}
const findSubmission = findSubmissionByName(submissions, "Joe")
console.log("Find submission by name Joe (undefined bc deleted above):", findSubmission)

const findLowestScore = (array) => {
   return array.reduce((lowest, submission) => submission.score < lowest.score ? submission : lowest, array[0]);
}
const lowestScore = findLowestScore(submissions)
console.log("Find lowest score:", lowestScore)

const findAverageScore = (array) => {
   const total = array.reduce((sum, submission) => sum + submission.score, 0)
   return total / array.length
}
const averageScore = findAverageScore(submissions)
console.log("Find average score:", averageScore)

const filterPassing = (array) => {
   return array.filter(submissions => submissions.score >= 60)
}
const passingScores = filterPassing(submissions)
console.log("Filter passing scores:", passingScores)

const filter90AndAbove = (array) => {
   return array.filter(submissions => submissions.score >= 90)
}
const above90 = filter90AndAbove(submissions)
console.log("Filter scores above 90:", above90)

//extended challenges

const createRange = (start, end) => {
   const range = []
   for (let i = start; i <= end; i++) {
      range.push(i)
   }
   return range
}
console.log(createRange(3, 6))

const countElements = (array) => {
   const elementCounts = {}
   for (const element of array) {
      if (elementCounts[element] === undefined) {
         elementCounts[element] = 1
      } else {
         elementCounts[element] += 1
      }
      }
      return elementCounts
   }
console.log(countElements(['a', 'b', 'c', 'a', 'w', 'b', 'a']))