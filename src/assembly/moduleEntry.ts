// Configuration imported from JS
import { BGR_ALIVE, BGR_DEAD } from "./config";
function add(x: i32, y: i32): i32 {
    var a=0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j <y; j++) {
            a+=j*i;
        }
    }
    //global;
    //console.log()
    //consoleLog(a);
    return a;
    //return BGR_ALIVE;
}
export {add}