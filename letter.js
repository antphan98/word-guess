//NOTE: created Letter constructor for individual letters

const Letter = function (character) {

    this.character = character;
    this.guess = false;
    this.display = function () {
        if (this.guess === true) {
            return this.character;
        } else {
            return "_";
        }

    };

    this.guessCheck = function (userGuess) {
        if (userGuess === this.character) {
            this.guess = true;
        } else {
            this.guess = false;
        }
    };


}

//he