---
outline: deep
title: Scheduler Mock
next:
    text: 'Events'
    link: '/docs/en/user_guide/advanced/events'
prev:
    text: 'MessageTarget'
    link: 'docs/en/user_guide/entities/message_target'
---

# Scheduler Mock

MockBukkit allows the testing of timers and delays that are normally created using the Bukkit scheduler.
This schedulers is used in the same way as a normal scheduler except that it adds several extra methods.

## Executing Ticks

The scheduler can be asked to perform a single tick

::: code-group

```java [Java]
ServerMock server = Mockbukkit.getMock();
server.getScheduler().performOneTick();
```

```kotlin [Kotlin]
val server = Mockbukkit.getMock()
server.scheduler.performOneTick()
```

:::

If more ticks need to be executed in quick succession, it’s possible to execute many ticks at once.
The following code will perform a hundred ticks.

::: code-group

```java [Java]
ServerMock server = Mockbukkit.getMock();
server.getScheduler().performTicks(100L);
```

```kotlin [Kotlin]
val server = Mockbukkit.getMock()
server.scheduler.performTicks(100L)
```

:::

Using this method executes all ticks in order, as if they were executed on a real server.

## Getting the current tick

MockBukkit has an extra method that allows to get the number of ticks since MockBukkit was last started.

::: code-group

```java [Java]
long tick = server.getScheduler().getCurrentTick();
```

```kotlin [Kotlin]
val tick: Long = server.scheduler.getCurrentTick();
```

:::