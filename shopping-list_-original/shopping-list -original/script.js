//the like btn
let like = document.getElementsByClassName('like');
for (let i = 0; i < like.length; i++) {
    let heart = like[i];
    heart.addEventListener('click', function() {
        let el = heart.firstElementChild;
        if (el.style.color == "black") {
            el.style.color = "red";
        } else {
            el.style.color = "black";
        }
    })
}

//minus btn for the phone
function minusQuantity1(params) {
    newTotalPrice = 0
    totalPrice = document.getElementById('finalPrice')
    price = document.getElementById('p1')
    quant = document.getElementById('q1')
    if (quant.value > 0) {
        newTotalPrice = totalPrice.value - 1379
        quant.value -= 1
        newPrice = price.innerText - 1379
        totalPrice.value = newTotalPrice

    }
    price.textContent = newPrice
}
//plus btn for the phone
function plusQuantity1(params) {
    newTotalPrice = 0
    totalPrice = document.getElementById('finalPrice')
    price = document.getElementById('p1')
    quant = document.getElementById('q1')
    counter1 = parseInt(quant.value)
    if (counter1 < 99) {
        newTotalPrice = parseInt(totalPrice.value) + 1379
        counter1 += 1
        quant.value = counter1
        newPrice = parseFloat(price.innerText) + 1379
        totalPrice.value = newTotalPrice
    }
    price.textContent = newPrice


}
//mius btn for the shoes
function minusQuantity2(params) {
    newTotalPrice = 0
    totalPrice = document.getElementById('finalPrice')
    price = document.getElementById('p2')
    quant = document.getElementById('q2')
    if (quant.value > 0) {
        newTotalPrice = totalPrice.value - 176
        quant.value -= 1
        newPrice = price.innerText - 176

        totalPrice.value = newTotalPrice
    }
    price.textContent = newPrice

}
//plus btn for the shoes
function plusQuantity2(params) {
    newTotalPrice = 0
    totalPrice = document.getElementById('finalPrice')
    price = document.getElementById('p2')
    quant = document.getElementById('q2')
    counter2 = parseFloat(quant.value)
    if (counter2 < 99) {
        counter2 += 1
        quant.value = counter2
        newPrice = parseFloat(price.innerText) + 176
        newTotalPrice = parseInt(totalPrice.value) + 176
        totalPrice.value = newTotalPrice

    }
    price.textContent = newPrice

}
//minus btn for the watch
function minusQuantity3(params) {
    newTotalPrice = 0
    totalPrice = document.getElementById('finalPrice')
    price = document.getElementById('p3')
    quant = document.getElementById('q3')
    if (quant.value > 0) {
        newTotalPrice = totalPrice.value - 249.00
        quant.value -= 1
        newPrice = price.innerText - 249.00
        totalPrice.value = newTotalPrice

    }
    price.textContent = newPrice



}
//plus btn for the watch
function plusQuantity3(params) {
    newTotalPrice = 0
    totalPrice = document.getElementById('finalPrice')
    price = document.getElementById('p3')
    quant = document.getElementById('q3')
    counter3 = parseInt(quant.value)
    if (counter3 < 99) {
        counter3 += 1
        quant.value = counter3
        newPrice = parseInt(price.innerText) + 249.00
        newTotalPrice = parseInt(totalPrice.value) + 249.00
        totalPrice.value = newTotalPrice

    }
    price.textContent = newPrice



}
//evrey time an ite get deleted will be here
deletedItems = []

function remove(idk) {

    main = document.querySelector('main')
    item = document.getElementById('item' + idk)
    deletedItems.push(item)
    item.parentNode.removeChild(item)
    if (deletedItems.length == 3) {
        main.parentNode.removeChild(main)
    }
}