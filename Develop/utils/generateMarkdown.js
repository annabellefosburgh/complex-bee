//Declaring variables to define the choices from the License List
//const licenseBadge = renderLicenseBadge(questions)
//const licenseLink = renderLicenseLink(questions)
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (License === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (License === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (License === "Eclipse") {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (License === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (License === "Perl") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  } else if (License === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(questions) {
  if (questions.License === "Apache") {
    return `[Apache License](https://opensource.org/licenses/Apache-2.0)`
  } else if (questions.License === "MIT") {
    return `[MIT License]https://opensource.org/licenses/MIT)`
  } else if (questions.License === "Boost") {
    return `[Boost 1.0 License](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (questions.License === "Eclipse") {
    return `[Eclipse License](https://opensource.org/licenses/EPL-1.0)`
  } else if (questions.License === "Mozilla") {
    return `[Mozilla License](https://opensource.org/licenses/MPL-2.0)`
  } else if (questions.License === "Perl") {
    return `[Perl License](https://opensource.org/licenses/Artistic-2.0)`
  } else if (questions.License === "ISC") {
    return `[ISC License](https://opensource.org/licenses/ISC)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.Title} ${renderLicenseBadge(data.License)}

  ## Table of Contents
  [1. Description] (#Description)
  [2. Deployed Link] (#Deployed Link)
  [3. Repository] (#Repository)
  [4. Features] (#Features)
  [5. Usage] (#Usage)
  [6. Contributors] (#Contributors)
  [7. License] (#License)
  [8. Sources] (#Sources)

   ## Description
   ${data.Description}

   ## Deployed Link
   Here is a link to the deployed application:
   ${data.appLink}

   ## Repository
   You can access the repository from this link:
   ${data.githubLink}

   ## Features
   ${data.Features}

   ## Usage
   To use this web application:
   ${data.Usage}

   ## Contributors
   ${data.Contributors}

   ## License
   ${data.licenseLink}

   ## Sources
   ${data.Sources}
   `  
;
}

module.exports = generateMarkdown;
//module.exports = renderLicenseBadge;
//module.exports = renderLicenseLink;