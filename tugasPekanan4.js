const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
var token="";
var catId="";
describe("Authorization - Login", function()
{
    it ("1_TC_Sukses Login", async function(){
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

    it ("2_TC_Gagal Login", async function(){
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

describe("Categories", function()
{
          
    it ("3_TC_ Add Categories", async function(){
        const response = await request.post("/categories")
        .set("Authorization", "Bearer " + token)
        .send
            (
                {
                    name:"Minuman",
                    description:"Kopiko Luckyday"
                }
                 
            );
            catId = response.body.data.categoryId;
            expect(response.status).to.eql(201);
            expect(response.body.data.name).to.eql("Minuman");
            
        });
        it ("4_TC_ gagal Add Categories", async function(){
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

        it ("5_TC_ Sukses Get Categories Detail", async function(){
            const response = await request.get("/categories/"+catId)
                .set("Authorization", "Bearer "+token)
                .send({});
                    expect(response.status).to.eql(200);
                });
        it ("6_TC_ Gagal Get Categories Detail", async function(){
            const response = await request.get("/categories/")
                .set("Authorization", "Bearer "+token)
                .send({});
                    expect(response.status).to.eql(404);
                });

                
        it ("7_TC_ Sukses Get Categories List", async function(){
            const response = await request.get("/categories?page=1&q=minuman")
                .set("Authorization", "Bearer "+token)
                .send({});
                    expect(response.status).to.eql(200);
                });
        it ("8_TC_ Gagal Get Categories List", async function(){
                const response = await request.get("/categories?page=1&q=Minuman")
                .set("Authorization", "Bearer ")
                .send({});
                    expect(response.statusCode).to.eql(401);
                });  
                
        it ("9_TC_ Update Categories", async function(){
        const response = await request.put("/categories/"+catId)
        .set("Authorization", "Bearer " + token)
        .send
            (
                {
                    name:"Update-Minuman",
                    description:"Update-Kopiko Luckyday"
                }
                 
            );
            expect(response.status).to.eql(200);
            expect(response.body.data.name).to.eql("Update-Minuman");
            
            
        });
        it ("10_TC_ gagal Update Categories", async function(){
            const response = await request.put("/categories/x1"+catId)
            .set("Authorization", "Bearer "+token)
            .send
                (
                    {
                        name:"Update-Minuman",
                        description:"Update-Kopiko Luckyday"
                    }
                     
                );
    
                expect(response.status).to.eql(404);
                
            });     
                
}



);
