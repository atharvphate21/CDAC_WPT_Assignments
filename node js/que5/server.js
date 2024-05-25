const fs = require("fs").promises;

async function countWords(filepath) {
  try {
    const data = await fs.readFile(filepath, "utf-8");
    const words = data.split(/\s+/).filter((word) => word.length > 0);
    return words.length;
  } catch (err) {
    console.log("Error while reading the file: " + err);
  }
}

async function readFile() {
  try {
    const [words1, words2] = await Promise.all([
      countWords("myfile.txt"),
      countWords("mydata.data"),
    ]);
    console.log("No. of words in myfile.txt = " + words1);
    console.log("No. of words in mydata.data = " + words2);
  } catch (err) {
    console.log("Error: " + err);
  }
}

readFile();
