/**
 * Inputs
 *so1, so2, so3, so4, so5
 *
 *
 * Process
 *     Ép kiểu 5 số
 *     Tính trung bình:
 *          (so1+so2+so3+so4+so5)/5
 *
 *
 * Outputs
 *trungBinh
 *
 *
 *
 */

function tinhTrungBinh() {
    let so1 = document.getElementById("inputSo1").value;
    let so2 = document.getElementById("inputSo2").value;
    let so3 = document.getElementById("inputSo3").value;
    let so4 = document.getElementById("inputSo4").value;
    let so5 = document.getElementById("inputSo5").value;
    console.log(so1, so2, so3, so4, so5);
    let trungBinh = 0;

    so1 = Number(so1);
    so2 = Number(so2);
    so3 = Number(so3);
    so4 = Number(so4);
    so5 = Number(so5);

    trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

    document.getElementById("textChange__bai2").innerHTML = `
    Kết quả : ${trungBinh}`;
}

document.getElementById("btn__bai2").onclick = tinhTrungBinh;
