// Паттерн "Заместитель" (или "Proxy") в JavaScript используется для контроля доступа к другим объектам. 
// Этот паттерн позволяет создавать объекты-посредники, которые могут управлять доступом к целевым объектам, 
// добавлять дополнительную функциональность или изменять поведение при работе с этими объектами.

// Целевой объект
class RealSubject {
  request() {
      console.log("Request executed.");
  }
}

// Заместитель
class Proxy {
  constructor(realSubject) {
      this.realSubject = realSubject;
  }

  request() {
      this.preRequest();
      this.realSubject.request(); // Перенаправление запроса к реальному объекту
      this.postRequest();
  }

  preRequest() {
      console.log("Pre request actions.");
  }

  postRequest() {
      console.log("Post request actions.");
  }
}

// Использование
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

proxy.request();