 const generateHeader = () =>{
    const header =`
    <header>
    <div class="container">
        <div class="header">
            <button class="btn btn-burger" aria-label="открыть меню">
                <svg focusable="false" class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M20 8H4V6H20V8ZM20 13H4V11H20V13ZM20 18H4V16H20V18Z"></path>
                </svg>
            </button>
            <p class="logo-title">Справочник телефонов "Минсктранс"</p>
            <form class="search" method="get" action="goods.html">
                <input type="search" name="search" maxlength="150" class="search-input" spellcheck="false"
                       aria-label="Искать товары, новинки и вдохновение"
                       aria-placeholder="Искать товары, новинки и вдохновение" placeholder="Введите фамилию"
                       autocapitalize="off" autocomplete="off" autocorrect="off">
                <button type="submit" class="btn search-btn" aria-label="найти"></button>
            </form>
        </div>
    </div>
</header>
    `;

    document.body.insertAdjacentHTML('afterbegin', header);
}

export default generateHeader;
