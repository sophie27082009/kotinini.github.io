/*class Person {
    name = ''
    age = 0
    bio =''


    info() {
        console.log('people: ' + this.name + '. age: ' + this.age + '. bio: ' + this.bio);
    }
}

var alex = new Person();
alex.name = 'Alex';
alex.age = 25;
alex.bio = 'some bio';

var kiki = new Person();
kiki.name = 'Kiki';
kiki.age = 15;
kiki.bio = 'I love cats';

alex.info();
kiki.info();
*/














































/*setInterval(function(){
    var date = new Date();
    
    var time = "time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    document.getElementById('time').innerText = time;
},1000);

var user = prompt('enter films: ');
var films = user.split(',');
console.log(films);*/

/*var timerid = setTimeout(function () {
    alert('message');
}, 12000);

var id = setInterval(funk, 1000);

var counter = 0;
function funk() {
    document.getElementById('timer').innerHTML = "Counter: " + counter;
    counter++;
}

function stopInterval() {
    //clearInterval(id);
    clearTimeout(timerid);
}
*/




document.getElementById('myform').addEventListener('submit', function(e) {
    e.preventDefault();

    var el = document.getElementById('myform');

    var username = el.username.value;
    var email = el.email.value;
    var pass = el.password.value;
    var gender = el.gender.value;
    
    var error = '';
    if(username.length < 2)
        error = "name is so small";
    else if(email.length < 10)
        error = "email is so small";
    else if(!email.includes('@'))
        error = "email does not have a sign '@'";
    else if(pass.length < 8)
        error = "password is so small";
    else if(gender == null || gender == '')
        error = "gender error";
    
    if (error != ''){
        document.getElementById('error').innerText = error;
        return false;
    }

    document.getElementById('error').innerText = '';
    window.location = 'https://translate.google.com.ua'

    //return false;
});





























































































































































/*var usr = prompt(' how are you?');
if (usr == null)
    alert('гімно, нічого не ввело');
else
    alert('omg, i`m too');





alert('are you already here?')
alert('hello, how are you?')
alert('I think you are cute')
alert('ARTEM LOX?')
var nam = confirm('you are OK?');
if (nam)
    alert('OK, good luck <3');
else
    alert('dont worry about your problems, and they resolve themselves');*/