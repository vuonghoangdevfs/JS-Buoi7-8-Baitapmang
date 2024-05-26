let danhSachSo = [];
export function themSo() {
    if (Number(document.getElementById('them-so-input').value)) {
        danhSachSo.push(Number(document.getElementById('them-so-input').value));
        document.getElementById('them-so-input').value = '';
        document.getElementById('danh-sach-so').innerHTML = danhSachSo;
    }
}

export function tinhTongSoDuong() {
    let hienThiKetQua = document.getElementById('bai-1-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let ketQua = 0;
        for (let i = 0; i < danhSachSo.length; i++) {
            if (danhSachSo[i] > 0) {
                ketQua += danhSachSo[i];
            }
        }
        thongBao = `Tổng số dương: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function demSoDuong() {
    let hienThiKetQua = document.getElementById('bai-2-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let ketQua = 0;
        for (let i = 0; i < danhSachSo.length; i++) {
            if (danhSachSo[i] > 0) {
                ketQua ++;
            }
        }
        thongBao = `Số dương: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function timSoNhoNhat() {
    let hienThiKetQua = document.getElementById('bai-3-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let ketQua = '';
        for (let i = 0; i < danhSachSo.length; i++) {
            if (i == 0) {
                ketQua = danhSachSo[i];
            }
            if (danhSachSo[i] < ketQua) {
                ketQua = danhSachSo[i];
            }
        }
        thongBao = `Số nhỏ nhất: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function timSoDuongNhoNhat() {
    let hienThiKetQua = document.getElementById('bai-4-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let ketQua = '';
        for (let i = 0; i < danhSachSo.length; i++) {
            if (i == 0 && danhSachSo[i] >= 0) {
                ketQua = danhSachSo[i];
            }
            if (danhSachSo[i] < ketQua && danhSachSo[i] >= 0) {
                ketQua = danhSachSo[i];
            }
        }
        thongBao = `Số dương nhỏ nhất: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function timSoChanCuoiCung() {
    let hienThiKetQua = document.getElementById('bai-5-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let ketQua = '';
        for (let i = 0; i < danhSachSo.length; i++) {
            if (danhSachSo[i] % 2 == 0) {
                ketQua = danhSachSo[i];
            }
        }
        thongBao = `Số chẵn cuối cùng: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function doiCho() {
    let soDauTien = document.getElementById('item-index-1').value;
    let soThuHai = document.getElementById('item-index-2').value;
    let hienThiKetQua = document.getElementById('bai-6-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else if (!soDauTien || !soThuHai) {
        thongBao = `Vui lòng nhập đủ 2 số`;
    } else {
        let ketQua = danhSachSo;
        let tmp = danhSachSo[soDauTien];
        danhSachSo[soDauTien] = danhSachSo[soThuHai];
        danhSachSo[soThuHai] = tmp;
        thongBao = `Mảng sau khi đổi: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function sapXepTangDan() {
    let hienThiKetQua = document.getElementById('bai-7-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let ketQua = danhSachSo;
        for (let i = 0; i < danhSachSo.length; i++) {
            for (let y = 0; y < danhSachSo.length - 1; y++) {
                if (danhSachSo[y] > danhSachSo[y + 1]) {
                    let tmp = danhSachSo[i];
                    danhSachSo[i] = danhSachSo[y + 1];
                    danhSachSo[y + 1] = tmp;
                }
            }
        }
        thongBao = `Mảng sau khi sắp xếp: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function timSoNguyenToDauTien() {
    let hienThiKetQua = document.getElementById('bai-8-ket-qua');

    let thongBao = 'Không có số nguyên tố';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let ketQua = '';
        for (let i = 0; i < danhSachSo.length; i++) {
            if (kiemTraSoNguyenTo(danhSachSo[i])) {
                ketQua = danhSachSo[i];
                break;
            }
        }
        thongBao = `Số nguyên tố đầu tiên: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function demSoNguyen() {
    let hienThiKetQua = document.getElementById('bai-9-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let ketQua = 0;
        for (let i = 0; i < danhSachSo.length; i++) {
            if (Number.isInteger(danhSachSo[i])) {
                ketQua ++;
            }
        }

        thongBao = `Số nguyên: ${ketQua}`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

export function soSanhAmDuong() {
    let hienThiKetQua = document.getElementById('bai-10-ket-qua');

    let thongBao = '';

    if (!danhSachSo.length) {
        thongBao = `Vui lòng thêm số vào danh sách trước`;
    } else {
        let soDuong = 0;
        let soAm = 0;
        for (let i = 0; i < danhSachSo.length; i++) {
            if (danhSachSo[i] > 0) {
                soDuong ++;
            } else if (danhSachSo[i] < 0) {
                soAm ++;
            }
        }

        thongBao = `Số dương ${(soDuong > soAm) ? '>' : (soDuong < soAm) ? '<' : '='} Số âm`;
    }
    
    hienThiKetQua.innerHTML = thongBao;
}

// Hàm chung
function kiemTraSoNguyenTo(so) {
    if (so < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i == 0) {
            return false;
        }
    }
    return true;
}