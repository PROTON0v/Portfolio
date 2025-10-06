// localstorage methods 

export const storage =  {

set(name: string, item) {
    localStorage.setItem(name, JSON.stringify(item));
},

get(item: string) {
   return localStorage.getItem(item);
},

remove(item :string): void {
    localStorage.removeItem(item);
}
}