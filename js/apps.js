var baseurl = "https://" + ("%40".repeat(150)) + "@"

// Ultraviolet 2.0 by Titanium Network
const xorEncode = {
    encode(str) {
        if (!str) return str;
        return encodeURIComponent(
            str
                .toString()
                .split('')
                .map((char, ind) =>
                    ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
                )
                .join('')
        );
    }
};
// Ultraviolet 2.0 by Titanium Network

function openapp(app){
    const base = [
        "https://xn--zkr.xn--72cg7bdd3bro6b3ab9c8btw4x.com/",
        "artclass.site/service/"
    ]
    let url
    console.log(baseurl)
    if (app == "google"){
        url = base[0] + xorEncode.encode("https://x.com")
    }
    if (app == "twitter"){
        url = base[0] + xorEncode.encode("https://x.com")
    }
    url = baseurl + xorEncode.encode("intoabyss.org/")
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}