const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
var token="";
describe("Authorization - Login", function()
{
    it ("TC_Sukses Login", async function(){
        const response = await request.post("/authentications")
        .send
            (
                {
                    email: "rohman@ex.com",
                    password: "rohman2023"
                 } 
            );
            expect(response.status).to.eql(201);

               token = response.body.data.accessToken;

        });

    it ("TC_Gagal Login", async function(){
        const response = await request.post("/authentications")
        .send
            (
                {
                    email: "rohman@ex.com",
                    password: "rohman2022"
                 }
                 
            );

            expect(response.status).to.eql(401);

        });

        
}

);

describe("Categories - Add", function()
{
          
    it ("TC_Add Categories", async function(){
        const response = await request.post("/categories")
        .set("Authorization", "Bearer " + token)
        .send
            (
                {
                    name: "Minuman",
                    description: "Kopiko Luckyday"
                }
                 
            );

            expect(response.status).to.eql(201);
            
        });
        it ("TC_ gagal Add Categories", async function(){
            const response = await request.post("/categories")
            .set("Authorization", "Bearer ")
            .send
                (
                    {
                        name: "Minuman",
                        description: "Kopiko Luckyday"
                    }
                     
                );
    
                expect(response.status).to.eql(401);
                
            });
        
}



);
