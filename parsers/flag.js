module.exports = (argv) => {
    const params = argv.slice(2);
    const operationWithDash = params.find(e => e.startsWith('--'))
    if (!operationWithDash) throw new Error('you must specify operation');
    const operation = operationWithDash.substring(2);
    const operands = params
        .filter(e => !e.startsWith('--'))
        .map(Number);

    return ({
        operation,
        operands
    });
};