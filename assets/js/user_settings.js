const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordLengthWarning = document.getElementById('passwordLengthWarning');
const passwordMatchWarning = document.getElementById('passwordMatchWarning');
const passwordRequirement = document.getElementById('passwordRequirement');
const toggleConfirmPasswordVisibilityIcon = document.getElementById('toggleConfirmPasswordVisibility');

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    if (password.length === 0) {
        passwordLengthWarning.textContent = '';
        passwordRequirement.textContent = '';
    } else if (password.length < 8 || password.length > 20) {
        passwordLengthWarning.textContent = 'Mật khẩu phải từ 8-20 ký tự';
        passwordRequirement.textContent = '';
    } else if (password.length > 8 || password.length < 20) {
        passwordLengthWarning.textContent = '';
        const hasNumber = /\d/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        if (!hasNumber || !hasLowerCase || !hasUpperCase || !hasSpecialChar) {
            passwordRequirement.textContent = 'Mật khẩu phải chứa ít nhất 1 số, 1 chữ cái và 1 ký tự đặc biệt';
        } else {
            passwordRequirement.textContent = '';
        }
    }
    toggleSaveButton();
});

confirmPasswordInput.addEventListener('input', function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordMatchWarning.textContent = 'Mật khẩu không khớp';
    } else {
        passwordMatchWarning.textContent = '';
    }
    toggleSaveButton();
});

function toggleSaveButton() {
    if (passwordInput.value.length >= 8 && passwordInput.value === confirmPasswordInput.value) {
        saveButton.disabled = false;
    } else {
        saveButton.disabled = true;
    }
}



const togglePasswordVisibilityIcon = document.getElementById('togglePasswordVisibility');


togglePasswordVisibilityIcon.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    const icon = togglePasswordVisibilityIcon.querySelector('ion-icon');
    icon.name = type === 'password' ? 'eye-off-outline': 'eye-outline';
}); 

toggleConfirmPasswordVisibilityIcon.addEventListener('click', function() {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
    const icon = toggleConfirmPasswordVisibilityIcon.querySelector('ion-icon');
    icon.name = type === 'password' ? 'eye-outline' : 'eye-off-outline';
});
