document.getElementById('sizeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy thông tin từ các trường nhập liệu
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const shirtSize = document.getElementById('shirtSize').value;
    const pantsSize = document.getElementById('pantsSize').value;
    const waist = parseFloat(document.getElementById('waist').value);
    const inseam = parseFloat(document.getElementById('inseam').value);

    let shirtRecommendation = '';
    let pantsRecommendation = '';

    // Tính toán size áo
    if (height < 160 && weight < 60) {
        shirtRecommendation = 'Size áo: S';
    } else if (height >= 160 && height < 170 && weight >= 60 && weight < 75) {
        shirtRecommendation = 'Size áo: M';
    } else if (height >= 170 && weight >= 75) {
        shirtRecommendation = 'Size áo: L';
    } else {
        shirtRecommendation = 'Size áo: XL';
    }

    // Tính toán size quần
    if (waist < 70 && inseam < 80) {
        pantsRecommendation = 'Size quần: S';
    } else if (waist >= 70 && waist < 85 && inseam >= 80 && inseam < 90) {
        pantsRecommendation = 'Size quần: M';
    } else if (waist >= 85 && inseam >= 90) {
        pantsRecommendation = 'Size quần: L';
    } else {
        pantsRecommendation = 'Size quần: XL';
    }

    // Hiển thị kết quả
    document.getElementById('result').innerHTML = `
        <p>${shirtRecommendation}</p>
        <p>${pantsRecommendation}</p>
    `;
});
