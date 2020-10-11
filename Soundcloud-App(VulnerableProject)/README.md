# 🎶 Soundcloud App.

# 👉🏽 [Demo](https://5cec4231a5e4b6ecd190d44b--maizcloud.netlify.com/)

This app built with React.js. 
Developed with ❤️ by [Artur Maizelev](https://www.arturmaiz.com/). 
If you love my project please star ⭐️ my repo!

## Instalation 

1. Clone repository
```shell
git clone https://github.com/arturmaiz/Soundcloud-App.git
```
2. Get in the project folder
```shell
cd lets-eat
```
3. Install dependencies via npm or yarn
```shell
npm install
```
```shell
yarn install
```

## How can I support developers?
- Star our GitHub repo :star:
- Tweet about it.
- Create pull requests, submit bugs, suggest new features or documentation updates 🛠

## Vulnerable Project with low severity.
What to do? You can simply remove the Vulnerable dependencies.


1 minimist vulnerability found in Soundcloud-App/yarn.lock

**Remediation**
Upgrade minimist to version 0.2.1 or later. For example:

```
minimist@^0.2.1:
  version "0.2.1"
```

*Always verify the validity and compatibility of suggestions with your codebase.*

**Details**

**CVE-2020-7598**

```
low severity
Vulnerable versions: < 0.2.1
Patched version: 0.2.1
Affected versions of minimist are vulnerable to prototype pollution. Arguments are not properly sanitized, allowing an attacker to modify the prototype of Object, causing the addition or modification of an existing property that will exist on all objects.
Parsing the argument --__proto__.y=Polluted adds a y property with value Polluted to all objects. The argument --__proto__=Polluted raises and uncaught error and crashes the application.
This is exploitable if attackers have control over the arguments being passed to minimist.
```

**Recommendation**
Upgrade to versions 0.2.1, 1.2.3 or later.