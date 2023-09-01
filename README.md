# Hangman Game 

![Hangman game screenshots](https://github.com/ikorotkaya/hangman_typescript_react/assets/91027118/dc00cfd1-d2f7-42f2-a905-a4285b51dcdb)

![GitHub License MIT](https://img.shields.io/github/license/sqlhabit/sql_schema_visualizer?color=%2347A3F3)

Welcome to Hangman, a simple React app built with TypeScript! This project is a digital version of the classic word-guessing game, where players attempt to guess a hidden word letter by letter.

## Technologies Used

- *React*: A JavaScript library for building user interfaces.
- *TypeScript*: A statically-typed superset of JavaScript, adding type annotations and other features.
- *Vite*: A fast, opinionated web dev build tool.
- *SCSS*: Syntactically Awesome Style Sheets for styling the app.
- *HTML*: Hypertext Markup Language for structuring the app.

## How to play

1. Choose game language (Currently, the app supports English and German)
2. Enter a letter in the input field (You can use keyboard letters or click the buttons on the screen)
3. If the letter is correct, it will be revealed in the word. Otherwise, a part of the hangman drawing will appear (and wrong letter will be disabled)

![Letters screenshot](https://github.com/ikorotkaya/hangman_typescript_react/assets/91027118/7ecadbb0-c231-4371-964f-861634e72170)

4. Keep guessing letters until you either complete the word or the hangman drawing is fully displayed.If you complete the word, you win the game and the confetti animation will appear!

![Confetti screenshot](https://github.com/ikorotkaya/hangman_typescript_react/assets/91027118/ba6507d1-85b7-4e9c-8b7f-c30464565824)

5. You can reset the game at any time by clicking the "Reset" button, refresh the page or simply press Enter

## Development

You'll need to install dependencies and start the Vite development server:

```sh
npm install

npm run dev
```

You'll find the running game at [http://localhost:5173](http://localhost:5173/)

## Testing

Tests are written with the [React Testing Library](https://testing-library.com/docs/react-testing-library/example-intro). Run all of them via

```sh
npm run test
```



## Contributions

Contributions to the Hangman React app are welcome! If you have any suggestions, bug reports, or feature requests, feel free to submit an issue or a pull request.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.

____

Thank you for checking out the Hangman React app! Have fun playing and improving your word-guessing skills. If you have any questions, feel free to reach out. Happy gaming!