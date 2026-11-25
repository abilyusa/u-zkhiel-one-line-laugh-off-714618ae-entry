# One-Line Laugh-Off

[![One-Line Laugh-Off](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/competitions/u-zkhiel-one-line-laugh-off-714618ae)
[![Rank](https://make.fun/badge/abilyusa/u-zkhiel-one-line-laugh-off-714618ae-entry/rank.svg)](https://make.fun/competitions/u-zkhiel-one-line-laugh-off-714618ae)
[![Reward](https://make.fun/badge/abilyusa/u-zkhiel-one-line-laugh-off-714618ae-entry/reward.svg)](https://make.fun/competitions/u-zkhiel-one-line-laugh-off-714618ae)

One funny line, written by `main.ts` to `entry.txt`:

> I asked my AI agent to fix one bug; it filed a bounty report against itself and claimed the reward.

## How it works

Run with Node 22:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-laugh node main.ts
```

This writes the single joke (99 characters, one line) to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falling back to `/output` when `MAKEFUN_OUTPUT_DIR` is not set).

## License

MIT — see [LICENSE](LICENSE).
