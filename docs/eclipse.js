function addEclipseData(map)
{
    map.on('load', () => {
        map.addSource('EclipseCenterline', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {
                  'Name': 'CenterLine'
              },
              'geometry': {
                  'type': 'LineString',
                  'coordinates': [
                      [-104.91743029663,24.47911230605],
                      [-104.86332000000,24.53033000000],
                      [-104.83272000000,24.56500000000],
                      [-104.81844000000,24.57834000000],
                      [-104.80109000000,24.59834000000],
                      [-104.47538000000,24.94205000000],
                      [-104.36093000000,25.06000000000],
                      [-104.28903000000,25.13762000000],
                      [-104.08329000000,25.35143000000],
                      [-103.98570000000,25.44907000000],
                      [-103.95437000000,25.48359000000],
                      [-103.87509000000,25.56237000000],
                      [-103.83512000000,25.60744000000],
                      [-103.70608000000,25.74028000000],
                      [-103.68695000000,25.75809000000],
                      [-103.67419000000,25.77421000000],
                      [-103.64207000000,25.80777000000],
                      [-103.34564000000,26.11154000000],
                      [-103.24257000000,26.21447000000],
                      [-103.03328000000,26.42923000000],
                      [-103.00501000000,26.45727000000],
                      [-102.98044000000,26.47856000000],
                      [-102.91567000000,26.54664000000],
                      [-102.80714000000,26.65443000000],
                      [-102.75141000000,26.71285000000],
                      [-102.60958000000,26.85400000000],
                      [-102.59598000000,26.86954000000],
                      [-102.52986000000,26.93600000000],
                      [-102.46807000000,26.99696000000],
                      [-102.41896000000,27.04011000000],
                      [-102.36388000000,27.10154000000],
                      [-102.32137000000,27.14480000000],
                      [-102.05883000000,27.40458000000],
                      [-101.98633000000,27.47369000000],
                      [-101.86248000000,27.59951000000],
                      [-101.68413000000,27.77452000000],
                      [-101.63041000000,27.82479000000],
                      [-101.59739000000,27.86067000000],
                      [-101.45197000000,28.00302000000],
                      [-100.33638000000,29.07100000000],
                      [-99.49818000000,29.84771000000],
                      [-99.49303000000,29.85246000000],
                      [-98.53183000000,30.72057000000],
                      [-97.88818000000,31.28537000000],
                      [-97.20237000000,31.87335000000],
                      [-96.24245000000,32.67174000000],
                      [-95.36699000000,33.37540000000],
                      [-94.59086000000,33.97972000000],
                      [-93.70345000000,34.64826000000],
                      [-92.84993000000,35.27016000000],
                      [-91.93395000000,35.91380000000],
                      [-91.15194000000,36.44469000000],
                      [-90.33100000000,36.98396000000],
                      [-89.46053000000,37.53614000000],
                      [-88.55175000000,38.09156000000],
                      [-87.59333000000,38.65494000000],
                      [-86.54794000000,39.24386000000],
                      [-85.76958000000,39.66562000000],
                      [-85.76099000000,39.67020000000],
                      [-84.46544000000,40.34196000000],
                      [-83.80633000000,40.66974000000],
                      [-83.12032000000,41.00129000000],
                      [-82.31770000000,41.37701000000],
                      [-81.61112000000,41.69713000000],
                      [-80.83345000000,42.03821000000],
                      [-80.02154000000,42.38219000000],
                      [-79.15092000000,42.73772000000],
                      [-78.26273000000,43.08659000000],
                      [-77.61352000000,43.33345000000],
                      [-76.76891000000,43.64369000000],
                      [-75.31922000000,44.14905000000],
                      [-73.15723000000,44.84464000000],
                      [-71.84745000000,45.23256000000],
                      [-69.51543000000,45.86659000000],
                      [-68.96816000000,46.00395000000],
                      [-67.74001407472,46.29388384018]
                  ]
              }
          }
        });
        map.addLayer({
            'id': 'EclipseCenterline',
            'type': 'line',
            'source': 'EclipseCenterline',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round',
                'visibility': 'none'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 8
            }
        });
    });

    map.on('load', () => {
        map.addSource('penumbra', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [
                        [
                            [-67.74169921875,47.13634997606],
                            [-67.74169921875,45.47660708427],
                            [-73.54248046875,43.85083436966],
                            [-79.51904296875,41.65062904358],
                            [-84.66064453125,39.23638880253],
                            [-88.08837890625,37.30384111404],
                            [-91.91162109375,34.79442000389],
                            [-95.64697265625,31.94137036800],
                            [-99.16259765625,28.86909842491],
                            [-103.53612720966,24.54345703125],
                            [-106.30410790443,24.41162109375],
                            [-97.18505859375,33.13115000725],
                            [-93.71337890625,35.80834329128],
                            [-89.89013671875,38.35808336735],
                            [-86.11083984375,40.51140904427],
                            [-80.57373046875,43.10114085674],
                            [-75.21240234375,45.08017390966],
                            [-67.74169921875,47.13634997606]
                        ]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'penumbra',
            'type': 'fill',
            'source': 'penumbra',
            'layout': {
                'visibility': 'none'
            },
            'paint': {
                'fill-color': '#888',
                'fill-opacity': 0.3
            }
        });
    });

    
}