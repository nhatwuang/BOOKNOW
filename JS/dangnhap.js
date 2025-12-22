const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const nameField = document.getElementById('name-field');
const btnAction = document.getElementById('btn-action');

tabRegister.onclick = () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    nameField.style.display = 'flex';
    btnAction.innerText = 'Đăng ký';
};

tabLogin.onclick = () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    nameField.style.display = 'none';
    btnAction.innerText = 'Đăng nhập';
};