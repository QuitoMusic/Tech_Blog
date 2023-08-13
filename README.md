# Tech_Blog


[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Description

Tech Blog is a vibrant social platform connecting bloggers of all backgrounds, fostering a community that celebrates the spirit of wanderlust, sharing personal journeys, and inspiring others to explore the boundless beauty of our planet. Users can discover, organize, and join local and global events, creating lasting connections with like-minded blogging enthusiasts.



## Installation

First, search for repository on Github called Tech_Blog. Then, on the top-right corner, click 'Code' and copy the link. Afterwards, go to VSCode and open the local terminal from the desired parent repostory where you desire to install the Tech_Blog. Then, write 'git clone (paste link here)'. Finally, you'll notice the repository has been installed for your convenience. Make sure to write your credentials on the .env file, and download the proper dependencies (npm i). After all the dependencies have been downloaded, then we run the seeds (npm run seeds). Before making any changes, make sure that the propper dependencies have been downloaded to prevent bugs or functionality issues.


## Usage

First, right-click on the parent repository called Tech_Blog and select "Open integrated terminal". As a rule, since we have a db folder with the files containing schema.sql and seeds.sql, we should always remember to run the MySql terminal by writing  "mysql -u root -p", write your password and then source each file writing "source schema.sql;" to write those files on the databases and display tables. Make sure you select the correct database by writing "Select * from <Database name>". Finally, write 'node server.js' on the terminal. At this point, the server should be running and the webpage will be rendered on your browser using localhost:3001.



## Contributing

If you would like to contribute as a developer, you can submit a pull request. Before starting any substantial work, it's recommended to open an issue to discuss your proposed changes with the lead developer.

# Screenshots

## Next screenshots will create understanding of the website's functionality.
# a. Homepage ![Alt text](<public/images/Screenshot 2023-08-13 at 8.27.41 AM.png>)
# b. Login Page![Alt text](public/images/Screenshot%202023-08-13%20at%208.29.23%20AM.png)
# c. Sign Up Page ![Alt text](public/images/Screenshot%202023-08-13%20at%208.31.16%20AM.png)
# d. Dashboard ![Alt text](public/images/Screenshot%202023-08-13%20at%208.35.48%20AM.png)
# e. Update User ![Alt text](public/images/Screenshot%202023-08-13%20at%208.38.08%20AM.png)
# f. Create New Post Page ![Alt text](public/images/Screenshot%202023-08-13%20at%208.38.58%20AM.png)
# f. Edit Post Page ![Alt text](public/images/Screenshot%202023-08-13%20at%208.47.29%20AM.png)
 
 
## Refferences


1. <a href = https://www.w3schools.com/>W3Schools</a>


2. <a href = https://stackoverflow.com/>Community Forums & Stack Overflow</a>


3. <a href =https://expressjs.com/>Express.js</a>


4. <a href =https://www.codementor.io/>Codementor</a>


5. <a href =https://www.youtube.com/c/DevEd>DEV Ed YouTube</a>


6. <a href =https://www.reddit.com/r/node/>Reddit Node.js</a>


7. <a href =https://dev.to/>DEV Community</a>


8. <a href =https://calendly.com/d/dnc-wpf-c7s>UCF Tutors</a>


9. <a href =https://developer.mozilla.org/en-US/docs/Glossary/MVC>MDN Web Docs</a>


10. <a href =https://stackoverflow.com/questions/51696768/how-can-i-use-handlebars-with-express>How to use Handlebars with Express - Stackoverflow</a>


## Deployment Link
https://tech-blog-quito-d12834d271f7.herokuapp.com/


## Github Repository
https://github.com/QuitoMusic/Tech_Blog 

## Questions


For any questions, please contact us:


- GitHub: [QuitoMusic](https://github.com/QuitoMusic)

## License


This project is licensed under the MIT License.