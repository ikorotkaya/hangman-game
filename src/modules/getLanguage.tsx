// function to get the language from the browser
export default function getLanguage() {
  const language = navigator.language.split('-')[0];
  return language
}

