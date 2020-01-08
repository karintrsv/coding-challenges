/*
 * Challenge from a friend. Idk where he got it
 *
 * INPUT
 *  1 positive integer x. Where 7 < x < 10000
 *
 * GOAL
 * For a given input N, find an series of number A where:
 *  the sum of all numbers in A is N;
 *  A is sorted in non-decreasing order;
 *  the last element and first element of A should have a difference of 1;
 * 
 * Find the length of A and A itself
 *
 * example input
 * 80
 * expected output
 * 3
 * 26 27 27
 */

split = n => {
    const findDivisor = div => {
        if (n%div!=0) return div
        return findDivisor(div+1)
    }
    const arrLength = findDivisor(2)
    const base = Math.floor(n/arrLength)
    const difference = n - base * arrLength

    let result = Array(arrLength).fill(base)
    result.splice(arrLength - difference, difference, ...Array(difference).fill(base+1))

    console.log(arrLength)    
    console.log(result.join(' '))
}