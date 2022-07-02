var arrNumber = [];
document.getElementById('btnThemSo').onclick = function () {
    var n = Number(document.getElementById('nhapSo').value);
    var ketQua = '';
    arrNumber.push(n);
    ketQua += arrNumber;
    document.getElementById('themSo').innerHTML = ketQua;
}
// bài 1 Tổng các số dương trong mảng

// Mô hình 3 khối :
// input : Nhập các số vào mảng
// Đầu ra : Xuất ra tổng các số dương
// output : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
//         => đem so sánh từng giá trị >0 nếu lớn hơn 0 thì cộng vào biến tổng 

document.getElementById('btntongSoDuong').onclick = function () {
    var ketQuab1 = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if ((arrNumber[index]) >= 0) {
            ketQuab1 += arrNumber[index];
            // break;
        } else {

        }
        document.getElementById('ketQua_1').innerHTML = ketQuab1;
    }
}
// bài 2 Đếm số dương trong mảng

// Mô hình 3 khối :
// input : Nhập các số vào mảng
// output : Xuất ra số lượng số dương trong mảng
// xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
//         => đem so sánh từng giá trị >0 nếu lớn hơn 0 thì cộng vào biến đếm cộng thêm 1

document.getElementById('btndemSoDuong').onclick = function () {
    var ketQuab2 = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if ((arrNumber[index]) >= 0) {
            ketQuab2++;
        }
    }
    document.getElementById('ketQua_2').innerHTML = ketQuab2;
}
// bài 3 Tìm số nhỏ nhất trong mảng
// Mô hình 3 khối :
// input : Nhập các số vào mảng
// output : Xuất ra  số nhỏ trong mảng
// xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        //   - đặt biến số nhỏ nhất bắt đầu từ vị trí index 0 và so sánh với các gí trị index trong mảng
//         => tìm thấy giá trị ở vị trí index có kết quả nhỏ nhất thì cho kết quả
document.getElementById('btnsoNhoNhat').onclick = function () {

    var min = arrNumber[0];

    for (var index = 0; index < arrNumber.length; index++) {
        if (min > arrNumber[index]) {

            min = arrNumber[index];

        }
    }
    document.getElementById('ketQua_3').innerHTML = min;
}
// bài 4 Tìm số dương nhỏ nhất trong mảng
// /
// Mô hình 3 khối :
// input : Nhập các số vào mảng
// output : Xuất ra  số nhỏ trong mảng
// xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
        //   - đặt biến số nhỏ nhất và điều kện số đó >0 bắt đầu từ vị trí index 0 và so sánh với các gí trị index trong mảng
//         => tìm thấy giá trị ở vị trí index có kết quả nhỏ nhất thì cho kết quả


document.getElementById('btnsoDuongNhoNhat').onclick = function () {
 var min= -1;

for(var i=0; i<arrNumber.length; i++) {

        if(arrNumber[i]>0 && arrNumber[i]<min){

            min = arrNumber[i];
        }else if ((min<0) && (arrNumber[i] > min)&& (arrNumber[i]>0)) {
            min = arrNumber[i];


}
}
document.getElementById('ketQua_4').innerHTML = min;

}

    // for (var index = 0; index < arrNumber.length; index++) {
    //     if (  min > arrNumber[index] && arrNumber[index] > 0) {
    //         min = arrNumber[index];
    //     }
        
    // }
    // document.getElementById('ketQua_4').innerHTML = min;


// }

// Bài tập 5:Tìm số chẵn cuối cùng
// Mô hình 3 khối :
// input : Nhập các số vào mảng
// xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
//        tạo biến soChan và chạy từ vị trí ngoài của mảng  điều kiện là soChan nếu số đó chia hết cho 2
// output: Xuất ra số chẵn cuối cùng trong mảng

document.getElementById('btnsoChanCuoiCung').onclick = function () {
    var soChan = -1;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] % 2 === 0) {
            soChan = arrNumber[index];
        }
        document.getElementById('ketQua_5').innerHTML = 'Số chẵn cuối cùng là ' + soChan;
    }
}
// Bài tập 6:Đổi chỗ hai giá trị cho nhau
// input : Nhập các số vào mảng
// ouput : Xuất ra mảng đã đổi vị trí 
// xử lí : tạo biến tạm  và gán biến tạm = viTri1 lúc này vị trí 1 đã trống tiếp tục gán viTri1 = viTri2  => vị trí 2 trống gán viTri2 = biến tạm

