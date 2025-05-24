controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    vy = -100
    vx = 0
})
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
        `, st_patrick, vx, vy)
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = -100
    vy = 0
})
function set_up () {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnTile(st_patrick, tiles.getTileLocation(29, 33))
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnTile(st_patrick, tiles.getTileLocation(61, 65))
    } else {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(st_patrick, tiles.getTileLocation(125, 129))
    }
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
    enemies = []
    snakes(snakeAmount)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 100
    vy = 0
})
function snakes (num: number) {
    for (let index = 0; index < num; index++) {
        frankie = sprites.create(img`
            . . . . c c c c c c . . . . . . 
            . . . c 4 5 5 5 5 4 c . . . . . 
            . . c 5 5 5 5 5 5 5 5 c . . . . 
            . c 4 5 5 5 5 5 5 5 5 4 c . . . 
            . c 5 c 4 4 4 4 c 5 5 5 c . . . 
            . f 5 4 f 4 4 f 4 5 5 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 4 c 5 5 4 f c . . 
            . . . f c c c c 5 5 4 f 5 5 c . 
            . . c 5 2 5 5 5 4 c f 5 5 5 5 c 
            . c 5 5 2 5 5 c f c 4 5 5 4 c c 
            c d d d d 5 4 f c c 4 4 4 c . . 
            f d d d d d 4 4 c 4 4 4 4 f . . 
            f 4 d d d d d 4 4 4 4 4 c f . . 
            . f 4 d d d d d d 4 4 4 f . . . 
            . . c c c c c c c c c f . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(frankie, tiles.getTileLocation(randint(0, 31), randint(0, 31)))
        frankie.setVelocity(randint(50, 100), randint(50, 100))
        frankie.setBounceOnWall(true)
        enemies.push(frankie)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    vy = 100
    vx = 0
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 2000)
    enemies.pop()
    info.setScore(enemies.length)
})
let frankie: Sprite = null
let enemies: Sprite[] = []
let projectile: Sprite = null
let st_patrick: Sprite = null
let vx = 0
let vy = 0
let snakeAmount = 0
let level = 0
level = 1
snakeAmount = 100
set_up()
forever(function () {
    if (enemies.length == 0) {
        snakeAmount = snakeAmount * 2
        level += 1
        set_up()
    }
})
