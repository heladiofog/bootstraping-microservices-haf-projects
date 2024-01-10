## Some "docker" commands used in chapter 03

### For cleanning docker:
- docker builder prune -a
- docker image prune -a
### For the chapter practise
- docker --version
- docker build -t video-streaming --file Dockerfile .
- docker image list
- docker run -d -p 3000:3000 video-streaming
- docker container list
- docker ps
- docker logs <container_id>
- docker logs b1add411a2d3657a34540e4e6d840c6c54fc13b01b6df7b351a6e49b0c99c469
- docker image rm 7d8323a9836e
- docker ps -a
- docker ps -h
- docker image rm 7d8323a9836e
- docker ps
- docker stop a66927a7d80b
- docker ps
- docker ps -a

## Missing Azure Container Registry steps
TO DO