function passwordCheck(str){
    var flag = true;
    var cause = "";
    // min 6 char,
    if (str.length < 6) {
      cause = "min 6";
      flag = false;
    }
    // should contain a number,
    if (!/(?=.*\d)/.test(str)) {
      cause = "number";
      flag = false;
    }
    // capital character
    if (!/(?=.*[A-Z])/.test(str)) {
      cause = "capital";
      flag = false;
    }
    // small caps character
    if (!/(?=.*[a-z])/.test(str)) {
      cause = "lower";
      flag = false;
    }
    // a symbol
    if (!/([!,%,@,#,$,^,*,?,_,~]+)/.test(str)) {
      cause = "symbol";
      flag = false;
    }
    console.log(cause);
    if (flag) return true;
    else return false;
}

module.exports = passwordCheck;