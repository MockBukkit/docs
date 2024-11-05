---
outline: deep
title: MessageTarget
next:
  text: "Scheduler Mock"
  link: "/docs/en/user_guide/advanced/scheduler"
prev:
  text: "Player"
  link: "/docs/en/user_guide/entities/player"
---

# MessageTarget

The `MessageTarget` interface is a small interface implemented by methods that can receive messages.
Two examples of message targets are `ConsoleCommandSenderMock` and `EntityMock`.

## Using `MessageTarget`

Any message that was sent to the target can be read using

::: code-group

```java [Java]
@Test
void test_receive(){
    SimpleEntityMock entity = new SimpleEntityMock();
    entity.sendMessage("Hello world!");
    String message = entity.nextMessage();
}
```

```kotlin [Kotlin]
@Test
fun test_receive() {
    val entity = SimpleEntityMock()
    entity.sendMessage("Hello world!")
    val message = entity.nextMessage()
}
```

:::

It also contains two assert methods to check if a message was or wasn’t received.

::: code-group

```java [Java]
@Test
void test_assert(){
    SimpleEntityMock entity = new SimpleEntityMock();
    entity.sendMessage("Hello world!");
    entity.assertSaid("Hello world!");
    entity.assertNoMoreSaid();
}
```

```kotlin [Kotlin]
@Test
fun test_assert() {
    val entity = SimpleEntityMock()
    entity.sendMessage("Hello world!")
    entity.assertSaid("Hello world!");
    entity.assertNoMoreSaid();
}
```

:::
