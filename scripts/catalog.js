import generateSubCatalog from "./generateSubCatalog.js";
import getData from "./getData.js";

export const catalogList = ()=>{
    const updateSubCategory = generateSubCatalog();
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnCloseMenu = document.querySelector('.btn-close');
    const subCatalogOpen = document.querySelector('.subcatalog');
    const subCatalogReturn = document.querySelector('.btn-return');
    const subcatalogHeader = document.querySelector('.subcatalog-header');

    const  openMenu = () =>{
        catalog.classList.add('open');
    }

    const closeMenu = () =>{
        catalog.classList.remove('open');
        closeSubCatalog();
    }

    const openSubCategory = (event) =>{
        event.preventDefault();
        const target = event.target;
        const itemList = target.closest('.catalog-list__item');    
        
        if(itemList){
            getData.subcategory(target.textContent, data=>{
                updateSubCategory(target.textContent, data);
                subCatalogOpen.classList.add('subopen');
            })
        }
    }

    const closeSubCatalog = () =>{
        subCatalogOpen.classList.remove('subopen');
    }

    btnBurger.addEventListener('click', openMenu);
    btnCloseMenu.addEventListener('click', closeMenu);
    catalog.addEventListener('click', openSubCategory);
    subCatalogReturn.addEventListener('click', closeSubCatalog)
}