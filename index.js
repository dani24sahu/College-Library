console.log("This is index.js")

//Constructo
function Book(name, author, type){
    this.name = name,
    this.author = author,
    this.type = type

}

//Display Constructor
function Display(){

}

//Add methods to dislay prototype
Display.prototype.add = function(book){
    console.log("Adding to UI")
    tableBody = document.getElementById('tableBody')
    let uiString = `
          <tr>
                       
             <td>${book.name}</td>
             <td>${book.author}</td>
             <td>${book.type}</td>
        </tr>`
    tableBody.innerHTML += uiString
}

//Implementing The clearfunction
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm")
    libraryForm.reset()
}

Display.prototype.validate = function(book){
   if(book.name.length<2 || book.author.length<2){
       return false
}
else{
    return true
}
}

Display.prototype.show = function(type,displayMsg){
   let message =  document.getElementById('message')
   message.innerHTML= `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
   <strong>Message!</strong> ${displayMsg}
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`

 setTimeout(function() {
     message.innerHTML= ""
 }, 2500);

}



//Add Submit eventListener to libraryForm
let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e){
    console.log("You have Submitted Library Form")
    let name =    document.getElementById('bookName').value
    let author =   document.getElementById('author').value
    let type
    

    let fiction =  document.getElementById('fiction')
    let programming =  document.getElementById('programming')
    let humanity =  document.getElementById('humanity')

    if(fiction.checked){
        type = fiction.value
    }
    else if(programming.checked){
        type = programming.value
    }
    else if(humanity.checked){
        type = humanity.value
    }


    let book = new Book(name, author, type)
    console.log(book)

    let display = new Display()
    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show('success', 'Your book has been successfully added')

    }
    else{
        //Show error to user
        display.show('danger', 'Sorry you cannot add this book')
    }
    
    
    e.preventDefault();
}
