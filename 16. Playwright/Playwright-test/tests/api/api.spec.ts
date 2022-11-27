import {test, expect} from "@playwright/test";

test.describe.parallel("API Testing", () => {
    const baseUrl = "https://reqres.in/api/";

    test("Simple API Test - Assert Response Status", async({request}) => {
        const response = await request.get(baseUrl + "users/2");
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toBeTruthy();
    })

    test("Simple API Test - Assert Invalid Endpoint", async ({request}) => {
        const response = await request.get(baseUrl + "users/nonExistingEndpoint");
        expect(response.status()).toBe(404);
    })

    test("GET Request - Get User Detail", async ({request}) => {
        const response = await request.get(baseUrl + "users/3");
        const responseBody = await response.json();

        // console.log(responseBody)
        // console.table(responseBody)

        expect(response.status()).toBe(200);

        expect(responseBody.data).toBeTruthy();

        expect(responseBody.data.id).toBe(3);
        expect(responseBody.data.first_name).toBe("Emma");
    })

    test("POST Request - Create New User", async ({request}) => {
        const response = await request.post(baseUrl + "users", {
            data: {
                id: 1029,
                name: "Gio",
                job: "Computer"
            }
        });

        const responseBody = await response.json();

        // console.log(responseBody);
        expect(response.status()).toBe(201);
        expect(responseBody).toBeTruthy();
        expect(responseBody.createdAt).toBeTruthy();
        expect(responseBody.id).toBe(1029);
    })

    test("POST Request - Login", async ({request}) => {
        const response = await request.post(baseUrl + "login", {
            data: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        });

        const responseBody = await response.json();
        // console.log(responseBody)

        expect(response.status()).toBe(200);
        expect(responseBody).toBeTruthy();
        expect(responseBody.token).toBeTruthy();
    })

    test("POST Request - Login Fail", async ({request}) => {
        const response = await request.post(baseUrl + "login", {
            data: {
                email: "peter@klaven",
            }
        });

        const responseBody = await response.json();
        // console.log(responseBody)

        expect(response.status()).toBe(400);
        expect(responseBody).toBeTruthy();
        expect(responseBody.error).toBeTruthy();
    })

    test("PUT Request - Update User", async ({request}) => {
        const response = await request.put(baseUrl + "users/2", {
            data: {
                name: "new name",
                job: "new job"
            }
        })

        const responseBody = await response.json();
        // console.log(responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody.name).toBe("new name");
        expect(responseBody.job).toBe("new job");
        expect(responseBody.updatedAt).toBeTruthy();
    })

    test("DELETE Request - Delete User", async ({request}) => {
        const response = await request.delete(baseUrl + "user/3");

        expect(response.status()).toBe(204);
    })



})
