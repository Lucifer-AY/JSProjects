const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let todolist = []

function displaytodo(){
    console.log("\nYour Todo List:")
    if (todolist.length===0){
        console.log("/n No task, pls  added")
    }
    else{
        todolist.forEach((todolist, index) => {
            console.log(`${index + 1}.${todolist}`)
        });
    }
}

function addTodo (){
    readline.question('Enter a new task: ', (answer) => {
        todolist.push(answer);
        console.log("task added");
        displaytodo();
        askForFunction();
});
}
function removeFunction(){
    displaytodo();
    readline.question("Enter the number f task to be removed :",(index)=>{
        const taskIndex = parseInt(index)-1;
        if (taskIndex>=0&& taskIndex<todo.length){
            todo.splice(taskIndex,1);
            console.log("Task removed!!");
        }
        else{
            console.log("Invalid task number!!")
        }
        displaytodo();
        askForFunction();
    });

}

function askForFunction(){
    readline.question('What do you want to do? (add/remove/list/exit) ', (answer) => {
      switch(answer){
        case 'add':
          addTodo();
          break;
        case 'remove':
          removeFunction();
          break;
        case 'list':
            displaytodo ();
            askForFunction();
            break; 
        case 'exit':
            console.log("Thankyou");
            readline.close();
            break;

         
        default:
          console.log('Invalid input');
          askForFunction();
      }
    });
  }
 askForFunction() ;