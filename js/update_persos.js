function update_picsou(game)
{
    var  x;
    var  y;

    if (game === null)
	return;
    x = ((game.perso.pos.x + 16) / 32) | 0;
    y = ((game.perso.pos.y + 16) / 32) | 0;
    if (game.maps[game.act_map].items[y][x] > 0)
	{
	    game.maps[game.act_map].items[y][x] = 0;
	    game.perso.nb_or += 10;
	}
    if (game.perso.nb_or >= 100)
	game.state = STOP;
}
