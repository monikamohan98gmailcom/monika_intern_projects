//asynchronous function
//fetch keyword fetches the data from the api user site

fetch('https://api.spacexdata.com/v3/launches',{
method:'get',   
mode: 'cors',
   
}).then((data)=>{   
    //console.log(data.json());
    return data.json();
}).then((Response)=>{
    //console.log(Response);
    list(Response);
});

function list(response){
    array="";
    response.forEach(element => {
       // console.log(element.flight_number,element.mission_name,element.launch_year,element.launch_success);
       const list=`<b><ul>
                        <li>i)Flight no:${element.flight_number }\u00A0\u00A0\u00A0\u00A0
                        ii)Mission name:${element.mission_name}\u00A0\u00A0\u00A0\u00A0
                        iii)Launch year:${element.launch_year}\u00A0\u00A0\u00A0\u00A0
                        iv)Launch success: <span style="color:${element.launch_success?'green':'red'}; font-color:solid green">
                        <u>${element.launch_success}</u></span>
                        <button type=button id="view" onclick="function(${element}){console.log(element)}">click here to view more</button></li>
                    </ul></b>`
                   
                    array+=list; 
        document.getElementById('details').innerHTML=array;
    });
}


function view_more(element){
    //element.forEach(value=>{
        console.log(element);
   // });
}




