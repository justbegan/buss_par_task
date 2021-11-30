$(document).ready(function(){
    $("#change_book_id").click(function(){

        $.ajax({
            url:'change_book',
            type:'POST',
            headers: { "X-CSRFToken": getCookie("csrftoken")},
            data:{
            title:$('#book_title_id').val(),
            author:$('#book_author_id').val(),
            content:$('#book_view_content_id').val(),
            },
        success:function(response){
            alert("Сохранено")
 
        }
        });
        });
    });