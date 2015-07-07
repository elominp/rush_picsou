function my_sleep(time)
{
    var  timetowait;

    timetowait = new Date().getTime() + time;
    while (new Date().getTime() < timetowait);
}

function move_fantome(pnj, picsou)
{
    var  pnjx;
    var  pnjy;
    var  picx;
    var  picy;
    var  rx;
    var  ry;

    if (pnj === null || picsou === null)
	return;
    pnjx = ((pnj.pos.x + 16) / 32) | 0;
    pnjy = ((pnj.pos.y + 16) / 32) | 0;
    picx = ((picsou.pos.x + 16) / 32) | 0;
    picy = ((picsou.pos.y + 16) / 32) | 0;
    rx = Math.abs(pnjx - picx);
    ry = Math.abs(pnjy - picy);
    if (rx < ry)
	pnj.pos.y += (pnjy < picy) ? 1 : -1;
    else
	pnj.pos.x += (pnjx < picx) ? 1 : -1;
}

function get_fct_move()
{
    var  tab;

    tab = [];
    tab["fantome"] = move_fantome;
    return (tab);
}

function move_pnj(pnj, picsou)
{
    var  tab;

    if (pnj === null || picsou === null ||
	(tab = get_fct_move()) === "undefined")
	return;
    if (tab[pnj.type] === "undefined")
	return;
    else
	tab[pnj.type](pnj, picsou);
}

function test_picsoucollide(pnj, picsou)
{
    var  pnjx;
    var  pnjy;
    var  picx;
    var  picy;

    if (pnj === null || picsou == null)
	return (false);;
    pnjx = ((pnj.pos.x + 16) / 32) | 0;
    pnjy = ((pnj.pos.y + 16) / 32) | 0;
    picx = ((picsou.pos.x + 16) / 32) | 0;
    picy = ((picsou.pos.y + 16) / 32) | 0;
    if ((picx == pnjx) && (picy == pnjy))
	return (true);
    return (false);
}

function refresh_mobs(game)
{
    var  i;

    if (game === null)
	return;
    i = -1;
    while (++i < game.lpnj.length)
	{
	    if (test_picsoucollide(game.lpnj[i], game.perso) == true)
		game.perso.is_inlife = false;
	    move_pnj(game.lpnj[i], game.perso);
	}
}

function limit_framerate(fps, elapsedt)
{
    var  time;
    var  delay;

    if (fps === null || elapsedt === null || fps > 60)
	return;
    time = new Date().getTime();
    delay = (1000 / fps) | 0;
    if (elapsedt < delay)
	my_sleep(delay - elapsedt);
}

function launch()
{
    var  elapsedtime;

    elapsedtime = new Date().getTime();
    if (game.state == RUNNING && game.perso.is_inlife == true)
	{
	    my_draw(game);
	    refresh_mobs(game);
	    //limit_framerate(30, elapsedtime);
	    requestAnimationFrame(launch);
	}
    if (game.state == STOP || game.perso.is_inlife == false)
	stop_game(game);
}
