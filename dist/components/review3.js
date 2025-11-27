"use strict";
const coreDB = [
    {
        type: "Mac",
        id: "APL-MAC-001",
        brand: "Apple",
        model: "MacBook Pro 16",
        releaseDate: "2023-11-07",
        ram: 36,
        storage: "1TB SSD",
        processor: "M3 Max",
    },
    {
        type: "AirPort", // Router
        id: "APL-NET-001",
        brand: "Apple",
        model: "AirPort Extreme 6th Gen",
        releaseDate: "2013-06-10",
        ethernetPorts: 4,
        usbCPorts: 0, // Agregado según tu clase
        hdmiPort: false, // Agregado según tu clase
    },
    {
        type: "Mac",
        id: "APL-MAC-002",
        brand: "Apple",
        model: "Mac Studio",
        releaseDate: "2022-03-18",
        ram: 64,
        storage: "2TB SSD",
        processor: "M1 Ultra",
    },
    {
        type: "AirPort", // Router
        id: "APL-NET-002",
        brand: "Apple",
        model: "AirPort Express 4K", // Inventado para el ejemplo
        releaseDate: "2024-01-15",
        ethernetPorts: 2,
        usbCPorts: 1, // Agregado
        hdmiPort: true, // Agregado
    },
];
class AppleDevice {
    constructor(id, brand, model, releaseDate) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.releaseDate = releaseDate;
    }
    getDetails() {
        return `Brand:${this.brand}, Model:${this.model} - Serial: ${this.id}`;
    }
}
class Mac extends AppleDevice {
    constructor(id, brand, model, releaseDate, ram, storage, processor) {
        super(id, brand, model, releaseDate);
        this.ram = ram;
        this.storage = storage;
        this.processor = processor;
    }
    getDetails() {
        return `${super.getDetails()}, Ram:${this.ram}, Storage: ${this.storage} CPU:${this.processor}`;
    }
}
class AirPort extends AppleDevice {
    constructor(id, brand, model, releaseDate, ethernetPorts, usbCPorts, hdmiPort) {
        super(id, brand, model, releaseDate);
        this.ethernetPorts = ethernetPorts;
        this.usbCPorts = usbCPorts;
        this.hdmiPort = hdmiPort;
    }
    getDetails() {
        return `${super.getDetails()}, Ethernet Ports ${this.ethernetPorts}, UbsTypeC: ${this.usbCPorts}, HDMI: ${this.hdmiPort ? true : false}`;
    }
}
class InventoryManager {
    constructor(value) {
        this.container = [];
        this.container = value;
    }
    getValue(value) {
        this.container.push(value);
    }
    getResult() {
        return this.container;
    }
}
const myInventory = new InventoryManager([]);
coreDB.forEach((item) => {
    if (item.type == "Mac") {
        const newMac = new Mac(item.id, item.brand, item.model, item.releaseDate, item.ram, item.storage, item.processor);
        myInventory.getValue(newMac);
    }
    else if (item.type == "AirPort") {
        const newAirPort = new AirPort(item.id, item.brand, item.model, item.releaseDate, item.ethernetPorts, item.usbCPorts, item.hdmiPort);
        myInventory.getValue(newAirPort);
    }
    else {
        console.log("Not found ");
    }
});
const allDevice = myInventory.getResult();
console.log(allDevice);
console.log("INVENTARIO FINAL ");
let resultMac = "";
let resultRouter = "";
allDevice.forEach(product => {
    if (product instanceof Mac) {
        resultMac += "\n" + product.getDetails() + "\n";
    }
    else if (product instanceof AirPort) {
        resultRouter += "\n" + product.getDetails() + "\n";
    }
});
console.log(`
    💻 MACs Report: 
    ${resultMac}
    `);
console.log(`
    📡 Routers Report: 
    ${resultRouter}
    `);
