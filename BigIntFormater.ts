

var _maxNumber = 82
var _suffixes: string[] = []

// 最多支持多少位的数字
export function GetMaxNumber(): number {
    return _maxNumber
}

export function InitSufix() {
    _suffixes.length = 0
    _suffixes[0] = 'K'
    _suffixes[1] = 'M'
    _suffixes[2] = 'B'
    _suffixes[3] = 'T'

    let abc = "abcdefghijklmnopqrtsuvwxyz"

    let cnt = _suffixes.length
    for (let i = 0; i < abc.length; i++) {
        _suffixes[cnt + i] = 'a' + abc[i]
    }

    cnt = _suffixes.length
    for (let i = 0; i < abc.length; i++) {
        _suffixes[cnt + i] = 'b' + abc[i]
    }

    cnt = _suffixes.length
    for (let i = 0; i < abc.length; i++) {
        _suffixes[cnt + i] = 'c' + abc[i]
    }

    if (_suffixes.length !== _maxNumber) {
        throw '前缀数据长度不对！'
    }
}

export function Minify(v: number): string {

    if (_suffixes.length == 0) {
        InitSufix()
    }

    // 以1000为单位，进行格式化
    for (let i = _maxNumber; i > 0; i--) {
        if (v > Math.pow(10, 3 * i)) {
            let num3 = v / Math.pow(10, 3 * i);
            return num3.toFixed(2) + _suffixes[i - 1]
        }
    }

    // 去掉小数部分
    return v.toFixed(0)
}
