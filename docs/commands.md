---
id: commands
title: Reading Commands
---

:::tip

To view all commands, use `a!help`. You can also use `a!help <command>` to view
much more in-depth information about a certain command

:::

There's a few tips you should know when reading documentation for a certain
command so it's easier to understand.

## Notation

When displaying command usages, a certain notation is used. Take the `a!start`
command for example:

```
a!start <playlist> [--goal <number>] [--answers <artist | song | all>]
```

You might be wondering, "what does `<>`, `[]`, and `|` mean?" Here's a useful
table to look back on:

|      Character      | Meaning  |
| :-----------------: | :------: |
|        `<>`         | Required |
|        `[]`         | Optional |
| <code>&#124;</code> |    Or    |

So, correct usages of `a!start` would include:

```
a!start example
a!start example --answers song
a!start example --goal 10
a!start example --goal 15 --answers artist
```

Incorrect usages would include:

```
a!start --goal 10
a!start example --answers pineapple
a!start example --goal pineapple
a!start example --goal --answers
```

## Argument Quotations

It can be frustrating when Arima doesn't recognize the name of a playlist. One
of the main causes of this problem is argument quotations (mostly the lack
thereof).

The rule of thumb to follow is: "unless it's the last argument or only one word,
quote it"

For example, when using the `a!add-song` command, this isn't valid:

```
a!add-song My Playlist youtube.com/...
```

Instead, quote it.

```
a!add-song "My Playlist" youtube.com/...
```

This lets Arima know that it is all one argument. Another alternative is to not
put in any arguments when sending a command. If not given arguments, Arima will
prompt you for each one individually, so you can use as many words as you want.

:::tip

Do you want to suggest a new command? Please join our
[support server](https://discord.gg/qMsVeFpxWX)

:::
