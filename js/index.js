document.addEventListener("DOMContentLoaded", function() {


    const mainUl = document.getElementById('list');
    // debugger  

    const bookTitle =(book)=>{
        book.forEach(book =>{
        // debugger
        let newTitle =`<li class="book" data-book-id="${book.id}">${book.title}</li>`;
            mainUl.innerHTML += newTitle
    }
        )

    }

    const ul = `http://localhost:3000/books`;
    fetch(ul)
    .then(resp => resp.json())
    .then(bookTitle)

    const showPanel = document.getElementById('show-panel');

showPanel.addEventListener('click', event =>{
    
    if(event.target.tagName === "BUTTON"){
        addMyselfAsLiker(id)
    }
})
 
    const addMyselfAsLiker(id){
        fetch(`${ul}/${id}`)
        .then(resp => resp.json())

    }
 mainUl.addEventListener('click', (event)=>{

    

    if(event.target.className === 'book'){
        
        const bookId = event.target.dataset.bookId;
        getBookInfo(bookId).then(info =>{
            // console.log("hello")
            
           let bookInfo = `<span><img src="${info.img_url}"/><p>${info.description}</P><button>🤓</button></span>`;
           const readers = info.users;
           //const readerPara = document.createElement('p');

           
           let readerOl = "<p><ol>";
           
        //    console.log(readerOl);
           readers.forEach(reader => {
            //debugger
           
            
               const addReader = `<li data-reader-id="${reader.id}">${reader.username}</li>`;
            //    console.dir(addReader);
                readerOl += addReader
                // return readerOl;
                
           })
            readerOl += "</ol></p>";
            showPanel.innerHTML += bookInfo;
            showPanel.innerHTML += readerOl;
           //showPanel.innerHTML += readerPara;
         

        }
        )


        } 
        
        

    })
 const getBookInfo = (id)=>{
     return fetch(`${ul}/${id}`)
     .then(resp => resp.json())
    
 }

 })
 
 const likeBook = (id) =>{


 }

