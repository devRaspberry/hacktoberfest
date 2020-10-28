# pdf-extractor

Follow the steps to transform the pdf into text:

1. Clone this repository and enter the project folder by typing:

`cd pdf-extractor`

2. Inside the folder, run the command:

`source bin/activate`

*NOTE:* You must have installed the `virtualenv` tool. To install, type `pip install virtualenv` and redo the step 2.

3. Run the follow command, replacing the `FILE.pdf` with the absolute path (if the file is not in the project folder):

`python extractor.py --file FILE.pdf`

*NOTE:* You can test this application by running `python extractor.py --file example.pdf`.

4. Your pdf converted to text will be generated within the project with the name of `pdf_text.txt`.