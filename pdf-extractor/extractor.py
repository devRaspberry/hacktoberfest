import re
import argparse
import pdftotext

parser = argparse.ArgumentParser()
parser.add_argument('--file',  required = True)
arguments = parser.parse_args()

with open(arguments.file, "rb") as f:
    pdf = pdftotext.PDF(f)

file = open('pdf_text.txt', 'w')

for page in pdf:
    file.write(page)

file.close()

print("+=========================================================+")
print(" FINISHED: See your file at pdf_text.txt")
print("+=========================================================+")
