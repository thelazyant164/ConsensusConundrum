const parse = (data) => {
    question = data.question;
    trimmedQuestion = question.replaceAll("Would you rather ", "");
    splitOptions = trimmedQuestion.split(" or ");
    return {
        red: `${splitOptions[0]}?`,
        blue: `${splitOptions[1]}`,
        redWin: Math.random() >= .5,
    }
}

module.exports = {
    parse
}