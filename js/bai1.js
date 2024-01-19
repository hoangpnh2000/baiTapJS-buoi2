/**
 * Inputs:
 * soNgay, luong1Ngay
 *
 *
 *
 * Process:
 * Function:
 *  B1: Lấy giá trị từ form
 *  B2: Công thức
 *      Lương 1 ngày * số ngày làm
 *
 * Outputs:
 * tienLuong
 *
 *
 */

function tinhTienLuong() {
    let soNgay = document.getElementById("Inputluong1Ngay").value;
    let luong1Ngay = document.getElementById("InputSoNgay").value;
    let total = 0;
    console.log(soNgay, luong1Ngay);
    total = soNgay * luong1Ngay;
    console.log(total);

    document.getElementById(
        "textChange__bai1"
    ).innerHTML = ` Tiền lương : ${total}`;
}

document.getElementById("btn__bai1").onclick = tinhTienLuong;
