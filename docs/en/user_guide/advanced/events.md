---
outline: deep
title: Events
prev:
  text: "Scheduler"
  link: "/docs/en/user_guide/advanced/scheduler"
next:
  text: "Custom ServerMock"
  link: "/docs/en/user_guide/advanced/custom_server_mock"
---

# Events

Checking the status of events is one of the most common task done by any Bukkit
Developer. Therefore, MockBukkit provides support for these kinds of tasks.

## Asserting that Events were fired

Mockbukkit provides a way to check if Events are fired.Events are Classes that
extend `org.bukkit.event.Event` and are fired by Bukkit.

To check if an event is fired, you can use the
`PluginManagerMock.assertEventFired(Class<? extends Event>)`method. This method
takes a class that extends `org.bukkit.event.Event`. It will then check if an
event of that type was fired.

::: code-group

```java [Java]
public class MyPluginTests {
    private ServerMock server;

    @BeforeEach
    public void setUp() {
        server = MockBukkit.mock();
    }

    @AfterEach
    public void tearDown() {
        MockBukkit.unmock();
    }

    @Test
    public void testEvent() {
        Player player = server.addPlayer();
        player.setGameMode(GameMode.CREATIVE);

        server.getPluginManager().assertEventFired(PlayerGameModeChangeEvent.class);
    }
}
```

```kotlin [Kotlin]
class MyPluginTests {

    private lateinit var server: ServerMock

    @BeforeEach
    fun setUp() {
        server = MockBukkit.mock()
    }

    @AfterEach
    fun tearDown() {
        MockBukkit.unmock()
    }

    @Test
    fun testEvent() {
        val player = server.addPlayer()
        player.gameMode = GameMode.CREATIVE

        server.pluginManager.assertEventFired(PlayerGameModeChangeEvent::class.java)
    }
}
```

:::

### Assert Event with specific values

If you want to check if an event was fired with a specific value, you can use
the
`PluginManagerMock.assertEventFired(Class<? extends Event>, Predicate<Event>)`
method.

::: code-group

```java [Java]
public class MyPluginTests {
    private ServerMock server;

    @BeforeEach
    public void setUp() {
        server = MockBukkit.mock();
    }

    @AfterEach
    public void tearDown() {
        MockBukkit.unmock();
    }

    @Test
    public void testEvent() {
        Player player = server.addPlayer();
        player.setGameMode(GameMode.CREATIVE);

        server.getPluginManager().assertEventFired(PlayerGameModeChangeEvent.class, event -> {
            event.getNewGameMode() == GameMode.CREATIVE;
        });
    }
}
```

```kotlin [Kotlin]
class MyPluginTests {

    private lateinit var server: ServerMock

    @BeforeEach
    fun setUp() {
        server = MockBukkit.mock()
    }

    @AfterEach
    fun tearDown() {
        MockBukkit.unmock()
    }

    @Test
    fun testEvent() {
        val player = server.addPlayer()
        player.gameMode = GameMode.CREATIVE

        server.pluginManager.assertEventFired(PlayerGameModeChangeEvent::class.java) { event ->
            event.newGameMode == GameMode.CREATIVE
        }
    }
}
```

:::

### Custom Failure Message with `assertEventFired`

You can also set a custom failure message for the assertion by using the
`PluginManagerMock.assertEventFired(Class<? extends Event>, String)` method.

::: code-group

```java [Java]
public class MyPluginTests {
    private ServerMock server;

    @BeforeEach
    public void setUp() {
        server = MockBukkit.mock();
    }

    @AfterEach
    public void tearDown() {
        MockBukkit.unmock();
    }

    @Test
    public void testEvent() {
        Player player = server.addPlayer();
        player.setGameMode(GameMode.CREATIVE);

        server.getPluginManager().assertEventFired(PlayerGameModeChangeEvent.class, "The event was not fired!");
    }
}
```

```kotlin [Kotlin]
class MyPluginTests {

    private lateinit var server: ServerMock

    @BeforeEach
    fun setUp() {
        server = MockBukkit.mock()
    }

    @AfterEach
    fun tearDown() {
        MockBukkit.unmock()
    }

    @Test
    fun testEvent() {
        val player = server.addPlayer()
        player.gameMode = GameMode.CREATIVE

        server.pluginManager.assertEventFired(PlayerGameModeChangeEvent::class.java, "The event was not fired!")
    }
}
```

:::

## Asserting that Events were not fired

You can also check if an event was not fired by using the
`PluginManagerMock.assertEventNotFired(Class<? extends Event>)` method.

::: code-group

```java [Java]
public class MyPluginTests {
    private ServerMock server;

    @BeforeEach
    public void setUp() {
        server = MockBukkit.mock();
    }

    @AfterEach
    public void tearDown() {
        MockBukkit.unmock();
    }

    @Test
    public void testEvent() {
        Player player = server.addPlayer();
        player.setGameMode(GameMode.CREATIVE);

        server.getPluginManager().assertEventNotFired(PlayerMoveEvent.class);
    }
}
```

```kotlin [Kotlin]
class MyPluginTests {

    private lateinit var server: ServerMock

    @BeforeEach
    fun setUp() {
        server = MockBukkit.mock()
    }

    @AfterEach
    fun tearDown() {
        MockBukkit.unmock()
    }

    @Test
    fun testEvent() {
        val player = server.addPlayer()
        player.gameMode = GameMode.CREATIVE

        server.pluginManager.assertEventNotFired(PlayerMoveEvent::class.java)
    }
}
```

### Custom Failure Message with `assertEventNotFired`

You can also set a custom failure message for the assertion by using the
`PluginManagerMock.assertEventNotFired(Class<? extends Event>, String)` method.

::: code-group

```java [Java]
public class MyPluginTests {
    private ServerMock server;

    @BeforeEach
    public void setUp() {
        server = MockBukkit.mock();
    }

    @AfterEach
    public void tearDown() {
        MockBukkit.unmock();
    }

    @Test
    public void testEvent() {
        Player player = server.addPlayer();
        player.setGameMode(GameMode.CREATIVE);

        server.getPluginManager().assertEventNotFired(PlayerMoveEvent.class, "The event was fired!");
    }
}
```

```kotlin
class MyPluginTests {

    private lateinit var server: ServerMock

    @BeforeEach
    fun setUp() {
        server = MockBukkit.mock()
    }

    @AfterEach
    fun tearDown() {
        MockBukkit.unmock()
    }

    @Test
    fun testEvent() {
        val player = server.addPlayer()
        player.gameMode = GameMode.CREATIVE

        server.pluginManager.assertEventNotFired(PlayerMoveEvent::class.java, "The event was fired!")
    }
}
```

:::
