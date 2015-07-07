function new_Picsou(win)
{
    var  struct;
    var  spr;
    var  loc;

    spr = loadSpriteSheet("js/picsou.ppm", win);
    loc = new_2dpos(1024, 448)
    struct = {
	pos: loc,
	nb_or: 0,
	score: 0,
	nb_chars: 0,
	power_up: 0,
	sprite: spr,
	is_inlife: true
    };
    return (struct);
}

function draw_sprite_sheet(sheet, height, win)
{
    var  i;

    i = -1;
    while (++i < sheet.length)
	mlj_put_image_to_window(win, sheet[i], i * 32, height);
}

function PicsouGame(win)
{
    var  struct;
    var	 pnj;
    var  picsou;
    var  sheet_itm;
    var  sheet_bck;

    if (win === "undefined")
	return ("undefined");
    pnjs = new_DefaultListPnjs(win);
    picsou = new_Picsou(win);
    sheet_itm = loadSpriteSheet("js/items.ppm", win);
    sheet_bck = loadSpriteSheet("js/world.ppm", win);
    struct = {
	fen: win,
	state: STOP,
	maps: "undefined",
	act_map: 0,
	lpnj: pnjs,
	perso: picsou,
	sprites_itm: sheet_itm,
	sprites_bck: sheet_bck
    };
    return (struct);
}