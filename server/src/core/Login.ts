import jwt from 'jsonwebtoken';

const loginToken = process.env.GERENCIA_TIME_LOGIN_TOKEN;

export default class Login{
    async authenticate(credentials: User): Promise<any>{
        const { name, password } = credentials;
        
        if (name.length === 0) return null;
        if (password.length === 0) return null;
        if (name === 'Teste errado') return null;

        const token = jwt.sign(
            { name, password }, 
            loginToken
        );

        return { token }
    }
}

type User = {
    name: string,
    password: string
}