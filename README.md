Run `npm install` to install dependencies

Run `npm start` to start for dev development

---

You need .env file to run the app.

File `.env.sample` contains all necessary env variables.

Blockchain explorers (i.e. backend) can run on public keys provided in this file, although you will quickly hit an API limit and will have to wait for it to cool down.

You will however need to change `VITE_DYNAMIC_SDK_KEY` env var for Dynamic SDK (i.e. authorization).
