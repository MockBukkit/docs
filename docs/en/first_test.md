---
outline: deep
---

# Writing your first test

This page will guide you through the process of writing your first test.

## Creating a test class

The first step is to create a test class. The convention is to put this class
in the `src/test/java` or `src/test/kotlin` directory, depending on your language of choice.

Create a new class called `HelloWorldTest.java` in the `src/test/java` directory.

::: tip
Its common practice to name test classes with the `Test` suffix,
so `HelloWorldTest` is a good name if you are writing a test 
for the `HelloWorld` class. The name doesn't matter, but it's a good convention.
The `Test` suffix helps identify test classes easily, and it's recognized by most build tools and testing frameworks
for running tests automatically.
:::

::: warning
You're class can't be `final`. This is because MockBukkit uses reflection to
modify the behavior of the class under test.  In Kotlin, classes are `final` by default,
so you must declare them as `open` for MockBukkit to function properly.
:::

Here's an example of a test class

::: code-group

```java [Java]
public class MyPluginTests {

    private ServerMock server;
    private MyPlugin plugin;

    @BeforeEach
    public void setUp() {
        // Start the mock server
        server = MockBukkit.mock();
        // Load your plugin
        plugin = MockBukkit.load(MyPlugin.class);
    }

    @AfterEach
    public void tearDown() {
        // Stop the mock server
        MockBukkit.unmock();
    }

    @Test
    public void thisTestWillFail() {
        // Perform your test
    }
}
```

```kotlin [Kotlin]
class MyPluginTests {

    private lateinit var server: ServerMock
    private lateinit var plugin: MyPlugin

    @BeforeEach
    fun setUp() {
        // Start the mock server
        server = MockBukkit.mock()
        // Load your plugin
        plugin = MockBukkit.load(MyPlugin::class.java)
    }

    @AfterEach
    fun tearDown() {
        // Stop the mock server
        MockBukkit.unmock()
    }

    @Test
    fun thisTestWillFail() {
        // Perform your test
    }
}
```
:::

## UnimplementedOperationException

Sometimes, you will need to test a method that is not implemented yet.
When this happens, MockBukkit will throw an `UnimplementedOperationException`.
This exception extends `TestAbortedException`, so it will cause the test to skip.

These can be ignored, as a skipped test will not affect the overall test result.
However, we always welcome any contributions to MockBukkit that implement
the missing functionality. If you are interested in contributing, please
read the [Contributing Guide](https://github.com/Mockbukkit/Mockbukkit/blob/master/CONTRIBUTING.md).
