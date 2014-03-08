$(document).ready(
	function(){
		$('#leaveMessageBtn').click(function(){
			$.post("/ireno/leaveMessage/",{name: $('#name').val(),email: $('#email').val(),content: $('#content').val()},function(data){
				if(data.flag=="1"){
					alert("留言成功!");
					window.location.reload(true);
				}else{
					alert("留言失败!");
				}
			},"json");
		});
		$('#leaveMessagePopBtn').click(function(){
			$('#addMessageBox').slideToggle('fast');
		});
		$('#cancelBtn').click(function(){
			$('#addMessageBox').slideToggle('fast');
		});
	}
);
