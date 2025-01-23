'use strict'

class Machine {
  #serialNumber;
  #isWorked;

  constructor(type, manufacturer, year, serialNumber, isWorked) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.year = year;
    this.#serialNumber = serialNumber;
    this.#isWorked = isWorked;
    this.workers = [];
  }

  getGeneralInfo() {
    const { type, manufacturer, year } = this;

    return `Type: ${type}.\nManufacturer: ${manufacturer}.\nYear: ${year}. \n`
  }

  checkStatus() {
    const status = this.#isWorked.toLowerCase();
    
    return status === 'no' ? `Machine with serial number ${this.#serialNumber} needs to be fixed.` : 'All is okay.';
  }

  addManufacturerWorkers(person) {
    this.workers.push(person);
  }

  displaySerialNumber(requestingPerson) {
    if (this.workers.includes(requestingPerson)) {
      console.log(`Machine serial number is ${this.#serialNumber}.`);
    } else {
      console.log('Sorry, you do not have access to this information.')
    }
  }
}

class Car extends Machine {
  #mileage;

  constructor(type, manufacturer, year, model, fuelType, fuelCount, transmissionType, mileage) {
    super(type, manufacturer, year);
    this.model = model;
    this.transmissionType = transmissionType;
    this.fuelType = fuelType;
    this.fuelCount = fuelCount;
    this.#mileage = mileage;
  }

  getModelInfo() {
    const parentInfo = super.getGeneralInfo();

    return `${parentInfo}Model: ${this.model}.\nType of transmission: ${this.transmissionType}.\nType of fuel: ${this.fuelType}.`;
  }

  checkFuelStatus() {
    const { fuelCount, fuelType } = this;
   
    const electricValidation = fuelType === 'electric' && fuelCount <= 20; 
    const liquidFuelsValidation = (fuelType === 'petrol' || fuelType === 'diesel') && fuelCount <= 10;
   
    if (electricValidation) {
      console.log('Battery charge is low! Look for a charger!')
    } else if (liquidFuelsValidation) {
      console.log('Low fuel! Go to the gas station!')
    } else {
      console.log('All is good!')
    }
  }

  getMiliage() {
    return this.#mileage;
  }

  increaseMileage(distance) {
    this.#mileage += distance;
    return `New mileage: ${this.#mileage} km.`;
  }
}

class Truck extends Car {
  cargoCapacity;
  hasTrailer;
  #loadedWeight;

  constructor(cargoCapacity, hasTrailer) {
    this.cargoCapacity = cargoCapacity;
    this.hasTrailer = hasTrailer;
  }

  loadCargo(weight) {
    console.log(`loaded ${weight}kg`);
    this.#loadedWeight = weight;
  }

  unload() {
    console.log(`unloaded ${this.#loadedWeight}kg`);
    this.#loadedWeight = 0;
  }
}

class Pickup extends Car {
  #car;
  fourWheelDrive;

  constructor(fourWheelDrive = true) {
    this.fourWheelDrive = fourWheelDrive;
  }

  tow(car) {
    console.log(`towing car ${car?.type}`);
    this.#car = car; 
  }

  releaseCar() {
    this.#car = null;
  }
}

const machine = new Machine('land', 'Ford', 2018, 'SN59694', 'No');
machine.addManufacturerWorkers('Jhon Snow');
machine.addManufacturerWorkers('Arya Stark');
console.log(machine.displaySerialNumber('Harry Potter'));

const car = new Car('land', 'Ford', 2018, 'Escape', 'automatic', 'petrol', 8, 80000);
console.log(car.increaseMileage(40));