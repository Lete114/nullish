/**
 * Resolve nullish coalescing operator (??) compatibility issues
 * @param { any } leftValue
 * @param { any } rightValue
 * @returns { leftValue | rightValue }
 */
module.exports = (leftValue, rightValue) => (null != leftValue ? leftValue : rightValue)

// module.exports = (leftValue, rightValue) => ([null, void 0].indexOf(leftValue) === -1 ? leftValue : rightValue)

// module.exports = (leftValue, rightValue) => ([null, void 0].includes(leftValue) ? rightValue : leftValue)
