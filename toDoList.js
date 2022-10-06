 const prompt = require('prompt-sync')({sigint: true});
 //welcome message
 console.log('Welcome to the To-Do List Manager Application!\n----------------------------------------------------');
//directions promting user which action to take.
 console.log('~Select an action~');
 console.log('[1] Create a to-do item');
 console.log('[2] Complete a to-do item');
 console.log('[3] Exit To-Do List Application');
 
//prompt variable taking users input
 let option = Number(prompt('> '));
//empty arraya
 let toDoList = [];
 let statusArray = []
 //while loop ,for to do list ending only when user enters '3' to exit
 while(option !== 3){
//if statement for users choices 
    if (option === 1){
        //if user chooses option 1, log creation message, and asks user what task needs to be done
  
    console.log('~ Creating a new to-do item ~');

    console.log('What is this To-Do item called?');
   
    //add to do item , using a new prompt variable
        let addItem = prompt('> ');
      //if user doesnt enter anything while loop will re prompt user until user enters To-Do item  
        while(addItem.length === 0){
            console.log('Invalid: Input cannot be empty')
            addItem = prompt('> ');
        }
      //  to-do item gets pushed to end of to-do list  array  
        toDoList.push(addItem);
    // status array assigns false , for incomplete to match index of item in to do list array
        statusArray.push(false);

        //displaying  toDoList function
        displayList();
    
        
    //reprompt the user
       selectOption();
   //if user chooses option , user can complete option
    }else if (option === 2){

       //if list length is greater than zero, user gets prompted for the item to complete
        if(toDoList.length !== 0){
           console.log('\n~ Completing a to-do item ~')
           console.log('Which to-do item would you like to complete? ')
        
            displayList();}
            //complete an item

       
        //variable that will change toDo items from incomplete to complete
        let newStatus = Number(prompt('> '));

        //console.log('newStatus check: '' + typeof newStatus);
        while(isNaN((newStatus)) || newStatus > statusArray.length || newStatus < 1 ){
            console.log('Please input a number that corresponds to an item in the list: ')
            newStatus = Number(prompt('> '));

        }
    

        statusArray[newStatus-1] = true;

       
        // complete an item
    
        displayList()
    //reprompt user 
        selectOption()
    }else {
    console.log('Invalid operation');
     
    selectOption()
    }
    
}

 //Exiting Application
 console.log('~ Exiting To-Do list Application ~')

 
 //------------------functions-------------------------------
 function selectOption(){
    console.log('\n~Select an action~');
    console.log('[1] Create a to-do item');
    console.log('[2] Complete a to-do item');
    console.log('[3} Exit To-Do List Application');
    
    option = Number(prompt('> '));
 }

 function displayList(){
    if(toDoList.length === 0){
        console.log('Your to list is empty.')
    }else{
        console.log(`You have ${toDoList.length} item(s)`)
    }
    for (let i = 0; i< toDoList.length; i++){
        let status = '';

        if (statusArray[i]=== false){
            status = '[incomplete]';
        } else if (statusArray[i]=== true){
            status = '[complete]'
        }

        console.log(`${i+1}. ${status} ${toDoList[i]}`);
    }
}
/* 1. figure out the UI
--console.log 
    -welcome message
    -different option - add task, complete task, exit program
    -errormessages for invald options
    -spacing/separators for readability

--prompts
    -numbers to decide which option using ifs
    -adding task to create item - prompt user to create item
    -mark task as complete - prompt user for which task is complete
    -exit

--while loop
    -program has no known ending, want to be able to prompt user until decision to exit
    
--display toDoList to user
    -completion status
    -name of the item
    -number associated with item
    -loop to display each item in toDoList
 

    2. Add To-Do Items (choice === 1)
    -prompt for item
    -store item in an array - .push()
    -need array to keep track of toDo items -global variable

    
    2.5 -how do we set items to be incomplete 
    -any item in the list is [incomplete] until we mark it [complete]

    -whenever we add an item to the toDo List it is [incomplete] by default

    array of booleans
    true = [complete]
    false = [incomplete]
    [true,          false,        true,]   status array
    ['walk dog , 'get food', 'run mile']    toDoList array
    1               2           3           shared index

    let status =[]
    default when items added needs to equal false boolean to status array
    
    3. Complete toDo items


    */ 

 
