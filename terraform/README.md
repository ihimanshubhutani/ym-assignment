## Terraform

## Prerequisites

- [terraform](https://www.terraform.io/downloads.html) >=0.14
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- AWS credentials ( ACCESS_ID and SECRET_KEY ) are exported

## Setup

- Clone Repo

```sh
      $  git clone path/to/repo

      $  cd terraform
```

- Change directory to environments/{ENVIRONMENT}, currently development

```sh
     $ cd environments/development
```

- Initialize a working directory

```sh
     $ terraform init
```

- Provision Infrastructure using following command and approve plan using `yes` on prompt

```sh
     $ terraform apply
```

## Outputs

After provisioning infrastructure, it will return following outputs, which will be useful for setting up cluster at local and pushing docker image to ECR

- _CLUSTER_NAME_ : Name of the Kubernetes Cluster, that is being deployed

- _APP_ECR_URL_: Repository URL for AWS ECR

## Components

This Terraform code will setup following components on AWS Cloud

1. VPC

   - Public Subnet ( for Kubernetes API )
   - Private Subnet ( for Worker nodes )
   - Internet Gateway
   - NAT Gateway
   - NAT Gateway and Elastic IP
   - Route Tables
   - Route Tables Associations

2. EKS Cluster

3. ECR
