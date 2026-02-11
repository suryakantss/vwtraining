async function add(a, b) {
    if (a < 0 || b < 0)
        throw new Error('Invalid Nos..');
    else
        return a + b;
}
try {
    let res = await add(-10, 20);
    console.log(res);
    console.log('************');
} catch (err) {
    console.log(err.message);
}