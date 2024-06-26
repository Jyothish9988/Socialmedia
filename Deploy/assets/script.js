
    const list = document.getElementById("list");
    const amount = 100;


    const template = listItem => {
        return `
            <a class="list-item" href="#">
                <div class="list-item__avatar">
                    <img src="${listItem.picture.large}" />
                </div>
                <div class="list-item__content">
                    <strong class="list-item__name">${listItem.name.first} ${listItem.name.last}</strong>
                    <span class="list-item__info">@${listItem.login.username} <br>  @${listItem.email}</span>
                </div>
                <button type="button" class="list-item__button">
                    <svg class="feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
            </a>
        `;
    };

    fetch(`https://randomuser.me/api/?results=${amount}`, { method: "get" })
        .then(response => response.json())
        .then(data => {
            data.results.forEach(result => list.innerHTML += template(result));
        })
        .catch(error => console.log(error));

    // Search
    const userSearch = document.querySelector("[data-search]");

    userSearch.addEventListener("keyup", filter);

    function filter() {
        var term = document.querySelector("[data-search]").value.toLowerCase();
        var tag = document.querySelectorAll("[data-searchable] .list-item");
        for (i = 0; i < tag.length; i++) {
            if (tag[i].innerHTML.toLowerCase().indexOf(term) !== -1) {
                tag[i].style.display = "flex";
            } else {
                tag[i].style.display = "none";
            }
        }
        list.style.display = term ? "block" : "none";
    }

    const recentSearch = document.querySelector(".recent-search");
    const recentSearchList = document.querySelector(".recent-search__list");
    const clearBtn = document.querySelector(".clear-btn");
    const clearSearch = document.querySelector('.search__clear');

    clearSearch.addEventListener('click', () => {
        userSearch.value = "";
        filter();
    });

    userSearch.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            let inputText = userSearch.value.toLowerCase();
            recentSearchList.insertAdjacentHTML(
                "beforeend",
                `<span class="search-item" onclick="labelSearch('${inputText}')">${inputText}<span class="search-item__close">×</span></span>`
            );
            updateRecentSearchCount();
        }
    });

    function labelSearch(x) {
        userSearch.value = x;
        filter();
    }

    const clearRecent = () => {
        recentSearchList.innerHTML = "";
        clearBtn.setAttribute("disabled", true);
        clearBtn.innerHTML = "No Recent Items";
        userSearch.value = '';
        filter();
    };

    clearBtn.addEventListener('click', clearRecent);

    function updateRecentSearchCount() {
        const recentSearchCount = recentSearchList.childNodes.length;
        if (recentSearchCount > 0) {
            clearBtn.innerHTML = "Clear Items";
            clearBtn.removeAttribute("disabled");
            var btn = document.querySelectorAll(".search-item__close");
            btn.forEach(button => {
                button.addEventListener("click", function (e) {
                    e.currentTarget.parentNode.remove();
                    updateRecentSearchCount();
                });
            });
        } else {
            clearRecent();
        }
    }

    // Hide search results when clicking outside the search box
    document.addEventListener('click', function(event) {
        const searchBox = document.querySelector('[data-id="search-box"]');
        const resultsList = document.querySelector('[data-id="results-list"]');
        if (!searchBox.contains(event.target) && !resultsList.contains(event.target)) {
            list.style.display = "none";
        }
    });



    
