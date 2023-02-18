
/* Write a function consonantCancel that takes in a sentence
and returns a new sentence where every word begins with it's first vowel.*/


function consonantCancel(sentence) {
    let words = sentence.split(" ");
    let newWord = [];

    for (let i = 0; i < words.length; i++) {
        newWord.push(removeConsonants(words[i]))
    }
    return newWord.join(" ");
};

let removeConsonants = function(word){
    for (let i = 0; i < word.length; i++) {
        let vowel = "aeiou";
        let newWord = "";

        if (vowel.includes(word[i])) { // when the word has a vowel / slice the sentence there
            newWord += word.slice(i);
            return newWord;
        }
    }
};


console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
