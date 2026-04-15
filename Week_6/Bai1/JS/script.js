let mssv = prompt("Nhập mã số SV");
        let hoTen = prompt("Nhập Họ tên");
        let lop = prompt("Nhập Lớp");

        if (mssv !== null && hoTen !== null && lop !== null) {
            
            let tableHTML = `
                <table>
                    <tr>
                        <td colspan="3" class="title-row">DANH SÁCH SINH VIÊN</td>
                    </tr>
                    <tr>
                        <th>MSSV</th>
                        <th>Tên</th>
                        <th>Lớp</th>
                    </tr>
                    <tr>
                        <td>${mssv}</td>
                        <td>${hoTen}</td>
                        <td>${lop}</td>
                    </tr>
                </table>
            `;
            document.getElementById("result").innerHTML = tableHTML;
        } else {
            document.getElementById("result").innerHTML = "<p>Bạn đã hủy nhập liệu.</p>";
        }