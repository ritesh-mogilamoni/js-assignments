import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
// 1. Get product details
let prodDetails=getProductById(productId)

// 2. Check stock availability
let stockAvailability=checkStock(productId,quantity)

// 3. Check if product already in cart
let item=cartItems.find(element=>element.productId===productId)    //    - If yes, update quantity
if(item){
    item.quantity+=quantity
}
else{
    
    cartItems.push({productId,name:prodDetails.name,quantity:quantity,price:prodDetails.price}) //    - If no, add new item
}

// 4. Return success/error message
if(cartItems.length>0){
    return "success"
}
else{
    return "error"
}
}
export function removeFromCart(productId) {
    let item=cartItems.findIndex(item=>item.productId===productId)
    cartItems.splice(item,1)
    return cartItems
}

export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
let item=cartItems.find(item=>item.productId===productId)

let stockAvailability = checkStock(productId, newQuantity)
// Check stock before updating
if(stockAvailability&&item.quantity>=newQuantity)
item.quantity=newQuantity
return cartItems
}


export function getCartItems() {
// Return all cart items with product details
return cartItems
}

export function getCartTotal() {
// Calculate total price of all items in cart
let cartTotal=cartItems.reduce((sum,ele)=>sum+ele.price*ele.quantity,0)
// Return total
return cartTotal
}

export function clearCart() {
// Empty the cart
cartItems=[]
}

