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
