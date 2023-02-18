// Function to get the menu
function getMenu() {
    fetch('https://free-food-menus-api-production.up.railway.app/burgers')
    .then(response => response.json())
    .then(data => {
        const menuList = document.getElementById('menu-list');
        data.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.innerText = `${item.name} - $${item.price}`;
            menuList.appendChild(menuItem);
        });
    })
    .catch(error => console.error(error));
}

// Function to take an order
function takeOrder() {
    const orderPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = ['burger1', 'burger2', 'burger3']; // Randomly select 3 burgers
            const order = {
                burgers: burgers
            };
            resolve(order);
        }, 2500);
    });
    orderPromise.then(order => {
        orderPrep(order);
    });
}

// Function to prepare an order
function orderPrep(order) {
    const orderPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = {
                order_status: true,
                paid: false
            };
            resolve(orderStatus);
        }, 1500);
    });
    orderPromise.then(orderStatus => {
        payOrder(orderStatus);
    });
}

// Function to simulate payment
function payOrder(orderStatus) {
    const paymentPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const paymentStatus = {
                order_status: true,
                paid: true
            };
            resolve(paymentStatus);
        }, 1000);
    });
    paymentPromise.then(paymentStatus => {
        if (paymentStatus.paid) {
            thankyouFnc();
        }
    });
}

// Function to display a thank you message
function thankyouFnc() {
    alert('Thank you for your payment!');
}

// Call the getMenu() function when the page loads
window.onload = getMenu;
