const $ = document.querySelector.bind(document)
let isCorrectAccount = false
//validate user
$('#user').onblur = (e) => {
    if(!e.target.value){
        e.target.classList.add('validate')
        $('#validate-user').innerHTML = 'Không được bỏ trống tên tài khoản!'
    }
}

$('#user').onfocus = (e) => {
    e.target.classList.remove('validate')
    $('#validate-user').innerHTML = ''
}


//validate pass
$('#password').onblur = (e) => {
    if(!e.target.value){
        e.target.classList.add('validate')
        $('#validate-pass').innerHTML = 'Không được bỏ trống mật khẩu!'
    }
}

$('#password').onfocus = (e) => {
    e.target.classList.remove('validate')
    $('#validate-pass').innerHTML = ''
}

//check tai khoan
$('#login-btn').onclick = (e) => {
    let loginUser = {
        id: $('#user').value,
        pass: $('#password').value,
    }
    let users = JSON.parse(localStorage.getItem('users'))
    users.forEach((user) => {
        if(user.phoneNumber === loginUser.id && user.password === loginUser.pass){
            isCorrectAccount = true
        }
    })
    if(!isCorrectAccount){
        e.preventDefault()
        alert('Tài khoản mật khẩu không chính xác!!!')
    }
}