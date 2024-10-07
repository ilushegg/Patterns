

export class ApiUrlFactory {
  create(type) {
    switch (type) {
      case 'prod':
        return new ProductionUrls();
      case 'debug':
        return new DebugUrls();
    }
  }
}

export class ProductionUrls {

}

export class DebugUrls {

}


const factory = new ApiUrlFactory().create('prod');

console.log(factory)