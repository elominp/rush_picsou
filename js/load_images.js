function load_image(url, win)
{
    var  loader;
    var  tmp;

    if (url === "undefined" || win === "undefined")
	return ("undefined");
    loader = new XMLHttpRequest();
    loader.open("GET", url, false);
    loader.send();
    tmp = loader.responseText;
    return (ppmtoimg(tmp.split("\n"), win));
}

function ppmtoimg(str, win)
{
    var  i;
    var  j;
    var  size;
    var  img;

    if (str === "undefined" || str[0] != "P3" || win === "undefined")
	return ("undefined");
    i = 0;
    while (str[++i][0] == '#');
    size = str[i].split(' ');
    if (size[0] === "undefined" || size[1] === "undefined")
	return ("undefined");
    size[0] = size[0] | 0;
    size[1] = size[1] | 0;
    img = mlj_new_image(win, size[0], size[1]);
    j = -1;
    while (++i < str.length)
	{
	    img.data[++j] = str[i + 1] | 0;
	    img.data[++j] = str[i + 2] | 0;
	    img.data[++j] = str[i] | 0;
	    img.data[++j] = 255;
	    i += 2;
	}
    return (img);
}
