function addCloseButton(){
    const listtag=document.getElementsByTagName('li');
    let counter=0;
    for(let i=0; i<listtag.length; i++)
    {
        const currentListTag=listtag[i]
        if(counter<1){
        const deleteButton=document.createElement('span');
        deleteButton.style.fontWeight='bold'
        deleteButton.style.marginLeft="1rem"
        deleteButton.style.color='red'
        deleteButton.textContent="X";
        deleteButton.addEventListener('click',()=>{
            currentListTag.remove();
        })
        currentListTag.appendChild(deleteButton)

        const completeButton=document.createElement('span');
        completeButton.style.fontWeight='bold'
        completeButton.style.marginLeft="1rem"
        completeButton.style.color='green'
        completeButton.textContent="Done";
        completeButton.addEventListener('click',()=>{
            const completedTask=currentListTag;
            completedTask.style.textDecoration='line-through';
        })
        currentListTag.appendChild(completeButton)

        counter++;
    }
    }
}

function addTodo() {

    const taskElement = document.getElementById('task');
    if (!taskElement.value) {
        alert("Input value is required");
    }
    else {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskElement.value;
        const unorderedList = document.getElementById('listitem');
        unorderedList.prepend(taskItem);
        taskElement.value = "";
        addCloseButton();
    }
   
}

document.getElementById('btn').addEventListener('click',addTodo);
