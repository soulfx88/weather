class Storage {
 getStorage() {
  if(localStorage.getItem("info") === null) {
    let storageArr = {
        city: 'Vilnius',
        state: 'LT'
      }; 
    localStorage.setItem("info", JSON.stringify(storageArr)); 
    let storage = JSON.parse(localStorage.getItem("info"));
    return storage;
   } else {
    let storage = JSON.parse(localStorage.getItem("info"));
    return storage;
    //
   }
 }
}