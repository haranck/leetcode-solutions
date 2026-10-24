var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {

    function getDay(date) {
        let [month, day] = date.split("-").map(Number);

        return Math.floor(
            (Date.UTC(2021, month - 1, day) - Date.UTC(2021, 0, 0)) / 86400000
        );
    }

    let a1 = getDay(arriveAlice);
    let a2 = getDay(leaveAlice);

    let b1 = getDay(arriveBob);
    let b2 = getDay(leaveBob);

    let start = Math.max(a1, b1);
    let end = Math.min(a2, b2);

    return Math.max(0, end - start + 1);
};