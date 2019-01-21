
const username = document.querySelector('.username')
const password = document.querySelector('.password')
const reenter = document.querySelector('.reenter')

document.querySelector('form').addEventListener('submit', passwords);

function passwords(e) {
    e.preventDefault()
    
    if(username.value === '' || password.value === '' || reenter.value === '' ){
        alert('Please fill in all your feilds')
    } else if(password.value !== reenter.value) {
        alert('Your passwords must match');
    } else {
        alert('Success')
        document.getElementById("submit").disabled = true;
    }
    
};





