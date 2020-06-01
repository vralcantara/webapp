pipeline {
  agent any
  parameters {
    string(name: 'REPONAME', defaultValue: 'maua/webapp', description: 'AWS ECR Repository Name')
    string(name: 'ECR', defaultValue: '735615090313.dkr.ecr.us-east-2.amazonaws.com/maua/webapp', description: 'AWS ECR Registry URI')
    string(name: 'REGION', defaultValue: 'us-east-2', description: 'AWS Region code')
    string(name: 'CLUSTER', defaultValue: 'demo-cluster', description: 'AWS ECS Cluster name')
    string(name: 'TASK', defaultValue: 'WebApp', description: 'AWS ECS Task name')
  }
  stages {
    stage('BuildStage') {
      steps {
        sh "./build.sh -b ${env.BUILD_ID} -n ${params.REPONAME} -e ${params.ECR} -r ${params.REGION}"
      }
    }
    stage('DeployStage') {
      steps {
        sh "./deploy.sh -b ${env.BUILD_ID} -e ${params.ECR} -c ${params.CLUSTER} -t ${params.TASK}"
      }
    }
    stage('TestStage') {
      steps {
        sh "./test.sh"
      }
    }
  }
}
