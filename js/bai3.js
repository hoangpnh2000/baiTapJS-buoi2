/**
 * Inputs
 * soTien
 *
 * Process
 *  tiGia = 23500
 *  VND = soTien * tiGia
 *
 * Outputs
 *  VND
 *
 *
 *
 */

function quyDoiTien() {
    let soTien = document.getElementById("InputSoTien").value;
    let tiGia = 23500;
    let VND = 0;

    VND = soTien * tiGia;

    document.getElementById(
        "textChange__bai3"
    ).innerHTML = `Thành tiền: ${Intl.NumberFormat("vn-VN").format(VND)} VND`;
}
