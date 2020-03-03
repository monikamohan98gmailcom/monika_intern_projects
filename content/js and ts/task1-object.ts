interface profile{
    name:string;
    age:number;
    gender:string;
    nationality:string;
}
function object_creation(arg: profile){
//let person1:profile={} as profile;
arg.name="monika";
arg.age=21;
arg.gender="Female";
arg.nationality="Indian";
return arg;
}

let person1:profile={} as profile;

let obj=object_creation(person1);
let temp:string=`${obj.name} ${obj.age} ${obj.gender} ${obj.nationality}`;
console.log(temp);
const split1=temp.split(" ");
console.log(split1);
const join1=split1.join(",");
console.log(join1);