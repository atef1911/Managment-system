let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let workStartingDate = document.getElementById('workStartingDate');
let hisSpecialty = document.getElementById('hisSpecialty');
let create = document.getElementById('create');
let search = document.getElementById('search');
let mood = 'create';
let tmp;

// create 
let dataPro;
if(localStorage.employees != null){
    dataPro = JSON.parse(localStorage.employees)
}else{
   dataPro = []; 
}

create.onclick = function(){
    let newPro = {
        firstName:firstName.value.toLowerCase(),
        lastName:lastName.value.toLowerCase(),
        workStartingDate:workStartingDate.value,
        hisSpecialty:hisSpecialty.value.toLowerCase(),
    } 

    if(mood === 'create'){
       dataPro.push(newPro); 
    }else{
          dataPro [ tmp ] = newPro
          mood = 'create';
          create.innerHTML = 'Create';
    }
    

    // save in local storage
    localStorage.setItem('employees', JSON.stringify(dataPro))

    clearData()

    showDate()
}


// clear data

function clearData(){
    firstName.value ='';
    lastName.value ='';
    workStartingDate.value ='';
    hisSpecialty.value ='';
}


// read

function showDate()
{
    let table = '';
    for(let i = 0; i < dataPro.length; i++){
        table += `
        <tr>
            <td> ${i+1} </td>
            <td> ${dataPro[i].firstName +' '+ dataPro[i].lastName} </td>
            <td> ${dataPro[i].workStartingDate} </td>
            <td> ${dataPro[i].hisSpecialty} </td>
            <td>  <button id="btnSearch" onclick="updateData(${i})" class="btn btn-primary" >Update</button></td>
            <td>  <button id="btnSearch" onclick="deleteData(${i})" class="btn btn-primary" >Delete</button></td></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
}showDate()


// delete

function deleteData(i){
    dataPro.splice(i,1);
    localStorage.employees = JSON.stringify(dataPro)
    showDate()
}

// update

function updateData(i){
    firstName.value = dataPro[i].firstName;
    lastName.value = dataPro[i].lastName;
    workStartingDate.value = dataPro[i].workStartingDate;
    hisSpecialty.value = dataPro[i].hisSpecialty
    create.innerHTML = 'Update'
    mood = 'Update';
    tmp = i;
    scroll({
        top : 75,
        behavior : 'smooth',
    })
}

// search
function searchData(value){
    let table = '';
    for(let i =0; i < dataPro.length; i++){
    if(dataPro[i].firstName.includes(value.toLowerCase()) + dataPro[i].lastName.includes(value.toLowerCase()) + dataPro[i].hisSpecialty.includes(value.toLowerCase())){
    table += `
        <tr>
            <td> ${i+1} </td>
            <td> ${dataPro[i].firstName +' '+ dataPro[i].lastName} </td>
            <td> ${dataPro[i].workStartingDate} </td>
            <td> ${dataPro[i].hisSpecialty} </td>
            <td>  <button id="btnSearch" onclick="updateData(${i})" class="btn btn-primary" >Update</button></td>
            <td>  <button id="btnSearch" onclick="deleteData(${i})" class="btn btn-primary" >Delete</button></td>
        </tr>`
    }
    }document.getElementById('tbody').innerHTML = table;
}