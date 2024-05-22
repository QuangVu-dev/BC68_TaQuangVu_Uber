const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";
const kiemTraGiaTienKmDauTien = (loaiXe) => {
  // thực hiện kiểm tra loại xe người dùng để trả về giá tiền phù hợp
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
};
// hàm lấy giá tiền km 1 đến 19km
const kiemTraGiaTienTu1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
};
// hàm lấy giá tiền từ 19km trở lên
const kiemTraGiaTienTu19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
};
// thời gian chờ
const kiemTraGiaTienCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
};
document.getElementById("btnTinhTien").onclick = () => {
  console.log("Nút tính tiền");
  //   Lấy dữ liệu từ người dùng và lưu trữ (loại xe ng dùng đi), số km và thời gia chờ

  //   let uberX = document.getElementById("uberX").checked;
  //   let uberSUV = document.getElementById("uberSUV").checked;
  //   let uberBlack = document.getElementById("uberBlack").checked;
  let soKm = document.getElementById("txt-km").value * 1;
  console.log(soKm);
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(thoiGianCho);
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);
  // if (loaiXe == "uberCar") {
  // }
  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  console.log(giaTienKmDauTien);
  let giaTienKmTu1Den19 = kiemTraGiaTienTu1Den19(loaiXe);
  console.log(giaTienKmTu1Den19);
  let giaTienKmTu19TroLen = kiemTraGiaTienTu19TroLen(loaiXe);
  console.log(giaTienKmTu19TroLen);
  let giaTienThoiGianCho = kiemTraGiaTienCho(loaiXe);
  console.log(giaTienThoiGianCho);
  //   thứ nhất viết dom tới 3 input có type radio
  // cấu trúc điều kiện tìm xem input nào có .checked = true
  // lấy dữ liệu từ input đó

  // TH1: Đi 1 km ==> số km người dùng đi * giaTienKmDauTien if (soKm <= 1 && soKm >0)
  // Th2: Đi trong khoảng từ 1km đến 19kn ==> 1 * giaTienkmDauTien + (soKm -1) * giaTienkmTu1Den19
  // Th3: Đi trong khoảng lớn hơn 19km ==> giaKmDauTien + 18 * giaTienTu1Den19 + (soKm-19)* giaTienKmTu19kmTroLen
  // Tính giá tiền chờ ==> math.floor((thoiGianCho - 3)/ 3)

  let tongTien = 0;
  let tongTienChay = 0;
  let tongTienCho = 0;
  if (soKm <= 1 && soKm > 0) {
    tongTienChay = soKm * giaTienKmDauTien;
  } else if (soKm > 1 && soKm <= 19) {
    tongTienChay = giaTienKmDauTien + (soKm - 1) * giaTienKmTu1Den19;
  } else {
    tongTienChay =
      giaTienKmDauTien +
      18 * giaTienKmTu1Den19 +
      (soKm - 19) * giaTienKmTu19TroLen;
  }
  if ((thoiGianCho) => 3) {
    tongTienCho = Math.floor(thoiGianCho / 3) * giaTienThoiGianCho;
  } else {
    tongTienCho == 0;
  }
  tongTien = tongTienChay + tongTienCho;
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  );

  // test thử chức năng modal của bootstrap 4
  // $("#myModal").modal("show");
};

document.getElementById("btnInHoaDon").onclick = () => {
  console.log(btnInHoaDon);
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  let giaTienKmTu1Den19 = kiemTraGiaTienTu1Den19(loaiXe);
  let giaTienKmTu19TroLen = kiemTraGiaTienTu19TroLen(loaiXe);
  let giaTienThoiGianCho = kiemTraGiaTienCho(loaiXe);
  let sokmDauTien = 0;
  let soKmTu1Den19 = 0;
  let sokmTu19TroDi = 0;
  if (soKm <= 1 && soKm > 0) {
    sokmDauTien = soKm;
  } else if (soKm > 1 && soKm <= 19) {
    sokmDauTien = 1;
    soKmTu1Den19 = soKm - 1;
  } else {
    sokmDauTien = 1;
    soKmTu1Den19 = 18;
    sokmTu19TroDi = soKm - 19;
  }
  let tienChayKmDauTien = sokmDauTien * giaTienKmDauTien;
  let tienChayKmTu1Den19 = soKmTu1Den19 * giaTienKmTu1Den19;
  let tienChayKmTu19TroDi = sokmTu19TroDi * giaTienKmTu19TroLen;
  let tongTienCho = 0;
  if ((thoiGianCho) => 3) {
    tongTienCho = Math.floor(thoiGianCho / 3) * giaTienThoiGianCho;
  }
  let tongTien =
    tienChayKmDauTien + tienChayKmTu1Den19 + tienChayKmTu19TroDi + tongTienCho;

  let table = `<table class="table" border="1px" cellpading="10px" cellspacing="0" width="100%">
  <tr>
  <th colspan="4" style="text-align: center">CHI TIẾT HOÁ ĐƠN</th>
  </tr>
  <tr>
  <th>CHI TIẾT</th>
  <th>SỬ DỤNG</th>
  <th>ĐƠN GIÁ (1000đ)</th>
  <th>THÀNH TIỀN (1000đ)</th>
  </tr>
  <tr>
  <td>KM ĐẦU TIÊN</td>
  <td>1</td>
  <td>${giaTienKmDauTien / 1000}</td>
  <td>${tienChayKmDauTien / 1000}</td>
  </tr>
  <tr>
  <td>Từ 1 đến 19 km</td>
  <td>${soKmTu1Den19}</td>
  <td>${giaTienKmTu1Den19 / 1000}</td>
  <td>${tienChayKmTu1Den19 / 1000}</td>
  </tr>
  <tr>
  <td>Từ 19km trở lên</td>
  <td>${sokmTu19TroDi}</td>
  <td>${giaTienKmTu19TroLen / 1000}</td>
  <td>${tienChayKmTu19TroDi / 1000}</td>
  </tr>
  <tr>
  <td>Thời gian chờ</td>
  <td>${thoiGianCho} phút</td>
  <td>${giaTienThoiGianCho / 1000}</td>
  <td>${tongTienCho / 1000}</td>
  </tr>
  </table>
  <h5>TỔNG TIỀN: ${tongTien.toLocaleString("vi", {
    currency: "VND",
    style: "currency",
  })}</h5>`;
  document.querySelector(".modal-body").innerHTML = table;
  $("#myModal").modal("show");
};
