module.exports = (argv) => {
    const params = argv.slice(2);
    const operation = params.find(e => !e.startsWith('--'));
    const operands = params.filter(e => !e.startsWith(operation)).map(Number);
    return ({
        operation,
        operands
    });
};



