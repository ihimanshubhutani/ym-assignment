##########################################################################
# ECR, Required for pushing docker image, and get it into cluster
##########################################################################

resource "aws_ecr_repository" "ym_app_ecr" {
  name                 = "ym-app"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}
