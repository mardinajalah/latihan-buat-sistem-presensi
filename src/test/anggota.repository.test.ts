import request from 'supertest';
import express from "express"
import routeAnggota from '../router/anggota.router';

const app = express()
app.use(routeAnggota)

test('Test Func getAllDataAnggota', async () => {
  const res = await request(app).get('/anggota');
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ data: [] });
});
