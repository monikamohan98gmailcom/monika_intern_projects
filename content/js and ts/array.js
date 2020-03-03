array=[
    {name:'pen',price:5},
    {name:'pencil',price:10},
    {name:'eraser',price:3},
    {name:'sharpener',price:5},
    {name:'scale',price:10}
]

//find
const find=array.find(value=>{
    return value.price==5;
})
console.log('find:'+find);

//includes
const include=array.includes(name=='pen');   
console.log('includes:'+include)

//every
const every=array.every(value=>{
    return value.price==5;
})
console.log('every:'+every);