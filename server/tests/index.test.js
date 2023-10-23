const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const verifyToken = require("../middleware");
const crypto = require("crypto");
const temporarySecretKey = crypto.randomBytes(32).toString("hex"); // Convert to a string

require("dotenv").config();

const secretKey = fs.readFileSync("privateKey.pem", "utf-8");

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("MongoDB Connection", () => {
  it("should connect to the MongoDB database", () => {
    expect(mongoose.connection.readyState).toBe(1); // 0: disconnected,1: connected,2: connecting,3: disconnecting
  });
});

describe("GET /api/elevators/list", () => {
  it("should return all elevators from database", async () => {
    const res = await request(app).get("/api/elevators/list/");
    // .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    console.log(typeof res.body);
  });
});

// describe("POST /api/users", () => {
//   it("should insert users into database", async () => {
//     const user = { name: "rushita1", email: "rushi.devi11@gmail.com" };

//     const res = await request(app)
//       .post("/api/users/save")
//       .send(user)
//       .set("Accept", "application/json");

//     expect(res.status).toBe(200);
//     expect(res.body).toHaveProperty("message");
//     expect(res.body.message).toBe("User saved successfully.");
//   });
// });

// describe("POST /api/users/save", () => {
//   it("should check if user exists or not in database", async () => {
//     const user = { name: "rushita", email: "rushi.devi@gmail.com" };

//     const res = await request(app)
//       .post("/api/users/save")
//       .send(user)
//       .set("Accept", "application/json");

//     expect(res.status).toBe(200);
//     expect(res.body).toHaveProperty("message");
//     expect(res.body.message).toBe("User already exists.");
//   });
// });
