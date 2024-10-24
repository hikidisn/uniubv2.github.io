<html>
<head>
    <title>(title)</title>
    <meta http-equiv="refresh" content="1;URL=(Url normal)">
</head>
<body>
    <div>
        <iframe style="border: medium none ; overflow: hidden; width: 800px; height: 300px;"
                src="(url with unblocker)”  
                frameborder="0"
                scrolling="yes"></iframe>
    </div>
    <script>
        setInterval(function()
        {
            console.log("here");
            var elem=document.getElementsByTagName('iframe')[0];
            elem.src=elem.getAttribute("src");
        }, 45000);
    </script>
</body>
I added this to your repository, this may be useful later.
It redirects webpages to avoid any bad stuff happening
