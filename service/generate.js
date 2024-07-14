
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const specialCharacters = '!@#$%^&*-_?';

const specialCharacterCount = 11;

exports.generate = function (length, firstCharLetterOrNumber) {
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
        let charType
        if (i === 0 && firstCharLetterOrNumber.toLowerCase() === 'true') {
            charType = Math.floor(Math.random() * 3);
        } else {
            charType = Math.floor(Math.random() * 4);
        }

        switch (charType) {
            case 0:
                //Lowercase letter
                generatedPassword = generatedPassword + lowerCaseLetters.charAt(Math.floor(Math.random() * 26));
                break;
            case 1:
                //Uppercase letter
                generatedPassword = generatedPassword + upperCaseLetters.charAt(Math.floor(Math.random() * 26));
                break;
            case 2:
                //Number
                generatedPassword = generatedPassword + Math.floor(Math.random() * 10).toString();
                break;
            case 3:
                //Special char
                generatedPassword = generatedPassword + specialCharacters.charAt(Math.floor(Math.random() * specialCharacterCount));
                break;
        }
    }
    return generatedPassword;
}