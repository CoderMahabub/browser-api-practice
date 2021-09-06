// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 

const productNameField = document.getElementById('product-name');
const productPriceField = document.getElementById('product-price');
const addBtn = document.getElementById('add-btn');
const productList = document.getElementById('products-list');

// Getting Input Field Value
addBtn.addEventListener('click', () => {
    const productName = productNameField.value;
    const productPrice = productPriceField.value;
    if (!(productPrice && productPrice)) {
        return;
    }

    // Insert Data to Storage
    insertDataToStorage(productName, productPrice);

    //Show data to UI
    displayDataInUi();

    //Clearing Input Value
    productNameField.value = '';
    productPriceField.value = '';
})


// Getting data from localStorage
const getDataFromLocalStorage = () => {
    const cart = localStorage.getItem('product');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
        // console.log(cartObject);
    } else {
        cartObject = {};
    }
    return cartObject;
}
getDataFromLocalStorage()


// Inserting Data To LocalStorage
const insertDataToStorage = (name, price) => {
    const cart = getDataFromLocalStorage();
    cart[name] = price;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('product', cartStringified);
}

const displayDataInUi = () => {
    const cart = getDataFromLocalStorage();
    productList.innerHTML = '';
    for (const product in cart) {
        const li = document.createElement('li');
        li.classList.add('bg-primary', 'mb-1', 'py-1', 'px-5', 'text-light', 'fw-bold')
        li.innerHTML = `
        ${product} = ${cart[product]} Taka
        `;
        productList.appendChild(li);
    }
}
displayDataInUi();