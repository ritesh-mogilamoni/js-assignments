const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
                          
// TODO: Implement these functions
                          
export function getProductById(id) {
// Find and return product by ID
let prod=products.find(product=>product.id===id)
return prod
}

export function getAllProducts() {
// Return all products
return products
}

export function getProductsByCategory(category) {
// Filter products by category
let prodByCategor=products.filter(product=>product.category===category)
}

export function searchProducts(query) {
// Search products by name (case-insensitive)
let searchProd=products.find(product=>product.name.toLowerCase()===query.toLowerCase())
return searchProd
}

export function checkStock(productId, quantity) {

let prodIndex=products.findIndex(element=>element.id===productId)
if(products[prodIndex].stock>0){            //Cheking Stock Availabity
    return true         // Return true              
}
else {
    return false        // Return false
}

}

export function reduceStock(productId, quantity) {
// Reduce product stock after purchase
let prodIndex=products.findIndex(element=>element.id===productId)
products[prodIndex].stock-=quantity
}

//searchProducts('lApTop')