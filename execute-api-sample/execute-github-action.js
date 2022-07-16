import { Octokit, App } from "octokit";
import { config } from 'dotenv';
const configedEnv = config();

const octokit = new Octokit({ auth: configedEnv.parsed.GITHUB_PERSONAL_ACCESS_TOKEN });
const authenticated = await octokit.rest.users.getAuthenticated();
console.log(authenticated.data);