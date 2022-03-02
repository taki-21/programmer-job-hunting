aws ecs describe-services --cluster programmer_job_hunting-cluster --services programmer_job_hunting-service

config=`aws ecs describe-services --cluster programmer_job_hunting-cluster --services programmer_job_hunting-service | jq ".services[0].networkConfiguration"`

subnets=`echo $config | jq -r '.awsvpcConfiguration.subnets|join(",")'`
securityGroups=`echo $config | jq -r '.awsvpcConfiguration.securityGroups|join(",")'`
assignPublicIp=`echo $config | jq -r '.awsvpcConfiguration.assignPublicIp'`

aws ecs run-task \
--cluster programmer_job_hunting-cluster \
--task-definition programmer_job_hunting \
--network-configuration "awsvpcConfiguration={subnets=[${subnets}],securityGroups=[${securityGroups}],assignPublicIp=${assignPublicIp}}" \
--overrides file://ecs_rails/db_create/run_task_db_create.json \
--launch-type FARGATE

aws ecs run-task \
--cluster programmer_job_hunting-cluster \
--task-definition programmer_job_hunting \
--network-configuration "awsvpcConfiguration={subnets=[${subnets}],securityGroups=[${securityGroups}],assignPublicIp=${assignPublicIp}}" \
--overrides file://ecs_rails/db_create/run_task_db_migrate.json \
--launch-type FARGATE

aws ecs run-task \
--cluster programmer_job_hunting-cluster \
--task-definition programmer_job_hunting \
--network-configuration "awsvpcConfiguration={subnets=[${subnets}],securityGroups=[${securityGroups}],assignPublicIp=${assignPublicIp}}" \
--overrides file://ecs_rails/db_create/run_task_db_seed.json \
--launch-type FARGATE
