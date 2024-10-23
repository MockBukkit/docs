---
outline: deep
title: Migrate to Mockbukkit 4 using OpenRewrite
next: false
prev:
    link: '/docs/en/user_guide/migration/migrate_mockbukkit_4.0'
    text: 'Migrate to Mockbukkit 4'
---

# Migrate to Mockbukkit 4 using OpenRewrite

Migration to version 4 was carefully automated by the MockBukkit team using OpenRewrite scripts to facilitate the migration process. To run the scripts, follow the steps for your package manager.

If you are using Maven, you can do the migration by executing the following command:

::: code-group

```bash [Maven]
mvn org.openrewrite.maven:rewrite-maven-plugin:run \
    -Drewrite.recipeArtifactCoordinates=org.mockbukkit:rewrite-recipes:1.0.0 \
    -Drewrite.activeRecipes=org.mockbukkit.rewrite.PackageRename,org.mockbukkit.rewrite.ClassRename
```

:::

Otherwise, you will need to add OpenRewrite plugin to your project with the correct configuration:

::: code-group
```xml [Maven]
<plugins>
    <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.42.2</version>
        <!--Add the recipe source to your project’s rewrite configuration-->
        <configuration>
            <activeRecipes>
                <recipe>org.mockbukkit.rewrite.PackageRename</recipe>
                <recipe>org.mockbukkit.rewrite.ClassRename</recipe>
            </activeRecipes>
        </configuration>
        <!--Add the Mockbukkit recipes-->
        <dependencies>
            <dependency>
                <groupId>org.mockbukkit</groupId>
                <artifactId>rewrite-recipes</artifactId>
                <version>1.0.0</version>
            </dependency>
        </dependencies>
    </plugin>
    <!-- Other plugins-->
</plugins>
```
```kotlin [Gradle Kotlin DSL]
plugins {
    id("org.openrewrite.rewrite") version "6.x.x"
}

dependencies {
    // Add the Mockbukkit recipes
    rewrite("org.mockbukkit:rewrite-recipes:1.0.0") 
}

// Add the recipe source to your project’s rewrite configuration
rewrite {
   activeRecipe("org.mockbukkit.rewrite.PackageRename")
   activeRecipe("org.mockbukkit.rewrite.ClassRename")
}
```
```groovy [Groovy Kotlin DSL]
plugins {
    id("org.openrewrite.rewrite") version "6.x.x"
}

dependencies {
    // Add the Mockbukkit recipes
    rewrite("org.mockbukkit:rewrite-recipes:1.0.0") 
}

// Add the recipe source to your project’s rewrite configuration
rewrite {
   activeRecipe("org.mockbukkit.rewrite.PackageRename")
   activeRecipe("org.mockbukkit.rewrite.ClassRename")
}
```
:::

Run OpenRewrite to refactor your code:

::: code-group
```bash [Maven]
mvn rewrite:run
```
```bash [Gradle]
./gradlew rewriteRun
```
:::