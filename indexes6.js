console.log("This is ES6 version of this project...")

class book{
    constructor(name, author, type){
        this.name = name,
        this.author = author,
        this.type = type
    
    }
}

class Display{
    add(book){
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
}

clear(){
    let libraryForm = document.getElementById("libraryForm")
    libraryForm.reset()
}
