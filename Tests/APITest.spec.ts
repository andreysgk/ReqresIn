import { ApiBase } from '../Pages/ApiBase';
import { test, expect,  } from './BaseTest';
test.describe('Apishechka', async () => {
    const baseURL = 'https://reqres.in';
     
    test('get - LIST USERS', async({request}) => {
        const response = await request.get(`${baseURL}/api/users?page=2`);
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
    })

    test('post - create', async({request}) => {
        const response = await request.post(`${baseURL}/api/users`,{
            data: {
                "name": "morpheus",
                "job": "leader",
            }
        });
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(201);
    })

    test('post - LOGIN-UNSUCCESSFUL', async({request}) => {
        const response = await request.post(`${baseURL}/api/login`,{
            data: {
                "email": "peter@klaven"
            }
        });
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(400);
    })

    test('delete', async({request}) => {
        const response = await request.post(`${baseURL}/api/users/2`);
        expect(response.status()).toBe(204);
    })

    test('put - UPDATE', async({request}) => {
        const response = await request.put(`${baseURL}/api/users/2`,{
            data: {
                "name": "morpheus",
                "job": "zion resident",
            }
        });
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
    })
})