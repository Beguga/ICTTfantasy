// Функция для других страниц (info.html)
function toggleInfo(contentId) {
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(contentId.replace("info", "arrow"));

    content.classList.toggle("active");
    arrow.classList.toggle("active");
}

// Данные о турах
const tours = [
    { id: 1, status: "completed", deadline: "2025-04-10T23:59:00" },
    { id: 2, status: "completed", deadline: "2025-04-24T23:59:00" },
    { id: 3, status: "completed", deadline: "2025-04-30T23:59:00" },
    { id: 4, status: "active", deadline: "2025-05-07T23:59:00" },
    { id: 5, status: "upcoming", deadline: "2025-05-14T23:59:00" },
    { id: 6, status: "upcoming", deadline: "2025-05-21T23:59:00" },
];

// Данные об игроках
const playersData = [
    // Атлетико
    { name: "Аврам Скверлин", position: "ВР", club: "Атлетико Горизонт", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Лоренцо Фрозин", position: "ВР", club: "Атлетико Горизонт", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Винстон Эрнандес", position: "ЗЩ", club: "Атлетико Горизонт", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Тайман Вос", position: "ЗЩ", club: "Атлетико Горизонт", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Нико Нетхо", position: "ЗЩ", club: "Атлетико Горизонт", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Леончик", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Андре Иньеста", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Игнат Киселевич", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Андре Маттьюс", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Рональд Куман", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Элиан Фауст", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Мафина", position: "ПЗ", club: "Атлетико Горизонт", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Жоао Феликс", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Яковлев Александр", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Александр Петров", position: "НАп", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Тимирбай Мансур", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Ферсман Торрес", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 0 } },
    // Тюмень
    { name: "Павел Нориков", position: "ВР", club: "Тюмень", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Гвидас Нойзович", position: "ЗЩ", club: "Тюмень", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Феликс Хаззенберг", position: "ЗЩ", club: "Тюмень", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Алессандро МакРени", position: "ЗЩ", club: "Тюмень", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Либерато", position: "ЗЩ", club: "Тюмень", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Диего Гомес", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Бруно Муньос", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Ромелу Бланчард", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Бруно Мендеш", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Рикардо Луис", position: "ПЗ", club: "Тюмень", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Марин Рену", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Тайлер Мортон", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Пабло Куенда", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Илья Мартышкин", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Ян Словацки", position: "НАП", club: "Тюмень", points: 0, price: 8, tourPoints: { 1: 0 } },
    // Ритховен
    { name: "Бруно Кёйперс", position: "ВР", club: "Ритховен", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Лукаш Джошевич", position: "ВР", club: "Ритховен", points: 0, price: 5, tourPoints: { 1: 0 } },
    { name: "Томми Нимери", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Этхан Морено", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Джейкоб Кумба", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Максим Милошевич", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Джереми Джеймс", position: "ЗЩ", club: "Ритховен", points: 0, price: 6, tourPoints: { 1: 0 } },
    { name: "Стюарт Декстер-Драммонд", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Джейден Амасс", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Йелле Ван Дер Мер", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Энту Криси", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Яковлев Александр", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Эллиас Веннестра", position: "ПЗ", club: "Ритховен", points: 0, price: 7, tourPoints: { 1: 0 } },
    { name: "Рио Нгема", position: "НАП", club: "Ритховен", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Джек Крионель", position: "НАП", club: "Ритховен", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Юлиан Пьере", position: "НАП", club: "Ритховен", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Йерун Ван Дер Мерве", position: "НАП", club: "Ритховен", points: 0, price: 8, tourPoints: { 1: 0 } },
    // Братислава
    { name: "Тимирбай Мансур", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Ферсман Торрес", position: "НАП", club: "Атлетико Горизонт", points: 0, price: 8, tourPoints: { 1: 0 } },
    { name: "Анжело Герд", position: "ВР", club: "Сайрос", points: 0, price: 5, tourPoints: { 1: 1 } },
    { name: "Рагнар", position: "ЗЩ", club: "Манреса", points: 40, price: 1, tourPoints: { 1: 3 } },
    { name: "Нуну Мендеш", position: "ЗЩ", club: "Ритховен", points: 37, price: 1, tourPoints: { 1: 2 } },
    { name: "Усман Дембеле", position: "ПЗ", club: "Уралан", points: 34, price: 8, tourPoints: { 1: 4 } },
    { name: "Харри Кейн", position: "НАП", club: "Мелитополь", points: 32, price: 9, tourPoints: { 1: 7 } },
    { name: "Харри ввКейн", position: "НАП", club: "Кобресаль", points: 32, price: 1, tourPoints: { 1: 1 } },
    { name: "Килиан Мбаппе", position: "НАП", club: "Тюмень", points: 30, price: 1, tourPoints: { 1: 5 } },
    { name: "Килвыфывиан Мбаппе", position: "ПЗ", club: "Атлетико Хоризонте", points: 30, price: 1, tourPoints: { 1: 2 } },
    { name: "Кивыфлиан Мбаппе", position: "ПЗ", club: "Гладиатор", points: 30, price: 1, tourPoints: { 1: 3 } },
    { name: "Альвавыаваыро Хахим", position: "ЗЩ", club: "Флорида", points: 28, price: 1, tourPoints: { 1: 1 } },
    { name: "Альваавыавро Хахим", position: "ЗЩ", club: "Металлург", points: 28, price: 15, tourPoints: { 1: 2 } },
    { name: "Альваро Хахим", position: "ЗЩ", club: "Лас Фьеро", points: 28, price: 1, tourPoints: { 1: 0 } },
    { name: "Витинья", position: "ПЗ", club: "Капро", points: 28, price: 1, tourPoints: { 1: 3 } },
    { name: "Хвича Кварацхелия", position: "ПЗ", club: "Фьорд", points: 26, price: 1, tourPoints: { 1: 2 } },
    { name: "Картошка", position: "ВР", club: "Джумейра", points: 26, price: 1, tourPoints: { 1: 4 } },
    { name: "Картоавашка", position: "ПЗ", club: "РБ Братислава", points: 26, price: 1, tourPoints: { 1: 1 } },
    { name: "Картоввшка", position: "ПЗ", club: "РБ Тотем", points: 26, price: 1, tourPoints: { 1: 0 } },
];

// Инициализация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDCC5kFrmQE0LcpCphUPEGhS-7ct7TPLcc",
    authDomain: "fantasy-leaderboard.firebaseapp.com",
    databaseURL: "https://fantasy-leaderboard-default-rtdb.firebaseio.com",
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
    pendingRemovals = Array.from(slots).filter(slot => !slot.classList.contains("filled")).length;
}

// Функция для определения последнего завершённого тура
function getLastCompletedTour() {
    const completedTours = tours.filter(tour => tour.status === "completed");
    if (completedTours.length === 0) return null;
    return completedTours.reduce((latest, tour) => tour.id > latest.id ? tour : latest, completedTours[0]);
}

// Функция для отображения таблицы лидеров (с использованием Firebase)
function displayLeaderboard() {
    const overallTableBody = document.querySelector("#overall-leaderboard tbody");
    const lastTourTableBody = document.querySelector("#last-tour-leaderboard tbody");

    overallTableBody.innerHTML = "";
    lastTourTableBody.innerHTML = "";

    // Загружаем данные из Firebase
    database.ref("users").once("value", snapshot => {
        const usersData = snapshot.val();
        const allUsersFirebase = usersData ? Object.values(usersData) : [];

        // Фильтруем пользователей с валидными никами
        const validUsers = allUsersFirebase.filter(user => user.nickname && user.nickname.trim() !== "");

        // Общий рейтинг
        const overallSorted = [...validUsers].sort((a, b) => b.totalPoints - a.totalPoints);
        overallSorted.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.nickname}</td>
                <td>${user.totalPoints || 0}</td>
            `;
            overallTableBody.appendChild(row);
        });

        // Рейтинг за последний тур
        const lastTour = getLastCompletedTour();
        if (lastTour) {
            const lastTourSorted = [...validUsers].sort((a, b) => (b.tourPoints?.[lastTour.id] || 0) - (a.tourPoints?.[lastTour.id] || 0));
            lastTourSorted.forEach((user, index) => {
                const points = user.tourPoints?.[lastTour.id] || 0;
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${user.nickname}</td>
                    <td>${points}</td>
                `;
                lastTourTableBody.appendChild(row);
            });
        } else {
            lastTourTableBody.innerHTML = `<tr><td colspan="3">Нет завершённых туров</td></tr>`;
        }
    }).catch(error => {
        console.error("Ошибка при загрузке данных для таблицы лидеров:", error);
        overallTableBody.innerHTML = `<tr><td colspan="3">Ошибка загрузки данных</td></tr>`;
        lastTourTableBody.innerHTML = `<tr><td colspan="3">Ошибка загрузки данных</td></tr>`;
    });
}

