# urls.py
from django.urls import path
from .views import StartChatView, SendMessageView, RetrieveMessagesView

urlpatterns = [
    path('start_chat/', StartChatView.as_view(), name='start_chat'),
    path('send_message/<int:chat_id>/', SendMessageView.as_view(), name='send_message'),
    path('retrieve_messages/<int:chat_id>/', RetrieveMessagesView.as_view(), name='retrieve_messages'),
]
