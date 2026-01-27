import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
let cartItems=getCartItems()
let cartTotal=getCartTotal()
let discDetails
let discount=0

// 2. Apply discount if coupon provided
if(couponCode!=null){
    discDetails=applyDiscount(cartTotal,couponCode,cartItems)
}


// 3. Validate payment method (card/upi/cod)
validatePaymentMethod(paymentMethod)


// 4. Process payment (simulate)
console.log("Payment is processing.......")


// 5. Reduce stock for all items
for(let i of cartItems){
    reduceStock(i.productId,i.quantity)
}


// 6. Clear cart
clearCart()

// 7. Generate order summary
let orderid=generateOrderId()
if(couponCode!=null&&orderid){
let orderSummary={  orderId:orderid ,  items: cartItems,  subtotal:cartTotal ,  discount: discDetails.discount,  total:discDetails.finalTotal ,
      paymentMethod: paymentMethod,  status: 'success',  message: 'Order Placed'
}
// Return order summary:
return orderSummary
}
else if(couponCode===null&&orderid){
    orderSummary={  orderId:orderid ,  items: cartItems,  subtotal:cartTotal ,  discount: discount,  total:cartTotal ,
      paymentMethod: paymentMethod,  status: 'success',  message: 'Order Placed'
}

// Return order summary:
return orderSummary
}
else{
    console.log("Order Status: Failed")
}
}

export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
if(method==='card'||method==='upi'||method==='cod'){
    console.log("Payment method:",method," is valid")
}
}

function generateOrderId() {
// Generate random order ID
return 'ORD' + Date.now();
}
