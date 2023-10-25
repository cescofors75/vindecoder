# VIN Decoder API Random VIN Generator

This project is a simple demonstration of the usage of the NHTSA's Vehicle API to decode randomly generated VIN numbers.

## Overview

The application generates random VIN numbers and sends them to the NHTSA's Vehicle API to decode them. The decoded data is then displayed on the web page. The application checks for valid VIN numbers and showcases the decoded information for each.

## Setup

**Prerequisites**: Ensure you have a browser that supports ES6 and above.

1. Clone this repository to your local machine.
2. Navigate to the directory and open the `index.html` file in your browser.

## How It Works

### Generating Random VIN:

- The application uses the `makeid` function to generate random VIN numbers.
- The function uses a character set of numbers and selected alphabets to ensure the generated VIN adheres to the valid VIN structure.

### Decoding the VIN:

- The generated VIN is passed to the `sub` function which makes an API call to the NHTSA's Vehicle API.
- On successful response, the data is parsed and passed to the `myFunction` for display.

### Displaying the Results:

- The application displays the generated VIN number.
- If the VIN is valid, the decoded data is showcased on the web page.

## Limitations

- Since the VIN numbers are randomly generated, not all might be valid or have corresponding vehicle data in the NHTSA's database.
- The application uses a simple sleep function which might not be efficient for larger batches of VIN numbers.

## Contribution

Feel free to fork this repository, submit issues, or pull requests if you think something can be added or improved.

## License

This project is open-sourced under the MIT License.
