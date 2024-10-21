---
outline: deep
title: Entities
---

# {{ $frontmatter.title }}

In Spigot and all derivative forks, `Entity` is the parent class of all animals,
mobs and several more things. Therefore it's a common abstraction used in a lot of code.
We added several Methods to our `EntityMock` implementation that will make testing much easier.

## Asserting Location

Oftentimes you want to check the Location of an entity. To simply this, 
Mockbukkit provides the `EntityMock.assertLocation(Location,double)` method.
It allows you to check if the entity is within a given range around the specified `Location`

::: code-group

```java [Java]
@Test
void test_AssertLocation() {
    //Assumes you already have entity instance
    entity.assertLocation(new Location(entity.getWorld(),0,0,0),2);
}
```

```kotlin [Kotlin]
@Test
fun test_AssertLocation() {
    //Assumes you already have entity instance
    entity.assertLocation(Location(entity.getWorld(),0,0,0),2)
}
```

:::

## Assert teleported

You can also assert a player has been teleported by a Plugin

::: code-group

```java [Java]
@Test
void test_assertTeleported() {
    //Assumes you already have entity instance
    entity.assertTeleported(location, distance);
}
@Test
void test_assertTeleported() {
    //Assumes you already have entity instance
    entity.assertNotTeleported();
}

```

```kotlin [Kotlin]
@Test
fun test_assertTeleported() {
    //Assumes you already have entity instance
    entity.assertTeleported(location, distance)
}
@Test
fun test_assertTeleported() {
    //Assumes you already have entity instance
    entity.assertNotTeleported()
}
```

:::

If you want to reset the `teleported` flag,
just call the `EntityMock.clearTeleported()` method

In Bukkit, the only way to move a Entity is by teleporting it.
As this might interfere with tests, we added the `EntityMock.setLocation(location)` method
to move an entity without changing the teleported flag


## Rename an Entity

In Mockbukkit you can also rename the entity to your hearts content

::: code-group

```java [Java]
entity.setName("new-name");
```

```kotlin [Kotlin]
entity.setName("new-name")
```

:::

