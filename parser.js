function parseInstruction(s) {
  const parts = s.trim().split(/s+/);
  const op = parts[0];
  const args = parts.slice(1);
  return {op, args};
}

function parseCondition(s) {
  const parts = s.trim().split(/s+/);
  return parts.length === 1 ? {op: "check", args: parts[0]} : parseInstruction(s);
}
