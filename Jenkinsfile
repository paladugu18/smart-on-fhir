node {
  nodejs(nodeJSInstallationName: 'Current') {
    stage('Clean') {
      cleanWs()
    }
    stage('Checkout') {
      checkout scm
    }
    stage('Install') {
      sh 'npm install'
    }
    stage('Lint') {
      sh 'npm run lint'
    }
    stage('Test') {
      sh 'npm test'
      step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/coverage/cobertura-coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false])
    }
  }
}
