import words from "../wordList.json";

export default function getNewWord() {
  return words[Math.floor(Math.random() * words.length)];
}
