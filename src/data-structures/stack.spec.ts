import Stack from './stack';

const factorStack = () => {
  const sut = new Stack();
  sut.push({ todo: 'learning Javascript' });
  sut.push({ todo: 'learning React' });
  sut.push({ todo: 'learning Typescript' });
  sut.push({ todo: 'learning NodeJS' });

  return { sut };
};

describe('Stack', () => {
  afterEach(() => jest.clearAllMocks());

  it('should instancied class Stack', () => {
    const sut = new Stack();

    expect(sut).toBeInstanceOf(Stack);
  });

  it('should is empty', () => {
    const sut = new Stack();

    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should return size 0', () => {
    const sut = new Stack();

    expect(sut.size()).toBe(0);
  });

  it('should return size stack', () => {
    const sut = new Stack();
    sut.push(1);
    sut.push(10);

    expect(sut.size()).toBe(2);
  });

  it('should return undefined if pop element  empty Stack ', () => {
    const sut = new Stack();

    expect(sut.pop()).toBeUndefined();
  });

  it('should pop element Stack and returns', () => {
    const sut = new Stack();
    sut.push(1);
    sut.push(10);

    expect(sut.pop()).toBe(10);
  });

  it('should if pop all elements Stack returns "undefined"', () => {
    const { sut } = factorStack();

    sut.pop();
    sut.pop();
    sut.pop();
    sut.pop();
    const result = sut.pop();

    expect(result).toBeUndefined();
  });

  it('should return top element Stack"', () => {
    const { sut } = factorStack();

    expect(sut.peek()).toEqual({ todo: 'learning NodeJS' });
  });

  it('should return top element Stack"', () => {
    const { sut } = factorStack();

    expect(sut.peek()).toEqual({ todo: 'learning NodeJS' });
  });

  it('should return undefined if peek top element of stack void"', () => {
    const sut = new Stack();

    expect(sut.peek()).toBeUndefined();
  });

  it('should clear stack"', () => {
    const { sut } = factorStack();
    sut.clear();

    expect(sut.size()).toBe(0);
  });

  it('should print preview of stack"', () => {
    const { sut } = factorStack();

    expect(sut.toString()).toEqual(
      '[{"todo":"learning Javascript"},{"todo":"learning React"},{"todo":"learning Typescript"},{"todo":"learning NodeJS"}]',
    );
  });
});
