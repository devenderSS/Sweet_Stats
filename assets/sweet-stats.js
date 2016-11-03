
$(".horizontal-bar-large").each(function(){
  var title = document.createElement("h2");
  title.innerHTML=$(this).attr("data-title");
  $(this).prepend(title);
  $(this).find(".horizontal-bar-element").each(function(){
    var name = document.createElement("div");
    name.className = "name";
    name.innerHTML = "<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

   var brar = document.createElement("div");
    brar.className="bar-area";
  //  var bar = document.createElement("div");
  //  bar.className="bar";
    var width = ($(this).attr("data-value")/100)*386.2;
    ///bar.height(height);
    brar.innerHTML='<div class="bar" style="width:'+width+'px"></div>';
    $(this).append(brar);

    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-value")+"%</p>";
    $(this).append(value);


  });
});
$(".horizontal-bar-medium").each(function(){
  var title = document.createElement("h2");
  title.innerHTML=$(this).attr("data-title");
  $(this).prepend(title);
  $(this).find(".horizontal-bar-element").each(function(){
    var name = document.createElement("div");
    name.className = "name";
    name.innerHTML = "<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

   var brar = document.createElement("div");
    brar.className="bar-area";
  //  var bar = document.createElement("div");
  //  bar.className="bar";
    var width = ($(this).attr("data-value")/100)*286.2;
    ///bar.height(height);
    brar.innerHTML='<div class="bar" style="width:'+width+'px"></div>';
    $(this).append(brar);

    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-value")+"%</p>";
    $(this).append(value);


  });
});
$(".horizontal-bar-small").each(function(){
  var title = document.createElement("h2");
  title.innerHTML=$(this).attr("data-title");
  $(this).prepend(title);
  $(this).find(".horizontal-bar-element").each(function(){
    var name = document.createElement("div");
    name.className = "name";
    name.innerHTML = "<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

   var brar = document.createElement("div");
    brar.className="bar-area";
  //  var bar = document.createElement("div");
  //  bar.className="bar";
    var width = ($(this).attr("data-value")/100)*255;
    ///bar.height(height);
    brar.innerHTML='<div class="bar" style="width:'+width+'px"></div>';
    $(this).append(brar);

    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-value")+"%</p>";
    $(this).append(value);


  });
});

//horizontal-double


