---
outline: deep
title: Player
prev:
  text: "Entities"
  link: "/docs/en/user_guide/entities/entity"
next:
  text: "MessageTarget"
  link: "/docs/en/user_guide/entities/message_target"
---

# Player

The `Player` class is the main class for interacting with players in MockBukkit. We provide a mock for it
in form of the `PlayerMock`.

## Adding a Player

Mockbukkit has several methods to add players to the test server.

### Adding a single Player

#### `ServerMock.addPlayer()`

This method adds a player to the server. It returns a `PlayerMock` object which can be used to interact with the player.
This method creates a random player.

::: code-group

```java [Java]
PlayerMock player = server.addPlayer();
```

```kotlin [Kotlin]
val player: PlayerMock = server.addPlayer()
```

:::

#### `ServerMock.addPlayer(String)`

This method adds a player to the server with the given name.

::: code-group

```java [Java]
PlayerMock player = server.addPlayer("Player1");
```

```kotlin [Kotlin]
val player: PlayerMock = server.addPlayer("Player1")
```

:::

#### `ServerMock.addPlayer(PlayerMock)`

If you want to customize the Player object even further, you can specify
the object you want to be added to the Server by providing a `PlayerMock` instance.

::: code-group

```java
public PlayerMock getCustomPlayer(){
    PlayerMock playerMock = new PlayerMock(server, "custom_name", UUID.randomUUID());

    playerMock.setGameMode(GameMode.CREATIVE);

    return playerMock;
}

public static void main(String[] args) {
    PlayerMock playerMock = server.addPlayer(getCustomPlayer());
}

```

```kotlin [Kotlin]
fun getCustomPlayer(): PlayerMock {
    return PlayerMock(server, "custom_name", UUID.randomUUID()).apply {
        gameMode = GameMode.CREATIVE
    }
}

fun main() {
    val playerMock = server.addPlayer(getCustomPlayer())
}

```

:::

### Adding multiple Players

Sometimes you need a larger number of Players to the Server.
For this usecase, Mockbukkit provides the `Server.addPlayers(int)` method.

The following example will add 20 Players to the Server

::: code-group

```java [Java]
ServerMock server = Mockbukkit.getMock();
server.setPlayers(20);
```

```kotlin [Kotlin]
val server = Mockbukkit.getMock()
server.setPlayers(20)
```

:::

After this, you can easily reference these Players with the `Server.getPlayer(int)` method
by specifying the index.

## PlayerMock Methods

Mockbukkit has added several methods that make unit testing players easier and nicer.
In all examples we assume that your unit Tests starts with

::: code-group

```java [Java]
PlayerMock player = server.addPlayer();
```

```kotlin [Kotlin]
val player = server.addPlayer()
```

:::

As `PlayerMock` extends the `EntityMock` class, the methods referenced int [Entities](entity.md) also apply.

This section isn't an exhaustive list of Methods we have added, please refer to the
[Javadocs](https://javadoc.io/doc/com.github.seeseemelk/MockBukkit-v1.21) for more information.

### Asserting the Gamemode of the player

A common task is checking the Gamemode a player currently is using. We provide a
convenience Method to make testing these a little bit easier. The `assertGameMode(Gamemode)`
method throws and `AssertionException`,
which will cause the test to fail if the Gamemode is different from the expected one.

::: code-group

```java [Java]
player.assertGameMode(GameMode.SURVIVAL);
```

```kotlin [Kotlin]
player.assertGameMode(GameMode.SURVIVAL)
```

:::

### Simulate player disconnecting

To simulate a Player disconnecting, use the `disconnect()` method. This will set the
Player as offline but keeps it as an `OfflinePlayer`.

:::code-group

```java [Java]
player.disconnect();
```

```kotlin [Kotlin]
player.disconnect()
```

:::

### Simulate a player reconnecting

After a Player has been [disconnected](#simulate-player-disconnecting), it’s possible to simulate a reconnection.
This will set the Player as online and restore it’s full Functionality.

:::code-group

```java [Java]
player.reconnect();
```

```kotlin [Kotlin]
player.reconnect()
```

:::
