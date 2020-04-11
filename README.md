# Possible ion-router-outlet issue

### Status: SOLVED
#### How: Using workaround
#### Ionic Problem: No
#### Angular problem: Yes

## Description

Can't display pages on secondary ion-router-outer defined in Dashboard page.

The issue was fixed by manipulating the routing table.
Check commit: eb0d730f4ae93e3d6e84afda9b42114609c1f6a4.

You can check more about this issue:

1. **Ionic Forum**: https://forum.ionicframework.com/t/ion-router-outlet-not-working-on-sub-pages/186962
 
1. **Angular Issue Investigation**: https://github.com/bmsantos/angular-nested-router-outlets


## Install

This is an Ionic 6 Project, so please ensure you have version 6 of Ionic CLI installed.
Version used: 6.5.0

```bash
npm i
 ```

## Execute

```bash
ionic serve
```
