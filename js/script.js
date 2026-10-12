const formAddTask = document.getElementById("form-add-task") // форма создания новой задачи
const inputTask = document.getElementById("name") // элемент куда пользователь вводит название новой задачи
const container = document.querySelector(".tasks") // контейнер со списком задач
let tasks = [] //  массив задач


// делаем функционал добавления задач
formAddTask.addEventListener('submit', function (event) {
    event.preventDefault() // отменяется событие по умолчанию (перезагрузка)
    let nameTask = inputTask.value; // считываем что пользователь ввел в название задачи
    let newTask = document.createElement("div") // сщздаём пустой div для задачи
    newTask.innerHTML = `<span>${nameTask}</span>` // надо именно inntr.HTML и добавляем текст задачи в div
    newTask.classList.add('task') // добавляем у div класс task
    container.append(newTask) // добавляем задачу в контейнер задач

    tasks.push(nameTask) // добавляем задачу в массив


})



// функционал - перевести все задачи в нижние регистр

const btnLowCase = document.getElementById("lowCase")
btnLowCase.addEventListener('click', function () {
    let newTasks = [...tasks] // создаю новый масив на базе основного

    for (let i = 0; i < newTasks.length; i++) { // перебераем все элементы массива 
        newTasks[i] = newTasks[i].toLowerCase() // переводим каждую задачу в нижний регистр
    }


    container.innerHTML = ""; // очищаем контейнер

    for (let i in newTasks) { // перебираем массив и для каждого элемента создаём запись в контейнере
        let newTask = document.createElement("div") // сщздаём пустой div для задачи
        newTask.innerHTML = `<span>${newTasks[i]}</span>` // надо именно inntr.HTML и добавляем текст задачи в div
        newTask.classList.add('task') // добавляем у div класс task
        container.append(newTask) // добавляем задачу в контейнер задач

    }



})

// сортировка по имени задачи по алфавиту

const btn1 = document.getElementById("btn1")
function compare(a, b) {
    if (a.querySelector("span").innerHTML > b.querySelector("spain").innerHTML) return 1
    if (a.querySelector("span").innerHTML == b.querySelector("spain").innerHTML) return 0
    if (a.querySelector("span").innerHTML < b.querySelector("spain").innerHTML) return -1
}
btn1.addEventListener("click", function(){
    let newTasks = [...tasks].sort(compare)
    container.innerHTML = "";
    for (let i in newTasks){
        container.append(newTasks[i])
    }
})


