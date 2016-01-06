---
layout: post
title: "spire"
category: "Numeric abstractions"
description: "Spire is a numeric library for Scala which is intended to be generic, fast, and precise. Using features such as specialization, macros, type classes, and implicits, Spire works hard to defy conventional wisdom around performance and precision trade-offs."
github: "https://github.com/non/spire"
---

Spire is a numeric library for Scala which is intended to be generic, fast, and precise.

Using features such as specialization, macros, type classes, and implicits, Spire works hard to defy conventional wisdom around performance and precision trade-offs. A major goal is to allow developers to write efficient numeric code without having to "bake in" particular numeric representations. In most cases, generic implementations using Spire's specialized type classes perform identically to corresponding direct implementations.