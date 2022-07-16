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