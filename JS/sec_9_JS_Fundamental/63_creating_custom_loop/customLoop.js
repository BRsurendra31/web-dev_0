//  function loopFrom(x,y){
//     for(i=x; i<y; i++)
//     console.log(i+ 'surendra');
//  }

 // call it in console

 // output :-

 /* 
 loopFrom(2,9);
customLoop.js:3 2surendra
customLoop.js:3 3surendra
customLoop.js:3 4surendra
customLoop.js:3 5surendra
customLoop.js:3 6surendra
customLoop.js:3 7surendra
customLoop.js:3 8surendra
undefined
loopFrom(1,4)
customLoop.js:3 1surendra
customLoop.js:3 2surendra
customLoop.js:3 3surendra
undefined */

// function loopFrom(x,y){
//     for(i=x; i<y; i++){
//     console.log(i+ 'surendra');
//     if(i==5){
//         break;
//     }
//   }
//  }

 // output :-

 /* 
 loopFrom(2,6)
customLoop.js:28 2surendra
customLoop.js:28 3surendra
customLoop.js:28 4surendra
customLoop.js:28 5surendra
undefined
loopFrom(1,10)
customLoop.js:28 1surendra
customLoop.js:28 2surendra
customLoop.js:28 3surendra
customLoop.js:28 4surendra
customLoop.js:28 5surendra
 */


function loopFrom(x,y){
    for(i=x; i<y; i++){
    console.log(i+ 'surendra');
    if(i==5){
        console.log('hii there i have  done it');
        continue;
    }
  }
 }

 // output :-

 /* 
 loopFrom(1,10)
customLoop.js:55 1surendra
customLoop.js:55 2surendra
customLoop.js:55 3surendra
customLoop.js:55 4surendra
customLoop.js:55 5surendra
customLoop.js:57 hii there i have  done it
customLoop.js:55 6surendra
customLoop.js:55 7surendra
customLoop.js:55 8surendra
customLoop.js:55 9surendra
undefined */