# App Background
* This repository contains the front-end component of a MERN-stack project created for the NUS SGUS Fintech program.
* This App simulates a primitive banking administrative portal.
* The project's MERN-stack utilizes the following:
  * React.js - front-end
  * Express.js & Node.js - back-end
  * mySQL - database
* The entire stack has been deployed online on three separate Apps on Heroku simulating the front-end, back-end and database. You can try it [here](https://devops-cicd-project.herokuapp.com/).

  Note: Apps hosted on Heroku go to sleep after a period of inactivity. Initial loading/queries may take 10-15s as the App re-awakens.
## To run this App locally, run the following commands from your command line:
#### 1. `git clone https://github.com/sjdude/devops-CICD-project.git`
From the project folder directory run the following:
#### 2. `npm install`
#### 3. `npm start`
## Continuous Integration/Continuous Deployment (CI/CD)
* This App uses Github actions to execute a CI/CD pipeline.
* You can view the workflow file [here](https://github.com/sjdude/devops-CICD-project/blob/main/.github/workflows/devops_cicd_project.yml).
* Github repository secrets are used to store security sensitive data like the Heroku API keys.
* On a git push to main, the following will occur in the following order:
  * The main line of the git repository will be updated.
  * App dependencies will be re-installed using npm in this case.
  * The updated App will be deployed on Heroku.

You can view the hosted App [here](https://devops-cicd-project.herokuapp.com/).
