const coding = ['html', 'css', 'js', 'cpp']

const codeItem = coding.forEach( (index) => {
    // console.log(index)
    return index  // forEach() donot return something, it return undefined when you stoe it under a variable    
} )
// console.log(codeItem)

// If we want to return something than we donot use forEach methode
// 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const filter1 = numbers.filter( (nums) => nums > 5)
// console.log(filter1)

const filter2 = numbers.filter( (nums) => {
    return nums < 5
})
// console.log(filter2)


const library = [
    { title: 'book one', subject: 'fiction', publish: 1981, addition: 2004},
    { title: 'book two', subject: 'non-fiction', publish: 1992, addition: 2008},
    { title: 'book three', subject: 'history', publish: 1999, addition: 2007},
    { title: 'book four', subject: 'non-fiction', publish: 1989, addition: 2010},
    { title: 'book five', subject: 'science', publish: 2009, addition: 2014},
    { title: 'book one', subject: 'fiction', publish: 1981, addition: 2004},
    { title: 'book two', subject: 'non-fiction', publish: 1992, addition: 2008},
    { title: 'book three', subject: 'history', publish: 2009, addition: 2007},
    { title: 'book four', subject: 'non-fiction', publish: 1989, addition: 2010},
    { title: 'book five', subject: 'science', publish: 2009, addition: 2014},
]
// To check books according to subject:
const book = library.filter( (obj) => {
    return obj.subject === 'history'
})
// console.log(book)

// To check books according to publish date and subject:
const userBook = library.filter( (objects) => {
    return objects.publish >= 2000 && objects.subject === 'history'
})
// console.log(userBook)


// To check books according to publish date or subject:
const userBook2 = library.filter( (objects) => {
    return objects.publish >= 2000 || objects.subject === 'science'
})
console.log(userBook2) 

