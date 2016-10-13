/**
 * Created by e.lebedeva on 12.10.2016.
 */
if (document.title == 'Nerds') {
    var slide1 = document.querySelector('.slide-1'),
        slide2 = document.querySelector('.slide-2'),
        slide3 = document.querySelector('.slide-3'),
        checkbox1 = document.querySelector('#radio-1'),
        checkbox2 = document.querySelector('#radio-2'),
        checkbox3 = document.querySelector('#radio-3');

    checkbox1.addEventListener('change', function () {
        slide2.classList.remove('active-slide');
        slide3.classList.remove('active-slide');
        slide1.classList.add('active-slide');
    });

    checkbox2.addEventListener('change', function () {
        slide1.classList.remove('active-slide');
        slide3.classList.remove('active-slide');
        slide2.classList.add('active-slide');
    });

    checkbox3.addEventListener('change', function () {
        slide1.classList.remove('active-slide');
        slide2.classList.remove('active-slide');
        slide3.classList.add('active-slide');
    });
}

var formBlock = document.querySelector('.contact-us'),
    btnContactUs = document.querySelector('.btn-contacts'),
    btnClose = document.querySelector('.btn-close');


btnContactUs.addEventListener('click', function (e) {
    e.preventDefault();
    formBlock.classList.toggle('contact-us-show');
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    formBlock.classList.remove('contact-us-show');
});