document.getElementById('btnĐoiCho').onclick = function () {
    var viTri1 = Number(document.getElementById('nhapSovitri1').value)
    var viTri2 = Number(document.getElementById('nhapSovitri2').value)
    var ketQua6 = 0;
    ketQua6 = arrNumber[viTri1]
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = ketQua6;
    document.getElementById('ketQua_6').innerHTML = arrNumber;
}
// Bài tập 7:Sắp xếp tăng dần
// input : Nhập các số vào mảng
// ouput : Xuất ra thứ tự từ nhỏ tới lớn
// xử lí : sử dụng hàm  arrNumber.sort(function (a, b)


document.getElementById('btnSapXep').onclick = function () {

    arrNumber.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    document.getElementById('ketQua_7').innerHTML = arrNumber;
}
// bài 8 Tìm số nguyên tố đầu tiên
// Mô hình 3 khối :
// input : Nhập các số vào mảng
// output: xuất ra số nguyên tố đầu tiên
// xử lí :  tạo hàm kiểm tra số nguyên tố
//     + đặt cờ hiệu kiemtra = true
//     nếu id<= 1 kiemtra =false
//     tạo vòng lặp for(var uoc = 2; uoc <= id1 / 2; uoc++)
//     nếu id % uoc == 0  biến kiemtra = false và dừng vòng lặp
//     - tại hàm chính nếu hàm kiemtra =true ở giá trị mảng nào thì xuất ra giá trị đó
//     ngược lại thì xuất không có số nguyên tố đó

document.getElementById('btnsoNguyenToDuTien').onclick = function () {
    var ketQuab8 = '';
    for (var index = 0; index < arrNumber.length; index++) {
        var kiemTra = kiemTraSoNguyenTo(arrNumber[index]);
        if (kiemTra === true) { //Nếu kiemTra =  true
            ketQuab8 = arrNumber[index] + ' Là số nguyên tố đầu tiên';
            break;
        }
        else {
            ketQuab8 = 'Không có số nguyên tố';
        }


    }

    document.getElementById('ketQua_8').innerHTML = ketQuab8;

}

//Viết hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(so) {//input 1 số 5
    //Biến kiểm tra là output: Đúng là số nguyên tố => true, sai là false
    var kiemTra = true;
    if (so <= 1) {
        kiemTra = false;
    }
    for (var uoc = 2; uoc <= so / 2; uoc++) {
        //Mỗi lần duyệt qua 1 ước thì kiểm tra ước đó 
        if (so % uoc == 0) {
            //3 ước 
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}
// Bài tập 9: Đếm số nguyên
// input : Nhập các số vào mảng mới number1
// ouput : Xuất ra có bao nhiêu số nguyên
// xử lí : Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
//             => dùng hàm Number.isInteger để biết giá trị đó là số nguyên hay ko giá trị trả về true và nếu là true thì biến đếm +1

var themMang = [];
document.getElementById('btnThemSo9').onclick = function () {
    var nNew = Number(document.getElementById('themSoMoi').value);
    var ketQuaThemSo = '';
    themMang.push(nNew);
    ketQuaThemSo += themMang;
    document.getElementById('ThemSo9').innerHTML = ketQuaThemSo;
}
document.getElementById('btnDemsoNguyen').onclick = function () {
    var ketQua9 = 0;
    for (var index = 0; index < themMang.length; index++) {
        if (Number.isSafeInteger(themMang[index]) == true) {
            ketQua9++
        }
    }
    document.getElementById('ketQua_9').innerHTML = ketQua9;

}
// Bài tập 10: So sánh số âm và dương
// Mô hình 3 khối :
// Đầu vào : Nhập các số vào mảng
// Đầu ra : Xuất ra sự so sánh số âm và số dương trong mảng
// xử lí : 
// - Tạo biến soAm và soDuong
// -Tạo vòng lặp for cho chạy theo chiều dài mảng và in ra từng giá trị của mảng
//         - nếu arrNumber[index] > 0 thì kết quả soDuong ++
//            =>  arrNumber[index] < 0 thì thì kết quả soAm ++
// - so sánh số lượng số âm và số lượng số dương

document.getElementById('btnsosanh').onclick = function () {
    var ketQua10 = '';
    var soDuong = 0;
    var soAm = 0;

    for (var index = 0; index <= arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            soDuong++;
        }
        else if (arrNumber[index] < 0) {
            soAm++;
        }
    }
    if (soAm > soDuong) {
        ketQua10 = "số âm > số dương";
    }
    else if (soAm < soDuong) {
        ketQua10 = " số dương > số âm ";
    }
    else {
        ketQua10 = "số âm = số dương";
    }
    document.getElementById('ketQua_10').innerHTML = ketQua10;

}
