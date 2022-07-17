import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: process.env.PERSONAL_ACCESS_TOKEN });
const owner = 'TakuKobayashi';
const repo = 'github-actions-examples';

export async function loadActionsCacheList(): Promise<any> {
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
  return octokit.rest.actions.getActionsCacheList({
    owner,
    repo,
  });
}

export async function loadArtifactList(): Promise<any> {
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
  // Github Actions にて保存されているArtifactの情報のListを取得する
  return octokit.rest.actions.listArtifactsForRepo({
    owner,
    repo,
  });
}

export async function loadSecretList(): Promise<any> {
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
  // Github Actions にて保存されているSecretsの情報のListを取得する
  return octokit.rest.actions.listRepoSecrets({
    owner,
    repo,
  });
}

export async function loadWorkflowList(): Promise<any> {
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
  // Github Actions にて保存されているWorkflowsの情報のListを取得する
  return octokit.rest.actions.listRepoWorkflows({
    owner,
    repo,
  });
}

export async function loadRunnerApplicationList(): Promise<any> {
  // こんな感じのデータが返ってくる
  /*
[
  {
    os: 'linux',
    architecture: 'x64',
    download_url: 'https://github.com/actions/runner/releases/download/v2.294.0/actions-runner-linux-x64-2.294.0.tar.gz',
    filename: 'actions-runner-linux-x64-2.294.0.tar.gz',
    sha256_checksum: 'a19a09f4eda5716e5d48ba86b6b78fc014880c5619b9dba4a059eaf65e131780'
  },
]
*/
  // Github Actions が対応しているOSなどの環境のListを取得する
  return octokit.rest.actions.listRunnerApplicationsForRepo({
    owner,
    repo,
  });
}

export async function loadSelfHostedRunnerList(): Promise<any> {
  // Github Actions が対応しているOSなどの環境のListを取得する
  return octokit.rest.actions.listSelfHostedRunnersForRepo({
    owner,
    repo,
  });
}

