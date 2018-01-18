import { validateEmail, validatePassword } from '../utils/validation';

it('passes on valid email', () => {
    const validEmail = 'test@email.com';
    expect(validateEmail(validEmail)).toBeTruthy();
});

it('fails on invalid email', () => {
    const invalidEmail = 'email';
    expect(validateEmail(invalidEmail)).toBeFalsy();
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
    const validPassword = 'TestTest123';
    expect(validatePassword(validPassword)).toBeTruthy();
});

it('invalid password: missing digit', () => {
    const missingDigit = 'TestTest';
    expect(validatePassword(missingDigit)).toBeFalsy();
});

it('invalid password: missing 1 uppercase', () => {
    const missingUpperCase = 'testtest123';
    expect(validatePassword(missingUpperCase)).toBeFalsy();
});
