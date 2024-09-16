// работа с файлами и папками
const { error } = require('console');
const fs = require('fs');

//  readFile асинхронная функция; принимает 2 аргуемента: 
//  - путь к файлу и
//  - callback - функция, кторая сработает когда вызовем метод

// fs.readFile('./test.txt', (error, data)=>{
//     // error - объект ошибки, содерж. всю инфу об ошибке при чтении с файла 
//     // data - данные, кот. получаем при чтении
//     console.log(data.toString()); // преобразуем буфер в строку    
// });

//2способ использ. кодировки в качестве аргумента
// fs.readFile('./test.txt','utf8', (error, data)=>{

//     console.log(data); // преобразуем буфер в строку    
// });

// console.log('Just read test.txt file');

// ---------------------------------------
//    пишем в файл
//    метод асинхронный
// fs.readFile('./test.txt','utf8', (error, data)=>{
// //    2а аргумента: путь к файлу и данные, которые будут записаны
// //    3й callback функция - вернет ошибку, если она есть
// //  работа с папками
//     fs.mkdir('./files', () => {

//         fs.writeFile('./files/test2.txt',  `${data} New text`, (error)=>{
//             error ? console.log(error) :null;
//         });  
//     });   
// });

//   синхронный метод 
//   т.е. сначала создание папки а потом создание файла
fs.readFile('./test.txt','utf8', (error, data)=>{
    //  работа с папками
        fs.mkdirSync('./files', () => {});
    
        fs.writeFileSync('./files/test2.txt',  `${data} New text`, (error)=>{
           error ? console.log(error) :null;
        });           
});

// через 4 секунды удаляем файл
setTimeout(()=>{
// если файл существует - удаляем
  if (fs.existsSync('./files/test2.txt')) {
    fs.unlink('./files/test2.txt', ()=>{});
  }  
},4000);
// через 6 секунды удаляем папку(удалит и все файлы внутри папки)
setTimeout(()=>{
    if (fs.existsSync('./files')) {
        fs.rmdir('./files', ()=>{});
    }
  },6000);
    

