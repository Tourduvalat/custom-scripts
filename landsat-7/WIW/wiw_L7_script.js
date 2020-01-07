// Detecting the Presence of Water in Wetlands with Landsat-5 & 7 Satellites (abbrv. WIW)
//
// General formula: IF B04<0.1558 AND B07<0.0871 THEN Water ELSE NoWater
//
// URL https://www.indexdatabase.de/db/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

return B04<0.1558&&B07<0.0871?[51/255,68/255,170/255]:[B03*4,B02*4,B01*4];

// colorBlend will return a blue color when surface water is detected, and lighten to a natural color when no water is detected
