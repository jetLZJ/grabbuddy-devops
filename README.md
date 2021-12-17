# Devops show and tell for Grab-Buddy

## Objective
- To auto trigger CI when project is updated and push project to GCloud App Engine / Cloud Run for deployment
- App Engine deployment is at [App Engine](https://fintech-devops.as.r.appspot.com/).
- Cloud Run Deployment is at [Cloud Run](https://grabbuddy-devops-zd3frsi5vq-as.a.run.app)

## The Project

This project is a fork from [Batch 14 Grab Buddy](https://github.com/williamng95/grabbuddy/), group 4 NUS Money app frontend section, which is based off [auth0=react](https://github.com/auth0/auth0-react). The project utilise [create-react-app](https://github.com/facebook/create-react-app) and therefore already have some codebase for CI and docker implementation. I have work on top of it in order to implement git actions workflow with the project.

## Demo

- As the build takes some time, I recommend do a trigger and I will walk through the show and tell before coming back to see the result of the deployment.
- To trigger the git actions workflow, edit any files within src/components. ( I recommend editing the [homeHero.js](https://github.com/jetLZJ/grabbuddy-devops/blob/main/src/components/HomeHero.js))

## SETUP

### Project Setup
- Before setting up project, please make sure you have [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed in your environment.
- After pulling the project, run the following code command in sequence in your working directory to build the project.

  - Install node package dependencies
```bash
npm install
```

  - Build project
```bash
npm run build
```

### GCloud Setup
- After settiing up the project, go into working directory and do the following command 

```bash
gcloud init
```
- Follow the init process to setup. *Note: requires GCloud CLI to be installed, which can be found here [CloudSDK](https://cloud.google.com/sdk/docs/install)*
- [CloudSDK](https://cloud.google.com/sdk/docs/install) installation can be obmitted if you are using cloud shell from your [google console](console.google.com)

   ![image](https://user-images.githubusercontent.com/35041975/146368882-0b5cb958-e3e5-46c6-8bdd-a7efce2ff778.png)


- After init process, run the following command to deploy to gcloud app engine.

```bash
gcloud app deploy
```
- Prior to deploying app, please setup `app.yaml` as that is required for app engine to be configured. My config for `app.yaml` can be found at [app.yml](https://github.com/jetLZJ/grabbuddy-devops/blob/main/app.yaml)
- Also, gcloud integration with git actions requires google cloud service account to be setup, which can be setup under the [IAM service](https://console.cloud.google.com/iam-admin/) in your google cloud console.
 ![image](https://user-images.githubusercontent.com/35041975/146468349-969c06a1-e1da-4a86-b0d2-ad4fa00eb782.png)


### Git Actions

 - Workflow file can be found at [grab-buddy-gae.yml](https://github.com/jetLZJ/grabbuddy-devops/blob/main/.github/workflows/grab-buddy-gae.yml)
 - Based off the template work flow found at [node.js.yml](https://github.com/actions/starter-workflows/blob/00db25fc1e0c3432105036075404c4429dfda403/ci/node.js.yml)
 - Credentials are stored at Git Secrets
   ![image](https://user-images.githubusercontent.com/35041975/146370591-85664523-45e1-457b-835a-4e4f9b1f5865.png)

## Difficulties faced
 - Configuring workflow file to integrate with Google App Engine SDK
 - Passing environment values to deployed APP engine environment (still figuring, current implementation for auth0 credential is not secure)
 
 ## Trying out
 - ~~Setup up a workflow to auto containerise code upon repo updates
  - ~~*using workflow template from [docker-image workflow](https://github.com/actions/starter-workflows/blob/00db25fc1e0c3432105036075404c4429dfda403/ci/docker-image.yml)*
  - Container can build successfully but have trouble implementing deployment to cloud run after that.
  - Using [Cloud Build](https://cloud.google.com/build), am able to pull projects from git and deploy on [Cloud Run](https://cloud.google.com/run)

## Resources
 - Following resources are where I refer to get google cloud integration working
   -  [Google GitHub Actions](https://github.com/google-github-actions)
   -  [deploying-serverless-platforms-github-actions](https://cloud.google.com/blog/topics/developers-practitioners/deploying-serverless-platforms-github-actions)
