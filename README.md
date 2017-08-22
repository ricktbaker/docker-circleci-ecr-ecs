## Hapi - Docker - Git - CircleCi - AWS ECR - AWS ECS

An example dockerized hapi "Hello World" application that will deploy to amazon ECS using CircleCi whenever the master branch is updated.

### AWS

You'll need to setup Amazon ECR for your docker image, in this sample it's just test-app, a variable within .circleci/config.yml

You'll then need to setup ECS. 

- A ECS cluster - test-app for this example, variable within .circleci/config.yml
- A Task Definition - test-app for this example, variable within .circleci/config.yml.   You can use the test-app-task.json file as a template to configure the task via json.
- A Service within the cluster - app-service for this example, variable within .circleci/config.yml

See the [EC2 Container Service
Resources Page](https://aws.amazon.com/ecs/) if you need more help on the above.

You'll need AWS credentials for the step below that have access to ECR and ECS.

### CircleCi

You'll need to have your project setup with the following environment variables

AWS_ACCESS_KEY_ID  
AWS_ACCOUNT_ID   
AWS_REGION  
AWS_SECRET_ACCESS_KEY  

### Deployment via CircleCi

Anytime you push to master branch, CircleCI will go through it's build and then deploy to AWS.  The branch for deployment
is specified within the .circleci/config.yml file.   

Example app should respond on port 80 of your ECS instance/load balancer with "Hello world".

### Deployment via custom bash script

If you don't want to use CircleCi you can deploy with the deploy.sh script.    There is a section of variables that you can customize for your needs.   The only one you'll need to modify for this example if you've stuck with test-app for everything is just modify the AWS_ACCOUNT_ID variable.

Credentials should be saved locally so they do not need to be in your repo, see more about this [here](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
and [here](http://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html)

Just pass it a tag that you want your dockerfile tagged with and it will handle the push to ECR and deployment to ECS.

`./deploy.sh production`

