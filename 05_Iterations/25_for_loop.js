
// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5)
        console.log("5 is best number");
    console.log(element);
}
for (let i = 0; i <3; i++) {
    for (let j = 0; j <3; j++) {
        console.log(i + '*' + j + ' = ' + i*j);
    }    
}
// break & continue keyword
for (let i = 0; i < 10; i++) {

    if(i == 5)
        break;
    if (i == 3) 
        continue;
    console.log(i);
}