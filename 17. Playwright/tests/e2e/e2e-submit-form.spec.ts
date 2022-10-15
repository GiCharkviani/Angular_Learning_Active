import {test} from "@playwright/test";
import {HomePage} from "../../page-objects/homePage";
import {FeedbackPage} from "../../page-objects/feedbackPage";

test.describe("Make Post", () => {
    let homePage: HomePage;
    let feedbackPage: FeedbackPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        feedbackPage = new FeedbackPage(page);

        await homePage.visit();
        await homePage.clickOnFeedbackLink();
    })

    // Reset feedback form
    test("Reset feedback form", async ({page}) => {
        await feedbackPage.fillForm("Some name",
            "Some email",
            "Some subject",
            "Some nice comment about the application");

        await feedbackPage.resetForm();
        await feedbackPage.assertReset();
    })

    // Submit feedback form
    test("Submit feedback form", async ({page}) => {
        await feedbackPage.fillForm("Some name",
            "Some email",
            "Some subject",
            "Some nice comment about the application");

        await feedbackPage.submitForm();

        await feedbackPage.feedbackFormSent();
    })
})
