function operation(attempt) {
  if (attempt < 3) throw new Error("fail");
  return "ok";
}

const maxAttempts = 5;
for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  try {
    operation(attempt);
    console.log(`ok after ${attempt}`);
    break;
  } catch {
    // retry
  }
}
