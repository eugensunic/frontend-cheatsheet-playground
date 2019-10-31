class Person {
  firstName = '';
  lastName = '';

  getPersonName() {
    return this.firstName;
  }
}

class Admin extends Person {
  constructor() {
    super();
  }
  taskAdmin(task: string) {
    console.log('Admin task is:', task);
  }
}

class Director {}

class Manager extends Person {
  constructor() {
    super();
  }
  taskManager(task: string) {
    console.log('Admin task is:', task);
  }
}

function personEcho<T extends Person>(person: T): T {
  return person;
}

const manager = new Manager();
const admin = new Admin();
const director = new Director();

const managerEcho = personEcho(manager);
const adminEcho = personEcho(admin);
// won't work because director does not extend person
// const director = personEcho(director);

