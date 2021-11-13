
const setCookie = (name, value) => {
    const now = new Date();
    now.setTime(now.getTime() + 15*60*1000);
    const sExpires = now.toUTCString();
    document.cookie=`${name}=${value};expires=${sExpires};path=/`;
  }

setCookie('viewed', 5);  
setCookie('uid', '354774631237');  
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');  

const cookieHandler = {
    getAll() {
        return document.cookie.split('; ').reduce((all, val) => ({ ...all, [val.split('=')[0]]: val.split('=')[1]}), {});
    },

    toSessionStorage() {
        const cookies = this.getAll();
        for (let key in cookies) {
            sessionStorage.setItem(key, cookies[key]);
        }
    },
    flush() {
        const cookies = this.getAll();
        const sExpires = new Date(0).toUTCString();
        for (let key in cookies) {
            document.cookie=`${key}=;expires=${sExpires};path=/`;
        }       
    }
};

 export { cookieHandler };
