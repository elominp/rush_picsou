function stop_game(game)
{
    var  end;

    game.state = STOP;
    end = load_image("js/endtitle.ppm", game.fen);
    mlj_put_image_to_window(game.fen, end, 0, 0);
}

function reset_game(game)
{
    game.state = STOP;
    window.cancelAnimationFrame(game.id);
    game.act_map = 0;
    game.lpnj = new_DefaultListPnjs(game.fen);
    game.perso = new_Picsou(game.fen);
}

function set_maps(game, maps)
{
    game.maps = maps;
    game.act_map = 0;
}

function run_game(game)
{
    var  back_sound;

    game.state = RUNNING;
    game.perso.is_inlife = true;
    game.opening.pause();
    draw_map(game);
    draw_items(game);
    game.id = window.requestAnimationFrame(launch);
    back_sound = new Audio("final_destination.mp3");
    back_sound.play();
    launch(game);
}
