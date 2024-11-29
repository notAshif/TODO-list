let inputTask = document.getElementById('task');
let SubmitTask = document.getElementById('submit');
let todocontainer = document.querySelectorAll('.todocontainer');


SubmitTask.addEventListener('click', () =>{
    const paragraph = document.createElement('li');
    const task = inputTask.value;
    paragraph.textContent = task;
    paragraph.classList.add('paragraph-styling');
    inputTask.value = '';
    paragraph.style.fontSize = '20px';


    if(task){
        if(todocontainer.length > 0){
            todocontainer[0].appendChild(paragraph);
        } 
    }
    else{
        alert('Please enter a task');
    }

    paragraph.addEventListener('click', () =>{
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', () =>{
        todocontainer[0].removeChild(paragraph);
    })

});
