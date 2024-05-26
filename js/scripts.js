import {
    themSo,
    tinhTongSoDuong,
    demSoDuong,
    timSoNhoNhat,
    timSoDuongNhoNhat,
    timSoChanCuoiCung,
    doiCho,
    sapXepTangDan,
    timSoNguyenToDauTien,
    demSoNguyen,
    soSanhAmDuong
} from './method.js';

document.getElementById('them-so-form').onsubmit = function() {
    themSo();
    return false;
}

// Bài tập 1: Tổng số dương
document.getElementById('bai-tap-1-form').onsubmit = function() {
    tinhTongSoDuong();
    return false;
}

// Bài tập 2: Đếm số dương
document.getElementById('bai-tap-2-form').onsubmit = function() {
    demSoDuong();
    return false;
}

// Bài tập 3: Tìm số nhỏ nhất
document.getElementById('bai-tap-3-form').onsubmit = function() {
    timSoNhoNhat();
    return false;
}

// Bài tập 4: Tìm số dương nhỏ nhất
document.getElementById('bai-tap-4-form').onsubmit = function() {
    timSoDuongNhoNhat();
    return false;
}

// Bài tập 5: Tìm số chẵn cuối cùng
document.getElementById('bai-tap-4-form').onsubmit = function() {
    timSoChanCuoiCung();
    return false;
}

// Bài tập 6: Đổi chỗ
document.getElementById('bai-tap-4-form').onsubmit = function() {
    doiCho();
    return false;
}

// Bài tập 7: Sắp xếp tăng dần
document.getElementById('bai-tap-4-form').onsubmit = function() {
    sapXepTangDan();
    return false;
}

// Bài tập 8: Tìm số nguyên tố đầu tiên
document.getElementById('bai-tap-4-form').onsubmit = function() {
    timSoNguyenToDauTien();
    return false;
}

// Bài tập 9: Đếm số nguyên
document.getElementById('bai-tap-4-form').onsubmit = function() {
    demSoNguyen();
    return false;
}

// Bài tập 10: So sánh số lượng số âm và dương
document.getElementById('bai-tap-4-form').onsubmit = function() {
    soSanhAmDuong();
    return false;
}