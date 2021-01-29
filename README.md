## Running

Before running the web browser, please ensure you have **latest** [`Node.js`](https://nodejs.org/en/) and [`Yarn`](https://classic.yarnpkg.com/en/docs/install/#windows-stable) installed on your machine.

When running on Windows, make sure you have build tools installed. You can install them by running this command as **administrator**:

```bash
$ npm i -g windows-build-tools
```

Firstly, run this command to install all needed dependencies. If you have encountered any problems, please report it.

```bash
$ yarn
```

After a successful installation, the native modules need to be rebuilt using Electron headers. To do this, run:

```bash
$ npm run rebuild
```

The given command below will run the web browser in the development mode.

```bash
$ npm run dev
```

# Documentation

Guides and the API reference are located in [`docs`](docs) directory.

# License

All rights are reserved to the owner of the product - Giulio Di Zio. 
Sharing the source code in any way or using the existing code in this repository for personal purposes is not permitted.