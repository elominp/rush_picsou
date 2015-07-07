function new_SpriteSheet()
{
    var  raw_img;
    var  nb_sprites;
}

function cut_sheet(sheet, n, win)
{
    var  tab;
    var  i;
    var	 j;
    var  k;
    var  m;
    var  o;

    if (sheet === "undefined" || n === "undefined" || n <= 0 || win === null)
	return ("undefined");
    tab = new Array(n);
    i = -1;
    while (++i < n)
	{
	    tab[i] = mlj_new_image(win, 32, 32);
	    m = -1;
	    j = -1;
	    while (++m < 32)
		{
		    k = (n * 32 * 4) * m + (i * 32 * 4);
		    o = -1;
		    while (++o < (32 * 4))
			tab[i].data[++j] = sheet.data[o + k];
		}
	}
    return (tab);
}

function loadSpriteSheet(url, win)
{
    var  sheet;
    var  n;
    var  tab;

    if (url === "undefined" || win === "undefined" || n === "undefined")
	return ("undefined");
    sheet = load_image(url, win);
    n = (sheet.width / 32) | 0;
    return (cut_sheet(sheet, n, win));
}
