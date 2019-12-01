sum = (x) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(x + 5000)
        }, 3000)
    })
}

sum(730)
.then((result)=>{
    console.log(`Result: ${result}`)
})
.catch((error) =>{
    console.log(`Error: ${error}`)
})