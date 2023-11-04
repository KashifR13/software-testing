import ceil from '../../ceil';
import capitalize from '../../capitalize';
import isEmpty from "../../isEmpty.js";

// Import other necessary libraries and functions

function searchProducts(productName) {
    const products = [
        'laptop',
        'New laptop'
    ];
    return products.includes(productName);
}

function ifFoundInInventory(searchResults) {
    let products = []
    if (searchResults) {
        products.push('laptop')
    }
    return products;
}

describe('User Browsing and Purchase Scenario', () => {
    // Test 1: User searches for products
    // Happy Path: User searches for products
    it('should allow the user to search for products and find results', () => {
        // Simulate the user's search for products
        const searchResults = searchProducts('laptop'); // Search for laptops
        let products = ifFoundInInventory(searchResults);
        // Make assertions about the products
        expect(isEmpty(products)).toBe(false); // Ensure that products are not empty
    });
    
    // Happy Path: User proceeds to checkout
    it('should allow the user to proceed to checkout with a rounded total price', () => {
       
        // Simulate the user's actions to proceed to the checkout page
        const cartTotal = 6.004; // Get the total price of items in the cart
        const roundedTotal = ceil(cartTotal, 2); // Round up the total to two decimal places
        
        // Make assertions about the rounded total price
        expect(roundedTotal).toBe(6.01); // Ensure that the total price is correctly rounded up
    });
    
    // Happy Path: User completes a purchase
    it('should allow the user to complete a purchase with a capitalized product name', () => {
        // Simulate the user's actions to complete the purchase
        const product = 'new laptop'; // Product name
        
        // Capitalize the product name
        const capitalizedProduct = capitalize(product);
        
        expect(searchProducts('New laptop')).toBe(true); // Ensure that the product name is capitalized correctly
        expect(searchProducts(capitalizedProduct)).toBe(true); // Ensure that the product name is capitalized correctly
    });
    
    // UnHappy Path: User completes a purchase
    it('should not allow the user to complete a purchase with a non capitalized product name', () => {
        // Simulate the user's actions to complete the purchase
        const unCapitalizedProduct = 'new laptop'; // Product name
        // Simulate the user's search for products
        const searchResults = searchProducts(unCapitalizedProduct); // Search for laptops
        // Make assertions about the capitalized product name
        expect(searchResults).toBe(false); // Ensure that the product name is capitalized correctly
    });
    
});
