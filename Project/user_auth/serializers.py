from rest_framework import serializers
from .models import CustomUser,FinancialDetails,ForecastedFinancialDetails,FinancialData
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id',
            'username',
            'password',
            'email',
            'first_name',
            'last_name',
            'startup_name',
            'website',
            'introductory_video',
            'co_founder',
            'linkedin_profile',
            'introduction',
            'profile_photo',
            'phone_number',
            'date_joined',
        ]

        extra_kwargs = {
            'password': {'write_only': True},
            'id': {'read_only': True},
            'date_joined': {'read_only': True},
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.password=make_password(password)
        instance.save()
        return instance


class FinancialDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialDetails
        fields = '__all__'

class ForecastedFinancialDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForecastedFinancialDetails
        fields = '__all__'

class FinancialDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=FinancialData
        fields='__all__'




class FinancialDataQuerySerializer(serializers.Serializer):
    query = serializers.CharField()

        
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields='__all__'
        