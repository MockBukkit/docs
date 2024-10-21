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

### Example
This shows an example with a Method that at the time of writing is not yet implemented.

::: info

The method used in this example might be implemented down the road.
Since most of our effort goes into developing the production code,
the documentation might become out of date.
This doesn't diminish this example, just the output might be different. 

If you want to contribute a better example to the documentation,
feel free to open a Pull Request changing this.

:::

#### Plugin Class
::: code-group

```java [Java]
package org.mockbukkit.docsdemo;

import org.bukkit.plugin.java.JavaPlugin;

public class DemoPlugin extends JavaPlugin {

	@Override
    public void onEnable() {
        getLogger().info("DemoPlugin enabled");
    }

	@Override
    public void onDisable() {
        getLogger().info("Plugin disabled");
    }

}
```

```kotlin [Kotlin] 
package org.mockbukkit.docsdemo

import org.bukkit.plugin.java.JavaPlugin

class DemoPlugin: JavaPlugin() {

    override fun onEnable() {
        logger.info("${this.name} enabled")
    }
    override fun onDisable() {
        logger.info("${this.name} disabled")
    }
}
```

:::

#### Test Class

::: code-group

```java [Java]
package org.mockbukkit.docsdemo;

import org.mockbukkit.mockbukkit.MockBukkit;
import org.mockbukkit.mockbukkit.ServerMock;
import org.bukkit.Location;
import org.bukkit.World;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DemoPluginTest {

    World world;

    @BeforeEach
    void setUp() {
        ServerMock mock = MockBukkit.mock();
        DemoPlugin plugin = MockBukkit.load(DemoPlugin.class);
        this.world = mock.addSimpleWorld("test");
    }

    @AfterEach
    void tearDown() {
        MockBukkit.unmock();
    }

    @Test
    void test() {
        world.createExplosion(new Location(world, 0, 0, 0), 0.2f);
    }
}
```

```kotlin [Kotlin]
package org.mockbukkit.docsdemo

import org.mockbukkit.mockbukkit.MockBukkit
import org.mockbukkit.mockbukkit.ServerMock
import org.bukkit.Location
import org.bukkit.World
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import kotlin.jvm.java

class DemoPluginTest {

    private lateinit var world: World

    @BeforeEach
    fun setUp() {
        val mock: ServerMock = MockBukkit.mock()
        val plugin = MockBukkit.load(DemoPlugin::class.java)
        world = mock.addSimpleWorld("test")
    }

    @AfterEach
    fun tearDown() {
        MockBukkit.unmock()
    }

    @Test
    fun test() {
        world.createExplosion(Location(world, 0.0, 0.0, 0.0), 0.2f)
    }
}

```
:::

#### Executing the code

Executing the test with Gradle, the task will still succeed, since there are only skipped tests.

```bash
./gradlew test
```

::: details Output
```
BUILD SUCCESSFUL in 522ms
4 actionable tasks: 4 up-to-date
```
:::

With `JUnit`'s `assertThrow()` assertion, we can still get the actual error

