const todoList = [{name:'make dinner',dueDate: '2022-12-22'}
];
todoList.pop();
 let todoListHTML = ``;
 function renter()
 {
    let todoListHTML = ``;
 for(let i =0; i< todoList.length ; i++)
 {
   
    const todoObject = todoList[i];
    //const name =todoObject.name;
    //const dueDate=todoObject.dueDate;
    const {name, dueDate} = todoObject;
    if(name != ''){
    const html = `
   <div style="padding-left:5px;">${name}</div>
   <div>${dueDate}</div>
    <button onclick=" 
     todoList.splice(${i},1);
     renter();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
    console.log("hello");
    //console.log(todoList.length());
   }
 }
 document.querySelector(`.js-todo-list`).innerHTML = todoListHTML;
 }
function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
 
   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;
 if(inputElement.name != null){
   todoList.push({
     //name: name,
     //dueDate: dueDate,
     name,
     dueDate
   });
}
 
   inputElement.value = '';
 
   renter();
 }