// Паттерн Facade (Фасад) является структурным паттерном проектирования,
// который предоставляет простой интерфейс для сложной системы. 
// Он помогает сократить сложность системы, скрывая её внутренние детали и упростив взаимодействие с ней.
// Facade часто используется для предоставления упрощённого интерфейса к библиотекам, 
// фреймворкам или любому сложному набору классов в приложении.

// Основные цели использования паттерна Facade:
// 1. Упрощение сложных систем путем предоставления одного упрощенного интерфейса.
// 2. Сокрытие деталей реализации.
// 3. Облегчение использования и понимания системы.

// Фасад для работы с API
class ApiFacade {
   constructor() {
     this.authService = new AuthService();
     this.userService = new UserService();
     this.productService = new ProductService();
   }
 
   async loginAndGetUserData(username, password) {
     try {
       const token = await this.authService.login(username, password);
       const userData = await this.userService.getUserData(token);
       return userData;
     } catch (error) {
       throw new Error("Error fetching user data");
     }
   }
 
   async getProductList() {
     try {
       const products = await this.productService.getProducts();
       return products;
     } catch (error) {
       throw new Error("Error fetching products");
     }
   }
 }
 
 // Подсистемы (моковые службы)
 class AuthService {
   async login(username, password) {
     console.log('Logging in...');
     return 'fake-token';
   }
 }
 
 class UserService {
   async getUserData(token) {
     console.log('Fetching user data...');
     return { name: 'John Doe', age: 30 };
   }
 }
 
 class ProductService {
   async getProducts() {
     console.log('Fetching products...');
     return [{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }];
   }
 }
 
 // Клиентский код
 (async () => {
   const api = new ApiFacade();
   
   const userData = await api.loginAndGetUserData('user', 'pass');
   console.log(userData);
 
   const productList = await api.getProductList();
   console.log(productList);
 })();
