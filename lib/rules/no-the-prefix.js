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
            recommended: true,
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            VariableDeclarator(node) {
                const { name } = node.id;

                if (!name) {
                    return;
                }

                const fourthChar = name.charAt(3);

                if (name.startsWith("the") && fourthChar && fourthChar === fourthChar.toUpperCase()) {
                    context.report(node, "Please don't start a variable name with \"the\"")
                }
            }
        };
    }
};
