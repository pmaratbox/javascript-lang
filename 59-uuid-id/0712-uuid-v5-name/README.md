# 0712 — UUIDv5 of another name

The `uuid` library generates a UUIDv5 with `v5(name, namespace)`. UUIDv5 hashes the namespace and name with SHA-1, so it is deterministic and name-dependent: changing the name changes the result. Using the built-in DNS namespace (`v5.DNS` = `6ba7b810-9dad-11d1-80b4-00c04fd430c8`) with the name `test.com` yields a different UUID than `example.com` did in lesson 0707.

## Run

    node main.js
