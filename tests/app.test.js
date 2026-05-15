describe('Basic Tests', () => {
  test('should pass a simple test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should verify string', () => {
    expect('hello').toBe('hello');
  });

  test('should verify array', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
  });
});