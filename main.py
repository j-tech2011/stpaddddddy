def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
            . . . . . . . f f f . . . . . .
            . . . . . . f 7 7 7 f . . . . .
            . . . . . f 7 7 7 7 7 f . . . .
            . . . . . f 7 7 7 7 7 f . . . .
            . . . . . f f 7 7 7 f f . . . .
            . . . . f 7 7 7 7 7 7 7 f . . .
            . . . f 7 7 7 7 7 7 7 7 7 f . .
            . . . f 7 7 7 7 7 7 7 7 7 f . .
            . . . . f 7 7 7 7 7 7 7 f . . .
            . . . . . f f 7 7 f f f . . . .
            . . . . . . . f 7 f . . . . . .
            . . . . . . . f 7 f . . . . . .
            . . . . . . . f 7 f . . . . . .
            . . . . . . . f 7 f . . . . . .
            . . . . . . f 7 f . . . . . . .
            . . . . . . f f . . . . . . . .
            """),
        st_patrick,
        50,
        50)
    animation.run_image_animation(projectile,
        [img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """)],
        500,
        False)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def set_up():
    global st_patrick
    tiles.set_current_tilemap(tilemap("""
        level1
        """))
    st_patrick = sprites.create(img("""
            . . . . . . f f f f . . . . . .
            . . . . f f f 6 6 f f f . . . .
            . . . f f f 6 6 6 6 f f f . . .
            . . f f f 7 7 7 7 7 7 f f f . .
            . . f f 7 6 6 6 6 6 6 7 7 f . .
            . . f 7 6 f f f f f f 6 7 f . .
            . . f f f f d d d d f f f f . .
            . f f d f b f d d f b f d e e .
            . f d d d 1 f d d f 1 d e d f e
            . . f 1 1 d d d d d d 1 e f . e
            . . . f 1 1 1 1 1 1 1 1 e . . e
            . . f f f 1 1 f f 1 1 f f f . .
            . . f d f 7 1 1 1 1 7 f d f . .
            . . f f f 6 6 5 5 6 6 f f f . .
            . . . . . e e e e e e . e . . .
            . . . . . e e . . e e . e . . .
            """),
        SpriteKind.player)
    controller.move_sprite(st_patrick)
    scene.camera_follow_sprite(st_patrick)
    snakes(100)
def snakes(num: number):
    global frankie
    for index in range(num):
        frankie = sprites.create(img("""
                . . . . . . . . . . . c c c c c
                . . . . . . . . . c c e 1 e e c
                . . . . . . . . c c e e e c c .
                . . . . . . . . c e 1 e c . . .
                . . . . . . . . c e e 1 c . . .
                . . . . . . . . c d e e c c . .
                . . . c c c c c c c e e 1 c c .
                . . c e e d e e e c c e 1 e c .
                . c e d e e e 1 e e c e 1 e c c
                c e e e e 1 e e e 1 e c e e e c
                c e c e 1 e e c e e e c e 1 e c
                f e c c e e e c e e 1 f e e e c
                f e e f e e f e e e e f e 1 e c
                . f e e e e e e e e e f e e c .
                . c e 1 f f 1 e e e f e e c c .
                . c c 1 c c 1 c c c c c c . . .
                """),
            SpriteKind.enemy)
        tiles.place_on_tile(frankie,
            tiles.get_tile_location(randint(0, 31), randint(0, 31)))
        frankie.set_velocity(randint(50, 100), randint(50, 100))
        frankie.set_bounce_on_wall(True)
frankie: Sprite = None
st_patrick: Sprite = None
projectile: Sprite = None
set_up()