alert('thii');
function nhanvien(){
    alert('thin');
   var i= document.getElementById('p4');
    var h='';
   h+= '<h2 style="text-align: center;">NHÂN VIÊN</h2>';
   h+=  ' <div id="p5">';
   h+=    '  MANV';
   h+=     ' <input type="text" id="D1">';
   h+=    '  TENV ';
   h+=    ' <input type="text" id="D2">';
   h+=   ' SDT';
   h+=    ' <input type="text" id="D3">';
   h+=     'DIACHI';
   h+=     <'input type="text" id="D4">';
   h+=    ' GIOITINH';
   h+=    '<input type="text" id="D5">';
   h+=   ' CHUCVU';
   h+=    ' <input type="text" id="D6">';
       
   h+=   ' </div>';

   h+= '<div id="p6">';
   h+=     '<button class="b">TÌM KIẾM</button> <br>';
   h+=   ' <button class="b">THÊM</button><br>';
   h+= ' <button class="b">SỬA</button><br>';
   h+= ' <button class="b">XÓA</button><br>';
   h+= '    <button class="b">THOÁT</button><br>';
h+= ' </div>';
i.innerHTML=h;

} 
alert('thii');