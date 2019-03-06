# gulp

## What you can do
With gulp you can:
- Compile the SCSS file into a CSS file, add a vendor prefix, compress it, and output it. 
- Compress and output the JavaScript file.
- Convert the string `__NOCACHE__` to UNIX timestamp string.
The reason for doing this is to avoid caching of images and so on.
As a premise, you need to include the string `__NOCACHE__` in the html file.


## How to use
1. Install version 6.x of Node.js ,npm and gulp command.
- `npm install -g gulp`
- `npm init`
- `npm install --save-dev gulp`
2. Clone this repository.
3. Execute the following command.
- `npx gulp`
4. If you change .html, .js, .scss, the gulp being monitored is executed and the file is output.


## important point.
The version of Node.js has been tested with 6.x.
At the current latest version of 11.x etc., grammar of gulpfile.js has been changed so it is not available.
