
var carAnimation = bodymovin.loadAnimation({
    container: document.getElementById('flHiwRoadWrapper'),
    path: 'assets/animations/car_car.json',
    render: 'svg',
    loop: true,
    autoplay: true,
    clearTimeout: 5000,
    name: 'car moving on the road'
});
