# Unexpected Null Handling in JavaScript

This repository demonstrates a subtle bug in a JavaScript function related to null handling and type coercion. The `foo` function is intended to add two numbers but incorrectly handles cases where arguments are loosely equivalent to null (0, false, empty strings).  The solution addresses this by explicitly checking for both strict null and loosely coerced null-like values. 

## Bug Description:
The original `foo` function only explicitly checks for strict null (`=== null`).  This leads to unexpected behavior when passing in values like 0, false, or an empty string which are considered 'falsy' in JavaScript and would lead to unexpected results if not handled explicitly. The solution demonstrates how to improve the function to correctly handle those cases.