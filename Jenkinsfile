pipeline {
  agent any
  parameters {
    string(name: 'REPONAME', defaultValue: 'INSIRA_O_NOME_DO_REPO', description: 'AWS ECR Repository Name')
    string(name: 'ECR', defaultValue: 'INSIRA_A_URI_DO_REPO', description: 'AWS ECR Registry URI')
    string(name: 'REGION', defaultValue: 'REGIAO_DOS_RECURSOS', description: 'AWS Region code')
    string(name: 'CLUSTER', defaultValue: 'NOME_DO_CLUSTER', description: 'AWS ECS Cluster name')
    string(name: 'TASK', defaultValue: 'NOME_DA_TASK_DEFINITION', description: 'AWS ECS Task name')
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
