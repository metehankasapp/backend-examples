/* function getData(data) {
    return new Promise((resolve, reject) => { // promise dönüyoruz.
        console.log("Veriler alınmaya çalışılıyor..");

        if (data) {
            resolve("Verilen alındı");
        } else {
            reject("Veriler alınamadı");
        }
    });
}

function cleanData(receivedData) { // promise dönüyoruz.
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor..");

        if (receivedData) {
            resolve("Verilen düzenlendi");
        } else {
            reject("Veriler düzenlenemedi");
        }
    });
} */


/* getData(true)
    .then(result => {
        console.log(result);
        return cleanData(false)
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    }) */










// Async - Await

/* 
        1-promise'e göre yazımı daha kolay.
        2-işlemlerin takibini kolaylaştırıyor.
        3-async await içinde hatayı yakalamak için try catch kullanılır

 */

/* async function processData() {
    try {
        // veriler almaya çalışılıyor ( aşağıdaki await işlemi getData fonksiyonu tamamen çalışaıp bitene kadar aşağıdaki fonksiyona geçmez ve bekler)
        const receivedData = await getData(true);

        // veriler alındı
        console.log(receivedData);

        // veriler düzenleniyor
        const cleanedData = await cleanData(false);

        // veriler düzenlendi
        console.log(cleanedData);
    } catch (error) {
        console.log(error);
    }

}


processData(); */




















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
        resolve(books);
        /*  reject('Bir hata oluştu'); */
    })

    return promise1;
}



async function showBooks() {
    try {
        await addBook({ name: 'Kitap 20', author: 'Yazar 20' });
        listBooks();
    } catch (err) {
        console.log(err);
    }
}

showBooks();

/* 
addBook({ name: 'Kitap 10', author: 'Yazar 10' }).then(() => {
    console.log('YENİ LİSTE')
    listBooks();
}).catch((error) => {
    console.log(error);
}); */
