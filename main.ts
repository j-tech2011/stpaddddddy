controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    st_patrick,
    [img`
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
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 6 6 f f f . . . . 
        . . . f f f 6 6 6 6 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 6 6 6 6 6 6 7 7 f . . 
        . . f 7 6 f f f f f f 6 7 f . . 
        . . f f f f d d d d f f f f . . 
        . f f d f b f d d f b f d f f . 
        . f d d d 1 f d d f 1 d d d f . 
        . . f 1 1 d d d d d d 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f f f 1 1 f f 1 1 f f f . . 
        . . f d f e e e e e e f d f e . 
        . . f f f 6 6 5 5 6 6 f f f . e 
        . . . . . e e e e e e . . . . e 
        . . . . . e e . . e e . e e e . 
        `,img`
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
        `],
    200,
    false
    )
    projectile = sprites.createProjectileFromSprite(img`
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
        `, st_patrick, 50, 50)
    animation.runImageAnimation(
    projectile,
    [img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f 7 7 f . . . . . 
        . . . . . . f 7 7 7 7 f f f . . 
        f f . . . . f 7 7 7 7 f 7 7 f . 
        f 7 f f f f 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f f f f f 7 7 7 7 7 7 7 7 f 
        . . . . . . f 7 7 7 7 f 7 7 f . 
        . . . . . . f 7 7 7 7 f f f . . 
        . . . . . . . f 7 7 f . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f f . . . . . . 
        . . . . . . . f 7 f . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . f f f 7 7 f f . . . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . . . f f 7 7 7 f f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . . f 7 7 7 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 7 7 f . . . . . . . 
        . . f f f 7 7 7 7 f . . . . . . 
        . f 7 7 f 7 7 7 7 f . . . . . . 
        f 7 7 7 7 7 7 7 7 f f f f f . . 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 f f f f 7 f 
        . f 7 7 f 7 7 7 7 f . . . . f f 
        . . f f f 7 7 7 7 f . . . . . . 
        . . . . . f 7 7 f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f 7 7 f . . . . . 
        . . . . . . f 7 7 7 7 f f f . . 
        f f . . . . f 7 7 7 7 f 7 7 f . 
        f 7 f f f f 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f f f f f 7 7 7 7 7 7 7 7 f 
        . . . . . . f 7 7 7 7 f 7 7 f . 
        . . . . . . f 7 7 7 7 f f f . . 
        . . . . . . . f 7 7 f . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f f . . . . . . 
        . . . . . . . f 7 f . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . f f f 7 7 f f . . . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . . . f f 7 7 7 f f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . . f 7 7 7 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 7 7 f . . . . . . . 
        . . f f f 7 7 7 7 f . . . . . . 
        . f 7 7 f 7 7 7 7 f . . . . . . 
        f 7 7 7 7 7 7 7 7 f f f f f . . 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 f f f f 7 f 
        . f 7 7 f 7 7 7 7 f . . . . f f 
        . . f f f 7 7 7 7 f . . . . . . 
        . . . . . f 7 7 f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . f 7 7 7 7 f . . . . . 
        . . . . . f 7 7 7 7 f . . . . . 
        . . . . . . f 7 7 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
function set_up () {
    tiles.setCurrentTilemap(tilemap`level1`)
    st_patrick = sprites.create(img`
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
        `, SpriteKind.Player)
    controller.moveSprite(st_patrick)
    scene.cameraFollowSprite(st_patrick)
    snakes(100)
}
function snakes (num: number) {
    for (let index = 0; index < num; index++) {
        frankie = sprites.create(img`
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
            `, SpriteKind.Enemy)
        tiles.placeOnTile(frankie, tiles.getTileLocation(randint(0, 31), randint(0, 31)))
        frankie.setVelocity(randint(50, 100), randint(50, 100))
        frankie.setBounceOnWall(true)
    }
}
let frankie: Sprite = null
let projectile: Sprite = null
let st_patrick: Sprite = null
set_up()
