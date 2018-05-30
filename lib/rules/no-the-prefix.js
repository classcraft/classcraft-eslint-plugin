/**
 * @fileoverview Please don't start a variable name with "the"
 * @author Simon Bélanger
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
    meta: {
        docs: {
            description: "Please don't start a variable name with \"the\"",
            category: "classcraft",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            VariableDeclarator(node) {
                if (node.id.name.startsWith("the")) {
                    context.report(node, "Please don't start a variable name with \"the\"")
                }
            }
        };
    }
};
