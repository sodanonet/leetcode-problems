
export function test(order, execute, expect, params = '') {
    console.log(`# Test case ${order}`);
    const start = new Date().getUTCMilliseconds();
    const result = execute();
    const end = new Date().getUTCMilliseconds();
    const time = start - end;
    let pass = false;
    if (Array.isArray(result)) {
        pass = result.reduce((a,b,i) => (a && b == expect[i]), true);
    } else {
        pass = result == expect;
    }
    
    console.log("\x1b[35m", ` └─♦[ ${time}ms ]`);
    if (pass) {
        console.log("\x1b[32m", `\t└─► PASS: ${params} output[${result} = ${expect}]`);
    } else {
        console.log("\x1b[31m", `\t└─► FAIL: ${params} output[${result} = ${expect}]`);
    }
}

export function run(file, cases) {
    console.log(`************************************`);
    console.log(`## Test file ${file} ##`);
    console.log(`************************************`);
    cases.map((c) => c());
    console.log(`\n\n`);
}
