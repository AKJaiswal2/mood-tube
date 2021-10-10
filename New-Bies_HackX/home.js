let myregister = () => {
    window.location.href = "http://127.0.0.1:5500/register.html";

}
let mylogin = () => {
    window.location.href = "http://127.0.0.1:5500/login.html";
}
let registerdata = () => {
    let first = document.getElementById("firstname").value;
    let last = document.getElementById("lastname").value;
    let gender = sex();
    let date = document.getElementById("DOB").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let data = {
        firstname: first,
        lastname: last,
        gender: gender,
        date: date,
        email: email,
        password: password

    }
    let method = "POST";
    let url = "http://localhost:3000/user/register";
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            window.location.href = "http://127.0.0.1:5500/login.html";

        }
    }
}
let sex = () => {
    let t;
    var g = document.getElementsByName("gender");
    g.forEach(radio => {
        if (radio.checked) {
            t = radio.value;
        }
    });
    return t;
}
let logindetails = () => {
    let lemail = document.getElementById("e-mail").value;
    let lpassword = document.getElementById("l-password").value;
    let ldata = {
        email: lemail,
        password: lpassword

    }
    let method = "POST";
    let url2 = "http://localhost:3000/user/login";
    let xhr1 = new XMLHttpRequest();
    xhr1.open(method, url2, true);
    xhr1.setRequestHeader('Content-Type', 'application/json');
    xhr1.send(JSON.stringify(ldata));
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState == 4 && xhr1.status == 200) {
            window.location.href = "http://127.0.0.1:5500/songs.html";
        }
    }


}

let mysong = () => {
    window.location.href = "http://127.0.0.1:5500/myplaylist.html";
}

let mybooks = () => {
    window.location.href = "http://127.0.0.1:5500/mybooklist.html#"
}

