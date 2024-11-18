//// [tests/cases/compiler/templateLiteralEscapeSequence.ts] ////

//// [templateLiteralEscapeSequence.ts]
declare function tag(template: TemplateStringsArray, ...substitutions: any[]): string;

`\u`;
`\u0`;
`\u00`;
`\u000`;
`\u0000`;
`\u{}`;
`\u{ffffff}`;
`\x`;
`\x0`;
`\x00`;
`${0}\u`;
`${0}\u0`;
`${0}\u00`;
`${0}\u000`;
`${0}\u0000`;
`${0}\u{}`;
`${0}\u{ffffff}`;
`${0}\x`;
`${0}\x0`;
`${0}\x00`;
`\u${0}`;
`\u0${0}`;
`\u00${0}`;
`\u000${0}`;
`\u0000${0}`;
`\u{}${0}`;
`\u{ffffff}${0}`;
`\x${0}`;
`\x0${0}`;
`\x00${0}`;
`${0}\u${0}`;
`${0}\u0${0}`;
`${0}\u00${0}`;
`${0}\u000${0}`;
`${0}\u0000${0}`;
`${0}\u{}${0}`;
`${0}\u{ffffff}${0}`;
`${0}\x${0}`;
`${0}\x0${0}`;
`${0}\x00${0}`;

tag`\u`;
tag`\u0`;
tag`\u00`;
tag`\u000`;
tag`\u0000`;
tag`\u{}`;
tag`\u{ffffff}`;
tag`\x`;
tag`\x0`;
tag`\x00`;
tag`${0}\u`;
tag`${0}\u0`;
tag`${0}\u00`;
tag`${0}\u000`;
tag`${0}\u0000`;
tag`${0}\u{}`;
tag`${0}\u{ffffff}`;
tag`${0}\x`;
tag`${0}\x0`;
tag`${0}\x00`;
tag`\u${0}`;
tag`\u0${0}`;
tag`\u00${0}`;
tag`\u000${0}`;
tag`\u0000${0}`;
tag`\u{}${0}`;
tag`\u{ffffff}${0}`;
tag`\x${0}`;
tag`\x0${0}`;
tag`\x00${0}`;
tag`${0}\u${0}`;
tag`${0}\u0${0}`;
tag`${0}\u00${0}`;
tag`${0}\u000${0}`;
tag`${0}\u0000${0}`;
tag`${0}\u{}${0}`;
tag`${0}\u{ffffff}${0}`;
tag`${0}\x${0}`;
tag`${0}\x0${0}`;
tag`${0}\x00${0}`;

tag`0${00}`;
tag`0${05}`;
tag`0${000}`;
tag`0${005}`;
tag`0${055}`;
tag`${00}0`;
tag`${05}0`;
tag`${000}0`;
tag`${005}0`;
tag`${055}0`;
tag`\0`;
tag`\5`;
tag`\00`;
tag`\05`;
tag`\55`;
tag`\000`;
tag`\005`;
tag`\055`;
tag`${0}\0`;
tag`${0}\5`;
tag`${0}\00`;
tag`${0}\05`;
tag`${0}\55`;
tag`${0}\000`;
tag`${0}\005`;
tag`${0}\055`;
tag`\0${0}`;
tag`\5${0}`;
tag`\00${0}`;
tag`\05${0}`;
tag`\55${0}`;
tag`\000${0}`;
tag`\005${0}`;
tag`\055${0}`;
tag`${0}\0${0}`;
tag`${0}\5${0}`;
tag`${0}\00${0}`;
tag`${0}\05${0}`;
tag`${0}\55${0}`;
tag`${0}\000${0}`;
tag`${0}\005${0}`;
tag`${0}\055${0}`;

tag`\1`;
tag`\01`;
tag`\001`;
tag`\17`;
tag`\017`;
tag`\0017`;
tag`\177`;
tag`\18`;
tag`\018`;
tag`\0018`;
tag`\4`;
tag`\47`;
tag`\047`;
tag`\0047`;
tag`\477`;
tag`\48`;
tag`\048`;
tag`\0048`;
tag`\8`;
tag`\87`;
tag`\087`;
tag`\0087`;
tag`\877`;
tag`\88`;
tag`\088`;
tag`\0088`;


