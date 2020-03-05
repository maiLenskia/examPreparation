function finalQuest(input) {
    let sentece = input.shift();
    let arrSent = sentece.split(' ')

    for (let i = 0; i < input.length; i++) {
        let command = input.shift().split(' ');
        if (command[0] === 'Delete') {
            command[1] = Number(command[1]);

        } else if (command[0] === 'Swap') {

        } else if (command[0] === 'Put') {

        } else if (command[0] === 'Sort') {

        } else if (command[0] === 'Replace') {

        }
    }
}