output "CLUSTER_NAME" {
  value = module.cluster.cluster_name
}

output "APP_ECR_URL" {
  value = module.ecr.ym_app_ecr_url
}
