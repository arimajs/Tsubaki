---
id: changelog
title: Changelog
---

:::caution

I may have forgotten to update this list! For a 100% up to date changelog,
please join Arima's
[support server](https://discord.com/api/oauth2/authorize?client_id=809547125397782528&permissions=3492928&scope=bot)

:::

## 1.2.0 (yes I skipped v1.1 do you want to fight me?)

- - Documentation Site (lets goooooo) • https://arima.fun
- Added `a!patreon` command • https://patreon.com/ArimaBot
- Added `a!invite` command
- Edited `a!help` command to be less overwhelming
- Added helpful links in `a!help`, `a!info`, and the message sent when joining
  the guide
- Corrected typo in `a!start` usage
- Renamed the `a!restrict-channels` command to `a!set-channels` (which has no
  practical affect as they both were and still are aliases)
- Removed `a!support` alias from `a!suggest` and moved it to the aforementioned
  `a!invite` command
- Edited the header of the "game start" embed from
  `"Game started in #channel (text) and #Channel (voice)"` to
  `"Hosted by host#0000"`
- Removed option to use `--help` flag on any command because it wasn't working
  and probably wouldn't've had any usage anyways

## 1.0.13

- You can no longer set your prefix to anything including `@`, `#`, or `:` to
  prevent overlap with channels, users, and emojis

## 1.0.12

- Incremented playlist's track count before display it's updated value

## 1.0.11

- Removed need for `DEAFEN_MEMBERS` and `MANAGE_MESSAGES` permissions

## 1.0.10

- All level and XP values will be floored to ensure there's no long train of
  decimals

## 1.0.9

- The bot prompts for permissions it doesn't need

## 1.0.8

- Fixed the filtering out of songs under 30s in playlists

## 1.0.7

- Win/loss ratio will now show percentage instead of decimal

## 1.0.6

- Fixed bug where a user will get points for guessing a song they skipped if
  they guess the song directly after

## 1.0.5

- Expanded on v1.0.3 and improved code style

## 1.0.4

- Added cooldowns to most commands to prevent spam

## 1.0.3

- Fixed a problem with the user reacting before the bot finishes displaying
  emojis

## 1.0.2

- Fixed a problem with not calculating song/playlist color in time

## 1.0.1

- Fixed the `a!set-channels` command

## 1.0.0

- We did it bois
