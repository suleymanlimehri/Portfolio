document.addEventListener("DOMContentLoaded", async () => {
        let response = await fetch("https://fakestoreapi.com/products");
        let products = await response.json();
        console.log(products);

        let urlParams = new URLSearchParams(window.location.search);
        let productId = parseInt(urlParams.get('id')); 
        let product = products.find(p => Number(p.id) === productId);
        let container = document.querySelector('.product-container');

        if (product) {
            container.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" />
                </div>
                <div class="product-details">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">$${product.price}</p>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <span>Rating: ${product.rating.rate} / 5</span>
                        <span>(${product.rating.count} reviews)</span>
                    </div>
                    <div class="quantity-selector">
                        <button id="decrease">-</button>
                        <input type="number" id="quantity" value="1" min="1" />
                        <button id="increase">+</button>
                    </div>
                    <button class="btn btn-success" id="button">Add to Cart</button>
                </div>
            `;

            let quantityInput = document.getElementById('quantity');

            document.getElementById('increase').addEventListener('click', () => {
                quantityInput.value = parseInt(quantityInput.value) + 1;
            });

            document.getElementById('decrease').addEventListener('click', () => {
                if (parseInt(quantityInput.value) > 1) {
                    quantityInput.value = parseInt(quantityInput.value) - 1;
                }
            });
            document.getElementById('button').addEventListener('click', () => {
                let users = JSON.parse(localStorage.getItem("users")) || [];
                let currentUser = users.find((user) => user.isLogined == true); 
                let card=currentUser?.card || []
                    if (!currentUser) {
                        toast("please login to basket")
                        setTimeout(() => {
                            window.location.href = "login.html"
                        }, 3000);
                    }
            
                    let existProduct=card.find((product)=>product.id==productId)
                    let userIndex = users.findIndex((user) => user.id == currentUser.id)
            
                    if(!existProduct){ 
                        let product=products.find((item)=>item.id==productId)
                        card.push({...product,count:1})
                        toast("product add to cart")
            
                    }else{
                        existProduct.count++;
                        toast("product add to cart")
                    }
                    users[userIndex].card = card
                    localStorage.setItem("users", JSON.stringify(users))
                    
                })

        } else {
            container.innerHTML = "Product not found";
        }

});
let toast = (text) => {
    Toastify({
        text: `${text}`,
        duration: 3000,
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right,rgb(83, 253, 233),rgb(162, 255, 1))",
        },
        onClick: function () { }
    }).showToast();
}
