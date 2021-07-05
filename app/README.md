## YM Assignment

## Prerequisites

- npm >=6.14.5
- node >=12.16.3

## Setup and Installation

### Setup

- Get clone of this repo

- Set environment variables

## Environment

Create .env file and add the following environment variables in it.

| **ENVIRONMENT VARIABLES** |                                               |
| ------------------------- | --------------------------------------------- |
| _PORT_                    | Port to run application on, default to `3000` |
| _REDIS_PORT_              | Redis Port, default to `6378`                 |
| _REDIS_HOST_              | Redis Host, default to `localhost`.           |
| _REDIS_PASSWORD_          | Redis Password, default to `undefined`.       |

- ### Install required dependencies

```sh
   yarn install
```

- ### Build

```sh
  yarn build
```

- ### Start Development Server

```sh
  yarn dev
```

- ### Start Production Server

```sh
  yarn start
```

### REST APIs

- Generate Shortned URL

### Request

`POST /`

```sh
curl -X POST \
  http://localhost:3000/ \
  -H 'content-type: application/json' \
  -d '{
"url" : "https://www.google.com"
}'
```

### Response

```sh
 { "shortned_url":"http://localhost:3000/50rTT_h3w" }
```

- Get Orignal URL

### Request

`GET /:shortenedUrlCode`

```sh
  curl -X GET \
  http://localhost:3000/50rTT_h3w
```

### Response

```sh
  Found. Redirecting to https://www.google.com
```
