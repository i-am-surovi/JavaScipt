// Find total amount of products on shopping

const products = [
    {name : 'shampoo', price: '300', quantity: 2},
    {name : 'chiruni', price: '100', quantity: 3},
    {name : 'shirt', price: '700', quantity: 5},
    {name : 'pant', price: '1200', quantity: 1},
]

function cartTotal(products){
    let total = 0;
    for(const product of products){
        total = total + (product.price*product.quantity);
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log("Total Shopping cost:", shoppingCost)
