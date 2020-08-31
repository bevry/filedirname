# History

## v1.0.2 2020 August 31

-   Better Deno compatibility when loaded remotely, by using [`import { URL } from 'url'`](https://github.com/denoland/deno/pull/7132) which has landed in [Deno v1.3.2](https://github.com/denoland/deno/releases/tag/v1.3.2)

## v1.0.1 2020 August 18

-   Support cases where `import.meta.url` uses the `https:` protocol

## v1.0.0 2020 August 18

-   Initial working release
