function palindrome(str) {
    var newStr = str.replace(/[\W_]/g, "").toLowerCase();
    
    var revStr = newStr.split("").reverse().join("");
  
    if (revStr === newStr) {
      return true;
    }
    else {
      return false;
    }
  }
  
  
  console.log(palindrome("__eye"));