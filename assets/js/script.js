"use script"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


// Меню бурнер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__right');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Sub menu open
document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.submenu-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();          // предотвратить переход по кнопке
            e.stopPropagation();         // не даём событию всплыть

            const parent = this.closest('.menu__link');

            // Закрываем другие активные пункты
            document.querySelectorAll('.menu__link.active').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });

            // Переключаем текущий пункт (открыть или закрыть)
            parent.classList.toggle('active');
        });
    });

    // Клик вне меню — закрывает всё
    document.addEventListener('click', function (e) {
        document.querySelectorAll('.menu__link.active').forEach(item => {
            item.classList.remove('active');
        });
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const toggles = document.querySelectorAll('.submenu-toggle');

//     toggles.forEach(toggle => {
//         toggle.addEventListener('click', function (e) {
//             if (window.innerWidth < 960) {
//                 const parent = this.closest('.menu__link');
//                 parent.classList.toggle('active');
//             }
//         });
//     });

//     // Optional: Close submenu on resize to larger screens
//     window.addEventListener('resize', function () {
//         if (window.innerWidth >= 960) {
//             document.querySelectorAll('.menu__link.active').forEach(item => {
//                 item.classList.remove('active');
//             });
//         }
//     });
// });

// -----------------------------------------------------------

 // Функция для прокрутки страницы вверх
 function scrollToTop() {
    // Прокручиваем страницу в начало с плавной анимацией
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Получаем кнопку для прокрутки вверх
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Добавляем обработчик события клика на кнопку
scrollToTopBtn.addEventListener("click", scrollToTop);

// Отслеживаем прокрутку страницы
window.onscroll = function() {
    // Если прокрутка больше 500px, показываем кнопку, иначе скрываем
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


//---------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const kcalElement = document.querySelector('.kcal');
    const proteinElement = document.querySelector('.protein');
    const fatsElement = document.querySelector('.fats');
    const carbsElement = document.querySelector('.carbs');
    const circleElement = document.querySelector('.circle');

    const proteinInput = document.getElementById('proteinInput');
    const fatsInput = document.getElementById('fatsInput');
    const carbsInput = document.getElementById('carbsInput');

    const pr = document.getElementById('pr');
    const ft = document.getElementById('ft');
    const cr = document.getElementById('cr');

    function updateChart(protein, fats, carbs) {
        const totalKcal = (protein * 4) + (fats * 9) + (carbs * 4);

        kcalElement.textContent = `${totalKcal} ккал`;
        proteinElement.textContent = `${protein} г білки`;
        fatsElement.textContent = `${fats} г жири`;
        carbsElement.textContent = `${carbs} г вуглеводи`;

        const total = protein + fats + carbs;
        const proteinPercentage = (protein / total) * 100;
        const fatsPercentage = (fats / total) * 100;
        const carbsPercentage = (carbs / total) * 100;

        circleElement.style.background = `conic-gradient(
            #48A9F8 0% ${proteinPercentage}%, /* protein */
            #FF8B3D ${proteinPercentage}% ${proteinPercentage + fatsPercentage}%, /* fats */
            #33CC99 ${proteinPercentage + fatsPercentage}% 100% /* carbs */
        )`;
    }

    function handleInputChange() {
        const protein = parseFloat(proteinInput.value) || 0;
        const fats = parseFloat(fatsInput.value) || 0;
        const carbs = parseFloat(carbsInput.value) || 0;

        updateChart(protein, fats, carbs);
    }

    proteinInput.addEventListener('input', handleInputChange);
    fatsInput.addEventListener('input', handleInputChange);
    carbsInput.addEventListener('input', handleInputChange);

    // Получение данных из HTML-элементов pr, ft, cr
    const initialProtein = parseFloat(pr.textContent) || 0;
    const initialFats = parseFloat(ft.textContent) || 0;
    const initialCarbs = parseFloat(cr.textContent) || 0;

    updateChart(initialProtein, initialFats, initialCarbs);
});



// -----------------------------------------------------------
// Получаем элемент липкого меню
// const stickyMenu = document.getElementById('stickyMenu');

// // Получаем позицию меню относительно верхней границы страницы
// const stickyMenuOffset = stickyMenu.offsetTop;

// // Функция для добавления класса при прокрутке
// function handleScroll() {
//     if (window.pageYOffset >= stickyMenuOffset) {
//         stickyMenu.classList.add('sticky');
//     } else {
//         stickyMenu.classList.remove('sticky');
//     }
// }
// // Слушаем событие прокрутки и вызываем функцию handleScroll
// window.addEventListener('scroll', handleScroll);


// Прокрутка при клике
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if(menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		
// 			if (iconMenu.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				iconMenu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			});
// 			e.preventDefault();
// 		}
// 	}
// }


//прикрепление файла в форме

// const formImage = document.getElementById('formImage');
// const formPreview = document.getElementById('formPreview');

// formImage.addEventListener('change', () => {
// 	uploadFile(formImage.files[0]);
// });

// function uploadFile(file) {
// 	if (!['image/jpeg', 'image/png', 'image/gif', 'image/pdf'].includes(file.type)) {
// 		alert('Разрешены только изображения!');
// 		formImage.value ='';
// 		return;
// 	}
// 	if (file.size > 2 * 1024 * 1024) {
// 		alert('Файл должен быть менее 2 МБ.');
// 		return;
// 	}
// 	var reader = new FileReader();
// 	reader.onload = function (e) {
// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
// 	};
// 	reader.onerror = function (e) {
// 		alert('Ошибка');
// 	};
// 	reader.readAsDataURL(file);
// }


//style main-bg
// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// };
// ibg();



