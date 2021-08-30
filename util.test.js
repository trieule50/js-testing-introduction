const { generateText, checkAndGenerate } = require('./util');

test('should out name and age', () =>{
    const text = generateText('Max', 29)
    expect(text).toBe('Max (29 years old)');
});

// test('should output data-less text', () =>{
//     const text = generateText("", null);
//     expect(text).toBe(" (null years old)")
// })


test('should generate a valid test output', ()=>{
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)')
})

