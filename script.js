async function checkPoints() {
    const phone = document.getElementById("phoneInput").value.trim();
    const resultDiv = document.getElementById("result");
  
    if (!phone) {
      resultDiv.innerHTML = "❌ Vui lòng nhập số điện thoại";
      return;
    }
  
    const response = await fetch("data.json");
    const data = await response.json();
  
    const customer = data.find(item => item.phone === phone);
  
    if (customer) {
      resultDiv.innerHTML = `
        ✅ <b>Số điểm:</b> ${customer.points}<br>
        ⭐ <b>Hạng:</b> ${customer.rank}
      `;
    } else {
      resultDiv.innerHTML = "❌ Không tìm thấy số điện thoại này";
    }
  }
  