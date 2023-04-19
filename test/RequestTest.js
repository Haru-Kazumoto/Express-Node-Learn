import request from "supertest";
import app from "../src/app.js";

test('Test Express JS', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe("Hello express!");
});
