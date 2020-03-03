const array=[]
const name=document.getElementById('name');
const emailid=document.getElementById('email');
const dateOfNBirth=document.getElementById("dob");
const areaOfInterest=document.getElementById('aoi');
const output=document.getElementById('output');
const gettable=document.getElementById('getTable');

let i=1

function add()
{
    object={};
    object.name=name.value;
    // document.getElementById('resname').innerText=name.value;
    object.emailid=emailid.value;
   // document.getElementById('resemail').innerText=emailid.value;
    object.dateOfNBirth=dateOfNBirth.value;
    //document.getElementById('resdob').innerText=dateOfNBirth.value;
    object.areaOfInterest=areaOfInterest.value;
    //document.getElementById('resaoi').innerText=areaOfInterest.value;
    array.push(object);
    let rows="";
    array.forEach((object)=>{
        const tr=`<tr>
                    <td>${object.name}</td>
                    <td>${object.emailid}</td>
                    <td>${object.dateOfNBirth}</td>
                    <td>${object.areaOfInterest}</td>
                    </tr>`;
        rows+=tr;
        document.getElementById('table-body').innerHTML=rows;
    });

    
    console.log(array);
}

function get_table()
{
    document.getElementById('mytable').style.visibility="visible";
}

output.addEventListener('click',add);

gettable.addEventListener('click',get_table);



// ALTERNATE WAY

// let table=document.getElementById("mytable");
// let row=table.insertRow(i++);
// let col1=row.insertCell(0);
// let col2=row.insertCell(1);
// let col3=row.insertCell(2);
// let col4=row.insertCell(3);
// col1.innerText=name.value;
// col2.innerText=emailid.value;
// col3.innerText=dateOfNBirth.value;
// col4.innerText=areaOfInterest.value;