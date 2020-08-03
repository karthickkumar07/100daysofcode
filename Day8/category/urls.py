from rest_framework import routers
from django.urls import path,include
from . import views

router = routers.SimpleRouter()
router.register('', views.categoryViewSet)
urlpatterns = [
    path('',include(router.urls))
]