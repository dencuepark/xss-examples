
//  1: Test API response of malicious data
//  2: Test API response of utf-8 encoded, malicious data
var runTestNum = 1;

// Malicious data
if (runTestNum == 1) {
    var testData = {
        "foo": "<script>alert('xss')</script>"
    };
}

// utf-8 encoded, malicious data
if (runTestNum == 2) {
    // Data encoded: {"foo": "</script><script>alert('XSS')</script>"}
    var testData = "\x7B\x22\x66\x6F\x6F\x22\x3A\x20\x22\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E\x3C\x73\x63\x72\x69\x70\x74\x3E\x61\x6C\x65\x72\x74\x28\x27\x58\x53\x53\x27\x29\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E\x22\x7D";
}

// Represents the API response of the test data 
switch(runTestNum) {
    case 1:
        var apiResponse = JSON.stringify(testData);
        break;
    case 2:
        var apiResponse = testData;
        break;
}

// Example 1: Browser tries to display the API response
document.write("<P>");
document.write("API returned: " + apiResponse);
document.write("</P>");

// Example 2: Browser tries to display the API response
var json = JSON.parse(apiResponse);
document.write("<P>");
document.write("foo: " + json.foo);
document.write("</P>");
