const shoppingList=document.querySelector('.shopping-list');
const shoppinfForm=document.querySelector('.shopping-form');

document.addEventListener('DOMContentLoaded',function (){
    loadItems();
    shoppinfForm.addEventListener('submit',handleFormSubmit);
});



function loadItems(){
    const items = [
        {id:1 , name:'En Az 3 Saat Kodlama Yap' , completed:false},
        {id:2 , name:'Ödevleri Yap' , completed:true},
        {id:3 , name:'Yemek Yap' , completed:false},
        {id:4 , name:'3 Litre Su İç' , completed:false},
    ];

    shoppingList.innerHTML= "";

    for(let item of items){
       const li=createListItem(item);
       shoppingList.appendChild(li);

    }
}
function addItem(input){
    const newItem=createListItem({
        id:generateId(),
        name:input.value,
        completed:false
    });

    shoppingList.appendChild(newItem);
    input.value='';

}
function generateId(){
    return Date.now().toString();
}



function handleFormSubmit(e){
    e.preventDefault();
   
    const input=document.getElementById('item_name');

    if(input.value.trim().length === 0){
        alert("Yeni bir değer giriniz");
        return;
}

addItem(input);
}

function toggleCompleted(e){
    const li=e.target.parentElement;
    li.toggleAttribute('item-completed',e.target.checked);
}

function createListItem(item){
    //checbox
    const input=document.createElement('input');
    input.type='checkbox';
    input.classList.add('form-check-input');
    input.checked=item.completed;
    input.addEventListener("change",toggleCompleted);

    //item
    const div=document.createElement('div');
    div.textContent=item.name;
    div.classList.add('item-name');

    //delete icon
    const deleteIcon=document.createElement('i');
    deleteIcon.className="fs-3 bi bi-x text-danger delete-icon";
    deleteIcon.addEventListener('click', removeItem);

    // li
    const li=document.createElement('li');
    li.className='border rounded p-2 mb-1';
    li.toggleAttribute('item-completed',item.completed);

    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(deleteIcon);

    return li;



}

function removeItem(e){
    const li=e.target.parentElement;
    shoppingList.removeChild(li);
}

     