//// [templateLiteralEscapeSequence.js]
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
"\\u";
"\\u0";
"\\u00";
"\\u000";
"\0";
"\\u{}";
"\\u{ffffff}";
"\\x";
"\\x0";
"\0";
"".concat(0, "\\u");
"".concat(0, "\\u0");
"".concat(0, "\\u00");
"".concat(0, "\\u000");
"".concat(0, "\0");
"".concat(0, "\\u{}");
"".concat(0, "\\u{ffffff}");
"".concat(0, "\\x");
"".concat(0, "\\x0");
"".concat(0, "\0");
"\\u".concat(0);
"\\u0".concat(0);
"\\u00".concat(0);
"\\u000".concat(0);
"\0".concat(0);
"\\u{}".concat(0);
"\\u{ffffff}".concat(0);
"\\x".concat(0);
"\\x0".concat(0);
"\0".concat(0);
"".concat(0, "\\u").concat(0);
"".concat(0, "\\u0").concat(0);
"".concat(0, "\\u00").concat(0);
"".concat(0, "\\u000").concat(0);
"".concat(0, "\0").concat(0);
"".concat(0, "\\u{}").concat(0);
"".concat(0, "\\u{ffffff}").concat(0);
"".concat(0, "\\x").concat(0);
"".concat(0, "\\x0").concat(0);
"".concat(0, "\0").concat(0);
tag(__makeTemplateObject([void 0], ["\\u"]));
tag(__makeTemplateObject([void 0], ["\\u0"]));
tag(__makeTemplateObject([void 0], ["\\u00"]));
tag(__makeTemplateObject([void 0], ["\\u000"]));
tag(__makeTemplateObject(["\0"], ["\\u0000"]));
tag(__makeTemplateObject([void 0], ["\\u{}"]));
tag(__makeTemplateObject([void 0], ["\\u{ffffff}"]));
tag(__makeTemplateObject([void 0], ["\\x"]));
tag(__makeTemplateObject([void 0], ["\\x0"]));
tag(__makeTemplateObject(["\0"], ["\\x00"]));
tag(__makeTemplateObject(["", void 0], ["", "\\u"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\u0"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\u00"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\u000"]), 0);
tag(__makeTemplateObject(["", "\0"], ["", "\\u0000"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\u{}"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\u{ffffff}"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\x"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\x0"]), 0);
tag(__makeTemplateObject(["", "\0"], ["", "\\x00"]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\u", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\u0", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\u00", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\u000", ""]), 0);
tag(__makeTemplateObject(["\0", ""], ["\\u0000", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\u{}", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\u{ffffff}", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\x", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\x0", ""]), 0);
tag(__makeTemplateObject(["\0", ""], ["\\x00", ""]), 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\u", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\u0", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\u00", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\u000", ""]), 0, 0);
tag(__makeTemplateObject(["", "\0", ""], ["", "\\u0000", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\u{}", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\u{ffffff}", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\x", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\x0", ""]), 0, 0);
tag(__makeTemplateObject(["", "\0", ""], ["", "\\x00", ""]), 0, 0);
tag(__makeTemplateObject(["0", ""], ["0", ""]), 0);
tag(__makeTemplateObject(["0", ""], ["0", ""]), 5);
tag(__makeTemplateObject(["0", ""], ["0", ""]), 0);
tag(__makeTemplateObject(["0", ""], ["0", ""]), 5);
tag(__makeTemplateObject(["0", ""], ["0", ""]), 45);
tag(__makeTemplateObject(["", "0"], ["", "0"]), 0);
tag(__makeTemplateObject(["", "0"], ["", "0"]), 5);
tag(__makeTemplateObject(["", "0"], ["", "0"]), 0);
tag(__makeTemplateObject(["", "0"], ["", "0"]), 5);
tag(__makeTemplateObject(["", "0"], ["", "0"]), 45);
tag(__makeTemplateObject(["\0"], ["\\0"]));
tag(__makeTemplateObject([void 0], ["\\5"]));
tag(__makeTemplateObject([void 0], ["\\00"]));
tag(__makeTemplateObject([void 0], ["\\05"]));
tag(__makeTemplateObject([void 0], ["\\55"]));
tag(__makeTemplateObject([void 0], ["\\000"]));
tag(__makeTemplateObject([void 0], ["\\005"]));
tag(__makeTemplateObject([void 0], ["\\055"]));
tag(__makeTemplateObject(["", "\0"], ["", "\\0"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\5"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\00"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\05"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\55"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\000"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\005"]), 0);
tag(__makeTemplateObject(["", void 0], ["", "\\055"]), 0);
tag(__makeTemplateObject(["\0", ""], ["\\0", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\5", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\00", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\05", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\55", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\000", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\005", ""]), 0);
tag(__makeTemplateObject([void 0, ""], ["\\055", ""]), 0);
tag(__makeTemplateObject(["", "\0", ""], ["", "\\0", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\5", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\00", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\05", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\55", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\000", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\005", ""]), 0, 0);
tag(__makeTemplateObject(["", void 0, ""], ["", "\\055", ""]), 0, 0);
tag(__makeTemplateObject([void 0], ["\\1"]));
tag(__makeTemplateObject([void 0], ["\\01"]));
tag(__makeTemplateObject([void 0], ["\\001"]));
tag(__makeTemplateObject([void 0], ["\\17"]));
tag(__makeTemplateObject([void 0], ["\\017"]));
tag(__makeTemplateObject([void 0], ["\\0017"]));
tag(__makeTemplateObject([void 0], ["\\177"]));
tag(__makeTemplateObject([void 0], ["\\18"]));
tag(__makeTemplateObject([void 0], ["\\018"]));
tag(__makeTemplateObject([void 0], ["\\0018"]));
tag(__makeTemplateObject([void 0], ["\\4"]));
tag(__makeTemplateObject([void 0], ["\\47"]));
tag(__makeTemplateObject([void 0], ["\\047"]));
tag(__makeTemplateObject([void 0], ["\\0047"]));
tag(__makeTemplateObject([void 0], ["\\477"]));
tag(__makeTemplateObject([void 0], ["\\48"]));
tag(__makeTemplateObject([void 0], ["\\048"]));
tag(__makeTemplateObject([void 0], ["\\0048"]));
tag(__makeTemplateObject([void 0], ["\\8"]));
tag(__makeTemplateObject([void 0], ["\\87"]));
tag(__makeTemplateObject([void 0], ["\\087"]));
tag(__makeTemplateObject([void 0], ["\\0087"]));
tag(__makeTemplateObject([void 0], ["\\877"]));
tag(__makeTemplateObject([void 0], ["\\88"]));
tag(__makeTemplateObject([void 0], ["\\088"]));
tag(__makeTemplateObject([void 0], ["\\0088"]));