from django.shortcuts import get_object_or_404
from rest_framework import status, views
from rest_framework.response import Response
from ..models import Chat, Message
from .serializers import ChatSerializer, MessageSerializer


class StartChatView(views.APIView):
    def post(self, request):
        user = self.request.user
        chat = Chat.objects.create()
        chat.participants.add(user)
        serializer = ChatSerializer(chat)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SendMessageView(views.APIView):
    def post(self, request, chat_id):
        chat = get_object_or_404(Chat, id=chat_id)
        user = self.request.user
        content = request.data.get("content")
        message = Message.objects.create(chat=chat, author=user, content=content)
        serializer = MessageSerializer(message)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RetrieveMessagesView(views.APIView):
    def get(self, request, chat_id):
        chat = get_object_or_404(Chat, id=chat_id)
        messages = chat.messages.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
