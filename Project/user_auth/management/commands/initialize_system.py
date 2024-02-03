import os
import sys
import pandas as pd
from django.db.utils import IntegrityError
from django.core.management.base import BaseCommand
from user_auth.models import FinancialData

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..')))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Number_Leader.settings")

class Command(BaseCommand):
    help = 'Initialize the system with financial data'

    def handle(self, *args, **options):
        excel_path = r'C:\Users\HP\Desktop\Chandu\MSP\Intern_Work\21-01-2024\Project\Project\Project\dummy_data.xlsx'

        try:
            if os.path.isfile(excel_path):
                print("Excel file found.")
                data = pd.read_excel(excel_path)
                print("Data loaded from Excel.")

                if not data.empty:
                    print(f"Number of rows in data: {len(data)}")
                    for index, row in data.iterrows():
                        print(f"Processing row {index + 1}: {row}")
                        try:
                            FinancialData.objects.create(
                                name=row['Name'],
                                cmp_rs=row['CMP Rs.'],
                                 pe=row['P/E'],
                                mar_cap_rs=row['Mar Cap Rs.Cr.'],
                                no_of_shares=row['No. of Shares'],
                                eps=row['EPS'],
                                net_earnings=row['Net Earnings (PATESH) in Cr'],
                                sales_rs=row['Sales Rs.Cr.'],
                                sales_per_share=row['Sales per share'],
                                cmp_over_bv=row['CMP / BV'],
                                bvps=row['BVps'],
                                bv_in_cr=row['BV in cr'],
                                ind_pe=row['Ind PE'],
                                ev_rs=row['EV Rs.Cr.'],
                                pat_12m_rs=row['PAT 12M Rs.Cr.'],
                                cmp_over_ocf=row['CMP / OCF'],
                                ocfps=row['OCFps'],
                                ocf_in_cr=row['OCF in cr'],
                                ev_over_ebitda=row['EV/EBITDA'],
                                ebitdaps=row['EBITDAps'],
                                ebitda_in_cr=row['EBITDA in cr']
                            )
                            print("Data inserted successfully.")
                        except IntegrityError as e:
                            print(f"IntegrityError: {e}")
                        except Exception as e:
                            print(f"Error: {e}")
                    self.stdout.write(self.style.SUCCESS('Financial data ingestion completed'))
                else:
                    self.stdout.write(self.style.ERROR('Error: Excel file is empty'))
            else:
                self.stdout.write(self.style.ERROR('Error: Excel file not found'))
        except pd.errors.EmptyDataError:
            self.stdout.write(self.style.ERROR('Error: Excel file is empty'))
        except IntegrityError:
            self.stdout.write(self.style.ERROR('Error: Database integrity issue'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error: {e}'))
