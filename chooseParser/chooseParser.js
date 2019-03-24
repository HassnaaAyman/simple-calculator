module.exports = (...args) => {
    const params = args.slice(2);
    const parsertype = params.find(e => {
        let typeOfParser = Number(e);
        return Number.isNaN(typeOfParser);
    });
    return parsertype.startsWith('--') ? 'flag' : 'simple';
};
