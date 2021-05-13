import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Is this a palindrome: ', function (answer) {
if (answer === answer.split('').reverse().join('')) {
    console.log('is a palindrome');
} else {
    console.log('is not a palindrome');
}

rl.close();

})



