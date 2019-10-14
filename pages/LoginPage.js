import { Selector } from 'testcafe';

export class LoginPage {
    constructor() {
        this.emailTextBox = Selector('#identifierId');
        this.nextButton = Selector('#identifierNext');
        this.passwordTextBox = Selector('input[type=password]');
        this.nextButtonPassword = Selector('span').withExactText('Siguiente');
    };
}