const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Authorization - Login", function()
{
    it (
        "Sukses Login", async function()
        {
        const response = await request.post("/authentications").send
            (
                {
                    email: "rohman@x.com",
                    password: "123adsfadf@"
                }
            );
        }
    );
}

);