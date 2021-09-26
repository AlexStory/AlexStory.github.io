---
title: creating a winforms app in F# on dotnet core
tags: ['dotnet', 'F#', 'winforms']
summary: In this post, I'm going to describe how to create a F# .NET app that runs on winforms.
---

# Why Winforms F#?

I'm not really sure. I was reading through an older F# book that made a lot of small examples in winforms, and since I only have .NET core on my machine right now, I wanted to see if it was possible, and couldn't find any easy resources on how to do it.

# Getting Started

So we are going to assume that you already have dotnet core installed on your machine. If not head over [asp.net]("https://asp.net") and get it.

First just make a new F# console app.

`dotnet new console -lang F#`

The next thing that you are going to have to do is add a `<UseWindowsForms>true</UseWendowsForms>` to the PropertyGroup in your fsproj file.

You may also have to add a `-windows` to your `<TargetFramework>` depending on your dotnet sdk version.

It should look like this

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net5.0-windows</TargetFramework>
    <UseWindowsForms>true</UseWindowsForms>
  </PropertyGroup>

  <ItemGroup>
    <Compile Include="Program.fs" />
  </ItemGroup>

</Project>
```

Next, head over to your Program.fs and make the following changes.

Add an `open System.Windows.Forms` to the top.

You will also need to ad `STAThread` to your attribute tag on the main.

This should be how it looks now.

```fsharp
// Learn more about F# at http://docs.microsoft.com/dotnet/fsharp

open System
open System.Windows.Forms

// Define a function to construct a message to print
let from whom =
    sprintf "from %s" whom

[<EntryPoint; STAThread>]
let main argv =
    let message = from "F#" // Call the function
    printfn "Hello world %s" message
    0 // return an integer exit code
```

With that you can try to make simple forms and run it and it should work.

Here is my HelloWorld form

```fsharp
open System
open System.Windows.Forms

[<EntryPoint; STAThread>]
let main argv =
    let form = new Form (Width=400, Height=300, Text="F# Forms")
    form.Show ()
    Application.Run form
    0 
```

then just `dotnet run` and it should work. 