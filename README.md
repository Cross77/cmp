# cmp
components js/html

##demo
http://cross77.github.io/cmp/

##example

somewhere in html:

```
<title-big>BOX</title-big>
```

model:

```
<cmp>
  <div class="title-big">
      <h1 class="content"></h1>
      </hr>
  </div>
</cmp>
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
