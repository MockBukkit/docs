---
outline: deep
title: Create a Custom Server Mock
prev:
  text: "Events"
  link: "/docs/en/user_guide/advanced/events"
next:
  text: "Adventure"
  link: "/docs/en/user_guide/advanced/adventure"
---

# Create a Custom Server Mock

Sometimes it may be needed to use a custom implementation of the `ServerMock`
class. This could be if you want to implement some of the unimplemented methods
or simply provide your own mocks for certain methods.

To do that you can simply pass your custom mock that extends `ServerMock` to the
`MockBukkit#mock(ServerNock)` method.

::: code-group

```java [Java]
MyCustomServerMock server = MockBukkit.mock(new MyCustomServerMock());
```

```kotlin [Kotlin]
val server: MyCustomServerMock = Mockbukkit.mock(MyCustomServerMock())
```

:::

Note that `MockBukkit.getMock()` will return a reference to your instance.
