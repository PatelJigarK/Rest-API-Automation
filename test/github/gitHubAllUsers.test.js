const assert = require("chai").assert
const before = require("mocha").before
const GitHubApi = require("./src/GitHubApi")

describe("GitHub API Tests", () => {

    let gitHubApi

    before(function() {
        gitHubApi = new GitHubApi()
    })

    it.only("Verify user with user id 21 is technoweenie", async function() {
        const response = await gitHubApi.getAllGitHubUsers()
        let userNameFound
        for (let i = 0; i < response.length; i++) {
            if (response[i].id === 21) {
                userNameFound = response[i].login
                break
            }
        }
        assert.equal(userNameFound, "technoweenie")
    })
})