function tinh(phepToan) {
    let s1 = document.getElementById("num1").value;
    let s2 = document.getElementById("num2").value;

    if (s1 === "" || s2 === "") {
        alert("Vui lòng nhập đầy đủ 2 số!");
        return;
    }
    let n1 = parseFloat(s1);
    let n2 = parseFloat(s2);
    let ketQua = 0;
    switch(phepToan) {
        case '+': ketQua = n1 + n2; break;
        case '-': ketQua = n1 - n2; break;
        case '*': ketQua = n1 * n2; break;
        case '/': 
            if (n2 === 0) {
                alert("Không thể chia cho 0!");
                return;
            }
            ketQua = n1 / n2; 
            break;
        case '%': ketQua = n1 % n2; break;
    }

    document.getElementById("result").value = ketQua;
}