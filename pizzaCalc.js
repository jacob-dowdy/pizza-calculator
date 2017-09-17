var orderCount = 1;
// When called updates the orderCount
function takeOrder(crustType, topping) {
  orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}
function 
getTax() {
  return getSubTotal(orderCount) * 0.06;
}
function
getTotal() {
  return getSubTotal(orderCount) + getTax();
}
takeOrder('thin', 'mushroom');
takeOrder('cheese-filled', 'spinach');
takeOrder('thin', 'sausage');
console.log(getSubTotal(orderCount));
console.log(getTotal());
