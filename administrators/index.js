let firstName = document.getElementById('firstNameA');
let lastName = document.getElementById('lastNameA');
let workStartingDate = document.getElementById('workStartingDateA');
let hisSpecialty = document.getElementById('hisSpecialtyA');
let create = document.getElementById('createA');
let search = document.getElementById('searchA');
let mood = 'create';
let tmp;

// create 
let dataProA;
if(localStorage.administrators != null){
    dataProA = JSON.parse(localStorage.administrators)
}else{
   dataProA = []; 
}

create.onclick = function(){
    let newProA = {
        firstName:firstName.value.toLowerCase(),
        lastName:lastName.value.toLowerCase(),
        workStartingDate:workStartingDate.value,
        hisSpecialty:hisSpecialty.value.toLowerCase(),
    } 

    if(mood === 'create'){
       dataProA.push(newProA); 
    }else{
          dataProA [ tmp ] = newProA
          mood = 'create';
          create.innerHTML = 'Create';
    }
    

    // save in local storage
    localStorage.setItem('administrators', JSON.stringify(dataProA))

    clearDataA()

    showDateA()
}

// clear data

function clearDataA(){
    firstName.value ='';
    lastName.value ='';
    workStartingDate.value ='';
    hisSpecialty.value ='';
}

// read

function showDateA()
{
    let table = '';
    for(let i = 0; i < dataProA.length; i++){
        table += `
        <tr>
            <td> ${i+1} </td>
            <td> ${dataProA[i].firstName +' '+ dataProA[i].lastName} </td>
            <td> ${dataProA[i].workStartingDate} </td>
            <td> ${dataProA[i].hisSpecialty} </td>
            <td>  <button id="btnSearch" onclick="updateDataA(${i})" class="btn btn-primary" >Update</button></td>
            <td>  <button id="btnSearch" onclick="deleteDataA(${i})" class="btn btn-primary" >Delete</button></td></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
}showDateA()


// delete

function deleteDataA(i){
    dataProA.splice(i,1);
    localStorage.administrators = JSON.stringify(dataProA)
    showDateA()
}

// update

function updateDataA(i){
    firstName.value = dataProA[i].firstName;
    lastName.value = dataProA[i].lastName;
    workStartingDate.value = dataProA[i].workStartingDate;
    hisSpecialty.value = dataProA[i].hisSpecialty
    create.innerHTML = 'Update'
    mood = 'Update';
    tmp = i;
    scroll({
        top : 75,
        behavior : 'smooth',
    })
}


// search
function searchDataA(value){
    let table = '';
    for(let i =0; i < dataProA.length; i++){
    if(dataProA[i].firstName.includes(value.toLowerCase()) + dataProA[i].lastName.includes(value.toLowerCase()) + dataProA[i].hisSpecialty.includes(value.toLowerCase())){
    table += `
        <tr>
            <td> ${i+1} </td>
            <td> ${dataProA[i].firstName +' '+ dataProA[i].lastName} </td>
            <td> ${dataProA[i].workStartingDate} </td>
            <td> ${dataProA[i].hisSpecialty} </td>
            <td>  <button id="btnSearch" onclick="updateDataA(${i})" class="btn btn-primary" >Update</button></td>
            <td>  <button id="btnSearch" onclick="deleteDataA(${i})" class="btn btn-primary" >Delete</button></td>
        </tr>`
    }
    }document.getElementById('tbody').innerHTML = table;
}