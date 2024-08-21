function product(name, category, price, imageURL) {
    return {
        name: name,
        category: category,
        price: price,
        imageURL: imageURL,
    };
}

function Makeproduct() {
    return {
        list: [],
        addProduct: function (name, category, price, imageURL) {
            const item = product(name, category, price, imageURL);
            this.list.push(item);
        },
        displayProducts: function (filteredList = this.list) {
            $('#market').empty();
            for (let i = 0; i < filteredList.length; i++) {
                const item = filteredList[i];
                $('#market').append(`
                    <div class="item">
                        <h2>${item.name}</h2>
                        <p>Price: $${item.price}</p>
                        <p>Category: ${item.category}</p>
                        <img src="${item.imageURL}" alt="${item.name} image" />
                    </div>
                `);
            }
        },
    };
}

const x = Makeproduct();

function createForm(item = {}) {
    const formHtml = `
        <div id="product-form">
            <h2>${item.name ? 'Edit Product' : 'Add a New Product'}</h2>
            <form id="form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value="${item.name || ''}" required><br><br>
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" value="${item.category || ''}" required><br><br>
                <label for="price">Price:</label>
                <input type="number" id="price" name="price" value="${item.price || ''}" required><br><br>
                <div id="prodimg">
                <label for="images">Product Pictures:</label>
                <input type="text" id="image" name="image-url" value="${item.imageURL || ''}" placeholder="Enter image URL" required><br><br>
                <div id="image-preview"></div> </div>
                <button id="subm" type="button">${item.name ? 'Update' : 'Submit'}</button>
                <button type="button" id="cancel-btn">Cancel</button>
            </form>
        </div>
    `;
    $('#formulaire').html(formHtml);
}

$(document).ready(function () {

    $('#addbtn').on('click', function () {
        createForm();
        $('#product-form').show();
    });

    $(document).on('click', '#cancel-btn', function () {
        $('#product-form').hide();
    });

    $(document).on('click', '#subm', function () {
        const name = $("#name").val();
        const category = $("#category").val();
        const price = $("#price").val();
        const imageURL = $("#image").val();

        if (!imageURL) {
            alert('Please provide an image URL.');
            return;
        }
        x.addProduct(name, category, price, imageURL);
        x.displayProducts();
    });

    $('#filter-btn').on('click', function () {
        const category = $('#category-filter').val()
        if (category) {
            const filteredProducts = filterByCategory(x.list, category);
            x.displayProducts(filteredProducts);
        } else {
            x.displayProducts(); 
        }
    });
});

function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
        if (predicate(element, index)) {
            acc.push(element);
        }
    });
    return acc;
}

function filterByCategory(products, category) {
    return filter(products, function (item) {
        return item.category.toLowerCase() === category.toLowerCase();
    });
}
