---
cover: /assets/images/gemini-py-pkg.png
icon: python
date: 2025-07-05
category:
  - python
tag:
  - python
  - packaging
star: false
sticky: false
---

# Python Packaging
I've made a lot of private python packages for work over the years - it's a great way to modularize and re-use code. Some of these have been tooling for data scientists and engineers, such as a package of various utility functions to simplify common tasks in our AWS Sagemaker environment or for using Azure blob storage rather than local files. Others have been a means to distribute tools to other teams - for example an ipywidget based tool that allowed solutions engineers to do common data analysis and be able to do more advanced/ad-hoc/speciialized things in a sagemaker notebook when needed. Others have been entire products or major features that can get pulled into larger systems or be run as separate microservices - such as a package of various metrics you may want to compute for data, this package can be loaded by a lambda that computes the desired metric against some part of the data. This design makes it easy for a data scientist to work with, test, and evolve the metric computation functionality while sperating how the metric will be used (in a single lambda, as part of larger server-based API, a batch reporting script, etc.) and allowing for clean versioning of the metric.

Making python packages is easy and I've found it very useful, but there's a lot of variations on how to do this (some are more dated) and some useful techniques that can be under-utilized. For the purposes of this post, let's assume you have a collection of code in the directory `awesome_python_tools` that you want to make into a package, we'll go through:

- Organizing the code into a package
- The best ways to maintain the package or use by others
- How to share your package

# Package Organization and Setup

## pyproject.toml

## Use your __init__.py
When you first try to re-use python code by importing something from one file into another, you may see you have to have a blank `__init__.py` file in the directory. To make a full package, you need `__init__.py` files in the main package directory and each subdirectory or the package won't build, but these can just be blank files. What's the point of these if they are blank? Well-designed packages don't leave the `__init__.py` files blank, they use them to make imports easier for users.

### Aliasing Imports
One main capability of the `__init__.py` files are to alias or abstract the package directory structure from the user. If all of you init files are blank, then for a user to import the `bar2` function from `awesome_python_tools/foo1/sub_foo1/bar.py` they would need to have `import bar2 from awesome_python_tools.foo1.sub_foo1.bar`. This means that importing specific classes or functions requires knowing the package directory structure (which is messy at best), especially if we have more than one `bar2` function - such as the one in `foo2/sub_foo2/bar.py`. In our top-level `__init__.py` file, we can specify which `bar2` is imported if a user does `import bar2 from awesome_python_tools` by putting the line `import bar2 from awesome_python_tools.foo1.sub_foo1.bar` in the `__init__.py`. We could also alias these different `bar2` functions with 
```python
from awesome_python_tools 

### `__all__`
## Sub-packages

# Tooling
## uv

## Linting

## Formating

## Type-Checking

## Testing

# Distribution
Without distribution, no one else can really take advantage of your packaging efforts. You can't properly distribute your package unless you know who the target users are.

## Public 
If you want anyone to be able to use your package then the best distribution channel is to list the package on pypi.org. There are a number of good guides for this and lots of examples (just take a look at any open-source python package), so I don't have much to add.

## Private
More likely, you have code/functionality that is proprietary or only of real interest within a part of your company so you need to keep the package private. To distribute your package internally but not publicly, you will need to take advantage of the code versioning and CI/CD tools used by your company so there could be lots of variation or special cases but they are all conceptually similar. I'll go through the two I've used the most: GitHub and Azure DevOps.

At this point, you have a git repository containing your package and you have installed and used your package locally in other projects.

### No-Frills Git
The obvious way that someone else can use your package is to clone the repo, and then install it locally like you've done. This requires no additional effort on your part beyond perhaps documenting how to install/import a locally defined package. This may work for other people with similar skillsets and workflows to you, but will be less ideal for users working in a different way or with different skills.

### Git+(ssh|https)
The easy way to avoid setting up a local development environment to install/use the package is to leverage pip functionality. By default, pip will look in public pypi indexes for packages and versions you ask to be installed. If you give pip (or pip-compatible tools) a package name starting with `git+ssh` or `git+http` then pip will look in the provided git repository to install the package. This means the user must have access to read the repository, and provides our access control to the package - if the repo is private then only users with access to the repo will be able to install the package.


### Azure DevOps
Azure DevOps (ADO) is GitHub+extra stuff. This means, we can just use the methods already discussed in Azure DevOps, but we could also take advantage of some of the extras that ADO provides - the Artifact Feed. The Artifact Feed allows you to distribute packages in a variety of languages to your ADO environment by providing a private index for various package managers. One Artifact Feed can distribute packages for Python, C#, Ruby, JavaScript, etc., you don't need a separate feed for each language.
