const express = require('express');
const BrandController = require('../controllers/BrandController');
const CategoryController = require('../controllers/CategoryController');
const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const ProfileController = require('../controllers/ProfileController');
const InvoiceController = require('../controllers/InvoiceController');

const AuthVerification = require('../middlewares/AuthVerification');



const router = express.Router();


//Brand Category
router.get('/BrandList',BrandController.BrandList);
router.get('/CategoryList',CategoryController.CategoryList);



//Product
router.get('/SliderList',ProductController.SliderList);
router.get('/ListByCategroy/:categoryID',ProductController.ListByCategroy);
router.get('/ListBySmilier/:categoryID',ProductController.ListBySmilier);
router.get('/ListByBrand/:brandID',ProductController.ListByBrand);
router.get('/ListByKeyWord/:keyword',ProductController.ListByKeyWord);
router.get('/ListReview',ProductController.ListReview);
router.get('/ProductDetails',ProductController.ProductDetails);
router.get('/ListByRemark/:remark',ProductController.ListByRemark);
router.get('/WishList',ProductController.WishList);
router.get('/CreateWistList',ProductController.CreateWistList);
router.get('/RemoveWistList',ProductController.RemoveWistList);
router.get('/CartList',ProductController.CartList);
router.get('/CreateCartList',ProductController.CreateCartList);
router.get('/RemoveCartList',ProductController.RemoveCartList);


//User
router.get('/UserLogin/:email',UserController.UserLogin);
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin);
router.get('/UserLogout',UserController.UserLogout);


//Profile
router.post('/CreateProfile',AuthVerification,ProfileController.CreateProfile);
router.get('/ReadProfile',AuthVerification,ProfileController.ReadProfile);
router.get('/UpdateProfile',AuthVerification,ProfileController.UpdateProfile);


//Invoice
router.get('/InvoiceCreate',AuthVerification,InvoiceController.InvoiceCreate);
router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList);
router.get('/InvoiceProductList',AuthVerification,InvoiceController.InvoiceProductList);
router.get('/PaymentSuccess',InvoiceController.PaymentSuccess);
router.get('/PaymentFail',InvoiceController.PaymentFail);
router.get('/PaymentCancel',InvoiceController.PaymentCancel);
router.get('/PaymentIPN ',InvoiceController.PaymentIPN);


module.exports = router;