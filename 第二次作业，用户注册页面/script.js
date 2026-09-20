/* ========================================
   用户注册页面脚本  script.js
   功能：密码一致性校验、显示/隐藏密码、
        表单提交数据收集并打印到 Console
   ======================================== */

/* ---------- 获取表单元素 ---------- */
const form = document.getElementById('register-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const pwdHint = document.getElementById('pwd-hint');
const toggleBtn = document.getElementById('toggle-pwd');

/* ---------- 密码显示 / 隐藏切换 ---------- */
toggleBtn.addEventListener('click', function () {
  const isPassword = password.type === 'password';
  password.type = isPassword ? 'text' : 'password';
  toggleBtn.textContent = isPassword ? '隐藏' : '显示';
});

/* ---------- 实时校验两次密码是否一致 ---------- */
function checkPwdMatch() {
  if (confirmPassword.value && password.value !== confirmPassword.value) {
    pwdHint.textContent = '两次输入的密码不一致';
    pwdHint.className = 'hint error';
    return false;
  }
  pwdHint.textContent = '';
  pwdHint.className = 'hint';
  return true;
}

password.addEventListener('input', checkPwdMatch);
confirmPassword.addEventListener('input', checkPwdMatch);

/* ---------- 表单提交：收集数据并打印 ---------- */
form.addEventListener('submit', function (event) {
  // 阻止默认提交，避免页面刷新
  event.preventDefault();

  // 1. 校验密码一致性
  if (!checkPwdMatch()) {
    alert('两次输入的密码不一致，请重新输入');
    password.focus();
    return;
  }

  // 2. 触发浏览器原生校验（required / pattern / email 等）
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // 3. 收集表单数据（FormData 自动读取所有带 name 的控件）
  const formData = new FormData(form);
  const data = {};

  formData.forEach(function (value, key) {
    // 同名多选控件（如兴趣爱好 hobby）合并为数组
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  });

  // 4. 在 Console 面板打印收集到的数据
  console.log('===== 表单提交数据 =====');
  console.log(data);
  console.log(JSON.stringify(data, null, 2));
  console.log('========================');

  // 5. 提示成功
  alert('注册成功！请按 F12 打开 Console 面板查看提交数据。');
  form.reset();
});
