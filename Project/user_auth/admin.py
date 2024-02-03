from django.contrib import admin
from .models import CustomUser,FinancialDetails,FinancialData
# Register your models here.

admin.site.register(CustomUser)
admin.site.register(FinancialDetails)
admin.site.register(FinancialData)
# admin.site.register(FormulaValue)
