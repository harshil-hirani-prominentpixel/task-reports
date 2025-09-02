import type { Notes } from "../../types";

export function withdrawAmount(amount: number, notes: Notes) {
  const order = Object.keys(notes)
    .map(Number)
    .sort((a, b) => b - a);

  const memo = new Map<string, Notes | null>();

  function dfs(
    index: number,
    remaining: number,
    available: Notes
  ): Notes | null {
    if (remaining === 0) return {};
    if (index >= order.length) return null;

    const key = `${index}-${remaining}-${JSON.stringify(available)}`;
    if (memo.has(key)) return memo.get(key)!;

    const note = order[index];
    const maxUse = Math.min(Math.floor(remaining / note), available[note] || 0);

    for (let use = maxUse; use >= 0; use--) {
      const nextAvailable = {
        ...available,
        [note]: (available[note] || 0) - use,
      };
      const result = dfs(index + 1, remaining - note * use, nextAvailable);
      if (result) {
        if (use > 0) result[note] = (result[note] || 0) + use;
        memo.set(key, result);
        return result;
      }
    }

    memo.set(key, null);
    return null;
  }

  const withdrawn = dfs(0, amount, notes) || {};
  const withdrawnTotal = Object.entries(withdrawn).reduce(
    (sum, [note, qty]) => sum + Number(note) * qty,
    0
  );

  return { withdrawn, remaining: amount - withdrawnTotal };
}
