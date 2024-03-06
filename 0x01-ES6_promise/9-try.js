export default function guardrail(mathFunction) {
  // guardrail with mathFunction as parameter
  const queue = [];

  // try, catch, finally
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
