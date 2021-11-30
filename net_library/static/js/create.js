$(document).ready(function(){
    $("#input_add_book").click(function(){

        $("#modal_dialog_id").attr("style", "display: asdasd");
        $.ajax({
        url:'add_book',
        type:'POST',
        headers: { "X-CSRFToken": getCookie("csrftoken")},
        data:{
        title:$('#book_title_id').val(),
        author:$('#book_author_id').val(),
        content:$('#book_content_id').val(),
        },
    


        success:function(response){
                if (response.stat == 1){

                    $("#modal_dialog_id").attr("style", "display: none;");
                    $('.modal-backdrop').remove();

                    var book_class_veryfi = document.getElementsByClassName('book_class')[0]
                    var main_list = response.value_list;

                    tag_1 = "<tr id= 'tr_id_"+ main_list[0] +"' class='book_class' onclick='view_book(this.id)' data-toggle='modal' data-target='#view-modal'><td>"; 
                    tag_2 = main_list[0] +"</td>"+ "<td>"+ main_list[1] +"</td>";
                    tag_3 = "<td>"+ main_list[2] +"</td>" + "<td>";
                    tag_4 = "</td>" + "</tr>";

                    // Проверка, первая ли книга
                    if(book_class_veryfi){

                        markup = tag_1 + tag_2 + tag_3 + tag_4
                        tableBody = $("table tbody");
                        
                    }
                    else{
                        markup = "<tbody>" + tag_1 + tag_2 + tag_3 + tag_4 + "</tbody>";
                        tableBody = $("#tbody_id");
                        
                    }

                    tableBody.append(markup);

                
                }

         }
        });
        });
        });

function append_tr_book(response){
    var main_list = response.value_list;
                     
    tag_1 = "<tr id= 'tr_id_"+ main_list[0] +"' class='book_class' onclick='view_book(this.id)' data-toggle='modal' data-target='#view-modal'><td>"+ main_list[0] +"</td>"+ "<td>"+ main_list[1] +"</td>"; 
    tag_2 = "<td>"+ main_list[2] +"</td>" + "<td>"+ '<button class="btn btn-danger" role="button" aria-pressed="true" id = "del_button_';
    tag_3 = main_list[0] +'" onclick="del_book(this.id)">Удалить</button>' +"</td>" + "</tr>";
    markup = tag_1 + tag_2 + tag_3

    tableBody = $("table tbody");
    tableBody.append(markup);
}
function getCookie(c_name)
{
    if (document.cookie.length > 0)
    {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1)
        {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
    }

$("#add_book_main_page").click(function(){
    //$("#body").attr("class", "modal-open");
    $("#modal_dialog_id").attr("style", "display: asdasd");
});