class BankAccount{
	    constructor(firstName, middleName, lastName, accountType, status, initialBalance){
	        this.firstName = firstName
	        this.middleName = middleName
	        this.lastName = lastName
	        this.accountType = accountType
	        this.status = status
	        this.initialBalance = initialBalance
	    }
	
	    createAccount(initialBalance){
	        if(initialBalance >= 100){
	            console.log("Account Open")
	        }else{
	            console.log("Sorry, we cannot open an account for you at this time.")
	        }
	    }
	}
	
	// Bank Account creation 
	
	let bankAccount = new BankAccount("Mary", "Jane", "Doe", "Checking", "Open", 290) 
	bankAccount.createAccount(290)