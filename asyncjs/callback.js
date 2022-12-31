/* console.log('1. görev');
console.log('2. görev');
console.log('3. görev'); */





/* 
const func1 = ()=>{
    console.log('Func 1 tamamlandı')
}

const func2 = ()=>{
    console.log('Func 2 tamamlandı')
}

func2();
func1(); */





/* const func1 = () => {
    console.log('Func 1 tamamlandı');
    func3();
}

const func2 = () => {
    console.log('Func 2 tamamlandı')
}

const func3 = () => {
    console.log('Func 3 tamamlandı')
    func2();

}

func1(); */


/* 
let x = 5;
console.log(x);


setTimeout(() => {
    x = x + 5;
}, 2000)
console.log(x);

x = x + 5;
console.log(x);
 */






const books = [
    { name: 'Kitap 1', author: 'Yazar 1' },
    { name: 'Kitap 2', author: 'Yazar 2' },
    { name: 'Kitap 3', author: 'Yazar 3' },
];


const listBooks = () => {
    books.map((book) => {
        console.log(book.name)
    })
}



const addBook = (newBook, callback) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        //resolve(books);
        reject('Bir hata oluştu');
    })

    return promise1;
}



addBook({ name: 'Kitap 10', author: 'Yazar 10' }).then(() => {
    console.log('YENİ LİSTE')
    listBooks();
}).catch((error) => {
    console.log(error);
});
