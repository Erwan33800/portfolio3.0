var animation = document.getElementById('animation-text'),
    list = [
        'informatique',
        'HTML',
        'CSS',
        'PHP',
        'Javascript',
        'React',
],
    count_li = 0,
    count = 0,
    speed = 100;

function write() {
    var type = list[count_li].substring(0, count);
    animation.textContent = type;
    count++;
    var time = setTimeout(write, speed);
    if(count > list[count_li].length) {
        count = 0;
        count_li++;
        clearTimeout(time);
        setTimeout(write, 2500);
    }
    if(count_li === list.length) {
        count_li = 0;
    }
}
write();
