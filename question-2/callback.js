const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message' : 'delayed success'}
        console.log(success)
    }, 500)

}
const delayedException = () => {
    setTimeout(() => {
        try{
            throw new Error('error : delayed exception')
        }catch(e){
            console.log(e)
        }
    }, 500)
}




const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message' : 'promise resolved'})
        }, 500)
    })
}

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ 'error' : 'promise rejected'})
        }, 500);
    })
}

resolvedPromise()
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e)
    })

rejectPromise()
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e)
    })