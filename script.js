// Функция для пересчёта общего количества очков игрока на основе tourPoints
function updatePlayerPoints() {
    playersData.forEach(player => {
        const tourPoints = Object.values(player.tourPoints || {});
        player.points = tourPoints.reduce((sum, points) => sum + points, 0);
    });
}

// Функция для других страниц (info.html)
function toggleInfo(contentId) {
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(contentId.replace("info", "arrow"));

    content.classList.toggle("active");
    arrow.classList.toggle("active");
}

// Данные о турах
const tours = [
    { id: 1, status: "completed", deadline: "2025-03-16T23:59:00" },
    { id: 2, status: "active", deadline: "2025-04-24T23:59:00" },
    { id: 3, status: "upcoming", deadline: "2025-04-30T23:59:00" },
    { id: 4, status: "upcoming", deadline: "2025-05-07T23:59:00" },
    { id: 5, status: "upcoming", deadline: "2025-05-14T23:59:00" },
    { id: 6, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 7, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 8, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 9, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 10, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 11, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 12, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 13, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 14, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 15, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 16, status: "upcoming", deadline: "2025-05-21T23:59:00" },
    { id: 17, status: "upcoming", deadline: "2025-05-21T23:59:00" },
];

// Данные об игроках
const playersData = [
    // Атлетико
    { name: "Аврам Скверлин", position: "ВР", club: "Атлетико Горизонт", points: 0, price: 5, tourPoints: { 1: 2 } },
    { name: "Лоренцо Фрозин", position: "ВР", club: "Атлетико Горизонт", points: 0, price: 5, tourPoints: { 1: 2 } },
    { name: "Винстон Эрнандес", position: "ЗЩ", club: "Атлетико Горизонт", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Тайман Вос", position: "ЗЩ", club: "Атлетико Горизонт", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Нико Нетхо", position: "ЗЩ", club: "Атлетико Горизонт", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Леончик", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Андре Иньеста", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Игнат Киселевич", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Андре Маттьюс", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Рональд Куман", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Элиан Фауст", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Мафина", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Жоао Феликс", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 2 } },
    { name: "Яковлев Александр", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 2 } },
    { name: "Александр Петров", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 2 } },
    { name: "Тимирбай Мансур", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 2 } },
    { name: "Ферсман Торрес", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 2 } },
    // Тюмень
    { name: "Павел Нориков", position: "ВР", club: "Тюмень", points: 0, price: 5, tourPoints: { 1: 2, 2: 1, 3: 3 } },
    { name: "Гвидас Нойзович", position: "ЗЩ", club: "Тюмень", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Феликс Хаззенберг", position: "ЗЩ", club: "Тюмень", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Алессандро МакРени", position: "ЗЩ", club: "Тюмень", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Либерато", position: "ЗЩ", club: "Тюмень", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Диего Гомес", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Бруно Муньос", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Ромелу Бланчард", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Бруно Мендеш", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Рикардо Луис", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Марин Рену", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 2 } },
    { name: "Тайлер Мортон", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 2 } },
    { name: "Пабло Куенда", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Илья Мартышкин", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 2 } },
    { name: "Ян Словацки", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 2 } },
    // Ритховен
    { name: "Бруно Кёйперс", position: "ВР", club: "Ритховен", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Лукаш Джошевич", position: "ВР", club: "Ритховен", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Томми Нимери", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Этхан Морено", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Джейкоб Кумба", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Максим Милошевич", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Джереми Джеймс", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Стюарт Декстер-Драммонд", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Франческо Грандольфо", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Джейден Амасс", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Люк Камара", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Энту Криси", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Яковлев Александр", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Эллиас Веннестра", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Рио Нгема", position: "НАП", club: "Ритховен", points: 0, price: 8.5, tourPoints: { 1: 8 } },
    { name: "Джек Крионель", position: "НАП", club: "Ритховен", points: 0, price: 8, tourPoints: { 1: 4 } },
    { name: "Юлиан Пьере", position: "НАП", club: "Ритховен", points: 0, price: 8, tourPoints: { 1: 5 } },
    { name: "Йерун Ван Дер Мерве", position: "НАП", club: "Ритховен", points: 0, price: 8.5, tourPoints: { 1: 8 } },
    { name: "Гиорги Микеладзе", position: "НАП", club: "Ритховен", points: 0, price: 8, tourPoints: { 1: 1 } },
    // Братислава
    { name: "Роман Ранни", position: "ВР", club: "РБ Братислава", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Лемар Ср", position: "ЗЩ", club: "РБ Братислава", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Демир Фьер", position: "ЗЩ", club: "РБ Братислава", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Франсуа Депардье", position: "ЗЩ", club: "РБ Братислава", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Лемар", position: "ЗЩ", club: "РБ Братислава", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Хендерсон Гэрри", position: "ПЗ", club: "РБ Братислава", points: 0, price: 7, tourPoints: { 1: 3 } },
    { name: "Бруно Факучо", position: "ПЗ", club: "РБ Братислава", points: 0, price: 7, tourPoints: { 1: 6 } },
    { name: "Ламин Анджело", position: "ПЗ", club: "РБ Братислава", points: 0, price: 7.5, tourPoints: { 1: 7 } },
    { name: "Тьяго Дживано", position: "ПЗ", club: "РБ Братислава", points: 0, price: 7, tourPoints: { 1: 2 } },
    { name: "Алеш Карлосон", position: "ПЗ", club: "РБ Братислава", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Аарон Тосин", position: "НАП", club: "РБ Братислава", points: 0, price: 8.5, tourPoints: { 1: 9 } },
    { name: "Ансворт Рейган", position: "НАП", club: "РБ Братислава", points: 0, price: 8, tourPoints: { 1: 1 } },
    { name: "Александр Эшвиль", position: "НАП", club: "РБ Братислава", points: 0, price: 8.5, tourPoints: { 1: 8 } },
    // Капро
    { name: "Тайлер Мортон", position: "ВР", club: "Капро", points: 0, price: 4, tourPoints: { 1: 5 } },
    { name: "Даниил Квят", position: "ЗЩ", club: "Капро", points: 0, price: 5.5, tourPoints: { 1: 9 } },
    { name: "Михаель Мбайе", position: "ЗЩ", club: "Капро", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Волэрко Наумов", position: "ЗЩ", club: "Капро", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Данила Козлов", position: "ЗЩ", club: "Капро", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Абдумали Гасан", position: "ЗЩ", club: "Капро", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Андре Классен", position: "ЗЩ", club: "Капро", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Стефан Гуантомеро", position: "ПЗ", club: "Капро", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Чокобой", position: "ПЗ", club: "Капро", points: 0, price: 6, tourPoints: { 1: 7 } },
    { name: "Мартин Холар", position: "ПЗ", club: "Капро", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Григори Рохас", position: "ПЗ", club: "Капро", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Кирил Мэсси", position: "ПЗ", club: "Капро", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Рой Фергюсон", position: "НАП", club: "Капро", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Ларан Кусанье", position: "НАП", club: "Капро", points: 0, price: 7, tourPoints: { 1: 4 } },
    { name: "Меркель Степлер", position: "НАП", club: "Капро", points: 0, price: 7, tourPoints: { 1: 5 } },
    // Ласфьеро
    { name: "Элеман Ле Мануель", position: "ВР", club: "Лас Фьеро", points: 0, price: 4, tourPoints: { 1: 5 } },
    { name: "Хорхе Санчез", position: "ЗЩ", club: "Лас Фьеро", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Ян Удасто", position: "ЗЩ", club: "Лас Фьеро", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Игорь Селяхов", position: "ЗЩ", club: "Лас Фьеро", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Янг Транни", position: "ЗЩ", club: "Лас Фьеро", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Клер Лаусон", position: "ПЗ", club: "Лас Фьеро", points: 0, price: 6, tourPoints: { 1: 2 } },
    { name: "Пушнинуф Диффи", position: "ПЗ", club: "Лас Фьеро", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Райо Гайоли", position: "ПЗ", club: "Лас Фьеро", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Альфонсо Мартин", position: "ПЗ", club: "Лас Фьеро", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Амир Ахметзянов", position: "НАП", club: "Лас Фьеро", points: 0, price: 7, tourPoints: { 1: 1 } },
    { name: "Маркус Джордж", position: "НАП", club: "Лас Фьеро", points: 0, price: 7, tourPoints: { 1: 9 } },
    { name: "Артём Агаларов", position: "НАП", club: "Лас Фьеро", points: 0, price: 7, tourPoints: { 1: 4 } },
    { name: "Джастин Ханимбер", position: "НАП", club: "Лас Фьеро", points: 0, price: 7, tourPoints: { 1: 1 } },
    { name: "Иньяки Реми", position: "НАП", club: "Лас Фьеро", points: 0, price: 7, tourPoints: { 1: 4 } },
    // Сайрос
    { name: "Анжело Герд", position: "ВР", club: "Сайрос", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Драгомир Милошевич", position: "ЗЩ", club: "Сайрос", points: 0, price: 3, tourPoints: { 1: -2 } },
    { name: "Евгений Ушаков", position: "ЗЩ", club: "Сайрос", points: 0, price: 3, tourPoints: { 1: -2 } },
    { name: "Рафаэль Кемола", position: "ЗЩ", club: "Сайрос", points: 0, price: 3, tourPoints: { 1: -2 } },
    { name: "Вилиам Кере", position: "ПЗ", club: "Сайрос", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Пабло Гомез", position: "ПЗ", club: "Сайрос", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Тео Бергкамп", position: "ПЗ", club: "Сайрос", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Джеймс МакЛовер", position: "НАП", club: "Сайрос", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Абрахам Фринг", position: "НАП", club: "Сайрос", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Матео Солонео", position: "НАП", club: "Сайрос", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Дэвид Недвед", position: "НАП", club: "Сайрос", points: 0, price: 7, tourPoints: { 1: 0 } },
    // Манреса
    { name: "Жоан Вила", position: "ВР", club: "Манреса", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Ориол Серра", position: "ВР", club: "Манреса", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Рамон Пужоль", position: "ЗЩ", club: "Манреса", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Арнау Марти", position: "ЗЩ", club: "Манреса", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Ферран Касальс", position: "ЗЩ", club: "Манреса", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Марк Вентура", position: "ЗЩ", club: "Манреса", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Пере Таррес", position: "ЗЩ", club: "Манреса", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Жорди Ровира", position: "ПЗ", club: "Манреса", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Нико Ривьера", position: "ПЗ", club: "Манреса", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Джейми Торнтон", position: "ПЗ", club: "Манреса", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Борха Рока", position: "ПЗ", club: "Манреса", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Узи Фараджо", position: "ПЗ", club: "Манреса", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Максим Ушаков", position: "НАП", club: "Манреса", points: 0, price: 7, tourPoints: { 1: 4 } },
    { name: "Габриэль Пижае", position: "НАП", club: "Манреса", points: 0, price: 7, tourPoints: { 1: 1 } },
    { name: "Томас Монсерро", position: "НАП", club: "Манреса", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Маноло Доффо", position: "НАП", club: "Манреса", points: 0, price: 7, tourPoints: { 1: 5 } },
    // Тотем
    { name: "Джастин Ван Боммер", position: "ВР", club: "РБ Тотем", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Томаш Нандрейх", position: "ВР", club: "РБ Тотем", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Дрейт Каллин", position: "ЗЩ", club: "РБ Тотем", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Кевин Гейлфроуд", position: "ЗЩ", club: "РБ Тотем", points: 0, price: 4, tourPoints: { 1: 0, 2: 0 } },
    { name: "Эктор Баена", position: "ЗЩ", club: "РБ Тотем", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Роналд Кампос", position: "ЗЩ", club: "РБ Тотем", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Дэвид Дайер", position: "ЗЩ", club: "РБ Тотем", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Юрген Шмид", position: "ЗЩ", club: "РБ Тотем", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Джо Ронде", position: "ПЗ", club: "РБ Тотем", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Кристиан Пиччи", position: "ПЗ", club: "РБ Тотем", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Лука Брошич", position: "ПЗ", club: "РБ Тотем", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Эрик Вильямс", position: "ПЗ", club: "РБ Тотем", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Жан-Пьер", position: "ПЗ", club: "РБ Тотем", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Тиджей Хайт", position: "ПЗ", club: "РБ Тотем", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Марко Леоне", position: "ПЗ", club: "РБ Тотем", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Рузиль Бекшиков", position: "ПЗ", club: "РБ Тотем", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Леонардо Джоа", position: "НАП", club: "РБ Тотем", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Джон Дейви Харрисон", position: "НАП", club: "РБ Тотем", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Зорк Фордон", position: "НАП", club: "РБ Тотем", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Дэвид Брейнер", position: "НАП", club: "РБ Тотем", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Фрэнк Брошич", position: "НАП", club: "РБ Тотем", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Гван Янссенс", position: "НАП", club: "РБ Тотем", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Йорг Кесслер", position: "НАП", club: "РБ Тотем", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Эмиль Вергамп", position: "НАП", club: "РБ Тотем", points: 0, price: 6, tourPoints: { 1: 0 } },
    // Мелитополь
    { name: "Марко Флеккен", position: "ВР", club: "Мелитополь", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Олексий Свинорыло", position: "ВР", club: "Мелитополь", points: 0, price: 3, tourPoints: { 1: 1 } },
    { name: "Джеймс Богдик", position: "ЗЩ", club: "Мелитополь", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Йозеф Кучера", position: "ЗЩ", club: "Мелитополь", points: 0, price: 4, tourPoints: { 1: 0, 2: 0 } },
    { name: "Михаил Кузин", position: "ЗЩ", club: "Мелитополь", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Рикардо Сантана", position: "ЗЩ", club: "Мелитополь", points: 0, price: 4, tourPoints: { 1: 4 } },
    { name: "Чарли Андерсон", position: "ЗЩ", club: "Мелитополь", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Эктор Де Форт", position: "ЗЩ", club: "Мелитополь", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Воут Бертранд", position: "ПЗ", club: "Мелитополь", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Йозеф Кауп", position: "ПЗ", club: "Мелитополь", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Павел Ступка", position: "ПЗ", club: "Мелитополь", points: 0, price: 5, tourPoints: { 1: 4 } },
    { name: "Роман Шустер", position: "ПЗ", club: "Мелитополь", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Артур Бойчук", position: "ПЗ", club: "Мелитополь", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Фелипе Джуниор", position: "ПЗ", club: "Мелитополь", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Фоксекс Виллон", position: "ПЗ", club: "Мелитополь", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Мартин Энжер", position: "НАП", club: "Мелитополь", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Павел Муратов", position: "НАП", club: "Мелитополь", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Роман Кравцов", position: "НАП", club: "Мелитополь", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Карим Маунтовский", position: "НАП", club: "Мелитополь", points: 0, price: 6, tourPoints: { 1: 0 } },
    // Гладиатор
    { name: "Швед", position: "ВР", club: "Гладиатор", points: 0, price: 3, tourPoints: { 1: 1 } },
    { name: "Алекс Селихов", position: "ВР", club: "Гладиатор", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Накатика Явъебука", position: "ЗЩ", club: "Гладиатор", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Евгений Джикия", position: "ЗЩ", club: "Гладиатор", points: 0, price: 4, tourPoints: { 1: 0, 2: 0 } },
    { name: "Антон Чернов", position: "ЗЩ", club: "Гладиатор", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Марти Перейра", position: "ПЗ", club: "Гладиатор", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Дмитрий Игнатов", position: "ПЗ", club: "Гладиатор", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Данила Пруцев", position: "ПЗ", club: "Гладиатор", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Алекс Густаво", position: "ПЗ", club: "Гладиатор", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Леви Жуан-Кристофи", position: "ПЗ", club: "Гладиатор", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Муми Альварез", position: "НАП", club: "Гладиатор", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Иван Резок", position: "НАП", club: "Гладиатор", points: 0, price: 4, tourPoints: { 1: -2 } },
    { name: "Антуан Зиньковски", position: "НАП", club: "Гладиатор", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Гонсало Де Са", position: "НАП", club: "Гладиатор", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Эгаш Промес", position: "НАП", club: "Гладиатор", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Энни Угальде", position: "НАП", club: "Гладиатор", points: 0, price: 6, tourPoints: { 1: 0 } },
    // Джумейра
    { name: "Гарри Гюльтер", position: "ВР", club: "Джумейра", points: 0, price: 3, tourPoints: { 1: 1 } },
    { name: "Робель Шамрело", position: "ЗЩ", club: "Джумейра", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Антонио Вивальди", position: "ЗЩ", club: "Джумейра", points: 0, price: 4, tourPoints: { 1: 1, 2: 0 } },
    { name: "Фердан Берин", position: "ЗЩ", club: "Джумейра", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Роннель Карб", position: "ЗЩ", club: "Джумейра", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Алехандро Уокер", position: "ПЗ", club: "Джумейра", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Кристоф Метцелдер", position: "ПЗ", club: "Джумейра", points: 0, price: 5, tourPoints: { 1: 4 } },
    { name: "Филипп Боувен", position: "ПЗ", club: "Джумейра", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Ашраф Зарен", position: "ПЗ", club: "Джумейра", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Абдумал Аль-Фараби", position: "НАП", club: "Джумейра", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Лука Тирней", position: "НАП", club: "Джумейра", points: 0, price: 6, tourPoints: { 1: 5 } },
    { name: "Ларс Олсен", position: "НАП", club: "Джумейра", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Алекс Шик", position: "НАП", club: "Джумейра", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Антуан Лефевр", position: "НАП", club: "Джумейра", points: 0, price: 6, tourPoints: { 1: 5 } },
    // Кобресаль
    { name: "Фил Паркер", position: "ВР", club: "Кобресаль", points: 0, price: 3, tourPoints: { 1: 1 } },
    { name: "Жереми Доку", position: "ЗЩ", club: "Кобресаль", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Константин Ковалев", position: "ЗЩ", club: "Кобресаль", points: 0, price: 4, tourPoints: { 1: 0, 2: 0 } },
    { name: "Артем Галимов", position: "ЗЩ", club: "Кобресаль", points: 0, price: 4, tourPoints: { 1: 6 } },
    { name: "Анжело Де Эспосито", position: "ЗЩ", club: "Кобресаль", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Доминик Лоурен", position: "ПЗ", club: "Кобресаль", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Глеб Юнук", position: "ПЗ", club: "Кобресаль", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Бахтыр Дабиулин", position: "ПЗ", club: "Кобресаль", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Константин Николаев", position: "ПЗ", club: "Кобресаль", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Александр Суворов", position: "ПЗ", club: "Кобресаль", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Максим Тарзанов", position: "ПЗ", club: "Кобресаль", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Бобби Кларк", position: "ПЗ", club: "Кобресаль", points: 0, price: 5, tourPoints: { 1: 4 } },
    { name: "Тео Кане", position: "ПЗ", club: "Кобресаль", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Эндрю Кинг", position: "НАП", club: "Кобресаль", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Серри Делитте", position: "НАП", club: "Кобресаль", points: 0, price: 6, tourPoints: { 1: 1 } },
    { name: "Марк Сплати", position: "НАП", club: "Кобресаль", points: 0, price: 6, tourPoints: { 1: 0 } },
    // Уралан
    { name: "Джорджи Стафф", position: "ВР", club: "Уралан", points: 0, price: 2, tourPoints: { 1: 0 } },
    { name: "Гонсало Джеймс", position: "ВР", club: "Уралан", points: 0, price: 2, tourPoints: { 1: 2 } },
    { name: "Винсент Делюка", position: "ЗЩ", club: "Уралан", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Джоэй Силва", position: "ПЗ", club: "Уралан", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Диего Орландо", position: "ПЗ", club: "Уралан", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Алекс Тумпер", position: "НАП", club: "Уралан", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Кристиан Чанел", position: "НАП", club: "Уралан", points: 0, price: 5, tourPoints: { 1: 0 } },
    // Флорида
    { name: "Алехандро Берджи", position: "ВР", club: "Флорида", points: 0, price: 2, tourPoints: { 1: 2 } },
    { name: "Флорентино Талко", position: "ВР", club: "Флорида", points: 0, price: 2, tourPoints: { 1: 0 } },
    { name: "Алехандру Матаб", position: "ЗЩ", club: "Флорида", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Кристен Свифткей", position: "ЗЩ", club: "Флорида", points: 0, price: 3, tourPoints: { 1: 1 } },
    { name: "Каспер Хансон", position: "ЗЩ", club: "Флорида", points: 0, price: 3, tourPoints: { 1: 1 } },
    { name: "Мудак Пидор", position: "ЗЩ", club: "Флорида", points: 0, price: 3, tourPoints: { 1: 1 } },
    { name: "Фит Флоу", position: "ЗЩ", club: "Флорида", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Адам Рудони", position: "ПЗ", club: "Флорида", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Лиам Майк", position: "ПЗ", club: "Флорида", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Станишич Геронимо", position: "ПЗ", club: "Флорида", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Сайлент Карен", position: "ПЗ", club: "Флорида", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Леон Вейсс", position: "ПЗ", club: "Флорида", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Франко Карбонч", position: "ПЗ", club: "Флорида", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Алехандро Мефедрини", position: "НАП", club: "Флорида", points: 0, price: 5, tourPoints: { 1: 9 } },
    { name: "Лигар Берджи", position: "НАП", club: "Флорида", points: 0, price: 5, tourPoints: { 1: 7 } },
    { name: "Рео Гонсалез", position: "НАП", club: "Флорида", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Хуан Мусси", position: "НАП", club: "Флорида", points: 0, price: 5, tourPoints: { 1: 0 } },
    // Колчестер
    { name: "Амир Аль-Махди", position: "ЗЩ", club: "Колчестер", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Асаанте Уилльямс", position: "ПЗ", club: "Колчестер", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Дерик Уайт", position: "ПЗ", club: "Колчестер", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Джеймс Наш", position: "ПЗ", club: "Колчестер", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Джонатан Рейс", position: "ПЗ", club: "Колчестер", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Густав Уилльямс", position: "НАП", club: "Колчестер", points: 0, price: 5, tourPoints: { 1: 0 } },
    // Металлург
    { name: "Алексей Скорблюк", position: "ВР", club: "Металлург", points: 0, price: 2, tourPoints: { 1: 2 } },
    { name: "Васильев Егор", position: "ВР", club: "Металлург", points: 0, price: 2, tourPoints: { 1: 0 } },
    { name: "Скорин Александр", position: "ЗЩ", club: "Металлург", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Кевин Шнайдер", position: "ЗЩ", club: "Металлург", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Хосе Гарсия", position: "ЗЩ", club: "Металлург", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Михаил Гречкин", position: "ЗЩ", club: "Металлург", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Педро Слоч", position: "ЗЩ", club: "Металлург", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Реллази Мартин", position: "ПЗ", club: "Металлург", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Давид Мхитарян", position: "ПЗ", club: "Металлург", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Теплу", position: "ПЗ", club: "Металлург", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Павел Танков", position: "ПЗ", club: "Металлург", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Адам Хахатунов", position: "НАП", club: "Металлург", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Марков Степан", position: "НАП", club: "Металлург", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Давид Зеларян", position: "НАП", club: "Металлург", points: 0, price: 5, tourPoints: { 1: 5 } },
    { name: "Депхиа Чхеидзе", position: "НАП", club: "Металлург", points: 0, price: 5, tourPoints: { 1: 4 } },
    // Фьорд
    { name: "Адольф Узбеков", position: "ВР", club: "Фьорд", points: 0, price: 2, tourPoints: { 1: 0 } },
    { name: "Джон Сбане", position: "ВР", club: "Фьорд", points: 0, price: 2, tourPoints: { 1: 0 } },
    { name: "Эрик Хансен", position: "ВР", club: "Фьорд", points: 0, price: 2, tourPoints: { 1: 1 } },
    { name: "Алехандро Мартинелли", position: "ЗЩ", club: "Фьорд", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Андрей Андреев", position: "ЗЩ", club: "Фьорд", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Андрей Солсов", position: "ЗЩ", club: "Фьорд", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Сей Норманич", position: "ЗЩ", club: "Фьорд", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Алехандро Бланко", position: "ЗЩ", club: "Фьорд", points: 0, price: 3, tourPoints: { 1: 0 } },
    { name: "Ашот Арутюрян", position: "ПЗ", club: "Фьорд", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Зервелис Илиас", position: "ПЗ", club: "Фьорд", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Энтони Холдер", position: "ПЗ", club: "Фьорд", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Де Санто Де Гарсия", position: "ПЗ", club: "Фьорд", points: 0, price: 4, tourPoints: { 1: 0 } },
    { name: "Аран Манилов", position: "ПЗ", club: "Фьорд", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Гленн Бейл", position: "ПЗ", club: "Фьорд", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Маркс Карл", position: "ПЗ", club: "Фьорд", points: 0, price: 4, tourPoints: { 1: 1 } },
    { name: "Милош Альванте", position: "НАП", club: "Фьорд", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Дебир Этобо", position: "НАП", club: "Фьорд", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Роман Ебатырев", position: "НАП", club: "Фьорд", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Сержи Данте", position: "НАП", club: "Фьорд", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Жерар Дюкло", position: "НАП", club: "Фьорд", points: 0, price: 5, tourPoints: { 1: 1 } },
];

// Инициализация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDCC5kFrmQE0LcpCphUPEGhS-7ct7TPLcc",
    authDomain: "fantasy-leaderboard.firebaseapp.com",
    databaseURL: "https://fantasy-leaderboard-default-rtdb.us-central1.firebasedatabase.app",
    projectId: "fantasy-leaderboard",
    storageBucket: "fantasy-leaderboard.firebasestorage.app",
    messagingSenderId: "330364892357",
    appId: "1:330364892357:web:fa03c2775e3670ed796cac",
    measurementId: "G-QSBW9LN1V9"
};

// Инициализируем Firebase
firebase.initializeApp(firebaseConfig);

// Получаем ссылку на базу данных
const database = firebase.database();

// Инициализация всех пользователей (оставляем для совместимости, но теперь данные будут в Firebase)
let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

// Данные пользователя
let userData = JSON.parse(localStorage.getItem("userData")) || {
    nickname: "",
    favoriteClub: "",
    selectedPlayers: [],
    teamHistory: {},
    tourPoints: {},
    totalPoints: 0,
    budget: 100,
    availableTransfers: 3,
    joinedTour: null,
    hasSavedTeam: false
};

// Переменные
let budget = userData.budget || 100;
let currentPage = 1;
const playersPerPage = 6;
let selectedTourId = null;
let isTransferMode = false;
let pendingRemovals = 0; // Счётчик игроков, которые были убраны, но ещё не заменены

// Эффекты наведения для кнопок на главной странице
const fantasyButton = document.getElementById("fantasy-button");
const infoButton = document.getElementById("info-button");

if (fantasyButton) {
    fantasyButton.addEventListener("mouseover", () => {
        fantasyButton.src = "images/fantasy-button-hover.png";
    });
    fantasyButton.addEventListener("mouseout", () => {
        fantasyButton.src = "images/fantasy-button.png";
    });
}

if (infoButton) {
    infoButton.addEventListener("mouseover", () => {
        infoButton.src = "images/info-button-hover.png";
    });
    infoButton.addEventListener("mouseout", () => {
        infoButton.src = "images/info-button.png";
    });
}

// Функция для определения текущего тура
function getCurrentTour() {
    const now = new Date();
    for (let tour of tours) {
        const deadline = new Date(tour.deadline);
        if (tour.status === "active" && now < deadline) {
            return tour;
        }
        if (tour.status === "active" && now >= deadline) {
            tour.status = "completed";
            calculateTourPoints(tour.id);
        }
    }
    return tours.find(tour => tour.status === "active") || tours[0];
}

// Проверяем, можно ли редактировать состав
function canEditTeam(tourId) {
    const currentTour = getCurrentTour();
    if (tourId !== currentTour.id) {
        return false;
    }
    const now = new Date();
    const deadline = new Date(currentTour.deadline);
    return now < deadline;
}

// Функция для определения тура, с которого пользователь начал
function setJoinedTour() {
    if (!userData.joinedTour) {
        const currentTour = getCurrentTour();
        userData.joinedTour = currentTour.id;
        saveUserData();
    }
}

// Функция для копирования команды во все будущие туры
function propagateTeamToFutureTours(currentTourId) {
    tours.forEach(tour => {
        if (tour.id >= currentTourId) {
            userData.teamHistory[tour.id] = [...userData.selectedPlayers];
        }
    });
    saveUserData();
}

// Функция для расчёта очков пользователя за тур
function calculateTourPoints(tourId) {
    const teamForTour = userData.teamHistory[tourId] || [];
    let totalPoints = 0;
    for (let item of teamForTour) {
        const player = item.player;
        const playerData = playersData.find(p => p.name === player.name);
        if (playerData && playerData.tourPoints[tourId]) {
            totalPoints += playerData.tourPoints[tourId];
        }
    }
    userData.tourPoints[tourId] = totalPoints;
    userData.totalPoints = Object.values(userData.tourPoints).reduce((sum, points) => sum + points, 0);
    saveUserData();
    return totalPoints;
}

// Отображаем очки за тур и общее количество очков
function displayTourPoints(tourId) {
    const tourPointsDiv = document.querySelector(".tour-points") || document.createElement("div");
    tourPointsDiv.classList.add("tour-points");
    tourPointsDiv.innerHTML = `
        <h3>Очки за тур ${tourId}: ${userData.tourPoints[tourId] || 0}</h3>
        <h3>Общие очки: ${userData.totalPoints}</h3>
    `;
    document.querySelector(".team-selection-container").appendChild(tourPointsDiv);
}

// Функция для отображения состава за тур
function displayTeamForTour(tourId) {
    const slots = document.querySelectorAll(".player-slot");
    slots.forEach(slot => {
        slot.classList.remove("filled");
        slot.innerHTML = "";
        slot.dataset.player = "";
        slot.dataset.slotIndex = "";
    });

    const teamForTour = userData.teamHistory[tourId] || userData.selectedPlayers;
    slots.forEach((slot, index) => {
        const slotIndex = index;
        const playerItem = teamForTour.find(item => item.slotIndex === slotIndex);
        if (playerItem) {
            const player = playerItem.player;
            slot.classList.add("filled");
            slot.dataset.slotIndex = slotIndex;
            slot.dataset.player = JSON.stringify(player);
            if (canEditTeam(tourId)) {
                slot.innerHTML = `${player.name} <button class="remove-player" data-slot-index="${slotIndex}">x</button>`;
            } else {
                slot.innerHTML = player.name;
            }
        }
    });

    // Пересчитываем pendingRemovals при отображении состава
    pendingRemovals = 0; // Сбрасываем pendingRemovals
    if (isTransferMode) {
        pendingRemovals = Array.from(slots).filter(slot => !slot.classList.contains("filled")).length;
        if (pendingRemovals > userData.availableTransfers) {
            pendingRemovals = userData.availableTransfers;
        }
    }
}

// Функция для определения последнего завершённого тура
function getLastCompletedTour() {
    const completedTours = tours.filter(tour => tour.status === "completed");
    if (completedTours.length === 0) return null;
    return completedTours.reduce((latest, tour) => tour.id > latest.id ? tour : latest, completedTours[0]);
}

// Функция для отображения таблицы лидеров (с использованием Firebase)
async function displayLeaderboard() {
    const leaderboardTableBody = document.querySelector("#leaderboard-table tbody");
    const personalRankContainer = document.querySelector("#personal-rank") || document.createElement("div");
    personalRankContainer.id = "personal-rank";

    if (!leaderboardTableBody) {
        console.warn("Элемент таблицы лидеров не найден");
        return;
    }

    leaderboardTableBody.innerHTML = "<tr><td colspan='4'>Загрузка...</td></tr>";
    personalRankContainer.innerHTML = "<p>Загрузка вашего места...</p>";

    try {
        // Загружаем данные из Firebase по пути /leaderboard
        const snapshot = await database.ref("leaderboard").once("value");
        const leaderboardData = [];
        snapshot.forEach(childSnapshot => {
            const data = childSnapshot.val();
            if (data && data.nickname && data.score !== undefined) {
                leaderboardData.push(data);
            }
        });

        // Сортируем по убыванию очков
        leaderboardData.sort((a, b) => (b.score || 0) - (a.score || 0));

        // Отображаем топ-10
        leaderboardTableBody.innerHTML = "";
        if (leaderboardData.length === 0) {
            leaderboardTableBody.innerHTML = `<tr><td colspan="4">Нет данных</td></tr>`;
            personalRankContainer.innerHTML = `<p>Нет данных</p>`;
        } else {
            leaderboardData.slice(0, 10).forEach((entry, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${entry.nickname}</td>
                    <td>${entry.score}</td>
                    <td>${entry.favoriteClub}</td>
                `;
                leaderboardTableBody.appendChild(row);
            });

            // Находим место текущего пользователя
            const currentUser = leaderboardData.find(entry => entry.nickname === userData.nickname);
            if (currentUser) {
                const userIndex = leaderboardData.findIndex(entry => entry.nickname === userData.nickname) + 1;
                personalRankContainer.innerHTML = `
                    <table>
                        <tr>
                            <td>${userIndex}</td>
                            <td>${currentUser.nickname}</td>
                            <td>${currentUser.score}</td>
                            <td>${currentUser.favoriteClub}</td>
                        </tr>
                    </table>
                `;
            } else {
                personalRankContainer.innerHTML = `<p>Ваш ник "${userData.nickname}" не найден в таблице лидеров.</p>`;
            }
        }

        // Добавляем personalRankContainer в DOM, если его там ещё нет
        if (!document.querySelector("#personal-rank")) {
            document.querySelector("#leaderboard-content").appendChild(personalRankContainer);
        }
    } catch (error) {
        console.error("Ошибка при загрузке данных для таблицы лидеров:", error);
        leaderboardTableBody.innerHTML = `<tr><td colspan="4">Ошибка загрузки данных</td></tr>`;
        personalRankContainer.innerHTML = `<p>Ошибка загрузки вашего места</p>`;
    }
}

// Проверяем, является ли пользователь новичком
function isNewUser() {
    return !userData.hasSavedTeam;
}

// Функция для сохранения данных пользователя в Firebase
async function saveUserData() {
    try {
        // Сохраняем данные в /users
        const userRef = database.ref("users/" + userData.nickname);
        await userRef.set({
            nickname: userData.nickname,
            favoriteClub: userData.favoriteClub,
            totalPoints: userData.totalPoints || 0,
            tourPoints: userData.tourPoints || {},
            hasSavedTeam: userData.hasSavedTeam || false,
            joinedTour: userData