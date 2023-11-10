# Node

<p align="center">
<a href="https://reactjs.org/"><img src="NestJs-Logo.png"  width="200" height="219"></a>
<a href="https://docs.docker.com/compose/"><img src="docker-compose-logo.png"  width="200" height="219"></a>

</p>

#### Steps

##### Step 1

Copy - .env.docker.example file to .env.docker.dev Modify - Contents of .env.docker.dev file:

```sh
PROJECT_NAME=Test
NODE_VERSION=18
NODE_PORT=3000
DIRECTORY_PATH=/usr/src/app
```

##### Step 2

```sh
docker-compose --env-file ./.env.docker.dev up
```

##### Step 3

## Accessing any container

```sh
docker exec -it <container_name> bash
```

## Configure Ports details

| Service | Default Port |
| ------ | ------ |
| NODE_PORT| 3000 |

## Other helpful command lines

# Remove containers

```
docker rm -f <container-name>
```

# Remove Docker Image

```
docker rmi -f <container-name>
```

## License

<p align="center">
<a href="https://www.codiant.com/"><img src="https://www.codiant.com/assets/images/codiant-logo.svg" width="400"></a>
</p>
