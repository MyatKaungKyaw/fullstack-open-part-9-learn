export type Operation = 'multiply' | 'add' | 'divide';
type Result = string | number;

export const calculator = (a: number, b: number, op: Operation): Result => {
  if (op === 'multiply') {
    return a * b;
  } else if (op === 'add') {
    return a + b;
  } else if (op === 'divide') {
    if (b === 0) return 'can\'t divide by 0!';
    return a / b;
  }
  throw new Error('invalid input');
};

try {
  console.log(calculator(1, 5 , 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  // here we can not use error.message

  if (error instanceof Error) {
    // the type is narrowed and we can refer to error.message

    errorMessage += error.message;
  }
  // here we can not use error.message

  console.log(errorMessage);
}
