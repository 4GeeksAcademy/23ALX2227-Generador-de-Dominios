/* eslint-disable */

function generador() {
  const palabras = {
    pronouns: ["The", "Your", "Our", "Mine", "They"],
    adjective: [
      "Funny",
      "Glamorous",
      "Ignorant",
      "Illegal",
      "Large",
      "Obese",
      "Hot"
    ],
    nouns: [
      "Advice",
      "Website",
      "Racoon",
      "Lion",
      "Band",
      "Newspapper",
      "Console",
      "Call-center",
      "Assistant",
      "Bike"
    ]
  };

  let ejemplos = [];

  for (i = 0; i < palabras.pronouns.length; i++) {
    for (j = 0; j < palabras.adjective.length; j++) {
      for (k = 0; k < palabras.nouns.length; k++) {
        ejemplos.push(
          palabras.pronouns[i] +
            palabras.adjective[j] +
            palabras.nouns[k] +
            ".com"
        );
      }
    }
  }
  return ejemplos;
}

console.log(generador());
