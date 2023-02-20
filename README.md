# nosql-social-media-api
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list

## Description

This project uses MongoDB, Mongoose, and Express.js to create a social media application where users can share their thoughts, add friends, and react to their friends' thoughts. This is done by creating a NoSQL databse using API routes such as get, post, put, and delete. Functionality was tested using Insomnia and MongoCompass.


<!-- Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn? -->

## Table of Contents (Optional)

<!-- If your README is long, add a table of contents to make it easy for users to find what they need. -->

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Tests](#tests)

## Installation

Applications required for use: 
- Bash
- Node.js 

Initialization: 
- ```npm init```
- ```npm start```
<!-- What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. -->


## Usage

There are 9 main sections of this repository:

- [Config Folder](https://github.com/abbeydoyle/nosql-social-media-api/tree/main/config) - Contains the script for database connection

- [Controllers Folder](https://github.com/abbeydoyle/nosql-social-media-api/tree/main/controllers) - Contains the script functionality for Mondodb population

- [Models Folder](https://github.com/abbeydoyle/nosql-social-media-api/tree/main/models) - Contains the scripts containing model and schema creation

- [Routes Folder](https://github.com/abbeydoyle/nosql-social-media-api/tree/main/routes) - Contains the scripts containing the api route implementation of the controller functions

- [Utils Folder](https://github.com/abbeydoyle/nosql-social-media-api/tree/main/utils) - Contains the scripts containing seeding data

- [server.js](https://github.com/abbeydoyle/nosql-social-media-api/blob/main/server.js) - Contains the main script of this application, including the local port initialization

- [gitignore](https://github.com/abbeydoyle/nosql-social-media-api/blob/main/.gitignore) - Contains all files to be ignored in the Github repository

- [License](https://github.com/abbeydoyle/nosql-social-media-api/blob/main/LICENSE) - Contains the webpage license

- [ReadMe](https://github.com/abbeydoyle/nosql-social-media-api/blob/main/README.md) - This file containing an executive overview of the project

[Screencastify link](https://drive.google.com/file/d/1YpagcSTn6EwiHNvGel3qwbKv_sdk_L83/view)


<!-- Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ``` -->

## Credits

This webpage was built using UW Trilogy Bootcamp class materials as references.


## License

MIT License

Copyright (c) 2022 abbeydoyle

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<!-- The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/). -->

---

<!-- 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections. -->

## Badges

![badmath](https://img.shields.io/github/repo-size/abbeydoyle/nosql-social-media-api?color=pink&style=plastic)

![badmath](https://img.shields.io/github/issues-closed-raw/abbeydoyle/nosql-social-media-api?color=pink&style=plastic)

![badmath](https://img.shields.io/github/issues-raw/abbeydoyle/nosql-social-media-api?color=pink&style=plastic)

![badmath](https://img.shields.io/github/license/abbeydoyle/nosql-social-media-api?color=pink&style=plastic)

![badmath](https://img.shields.io/github/commits-since/abbeydoyle/nosql-social-media-api/f31b107/main?color=pink&style=plastic)

![badmath](https://img.shields.io/github/last-commit/abbeydoyle/nosql-social-media-api?color=pink&style=plastic)

![badmath](https://img.shields.io/maintenance/yes/2023?color=pink&style=plastic)


<!-- ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time. -->

## Features

This app features:

- User functionality: <br />
      - Create users <br />
      - Add users as friends <br />
      - Update users <br />
      - Delete users <br />
      - Create a friend count

- Thought functionality: <br />
      - Create thoughts <br />
      - Add reactions to other users' thoughts <br />
      - Update thoughts <br />
      - Update reactions <br />
      - Delete thoughts <br />
      - Delete reactions <br />
      - Create a reaction count <br />

- Randomly generated data seeded using javascript

<!-- If your project has a lot of features, list them here. -->

<!-- ## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. -->

## Tests

- Once the connection is established: <br />
      - Seed the database <br />
      - Assign friends with the users created <br />
      - Create new users, thoughts, and reactions <br />
      - Update users, thoughts, or reactions <br />
      - Delete any user, thought, or reaction <br />

<!-- Go the extra mile and write tests for your application. Then provide examples on how to run them here. -->