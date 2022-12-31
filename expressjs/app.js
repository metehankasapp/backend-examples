const express = require('express');
const app = express();
const path = require('path');




const bodyParser = require('body-parser');

// aşağıdaki kod ise expressin css,img dosyalarının kullanabilmemizi sağlar
app.use(express.static(path.join(__dirname, 'public')));


// admin route çağırdık.
const adminRoutes = require('./routes/admin');
// user route çağırdık.
const userRoutes = require('./routes/user');


app.use(bodyParser.urlencoded({ extended: false }));


/* aşağıda yazdığım admin yazısı bir ön ektir ve anlmı şudur /admin */
app.use('/admin', adminRoutes);
app.use(userRoutes);



/* 404 sayfası */
app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, './', 'views', '404.html'))
})



/* aşağısı giriş ders yorumları kaldır */

// kullanıcının ana sayfası istendiği zaman gönderilcek
/* app.get('/', (req, res) => {
    res.send('Hello world');
})


// yönlendirme sorgusu
app.get('/api/products', (req, res) => {
    res.send('ürünler listelendi')
}) */




/*aşağısı middleware ders yorumları kaldır */

//middleware de next fonksiyonu demek ilk middleware işlemini tamamlar ve sonraki middleware e geçer.
//eğer next kullanmassak süreç biter ve bir response gönderir.
// use metodu daha geneldir.

/* app.use((req,res,next)=>{
    console.log("middleware 1 çalıştırıldı.")
    // next demezsek sadece middleware 1 çalıştırır.
    next();
})

app.use((req,res,next)=>{
    console.log("middleware 2 çalıştırıldı.");
    res.send('<h1>hello from express.js</h1>');
}) */





/*aşağısı routing ders yorumları kaldır */



// en genel url en aşağıda olmalıdır.

//burda ilk dersten farklı olarak '/' ile başlayan her dizinde bu fonksiyonu çalıştırı anlamına gelir.ilk derste ise sadece ana dizinde çalışırdı
/* app.use('/', (req, res, next) => {
    console.log('loglama yapıldı...');
    next();
})

//burda ilk dersten farklı olarak '/add-product' ile başlayan her dizinde bu fonksiyonu çalıştırı anlamına gelir.
app.use('/add-product', (req, res, next) => {
    res.send('<h1>adding product page</h1>');
})

app.use('/product-list', (req, res, next) => {
    res.send('<h1>product listing page</h1>');
})

//burda ilk dersten farklı olarak '/' ile başlayan her dizinde bu fonksiyonu çalıştırı anlamına gelir.ilk derste ise sadece ana dizinde çalışırdı
app.use('/', (req, res, next) => {
    res.send('<h1>hello from express.js</h1>');
}) */






/*aşağısı body parse ders yorumları kaldır */

// npm install body-parser kurulur.



/* app.use('/add-product', (req, res, next) => {
    res.send(
        `<html>
            <head>
                <title>Add a New Product</title>
            </head>
            <body>
                <form action="product" method="POST">
                    <input type="text" name="productName">
                    <input type="submit" value="Save Product">
                </form>
            </body>
        </html>`
    );
})

//app.use olursa her seferinde boş olsa bile add-product gitmeden bile bu sefer boş obje döner ama sadece post işleminde çalıştırmak istiyorsak app.post yaparız.ve bu şekilde yazdığımızda yölnedirme hemen yapmaz.eğer post yapılmısşa yönlendirme yapar
app.post('/product', (req, res, next) => {
    // database kayıt yapılabilir bilgiler yapılabilir.
    console.log(req.body);

    //kulanıcıy farklı sayfaya gönderebiliriz.aşağıdaki kod ana sayfaya yönlendirir.
    res.redirect('/');
})


 */
/* app.use('/', (req, res, next) => {
    res.send('<h1>hello from express.js</h1>');
}) */


// app başladığı zaman yapılıcak fonksyion
app.listen(3000, () => {
    console.log('listening on port 3000');
});






