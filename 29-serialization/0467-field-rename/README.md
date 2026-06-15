# 0467 — Field rename

Map a code field name to a different JSON key. Uses JavaScript's built-in `JSON` (`JSON.stringify`) together with the `toJSON()` serialization hook: the class stores the value under the code field `fullName`, and `toJSON()` returns an object using the renamed key `full_name` so the emitted JSON is `{"full_name":"alice"}`.

## Run

    node main.js
