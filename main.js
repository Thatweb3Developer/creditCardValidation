// Define regex patterns for different card types
const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
const mastercardPattern = /^5[1-5][0-9]{14}$/;

function creditCardValidation(cardNumber) {
    // Remove spaces and dashes from the card number
    const cleanedCardNumber = cardNumber.replace(/[\s-]/g, '');
    
    // Check if the card number matches any of the patterns
    if (visaPattern.test(cleanedCardNumber)) {
        return "Visa";
    } else if (mastercardPattern.test(cleanedCardNumber)) {
        return "Mastercard";
    } else {
        return "Invalid Card Type";
    }
}

// Example usage:
const cardNumber = "5111-1111-1111-1111";
const cardType = creditCardValidation(cardNumber);
console.log(`Card Type: ${cardType}`);
