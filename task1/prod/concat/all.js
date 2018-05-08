let div = $('<div>');
$('body').append(div);
$(div).css({'background-color': 'yellow',
    'height': '100px', 'width': '100px'});

_.defaults({'a': 1}, {'a': 3, 'b': 2});
_.partition([1, 2, 3, 4], n => {n % 2});

moment().format('MMMM Do YYYY, h:mm:ss a');
moment().format('dddd');
moment().format('YYYY [escaped] YYYY');
console.log(moment().format());

let string = numeral(1000).format('0,0');

let myNumeral = numeral(1000);

let value = myNumeral.value();
console.log(string, value);
