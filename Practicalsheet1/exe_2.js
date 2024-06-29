function getFruitColor(fruit){
    let color;

    switch(fruit){
        case 'banana':
            color = 'Yellow';
            break;
        case 'pineapple':
            color = 'Orange';
            break;
        case 'apple':
            color = 'Green';
            break;
        default:
            color = 'unknown';
            break;
    }
    alert(color);
}

getFruitColor('banana');
getFruitColor('pineapple');
getFruitColor('apple');
getFruitColor('grape');