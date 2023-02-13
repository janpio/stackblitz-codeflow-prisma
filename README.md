# Prisma + Stackblitz Codeflow playground

This repository is a playground for Prisma on Stackblitz Codeflow.

## Note

- Currently this needs the "CORS Unblock" extension installed to work: https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/
- To successfully run a Data Proxy Client query, you also need to manipulate the HTTP response to the preflight `OPTIONS` request to return a HTTP status code 200 somehow (I used Charles Web Proxy, but that is super fiddly and hard to describe)

## Useful commands and actions to test:

1. `npm install` to install dependences (if Codeflow did not run it automatically on startup)
2. Rename `.env.example` to `.env` and fill in useful values
    - PostgreSQL database for `DIRECT_URL` most easily from https://db-provision.prisma-adp.vercel.app/
    - Data Proxy connection string for `DATAPROXY_URL` most easily via https://accelerate.prisma.io/projects
3. Run `npx prisma db push` to put the schema on the PostgreSQL database (via `DIRECT_URL`)
4. `npx prisma generate --data-proxy` to generate the needed Data Proxy Client
5. `node script.ts` to run the script