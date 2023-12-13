// Завдання 1: Створити об'єкт "Користувач"
function createUser() {
  let user = {
    id: "2999300299",
    login: "gamer",
    password: "vdhdh"
  };

  alert("ID: " + user.id + "\nНазва логіну: " + user.login + "\nПароль: " + user.password);
  return user;
}

// Завдання 2: Створити об'єкт "Адмін"
function createAdmin() {
  let admin = {
    type: 'адмін',
    addInfo: function (info) {
      this.additionalInfo = info;
    },
    editInfo: function (info) {
      this.additionalInfo = info;
    },
    deleteInfo: function () {
      this.additionalInfo = "";
    }
  };

  admin.addInfo("Адмін");
  alert("Додано дані:\nТип: " + admin.additionalInfo);

  admin.deleteInfo();
  alert("Видалено дані:\nТип: " + admin.additionalInfo);

  admin.editInfo("user");
  alert("Змінено дані:\nТип: " + admin.additionalInfo);

  return admin;
}

// Завдання 3: Об'єднати властивості та методи об'єктів користувача і адміна
function mergeObjects() {
  let user = createUser();
  let admin = createAdmin();
  admin = Object.assign(admin, user);

  for (let prop in user) {
    if (user.hasOwnProperty(prop)) {
      admin[prop] = user[prop];
    }
  }

  alert("Об'єкт 'Користувач' після копіювання властивостей та методів з 'Адмін':\nТип: " +
    admin.type + "\nID:" + admin.id + "\nЛогін: " + admin.login + "\nПароль: " + admin.password);

  return admin;
}

// Завдання 4: Додати метод 'Показати дані' до прототипу об'єкта користувача
function addShowDataMethod() {
  let user = createUser();

  UserClass.prototype.showData = function () {
    alert("ID:" + this.id + "\nЛогін: " + this.login + "\nПароль: " + this.password);
  };

  user.showData();
}

// Завдання 5: Створити об'єкт Користувач2, який успадковує властивості та методи об'єкта Користувача та має власну властивість Адмін
function createUser2() {
  let user2 = Object.create(createUser());
  user2.isAdmin = true;

  user2.showData = function () {
    alert("Дані користувача 2:\nІм'я: " + this.login + "\nПароль: " + this.password + "\nАдмін: " + this.isAdmin);
  };

  user2.showData();
}
// Клас "КористувачКлас"
class UserClass {
  constructor(id, login, password) {
    this._id = id;
    this._login = login;
    this._password = password;
  }

  // Геттери та сеттери
  get id() {
    return this._id;
  }

  set id(value) {
    // Можна додати перевірки, наприклад, на правильність формату ID
    this._id = value;
  }

  get login() {
    return this._login;
  }

  set login(value) {
    // Можна додати перевірки, наприклад, на довжину логіну
    this._login = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    // Можна додати перевірки, наприклад, на складність паролю
    this._password = value;
  }

  // Метод для показу даних користувача
  showData() {
    alert("ID: " + this.id + "\nЛогін: " + this.login + "\nПароль: " + this.password);
  }
}

// Клас "АдмінКлас", який наслідує властивості і методи від "КористувачКлас"
class AdminClass extends UserClass {
  constructor(id, login, password, type) {
    super(id, login, password);
    this._type = type;
    this._additionalInfo = '';
  }

  // Геттери та сеттери
  get type() {
    return this._type;
  }

  set type(value) {
    // Можна додати перевірки, наприклад, на допустимий тип
    this._type = value;
  }

  get additionalInfo() {
    return this._additionalInfo;
  }

  set additionalInfo(value) {
    // Можна додати перевірки або обробку додаткової інформації
    this._additionalInfo = value;
  }

  // Метод для видалення додаткової інформації
  deleteInfo() {
    this._additionalInfo = '';
  }
}

// Функція для виконання 6 завдання
function imitation() {
  let user = new UserClass("2999300299", "gamer", "vdhdh");
  let admin = new AdminClass("98993002933", "programmer", "v55gyu0h", "адмін");

  admin.additionalInfo = "Адмін";
  alert("Додано дані:\nТип: " + admin.additionalInfo);

  admin.deleteInfo();
  alert("Видалено дані:\nТип: " + admin.additionalInfo);

  admin.type = "user";
  alert("Змінено тип на: " + admin.type);

  user.showData();
  admin.showData();
}

// Виклик функцій
//mergeObjects();
//addShowDataMethod();
//createUser2();
