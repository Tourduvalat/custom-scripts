//
// Detecting the Presence of Water in Wetlands with Sentinel-2 Satellite (abbrv. WIW)
//
// General formula: IF B8A<0.1804 AND B12<0.1131 THEN Water ELSE NoWater
//
// URL https://www.indexdatabase.de/db/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//


return B8A<0.1804&&B12<0.1131?[51/255,68/255,170/255]:[B04*5,B03*5,B02*5]

// return a blue color when water is detected in wetlands.
// When no water, return lighten true color composition

// False detection problems : on 
