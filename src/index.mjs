/**
 * Resolve nullish coalescing operator (??) compatibility issues
 * @param { any } leftValue
 * @param { any } rightValue
 * @returns { leftValue | rightValue }
 */
export default (leftValue, rightValue) => ([null, void 0].indexOf(leftValue) === -1 ? leftValue : rightValue)

// export default (leftValue, rightValue) => (leftValue !== null && leftValue !== void 0 ? leftValue : rightValue)

// export default (leftValue, rightValue) => ([null, void 0].includes(leftValue) ? rightValue : leftValue)
