var game;

function main()
{
    var  win;
    var  music;
    var  img;

    mlj_init("Picsou Game");
    win = mlj_new_window(1600, 960, "#AAAAAA", "game");
    game = PicsouGame(win);
    music = new Audio("opening.mp3");
    music.play();
    game.opening = music;
    mlj_key_hook(key_event, null);
    mlj_upload_button(loadFile, game, "game", "upload");
    img = load_image("js/opening.ppm", win);
    mlj_put_image_to_window(win, img, 0, 0);
}
