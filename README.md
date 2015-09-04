# avrgirl

![status not ready](https://img.shields.io/badge/status-not%20ready-red.svg)

![avrgirl logo](http://i.imgur.com/hFXbPIe.png)

## What is this?

The avrgirl project's purpose is to provide a NodeJS alternative to interacting with Atmel® AVR microchips. 'Interacting' is namely:

1. Flashing / reading EEPROM and flash memories
2. Setting / reading fuses
3. Managing microchip state
4. Support for all modern day programming devices (including those on Arduino boards)

## Current state

The following related packages have been released, more in the works:

1. [avrgirl-arduino](https://github.com/noopkat/avrgirl-arduino) - support for the Arduino platform
2. [avrgirl-chips-json](https://github.com/noopkat/avrgirl-chips-json) - Atmel® AVR chip config
3. [avrgirl-stk500v2](https://github.com/noopkat/avrgirl-stk500v2) - NodeJS implementation of the STK500v2 protocol
4. [avrgirl-ispmkii](https://github.com/noopkat/avrgirl-ispmkii) - support for the Atmel® AVRISP mkII programming device

## Future
This repository will become the 'kitchen sink' package with all avrgirl packages available as a single install and CLI / functional tool to access them.