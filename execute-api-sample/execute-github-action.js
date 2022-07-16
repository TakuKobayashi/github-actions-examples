import { Octokit, App } from "octokit";
import { config } from 'dotenv';
const configedEnv = config();

const octokit = new Octokit({ auth: configedEnv.parsed.GITHUB_PERSONAL_ACCESS_TOKEN });
const response = await octokit.rest.actions.getActionsCacheList({
  owner: "TakuKobayashi",
  repo: "github-actions-examples",
});
console.log(response.data);