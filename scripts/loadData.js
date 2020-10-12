import getData from './getData.js';

export const loadData = () => {


    if (location.search) {
        const prop = decodeURI(location.search.split('=')[0].slice(1));
        const value = decodeURI(location.search.split('=')[1]);
        
        if (prop === "search") {
            getData.search(value, (data) => {
                let listItem = '';
                let counter = 0;
                let status = "";
                data.forEach(elem => {
                    listItem += `<li class="goods-list__item">
						<article class="goods-item">
							<p class="goods-item__p">${elem.category}</p>
                            <p class="goods-item__p">${elem.subOtdel}</p>
                            <p class="goods-item__p">${elem.userFio}</p>
							<p class="goods-item__p">${elem.userPhone}</p>
						</article>
                </li>`
                
                counter++;
                });
                status = " Результат поиска: Найдено " + counter; 
                getData.render(listItem, status);
            })
        } else{
            const filial = decodeURI(location.search).split('&')[0].split('=')[1];
            const otdel = decodeURI(location.search).split('&')[1].split('=')[1];

            getData.goodsList(filial, otdel, (data, f_v, o_v)=>{
                let status = '';
                status = `<p>Вы выбрали:  ${f_v} > ${ o_v} </p>`;
                let listItem = '';
                data.forEach(elem => {
                    listItem += `<li class="goods-list__item">
						<article class="goods-item">
							<p class="goods-item__p">${elem.category}</p>
                            <p class="goods-item__p">${elem.subOtdel}</p>
                            <p class="goods-item__p">${elem.userFio}</p>
							<p class="goods-item__p">${elem.userPhone}</p>
						</article>
				</li>`
                });
                getData.render(listItem, status);
            })
        }
    }
}