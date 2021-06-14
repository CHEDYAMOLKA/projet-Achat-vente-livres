
books = JSON.parse(localStorage.getItem("Books") )||[];
console.log(books);

function book(){
    var liste=document.getElementById('bookList');
    books.forEach(book => {
        
    liste .innerHTML+=`
    <div class="kode-best-pro-seller">
    <div class="kode-thumb">
        <a href="#"><img src="images/book9.png" alt=""></a>
    </div>
    <div class="kode-text">
        <h4>${book.namebook}</h4>
        <p>Creative Living</p>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <p class="price">${book.prix}</p>
        <div class="clear"></div>
        <a href="#" class="add-to-cart">ADD TO CART</a>
    </div>
</div>
  
`
});
}
book()