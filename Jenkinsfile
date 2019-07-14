pipeline {
  agent {
    label 'master'
  }
  triggers { pollSCM('* * * * *') }
  stages {
    stage('copy files') {
      steps {
        echo "============= copy files ============="
        sh '''
          ssh root@192.168.1.8 "cd /home/katrin/Projects/english-coup-client && git pull origin development"
        '''
      }
    }
    stage('dependencies') {
      steps {
        echo "============= dependencies ============="
        sh '''
          ssh root@192.168.1.8 "cd /home/katrin/Projects/english-coup-client && npm i"
        '''
      }
    }
    stage('build') {
      steps {
        echo "============= build ============="
        sh '''
          ssh root@192.168.1.8 "cd /home/katrin/Projects/english-coup-client && npm run-script build"
        '''
      }
    }
    stage('reload server') {
      steps {
        echo "============= reload server ============="
        sh 'ssh root@192.168.1.8 service nginx reload'
      }
    }
  }
}