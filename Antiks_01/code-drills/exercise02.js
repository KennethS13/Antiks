const arr = ["anti", "eli", "rip", "felisha"];
const isInFunc = function (arr, ele) {
    for (i = 0; i < arr.length; i++) {
        if (ele === arr[i]) {
            return true;
        }
    };
};
console.log(isInFunc(["anti", "eli", "rip", "felisha"], "anti"));