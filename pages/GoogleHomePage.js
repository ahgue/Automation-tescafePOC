import { Selector } from 'testcafe';


export class HomePage {
    constructor() {
        this.loginButton = Selector('a').withExactText('Iniciar sesión');
    };
}