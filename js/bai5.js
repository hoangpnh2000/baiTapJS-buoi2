/**
 * Input
 *  - num
 *
 * Process
 *  soHangChuc: num / 10
 *  soHangDonVi: num % 10
 *
 *
 * Output
 *  soHangDonVi, soHangChuc
 *
 */

function tong2KySo() {
    let num = document.getElementById("InputSo").value;
    let soHangChuc = 0;
    let soHangDonVi = 0;

    soHangChuc = Math.floor(num / 10);
    soHangDonVi = num % 10;

    let tong = soHangChuc + soHangDonVi;

    console.log(tong);

    document.getElementById("textChange__bai5").innerHTML = `Tổng : ${tong}`;
}
