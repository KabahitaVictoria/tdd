export default function taxCalculator(earnings) {
    if (typeof earnings !== 'number' || isNaN(earnings) || earnings < 0) {
        throw new Error('Invalid earnings input');
    }
    
    let tax = 0;

    if(earnings < 12000) {
        tax = 0;
    } else if(earnings <= 36000) {
        tax = 0.20 * (earnings - 12000);
    } else {
        tax = 0.20 * (36000 - 12000) + 0.40 * (earnings - 36000);
    }
    return tax;
}