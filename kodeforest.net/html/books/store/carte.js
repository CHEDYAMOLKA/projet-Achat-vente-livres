
books = JSON.parse(localStorage.getItem("Books") )||[];
console.log(books);

function carte(){
    var liste=document.getElementById('bookList');
    books.forEach(book => {
        
    liste .innerHTML+=`
    <div class="col-md-3 col-sm-6">
    <div class="books-listing-4">
        <div class="kode-thumb">
            <a href="#"><img src="images/book.png" alt=""></a>
        </div>
        <div class="kode-text">
            <h3><a href="#">${book.namebook}</a></h3>
            <p>Sed ut perspiciatis</p>
        </div>
        <div class="book-price">
            <p>${book.prix}</p>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
        </div>
        <a href="#" class="add-to-cart">Add to cart</a>
    </div>
</div>
  
`
});
}
carte()