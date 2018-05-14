let message  = 'Good evening';
let name = 'Hari';

function exclaim() {
    if( Math.random() < 0.5 ) {
        return '!';
    } else {
        return '!!!'
    }
}

var greeting1 = message + ' ' + name + '!'
var greeting2 = `${message} ${name}${exclaim()}`;

var item = {
    name: 'Cinthol Soap',
    price: 30,
    weight: '75gm'
}

// var tableRow = '<tr>'
//         '<td>' + item.name + '</td>' +
//         '<td>' + item.price + '</td>' +
//         '<td>' + item.weight + '</td>' +
//     '</tr>'

let tableRow = `<tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.weight}</td>
    </tr>`;

console.log( greeting1 );
console.log( greeting2 );