import requests

url = "http://127.0.0.1:8000/import-excel/"
filename = "C:/Users/HP/Desktop/Chandu/MSP/Intern_Work/21-01-2024/Project/Project/Project/dummy_data.xlsx"

files = {'excel_file': open(filename, 'rb')}

response = requests.post(url, files=files)

print(response.status_code)
print(response.text)
