import BigInt from "./BigInt";
import { Minify, InitSufix, GetMaxNumber } from "./BigIntFormater";

console.log('123')


var big = 0

function test() {

    let test2 = function (v: number) {
        console.log(v, Minify(v))
    }

    let maxv = 1;
    let total = 0
    for (let i = 0; i < GetMaxNumber(); i++) {
        maxv = maxv * 10

        for (let j = 0; j < 100; j++) {
            let r = Math.random()
            total += r * maxv
            test2(r * maxv)
        }
    }

    console.log(total, Minify(total), new BigInt(total).minify())
}

InitSufix();

test();

