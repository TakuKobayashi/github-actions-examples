import { Octokit, App } from "octokit";
import { config } from 'dotenv';
const configedEnv = config();

const octokit = new Octokit({ auth: configedEnv.parsed.GITHUB_PERSONAL_ACCESS_TOKEN });
const owner = "TakuKobayashi"
const repo = "github-actions-examples"
// Github Actions にて保存されているCacheの情報のListを取得する
const cacheListResponse = await octokit.rest.actions.getActionsCacheList({
  owner,
  repo,
});
// こんな感じのデータが返ってくる
/*
{
  total_count: 8,
  actions_caches: [
    {
      id: 29,
      ref: 'refs/heads/unity-deploy',
      key: 'Linux-Unity-Library-StandaloneOSX',
      version: '30cd4fac92...',
      last_accessed_at: '2022-07-16T08:21:37.320000000Z',
      created_at: '2022-07-16T08:21:37.320000000Z',
      size_in_bytes: 601183756
    },
  ]
}
*/
console.log(cacheListResponse.data);
// Github Actions にて保存されているArtifactの情報のListを取得する
const artifactListResponse = await octokit.rest.actions.listArtifactsForRepo({
  owner,
  repo,
});
// こんな感じのデータが返ってくる
/*
{
  total_count: 266,
  artifacts: [
    {
      id: 300389157,
      node_id: 'MDg6QXJ0aWZh...',
      name: 'Build-Results',
      size_in_bytes: 820902689,
      url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/artifacts/300389157',
      archive_download_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/artifacts/300389157/zip',
      expired: false,
      created_at: '2022-07-16T08:23:31Z',
      updated_at: '2022-07-16T08:23:32Z',
      expires_at: '2022-10-14T08:17:24Z',
      workflow_run: {
        id: 2681194941,
        repository_id: 213278662,
        head_repository_id: 213278662,
        head_branch: 'unity-deploy',
        head_sha: 'fbded0566a1ed0255b81.........'
      }
    },
  ]
}
*/
console.log(artifactListResponse.data);
/*
Artifactをダウンロードするときは以下のような感じ
import fs from "fs"
const downloadArtifactResponse = await octokit.rest.actions.downloadArtifact({
  owner,
  repo,
  artifact_id: 300388539,
  archive_format: "zip"
})
fs.appendFileSync("output.zip", Buffer.from(downloadArtifactResponse.data))
*/

// Github Actions にて保存されているSecretsの情報のListを取得する
const secretsListResponse = await octokit.rest.actions.listRepoSecrets({
  owner,
  repo,
});
// こんな感じのデータが返ってくる
/*
{
  total_count: 24,
  secrets: [
    {
      name: 'ACTIONS_DEPLOY_KEY',
      created_at: '2019-10-08T20:31:46Z',
      updated_at: '2019-10-08T20:31:46Z'
    },
  ],
}
*/
console.log(secretsListResponse.data);

// Github Actions にて保存されているWorkflowsの情報のListを取得する
const workflowsListResponse = await octokit.rest.actions.listRepoWorkflows({
  owner,
  repo,
});
// こんな感じのデータが返ってくる
/*
  total_count: 19,
  workflows: [
    {
      id: 265876,
      node_id: '.....',
      name: 'Android Release Build',
      path: '.github/workflows/android-release-build.yml',
      state: 'active',
      created_at: '2020-01-12T12:26:10.000+09:00',
      updated_at: '2021-10-25T04:08:38.000+09:00',
      url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/workflows/265876',
      html_url: 'https://github.com/TakuKobayashi/github-actions-examples/blob/master/.github/workflows/android-release-build.yml',
      badge_url: 'https://github.com/TakuKobayashi/github-actions-examples/workflows/Android%20Release%20Build/badge.svg'
    },
  ],
}
*/
console.log(workflowsListResponse.data);