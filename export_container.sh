if [ -z "$RSYNC_CONN" ]; then
  echo "Please set the RSYNC_CONN environment variable"
  exit 1
fi

if [ -z "$RSYNC_PORT" ]; then
  RSYNC_PORT=22
fi

if [ ! -f export_container.sh ]; then
  echo "Please run this script from the root directory"
  exit 1
fi

sudo docker rmi portfolio-backend

sudo docker compose build

# Check for errors
if [ $? -ne 0 ]; then
  echo "Docker compose build failed"
  exit 1
fi

sudo docker commit portfolio-backend-1

sudo docker save portfolio-backend > portfolio-backend.tar

rsync -e "ssh -p $RSYNC_PORT" --progress portfolio-backend.tar docker-compose.yml load_container.sh $RSYNC_CONN