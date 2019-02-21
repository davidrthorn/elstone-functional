// toMatrix converts an array or strings to a matrix
export const toMatrix = (arr, sep = '') => arr.map(row => row.split(sep))

// sortByRowLength returns a matrix with rows sorted by length
export const sortByRowLength = (matrix, desc=true) =>
    matrix.sort((a, b) => desc ? b.length - a.length : a.length - b.length)

// transpose returns a matrix rotated by 90 degrees, effectively turning rows into columns
export const transpose = matrix =>
    matrix[0].map(
        (_, i) =>
            matrix.map(row => row[i])
                .filter(x => x !== undefined)
    )


