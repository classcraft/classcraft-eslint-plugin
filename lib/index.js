/**
 * @fileoverview Clascraft ESLint Plugin
 * @author Simon Bélanger
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = requireIndex(__dirname + "/rules");
const recommendedRules = {};

Object.keys(rules).forEach((rule) => (recommendedRules[`classcraft/${rule}`] = 2));

// import all rules in lib/rules
module.exports = {
	rules,
	configs: {
		recommended: {
			plugins: ["classcraft"],
			rules: recommendedRules,
		},
	},
};
