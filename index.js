// Code your solutions in this file
<<<<<<< HEAD
// // const gifts = ["teddy bear", "drone", "doll"];


// let gifts = [ 'Lisa', 'Kaitlin', 'Jan' ];

// // for(i=0; i<writeCards.lengh; i++){
  
// //   console.log("Thank you! ," + writeCards[i] + ", for the wonderful surprise gift! ");
// // }

// function writeCards(gift, event) {
//   for(i=0; i<gift.length; i++){
//     console.log(`Thank you, ${gift[i]},for the wonderful` +event + ` gift!`);
//   }
  
// }

// writeCards(gifts, "surprise");


function writeCards(cards, event){
  let eventName;
  let finalEvent = [];
  for(let i=0; i<cards.length; i++){
    eventName =   `Thank you, ${cards[i]}, for the wonderful ${event} gift!`; 
    finalEvent.push(eventName);
  }
  return finalEvent;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");


function countDown(num){
    // for(i=number; 0<number; i++){        
    //   console.log(number);
    //   number--;
    // }
    
    let i= num;
    
    
    while(i>=0){
      console.log(i);
      i--;
=======
// const gifts = ["teddy bear", "drone", "doll"];


let gifts = [ 'Lisa', 'Kaitlin', 'Jan' ];

// for(i=0; i<writeCards.lengh; i++){
  
//   console.log("Thank you! ," + writeCards[i] + ", for the wonderful surprise gift! ");
// }

function writeCards(gift, event) {
  for(i=0; i<gift.length; i++){
    console.log(`Thank you, ${gift[i]},for the wonderful` +event + ` gift!`);
  }
  
}

writeCards(gifts, "surprise");


// function writeCards(cards, event){
//   let eventName;
//   let finalEvent = [];
//   for(let i=0; i<cards.length; in)
// }

function countDown(number){
    for(i=number; 0<number; i++){        
      console.log(number);
      number--;
>>>>>>> 2f06c8ac74128e55932aef9286d3e55a9e3f43d5
    }
  }

  countDown(10);