# Water in Wetland - WIW

---

## How to publish your own product

* Fork the repository to get your own copy of the custom-scripts   
  _It is easiest to fork the repository on GitHub, but as some of you might not have GitHub account, or don't want to bother with all this versioning and collaboration tools, you can also just download the whole repository as Zip file and work from there._
  
* Create a new directory entry for your custom script   
  *Copy the `example` directory to proper directory, based on which datasource (satellite) you are publishing the product for, to something that describes what the product is about, say `my_algorithm`.*   
  *Preferably use ["snake_case"](https://simple.wikipedia.org/wiki/Snake_case) (underscores instead of spaces) if more than one word is used.*
  
* Fill in the details about the project in the `README.md` file.   
  *Obviously, you'll want to remove this chapter, but use the rest of the file as a template.*   
  *Have a look around at other `README.md` files to see how to include images, format the text and generally use the GitHub [markdown](https://help.github.com/categories/writing-on-github/) (e.g. [here](../sentinel-2/cby_cloud_detection/README.md) for mathematical formulas or [here](../sentinel-2/ndvi_uncertainty/README.md) for adding images).*
  
* Implement the product in the `script.js` file.   
  *The most work is of course the JavaScript implementation of the product. The `example` folder includes an empty custom script with comments that will hopefully help you build your own custom script. Of course the easiest is to do the custom script building/testing on [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/).*
  
* Add an entry pointing to your script to the [main](../README.md) readme file.   
  *A link and a short description will do.*
  
* And create a pull request :).
  *There is extensive help on creating pull requests on GitHub [help](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/), but if you feel overwhelmed by this step and would still like to contribute, send us the folder you've created and we will take care of it for you.*

Publishing your product should be easy, nevertheless, any feedback and ideas how to improve or make the process simpler is very appreciated.

---

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=43.5077&lng=4.5772&zoom=12&time=2019-12-06&evalscripturl=https://raw.githubusercontent.com/Tourduvalat/custom-scripts/master/sentinel-2/WIW/script.js){:target="_blank"}    
 - [EO Browser]https://apps.sentinel-hub.com/eo-browser/?lat=43.5077&lng=4.5772&zoom=12&time=2019-12-06&preset=CUSTOM&datasource=Sentinel-2%20L1C&layers=B02,B03,B04&evalscript=Ly8KLy8gRGV0ZWN0aW5nIHRoZSBQcmVzZW5jZSBvZiBXYXRlciBpbiBXZXRsYW5kcyB3aXRoIFNlbnRpbmVsLTIgU2F0ZWxsaXRlIChhYmJydi4gV0lXKQovLwovLyBHZW5lcmFsIGZvcm11bGE6IElGIEI4QTwwLjE4MDQgQU5EIEIxMjwwLjExMzEgVEhFTiBXYXRlciBFTFNFIE5vV2F0ZXIKLy8KLy8gVVJMIGh0dHBzOi8vd3d3LmluZGV4ZGF0YWJhc2UuZGUvZGIveHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eC8vCgoKcmV0dXJuIEI4QTwwLjE4MDQmJkIxMjwwLjExMzE%2FWzUxLzI1NSw2OC8yNTUsMTcwLzI1NV06W0IwNCo1LEIwMyo1LEIwMio1XQoKLy8gcmV0dXJuIGEgYmx1ZSBjb2xvciB3aGVuIHdhdGVyIGlzIGRldGVjdGVkIGluIHdldGxhbmRzLgovLyBXaGVuIG5vIHdhdGVyLCByZXR1cm4gbGlnaHRlbiB0cnVlIGNvbG9yIGNvbXBvc2l0aW9uCgovLyBGYWxzZSBkZXRlY3Rpb24gcHJvYmxlbXMgOiBvbiA%3D&evalscripturl=https://raw.githubusercontent.com/Tourduvalat/custom-scripts/master/sentinel-2/WIW/script.js){:target="_blank"}   

## General description of the script

## References
 - possible references (scientific articles, wiki/web references, ...)
