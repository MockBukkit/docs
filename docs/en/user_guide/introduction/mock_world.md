---
outline: deep
title: Creating a Mock World
next:
    text: 'Entities'
    link: '/docs/en/user_guide/entities/entity'
prev:
    text: 'Writing your first test'
    link: '/docs/en/user_guide/introduction/first_test'
---

# Creating a Mock World

Often times one needs to interact with the minecraft world.
MockBukkit always creates superflat worlds on the fly.
Each block in the world is generated the moment it is accessed for the first time,
so creation new worlds is a very cheap operation.

The following code will create a flat world

::: code-group

```java [Java]
WorldMock world = server.addSimpleWorld("my_world");
```

```kotlin [Kotlin]
val world = server.addSimpleWorld("my_world")
```

:::

Every time MockBukkit is started a world called `world` is automatically created.
All players are also added to this default world.