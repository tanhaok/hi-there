---
title: What’s New in Java 24 - Key Features and Enhancements
description: Java 24 is around the corner, bringing some exciting new features and updates to the language and the JVM.
date: '2024-11-21'
authors:
    - Hal Nguyen
---

Java 24 is around the corner, bringing some exciting new features and updates to the language and the JVM. Whether you're a seasoned Java developer or just keeping tabs on the latest improvements, this release is designed to make Java more efficient, powerful, and developer-friendly. In this blog post, we’ll walk through the most notable updates that come with Java 24, based on the key JEPs (JDK Enhancement Proposals) in this release.

## 1. JEP 472: Prepare to Restrict the Use of JNI*

![JNI](../../assets/image-128.png)

JEP 472, titled "Prepare to Restrict the Use of JNI," is part of Java's ongoing effort to enhance security and integrity by limiting unsafe operations, especially those involving the Java Native Interface (JNI). This proposal introduces warnings for any use of JNI in preparation for future releases where JNI access will be restricted by default.

The main idea is to allow developers to adapt to upcoming changes by issuing warnings for restricted JNI operations. In future releases, these operations will require explicit permission through the `--enable-native-access` flag, which will need to be set at runtime to grant a module the ability to perform native operations like loading native libraries or binding `native` methods.

The proposal also aligns JNI's behavior with that of the Foreign Function & Memory (FFM) API introduced in previous JDK versions. As a result, when a restricted operation is performed without the necessary permissions, developers can choose how the JVM handles it using the new `--illegal-native-access` option, which controls whether to allow, warn, or `deny` such operations. The ultimate goal is to make `deny` the default mode in the future.

This initiative emphasizes security by encouraging more careful management of native code interactions while giving developers time to adjust before JNI access is fully restricted in subsequent releases.

*JNI: *Java Native Interface or JNI is a standard Java mechanism that allows Java code to interact with C and C++ code*

[Read more](https://openjdk.org/jeps/472)

## 2. JEP 475: Late Barrier Expansion for G1

In the fast-evolving world of cloud-based Java deployments, reducing JVM overhead is crucial for better performance. One area that has seen significant overhead is in JIT compilation, specifically with the C2 compiler and G1 garbage collector. Current early barrier expansion in C2 increases processing time by 10-20%, depending on the application.

To address this, they propose **late barrier expansion**, a method that delays the insertion of G1 barriers until the final stage of C2’s compilation process. This approach significantly reduces overhead while simplifying the work for garbage collector (GC) developers. It builds on the success of ZGC, another Java GC that has used this method since JDK 14.

**Early Barrier Expansion**
![Early](../../assets/image-126-1024x281.webp)

**Late Barrier Expansion**
![Early](../../assets/image-127-1024x281.webp)

By moving barrier expansion to the end of the pipeline, we can minimize the impact on C2’s compilation process, eliminate unnecessary barriers, and optimize memory access handling. Preliminary experiments show promising results, with nearly the same quality code generated as the current C2 process, but with lower overhead.

The shift to late barrier expansion will allow Java applications to run faster in cloud environments without sacrificing code quality or requiring deep C2 knowledge for GC developers. Extensive testing and benchmarking will ensure stability and performance improvements across platforms.

[Read more](https://openjdk.org/jeps/475)

## 3. JEP 484: Class-File API

JEP 484 proposes a new **Class-File API** for the OpenJDK, aimed at making it easier to read, transform, and write Java class files. The current APIs for working with class files are limited, leading developers to rely on third-party libraries. This new API would improve the maintainability and evolution of the JVM by providing a more modern, flexible way to work with class files, while maintaining backward compatibility. The initiative also emphasizes simplifying JVM tools and diagnostics.

[Read more](https://openjdk.org/jeps/484)

## 4. JEP 485: Stream Gatherers

[Read more](https://openjdk.org/jeps/485)

## 5. JEP 489: Vector API (Ninth Incubator)

[Read more](https://openjdk.org/jeps/489)
