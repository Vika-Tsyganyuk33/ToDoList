let some_1 = document.querySelector('.some_1');
let some_2 = document.querySelector('.some_2');
let inp = document.querySelector('.inp');
let tbody = document.querySelector('tbody');

let deleted = [];
let completed = [];

class ToDoList{
    constructor(name, something){
        this.name = name,
        this.something = something,
        this.date = new Date()
    }
}
let time = new Date();
inp.addEventListener('click',function(){
    tbody.insertAdjacentHTML('beforeend',
    `<tr>
        <td>${some_1.value}</td>
        <td>${some_2.value}</td>
        <td>${time}</td>
        <td><input type = "button" value = "Удалить событие" class = "Delete"></td>
        <td><input type = "button" value = "Выполнить событие" class = "Complete"></td>
    </tr>`);
    let deletedbody = document.querySelector('.deleted');
    let noevent = document.querySelectorAll('.Delete');
    noevent.forEach(item => item.addEventListener('click', function(){
        let trdelete = event.target.closest('tr');
        trdelete.remove();
        deletedbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${some_1.value}</td>
            <td>${some_2.value}</td>
            <td>${time}</td>
        </tr>`);
        some_1.value='';
        some_2.value='';
    }))

let completedbody = document.querySelector('.completed');
let yesevent = document.querySelectorAll('.Complete');
yesevent.forEach(item => item.addEventListener('click', function(){
    let trcomplete = event.target.closest('tr');
        trcomplete.remove();
        completedbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${some_1.value}</td>
            <td>${some_2.value}</td>
            <td>${time}</td>
        </tr>`);
        some_1.value='';
        some_2.value='';
}));
})