::: details Excpetion
```
Not implemented
org.mockbukkit.mockbukkit.UnimplementedOperationException: Not implemented
	at app//org.mockbukkit.mockbukkit.WorldMock.createExplosion(WorldMock.java:1928)
	at app//org.mockbukkit.docsdemo.DemoPluginTest.lambda$test$0(DemoPluginTest.java:32)
	at app//org.junit.jupiter.api.AssertThrows.assertThrows(AssertThrows.java:53)
	at app//org.junit.jupiter.api.AssertThrows.assertThrows(AssertThrows.java:35)
	at app//org.junit.jupiter.api.Assertions.assertThrows(Assertions.java:3128)
	at app//org.mockbukkit.docsdemo.DemoPluginTest.test(DemoPluginTest.java:32)
	at java.base@21.0.4/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base@21.0.4/java.lang.reflect.Method.invoke(Method.java:580)
	at app//org.junit.platform.commons.util.ReflectionUtils.invokeMethod(ReflectionUtils.java:766)
	at app//org.junit.jupiter.engine.execution.MethodInvocation.proceed(MethodInvocation.java:60)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain$ValidatingInvocation.proceed(InvocationInterceptorChain.java:131)
	at app//org.junit.jupiter.engine.extension.TimeoutExtension.intercept(TimeoutExtension.java:156)
	at app//org.junit.jupiter.engine.extension.TimeoutExtension.interceptTestableMethod(TimeoutExtension.java:147)
	at app//org.junit.jupiter.engine.extension.TimeoutExtension.interceptTestMethod(TimeoutExtension.java:86)
	at app//org.junit.jupiter.engine.execution.InterceptingExecutableInvoker$ReflectiveInterceptorCall.lambda$ofVoidMethod$0(InterceptingExecutableInvoker.java:103)
	at app//org.junit.jupiter.engine.execution.InterceptingExecutableInvoker.lambda$invoke$0(InterceptingExecutableInvoker.java:93)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain$InterceptedInvocation.proceed(InvocationInterceptorChain.java:106)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain.proceed(InvocationInterceptorChain.java:64)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain.chainAndInvoke(InvocationInterceptorChain.java:45)
	at app//org.junit.jupiter.engine.execution.InvocationInterceptorChain.invoke(InvocationInterceptorChain.java:37)
	at app//org.junit.jupiter.engine.execution.InterceptingExecutableInvoker.invoke(InterceptingExecutableInvoker.java:92)
	at app//org.junit.jupiter.engine.execution.InterceptingExecutableInvoker.invoke(InterceptingExecutableInvoker.java:86)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.lambda$invokeTestMethod$8(TestMethodTestDescriptor.java:217)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.invokeTestMethod(TestMethodTestDescriptor.java:213)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:138)
	at app//org.junit.jupiter.engine.descriptor.TestMethodTestDescriptor.execute(TestMethodTestDescriptor.java:68)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:156)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:146)
	at app//org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:144)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:143)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:100)
	at java.base@21.0.4/java.util.ArrayList.forEach(ArrayList.java:1596)
	at app//org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:41)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:160)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:146)
	at app//org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:144)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:143)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:100)
	at java.base@21.0.4/java.util.ArrayList.forEach(ArrayList.java:1596)
	at app//org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.invokeAll(SameThreadHierarchicalTestExecutorService.java:41)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$6(NodeTestTask.java:160)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$8(NodeTestTask.java:146)
	at app//org.junit.platform.engine.support.hierarchical.Node.around(Node.java:137)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.lambda$executeRecursively$9(NodeTestTask.java:144)
	at app//org.junit.platform.engine.support.hierarchical.ThrowableCollector.execute(ThrowableCollector.java:73)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.executeRecursively(NodeTestTask.java:143)
	at app//org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:100)
	at app//org.junit.platform.engine.support.hierarchical.SameThreadHierarchicalTestExecutorService.submit(SameThreadHierarchicalTestExecutorService.java:35)
	at app//org.junit.platform.engine.support.hierarchical.HierarchicalTestExecutor.execute(HierarchicalTestExecutor.java:57)
	at app//org.junit.platform.engine.support.hierarchical.HierarchicalTestEngine.execute(HierarchicalTestEngine.java:54)
	at app//org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:107)
	at app//org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:88)
	at app//org.junit.platform.launcher.core.EngineExecutionOrchestrator.lambda$execute$0(EngineExecutionOrchestrator.java:54)
	at app//org.junit.platform.launcher.core.EngineExecutionOrchestrator.withInterceptedStreams(EngineExecutionOrchestrator.java:67)
	at app//org.junit.platform.launcher.core.EngineExecutionOrchestrator.execute(EngineExecutionOrchestrator.java:52)
	at app//org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:114)
	at app//org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:86)
	at app//org.junit.platform.launcher.core.DefaultLauncherSession$DelegatingLauncher.execute(DefaultLauncherSession.java:86)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor$CollectAllTestClassesExecutor.processAllTestClasses(JUnitPlatformTestClassProcessor.java:124)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor$CollectAllTestClassesExecutor.access$000(JUnitPlatformTestClassProcessor.java:99)
	at org.gradle.api.internal.tasks.testing.junitplatform.JUnitPlatformTestClassProcessor.stop(JUnitPlatformTestClassProcessor.java:94)
	at org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:63)
	at java.base@21.0.4/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base@21.0.4/java.lang.reflect.Method.invoke(Method.java:580)
	at org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)
	at org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)
	at org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)
	at org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:92)
	at jdk.proxy2/jdk.proxy2.$Proxy6.stop(Unknown Source)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker$3.run(TestWorker.java:200)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.executeAndMaintainThreadName(TestWorker.java:132)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:103)
	at org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:63)
	at org.gradle.process.internal.worker.child.ActionExecutionWorker.execute(ActionExecutionWorker.java:56)
	at org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:121)
	at org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:71)
	at app//worker.org.gradle.process.internal.worker.GradleWorkerMain.run(GradleWorkerMain.java:69)
	at app//worker.org.gradle.process.internal.worker.GradleWorkerMain.main(GradleWorkerMain.java:74)
```

:::