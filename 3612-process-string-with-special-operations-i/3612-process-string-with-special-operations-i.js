/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let char  = s[i]
        if(char==='#'){
            result+=result
        }else if(char==='%'){
            result = result.split('').reverse().join('')
        }else if(char==='*'){
            result = result.slice(0,-1)
        }else {
            result+=char
        }
    }
    return result
};  