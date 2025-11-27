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
interface IStore {
  id: string;
  brand: string;
  model: string;
  releaseDate: string;
}

class AppleDevice implements IStore {
  constructor(
    public id: string,
    public brand: string,
    public model: string,
    public releaseDate: string
  ) {}
  getDetails() {
    return `Brand:${this.brand}, Model:${this.model} - Serial: ${this.id}`;
  }
}
interface IHardwareSpecs {
  ram: number;
  storage: string;
  processor: string;
}

class Mac extends AppleDevice {
  constructor(
    id: string,
    brand: string,
    model: string,
    releaseDate: string,
    public ram: number,
    public storage: string,
    public processor: string
  ) {
    super(id, brand, model, releaseDate);
  }

  getDetails() {
    return `${super.getDetails()}, Ram:${this.ram}, Storage: ${
      this.storage
    } CPU:${this.processor}`;
  }
}

interface IPorts<T> {
  ethernetPorts: number;
  usbCPorts: number;
  hdmiPort: T;
}

class AirPort extends AppleDevice implements IPorts<boolean> {
  constructor(
    id: string,
    brand: string,
    model: string,
    releaseDate: string,
    public ethernetPorts: number,
    public usbCPorts: number,
    public hdmiPort: boolean
  ) {
    super(id, brand, model, releaseDate);
  }
  getDetails(): string {
    return `${super.getDetails()}, Ethernet Ports ${
      this.ethernetPorts
    }, UbsTypeC: ${this.usbCPorts}, HDMI: ${this.hdmiPort ? true : false}`;
  }
}

interface IInventory<T> {
  getValue(item: T): void;
  getResult(): T[];
}

class InventoryManager<T> implements IInventory<T> {
  public container: T[] = [];

  constructor(value: T[]) {
    this.container = value;
  }

  getValue(value: T) {
    this.container.push(value);
  }

  getResult() {
    return this.container;
  }
}

const myInventory = new InventoryManager<AppleDevice>([]);

coreDB.forEach((item: any) => {
  if (item.type == "Mac") {
    const newMac = new Mac(
      item.id,
      item.brand,
      item.model,
      item.releaseDate,
      item.ram,
      item.storage,
      item.processor
    );

    myInventory.getValue(newMac);
  } else if (item.type == "AirPort") {
    const newAirPort = new AirPort(
      item.id,
      item.brand,
      item.model,
      item.releaseDate,
      item.ethernetPorts,
      item.usbCPorts,
      item.hdmiPort
    );
    myInventory.getValue(newAirPort);
  } else {
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
  } else if (product instanceof AirPort) {
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