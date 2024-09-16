// импортируем события
const EventEmitter =require('events');
// созадем экземпляр класса "событие"
const emitter =new EventEmitter();

//  слежение за событием
// 1й аргумент - some_event имя события за которым будем следить
// 2й - callback функция в качестве аргумента которой передаем некий текст
// и отображать его в консоли
// emitter.on('some_event',(text)=>{
//    console.log(text);
// } );

// вызываем событие, которое мы создали
// 1й аргумент - имя нашего события
// 2й - данные (в нашем случае текст, кот. выведем в консоли)
// emitter.emit('some_event', 'Event test text');


emitter.on('some_event', (args)=>{
    const {id, text}=args;
    console.log(id, text);
});

emitter.emit('some_event', {id:1, text: 'Event test text!'});

