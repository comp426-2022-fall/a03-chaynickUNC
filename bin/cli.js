#!/usr/bin/env node


import { roll } from "../lib/roll.js"

import minimist from "minimist"
var argv = minimist(process.argv.slice(2));
console.log(roll(argv["sides"], argv["dice"], argv["rolls"]));
