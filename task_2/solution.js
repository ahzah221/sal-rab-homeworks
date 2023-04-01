function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

 // Задание №2.1. Рассчитать доставку

    let shippingSum;    
        if(sum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0;
        }

        else if(0 < productsSum && productsSum < freeShippingMinSum) {
        shippingSum = shippingPrice;
        }
        
        console.log(shippingSum);    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountSum = productsSum >= discountMinSum ? discountPart / 100 * productsSum : 0;
         
        console.log(discountSum);    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

      // Задача №2.3. Рассчитать скидки и доставку в корзине

        let totalSum = productsSum - discountSum; 
        let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
        totalSum = totalSum + shippingSum; 
        
        let freeShipping;   
        freeShipping = shippingSum === 0;

        console.log(totalSum);  // Конец решения задачи №2.3.

    

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
