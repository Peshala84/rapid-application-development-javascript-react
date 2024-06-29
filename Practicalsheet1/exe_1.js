function get_greeting(time) {

 const hour=parseInt(time.split(':')[0],10)

  if (hour<10){
  
    return 'Good morning'
  }

  else if (hour<20){
    
      return 'Good day'
  }
  
  else{
    return 'Good evening'
  }
}

let time = '09:30';
console.log(get_greeting(time)); // should print 'Good morning'

time= '15.45';
console.log(get_greeting(time)); // should print 'Good day'

time = '21.00';
console.log(get_greeting(time)); // should print 'Good evening'

