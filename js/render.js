function draw_map(game)
{
    var  i;
    var  j;
    var  sprite;

    if (game === null)
	return;
    i = -1;
    while (++i < 30)
	{
	    j = -1;
	    while (++j < 50)
		{
		    sprite = game.maps[0].world[i][j];
		    mlj_put_image_to_window(game.fen, game.sprites_bck[sprite],
					    j * 32, i * 32);
		}
	}
}

function draw_items(game)
{
    var  i;
    var  j;
    var  sprite;

    if (game === null)
	return;
    i = -1;
    while (++i < 30)
	{
	    j = -1;
	    while (++j < 50)
		{
		    sprite = game.maps[game.act_map].items[i][j];
		    if (sprite != 0)
			mlj_put_image_to_window(game.fen,
						game.sprites_itm[sprite - 1],
						j * 32, i * 32);
		}
	}
}

function refresh_rect(rect, game)
{
    var  i;
    var  j;
    var  h;
    var  w;
    var  sprite;

    if (rect === null || game === null)
	return;
    i = ((rect.y / 32) | 0) - 1;
    h = (i + 1) + ((rect.height / 32) | 0);
    w = ((rect.x / 32) | 0) + ((rect.width / 32) | 0);
    while (++i < h)
	{
	    j = ((rect.x / 32) | 0) - 1;
	    while (++j < w)
		{
		    sprite = game.maps[game.act_map].world[i][j];
		    mlj_put_image_to_window(game.fen,
					    game.sprites_bck[sprite], j * 32,
					    i * 32);
		    sprite = game.maps[game.act_map].items[i][j];
		    if (sprite != 0)
			mlj_put_image_to_window(game.fen,
						game.sprites_itm[sprite - 1],
						j * 32, i * 32);
		}
	}
    if (rect === null || rect === "undefined")
	return;
}

function draw_picsou(game)
{
    var  x;
    var  y;
    var  box;

    if (game === null)
	return;
    x = game.perso.pos.x;
    y = game.perso.pos.y;
    x = (x < 0) ? 0 : x;
    y = (y < 0) ? 0 : y;
    box = new_box(x - 32, y - 32, 96, 96);
    //refresh_rect(box, game);
    mlj_put_image_to_window(game.fen, game.perso.sprite[0], x, y);
    update_picsou(game);
}

function draw_pnjs(game)
{
    var  i;
    var  x;
    var  y;
    var  box;

    if (game === null)
	return;
    i = -1;
    while (++i < game.lpnj.length)
	{
	    x = game.lpnj[i].pos.x;
	    y = game.lpnj[i].pos.y;
	    box = new_box(x - 32, y - 32, 96, 96);
	    //refresh_rect(box, game);
	    mlj_put_image_to_window(game.fen, game.lpnj[i].sprite, x, y);
	}
}

function my_draw(game)
{
    draw_map(game);
    draw_items(game);
    draw_picsou(game);
    draw_pnjs(game);
}
