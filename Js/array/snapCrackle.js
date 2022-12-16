


function snapCrackle(maxValue){
    let todos = []
    
    for(let i = 0 ; i <= maxValue; i++){
        if(i % 2 != 0){
            todos.push("snap")
            
            
        }else if(i % 5 == 0){
            todos.push("Crackle")

        }else if(i % 2 != 0 && i % 5 == 0){
            todos.push("SnapCrackle")
            
        }else{
            todos.push(i)
        }  
    }return todos

}


console.log(snapCrackle(27))