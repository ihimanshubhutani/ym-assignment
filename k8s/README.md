# Kubernetes 

## YM Assignment

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/ubuntu/)

- [Helm 3](https://helm.sh/docs/intro/install/)

- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

> It is recommended to run terraform code first and provision VPC, Kubernetes Cluster and ECR to get `CLUSTER_NAME` and `APP_ECR_URL`

## Setup and Deployment


1. Clone Repo

``` sh
     $ git clone path/to/repo

     $ cd k8s
```

2. Build Docker Image

```sh
     $ docker build -t $APP_ECR_URL:$TAG ../app/
```

```sh
    $ aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $APP_ECR_URL
```

3. Push Docker Image to ECR

  ```sh 
     $ docker push $APP_ECR_URL:$TAG
  ```

4. To run redis cluster on EKS, run following command

```sh
    $ helm repo add helm repo add bitnami https://charts.bitnami.com/bitnami

    $ helm upgrade --install redis bitnami/redis --set replica.replicaCount=$REPLICA_COUNT --set auth.password=$REDIS_PASSWORD
```

5. Deploy Secrets 

> Currently`secrets.example.yaml` has default values, replace this variables with your own secrets variables, and rename it as `secrets.yaml`

```sh 
    $ kubectl apply -f secrets.yaml
```

6. To deploy YM URL Shortner application helm charts on EKS, run following command

```sh
     $ helm upgrade --install ym-app ./charts
```

7. Port Forward and test application to local machine using following command

```sh
     $ kubectl port-forward svc/ym-app-service 3000:3000 
```
