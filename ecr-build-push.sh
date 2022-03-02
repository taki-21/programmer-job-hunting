aws ecr get-login-password | docker login --username AWS --password-stdin https://766993824527.dkr.ecr.ap-northeast-1.amazonaws.com

docker build -t programmer_job_hunting -f server/Dockerfile.prod ./server --build-arg RAILS_MASTER_KEY=d73339ac47315bc388bfaddb172f21df
docker tag programmer_job_hunting:latest 766993824527.dkr.ecr.ap-northeast-1.amazonaws.com/programmer_job_hunting:latest
docker push 766993824527.dkr.ecr.ap-northeast-1.amazonaws.com/programmer_job_hunting:latest

docker build -t nginx -f nginx/Dockerfile .
docker tag nginx:latest 766993824527.dkr.ecr.ap-northeast-1.amazonaws.com/nginx:latest
docker push 766993824527.dkr.ecr.ap-northeast-1.amazonaws.com/nginx:latest
