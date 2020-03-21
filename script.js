//localStorage.setItem('number', 1); // внесли ключ значение в память браузера

//console.log(localStorage.getItem('number')); // получили значение

//localStorage.removeItem('number'); // удаление определенного значения

//localStorage.cleare(); // очистка всей памяти браузера

window.addEventListener("DOMContentLoaded", function() {

    let checkbox = document.getElementById('rememberMe'),
        checkboxTwo = document.getElementById('rememberMeTwo');

    if(localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true;
    };

    checkbox.addEventListener("click", function() {
        localStorage.setItem("isChecked", true);
    });
    checkboxTwo.addEventListener("click", function() {
        localStorage.removeItem("isChecked");
    });

    let persone = {
        name: "Alex", //свойство переменной
        age:25, //свойство переменной
        tech: ["mobile", "notebook"] //свойство переменной
    };

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem("Alex", serializedPersone);
    console.log(JSON.parse(localStorage.getItem("Alex")));


});