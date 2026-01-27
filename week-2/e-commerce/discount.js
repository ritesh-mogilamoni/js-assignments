// Available coupons
const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
    let keys=Object.keys(coupons)
    let coupp=keys.find(ele=>ele===couponCode)
    if(coupp){
        console.log("Coupon",coupp,"Available")
    }
// 2. Check minimum amount requirement
    let minAmtRequired=coupons[coupp].minAmount

// 3. Check category requirement (if any)
// Return { valid: true/false, message: '...' }
    if(coupons[couponCode].category){
        return { valid: true, message: 'Category required' }
    }
    else{
        return { valid: false, message: 'Category not required' }
    }



}

export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
if(coupons[couponCode].type==='percentage'){
    let discAmount=(coupons[couponCode].value/100)*cartTotal
    // Return discount amount
    return discAmount
}
else{
    let discAmount=cartTotal-(coupons[couponCode].value)
    // Return discount amount
    return discAmount
}

}

export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
if(coupons[couponCode]){
    //console.log("Valid")
    let disc=calculateDiscount(couponCode,cartTotal)    //If valid, calculate discount
    let finalAmount=cartTotal-disc

    //Return final amount and discount details
    return { originalTotal: cartTotal, discount: disc, finalTotal: finalAmount, message: 'Discount Applied Successfully'}
}
else{
    console.log("Invalid Coupon Code")
}

}
