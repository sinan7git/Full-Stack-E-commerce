import requests
import json

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.contrib.auth.models import User


@api_view(["POST"])
@permission_classes([AllowAny])
def create(request):
    email = request.data['email']
    password = request.data['password']
    name = request.data['name']
    response_data = {}  
    
    if not User.objects.filter(username=email).exists():
        user = User.objects.create_user(
            username=email,
            password=password,
            first_name=name
        )
        headers = {"Content-type": "application/json"}
        data = {"username": email, "password": password}
        protocol = "https://" if request.is_secure() else "http://"
        url = protocol + request.get_host() + "/api/v1/auth/token/"
        access_token = ""

        response = requests.post(url, headers=headers, data=json.dumps(data))
        if response.status_code == 200:
            response_data = {
                "status_code": 6000,
                "data": response.json(),
                "message": "Account created",
                "access_token": access_token
            }
    else:
        response_data = {
            "status_code": 6001,
            "data": "Not Found",
        }
    return Response(response_data)