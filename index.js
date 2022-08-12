let container = document.querySelector(".container");

let inputGroup = document.querySelector(".input-group");
let addButton = document.querySelector("#add");
let form = document.querySelector(".display-form");

console.log(container);

class Book {
    constructor(author,title,pages){
        this.author=author;
        this.title = title;
        this.pages = pages
    }
    
}



class Library {
    constructor(arr =[]){
        this.arr =arr;
        this.book = null;
    }

    addBookToLibrary(){
        let {arr,book,renderCard} = this;
        form.addEventListener("click",function(e){
            e.preventDefault();
            if(e.target.matches("#submit")){
                let authorValue = document.querySelector("#author").value;
                let titleValue = document.querySelector("#title").value;
                let pageValue = document.querySelector("#pages").value;
                book = new Book(authorValue,titleValue,pageValue);
                arr.push(book);
                form.classList.toggle("display-form");
                renderCard(book);
            }
        })
    }

    renderCard(book){
        let{author,title,pages} = book;
        let createDiv = document.createElement("div");
        createDiv.innerHTML = `<h1>${author}</h1>`;
        createDiv.classList.add("card");
        container.appendChild(createDiv);


    }

  
}


let lib = new Library();
lib.addBookToLibrary();


addButton.addEventListener("click",function(){
    form.classList.toggle("display-form");

})



/*
inputGroup.addEventListener("click",function(event){
    if(event.target.matches("#add")){
        
    }

})


*/


/*

let myLibrary = [];
let book1 = new Book("calleja");

myLibrary.push(book1);
myLibrary[myLibrary.indexOf(book1)].index=myLibrary.indexOf(book1);

class CardContainer{
    constructor(myLibrary){
        this.myLibrary =myLibrary;
    }
    delete
}
*/









