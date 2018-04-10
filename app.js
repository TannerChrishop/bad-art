var pixels = document.getElementsByClassName('pixel');

var pixelList = Array.from(pixels);

var main = document.getElementById('main');

var mouseIsDown = false;

function swerve(clicked, id) {
    var calcSwerve = Math.floor(Math.random()*10);
    
    if(calcSwerve < .5 && clicked.className !== 'left') {
        id-=1;
    } else if (calcSwerve < 1 && clicked.className !== 'left') {
        id-=81;
    } else if (calcSwerve < 1.5 && clicked.className !== 'top') {
        id-=80;
    } else if (calcSwerve < 2 && clicked.className !== 'right') {
        id-=79;
    } else if (calcSwerve < 2.5 && clicked.className !== 'right') {
        id+=1;
    } else if (calcSwerve < 3 && clicked.className !== 'right') {
        id+=81;
    } else if (calcSwerve < 3.5 && clicked.className !== 'bottom') {
        id+=80;
    } else if (calcSwerve < 4 && clicked.className !== 'left') {
        id+=79;
    } 
    return id;
    
}

function draw (e) {
    if (e.target.className === 'pixel') {
        var clicked = e.target;
        var id = (pixelList.indexOf(clicked));
        var swerveFactor = swerve(clicked, id);
        pixelList[swerveFactor].classList.add('filled');
    }
}

function drawIfMouseIsDown(e) {
    if (mouseIsDown) {
        draw(e);
    }
}

main.addEventListener('click', draw)
main.addEventListener('mousedown', function() {
    mouseIsDown = true;
});
main.addEventListener('mouseup', function() {
    mouseIsDown = false;
});

main.addEventListener('mouseover', drawIfMouseIsDown);

