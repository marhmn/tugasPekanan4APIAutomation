const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

describe("Authorization - Login", function()
{
    it ("Sukses Login", async function(){
        const response = await request.post("/authentications")
        .send
            (
                {
                    "email": "rohman@ex.com",
                    "password": "123adsfadf@"
                 }
                 
            );

            expect(response.status).to.eql(201);

        });

    it ("Gagal Login", async function(){
        const response = await request.post("/authentications")
        .send
            (
                {
                    "email": "rohman@ex.com",
                    "password": "123adsfadf@"
                 }
                 
            );

            expect(response.status).to.eql(401);

        });
}

);