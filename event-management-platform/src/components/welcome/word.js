// import fs from "fs";
// import wordListPath from "word-list";

// const englishWords = new Set(fs.readFileSync(wordListPath, "utf8").split("\n"));

// // ✅ **Updated Required Letters (Now 6)**
// const requiredLetters = ["r", "o", "s", "e", "v", "e"]; // Add 2 more required letters

// // ✅ **Available Extra Letters (Choose 1 to form 7-letter words)**
// const extraLetters = ["q", "w","r", "e","s", "y", "o", "k", "j", "h", "f", "z", "x", "c", "v", "b"];

// const validWords = new Set();

// function generateWords() {
//   for (let i = 0; i < extraLetters.length; i++) {
//     const combinedLetters = [...requiredLetters, extraLetters[i]];
//     const permutations = permute(combinedLetters.join(""));

//     permutations.forEach((word) => {
//       if (englishWords.has(word)) {
//         validWords.add(word);
//       }
//     });
//   }
// }

// // Function to generate permutations
// function permute(str) {
//   if (str.length <= 1) return [str];

//   const results = [];
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const remaining = str.slice(0, i) + str.slice(i + 1);
//     for (const perm of permute(remaining)) {
//       results.push(char + perm);
//     }
//   }
//   return results;
// }

// // Run function
// generateWords();

// // ✅ **Print valid words**
// console.log("Valid 7-letter words:", [...validWords]);






// 'flowers', 
//  'resolve',
//  'observe', 
// 'lookers',
// 'lockers',
//   'shocker'
//   function extractSevenLetterWords(paragraph) {
//     // Remove punctuation and convert to lowercase
//     const words = paragraph
//         .replace(/[^\w\s]/g, "") // Remove punctuation
//         .split(/\s+/)            // Split by whitespace
//         .map(word => word.toLowerCase()); // Convert to lowercase

//     // Filter words that are exactly 7 letters long
//     const sevenLetterWords = words.filter(word => word.length === 7);

//     // Remove duplicates
//     const uniqueWords = [...new Set(sevenLetterWords)];

//     return uniqueWords;
// }

// // Example paragraph
// const paragraph = `
//     The flowers were blooming beautifully in the garden.
//     Suddenly, a rainbow appeared in the sky, bright and colorful.
//     Someone whispered a secret that echoed through the valley.
//     The captain ordered everyone to assemble at the station.
//     Scholars often explore various subjects with curiosity.
// `;

// // Extract and print the 7-letter words
// const result = extractSevenLetterWords(paragraph);
// console.log("7-letter words:", result);
