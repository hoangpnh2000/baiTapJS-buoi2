/**
 * Inputs
 * chieuDai, chieuRong
 *
 * Process
 *     dienTich = chieuDai * chieuRong
 *     chuVi = (chieuDai + chieuRong)*2
 *
 * Outputs
 *  dienTich, chuVi
 *
 *
 */

function hinhChuNhat() {
    let chieuDai = document.getElementById("InputChieuDai").value;
    let chieuRong = document.getElementById("InputChieuRong").value;
    console.log(chieuDai, chieuRong);

    chieuDai = Number(chieuDai);
    chieuRong = Number(chieuRong);

    let dienTich = chieuDai * chieuRong;
    let chuVi = (chieuDai + chieuRong) * 2;

    document.getElementById("textChange__bai4").innerHTML = `
    Diện tích : ${dienTich}
    <br>
    Chu vi : ${chuVi}`;
}
