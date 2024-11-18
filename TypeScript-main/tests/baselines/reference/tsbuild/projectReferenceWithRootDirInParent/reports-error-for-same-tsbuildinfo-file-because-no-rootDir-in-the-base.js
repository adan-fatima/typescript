currentDirectory:: /home/src/workspaces/solution useCaseSensitiveFileNames:: false
Input::
//// [/home/src/workspaces/solution/src/main/a.ts]
import { b } from './b';
const a = b;


//// [/home/src/workspaces/solution/src/main/b.ts]
export const b = 0;


//// [/home/src/workspaces/solution/src/main/tsconfig.json]
{
  "extends": "../../tsconfig.base.json",
  "references": [
    {
      "path": "../other"
    }
  ]
}

//// [/home/src/workspaces/solution/src/other/other.ts]
export const Other = 0;


//// [/home/src/workspaces/solution/src/other/tsconfig.json]
{
  "extends": "../../tsconfig.base.json"
}

//// [/home/src/workspaces/solution/tsconfig.base.json]
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    
    "outDir": "./dist/",
    "skipDefaultLibCheck": true
  },
  "exclude": [
    "node_modules"
  ]
}

//// [/home/src/tslibs/TS/Lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/home/src/tslibs/TS/Lib/tsc.js --b src/main --verbose
Output::
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/other/tsconfig.json
    * src/main/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/other/tsconfig.json' is out of date because output file 'dist/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/workspaces/solution/src/other/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/main/tsconfig.json' is out of date because buildinfo file 'dist/tsconfig.tsbuildinfo' indicates that file 'src/other/other.ts' was root file of compilation but not any more.

[[90mHH:MM:SS AM[0m] Building project '/home/src/workspaces/solution/src/main/tsconfig.json'...

[96msrc/main/tsconfig.json[0m:[93m4[0m:[93m5[0m - [91merror[0m[90m TS6377: [0mCannot write file '/home/src/workspaces/solution/dist/tsconfig.tsbuildinfo' because it will overwrite '.tsbuildinfo' file generated by referenced project '/home/src/workspaces/solution/src/other'

[7m4[0m     {
[7m [0m [91m    ~[0m
[7m5[0m       "path": "../other"
[7m [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m6[0m     }
[7m [0m [91m~~~~~[0m

[[90mHH:MM:SS AM[0m] Updating unchanged output timestamps of project '/home/src/workspaces/solution/src/main/tsconfig.json'...


Found 1 error.



//// [/home/src/workspaces/solution/dist/other.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Other = void 0;
exports.Other = 0;


//// [/home/src/workspaces/solution/dist/other.d.ts]
export declare const Other = 0;


//// [/home/src/workspaces/solution/dist/tsconfig.tsbuildinfo]
{"fileNames":["../../../tslibs/ts/lib/lib.d.ts","../src/other/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-4254247902-export const Other = 0;\n","signature":"-10003600206-export declare const Other = 0;\n"}],"root":[2],"options":{"composite":true,"declaration":true,"outDir":"./","skipDefaultLibCheck":true},"latestChangedDtsFile":"./other.d.ts","version":"FakeTSVersion"}

//// [/home/src/workspaces/solution/dist/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../tslibs/ts/lib/lib.d.ts",
    "../src/other/other.ts"
  ],
  "fileInfos": {
    "../../../tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "../src/other/other.ts": {
      "original": {
        "version": "-4254247902-export const Other = 0;\n",
        "signature": "-10003600206-export declare const Other = 0;\n"
      },
      "version": "-4254247902-export const Other = 0;\n",
      "signature": "-10003600206-export declare const Other = 0;\n"
    }
  },
  "root": [
    [
      2,
      "../src/other/other.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "outDir": "./",
    "skipDefaultLibCheck": true
  },
  "latestChangedDtsFile": "./other.d.ts",
  "version": "FakeTSVersion",
  "size": 843
}

//// [/home/src/workspaces/solution/dist/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 0;


//// [/home/src/workspaces/solution/dist/b.d.ts]
export declare const b = 0;


//// [/home/src/workspaces/solution/dist/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b_1 = require("./b");
var a = b_1.b;


//// [/home/src/workspaces/solution/dist/a.d.ts]
export {};



exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
