---
outline: deep
title: Compatibility with paperweight
next: false
prev:
  text: "Adventure"
  link: "/docs/en/user_guide/advanced/adventure"
---

# Compatibility with paperweight

MockBukkit is not compatible with the paperweight provided artifact (also known as NMS).
Whenever these two artifacts are simultaneously provided at test time, you will stumble uppon
multiple issues that stem from providing two separate server implementations at the same time.
This is not possible to fix without completely rewriting MockBukkit!

## The general pattern of these issues

- Something has not been initialized
- Two service providers can not be provided simultaneously

## The solution

There's no perfect solution, as it's impossible to have both dependencies at test time, but you can
exclude the paperweight provided artifact at test time now with paperweight 2.

```kts
dependencies {
  paperweight.paperDevBundle("your-chosen-paper-version")
  testImplementation("your-mockbukkit-dependency")
}

paperweight {
  addServerDependencyTo = configurations.named(JavaPlugin.COMPILE_ONLY_CONFIGURATION_NAME).map { setOf(it) }
}
```

::: warning
With this, you can't use any NMS behavior during tests with MockBukkit
:::
