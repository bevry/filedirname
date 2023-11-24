# History

## v3.0.0 2023 November 24

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Minimum required Node.js version changed from `node: >=10` to `node: >=4` adapting to ecosystem changes

## v2.11.0 2023 November 21

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.10.0 2023 November 15

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.9.0 2023 November 14

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.8.0 2023 November 1

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
-   Updated license from [`MIT`](http://spdx.org/licenses/MIT.html) to [`Artistic-2.0`](http://spdx.org/licenses/Artistic-2.0.html)

## v2.7.0 2021 July 30

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.6.0 2021 July 29

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.5.0 2021 July 28

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v2.4.0 2020 October 29

-   Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

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
