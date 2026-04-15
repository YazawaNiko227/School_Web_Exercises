function kiemTraDangNhap() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "TruongQuocBao" && p === "123456789") {
        alert("Đăng nhập thành công hệ thống!");
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
}