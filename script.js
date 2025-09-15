// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 



const bankAccount = {
    ownerName: "Max",
    accountNumber: "12345678",
    balance: 1000,


    deposit(amount){
        this.balance += amount;
        alert(`гроші успішно зараховані на рахунок ${this.balance}`)
    },

    withdraw(amount){
        if(amount > this.balance){
           alert("недостатньо коштів на рахунку");
        }else{
            this.balance -= amount;
            alert(`гроші успішно списані з балансу ${this.balance}`)
        }
    }
}



if(confirm("ви хочете попвнити рахунок")){
    const amount = Number(prompt("ведіть суму"))
    if(amount > 0) {
        bankAccount.deposit(amount);
    }else{
        alert("некоректна сума");
    }
}else if (confirm("ви хочете зняти з рахунку")){
    const amount = Number(prompt("ведіть суму"))
    if(amount > 0){
        bankAccount.withdraw(amount);
    }else{
        alert("некоректна сума")
    }
}else{
    alert(`ваш баланс ${bankAccount.balance}`)
}