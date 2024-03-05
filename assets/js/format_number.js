const formatNumberVnd = document.getElementById('numberVnd').innerHTML;

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

document.getElementById('numberVnd').innerHTML = VND.format(formatNumberVnd);
