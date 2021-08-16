const assert = require("chai").assert
const before = require("mocha").before
const GitHubApi = require("./src/GitHubApi")

describe("GitHub API Tests", () => {

    let gitHubApi

    before(function() {
        gitHubApi = new GitHubApi()
    })

    it("Verify get correct user in response by checking ID", async function() {
        const response = await gitHubApi.getGitHubUserByUserName("PatelJigarK")
        assert.equal(response.id, 38189732)
    })
})