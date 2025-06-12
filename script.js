
const user = localStorage.getItem('username');

window.onload = () => {
  if (user) {
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'inline-block';
    document.getElementById('balance').innerText = `ยอดเงินคงเหลือ: ${localStorage.getItem('balance') || 100} บาท`;
  } else {
    document.getElementById('login-btn').style.display = 'inline-block';
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('balance').innerText = '';
  }
}

function login() {
  const username = prompt('กรอกชื่อผู้ใช้');
  if (username) {
    localStorage.setItem('username', username);
    localStorage.setItem('balance', 100);
    location.reload();
  }
}

function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('balance');
  location.reload();
}

function purchase(price, fileUrl) {
  let balance = parseInt(localStorage.getItem('balance'));
  if (balance >= price) {
    balance -= price;
    localStorage.setItem('balance', balance);
    alert('ชำระเงินสำเร็จ! จะเริ่มดาวน์โหลด...');
    window.location.href = fileUrl;
    location.reload();
  } else {
    alert('ยอดเงินไม่เพียงพอ');
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("คัดลอกลิงก์เรียบร้อยแล้ว!");
  });
}
