$(document).ready(function(){
    let count = $('#myData tr').length + 1;
    $('#btnSave').click(function(e){
        e.preventDefault();

        let hoTen = $('#txtHoTen').val().trim();
        let sdt = $('#txtSoDienThoai').val().trim();
        let email = $('#txtEmail').val().trim();
        let ngaySinh = $('#txtNgaySinh').val();
        let gioiTinh = $('input[name="gioiTinh"]:checked').val() || '';
        let ngonNgu = $('input[name="ngonNgu"]:checked').map(function(){
            return $(this).next('label').text().trim();
        }).get().join(', ');
        let khoaHoc = $('#sltKhoaHoc option:selected').text();
        let hocPhi = $('#txtHocPhi').val();
        let fileInput = $('#fileAnhDaiDien')[0];
        let anhDaiDien = '';
        if(fileInput && fileInput.files && fileInput.files[0]){
            anhDaiDien = fileInput.files[0].name;
        }
        let tuoi = new Date().getFullYear() - new Date(ngaySinh).getFullYear();

        if (!gioiTinh) {
            $('#errGioiTinh').text('Vui lòng chọn giới tính!');
            return;
        } else {
            $('#errGioiTinh').text('');
        }

        if (!ngonNgu) {
            $('#errNgonNgu').text('Vui lòng chọn ngôn ngữ!');
            return;
        } else {
            $('#errNgonNgu').text('');
        }

        let regexHoTen = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/;
        if (!hoTen) {
            $('#errHoTen').text('Không được bỏ trống!');
            return;
        } else if (!regexHoTen.test(hoTen)) {
            $('#errHoTen').text('Vui lòng nhập đúng họ tên!');
            return;
        } else {
            $('#errHoTen').text('');
        }

        let regexSDT = /^\d{4}-\d{3}-\d{3}$/;
        if(!sdt){
            $('#errSoDienThoai').text('Không được bỏ trống!');
            return
        }else if(!regexSDT.test(sdt)){
            $('#errSoDienThoai').text('Vui lòng nhập đúng số điện thoại!');
            return;
        }else{
            $('#errSoDienThoai').text('');
        }

        let regexEmail = /^[a-z]*\.[0-9]*\_[a-z]*\@gmail\.com$/;
        if(!email){
            $('#errEmail').text('Không được bỏ trống!');
            return;
        }else if(!regexEmail.test(email)){
            $('#errEmail').text('Vui lòng nhập đúng email!');
            return;
        }else{
            $('#errEmail').text('');
        }

        if(tuoi < 18){
            $('#errNgaySinh').text('Tuổi không hợp lệ!');
            return;
        } else {
            $('#errNgaySinh').text('');
        }

        if (!$('#sltKhoaHoc').val()) {
            $('#errKhoaHoc').text('Vui lòng chọn khóa học');
            return;
        } else {
            $('#errKhoaHoc').text('');
        }

        let regexAnh = /\.(jpg|png|gif)$/i;
        if(!anhDaiDien){
            $('#errAnhDaiDien').text('Thiếu ảnh đại diện!');
            return;
        }else if(!regexAnh.test(anhDaiDien)){
            $('#errAnhDaiDien').text('Ảnh đại diện không hợp lệ!');
            return;
        }else{
            $('#errAnhDaiDien').text('');
        }

        let newRow =
            '<tr>' +
            '<td>' + count + '</td>' +
            '<td>' + hoTen + '</td>' +
            '<td>' + ngaySinh + '</td>' +
            '<td>' + gioiTinh + '</td>' +
            '<td>' + ngonNgu + '</td>' +
            '<td>' + sdt + '</td>' +
            '<td>' + email + '</td>' +
            '<td>' + khoaHoc + '</td>' +
            '<td>' + hocPhi + '</td>' +
            '<td class="text-center"><img src="../IMG/' + anhDaiDien + '" alt="" class="rounded-circle" style="width: 50px; height:50px;"></td>' +
            '</tr>';

        $('#myData').append(newRow);
        count++;

        bootstrap.Modal.getOrCreateInstance('#myModal').hide()
    });

    $('#sltKhoaHoc').change(function(){
        let selectedValue = $(this).val();
        $('#txtHocPhi').val(selectedValue);
    });

    $('#txtHoTen').blur(function (e) {
        let hoTen = $('#txtHoTen').val().trim();
        let regexHoTen = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/;
        if (!hoTen) {
            $('#errHoTen').text('Không được bỏ trống!');
            return;
        } else if (!regexHoTen.test(hoTen)) {
            $('#errHoTen').text('Vui lòng nhập đúng họ tên!');
            return;
        } else {
            $('#errHoTen').text('');
        }
    });


    $('#txtSoDienThoai').blur(function (e) { 
        let sdt = $('#txtSoDienThoai').val().trim()
        let regexSDT = /^\d{4}-\d{3}-\d{3}$/;
        if(!sdt){
            $('#errSoDienThoai').text('Không được bỏ trống!');
            return
        }else if(!regexSDT.test(sdt)){
            $('#errSoDienThoai').text('Vui lòng nhập đúng số điện thoại!');
            return;
        }else{
            $('#errSoDienThoai').text('');
        }
    });

    $('#txtEmail').blur(function (e) { 
        let email = $('#txtEmail').val().trim()
        let regexEmail = /^[a-z]*\.[0-9]*\_[a-z]*\@gmail\.com$/;
        if(!email){
            $('#errEmail').text('Không được bỏ trống!');
            return;
        }else if(!regexEmail.test(email)){
            $('#errEmail').text('Vui lòng nhập đúng email!');
            return;
        }else{
            $('#errEmail').text('');
        }
    });

    $('#sltKhoaHoc').blur(function (e) { 
        let khoaHoc = $('#sltKhoaHoc option:selected').text();
        if (!$('#sltKhoaHoc').val()) {
            $('#errKhoaHoc').text('Vui lòng chọn khóa học');
            return;
        } else {
            $('#errKhoaHoc').text('');
        }
    });

    $('#fileAnhDaiDien').blur(function (e) { 
        let anhDaiDien = '';
        if(fileInput && fileInput.files && fileInput.files[0]){
            anhDaiDien = fileInput.files[0].name;
        }

        let regexAnh = /\.(jpg|png|gif)$/i;
        if(!anhDaiDien){
            $('#errAnhDaiDien').text('Thiếu ảnh đại diện!');
            return;
        }else if(!regexAnh.test(anhDaiDien)){
            $('#errAnhDaiDien').text('Ảnh đại diện không hợp lệ!');
            return;
        }else{
            $('#errAnhDaiDien').text('');
        }
    });
});