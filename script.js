// Существующий код для других страниц
function toggleInfo(contentId) {
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(contentId.replace("info", "arrow"));

    content.classList.toggle("active");
    arrow.classList.toggle("active");
}

const userForm = document.getElementById("user-form");
if (userForm) {
    userForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nickname = document.getElementById("nickname").value;
        const favoriteClub = document.getElementById("favorite-club").value;
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("favoriteClub", favoriteClub);
        window.location.href = "team-selection.html";
    });
}

const fantasyButton = document.getElementById("fantasy-button");
const infoButton = document.getElementById("info-button");

if (fantasyButton) {
    fantasyButton.addEventListener("mouseover", function() {
        fantasyButton.src = "images/fantasy-button-hover.png";
    });
    fantasyButton.addEventListener("mouseout", function() {
        fantasyButton.src = "images/fantasy-button.png";
    });
}

if (infoButton) {
    infoButton.addEventListener("mouseover", function() {
        infoButton.src = "images/info-button-hover.png";
    });
    infoButton.addEventListener("mouseout", function() {
        infoButton.src = "images/info-button.png";
    });
}

// Логика для страницы Team Selection
const playersData = [
    { name: "Рагнар", position: "ЗЩ", club: "Барселона", points: 40, price: 8.5 },
    { name: "Нуну Мендеш", position: "ЗЩ", club: "ПСЖ", points: 37, price: 6 },
    { name: "Усман Дембеле", position: "ПЗ", club: "ПСЖ", points: 34, price: 8 },
    { name: "Харри Кейн", position: "НАП", club: "Бавария", points: 32, price: 9 },
    { name: "Килиан Мбаппе", position: "НАП", club: "Реал Мадрид", points: 30, price: 9 },
    { name: "Альваро Хахим", position: "ЗЩ", club: "ПСЖ", points: 28, price: 6.5 },
    { name: "Витинья", position: "ПЗ", club: "ПСЖ", points: 28, price: 7 },
    { name: "Хвича Кварацхелия", position: "ПЗ", club: "ПСЖ", points: 26, price: 8.5 },
    // Добавь больше игроков
];

let selectedPlayers = [];
let budget = 100;
let currentPage = 1;
const playersPerPage = 10; // Изменили с 5 на 10

document.addEventListener("DOMContentLoaded", function() {
    const playersContainer = document.querySelector(".players");
    const clubFilter = document.getElementById("club-filter");
    const positionFilter = document.getElementById("position-filter");
    const sortFilter = document.getElementById("sort-filter");
    const budgetDisplay = document.getElementById("budget");
    const saveButton = document.querySelector(".save-button");
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
    const pageNumberDisplay = document.getElementById("page-number");

    // Отображаем игроков
    function renderPlayers() {
        playersContainer.innerHTML = "";
        let filteredPlayers = playersData;

        // Фильтр по клубу
        const club = clubFilter.value;
        if (club !== "all") {
            filteredPlayers = filteredPlayers.filter(player => player.club === club);
        }

        // Фильтр по позиции
        const position = positionFilter.value;
        if (position !== "all") {
            filteredPlayers = filteredPlayers.filter(player => player.position === position);
        }

        // Сортировка
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

        // Пагинация
        const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);
        if (currentPage > totalPages) currentPage = totalPages || 1;
        const start = (currentPage - 1) * playersPerPage;
        const end = start + playersPerPage;
        const paginatedPlayers = filteredPlayers.slice(start, end);

        // Обновляем кнопки пагинации
        pageNumberDisplay.textContent = currentPage;
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === totalPages || totalPages === 0;

        // Отображаем игроков
        paginatedPlayers.forEach(player => {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("player");
            const isSelected = selectedPlayers.some(p => p.name === player.name);
            playerDiv.innerHTML = `
                <span>${player.name}</span>
                <span>${player.position}</span>
                <span>${player.club}</span>
                <span>${player.points}</span>
                <span>${player.price}</span>
                <button class="add-player" ${isSelected ? "disabled" : ""}>+</button>
            `;
            if (!isSelected) {
                playerDiv.querySelector(".add-player").addEventListener("click", () => addPlayer(player));
            }
            playersContainer.appendChild(playerDiv);
        });
    }

    // Добавление игрока
    function addPlayer(player) {
        // Проверяем, не добавлен ли игрок уже
        if (selectedPlayers.some(p => p.name === player.name)) {
            alert("Этот игрок уже добавлен в состав!");
            return;
        }

        // Проверяем лимит игроков из одного клуба
        const clubCount = selectedPlayers.filter(p => p.club === player.club).length;
        if (clubCount >= 3) {
            alert("Нельзя добавить больше 3 игроков из одного клуба!");
            return;
        }

        // Проверяем бюджет
        if (budget - player.price < 0) {
            alert("Недостаточно бюджета!");
            return;
        }

        // Находим свободную ячейку для позиции
        const slots = document.querySelectorAll(`.player-slot[data-position="${player.position}"]`);
        let added = false;
        slots.forEach(slot => {
            if (!slot.classList.contains("filled") && !added) {
                slot.classList.add("filled");
                slot.innerHTML = `${player.name} <button class="remove-player">x</button>`;
                slot.dataset.player = JSON.stringify(player);
                selectedPlayers.push(player);
                budget -= player.price;
                budgetDisplay.textContent = budget;
                added = true;

                // Добавляем обработчик для удаления игрока
                slot.querySelector(".remove-player").addEventListener("click", () => removePlayer(slot, player));
            }
        });

        if (!added) {
            alert("Нет свободных слотов для этой позиции!");
        }

        renderPlayers(); // Обновляем список игроков
    }

    // Удаление игрока
    function removePlayer(slot, player) {
        slot.classList.remove("filled");
        slot.innerHTML = "";
        slot.dataset.player = "";
        selectedPlayers = selectedPlayers.filter(p => p.name !== player.name);
        budget += player.price;
        budgetDisplay.textContent = budget;
        renderPlayers(); // Обновляем список игроков
    }

    // Сохранение состава
    saveButton.addEventListener("click", function() {
        if (selectedPlayers.length !== 15) {
            alert("Выберите ровно 15 игроков!");
            return;
        }
        localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
        alert("Состав сохранён!");
        // Можно перенаправить на следующую страницу
    });

    // Пагинация: переключение страниц
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

    // Инициализация
    renderPlayers();
    clubFilter.addEventListener("change", () => { currentPage = 1; renderPlayers(); });
    positionFilter.addEventListener("change", () => { currentPage = 1; renderPlayers(); });
    sortFilter.addEventListener("change", () => { currentPage = 1; renderPlayers(); });
});