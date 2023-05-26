# GitHub Proxy Server for Private Repository

This is a Node.js application (using express) that acts as a proxy server for a private GitHub repository. It allows you to access raw content and API endpoints of the repository securely by proxying the requests. :closed_lock_with_key:

## Installation  :computer:

1. Clone the repository.
2. Install dependencies: `yarn install`.

## Configuration  :wrench:

Before running the server, make sure to set the following environment variables:

- `GH_OWNER`: The GitHub organization or user that owns the private repository.
- `GH_REPO`: The name of the private repository.
- `GH_PAT`: A personal access token (PAT) with appropriate permissions to access the repository. :key:

## Usage  :rocket:

1. Start the server: `npm start`.
2. Access raw content: `http://localhost:3000/REPO_NAME/ORG_NAME/path/to/file`.
3. Access GitHub API: `http://localhost:3000/REPO_NAME/repos/ORG_NAME/repo-endpoint`.

## License  :page_facing_up:

This project is licensed under the [MIT License](https://raw.githubusercontent.com/git/git-scm.com/main/MIT-LICENSE.txt).
