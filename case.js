
function caseConverter(string, type){
    var stringArray = string.split(" ");
    var stringArrayToReturn = [];
    if (type==="camelcase"){
        for(var i=1; i<stringArray.length; i++){
            // each i is a separate word

            var firstLetter = stringArray[i].charAt(0).toUpperCase();
            var restOfWord = stringArray[i].slice(1); 
            //this should take the rest of the word and slice it into rest of word
            var wordInCamelCase = firstLetter + restOfWord;
            stringArrayToReturn.push(wordInCamelCase);             
            // console.log(wordInCamelCase);
        }
        stringArrayToReturn.unshift(stringArray[0]);
        console.log(stringArrayToReturn)
        var camelCaseWord = stringArrayToReturn.join("")
        console.log(camelCaseWord);

    }else if(type==="snakecase"){
        var snakeCaseArray = [];
        for(var i=0; i<stringArray.length; i++){
        var word = stringArray[i].toLowerCase();
        snakeCaseArray.push(word);

            
        }
        var snakeCaseWord = snakeCaseArray.join("_");
        console.log(snakeCaseWord);
    }
}

caseConverter("how are you doing today", "camelcase");
caseConverter("i am doing great", "snakecase");