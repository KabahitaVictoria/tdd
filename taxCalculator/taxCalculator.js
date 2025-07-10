export default function taxCalculator(earnings) {
    let tax = 0;

    if(earnings < 12000) {
        tax = 0;
    } else if(earnings <= 36000) {
        tax = 0.20 * (earnings - 12000);
    }
    return tax;
}