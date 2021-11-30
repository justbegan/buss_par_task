function del_book(){
// Функция для удаления книг 


// Get запрос удаления для бека
        $.ajax({
        url:"delete_book",
        type:'GET',
        data:{
        },
        success:function(response){
            // Удаление на фронте
            $('#tr_id_'+response.id).remove();
 
        }
        });
        };
        