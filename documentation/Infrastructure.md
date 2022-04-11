
# CI/CD Circle-CI
CircleCi workflow is triggered on new commits on this repo (main branch). After the commit, the frontend and backend share a similar workflow:
1. Install App
2. Build App
3. Test App
4. Deploy App to Elastic Beanstalk
for detailed information see Process Flow below
   
The configuration is stored under `circleci\config.yml`

## Process-Flow
The Build and Deployment is automated using CircleCi. See the following process flow:

![CICD](diagrams/deployment-pipeline.png)


# Architecture
Two environments frontend/backend are deployed on AWS Elastic Beanstalk. Files are stored on AWS S3 and persistent Data is stored in a Postgres DB.
Each App is hosted in an AWS Instance. See Architecture:

![Architecture](diagrams/architecture.png)