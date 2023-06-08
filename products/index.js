let titel = document.getElementById('title');
let Price = document.getElementById('Price');
let category = document.getElementById('category');
let productNumber = document.getElementById('productNumber');
let create = document.getElementById('create');
let search = document.getElementById('search');
let mood = 'create';
let tmp;

// create 
let dataProP;
if(localStorage.products != null){
    dataProP = JSON.parse(localStorage.products)
}else{
   dataProP = []; 
}

create.onclick = function(){
    let newProP = {
        titel:titel.value.toLowerCase(),
        Price:Price.value,
        category:category.value.toLowerCase(),
        productNumber:productNumber.value,
    } 

    if(mood === 'create'){
       dataProP.push(newProP); 
    }else{
          dataProP [ tmp ] = newProP
          mood = 'create';
          create.innerHTML = 'Create';
    }
    

    // save in local storage
    localStorage.setItem('products', JSON.stringify(dataProP))

    clearDataP()

    showDateP()
}

// clear data

function clearDataP(){
    titel.value ='';
    Price.value ='';
    category.value ='';
    productNumber.value ='';
}

// read

function showDateP()
{
    let table = '';
    for(let i = 0; i < dataProP.length; i++){
        table += `
        <tr>
            <td> ${i+1} </td>
            <td> ${dataProP[i].titel} </td>
            <td> ${dataProP[i].Price} </td>
            <td> ${dataProP[i].category} </td>
            <td> ${dataProP[i].productNumber} </td>
            <td>  <button id="btnSearch" onclick="updateDataP(${i})" class="btn btn-primary" >Update</button></td>
            <td>  <button id="btnSearch" onclick="deleteDataP(${i})" class="btn btn-primary" >Delete</button></td></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
}showDateP()

// delete

function deleteDataP(i){
    dataProP.splice(i,1);
    localStorage.products = JSON.stringify(dataProP)
    showDateP()
}

// update

function updateDataP(i){
    titel.value = dataProP[i].titel;
    Price.value = dataProP[i].Price;
    category.value = dataProP[i].category;
    productNumber.value = dataProP[i].productNumber;
    create.innerHTML = 'Update'
    mood = 'Update';
    tmp = i;
    scroll({
        top : 75,
        behavior : 'smooth',
    })
}

// search
function searchDataP(value){
    let table = '';
    for(let i =0; i < dataProP.length; i++){
    if(dataProP[i].titel.includes(value.toLowerCase()) + dataProP[i].category.includes(value.toLowerCase())){
    table += `
        <tr>
            <td> ${i+1} </td>
            <td> ${dataProP[i].titel} </td>
            <td> ${dataProP[i].Price} </td>
            <td> ${dataProP[i].category} </td>
            <td> ${dataProP[i].productNumber} </td>
            <td>  <button id="btnSearch" onclick="updateDataP(${i})" class="btn btn-primary" >Update</button></td>
            <td>  <button id="btnSearch" onclick="deleteDataP(${i})" class="btn btn-primary" >Delete</button></td>
        </tr>`
    }
    }document.getElementById('tbody').innerHTML = table;
}
