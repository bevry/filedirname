# History

## v2.3.0 2020 September 4

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.2.0 2020 September 4

-   Properly build to include support for CommonJS environment and Node 10 and above (intention of v2.0.0)
-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.1.0 2020 September 4

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.0.0 2020 September 3

-   Breaking Changes: Return signature changed to a named tuple
    -   Change `const { __filename, __dirname } = filedirname()` to `const [ __filename, __dirname ] = filedirname()`
-   Now also compatible with CommonJS environments
-   Introduced `filedirnameFromPath(path: string)`, `filedirnameFromError(error: Error)`, `filedirnameFromCaller()`
-   Overloaded the default `filedirname` export, to support each of the above
-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v1.0.2 2020 August 31

-   Better Deno compatibility when loaded remotely, by using [`import { URL } from 'url'`](https://github.com/denoland/deno/pull/7132) which has landed in [Deno v1.3.2](https://github.com/denoland/deno/releases/tag/v1.3.2)

## v1.0.1 2020 August 18

-   Support cases where `import.meta.url` uses the `https:` protocol

## v1.0.0 2020 August 18

-   Initial working release
