const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Welcome to the Home Page! Use /admin or /user to navigate.');
});


const adminRouter = express.Router();
adminRouter.get('/home', (req, res) => {
    res.render('home', { title: 'Admin Home', userType: 'Admin' });
});
adminRouter.get('/about', (req, res) => {
    res.render('about', { title: 'Admin About', userType: 'Admin' });
});
adminRouter.get('/contact', (req, res) => {
    res.render('contact', { title: 'Admin Contact', userType: 'Admin' });
});


const userRouter = express.Router();
userRouter.get('/home', (req, res) => {
    res.render('home', { title: 'User Home', userType: 'User' });
});
userRouter.get('/about', (req, res) => {
    res.render('about', { title: 'User About', userType: 'User' });
});
userRouter.get('/contact', (req, res) => {
    res.render('contact', { title: 'User Contact', userType: 'User' });
});


app.use('/admin', adminRouter);
app.use('/user', userRouter);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
