## Terraform

## Prerequisites

- terraform >=0.14
- AWS credentials ( ACCESS_ID and SECRET_KEY ) are exported

## Setup 

- Change directory to environments/{ENVIRONMENT}, currently development

```
  cd environments/development
```

- Initialize a working directory

```
  terraform init
```

- Provision Infrastructure using following command and approve plan using `yes` on prompt

```
  terraform apply 
```
