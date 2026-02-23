// index.test.js
const sumar = require('./app');

test('Verificación de suma funcional', () => {
    expect(sumar(1, 2)).toBe(3);
});