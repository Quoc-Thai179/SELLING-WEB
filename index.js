document.getElementById('sizeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy thông tin từ các trường nhập liệu
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const shoulder = parseFloat(document.getElementById('shoulder').value);
    const inseam = parseFloat(document.getElementById('inseam').value);

    let sizeRecommendation = '';

    // Tính toán size cho áo và quần (ví dụ đơn giản dựa vào các số đo)
    if (height < 160 && weight < 60) {
        sizeRecommendation = 'Áo: S, Quần: S';
    } else if ((height >= 160 && height < 170) && (weight >= 60 && weight < 75)) {
        sizeRecommendation = 'Áo: M, Quần: M';
    } else if ((height >= 170 && weight >= 75) || (waist >= 85 && shoulder >= 45 && inseam >= 85)) {
        sizeRecommendation = 'Áo: L, Quần: L';
    } else {
        sizeRecommendation = 'Áo: XL, Quần: XL';
    }

    // Hiển thị kết quả
    document.getElementById('result').innerHTML = `
        <p><strong>Size áo và quần của bạn:</strong></p>
        <p>${sizeRecommendation}</p>
    `;
});
