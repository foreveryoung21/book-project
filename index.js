let container = document.querySelector(".container");

let inputGroup = document.querySelector(".input-group");
let addButton = document.querySelector("#add");
let form = document.querySelector(".display-form");

console.log(container);

class Book {
    constructor(author, title, pages) {
        this.author = author;
        this.title = title;
        this.pages = pages
    }


}



class Library {
    constructor(arr = []) {
        this.arr = arr;
        this.book = null;
    }

    addBookToLibrary() {
        let { arr, book, renderCard, changeStatus } = this;
        form.addEventListener("click", function (e) {
            e.preventDefault();
            if (e.target.matches("#submit")) {
                let authorValue = document.querySelector("#author").value;
                let titleValue = document.querySelector("#title").value;
                let pageValue = document.querySelector("#pages").value;
                book = new Book(authorValue, titleValue, pageValue);
                arr.push(book);
                form.classList.toggle("display-form");
                renderCard(book);

            }
        })
    }

    renderCard(book) {
        let { author, title, pages, } = book;
        let createDiv = document.createElement("div");
        createDiv.innerHTML = `<span></span><h1>${title}</h1><h1>${author}</h1><h1>${pages}</h1>
        <i class="fa fa-remove"></i>
        <button type="button">Click Me!</button><label for="status">read</label><input type="checkbox" id="status" name="status" >
        `;
        createDiv.classList.add("card");
        container.appendChild(createDiv);


    }

    deleteBook() {
        let arr = this.arr;
        container.addEventListener("click", function (event) {
            if (event.target.matches(".fa-remove")) {
                let child = event.target.parentNode;
                let sibling = event.target.previousSibling.innerText;
                for (let i = 0; i < arr.length; i++) {
                    let book = arr[i];
                    if (book.author === sibling) {
                        arr.pop()
                    }
                }
                container.removeChild(child);

            }
        })

    }

    changeStatus() {
        container.addEventListener("click", function (event) {
        
           
            
if (event.target.matches("button")) {
                let checkbox = event.target.nextElementSibling.nextElementSibling;
                if(!checkbox.checked){
                    checkbox.checked = true;
                }else{
                    checkbox.checked = false;
                }
            }

        })

    }




}


let lib = new Library();
lib.addBookToLibrary();
lib.deleteBook();
lib.changeStatus();



addButton.addEventListener("click", function () {
    form.classList.toggle("display-form");

})


