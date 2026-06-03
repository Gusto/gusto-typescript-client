#!/bin/bash

# Install the speakeasy CLI
curl -fsSL https://raw.githubusercontent.com/speakeasy-api/speakeasy/main/install.sh | sh

# Setup samples directory
rmdir samples || true
mkdir samples

npm install --ignore-scripts
npm install -g ts-node --ignore-scripts
npm link
npm link @gusto/embedded-api-v-2026-02-01
TS_CONFIG_CONTENT=$(cat <<EOL
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "openapi": ["../src/index"],
      "openapi/*": ["../src/*"]
    }
  },
  "include": ["./**/*.ts"]
}
EOL
)
echo "$TS_CONFIG_CONTENT" > samples/tsconfig.json

# Generate starter usage sample with speakeasy
speakeasy generate usage -s https://raw.githubusercontent.com/api/v3/repos/Gusto/Gusto-Partner-API/contents/generated/embedded/api.v2026-02-01.embedded.yaml -l typescript -o samples/root.ts