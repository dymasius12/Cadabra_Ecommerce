from django.urls import path
from . import views

urlpatterns = [
    path("chats/", views.ChatListView.as_view(), name="chat-list"),
    path("messages/", views.MessageListView.as_view(), name="message-list"),
]
