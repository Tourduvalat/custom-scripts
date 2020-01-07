# Water in Wetland - WIW



---

<a href="#" id='togglescript'>Show</a> script or [download](wiw_L5_script.js)
<div id='script_view' style="display:none">

</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=L5&lat=43.5153&lng=4.3130&zoom=11&preset=CUSTOM&layers=B02,B03,B04&time=2019-12-01%7C2019-12-06&evalscript=Ly8gRGV0ZWN0aW5nIHRoZSBQcmVzZW5jZSBvZiBXYXRlciBpbiBXZXRsYW5kcyB3aXRoIExhbmRzYXQtNSAmIDcgU2F0ZWxsaXRlcyAoYWJicnYuIFdJVykKLy8KLy8gR2VuZXJhbCBmb3JtdWxhOiBJRiBCMDQ8MC4xNTU4IEFORCBCMDc8MC4wODcxIFRIRU4gV2F0ZXIgRUxTRSBOb1dhdGVyCi8vCi8vIFVSTCBodHRwczovL3d3dy5pbmRleGRhdGFiYXNlLmRlL2RiL3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgvLwoKcmV0dXJuIEIwNDwwLjE1NTgmJkIwNzwwLjA4NzE/WzUxLzI1NSw2OC8yNTUsMTcwLzI1NV06W0IwMyo0LEIwMio0LEIwMSo0XTsKCi8vIGNvbG9yQmxlbmQgd2lsbCByZXR1cm4gYSBibHVlIGNvbG9yIHdoZW4gc3VyZmFjZSB3YXRlciBpcyBkZXRlY3RlZCwgYW5kIGxpZ2h0ZW4gdG8gYSBuYXR1cmFsIGNvbG9yIHdoZW4gbm8gd2F0ZXIgaXMgZGV0ZWN0ZWQ=&evalscripturl=https://raw.githubusercontent.com/Tourduvalat/custom-scripts/master/landsat-5/WIW/wiw_L5_script.js)
 - [EO Browser](https://apps.sentinel-hub.com/eo-browser/?lat=43.5153&lng=4.3130&zoom=11&time=2019-12-06&preset=CUSTOM&datasource=Landsat%205%20USGS&layers=B02,B03,B04&evalscript=Ly8gRGV0ZWN0aW5nIHRoZSBQcmVzZW5jZSBvZiBXYXRlciBpbiBXZXRsYW5kcyB3aXRoIExhbmRzYXQtNSAmIDcgU2F0ZWxsaXRlcyAoYWJicnYuIFdJVykKLy8KLy8gR2VuZXJhbCBmb3JtdWxhOiBJRiBCMDQ8MC4xNTU4IEFORCBCMDc8MC4wODcxIFRIRU4gV2F0ZXIgRUxTRSBOb1dhdGVyCi8vCi8vIFVSTCBodHRwczovL3d3dy5pbmRleGRhdGFiYXNlLmRlL2RiL3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgvLwoKcmV0dXJuIEIwNDwwLjE1NTgmJkIwNzwwLjA4NzE/WzUxLzI1NSw2OC8yNTUsMTcwLzI1NV06W0IwMyo0LEIwMio0LEIwMSo0XTsKCi8vIGNvbG9yQmxlbmQgd2lsbCByZXR1cm4gYSBibHVlIGNvbG9yIHdoZW4gc3VyZmFjZSB3YXRlciBpcyBkZXRlY3RlZCwgYW5kIGxpZ2h0ZW4gdG8gYSBuYXR1cmFsIGNvbG9yIHdoZW4gbm8gd2F0ZXIgaXMgZGV0ZWN0ZWQ=&evalscripturl=https://raw.githubusercontent.com/Tourduvalat/custom-scripts/master/landsat-5/WIW/wiw_L5_script.js)   

## Basic information
 - Spectral bands used for water detection :  B4, B7
 - Spectral Bands used for back ground display : B2, B3, B4



## General description of the script
The WIW script generates water maps using the Water In Wetlands logical rule by featuring water in blue and other landscape features in natural colors.  The maps include open-water areas, as well as water under dense vegetation cover. Use of the WIW script in combination of the timelape tool provides a dynamic representation of inundation patterns, which are useful for assessing wetland extent and functions. 

## Description of representative images
WIW timelapse at the largest reed marsh in southern France from July 2013 through June 2014 (monthly interval).

![WIW-chasca](Timelapse-ChaSca-L8.gif)
## References
 Lefebvre G., Davranche A., Willm L., Campagna J., Redmond L., Merle C., Guelmami A., Poulin B. 2019. Introducing WIW for Detecting the Presence of Water in Wetlands with Landsat and Sentinel Satellites. Remote Sensing 11(19):18. [DOI : https://doi.org/10.3390/rs11192210](https://www.mdpi.com/2072-4292/11/19/2210/)

Sentinel Online [Copernicus Sentinel-2 helps track changes in seasonal water of wetlands](https://sentinels.copernicus.eu/web/sentinel/news/-/article/copernicus-sentinel-2-helps-track-changes-in-seasonal-water-of-wetlands)