// Проверяем, является ли пользователь новичком
function isNewUser() {
    return !userData.hasSavedTeam;
}

// Сохраняем данные пользователя (только в Firebase и localStorage)
function saveUserData() {
    localStorage.setItem("userData", JSON.stringify(userData));

    // Сохраняем данные пользователя в Firebase
    if (userData.nickname && userData.nickname.trim() !== "") {
        const userRef = database.ref("users/" + userData.nickname);
        userRef.set({
            nickname: userData.nickname,
            favoriteClub: userData.favoriteClub,
            totalPoints: userData.totalPoints || 0,
            tourPoints: userData.tourPoints || {},
            selectedPlayers: userData.selectedPlayers,
            teamHistory: userData.teamHistory,
            budget: userData.budget,
            availableTransfers: userData.availableTransfers,
            joinedTour: userData.joinedTour,
            hasSavedTeam: userData.hasSavedTeam
        }).catch(error => {
            console.error("Ошибка при сохранении данных в Firebase:", error);
        });
    }
}

// Основная логика
document.addEventListener("DOMContentLoaded", function() {
    // Логика для fantasy.html
    const userForm = document.getElementById("user-form");
    if (userForm) {
        const userDataStored = localStorage.getItem("userData");
        if (userDataStored) {
            const parsedUserData = JSON.parse(userDataStored);
            if (parsedUserData.nickname && parsedUserData.nickname.trim() !== "") {
                window.location.href = "team-selection.html";
                return;
            }
        }

        userForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const nickname = document.getElementById("nickname").value.trim();
            const favoriteClub = document.getElementById("favorite-club").value;

            // Проверяем, существует ли пользователь в Firebase
            database.ref("users/" + nickname).once("value", snapshot => {
                if (snapshot.exists()) {
                    alert("Пользователь с таким ником уже существует! Пожалуйста, выберите другой ник.");
                    return;
                }

                userData.nickname = nickname;
                userData.favoriteClub = favoriteClub;
                saveUserData();
                window.location.href = "team-selection.html";
            }).catch(error => {
                console.error("Ошибка при проверке ника в Firebase:", error);
                alert("Произошла ошибка при проверке ника. Попробуйте снова.");
            });
        });
    }

    // Элементы для team-selection.html
    const playersContainer = document.querySelector(".players");
    const clubFilter = document.getElementById("club-filter");
    const positionFilter = document.getElementById("position-filter");
    const sortFilter = document.getElementById("sort-filter");
    const budgetDisplay = document.getElementById("budget");
    const saveButton = document.querySelector(".save-button");
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
    const pageNumberDisplay = document.getElementById("page-number");
    const tourButtonsContainer = document.getElementById("tour-buttons");
    const field = document.querySelector(".field");

    // Таблица лидеров
    const leaderboardButton = document.getElementById("leaderboard-button");
    const leaderboardModal = document.getElementById("leaderboard-modal");
    const closeLeaderboard = document.getElementById("close-leaderboard");

    if (leaderboardButton && leaderboardModal && closeLeaderboard) {
        leaderboardButton.addEventListener("click", () => {
            displayLeaderboard();
            leaderboardModal.style.display = "block";
        });

        closeLeaderboard.addEventListener("click", () => {
            leaderboardModal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === leaderboardModal) {
                leaderboardModal.style.display = "none";
            }
        });
    }

    if (!playersContainer) return; // Если не на team-selection.html, выходим

    // Инициализация
    setJoinedTour();
    const currentTour = getCurrentTour();
    selectedTourId = currentTour.id;

    // Инициализация состава и замен
    if (userData.teamHistory[selectedTourId]) {
        userData.selectedPlayers = [...userData.teamHistory[selectedTourId]];
        if (selectedTourId > userData.joinedTour && canEditTeam(selectedTourId)) {
            isTransferMode = true;
            userData.availableTransfers = 3;
            pendingRemovals = 0;
        }
    } else if (selectedTourId > userData.joinedTour && userData.teamHistory[selectedTourId - 1]) {
        userData.teamHistory[selectedTourId] = [...userData.teamHistory[selectedTourId - 1]];
        userData.selectedPlayers = [...userData.teamHistory[selectedTourId]];
        isTransferMode = true;
        userData.availableTransfers = 3;
        pendingRemovals = 0;
    } else {
        userData.selectedPlayers = [];
        userData.availableTransfers = 3;
        isTransferMode = false;
        pendingRemovals = 0;
    }

    budget = userData.budget;
    budgetDisplay.textContent = budget;
    saveUserData();

    // Делегирование событий для крестиков
    field.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-player")) {
            const slotIndex = parseInt(event.target.dataset.slotIndex, 10);
            const slot = event.target.closest(".player-slot");
            removePlayer(slot, slotIndex);
        }
    });

    // Отображение кнопок туров
    function renderTourButtons() {
        tourButtonsContainer.innerHTML = "";
        tours.forEach(tour => {
            const button = document.createElement("button");
            button.classList.add("tour-button");
            button.textContent = `Тур ${tour.id}`;
            
            if (tour.id === selectedTourId) {
                button.classList.add("active");
            }
            if (tour.status === "completed") {
                button.classList.add("completed");
            }

            button.addEventListener("click", () => {
                selectedTourId = tour.id;
                if (userData.teamHistory[selectedTourId]) {
                    userData.selectedPlayers = [...userData.teamHistory[selectedTourId]];
                } else if (selectedTourId > userData.joinedTour && userData.teamHistory[selectedTourId - 1]) {
                    userData.teamHistory[selectedTourId] = [...userData.teamHistory[selectedTourId - 1]];
                    userData.selectedPlayers = [...userData.teamHistory[selectedTourId]];
                    isTransferMode = true;
                    userData.availableTransfers = 3;
                    pendingRemovals = 0;
                } else {
                    userData.selectedPlayers = [];
                    userData.availableTransfers = 3;
                    isTransferMode = false;
                    pendingRemovals = 0;
                }
                saveUserData();
                renderTourButtons();
                displayTourPoints(selectedTourId);
                displayTeamForTour(selectedTourId);
                renderPlayers();

                const transfersDiv = document.querySelector(".transfers");
                if (!isNewUser() && isTransferMode) {
                    transfersDiv.innerHTML = `<span>Доступные замены: <span id="transfers-count">${userData.availableTransfers}</span></span>`;
                } else {
                    transfersDiv.innerHTML = `<span>Соберите и сохраните состав</span>`;
                }
            });

            tourButtonsContainer.appendChild(button);
        });
    }

    // Рассчитываем очки для завершённых туров
    tours.forEach(tour => {
        if (tour.status === "completed" && tour.id >= userData.joinedTour) {
            calculateTourPoints(tour.id);
        }
    });

    displayTourPoints(selectedTourId);

    // Отображение доступных замен
    const transfersDiv = document.createElement("div");
    transfersDiv.classList.add("transfers");
    if (!isNewUser() && isTransferMode) {
        transfersDiv.innerHTML = `<span>Доступные замены: <span id="transfers-count">${userData.availableTransfers}</span></span>`;
    } else {
        transfersDiv.innerHTML = `<span>Соберите и сохраните состав</span>`;
    }
    document.querySelector(".budget").prepend(transfersDiv);

    // Восстанавливаем состав
    if (userData.selectedPlayers.length > 0) {
        displayTeamForTour(selectedTourId);
    }

    // Отображение списка игроков
    function renderPlayers() {
        playersContainer.innerHTML = "";
        let filteredPlayers = playersData;

        const club = clubFilter.value;
        if (club !== "all") {
            filteredPlayers = filteredPlayers.filter(player => player.club === club);
        }

        const position = positionFilter.value;
        if (position !== "all") {
            filteredPlayers = filteredPlayers.filter(player => player.position === position);
        }

        const sort = sortFilter.value;
        if (sort === "points-desc") {
            filteredPlayers.sort((a, b) => b.points - a.points);
        } else if (sort === "points-asc") {
            filteredPlayers.sort((a, b) => a.points - b.points);
        } else if (sort === "price-desc") {
            filteredPlayers.sort((a, b) => b.price - a.price);
        } else if (sort === "price-asc") {
            filteredPlayers.sort((a, b) => a.price - b.price);
        }

        const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);
        if (currentPage > totalPages) currentPage = totalPages || 1;
        const start = (currentPage - 1) * playersPerPage;
        const end = start + playersPerPage;
        const paginatedPlayers = filteredPlayers.slice(start, end);

        pageNumberDisplay.textContent = currentPage;
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === totalPages || totalPages === 0;

        paginatedPlayers.forEach(player => {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("player");
            const isSelected = userData.selectedPlayers.some(item => item.player.name === player.name);
            const tourPoints = player.tourPoints[selectedTourId] || 0;
            playerDiv.innerHTML = `
                <span>${player.name}</span>
                <span>${player.position}</span>
                <span>${player.club}</span>
                <span>${player.points} (Тур: ${tourPoints})</span>
                <span>${player.price}</span>
                <button class="add-player" ${isSelected ? "disabled" : ""}>+</button>
            `;
            if (!isSelected && canEditTeam(selectedTourId)) {
                playerDiv.querySelector(".add-player").addEventListener("click", () => addPlayer(player));
            }
            playersContainer.appendChild(playerDiv);
        });
    }

    // Добавление игрока
    function addPlayer(player) {
        if (!canEditTeam(selectedTourId)) {
            alert("Вы можете редактировать состав только в текущем туре, и только до дедлайна!");
            return;
        }

        if (isTransferMode && userData.availableTransfers <= 0) {
            alert("У вас закончились замены на этот тур!");
            return;
        }

        if (userData.selectedPlayers.some(item => item.player.name === player.name)) {
            alert("Этот игрок уже добавлен в состав!");
            return;
        }

        const clubCount = userData.selectedPlayers.filter(item => item.player.club === player.club).length;
        if (clubCount >= 3) {
            alert("Нельзя добавить больше 3 игроков из одного клуба!");
            return;
        }

        if (budget - player.price < 0) {
            alert("Недостаточно бюджета!");
            return;
        }

        const slots = document.querySelectorAll(`.player-slot[data-position="${player.position}"]`);
        let added = false;
        for (let slot of slots) {
            if (!slot.classList.contains("filled") && !added) {
                const slotIndex = Array.from(document.querySelectorAll(".player-slot")).indexOf(slot);
                slot.classList.add("filled");
                slot.innerHTML = `${player.name} <button class="remove-player" data-slot-index="${slotIndex}">x</button>`;
                slot.dataset.player = JSON.stringify(player);
                slot.dataset.slotIndex = slotIndex;
                userData.selectedPlayers.push({ player, slotIndex });
                budget -= player.price;
                userData.budget = budget;
                budgetDisplay.textContent = budget;

                if (isTransferMode) {
                    // Тратим замену при добавлении игрока
                    userData.availableTransfers--;
                    // Уменьшаем количество "ожидающих замен" слотов
                    pendingRemovals--;
                    if (pendingRemovals < 0) pendingRemovals = 0;
                    document.getElementById("transfers-count").textContent = userData.availableTransfers;
                }

                added = true;
            }
        }

        if (!added) {
            alert("Нет свободных слотов для этой позиции!");
        }

        saveUserData();
        renderPlayers();
    }

    // Удаление игрока
    function removePlayer(slot, slotIndex) {
        if (!canEditTeam(selectedTourId)) {
            alert("Вы можете редактировать состав только в текущем туре, и только до дедлайна!");
            return;
        }

        if (isTransferMode && pendingRemovals >= userData.availableTransfers) {
            alert(`У вас доступно только ${userData.availableTransfers} замен!`);
            return;
        }

        const player = JSON.parse(slot.dataset.player);

        slot.classList.remove("filled");
        slot.innerHTML = "";
        slot.dataset.player = "";
        slot.dataset.slotIndex = "";

        userData.selectedPlayers = userData.selectedPlayers.filter(item => item.slotIndex !== slotIndex);

        budget += player.price;
        userData.budget = budget;
        budgetDisplay.textContent = budget;

        if (isTransferMode) {
            // Увеличиваем количество "ожидающих замен" слотов
            pendingRemovals++;
        }

        saveUserData();
        renderPlayers();
    }

    // Сохранение состава
    saveButton.addEventListener("click", function() {
        if (userData.selectedPlayers.length !== 15) {
            alert("Выберите ровно 15 игроков!");
            return;
        }

        userData.hasSavedTeam = true;
        userData.teamHistory[selectedTourId] = [...userData.selectedPlayers];
        propagateTeamToFutureTours(selectedTourId);
        saveUserData();
        alert("Состав сохранён!");

        const transfersDiv = document.querySelector(".transfers");
        if (selectedTourId > userData.joinedTour) {
            isTransferMode = true;
            userData.availableTransfers = 3;
            pendingRemovals = 0;
            transfersDiv.innerHTML = `<span>Доступные замены: <span id="transfers-count">${userData.availableTransfers}</span></span>`;
        } else {
            transfersDiv.innerHTML = `<span>Соберите и сохраните состав</span>`;
        }
    });

    // Пагинация
    prevPageButton.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            renderPlayers();
        }
    });

    nextPageButton.addEventListener("click", function() {
        const totalPages = Math.ceil(playersData.length / playersPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderPlayers();
        }
    });

    // Сброс данных (V + T) — полный сброс
    let isVPressed = false;
    window.addEventListener("keydown", function(event) {
        if (event.key.toLowerCase() === "v") {
            isVPressed = true;
        }
        if (event.key.toLowerCase() === "t" && isVPressed) {
            // Сохраняем ник для удаления из Firebase
            const nicknameToRemove = userData.nickname;

            // Удаляем данные пользователя из Firebase
            if (nicknameToRemove && nicknameToRemove.trim() !== "") {
                database.ref("users/" + nicknameToRemove).remove()
                    .then(() => {
                        console.log("Данные пользователя удалены из Firebase");
                    })
                    .catch(error => {
                        console.error("Ошибка при удалении данных из Firebase:", error);
                    });
            }

            // Полностью сбрасываем userData
            userData = {
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

            // Сбрасываем переменные
            isTransferMode = false;
            pendingRemovals = 0;
            budget = 100;

            // Сохраняем сброшенные данные (это также обновит Firebase)
            saveUserData();

            // Очищаем localStorage
            localStorage.removeItem("userData");

            // Перенаправляем на fantasy.html, чтобы пользователь мог заново ввести ник и клуб
            window.location.href = "fantasy.html";

            // Уведомляем пользователя
            alert("Все данные сброшены! Вы будете перенаправлены на страницу регистрации.");
        }
    });

    window.addEventListener("keyup", function(event) {
        if (event.key.toLowerCase() === "v") {
            isVPressed = false;
        }
    });

    // Инициализация
    renderTourButtons();
    renderPlayers();
    clubFilter.addEventListener("change", () => { currentPage = 1; renderPlayers(); });
    positionFilter.addEventListener("change", () => { currentPage = 1; renderPlayers(); });
    sortFilter.addEventListener("change", () => { currentPage = 1; renderPlayers(); });
});