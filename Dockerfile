# Simple usage with a mounted data directory:
# > docker build -t blogd_9867 .
# > docker run -it -p 26657:26657 -p 26656:26656 -v ~/.blogd:/blog/.blogd -v ~/.chainmaincli:/blog/.chainmaincli cryptocom/blog blogd init [moniker] [flags]
# > docker run -it -p 26657:26657 -p 26656:26656 -v ~/.blogd:/blog/.blogd -v ~/.chainmaincli:/blog/.chainmaincli cryptocom/blog blogd start
FROM golang:alpine AS build-env
ARG NETWORK=testnet
# Set up dependencies
ENV PACKAGES curl make git libc-dev bash gcc linux-headers eudev-dev python3
# Set working directory for the build
WORKDIR /home/pushkarshetye/blockchain/blog
# Add source files
COPY . .
# Install minimum necessary dependencies, build Cosmos SDK, remove packages
RUN apk add --no-cache $PACKAGES && \
    git submodule update --init --recursive && \
    NETWORK=${NETWORK} make install
# Final image
FROM alpine:edge
ENV CHAIN_MAIN /blog
# Install ca-certificates
RUN apk add --update ca-certificates
RUN addgroup blog && \
    adduser -S -G blog blog -h "$CHAIN_MAIN"
USER blog
WORKDIR $CHAIN_MAIN
# Copy over binaries from the build-env
COPY --from=build-env /go/bin/blogd /usr/bin/blogd
# Run blogd by default, omit entrypoint to ease using container with blogcli
CMD ["blogd"]