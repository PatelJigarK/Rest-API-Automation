const request = require('request-promise')

const gitHubHost = "https://api.github.com"
const usersEndPoint = "users"

class GitHubApi {
    constructor(host = gitHubHost) {
        this.host = host
        this.request = request.defaults(
            {
                headers: {
                    "user-agent": "node.js",
                    "Content-Type": "application/json"
                },
                json: true
            }
        )
    }

    getGitHubUserByUserName(gitHubUserName) {
        const usersApiCall = `${gitHubHost}/${usersEndPoint}/${gitHubUserName}`

        return this.request.get({
            url: `${usersApiCall}`
        })
    }

    getAllGitHubUsers() {
        const allUsersApiCall = `${gitHubHost}/${usersEndPoint}`

        return this.request.get({
            url: `${allUsersApiCall}`
        })
    }
}

module.exports = GitHubApi