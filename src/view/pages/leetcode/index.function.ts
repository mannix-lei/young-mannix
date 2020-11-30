export interface IFunctionList {
    title: string;
    content: string;
    method: string;
    link: string;
}

export const list: IFunctionList[] = [
    {
        title: '重新格式化字符串',
        content:
            '给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。',
        method: `
        /**
        * @param {string} s
        * @return {string}
        */
        var reformat = function(s) {
            var a = s.split('');
            var b = [];
            if (a.length === 1) return s;
            var reg = /^\d{1,}$/;
            const o = a.filter(item => reg.test(item)).length - a.filter(item => !reg.test(item)).length;
            if (a.findIndex(item => reg.test(item)) === -1 || a.findIndex(item => !reg.test(item)) === -1 ) return "";
            for (var i = a.length - 1; i >= 0; i--) {
                if (o > 0) {
                    b.push(a.splice(a.findIndex(item => i % 2 === 0 ? reg.test(item) : !reg.test(item)), 1)[0]);
                } else {
                    b.push(a.splice(a.findIndex(item => i % 2 === 0 ? !reg.test(item) : reg.test(item)), 1)[0]);
                }
            }
            return b;
        };`,
        link: 'https://leetcode-cn.com/problems/reformat-the-string/',
    },
    {
        title: '字母映射',
        content:
            "给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：字符（'a' - 'i'）分别用（'1' - '9'）表示。字符（'j' - 'z'）分别用（'10#' - '26#'）表示。返回映射之后形成的新字符串。题目数据保证映射始终唯一。",
        method: `
        /**
         * @param {string} s
         * @return {string}
         */
        var freqAlphabets = function(s) {
        var arr = [];
                var res = '';
                arr = s.split( '#' );
                arr.map( ( item, index ) => {
                    if ( index < arr.length - 1 ) {
                        if ( Number( item ) > 9 && Number( item ) <= 26 ) {
                            res = res + String.fromCharCode( Number( item ) + 96 );
                        } else {
                            var temp = arr[ index ];
                            while ( temp > 26 ) {
                                res = res + String.fromCharCode( Number( temp.split( '' )[ 0 ] ) + 96 )
                                temp = temp.split( '' ).splice( 1, temp.length ).join( '' );
                            }
                            res = res + String.fromCharCode( Number( temp ) + 96 );
                        }
                    }
                } );
                if ( arr[ arr.length - 1 ] ) {
                    for ( const item of arr[ arr.length - 1 ] ) {
                        res = res + String.fromCharCode( Number( item ) + 96 )
                    }
                }
                return res;
        };`,
        link: '',
    },
];
