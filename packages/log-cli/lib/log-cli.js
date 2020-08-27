#!/usr/bin/env node

const { program } = require('commander')
const LogCore = require('log-core')

// action
program.action(cmd => LogCore())

program.parse(process.argv)
