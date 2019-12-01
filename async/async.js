sum = (x) =>{
    return new Promise((resolve, reject) =>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject(`Value invalid...`)
        }
        setTimeout(()=>{
            resolve(x + 5000)
        }, 3000)
    })
}

 main = async () =>{

    try{
        const result = await sum('#')
        console.log(`Result: ${result}`)

    }catch(error){
        console.log(`Error: ${error}`)
        console.log(`UserName: `,process.env.USERNAME)
    }

}

main()
