import { Minify } from "./BigIntFormater";

export default class BigInt {

    value: number = 0

    constructor(v?: number) {
        if (v) {
            this.value = v
        }
    }

    clone(): BigInt {
        return new BigInt(this.value)
    }

    add(v: BigInt) {
        this.value += v.value
    }

    sub(v: BigInt) {
        this.value -= v.value
    }

    // 转化成string格式。
    minify(): string {
        return Minify(this.value)
    }

    toNumber(): number {
        return this.value
    }
}