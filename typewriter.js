const sentence = "hello there from lighthouse labs";
let duration = 0;
function typewriter(str) {
  for (const char of str) {
    duration += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, duration);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, duration + 50);
};
typewriter(sentence);

