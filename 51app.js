// CallBack Hell - Nested callbacks stacked one another forming a pyramid structure. (puramid of doom) 
// this style of programming becomes difficult to understand & manage.(nested mean > ak chiz ke andr dusri chiz or dusri chiz ke andr thsri chiz or tisri chiz ke andr chothi chiz eese aage badta reta hai)


function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});

// getData(1);
// getData(2);
// getData(3);