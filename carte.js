//users = JSON.parse(localStorage.getItem("Books") )||[];
//localStorage.setItem("Books",JSON.stringify(users))
books = JSON.parse(localStorage.getItem("Books") )||[];
console.log(books);

function carte(){
    var liste=document.getElementById('carte');
    liste .innerHTML+=`
    <div class="col-md-9">
    <div class="row">
      
        <div class="col-md-4 col-sm-6">
            <div class="best-seller-pro">
                <figure>
                    <img src="${books.uploadimg}" alt="">
                </figure>
                <div class="kode-text">
                    <h3>${books.namebook}</h3>
                </div>
                <div class="kode-caption">
                    <h3>${books.langue}</h3>
                    <div class="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
                    <p>${books.namebook}</p>
                    <p class="price">${books.prix}</p>
                    <a href="#" class="add-to-cart">Add To Cart</a>
                </div>
            </div>
        </div>
       
                
`
}
carte()