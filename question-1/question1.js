const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(arr)){
            reject("The passed parameter is not an array!");
            return ; 
        }

        const lowerCaseWordsArray = arr.filter((val) => typeof val === "string")
                                        .map((word) => word.toLowerCase());

        resolve(lowerCaseWordsArray)

    })

}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]

lowerCaseWords(arr)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })