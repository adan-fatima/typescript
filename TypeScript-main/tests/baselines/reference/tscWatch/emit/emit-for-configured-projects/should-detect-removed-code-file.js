currentDirectory:: /home/src/projects/a/b useCaseSensitiveFileNames:: false
Input::
//// [/home/src/projects/a/b/referenceFile1.ts]
/// <reference path="./moduleFile1.ts" />
export var x = Foo();

//// [/home/src/projects/a/b/moduleFile1.ts]
export function Foo() { };

//// [/home/src/projects/a/b/tsconfig.json]
{}

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


/home/src/tslibs/TS/Lib/tsc.js --w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[96mreferenceFile1.ts[0m:[93m2[0m:[93m16[0m - [91merror[0m[90m TS2304: [0mCannot find name 'Foo'.

[7m2[0m export var x = Foo();
[7m [0m [91m               ~~~[0m

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/home/src/projects/a/b/moduleFile1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = Foo;
function Foo() { }
;


//// [/home/src/projects/a/b/referenceFile1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
/// <reference path="./moduleFile1.ts" />
exports.x = Foo();



PolledWatches::
/home/src/projects/a/b/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/a/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/projects/a/b/moduleFile1.ts: *new*
  {}
/home/src/projects/a/b/referenceFile1.ts: *new*
  {}
/home/src/projects/a/b/tsconfig.json: *new*
  {}
/home/src/tslibs/TS/Lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/home/src/projects/a/b: *new*
  {}

Program root files: [
  "/home/src/projects/a/b/moduleFile1.ts",
  "/home/src/projects/a/b/referenceFile1.ts"
]
Program options: {
  "watch": true,
  "configFilePath": "/home/src/projects/a/b/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/home/src/projects/a/b/moduleFile1.ts
/home/src/projects/a/b/referenceFile1.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/TS/Lib/lib.d.ts
/home/src/projects/a/b/moduleFile1.ts
/home/src/projects/a/b/referenceFile1.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/a/b/modulefile1.ts (used version)
/home/src/projects/a/b/referencefile1.ts (used version)

exitCode:: ExitStatus.undefined

Change:: delete moduleFile1

Input::
//// [/home/src/projects/a/b/moduleFile1.ts] deleted

Timeout callback:: count: 1
2: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
2: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[96mreferenceFile1.ts[0m:[93m1[0m:[93m22[0m - [91merror[0m[90m TS6053: [0mFile '/home/src/projects/a/b/moduleFile1.ts' not found.

[7m1[0m /// <reference path="./moduleFile1.ts" />
[7m [0m [91m                     ~~~~~~~~~~~~~~~~[0m

[96mreferenceFile1.ts[0m:[93m2[0m:[93m16[0m - [91merror[0m[90m TS2304: [0mCannot find name 'Foo'.

[7m2[0m export var x = Foo();
[7m [0m [91m               ~~~[0m

[[90mHH:MM:SS AM[0m] Found 2 errors. Watching for file changes.



//// [/home/src/projects/a/b/referenceFile1.js] file written with same contents

PolledWatches::
/home/src/projects/a/b/moduleFile1.ts: *new*
  {"pollingInterval":500}
/home/src/projects/a/b/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/a/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/home/src/projects/a/b/referenceFile1.ts:
  {}
/home/src/projects/a/b/tsconfig.json:
  {}
/home/src/tslibs/TS/Lib/lib.d.ts:
  {}

FsWatches *deleted*::
/home/src/projects/a/b/moduleFile1.ts:
  {}

FsWatchesRecursive::
/home/src/projects/a/b:
  {}


Program root files: [
  "/home/src/projects/a/b/referenceFile1.ts"
]
Program options: {
  "watch": true,
  "configFilePath": "/home/src/projects/a/b/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/home/src/projects/a/b/referenceFile1.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/a/b/referenceFile1.ts

Shape signatures in builder refreshed for::
/home/src/projects/a/b/referencefile1.ts (computed .d.ts)

exitCode:: ExitStatus.undefined