function hienThiChon() {
    let dsCheckbox = document.getElementsByName("cafe");
    let ketQua = [];
    for (let i = 0; i < dsCheckbox.length; i++) {
        if (dsCheckbox[i].checked) {
            ketQua.push(dsCheckbox[i].value);
        }
    }

    if (ketQua.length > 0) {
        document.getElementById("displayResult").innerHTML = ketQua.join(", ") + ",";
    } else {
        document.getElementById("displayResult").innerHTML = "Chưa chọn loại nào.";
    }
}