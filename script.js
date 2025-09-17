// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 



const bankAccount = {
    ownerName: "Max",
    accountNumber: "12345678",
    balance: 1000,
 
    

    deposit(amount){
        this.balance += amount
        alert(`гроші успішоно зараховані ваш баланс ${this.balance}`)
    },



    whithdraw(amount){
        if(amount > this.balance){
            alert("на вашому балансі недостатньо коштів")
        }else{
            this.balance -= amount
            alert(`гроші успішно списані з балансу сума на балансі ${this.balance}`)
        }
    }
}



if(confirm("ви бажаєте поповнити рахунок?")){
    const amount = Number(prompt("ведіть суму"))
    if(amount > 0){
        bankAccount.deposit(amount)
    }else{
        alert("некоректне число")
    }
}else if(confirm("ви бажаєте зняти гроші з рахунку?")){
    const amount = Number(prompt("ведіть суму"))
    if(amount > 0){
        bankAccount.whithdraw(amount)
    }else{
        alert("на вашому балансі недостатьно коштів")
    }
}else{
    console.log(`на вашому балансі ${bankAccount.balance}`);
}
console.log(bankAccount.balance);







// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


const weather = {
    temperature: 25,
    humidity: 60,    
    windSpeed: 10,



     checkFreezing(check){
        this.temperature = (Number(prompt("ведіть вашу температуру")))


        if(this.temperature < 0){
            alert("Температура нижче 0 градусів");
            return true;
     }else {
        alert("Температура вище або рівна 0 градусів")
        return false;
      }
     }, 
    }
weather.checkFreezing();



// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 


const user = {
    name: "Max",
    email: "max@examplegmail.com",
    password: "12345",

    login(){
        const inputEmail = prompt("ведіть вашу пошту");
        const inputPassword = prompt("ведіть ваш пароль");


        if(inputEmail === this.email && inputPassword === this.password){
            alert(`ласкаво просимо, ${this.name}`)
        }else {
            alert("ви вели невірний логін або пароль!")
        }
    }
} 
user.login();





// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 



const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,


    chekRating(){
        if(this.rating >= 8){
            return true;
        } else{
            return false;
        }
    }
}
console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);

console.log("Рейтинг вище 8:", movie.chekRating());
