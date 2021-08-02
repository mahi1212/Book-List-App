// Have to do
// 1.Dom Selection
// 2.Event listener
// 3.Basic Validation
// 4.Creating Elements
// 5.Append
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function(e){
    e.preventDefault();

    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Kisu ekta input lagbo vai");
    }else{
        const newRow = document.createElement('tr');
        newRow.classList.add('row')

        // creating new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newTitle.classList.add('col-4');
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newAuthor.classList.add('col-4');
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newYear.classList.add('col-4');
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
});
