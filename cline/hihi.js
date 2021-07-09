
   var t=0;
   var taikhoan=JSON.parse(localStorage.getItem('taikhoan'));
   console.log(taikhoan);

   if(taikhoan==null)
var taikhoan=new Array();
var matk='';
var tentk='';
var mktk='';
for(var i=0;i<taikhoan.length;i++){
   matk=matk+taikhoan[i].ma+'<br>';
   tentk=tentk+taikhoan[i].ten+'<br>';
   mktk=mktk+taikhoan[i].h3+'<br>';
}
console.log(matk);
   function thin(){
    
      var i= document.getElementById('p4');
       var h='';
      h+= '<h2  id="ttt5" style="text-align: center;">NHÂN VIÊN</h2>';
      h+=  ' <div id="p5">';
      h+=    '  MANV';
      h+=     ' <input type="text"  id="D1">';
      h+=    '  TENV ';
      h+=    ' <input type="text" id="D2">';
      h+=   ' SDT';
      h+=    ' <input type="text" id="D3">';
      h+=     'DIACHI';
      h+=     '<input type="text" id="D4">';
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
   h+='<div>'
   h+=  ' <table>'
   h+=                   '  <tr id="tr1">'
   h+=                        ' <td>MANV</td>'
   h+=                         '<td>TENNV</td>'
   h+=                        ' <td>SDT</td>'
   h+=                        ' <td>DIACHI</td>'
   h+=                        ' <td>GIOITINH</td>'
   h+=                      '   <td>CHUCVU</td>'
      
   h+=                  '   </tr>'
   h+=                   '  <tr id="tr">'
   h+=                      '   <td></td>'
   h+=                       '  <td></td>'
   h+=                     '    <td></td>'
   h+=                        ' <td></td>' 
   h+=                        ' <td></td>'
   h+=                        ' <td></td>'
                              
   h+=                     '</tr>'
                  
   h+=                 '</table>'
   h+=            ' </div>'
   if(t==5){
   i.innerHTML=h;
   }
   } 
   function KH(){
       
       var i= document.getElementById('p4');
       //var kh=new Array;

      
      h='';
       h+= '<h2  id="ttt5" style="text-align: center;">KHACH HANG</h2>';
       h+=  ' <div id="p5">';
       h+=    '  MAKH';
       h+=     ' <input type="text" id="D1">';
       h+=    '  TEKH ';
       h+=    ' <input type="text" id="D2">';
       h+=   ' SDT';
       h+=    ' <input type="text" id="D3">';
       h+=     'DIACHI';
       h+=     '<input type="text" id="D4">';
       h+=    ' GIOITINH';
       h+=    '<input type="text" id="D5">';
       h+=   ' EMAIL';
       h+=    ' <input type="text" id="D6">';
           
       h+=   ' </div>';
    
       h+= '<div id="p6">';
       h+=     '<button class="b">TÌM KIẾM</button> <br>';
       h+=   ' <button class="b"  onclick="them()">THÊM</button><br>';
       h+= ' <button class="b">SỬA</button><br>';
       h+= ' <button class="b">XÓA</button><br>';
       h+= '    <button class="b">THOÁT</button><br>';
    h+= ' </div>';
    h+='<div>'
    h+=  ' <table>'
    h+=                   '  <tr id="tr1">'
    h+=                        ' <td>MAKH</td>'
    h+=                         '<td>TENKH</td>'
    h+=                        ' <td>SDT</td>'
    h+=                        ' <td>DIACHI</td>'
    h+=                        ' <td>GIOITINH</td>'
    h+=                      '   <td>EMAIL</td>'
       
    h+=                  '   </tr>'
    h+=                   '  <tr id="tr">'
    h+=                      '   <td></td>'
    h+=                       '  <td></td>'
    h+=                     '    <td></td>'
    h+=                        ' <td></td>' 
    h+=                        ' <td></td>'
    h+=                        ' <td></td>'
                               
    h+=                     '</tr>'
                   
    h+=                 '</table>'
    h+=            ' </div>'
    if(t==5){
    i.innerHTML=h;
    
    } 
   }
    function DL(){
    
      var i= document.getElementById('p4');
       var h='';
      h+= '<h2  id="ttt5" style="text-align: center;">DAI LI</h2></h2>';
      h+=  ' <div id="p5">';
      h+=    '  MADL';
      h+=     ' <input type="text" id="D1">';
      h+=    '  TENDL ';
      h+=    ' <input type="text" id="D2">';
      h+=   ' SDT';
      h+=    ' <input type="text" id="D3">';
      h+=     'DIACHI';
      h+=    ' <input type="text" id="D4">';
     
      h+=   ' EMAIL';
      h+=    ' <input type="text" id="D6">';
          
      h+=   ' </div>';
   
      h+= '<div id="p6">';
      h+=     '<button class="b">TÌM KIẾM</button> <br>';
      h+=   ' <button class="b">THÊM</button><br>';
      h+= ' <button class="b">SỬA</button><br>';
      h+= ' <button class="b">XÓA</button><br>';
      h+= '    <button class="b">THOÁT</button><br>';
   h+= ' </div>';
   h+='<div>'
   h+=  ' <table>'
   h+=                   '  <tr id="tr1">'
   h+=                        ' <td>MADL</td>'
   h+=                         '<td>TENDL</td>'
   h+=                        ' <td>SDT</td>'
   h+=                        ' <td>DIACHI</td>'
                    
   h+=                      '   <td>EMAIL</td>'
      
   h+=                  '   </tr>'
   h+=                   '  <tr id="tr">'
   h+=                      '   <td></td>'
   h+=                       '  <td></td>'
   h+=                     '    <td></td>'
   h+=                        ' <td></td>' 
   
   h+=                        ' <td></td>'
                              
   h+=                     '</tr>'
                  
   h+=                 '</table>'
   h+=            ' </div>'
   if(t==5){
   i.innerHTML=h;
   }

    }

    function TK(){
    
      var i= document.getElementById('p4');
       var h='';
      h+= '<h2  id="ttt5" style="text-align: center;">TAI KHOẢN</h2>';
      h+=  ' <div id="p5">';
      h+=    '  MANV';
      h+=     ' <input type="text" id="D1" value="'+taikhoan[0].ma+'">';
      h+=    '  TENTK ';
      h+=    ' <input type="text" id="D2" value="'+taikhoan[0].ten+'">';
      h+=   ' MK';
      h+=    ' <input type="text" id="D3" value="'+taikhoan[0].h3+'">';
   
      h+=   ' </div>';
   
      h+= '<div id="p6">';
      h+=     '<button class="b" onclick="timkiem()">TÌM KIẾM</button> <br>';
      h+=   ' <button class="b" onclick="them()">THÊM</button><br>';
      h+= ' <button class="b"  onclick="xoa()">SỬA</button><br>';
      h+= ' <button class="b">XÓA</button><br>';
      h+= '    <button class="b">THOÁT</button><br>';
   h+= ' </div>';
   h+='<div id="co">';
   h+=  ' <table>'
   h+=                   '  <tr id="tr1">'
   h+=                        ' <td>MANV</td>'
   h+=                         '<td>TENTK</td>'
   h+=                        ' <td>MK</td>'
 
      
   h+=                  '   </tr>'
   h+=                   '  <tr id="tr">'
   h+=                      '   <td id="ma1">'+matk+'</td>'
   h+=                       '  <td id="ten1">'+tentk+'</td>'
   h+=                     '    <td id="mk1">'+mktk+'</td>'
 
                              
   h+=                     '</tr>'
                  
   h+=                 '</table>'
   h+=            ' </div>'
   if(t==5){
   i.innerHTML=h;
   }

    }

