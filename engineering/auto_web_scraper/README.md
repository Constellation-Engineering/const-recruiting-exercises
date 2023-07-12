# Project: Automotive Dealership Web Scraping

**Objective:**  
To build a Python-based web scraper that can retrieve specific information about new vehicles from an automotive dealership's sitemap.

**Overview:**  
The task involves creating a web scraper that will process an automotive dealership's sitemap to find and extract data from new vehicle inventory pages. This data should include the year, make, model, trim, VIN, and MSRP for each vehicle. The result should be a clean, concise CSV file containing this information. The code written should be clean, legible, and follow Python best practices.

## Phase 1: Parsing the Sitemap

1. **Task:** Accept a URL input pointing to the sitemap of the dealership website.
    - Implement a command-line interface or a simple web UI to accept the URL.
    - Validate the URL before proceeding.

2. **Task:** Parse the sitemap to identify the URLs of new vehicle inventory pages.
    - Use a library like BeautifulSoup or lxml to parse the sitemap.
    - Implement logic to find URLs corresponding to the inventory of new vehicles.

## Phase 2: Web Scraping

3. **Task:** Visit each URL and extract the required information.
    - Visit each URL and parse the HTML content using a library like BeautifulSoup.
    - Implement logic to find and extract the:
        - Dealership Domain,
        - Vehicle Page URL,
        - VIN,
        - year,
        - make,
        - model,
        - trim (Optional, extra credit),
        - and MSRP (Optional, extra credit),
        of each vehicle.

## Phase 3: Data Processing

4. **Task:** Process and store the data in a structured format.
    - Clean the extracted data as necessary. For instance, remove unnecessary characters from the MSRP or convert it into a numerical format.
    - Implement error handling for situations where some information might not be available.

## Phase 4: Data Storage

5. **Task:** Store the processed data in a CSV file.
    - Define a CSV schema that includes columns for the year, make, model, trim, VIN, and MSRP.
    - Write the processed data to a CSV file.

## Phase 5: Code Quality and Best Practices

6. **Task:** Write clean, concise, and legible code.
    - The code should be easy to understand and maintain.
    - Include meaningful comments and document all functions/methods.

7. **Task:** Adhere to Python best practices.
    - Follow the PEP 8 style guide for Python code.
    - Use exception handling and logging.

## Deliverable  

A private GitHub repository containing:

- Python code for the web scraper.
- A README file documenting the approach, instructions to run the code, and any dependencies.
- A sample CSV file.

Please share the repo with the Github usernames listed at the bottom of this page.

**Example Input and One Result:**

Here are some example results which can help you identify the data which is mean to be pulled from the site.

An example input for this App would be :

- INPUT:  
`https://www.audimillburn.com/sitemap.xml`

An example New Vehicle page parsed from the Sitemap would be:

- New Vehicle Inventory Page:  
`https://www.audimillburn.com/new/Audi/2023-Audi-Q5-96002d130a0e0a9275fcb50ba58275b5.htm`

An example row of Data retrieved from a New Vehicle page would be:

- Dealership Domain: `www.audimillburn.com`
- Vehicle Page URL:  
`https://www.audimillburn.com/new/Audi/2023-Audi-Q5-96002d130a0e0a9275fcb50ba58275b5.htm`
- VIN: `WA1FAAFY0P2158678`
- year: `2023`
- make: `Audi`
- model: `Q5`
- trim: `45 S line Prestige`
- MSRP: `61715`

**Evaluation Criteria:**

- Ability to process a sitemap and identify relevant URLs.
- Ability to accurately extract information from a webpage.
- Quality and organization of the output CSV file.
- Code quality and adherence to Python best practices.

## How to Submit?

In order to submit your take-home project, please share your **private repository** with the following members.

- [Nauman Hafiz](https://www.github.com/canisvulgaris)
- [Yusuf Khan](https://www.github.com/getmykhan)
- [Haochen Xie](https://www.github.com/haochenxie1)
- [Alan Song](https://www.github.com/weilunsongconstellationagency)
- [Mingwei Sun](https://www.github.com/haochenxie1)
- [Hammad Chaudhry](https://www.github.com/hammadsaleemch345)

Please reach out to nauman@helloconstellation.com if you have any questions.  
