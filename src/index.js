/**
 * Resolve nullish coalescing operator (??) compatibility issues
 * @param { any } leftValue
 * @param { any } rightValue
 * @returns { leftValue | rightValue }
 */
module.exports = (leftValue, rightValue) => (leftValue !== null && leftValue !== void 0 ? leftValue : rightValue)
