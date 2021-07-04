##########################################################################
# Default terraform backend configurations to store state at local
##########################################################################

terraform {
  backend "local" {}
}

##########################################################################
# Uncomment below code block and comment above code block to store
# terraform state remotely, ie. on Terraform Cloud, this will require 
# terraform account.
##########################################################################

# terraform {
#   backend "remote" {
#     organization = "ym-task"
#     workspaces {
#       name = "terraform-ym-task"
#     }
#   }
# }
