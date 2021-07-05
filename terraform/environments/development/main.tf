module "vpc" {
  source              = "../../modules/vpc"
  environment         = var.environment
  region              = var.region
  availability_zone-1 = var.availability_zone-1
  availability_zone-2 = var.availability_zone-2
  application         = var.application
}
module "ecr" {
  source = "../../modules/ecr"
}

module "cluster" {
  source              = "../../modules/cluster"
  environment         = var.environment
  private_subnet-1_id = module.vpc.private_subnet-1_id
  public_subnet-1_id  = module.vpc.public_subnet-1_id
  vpc_id              = module.vpc.vpc_id
  application         = var.application
}
