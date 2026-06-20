# 0707 — UUIDv5 (name-based)

The `uuid` library generates a UUIDv5 with `v5(name, namespace)`. UUIDv5 hashes the namespace and name with SHA-1, so it is deterministic: the same `(namespace, name)` pair always yields the same UUID. Here we use the built-in DNS namespace (`v5.DNS` = `6ba7b810-9dad-11d1-80b4-00c04fd430c8`) and the name `example.com`.

## Run

    node main.js
