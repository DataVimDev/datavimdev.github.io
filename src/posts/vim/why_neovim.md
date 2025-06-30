---
cover: /assets/images/gemini-beach-sunset.png
icon: pen
date: 2025-06-30
category:
  - vim
tag:
  - history
  - engineering
  - background
star: true
sticky: true
---

# Why NeoVim?
Data scientists are supposed to live in Jupyter right? Or maybe VS Code but still using notebooks? I have a not-very-secret dislike of Jupyter style notebooks. They have their place, and I use them for experiementation especially involving visuals, but they've never been my happy place. I've always loved the command line and interacting with a computer via a keyboard. Notebooks make this hard, plus there's too many ways that notebooks get messy.

The short answer to why use NeoVim is that it gives me control and flexibility, while still providing modern convience and asthetics. It also fits into how I like to use a computer and edit code, it allows me to learn new things and build expertise in something that many people think is antiquated.

## Aside on my Computational History
I grew up with computers. My dad had a background in electrical engineering so we always had a computer in the house (this was the late 1980's). He was a DR-DOS user, avoiding Microsoft products as long as possible. The computer was a tool and you generally used a keyboard to do things - occassionaly a joystick for some games - but there was no need for a mouse.

Eventually, graphical interfaces became common but in college I was introduced to Linux and rediscovered the joy and power of the command line. I tried many distributions but soon settled into Slackware - because I liked a computer to do exactly what I wanted, without hiding the details. My editor of choice during became Emacs - I was a college student/mathemticain and most of my editing was writing papers, lecture notes, and some programming but generally from scratch as opposed to editing an existing codebase. Emacs is good for this, the default 'mode' is to insert with special commands to do special operations (like save to a file or run spell-check).

Eventually, I got overwhelmed with handling all my own package management in Slackware (back then slackware 'packages' were just 'tgz' files that were unzipped and usually compiled - if compilation failed you had to fix it or not use the package). I switched to Arch Linux so I could also have a blend of customizability/control, modern features, and an up-to-date system. I worked great until my first industry job bought me a Mac.

## Converting From Emacs
As a math professor, I had to teach a number of statistics courses and was already using R for some things. I began using RStudio for courses (classrooms had Windows machines, so RStudio was easier to install and use than Emacs or a Linux environment - this was long before WSL). Eventually I started using Atom and then VS Code for programming (including LaTeX documents) and was using Emacs less and less. It didn't make me want to write or code anymore and felt clunky.

When I got my first industry data science job, all engineers at the company used MacBook Pros. I also had to really start using python heavily, so I started working in Jupyter and VS Code primarily but the Mac Unix environment was much better than having to use Windows. I was surprised how nice things just worked on a Mac - a lot could be customized, but you didn't have to spend a week or 2 setting things up just to be able to open a browser or do anything useful. At this job, I also was using git in shared repositories for really the first time, which meant I had to do interactive rebases - which dumped me into Vim for the first time in years.

## Initial Vim Encounters
I had encountered Vim in my early days with Linux (I doubt anyone could avoid it then), but it was a strange, non-sensical thing. Like many people, I was baffled by an editor that seemed to ignore every key I pressed. I don't remember how I got into Vim the first time, but I remember having to switch to another virtual terminal and kill the shell on the other to stop vim - this was before Google and killing the shell was the easiest thing to do.

Eventually, using git forced me to learn basic vim. I knew I could change the default editor, but my initial git experiences were often helping students use a repository so I would have also required them to change their default editors in git. This allowed me to switch modes, save, exit, do basic editing but I certainly didn't see the power of vim.

## Finding NeoVim
After years of professional software development in VS Code, it was driving me nuts. It had become slow and bloated, it's JavaScript based extension system irritated me (I really don't like JavaScript), and it's auto-completion was more problematic than beneficial. I also started working with people who used VS Code for everything - all git and terminal operations (which in Windows kind of makes sense) but having to help them with non-standard git workflows felt like I was wrestling with the editor more than leveraging a powerful tool.

Around this time I also encountered some youtude videos from the Primeagen showing off vim motions. This was the first time I had really heard anyone explain Vim's design and I immediately saw how powerful it was for working with existing code where most of your activity is moving around and making small changes. I tried using vim motions in VS Code, but it seemed like just adding another layer to a pile of garbage I wanted nothing to do with.

I started using NeoVim, and rediscovered the joy of configuring a software tool. The fact the the configuration was in Lua added some learning curve, but was much better than JavaScript and more powerful than yaml. Neovim was how I wanted to edit files, how I wanted to interact with my computer (keyboard first) and it provided modern convenience and features that I had complete control over. Plus, it allowed my to return to a command-line focused workflow

Basically, NeoVim reminded me why I liked programming and using a computer in the first place, it re-kindled my joy. I'm far from an expert, and still learning/mastering motions, but I'm having fun again.
