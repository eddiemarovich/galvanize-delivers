$(document).ready(function() {

  let subtotal = 0;
  let priceInt;
  $('.card-action').click(function() {
    event.preventDefault();
    let closestCard = $(this).closest('.card');
    let item = closestCard.find('h4')[0].innerHTML;
    let price = closestCard.find('p')[0].innerHTML.slice(1);
    priceInt = parseFloat(price);
    console.log(priceInt);
    subtotal += priceInt;
    console.log(subtotal);
    let tax = (subtotal * .08);
    console.log(tax);
    let total = (tax + subtotal);


    let newRow = '<tr><td class="right-align">' + item + '</td>' + '<td class="right-align">' + '$' + price + '</td></tr>';
    $('#tax').text('$' + tax.toFixed(2));
    $('#subtotal').text('$' + subtotal);
    $('#total').text('$' + total.toFixed(2));
    $('table tbody').append(newRow);
    // $('item').append(item)
    // $('#item-price').append(parseFloat(price))
  })
  // $('#modal1').modal('close');

  $('#orderButton').click(function(event) {
    event.preventDefault();
    if ($('tbody').children().length === 0) {
      Materialize.toast('Please Enter an Item', 4000);
    }else if ($('#icon_prefix').val() === ''){
      Materialize.toast('Please Enter Your Name', 4000);
    }else if ($('#icon_telephone').val() === ''){
      Materialize.toast('Please Enter a Valid Phone Number', 4000);
    }else if ($('#address').val() === ''){
      Materialize.toast('Please Enter a Valid Address', 4000);
    }else{
      Materialize.toast('Thank You For Your Order!', 4000);
    }
  })
});
