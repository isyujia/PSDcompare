/*
 * @Author: ChileeHong
 * @Date: 2021-07-30 11:46:04
 * @LastEditTime: 2021-08-23 18:14:31
 * @LastEditors: ChileeHong
 * @Description: 创建KML字符串
 */
/**
 * @description 创建kml字符串
 * */
export function makeKml(records = []) {
  const contents = [];
  records.forEach((item) => {
    if (!item.name || item.longitude === undefined || item.latitude === undefined || item.height === undefined) {
      return;
    }
    if (!item.description) {
      item.description = "<![CDATA[]]>";
    }
    contents.push(`
    <Placemark>
    <ExtendedData>
      <Data name="device">
      <displayName>device id</displayName>
      <value>${item.id}</value>
      </Data>
    </ExtendedData> 
    <name>${item.name}</name>
    <description>${item.id}</description>    
    <Point>
      <altitudeMode>absolute</altitudeMode>
      <coordinates>${+item.longitude},${+item.latitude},${+item.height}</coordinates>
    </Point>
  </Placemark>
    `);
  });
  const kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
    <Document>
      <name>Surveys.kml</name>${contents.join("")}
    </Document>
  </kml>
  `;
  return new DOMParser().parseFromString(kmlContent, "text/xml");
}