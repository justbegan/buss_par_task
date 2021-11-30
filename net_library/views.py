from django.shortcuts import render
from .models import Books
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# Create your views here.




def main_page(request):
    all_books = Books.objects.all()

    context = {
        "all_books": all_books

    }
    return render(request, 'net_library/index.html', context)




@csrf_exempt
def add_book(request):
    post_date = request.POST.get
    if len(post_date('title')) == 0 or len(post_date('content')) == 0:
        return JsonResponse({'stat':0,},status=200)
    b = Books(title=post_date('title'), author=post_date('author'),content=post_date('content') )
    b.save()
    book_id = Books.objects.values_list('pk').last()[0]
    return JsonResponse({'stat':1, "value_list": [book_id, b.title, b.author, b.content]})


class Open_book:
    last_select_book = 0
    def view_book(self, request, pk):
        print(self.last_select_book)
        view_book = Books.objects.values().get(pk=pk)
        view_book['content_len'] = len(view_book['content'])
        self.last_select_book = pk
        return JsonResponse(view_book)
        
    @csrf_exempt
    def change_book(self, request):
        post_date = request.POST.get
        obj = Books.objects.get(pk=self.last_select_book)
        obj.title, obj.author, obj.content = post_date('title'), post_date('author'), post_date('content')
        obj.save()
        return JsonResponse({"status":True})


    def delete_book(self, request):
        print(self.last_select_book)
        Books.objects.get(pk=self.last_select_book).delete()
        return JsonResponse({"id":self.last_select_book})