const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Sergo', 29);
    expect(text).toBe('Sergo (29 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
})

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Sergo', 29);
    expect(text).toBe('Sergo (29 years old)');

})