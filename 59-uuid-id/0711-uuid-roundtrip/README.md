# 0711 — Parse and format

The `uuid` library roundtrips a UUID through its byte representation: `parse()` decodes the uppercase string `550E8400-E29B-41D4-A716-446655440000` into a 16-byte array, and `stringify()` renders those bytes back into the canonical lowercase form. No new UUID is generated — the same identifier is re-emitted in its normalized textual shape.

## Run

    node main.js
