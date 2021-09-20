FROM rust:slim-buster
LABEL email="dev_bjun@meshyarn.io"
LABEL name="devbjune"
LABEL version="1.0.0"
LABEL version_solana="stable"
LABEL version_rust="stable"
LABEL version_node="lts"
LABEL description="This images is for easily building smart contract using C/Rust language for solana blockchain."
WORKDIR /home
COPY --from=solanalabs/solana:stable /usr/bin/sdk /usr/bin/sdk
COPY --from=solanalabs/solana:stable /usr/bin/cargo* /usr/bin/sol* /usr/bin/
COPY --from=node:lts-buster-slim /usr/local/bin/node /usr/local/bin/node
COPY --from=node:lts-buster-slim /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node:lts-buster-slim /opt/yarn-v1.22.5 /opt/yarn-v1.22.5
RUN ln -s /usr/local/bin/node /usr/local/bin/nodejs
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
RUN ln -s /opt/yarn-v1.22.5/bin/yarn /usr/local/bin/yarn
RUN ln -s /opt/yarn-v1.22.5/bin/yarnpkg /usr/local/bin/yarnpkg
RUN apt-get update && apt install -y make curl bzip2
RUN /usr/bin/sdk/bpf/scripts/install.sh