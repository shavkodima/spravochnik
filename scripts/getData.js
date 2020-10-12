
const PARAM ={
    cat:'category',
    subOtdel:'subOtdel',
    search:['userFio', 'userPhone']
}


const getData = {
    url: './database/dataPhone.json',

    get(procces){
        fetch(this.url)
        .then(data=>{
           return data.json();
        }).then(data=>{
            procces(data);
        })
    },

    search(value, callback){
        this.get(data=>{
           const result = data.filter(item=>{
               for(const prop in item){
                   if(PARAM.search.includes(prop) && item[prop].toLowerCase().includes(value.toLowerCase())){
                       return true;
                   }
               }
           })
           callback(result);
        })
    },

    category(callback){
        this.get(data=>{
            const result = data.reduce((arr, item)=>{
               if(!arr.includes(item.category)){
                   arr.push(item.category)
               }
               return arr;
            },[])
            callback(result)
        })
    },

    subcategory(value, callback){
        this.get(data=>{
            const result = data.reduce((arr, item)=>{
                if(!arr.includes(item.subOtdel) && item.category === value){
                    arr.push(item.subOtdel)
                }
                return arr;
            },[])
            callback(result);
        })
    },

    render(data){
        const list = document.querySelector('.goods-list');
        list.innerHTML = data;
    }
};

export default getData;