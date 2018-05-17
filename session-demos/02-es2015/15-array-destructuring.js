let weekdays = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

// let first = weekdays[0], second = weekdays[1], third = weekdays[2], seventh = weekdays[6], eighth = weekdays[7] || 'Holiday';

let [ first, second = 'Second day', third, , , , seventh, eighth = 'Holiday' ] = weekdays;

console.log( first, second, third, seventh, eighth );