export async function loadListWorkflowRunList(): Promise<any> {
  // こんな感じのデータが返ってくる
  /*
{
  total_count: 617,
  workflow_runs: [
    {
      id: 2681210114,
      name: 'Firebase Hostings Deploy',
      node_id: '...',
      head_branch: 'firebase-deploy',
      head_sha: 'd4fa42dbcea742b148747687eb5d553fcaf516ac',
      path: '.github/workflows/firebase-hostings-deploy.yml',
      run_number: 43,
      event: 'push',
      status: 'completed',
      conclusion: 'success',
      workflow_id: 264861,
      check_suite_id: 7384130216,
      check_suite_node_id: '...',
      url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/runs/2681210114',
      html_url: 'https://github.com/TakuKobayashi/github-actions-examples/actions/runs/2681210114',
      pull_requests: [],
      created_at: '2022-07-16T08:17:47Z',
      updated_at: '2022-07-16T08:21:43Z',
      actor: {
        login: 'TakuKobayashi',
        id: 2100980,
        node_id: '...',
        avatar_url: 'https://avatars.githubusercontent.com/u/2100980?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/TakuKobayashi',
        html_url: 'https://github.com/TakuKobayashi',
        followers_url: 'https://api.github.com/users/TakuKobayashi/followers',
        following_url: 'https://api.github.com/users/TakuKobayashi/following{/other_user}',
        gists_url: 'https://api.github.com/users/TakuKobayashi/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/TakuKobayashi/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/TakuKobayashi/subscriptions',
        organizations_url: 'https://api.github.com/users/TakuKobayashi/orgs',
        repos_url: 'https://api.github.com/users/TakuKobayashi/repos',
        events_url: 'https://api.github.com/users/TakuKobayashi/events{/privacy}',
        received_events_url: 'https://api.github.com/users/TakuKobayashi/received_events',
        type: 'User',
        site_admin: false
      },
      run_attempt: 1,
      referenced_workflows: [],
      run_started_at: '2022-07-16T08:17:47Z',
      triggering_actor: {
        login: 'TakuKobayashi',
        id: 2100980,
        node_id: '...',
        avatar_url: 'https://avatars.githubusercontent.com/u/2100980?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/TakuKobayashi',
        html_url: 'https://github.com/TakuKobayashi',
        followers_url: 'https://api.github.com/users/TakuKobayashi/followers',
        following_url: 'https://api.github.com/users/TakuKobayashi/following{/other_user}',
        gists_url: 'https://api.github.com/users/TakuKobayashi/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/TakuKobayashi/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/TakuKobayashi/subscriptions',
        organizations_url: 'https://api.github.com/users/TakuKobayashi/orgs',
        repos_url: 'https://api.github.com/users/TakuKobayashi/repos',
        events_url: 'https://api.github.com/users/TakuKobayashi/events{/privacy}',
        received_events_url: 'https://api.github.com/users/TakuKobayashi/received_events',
        type: 'User',
        site_admin: false
      },
      jobs_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/runs/2681210114/jobs',
      logs_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/runs/2681210114/logs',
      check_suite_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/check-suites/7384130216',
      artifacts_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/runs/2681210114/artifacts',
      cancel_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/runs/2681210114/cancel',
      rerun_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/runs/2681210114/rerun',
      previous_attempt_url: null,
      workflow_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/actions/workflows/264861',
      head_commit: {
        id: 'b5d7ad2b4821321b9ce5be3bed1d404bf664eb01',
        tree_id: '0a35d41efd0b1571129821d0f0f36318acd458e4',
        message: 'remove check',
        timestamp: '2022-06-09T12:25:35Z',
        author: { name: 'TakuKobayashi', email: '...@...' },
        committer: { name: 'TakuKobayashi', email: '...@...' }
      },
      repository: {
        id: 213278662,
        node_id: '....',
        name: 'github-actions-examples',
        full_name: 'TakuKobayashi/github-actions-examples',
        private: false,
        owner: {
          login: 'TakuKobayashi',
          id: 2100980,
          node_id: '...',
          avatar_url: 'https://avatars.githubusercontent.com/u/2100980?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/TakuKobayashi',
          html_url: 'https://github.com/TakuKobayashi',
          followers_url: 'https://api.github.com/users/TakuKobayashi/followers',
          following_url: 'https://api.github.com/users/TakuKobayashi/following{/other_user}',
          gists_url: 'https://api.github.com/users/TakuKobayashi/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/TakuKobayashi/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/TakuKobayashi/subscriptions',
          organizations_url: 'https://api.github.com/users/TakuKobayashi/orgs',
          repos_url: 'https://api.github.com/users/TakuKobayashi/repos',
          events_url: 'https://api.github.com/users/TakuKobayashi/events{/privacy}',
          received_events_url: 'https://api.github.com/users/TakuKobayashi/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/TakuKobayashi/github-actions-examples',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples',
        forks_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/forks',
        keys_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/teams',
        hooks_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/hooks',
        issue_events_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/issues/events{/number}',
        events_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/events',
        assignees_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/assignees{/user}',
        branches_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/branches{/branch}',
        tags_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/tags',
        blobs_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/languages',
        stargazers_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/stargazers',
        contributors_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/contributors',
        subscribers_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/subscribers',
        subscription_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/subscription',
        commits_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/contents/{+path}',
        compare_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/merges',
        archive_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/downloads',
        issues_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/issues{/number}',
        pulls_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/labels{/name}',
        releases_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/releases{/id}',
        deployments_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/deployments'
      },
      head_repository: {
        id: 213278662,
        node_id: '....',
        name: 'github-actions-examples',
        full_name: 'TakuKobayashi/github-actions-examples',
        private: false,
        owner: {
          login: 'TakuKobayashi',
          id: 2100980,
          node_id: '...',
          avatar_url: 'https://avatars.githubusercontent.com/u/2100980?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/TakuKobayashi',
          html_url: 'https://github.com/TakuKobayashi',
          followers_url: 'https://api.github.com/users/TakuKobayashi/followers',
          following_url: 'https://api.github.com/users/TakuKobayashi/following{/other_user}',
          gists_url: 'https://api.github.com/users/TakuKobayashi/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/TakuKobayashi/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/TakuKobayashi/subscriptions',
          organizations_url: 'https://api.github.com/users/TakuKobayashi/orgs',
          repos_url: 'https://api.github.com/users/TakuKobayashi/repos',
          events_url: 'https://api.github.com/users/TakuKobayashi/events{/privacy}',
          received_events_url: 'https://api.github.com/users/TakuKobayashi/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/TakuKobayashi/github-actions-examples',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples',
        forks_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/forks',
        keys_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/teams',
        hooks_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/hooks',
        issue_events_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/issues/events{/number}',
        events_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/events',
        assignees_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/assignees{/user}',
        branches_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/branches{/branch}',
        tags_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/tags',
        blobs_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/languages',
        stargazers_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/stargazers',
        contributors_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/contributors',
        subscribers_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/subscribers',
        subscription_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/subscription',
        commits_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/contents/{+path}',
        compare_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/merges',
        archive_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/downloads',
        issues_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/issues{/number}',
        pulls_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/labels{/name}',
        releases_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/releases{/id}',
        deployments_url: 'https://api.github.com/repos/TakuKobayashi/github-actions-examples/deployments'
      }
    },
  ]
}
*/
  // Github ActionsでWorkflowが動いたもののListの情報を取得する
  return octokit.rest.actions.listWorkflowRunsForRepo({
    owner,
    repo,
  });
}

export async function reRunWorkflow(run_id: number): Promise<any> {
  // 既に存在するGithub ActionsのWorkflowを再度実行するようにする
  // アプリの配信などのために使用。直前に実行したものが失敗していなかったら実行するのが良さそう。
  return octokit.rest.actions.reRunWorkflow({
    owner,
    repo,
    run_id,
  });
}

export async function createWorkflowDispatch(workflow_id: number, target_branch: string): Promise<any> {
  // ymlファイルに on: workflow_dispatch: と記述されているものを新たに実行する
  // on: workflow_dispatchは手動でWorkflowを実行できるよ、という宣言が書かれているということ
  // ref は実行するブランチ名
  // https://docs.github.com/ja/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch
  return octokit.rest.actions.createWorkflowDispatch({
    owner,
    repo,
    workflow_id,
    ref: target_branch,
  });
}
