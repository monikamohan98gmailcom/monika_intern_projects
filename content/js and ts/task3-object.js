function combine(name,email,age){
    const object={};
    object.Name=name;
    object.emailid=email;
    object.Age=age;
    return object;
}
const block=combine('moni','monika@gmail.com',22);
console.log(block);        //object formed
const template=`${block.Name} ${block.emailid} ${block.Age}`;  //template is done with a string
//document.getElementById('doc').innerHTML=template;
console.log(template)       
const split=template.split(" ");  //split is done in string
console.log(split);
const joins=split.join(" , ");     //it is joined by comma by joins keyword
console.log(joins); 
document.getElementById('doc').innerHTML=joins;