function dangnhap(){
     
   var tt=document.getElementById('ppp').value;
   var tt1=document.getElementById('ppp1').value;
  alert('chán đời');
   for(var j=0;j<taikhoan.length;j++){
 
   if(tt==taikhoan[j].ten&&tt1==taikhoan[j].h3){
   document.getElementById('ppp').value=" ";
      document.getElementById('ppp1').value=" ";
    alert('dang nhap thanh cong');
    t=5;
   break;
   }
    else{
      if(j==(taikhoan.length-1)){
       alert('dang nhap that bai');
      }
    }
   
}
}
function dang(){
   
   var i= document.getElementById('p4');
   var h='';
   h+= '<div id="div">'
 h+=  '<p id="cc"> tài khoản <input type="text" placeholder="đăng nhập" id="ppp"></p>'  
  h+= ' <p id="ccc" >  mật khâu  <input type="password" placeholder="mật khâu" id="ppp1"></p>'  
  h+= '<p id="cccc"> <button id="ee" onclick="dangnhap()">đăng nhập</button></p>'
   h+= '</div>'
   t=0;
   i.innerHTML=h;
}



function them(){
   var d1=document.getElementById('D1').value;
   document.getElementById('D1').value='';
   alert(d1);
   var d2=document.getElementById('D2').value;
   document.getElementById('D2').value='';
   alert(d2);
   var d3=document.getElementById('D3').value;
   document.getElementById('D3').value='';
   alert(d3);
for(var i=0;i<taikhoan.length;i++){

if(d1==taikhoan[i].ma){
   alert("mã tài khoản này đã tồn tại");
   break;
}
else if(d2==taikhoan[i].ten) {
   alert('ten tài khoan này da tôn tai');
   break;
}
   else{
      if(i=taikhoan.length){
      var tk=hdt(d1, d2, d3);
taikhoan.push(tk);
var kkkk=JSON.stringify(taikhoan);
localStorage.setItem("taikhoan", kkkk);
      }
   

}


}

}
function timkiem(){
   var rr=0;
    matk='';
tentk='';
 mktk='';
     
   var tt=document.getElementById('D1').value;
   var tt1=document.getElementById('D2').value;
   var ttt1=document.getElementById('D3').value;
  
   for(var j=0;j<taikhoan.length;j++){
 
   if(tt1==taikhoan[j].ten||ttt1==taikhoan[j].h3||tt==taikhoan[j].ma){
      matk=matk+taikhoan[j].ma+'<br>';
      tentk=tentk+taikhoan[j].ten+'<br>';
      mktk=mktk+taikhoan[j].h3+'<br>';
    rr=1;
   
   }
    else{
      if(j==(taikhoan.length-1)&&rr==0){
       alert('khong có tk nào ');
      }
    }

   
}
var ma1=document.getElementById('ma1');
var ten1=document.getElementById('ten1');
var mk1=document.getElementById('mk1');
ma1.innerHTML=matk;
ten1.innerHTML=tentk;
mk1.innerHTML=mktk;
}

function hdt(h1, h2, h3, h4, h5, h6){
   var ht=new Object();
   ht.ma=h1;
   ht.ten=h2;
   ht.h3=h3;
ht.h4=h4;
ht.h5=h5;
ht.h6=h6;
return ht;
}

  

