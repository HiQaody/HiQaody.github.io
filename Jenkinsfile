pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'emilib:latest'
        CONTAINER_NAME = 'emilib-container'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove the existing container if it exists
                    sh 'docker rm -f ${CONTAINER_NAME} || true'
                    // Run the container with a specific name
                    sh 'docker run -d --name ${CONTAINER_NAME} -p 3001:3001 ${DOCKER_IMAGE}'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
