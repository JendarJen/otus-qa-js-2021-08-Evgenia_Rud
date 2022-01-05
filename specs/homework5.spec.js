import fetch from 'node-fetch';
import supertest from 'supertest';


test('GET/airports with node-fetch - Airport Gap API', async () => {
    const response = await fetch('https://airportgap.dev-tester.com/api/airports');
    //console.log(response);
    //Return 200 - 1 способ
    expect(response.status).toEqual(200)
    //Return 200 - 2 способ
    const { status } = fetch('https://airportgap.dev-tester.com/api/airports');
    expect(response.status).toEqual(200)
});

test('GET/airports with supertest - Airport Gap API', async () => {
    const response = await supertest('https://yojji.dev.csihelsinki.online')
        .get('/api/#/test/getHello')
        .set('Accept', 'application/json');
    expect(response.status).toEqual(200)
});

test('GET /airports/:id with node-fetch - Airport Gap API', async () => {
    const response = await fetch('https://airportgap.dev-tester.com/api/airports/KIX');
    expect(response.status).toEqual(200);
});

test('GET /airports/:id with supertest - Airport Gap API', async () => {
    const response = await supertest('https://airportgap.dev-tester.com')
        .get('/api/airports/KIX');
    expect(response.status).toEqual(200);
});

test('Post /airports/distance with node-fetch - Airport Gap API', async () => {
    const response = await fetch('https://airportgap.dev-tester.com/api/airports/distance?from=KIX&to=NRT',
        //передаем объект с параметрами
        {
            method: 'post',
        });
    expect(response.status).toEqual(200);
});

test('Post /airports/distance with supertest - Airport Gap API', async () => {
    const response = await supertest('https://airportgap.dev-tester.com')
        .post('/api/airports/distance?from=KIX&to=NRT')
        .set('content-type', 'application/json');
    console.log(response.header['transfer-encoding'])
    expect(response.status).toEqual(200);
});

test('Post /tokens with node-fetch - Airport Gap API', async () => {
    const response = await fetch('https://airportgap.dev-tester.com/api/tokens?email=test@airportgap.com&password=airportgappassword',
        //передаем объект с параметрами
        {
            method: 'post',
        });
    expect(response.status).toEqual(200);
});

test('Post /tokens with supertest - Airport Gap API', async () => {
    const response = await supertest('https://airportgap.dev-tester.com')
        .post('/api/tokens?email=test@airportgap.com&password=airportgappassword')
        .set('content-type', 'application/json');
    expect(response.status).toEqual(200);
});