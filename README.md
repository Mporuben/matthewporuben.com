# Matthew Poruben

> [matthewporuben.com](http://www.matthewporuben.com)

## Build Setup

1. install dependencies
    ```bash
    docker compose run cli npm i --rm
    ```

2. serve with hot reload at localhost:3000
    ```bash
    docker compose up dev
    ```

Generate static project
```bash
docker compose run cli npm run gen --rm
```


Fix docker nitro worker error
```
rm -rf /tmp/nitro/worker-*
```


