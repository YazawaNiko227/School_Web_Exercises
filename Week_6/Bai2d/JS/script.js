function doiMau() {
    let mau = document.getElementById("selMau").value;
    
    let loaiDinhDang = document.querySelector('input[name="optDinhDang"]:checked');
    
    let vungNoiDung = document.getElementById("content");

    if (!mau) {
        alert("Vui lòng chọn một màu!");
        return;
    }
    if (!loaiDinhDang) {
        alert("Vui lòng chọn loại định dạng (Background hoặc Font)!");
        return;
    }

    if (loaiDinhDang.value === "Background") {
        vungNoiDung.style.backgroundColor = mau;
        vungNoiDung.style.color = ""; 
    } else {
        vungNoiDung.style.color = mau;
        vungNoiDung.style.backgroundColor = ""; 
    }
}

function lamLai() {
    document.getElementById("txtHoTen").value = "";
    document.getElementById("selMau").value = "";
    
    let radioButtons = document.getElementsByName("optDinhDang");
    for(let i=0; i<radioButtons.length; i++) radioButtons[i].checked = false;

    let vungNoiDung = document.getElementById("content");
    vungNoiDung.style.backgroundColor = "";
    vungNoiDung.style.color = "";
}