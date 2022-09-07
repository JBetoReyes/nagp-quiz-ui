pipeline {
  agent {
    kubernetes {
      yamlFile 'k8s/pod.jenkins-agent.yaml'
    }
  }
  stages {
    stage('test') {
      steps {
        container('node') {
            sh 'CI=true npm run test'
        }
      }
    }
    stage('Deployment') {
      steps {
        container('bitnami') {
            sh 'kubectl apply -f k8s/service.quiz-ui.yaml'
            sh 'kubectl apply -f k8s/deployment.quiz-ui.yaml'
        }
      }
    }
  }
}