function Map(buffer, deb)
{
    var  bck;
    var  itm;
    var  map;
    var  i;
    var  j;
    var  z;

    i = -1;
    bck = new Array(30);
    itm = new Array(30);
    while (++i < 30)
    {
	j = 0;
	z = -1;
	bck[i] = new Array(50);
	itm[i] = new Array(50);
	while (j < 100)
	{
	    bck[i][++z] = buffer[deb + (i * 101) + j];
	    itm[i][z] = buffer[deb + (i * 101) + j + 1];
	    j += 2;
	}
    }
    map = { world: bck, items: itm };
    return (map);
}

function loadFile(buffer, game)
{
    var  maps;
    var  nb_maps;
    var  i;

    if (buffer === "undefined" || game === "undefined")
	return;
    nb_maps = (buffer.length / (30 * 101)) | 0;
    if (nb_maps == 0)
	return;
    maps = new Array(nb_maps);
    i = -1;
    while (++i < nb_maps)
	maps[i] = Map(buffer, i * (30 * 101));
    stop_game(game);
    reset_game(game);
    set_maps(game, maps);
    run_game(game);
}
