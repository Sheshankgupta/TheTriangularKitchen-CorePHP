function $(selector){
    return document.querySelector(selector);
}

function register(e){
    e.preventDefault();
    var name=$('#name');
    var email=$('#email');
    var number=$('#number');
    var password=$('#password');
    var conf_password=$('#conf_password');

    console.log(name.value, email.value, number.value, password.value, conf_password.value);
    
    var user=JSON.parse(window.localStorage.getItem('Users')) || [];
    if(password.value!=conf_password.value){
        window.alert('passwords did not matched');
    }
    else if(password.value==conf_password.value){
        let data={
            name: name.value,
            email: email.value,
            number: number.value,
            password: password.value
        }
        user.push(data);
        $('#call_modal').click();
        window.localStorage.setItem('Users', JSON.stringify(user));
    }
}
function refresh(){
    setTimeout(function(){
        window.location.reload();
    },100);
}
function login(a){
    a.preventDefault();
    var email=$('#email');
    var password=$('#password');
    var user=JSON.parse(window.localStorage.getItem('Users'));
    try {
        var position=-1;
        var i=0;
        for(;;){
            if(user[i].email==email.value){
                position=i;
                console.log(position);
                if(user[i].password==password.value){
                    $('#call_modal').click();
                    break;
                } else {
                    window.alert('no baby no');
                    break;
                }
            } else {
                i=i+1;
            }
            if(i==user.length){
                break;
            }
        }
        if(position==-1){
            window.alert('no data found');
        }
    }
    
    catch (err){
        console.log('dekh lo bhai');
    }
}
function dash(){
    window.location.href="dashboard.html";
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function book_table(e){
    e.preventDefault();
    console.log('Hello')
    var book_email=$('#name');
    var book_name=$('#email');
    var book_phone=$('#phone');
    var book_date=$('#date');
    var book_table=$('#table');

    var bookings=JSON.parse(window.localStorage.getItem('Bookings')) || [];
    console.log(bookings);
    bookings.push({
            name: book_name.value,
            email: book_email.value,
            phone: book_phone.value,
            date: book_date.value,
            table: book_table.value,
    })
    window.localStorage.setItem('Bookings', JSON.stringify(bookings));
    console.log(bookings);
}
