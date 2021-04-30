pipeline {
  agent {
    node {
      label 'blog'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install && npm run build'
      }
    }

  }
  environment {
    env = 'prod'
  }
}