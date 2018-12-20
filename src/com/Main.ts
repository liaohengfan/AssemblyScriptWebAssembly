import * as asmPromise from "../assembly/moduleEntry.ts";
declare let WebAssembly:any;
console.log((asmPromise as any).toString());


const RGB_ALIVE = 0xD392E6;
const RGB_DEAD  = 0xA61B85;
const BIT_ROT   = 10;

let bcr={
    width:10,
    height:10
};
var width = bcr.width >>> 1;
var height = bcr.height >>> 1;
var size = width * height;
var byteSize = (size + size) << 2;

function rgb2bgr(rgb:number) {
    return ((rgb >>> 16) & 0xff) | (rgb & 0xff00) | (rgb & 0xff) << 16;
}
var memory = new WebAssembly.Memory({ initial: ((byteSize + 0xffff) & ~0xffff) >>> 16 });
let importObjects={
    env: {
        memory,
        abort: function() {}
    },
    config: {
        BGR_ALIVE : '123456', // little endian, LSB must be set
        BGR_DEAD  : '123456' // little endian, LSB must not be set
    },
    Math
};

asmPromise(importObjects).then((asModule: any) => {
    console.log(asModule.add(10000, 10000));
});