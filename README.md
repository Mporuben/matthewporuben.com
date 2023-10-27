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

3. generate static project
    ```bash
    docker compose run cli npm run gen --rm
    ```

rm -rf /tmp/nitro/worker-*
