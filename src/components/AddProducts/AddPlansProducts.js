import React, { useState } from 'react'
import { storage, db } from '../firebase'

export const AddPlansProducts = () => {

    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [productImg, setProductImg] = useState(null);
    const [productDesc, setProductDesc] = useState('');
    const [productIngred, setProductIngred] = useState('');
    const [productPrice, setProductPrice] = useState('300');  

    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg' , 'image/jpg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('PlanProducts').add({
                        ProductName: productName,
                        ProductTYPE: productType,
                        ProductImg: url,
                        ProductDesc: productDesc,
                        ProductIngred: productIngred,
                        ProductPrice: Number(productPrice)
                    }).then(() => {
                        setProductName('');
                        setProductType('')
                        setProductImg('');
                        setProductDesc('');
                        setProductIngred('');
                        setProductPrice('300')
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

    return (
        <div className='container'>
            <br />
            <h2>ADD PRODUCTS</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />
                <label htmlFor="product-Type">Product Type</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductType(e.target.value)} value={productType} />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <input type="file" className='form-control' id="file" required
                    onChange={productImgHandler} />
                <br />
                <label htmlFor="product-name">Product Description</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductDesc(e.target.value)} value={productDesc} />
                <br />
                <label htmlFor="product-name">Product Ingredients</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductIngred(e.target.value)} value={productIngred} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        </div>
    )
}