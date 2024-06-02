// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

let arr = ["a", "b", "c"];

// '' (empty sequence)
// ['a']
// ['b']
// ['c']
// ['a', 'b']
// ['a', 'c']
// ['b', 'c']
// ['a', 'b', 'c']

// or

let str = "abc";

// '' (empty sequence)
// 'a'
// 'b'
// 'c'
// 'ab'
// 'ac'
// 'bc'
// 'abc'

// The total number of subsequences for a sequence of length n is: 2^n
