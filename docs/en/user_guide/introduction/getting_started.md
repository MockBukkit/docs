---
outline: deep
title: Getting Started
next:
    text: 'Writing your first test'
    link: '/docs/en/user_guide/introduction/first_test'
---

# Getting Started

In order to use MockBukkit, you first have to integrate it into your build tool.
You will also need to know which version of MockBukkit to use.
MockBukkit version numbering can be a little bit confusing.
The most important thing to remember is that each version of MockBukkit is named after
the version of Bukkit it implements, followed by the version number of MockBukkit itself.

For instance: `MockBukkit-v1.21 <mockbukkit-version>` is the `<mockbukkit-version>`
release of MockBukkit, targeting plugins build for Minecraft 1.21.
The latest stable version can always be found on
[Maven Central](https://search.maven.org/search?q=MockBukkit).

## Installing MockBukkit

If you are new to Maven or Gradle, visit either the [Maven Install Guide](https://maven.apache.org/install.html) or
the [Gradle installation guide](https://docs.gradle.org/current/userguide/installation.html)
to set up your build tool

MockBukkit is available on Maven Central, so you can use the following dependency
in your build tool of choice:

::: code-group

```xml [Maven]
<dependencies>
    <dependency>
        <groupId>org.mockbukkit.mockbukkit</groupId>
        <artifactId>MockBukkit-v1.21</artifactId>
        <version>4.0.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

```groovy [Gradle]
dependencies {
    testImplementation 'org.mockbukkit.mockbukkit:MockBukkit-v1.21:4.0.0'
}
```

```kotlin [Gradle Kotlin DSL]
dependencies {
    testImplementation("org.mockbukkit.mockbukkit:MockBukkit-v1.21:4.0.0")
}
```
:::

## Running MockBukkit

MockBukkit is a test framework, so you will need to run your tests using a test runner.
Mockbukkit recommends using the [JUnit](https://junit.org/junit5/) test runner.

You can run your tests using the following command:

::: code-group

```bash [Maven]
mvn test
```

```bash [Gradle]
gradle test
```

:::

If you are using a different test runner,
you will need to configure it to use MockBukkit.
While other test runners like [TestNG](https://testng.org/) exist,
Mockbukkit has not verified compatibility with them. This does not mean that
Mockbukkit might work with them, but it is not tested.
