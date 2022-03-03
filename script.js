function myfunction() {
    const frandom = Math.floor(Math.random() * 6) + 1;
    const srandom = Math.floor(Math.random() * 6) + 1;

    const img1 = 'images/dice' + frandom + '.png';
    const img2 = 'images/dice' + srandom + '.png';

    document.querySelector('[img1]').setAttribute('src', img1);
    document.querySelector('[img2]').setAttribute('src', img2);

    if (frandom > srandom) {
        document.querySelector('[start-match]').innerHTML = "User 1 is winner :)";
    } else if (frandom < srandom) {
        document.querySelector('[start-match]').innerHTML = "User 2 is winner :)";
    } else {
        document.querySelector('[start-match]').innerHTML = "Match is draw :)";
    }

}



function magicWheel() {
    var x = 2000;
    var y = 9000;

    var derg = Math.floor(Math.random() * (y - x)) + x;
    document.getElementById("sa").style.transform = "rotate(" + derg + "deg)";
}