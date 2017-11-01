# Social Notifier

> A web app that notifies you when new item (tweet, post, photo, video) is posted on social media.

### Social services supported:
 - Instagram
 - YouTube
 - VK
 - Twitter

## Setup

1. Add `config/config.js` file that looks like this:

  ```js
    module.exports = {
      api_dev_host: 'http://127.0.0.1:8000',
      api_prod_host: 'http://127.0.0.1:8000'
    }
  ```

2. Install dependencies

  ```bash
  $ yarn install
  ```

## Development

Serve with hot reload at `http://localhost:8080`

```bash
$ yarn run dev
```

## Build for production

Build for production with minification

```bash
$ yarn run build
```

Build for production and view the bundle analyzer report

``` bash
yarn run build --report
```

## LICENSE

[MIT](https://github.com/frenchbread/sn-app/blob/master/LICENSE)
