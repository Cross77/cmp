# cmp
components in js/html

##demo
http://cross77.github.io/cmp/

##example

model:

```
<cmp>
  <div class="title-big">
      <h1 class="content"></h1>
      </hr>
  </div>
</cmp>
```

using:

```
<title-big> Example </title-big>
```

init:

```
$(function(){
  CMP();
});
```

## init

model must be in div, default it is "<cmp>" but if you want change this you must set first parametr with selector, e.g. :

```
<div class="abc">...</div>
```

```
CMP('div.abc');
```
