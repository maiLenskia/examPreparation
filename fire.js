function demo(input) {
    let fireArr = input
        .shift()
        .split('#');
    let water = Number(input.shift());
    let effort = 0;
    let totalFire = 0;
    console.log('Cells:')

    for (let room of fireArr) {
        let roomArr = room.split(' ');
        let type = roomArr.shift();
        let value = Number(roomArr.pop());

        if (type === 'Low' && value >= 1 && value <= 50 && water >= value) {
            let addedEffort = 0.25 * value;
            effort += addedEffort;
            totalFire += value;
            water -= value;
            console.log(`-${ value }`);
        } else if (type === 'Medium' && value >= 51 && value <= 80 && water >= value) {
            let addedEffort = 0.25 * value;
            effort += addedEffort;
            totalFire += value;
            water -= value;
            console.log(`-${value }`);
        } else if (type === 'High' && value >= 81 && value <= 125 && water >= value) {
            let addedEffort = 0.25 * value;
            effort += addedEffort;
            totalFire += value;
            water -= value;
            console.log(`-${value}`);
        }
    }
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`)
}
demo(['High = 89#Low = 28#Medium = 77#Low = 23', '1250'])