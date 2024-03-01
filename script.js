class Observer1 {
    constructor(name) {
        this.name = name;
    }

    update( num ) {
        console.log(` Phone Number: ${num}`);
    }
}

class Observer2 {
    constructor( name ) {
        this.name = name;
    }

    update( num ) {
        console.log(` Now Dialling ${num}... `);
    }
}


class Telephone  {
    constructor() {
        this.contactList = [];
        this.observers = new Set();
    }

        // PHONE NUMBER METHODS
    addPhoneNumber( num ) {
        if (this.contactList.includes( num ) ) {
            console.log(` ${num} already exists in Contact list! `);
        }
        else {
            this.contactList.push( num );
            console.log(` ${num} added to Contact list! `);
        }
    }

    removePhoneNumber( num ) {
        if (this.contactList.includes( num )) {
            this.contactList = this.contactList.filter( contact => contact !== num );  //this.contactlist contains a new array of the elements we don't want to remove
            
            console.log(` ${num} removed from Contact list! `);
        }
        else {
            console.log(` Cannot remove ${num} as it does not exist in the Contact list! `);
        };
        
    };


    // NOTE: MAKE SURE OBSERVERS ARE ADDED TO THE DIRECTORY BEFORE CALLING THIS DIAL PHONE-NUMBER METHOD
    dialPhoneNumber( num ) {
        if (this.contactList.includes( num )) {
            this.notifyObservers( num );   //notify observers that a number has been dialled
        }
        else {
            console.log(` Unable to dial non-existing Contact: ${num} `);
        }
    }

   
        // OBSERVER METHODS
    addObservers( obs ) {
        if (this.observers.has( obs )) {
            console.log(` ${obs.name} is already an Observer! `);
        }
        else {
            this.observers.add( obs );
            console.log(` ${obs.name} added to Observer list! `);
        }
       
    }

    removeObservers( obs ) {
        if (this.observers.has( obs )) {
            this.observers.delete( obs );
            console.log(` ${obs.name} removed!`);
        }
        else {
            console.log(` ${obs.name} is not an observer! `);
        }
    }

    notifyObservers( num ) {
        this.observers.forEach( observer => {
            observer.update(num);
        })
    }
}



// CREATING DIRECTORY
const directory1 = new Telephone();


// CREATING OBSERVERS
const obs1 = new Observer1('Obs-2');
const obs2 = new Observer2('Nenye');


// ADDING OBSERVERS TO THE DIRECTORY
directory1.addObservers(obs1);
directory1.addObservers(obs2);


// ADDING PHONE NUMBERS TO THE DIRECTORY
directory1.addPhoneNumber(50);
directory1.addPhoneNumber(2347023232);
directory1.addPhoneNumber(300);
directory1.addPhoneNumber(300);


// REMOVING PHONE NUMBERS FROM THE DIRECTORY
directory1.removePhoneNumber(50);
directory1.removePhoneNumber(800);


//DIALLING PHONE NUMBERS
directory1.dialPhoneNumber(50);
directory1.dialPhoneNumber(2347023232);