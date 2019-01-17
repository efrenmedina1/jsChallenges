
let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = [];
let oddArray = [];

for (i = 0; i < originalArray.length; i++) {
    if  (i % 2 == 0){
        evenArray.push(i)
    } else if (i > 0) {
        oddArray.push(i)
    }
   
    console.log(evenArray);
    console.log(oddArray);

}



function split(number){
    var oddArray = [];
    var evenArray = [];
    for(i=1; i <= number; i++){
        if(i % 2 === 0){
            evenArray.push(i);
        }
        else if(i >= 1){
            oddArray.push(i);
        }
    }
    console.log(oddArray);
    console.log(evenArray);
}

split(10);