# IoT Subscriber API with Google Cloud

In the software architecture, the subscriber is part of the publish – subscribe project pattern, which is a message pattern in which message senders, called publishers, do not program messages to be sent directly to specific recipients, called subscribers, but categorize messages. messages published in classes without knowing which subscribers, if any, may be. Likewise, subscribers express interest in one or more classes and receive only messages of interest, without knowing which publishers, if any, exist.

## Setup

To execute the project, it will be necessary to install the dependencies by typing the following command in the terminal:

```bash
yarn install
```

First of all, you must have the service account credentials to authenticate the Google Cloud Pub / Sub service via the API panel on the Google Cloud Platform. Then you need to paste these credentials, in JSON format, into the file **GoogleCredentials.json**, which is at the root of the project.

Finally, to execute the project it is necessary to transpile the Typescript code to JavaScript. To do this, type the following command in the terminal:

```bash
yarn build
```

### Use

To execute the project already transpiled into JavaScript, type the following command in the terminal:

```bash
yarn start
```


## License

MIT
