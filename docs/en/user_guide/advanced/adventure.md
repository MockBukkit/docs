---
outline: deep
title: Adventure
prev:
  text: "Create a Custom Server Mock"
  link: "/docs/en/user_guide/advanced/custom_server_mock"
next:
  text: "Compatibility with paperweight"
  link: "/docs/en/user_guide/advanced/paperweight"
---

# Adventure

::: info

This talks about the
[Kyori Adventure](https://github.com/KyoriPowered/adventure-platform) Library.
This has no connection to the Adventure Gamemode

:::

## Platform

When using MockBukkit with the non-native implementation of Adventure,
you may run into issues with static fields persisting with `Audiences`,
even after executing `MockBukkit.unmock()`.This can cause undesired issues when
running consecutive tests like chat messages not sending.

The solution is to include a `platform.close()` statement in the `onDisable()`
method of your plugin.

::: code-group

```java:line-numbers [Java]
BukkitAudiences platform;

public void onEnable() {
    platform = BukkitAudiences.create(pluginInstance);
}

public void onDisable() {
    platform.close();
}
```

```kotlin:line-numbers [Kotlin]
lateinit var platform: BukkitAudiences

override fun onEnable() {
    platform = BukkitAudiences.create(pluginInstance)
}

override fun onDisable() {
    platform.close()
}
```
