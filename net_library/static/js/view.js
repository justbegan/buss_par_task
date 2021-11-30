// Функция вызывается из html
function view_book(book_id){
    book_id = book_id.split("_");
    id = book_id[2];

    // Get запрос для просмотра
    // По id находит записи
        $.ajax({
        url:"view_book/" + id,
        type:'GET',
        
        success:function(response){

            // Ставка в html
            $("input[id *='book_title_id' ]").val(response.title),
            $("input[id *='book_author_id' ]").val(response.author),
            $("textarea[id *='book_view_content_id' ]").val(response.content)

            // Изменение textarea под длину текста
            if (response.content_len >= 175){
            $('#book_view_content_id').attr("style", "width: 100%; height: "+ response.content_len/177 * 25 +"px");
            }
            else{
            $('#book_view_content_id').attr("style", "width: 100%; height: 60 px");  
            }
        }
        });
        };

