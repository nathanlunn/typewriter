const sentence = "hello there from lighthouse labs\n";
// const timeout = function(char, time) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, time)
// };

// let time = 0;
// for (let char of sentence) {
//   time += 50;
//   timeout(char, time);
// }

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 50);
}

// setTimeout(() => {
//   console.log();
// }, sentence.length * 50);