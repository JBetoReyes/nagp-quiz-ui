pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
          namespace: jenkins
          labels:
            some-label: some-label-value
        spec:
          serviceAccountName: jenkins-agent
          containers:
          - name: bitnami
            image: bitnami/kubectl
            imagePullPolicy: Always
            command:
            - cat
            tty: true
          securityContext:                                                                                                         
            runAsUser: 1000
        '''
    }
  }
  stages {
    stage('Deployment') {
      steps {
        container('bitnami') {
            sh 'kubectl apply -f k8s/service.quiz-ui.yaml'
        }
      }
    }
  }
}