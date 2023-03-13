export function setCookie(name, value, time = 6) {
    var cookie = name + "=" + encodeURIComponent(value);
    if(typeof time === "number") {
        cookie += "; max-age=" + (time*60*60);
        document.cookie = cookie;
    }
}

export function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
    
export function deleteCookie(name) {
document.cookie = `${name}=; max-age=0`;
document.cookie = `${name}=; path=/; domain=example.com; max-age=0`;
}

