# Gilded Rose Assesment
For this assesment I used NestJS to create a microservice. This runs using Node v22.19. I've added more info about how to install Node and NVM at the bottom of this document.

To run the tests:

```sh
npm run test
```

To run the app in dev mode:
```sh
npm run start:dev
```

To run the app in debug mode:
```sh
npm run start:debug
```

To compile the code:
```sh
npm run build
```

---

This is a microservice accepting messages over TCP. Since it's not possible to send HTTP requests to it, I have attached a small script `client.js` which can be used to send messages for demo and testing purposes, which can be used as follows:

```sh
node client.js '[{"name":"Aged Brie","sellIn":10,"quality":25},{"name":"Elixir","sellIn":5,"quality":7}]'
```

The payload always requires following format:

```json
[
    {
        "name": string,
        "sellIn": number (integer),
        "quality": number (integer)
    }
]
```

To install Node on your system:
- MacOS: 
  - Make sure you have Brew installed: 
    
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
  - Then install Node:
    
    ```sh
    brew install node
    ```

  - You can manage your node version using nvm:
    
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
    ```
    
    Then reload your shell

    ```sh
    source ~/.nvm/nvm.sh
    ```

    To check if it's working

    ```sh
    nvm --version
    ```

    After that you can install node versions using

    ```sh
    nvm install 22
    ```

    or load node versions using

    ```sh
    nvm use 22
    ```

- **Linux:**
  - Make sure you have cURL and build tools installed (Debian/Ubuntu):
    
    ```sh
    sudo apt update && sudo apt install -y curl build-essential
    ```

  - Install Node system-wide (optional):
    
    ```sh
    sudo apt install -y nodejs npm
    ```

  - Use **nvm** to manage Node versions:
    
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
    ```

    Reload your shell:

    ```sh
    source ~/.nvm/nvm.sh
    ```

    Check if it's working:

    ```sh
    nvm --version
    ```

    Install Node:

    ```sh
    nvm install 22
    ```

    Switch Node versions:

    ```sh
    nvm use 22
    ```


