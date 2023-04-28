// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}%20-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return '![License Link](https://opensource.org/licenses/${license})'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '## License - ${license}'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  # Project title - ${data.projectTitle} 
  # Description - \n* ${data.description} \n
  ## Table of Contents
  ## Installation - \n* ${data.installation} \n
  ## Usage - \n* ${data.usage} \n
  ## Contributions - \n* ${data.contribution} \n
  ## Tests - \n* ${data.tests} \n
  ## Questions - \n* My GitHub can be found at - github.com/${data.githubUsername} \n* Send me an email at - ${data.emailAddress} \n

`;
}

module.exports = generateMarkdown;
