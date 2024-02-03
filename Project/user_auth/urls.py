from django.urls import path,include
from .views import UserRegistrationView,UserLoginView,FinancialDetailsView,home,ForecastedFinancialDetailsView,CalculateMetricsView,DownloadTopCompaniesExcelView,FinancialDataView, FinancialDataScreenerView
# from rest_framework.routers import Defaenv\SultRouter

# router=DefaultRouter()
# router.register(r'financial-data',FinancialDataViewSet,basename='financial-data')


urlpatterns = [

    path('financial-data/query/', FinancialDataView.as_view(), name='financial_data_query'),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    # path('logout/', UserLogoutView.as_view(), name='logout'),
    path('financial-details/', FinancialDetailsView.as_view(template_name='form3.html'), name='financial-details'),
    path('',home, name='home'),
    path('forecasted-financial-details/', ForecastedFinancialDetailsView.as_view(template_name='form3.html'), name='forecasted-financial-details'),
    # path('download/', FinancialDataView.as_view, name='download'),
    path('calculate-metrics/', CalculateMetricsView.as_view(), name='calculate-metrics'),
    path('download-top-metrics/',DownloadTopCompaniesExcelView.as_view(), name='download_metrics'),
    # path('financial-data/',include(router.urls)),
    # path('import-excel/', ExcelImportView.as_view(), name='excel-import'),
    path('financial-data/screener/', FinancialDataScreenerView.as_view(), name='financial_data_screener'),





]
