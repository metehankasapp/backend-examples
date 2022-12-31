
//bi söz verilir olumlu veya olumsuz olarak döner reject olumsuz resolve olumludur.
const promise1 = new Promise((resolve, reject) => {
    resolve('veriler alındı');
    reject('bağlantı hatası');
});

console.log(promise1);

/* resolve için yani olumlu sonuç için bu metod kullanılır */


promise1
    .then(value => {
        console.log(value)
    }).catch(error => {
        /* reject için yani hata için bu metod kullanılır */
        console.log(error)
    })


