const $submit= document.getElementById("Placeanorder")
const $rb1Container= document.getElementById("rb1")
const $rb2Container= document.getElementById("rb2")
const $rb3Container= document.getElementById("rb3")
const $rb4Container= document.getElementById("rb4")
const $rb5Container= document.getElementById("rb5")

$submit.addEventListener('click', (event) => {
    event.preventDefault()
    window.history.back()
    alert(JSON.stringify("Подтвердите введённые данные"))
})

document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});

$rb1Container.addEventListener('click',(event) => {
    console.log("Днепровский переулок, 4");
})
$rb2Container.addEventListener('click',(event) => {
    console.log("Адмирала Юмашева, 6");
})
$rb3Container.addEventListener('click',(event) => {
    console.log("Бестужева, 23");
})
$rb4Container.addEventListener('click',(event) => {
    console.log("Гамарника, 19");
})
$rb5Container.addEventListener('click',(event) => {
    console.log("40 лет ВЛКСМ, 4");
})