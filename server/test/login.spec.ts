import './setup-vars';
import Login from "../src/core/Login";

let login: Login;

describe('Login', () => {
    beforeEach(() => {
        login = new Login();
    })

    it('Should return a valid token', async () => {
        const credentials = {
            name: 'Teste',
            password: '1234'
        };
        const response = await login.authenticate(credentials);

        expect(response.token).not.toBeNull();
    })

    it('Should return null when passed incorrect credentials', async () => {
        const credentials = {
            name: 'Teste errado',
            password: '222'
        };

        const response = await login.authenticate(credentials);

        expect(response).toBeNull();
    })

    it('Should return null when passed empty password', async () => {
        const credentials = {
            name: 'Testando',
            password: ''
        };

        const response = await login.authenticate(credentials);

        expect(response).toBeNull();
    })

    it('Should return null when passed empty name', async () => {
        const credentials = {
            name: '',
            password: '1234'
        };

        const response = await login.authenticate(credentials);

        expect(response).toBeNull();
    })
});