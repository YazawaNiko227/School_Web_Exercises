function xuLyDangKy() {
    let hoTen = document.getElementById("txtHoTen").value;
    let matKhau = document.getElementById("txtMatKhau").value;

    if (hoTen === "" || matKhau === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
        alert("Chúc mừng sinh viên: " + hoTen + " đã đăng ký thành công!");
    }
}