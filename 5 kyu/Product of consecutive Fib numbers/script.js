function productFib(prod, fibs = [0,1]){
    let check = checkProd(fibs, prod);

    if(check === "match"){
        return [fibs[fibs.length -2], fibs[fibs.length - 1], true];
    } else if (check === "over") {
        return [fibs[fibs.length -2], fibs[fibs.length - 1], false];
    } else {
        fibs = addFib(fibs);
        return productFib(prod, fibs);
    }
    function checkProd(fibs, prod){
        let fib1 = fibs[fibs.length - 2],
            fib2 = fibs[fibs.length -1],
            trueProd = fib1 * fib2;

        if(trueProd === prod){
            return "match";
        } else if (trueProd > prod){
            return "over";
        }
        return;
    }

    function addFib(fibs){
        let num1 = fibs[fibs.length - 2],
            num2 = fibs[fibs.length - 1];

        fibs.push(num1 + num2);
        return fibs;
    }
}