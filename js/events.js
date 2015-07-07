function bboxcollide(box1, box2)
{
    if (box1 === null || box2 === null || box1 === "undefined" ||
	box2 === "undefined")
	return (true);
    if (((box1.x >= box2.x) && (box1.x <= (box2.x + box2.width))) ||
	(((box1.x + box1.width) >= box2.x) && ((box1.x + box1.width) <=
					       (box2.x + box2.width))) ||
	((box1.y >= box2.y) && (box1.y <= (box2.y + box2.height))) ||
	(((box1.y + box1.height) >= box2.y) && ((box1.y + box1.height) <=
						(box2.y + box2.height))))
	return (true);
    if ((box2.x >= (box1.x + box1.width)) ||
	((box2.x + box2.width) <= box1.x) ||
	(box2.y >= (box1.y + box1.height)) ||
	((box2.y + box2.height) <= box1.y))
	return (false);
    return (true);
}

function new_box(px, py, w, h)
{
    var  box;

    if (px === null || py === null || w === null || h === null ||
	px === "undefined" || py === "undefined" || w === "undefined" ||
	h === "undefined")
	return ("undefined");
    box = {
	x: px,
	y: py,
	width: w,
	height: h
    };
    return (box);
}

function collide_wall(rx, ry, pos, sz)
{
    var  bperso;
    var  bwall;
    var  wx;
    var  wy;

    if (rx === null || ry === null || pos === null || rx === "undefined" ||
	ry === "undefined" || pos === "undefined" || sz === null ||
        sz === "undefined")
	return ("undefined");
    bperso = new_box(pos.x + rx, pos.y + ry, sz.width, sz.height);
    /*wx = (rx <= 0) ? (((pos.x + rx) / 32) | 0) * 32 :
	(((pos.x + rx + sz.width) / 32) | 0) * 32;
    wy = (ry <= 0) ? (((pos.y + ry) / 32) | 0) * 32 :
	(((pos.y + ry + sz.height) / 32) | 0) * 32;*/
    wx = (((pos.x + rx) / 32) | 0) * 32;
    wy = (((pos.y + ry) / 32) | 0) * 32;
    bwall = new_box(wx, wy, 32, 32);
    if ((bboxcollide(bperso, bwall)) == true &&
	game.maps[game.act_map].world[(bwall.y / 32) | 0][(bwall.x / 32) | 0] >
	0)
	return (true);
    return (false);
}

function new_size(w, h)
{
    var  sz;

    if (w === null || h === null || w === "undefined" || h === "undefined")
	return ("undefined");
    sz = {
	width: w,
	height: h
    };
    return (sz);
}

function collide_picsou(rx, ry)
{
    var  picsz;

    picsz = new_size(32, 32);
    if (rx === null || ry === null)
	return (true);
    if (collide_wall(rx, ry, game.perso.pos, picsz) == true)
	return (true);
}

function padding(pos, map, dir)
{
    var  px;
    var  py;

    px = pos.x;
    py = pos.y;
    if (pos === null || map === null || dir === null || pos === "undefined" ||
	map === "undefined" || dir === "undefined")
	return;
    if (dir == "up")
	py = ((py / 32) | 0) * 32;
    else if (dir == "down")
	py = (((py + 32) / 32) | 0) * 32;
    else if (dir == "left")
	px = ((px / 32) | 0) * 32;
    else if (dir == "right")
	px = (((px + 32) / 32) | 0) * 32;
    pos.x = px;
    pos.y = py;
}

function key_event(keycode)
{
    if (keycode == 38 && !collide_picsou(0, -5))
	game.perso.pos.y -= 5;
    /*else if (keycode == 38 && collide_picsou(0, -5))
	padding(game.perso.pos, game.maps[game.act_maps], "up");*/
    if (keycode == 40 && !collide_picsou(0, 5))
	game.perso.pos.y += 5;
    /*else if (keycode == 40 && collide_picsou(0, 5))
	padding(game.perso.pos, game.maps[game.act_maps], "down");*/
    if (keycode == 37 && !collide_picsou(-5, 0))
	game.perso.pos.x -= 5;
    /*else if (keycode == 37 && collide_picsou(-5, 0))
	padding(game.perso.pos, game.maps[game.act_maps], "left");*/
    if (keycode == 39 && !collide_picsou(5, 0))
	game.perso.pos.x += 5;
    /*else if (keycode == 39 && collide_picsou(5, 0))
	padding(game.perso.pos, game.maps[game.act_maps], "right");*/
    game.perso.pos.y = (game.perso.pos.y >= 0) ? game.perso.pos.y : 0;
    game.perso.pos.y = (game.perso.pos.y < 928) ? game.perso.pos.y : 928;
    game.perso.pos.x = (game.perso.pos.x >= 0) ? game.perso.pos.x : 0;
    game.perso.pos.x = (game.perso.pos.x < 1568) ? game.perso.pos.x : 1568;
}
