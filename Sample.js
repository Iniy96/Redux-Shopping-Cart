const myArray = ["apple","apple","orange","grapes","orange","pomogrannite"]

const uniqe = [...new Set(myArray)]

//const unique = myArray.filter((value,index)=> myArray.indexOf(value)===index)

/* 
//forEach Method
const unique=(arr)=>{
     const uniqueArr=[]
     arr.forEach(element => {
        if(!uniqueArr.includes(element)){
            uniqueArr.push(element)
        }
     });
     return uniqueArr
}
 */
/* 
//reduce method
const uniqe = myArray.reduce((acc,cur)=>{
    if(!acc.includes(cur)){
        acc.push(cur)
    }
    return acc
},[])
 */
console.log(uniqe)

const numArray = [9,7,6,8,0,2,1,12,205]

const sortnumArrasString = numArray.sort()
const sortnumarrAsNum = numArray.sort((a,b)=>a-b)

console.log(numArray);
