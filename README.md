## Hapi - Docker - Git - CircleCi - AWS ECR - AWS ECS

An example dockerized hapi application that will deploy to amazon ECS whenever the master branch is updated.

### AWS

You'll need to setup Amazon ECR for your docker image, in this sample it's just test-app

You'll then need to setup ECS. 

- A ECS cluster - test-app for this example

You'll need AWS credentials that have access to ECR and ECS

### CircleCi

You'll need to have your project setup with the following environment variables

AWS_ACCESS_KEY_ID
AWS_ACCOUNT_ID
AWS_REGION
AWS_SECRET_ACCESS_KEY

