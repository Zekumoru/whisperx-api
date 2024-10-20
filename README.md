# BreviaX API: An Audio Transcription and Summarization API

BreviaX is a NodeJS backend API which processes audio files by transcribing them using WhisperX which is run locally and then generating a concise summary using OpenAI's GPT-4o mini model.

> [WARNING]: This project is in its prototype stage. The current code will be completely replaced in the future with a new design and structure. This prototype is intended to demonstrate the potential of the API and does not reflect the final implementation.

## Running this app

1. Clone this repository then create a `.env` with the contents below replacing the brackets with your appropriate API keys:

```env
HUGGING_FACE_TOKEN=<HF_TOKEN>
OPENAI_API_KEY=<OPENAI_KEY>
```

2. And then run the following commands to install the necessary packages and finally start the app:

```cmd
yarn
yarn start
```

3. To make the server visible in the Internet, forward the port using the `PORTS` tab in VSCode which is next to the `TERMINAL` tab. Click on the `Forward a Port` button, type the port, and finally set the forwarded's address `Visibility` to public.

## API url

The endpoint to upload the audio file for processing is `/api/upload`. For example, if you used VSCode to forward the port, you'll be given a link such as `https://xxxx.euw.devtunnels.ms/`, upload the file in this endpoint `https://4h2j998b-3000.euw.devtunnels.ms/api/upload` using `POST` method.
