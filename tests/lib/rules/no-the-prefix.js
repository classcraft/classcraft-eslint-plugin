/**
 * @fileoverview Please don&#39;t start a variable name with &#34;the&#34;
 * @author Simon Bélanger
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-the-prefix"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
    }
});

var ruleTester = new RuleTester();

ruleTester.run("no-the-prefix", rule, {

    valid: [
        {
            code: "const foo = \"bar\";",
        }
    ],

    invalid: [
        {
            code: "const theFoo = \"bar\";",
        }
    ]
});