$(".horizontal-double-large").each(function(){
  var title = document.createElement("div");
  title.className="title";
  title.innerHTML="<h2>"+$(this).attr("data-title")+"</h2>";
  $(this).prepend(title);


  $(this).find(".horizontal-double-element").each(function(){
    var name = document.createElement("div");
    name.className="name";
    name.innerHTML="<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

    var bararea = document.createElement("div");
    bararea.className="bar-area";
    var barone = document.createElement("div");
    barone.className = "bar-one";
    var width1 = ($(this).attr("data-one")/100)*415.8;
    //barone.style.width = width;
    //bararea.appendChild(barone);

    var bartwo = document.createElement("div");
    bartwo.className = "bar-two";
    var width2 = ($(this).attr("data-two")/100)*415.8;
    //bartwo.style.width=width;
    //bararea.appendChild(bartwo);
    bararea.innerHTML='<div class="bar-one" style="width:'+width1+'px"></div><div class="bar-two" style="width:'+width2+'px"></div>';

    $(this).append(bararea);
    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-one")+"%<br>"+$(this).attr("data-two")+"%</p>";
    $(this).append(value);

  });

  var legend = document.createElement("div");
  var on = document.createElement("div");
  legend.className="legend";
  on.className="legend-one";
  legend.appendChild(on);
  var para = document.createElement("p");
  para.innerHTML=$(this).attr("data-legend-one");
  legend.appendChild(para);
  var tw = document.createElement("div");
  tw.className="legend-two";
  legend.appendChild(tw);
  var para2 = document.createElement("p");
  para2.innerHTML = $(this).attr("data-legend-two");
  legend.appendChild(para2);
  $(this).append(legend);
});
$(".horizontal-double-medium").each(function(){
  var title = document.createElement("div");
  title.className="title";
  title.innerHTML="<h2>"+$(this).attr("data-title")+"</h2>";
  $(this).prepend(title);


  $(this).find(".horizontal-double-element").each(function(){
    var name = document.createElement("div");
    name.className="name";
    name.innerHTML="<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

    var bararea = document.createElement("div");
    bararea.className="bar-area";
    var barone = document.createElement("div");
    barone.className = "bar-one";
    var width1 = ($(this).attr("data-one")/100)*307;
    //barone.style.width = width;
    //bararea.appendChild(barone);

    var bartwo = document.createElement("div");
    bartwo.className = "bar-two";
    var width2 = ($(this).attr("data-two")/100)*307;
    //bartwo.style.width = width;
    //bararea.appendChild(bartwo);
     bararea.innerHTML='<div class="bar-one" style="width:'+width1+'px"></div><div class="bar-two" style="width:'+width2+'px"></div>';
    $(this).append(bararea);
    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-one")+"%<br>"+$(this).attr("data-two")+"%</p>";
    $(this).append(value);

  });

  var legend = document.createElement("div");
  var on = document.createElement("div");
  legend.className="legend";
  on.className="legend-one";
  legend.appendChild(on);
  var para = document.createElement("p");
  para.innerHTML=$(this).attr("data-legend-one");
  legend.appendChild(para);
  var tw = document.createElement("div");
  tw.className="legend-two";
  legend.appendChild(tw);
  var para2 = document.createElement("p");
  para2.innerHTML = $(this).attr("data-legend-two");
  legend.appendChild(para2);
  $(this).append(legend);
});
$(".horizontal-double-small").each(function(){
  var title = document.createElement("div");
  title.className="title";
  title.innerHTML="<h2>"+$(this).attr("data-title")+"</h2>";
  $(this).prepend(title);


  $(this).find(".horizontal-double-element").each(function(){
    var name = document.createElement("div");
    name.className="name";
    name.innerHTML="<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

    var bararea = document.createElement("div");
    bararea.className="bar-area";
    var barone = document.createElement("div");
    barone.className = "bar-one";
    var width1 = ($(this).attr("data-one")/100)*230;
    //barone.style.width = width;
    //bararea.appendChild(barone);

    var bartwo = document.createElement("div");
    bartwo.className = "bar-two";
    var width2 = ($(this).attr("data-two")/100)*230;
    //bartwo.style.width = width;
    //bararea.appendChild(bartwo);
         bararea.innerHTML='<div class="bar-one" style="width:'+width1+'px"></div><div class="bar-two" style="width:'+width2+'px"></div>';
    $(this).append(bararea);
    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-one")+"%<br>"+$(this).attr("data-two")+"%</p>";
    $(this).append(value);

  });

  var legend = document.createElement("div");
  var on = document.createElement("div");
  legend.className="legend";
  on.className="legend-one";
  legend.appendChild(on);
  var para = document.createElement("p");
  para.innerHTML=$(this).attr("data-legend-one");
  legend.appendChild(para);
  var tw = document.createElement("div");
  tw.className="legend-two";
  legend.appendChild(tw);
  var para2 = document.createElement("p");
  para2.innerHTML = $(this).attr("data-legend-two");
  legend.appendChild(para2);
  $(this).append(legend);
});
// horizontal-triple
$(".horizontal-triple-small").each(function(){
  var title = document.createElement("div");
  title.className="title";
  title.innerHTML="<h2>"+$(this).attr("data-title")+"</h2>";
  $(this).prepend(title);


  $(this).find(".horizontal-triple-element").each(function(){
    var name = document.createElement("div");
    name.className="name";
    name.innerHTML="<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

    var bararea = document.createElement("div");
    bararea.className="bar-area";
    var barone = document.createElement("div");
    barone.className = "bar-one";
    var width1 = ($(this).attr("data-one")/100)*230;
    //barone.style.width = width;
    //bararea.appendChild(barone);

    var bartwo = document.createElement("div");
    bartwo.className = "bar-two";
    var width2 = ($(this).attr("data-two")/100)*230;
    //bartwo.style.width = width;
    //bararea.appendChild(bartwo);

    var barthree = document.createElement("div");
    barthree.className = "bar-three";
    var width3 = ($(this).attr("data-three")/100)*230;
    //barthree.style.width = width;
    //bararea.appendChild(barthree);

    bararea.innerHTML='<div class="bar-one" style="width:'+width1+'px"></div><div class="bar-two" style="width:'+width2+'px"></div><div class="bar-three" style="width:'+width3+'px"></div>';

    $(this).append(bararea);
    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-one")+"%<br>"+$(this).attr("data-two")+"%<br>"+$(this).attr("data-three")+"%</p>";
    $(this).append(value);

  });

  var legend = document.createElement("div");
  var on = document.createElement("div");
  legend.className="legend";
  on.className="legend-one";
  legend.appendChild(on);
  var para = document.createElement("p");
  para.innerHTML=$(this).attr("data-legend-one");
  legend.appendChild(para);
  var tw = document.createElement("div");
  tw.className="legend-two";
  legend.appendChild(tw);
  var para2 = document.createElement("p");
  para2.innerHTML = $(this).attr("data-legend-two");
  legend.appendChild(para2);
  var th = document.createElement("div");
  th.className="legend-three";
  legend.appendChild(th);
  var para3 = document.createElement("p");
  para3.innerHTML = $(this).attr("data-legend-three");
  legend.appendChild(para3);
  $(this).append(legend);
});
$(".horizontal-triple-medium").each(function(){
  var title = document.createElement("div");
  title.className="title";
  title.innerHTML="<h2>"+$(this).attr("data-title")+"</h2>";
  $(this).prepend(title);


  $(this).find(".horizontal-triple-element").each(function(){
    var name = document.createElement("div");
    name.className="name";
    name.innerHTML="<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

var bararea = document.createElement("div");
    bararea.className="bar-area";
    var barone = document.createElement("div");
    barone.className = "bar-one";
    var width1 = ($(this).attr("data-one")/100)*307;
    //barone.style.width = width;
    //bararea.appendChild(barone);

    var bartwo = document.createElement("div");
    bartwo.className = "bar-two";
    var width2 = ($(this).attr("data-two")/100)*307;
    //bartwo.style.width = width;
    //bararea.appendChild(bartwo);

    var barthree = document.createElement("div");
    barthree.className = "bar-three";
    var width3 = ($(this).attr("data-three")/100)*307;
    //barthree.style.width = width;
    //bararea.appendChild(barthree);

    bararea.innerHTML='<div class="bar-one" style="width:'+width1+'px"></div><div class="bar-two" style="width:'+width2+'px"></div><div class="bar-three" style="width:'+width3+'px"></div>';

    $(this).append(bararea);
    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-one")+"%<br>"+$(this).attr("data-two")+"%<br>"+$(this).attr("data-three")+"%</p>";
    $(this).append(value);

  });

  var legend = document.createElement("div");
  var on = document.createElement("div");
  legend.className="legend";
  on.className="legend-one";
  legend.appendChild(on);
  var para = document.createElement("p");
  para.innerHTML=$(this).attr("data-legend-one");
  legend.appendChild(para);
  var tw = document.createElement("div");
  tw.className="legend-two";
  legend.appendChild(tw);
  var para2 = document.createElement("p");
  para2.innerHTML = $(this).attr("data-legend-two");
  legend.appendChild(para2);
  var th = document.createElement("div");
  th.className="legend-three";
  legend.appendChild(th);
  var para3 = document.createElement("p");
  para3.innerHTML = $(this).attr("data-legend-three");
  legend.appendChild(para3);
  $(this).append(legend);
});
$(".horizontal-triple-large").each(function(){
  var title = document.createElement("div");
  title.className="title";
  title.innerHTML="<h2>"+$(this).attr("data-title")+"</h2>";
  $(this).prepend(title);


  $(this).find(".horizontal-triple-element").each(function(){
    var name = document.createElement("div");
    name.className="name";
    name.innerHTML="<p>"+$(this).attr("data-name")+"</p>";
    $(this).append(name);

   var bararea = document.createElement("div");
    bararea.className="bar-area";
    var barone = document.createElement("div");
    barone.className = "bar-one";
    var width1 = ($(this).attr("data-one")/100)*415.8;
    //barone.style.width = width;
    //bararea.appendChild(barone);

    var bartwo = document.createElement("div");
    bartwo.className = "bar-two";
    var width2 = ($(this).attr("data-two")/100)*415.8;
    //bartwo.style.width = width;
    //bararea.appendChild(bartwo);

    var barthree = document.createElement("div");
    barthree.className = "bar-three";
    var width3 = ($(this).attr("data-three")/100)*415.8;
    //barthree.style.width = width;
    //bararea.appendChild(barthree);

    bararea.innerHTML='<div class="bar-one" style="width:'+width1+'px"></div><div class="bar-two" style="width:'+width2+'px"></div><div class="bar-three" style="width:'+width3+'px"></div>';

    $(this).append(bararea);
    var value=document.createElement("div");
    value.className="value";
    //var valueVal=document.createElement("p");
    value.innerHTML="<p>"+$(this).attr("data-one")+"%<br>"+$(this).attr("data-two")+"%<br>"+$(this).attr("data-three")+"%</p>";
    $(this).append(value);

  });

  var legend = document.createElement("div");
  var on = document.createElement("div");
  legend.className="legend";
  on.className="legend-one";
  legend.appendChild(on);
  var para = document.createElement("p");
  para.innerHTML=$(this).attr("data-legend-one");
  legend.appendChild(para);
  var tw = document.createElement("div");
  tw.className="legend-two";
  legend.appendChild(tw);
  var para2 = document.createElement("p");
  para2.innerHTML = $(this).attr("data-legend-two");
  legend.appendChild(para2);
  var th = document.createElement("div");
  th.className="legend-three";
  legend.appendChild(th);
  var para3 = document.createElement("p");
  para3.innerHTML = $(this).attr("data-legend-three");
  legend.appendChild(para3);
  $(this).append(legend);
});
