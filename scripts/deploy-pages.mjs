import fs from "fs";
import { Client } from "basic-ftp";
import path from "path";

const HOST = "msbross.me";
const USER = "manu@msbross.me";
const PASS = "Br3an1sB3tt3r!";
const APPS = ["newton", "dohler", "traductor", "logisearch"];

async function main() {
  console.log("Deploying intermediate pages...\n");
  const client = new Client();
  client.ftp.verbose = false;
  try {
    await client.access({ host: HOST, user: USER, password: PASS, secure: true });
    console.log("Connected\n");

    for (const app of APPS) {
      const localFile = path.resolve(`/Users/manu/Desktop/MSBrossAI/www/${app}/index.html`);
      const remoteDir = `/www/${app}/`;
      await client.ensureDir(remoteDir);
      await client.uploadFrom(localFile, `${remoteDir}index.html`);
      console.log(`  ✓ ${app}`);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
  } finally {
    client.close();
  }
  console.log("\nDone.");
}

main();
