var APP_DATA = {
  "scenes": [
    {
      "id": "0-rea-recibidor",
      "name": "Área recibidor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.40920061992624923,
        "pitch": -0.0022051376373468656,
        "fov": 1.3460472818770246
      },
      "linkHotspots": [
        {
          "yaw": -0.02145589284640792,
          "pitch": 0.16694715133458615,
          "rotation": 0,
          "target": "5-bao-social"
        },
        {
          "yaw": -1.7911261772107956,
          "pitch": 0.14445073678872333,
          "rotation": 0,
          "target": "1-rea-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rea-pasillo",
      "name": "Área pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0539714617626466,
          "pitch": 0.2824066675330794,
          "rotation": 0,
          "target": "2-alcoba-"
        },
        {
          "yaw": -1.5096766124716137,
          "pitch": 0.18256704144647173,
          "rotation": 4.71238898038469,
          "target": "0-rea-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-alcoba-",
      "name": "Alcoba ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.34728463753998184,
          "pitch": 0.091615259979692,
          "rotation": 0,
          "target": "3-bao-alcoba-1"
        },
        {
          "yaw": 0.9613045678479395,
          "pitch": 0.21535176390884203,
          "rotation": 7.0685834705770345,
          "target": "1-rea-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao-alcoba-1",
      "name": "Baño alcoba 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.006312708071629203,
          "pitch": 0.34689531072123003,
          "rotation": 5.497787143782138,
          "target": "4-bao-alcoba-2"
        },
        {
          "yaw": -2.2641800286372504,
          "pitch": 0.3490587463942436,
          "rotation": 4.71238898038469,
          "target": "2-alcoba-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao-alcoba-2",
      "name": "Baño alcoba 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.134380358408471,
          "pitch": 0.25982286235911545,
          "rotation": 0,
          "target": "3-bao-alcoba-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao-social",
      "name": "Baño social",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.373330772914649,
          "pitch": 0.14328613625552755,
          "rotation": 1.5707963267948966,
          "target": "0-rea-recibidor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Diseño Opción 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
