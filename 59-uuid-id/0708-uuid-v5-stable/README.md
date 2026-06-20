# 0708 — UUIDv5 is stable

This lesson uses the real `uuid` library. UUIDv5 is name-based and hashes the
pair `(namespace, name)` with SHA-1, so it is fully deterministic: generating
`v5("example.com", v5.DNS)` twice yields the identical UUID. We generate it
twice and print whether the two results are equal (`true`).

## Run

    node main.js
