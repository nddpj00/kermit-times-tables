// Retrieve highScores from localStorage if they exist, or use the default values
// export const highScores = JSON.parse(
//   localStorage.getItem("highScoresData")
// ) || [
export let highScores = [
  { 1: 0 },
  { 2: 0 },
  { 3: 0 },
  { 4: 0 },
  { 5: 5 },
  { 6: 0 },
  { 7: 0 },
  { 8: 0 },
  { 9: 0 },
  { 10: 0 },
  { 11: 0 },
  { 12: 0 },
];

// // Update scores (for example, setting score 5 for times table 7)
// const timesTableToSet = 7; // Change this to the desired times table
// const newScore = 5; // Change this to the desired score

// // Find the index of the object for the specified times table
// const indexToUpdate = highScores.findIndex(
//   (scoreObj) => Object.keys(scoreObj)[0] == timesTableToSet.toString()
// );

// // Update the score if the times table exists in the highScores array
// if (indexToUpdate !== -1) {
//   highScores[indexToUpdate][timesTableToSet] = newScore;
// }

// // Convert highScores to JSON string
// const highScoresString = JSON.stringify(highScores);

// // Save highScores back to localStorage
// localStorage.setItem("highScoresData", highScoresString);
