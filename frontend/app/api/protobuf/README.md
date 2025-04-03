# spacebar-apis

## Build

(optional) Set GITHUB_TOKEN: If `GITHUB_TOKEN` is not set in the docker image, set `GITHUB_TOKEN` in `docker-image` of the `Makefile` file and then run `make docker-image`. Afterwards, you can revert the settings.

1. Build proto:

   ```bash
   make build
   ```


## Release

### typescript-grpcjs package

When this repository has been [relesed](https://github.com/ao-labs/spacebar-apis/releases),
1. Version up the typescript-grpcjs package using the release tag.
2. Publish the typescript-grpcjs package to the [Github registry](https://github.com/ao-labs/spacebar-apis/pkgs/npm/spacebar-apis).
