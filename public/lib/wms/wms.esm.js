(function() { try { var style = document.createElement("style"); style.textContent = "\n.wms-page[data-v-b72b9f0b] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.controls[data-v-b72b9f0b] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: white;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  min-width: 280px;\n}\n.controls h3[data-v-b72b9f0b] {\n  margin: 0 0 15px 0;\n  font-size: 16px;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n}\n.control-item[data-v-b72b9f0b] {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.control-item label[data-v-b72b9f0b] {\n  cursor: pointer;\n  font-size: 14px;\n  min-width: 70px;\n}\n.control-item input[type=\"checkbox\"][data-v-b72b9f0b] {\n  margin-right: 8px;\n}\n.control-item input[type=\"range\"][data-v-b72b9f0b] {\n  flex: 1;\n}\n.control-item select[data-v-b72b9f0b] {\n  flex: 1;\n  padding: 4px 8px;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n}\n.control-item button[data-v-b72b9f0b] {\n  padding: 6px 12px;\n  border: none;\n  background: #1890ff;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.control-item button[data-v-b72b9f0b]:hover:not(:disabled) {\n  background: #40a9ff;\n}\n.control-item button[data-v-b72b9f0b]:disabled {\n  background: #d9d9d9;\n  cursor: not-allowed;\n}\n.wms-info[data-v-b72b9f0b] {\n  margin-top: 15px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n  font-size: 12px;\n  color: #666;\n}\n.wms-info p[data-v-b72b9f0b] {\n  margin: 5px 0;\n  word-break: break-all;\n}\n\n.base-map-wrapper[data-v-37eeeb99] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-container[data-v-37eeeb99] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.marker-icon{background-color:#fff;border:1px solid #3388ff;border-radius:50%;margin:-8px 0 0 -8px!important;width:14px!important;height:14px!important;outline:0;transition:opacity ease .3s}.marker-icon-middle{opacity:.7;margin:-6px 0 0 -6px!important;width:10px!important;height:10px!important}.leaflet-pm-draggable{cursor:move!important}.cursor-marker{cursor:crosshair;pointer-events:none;opacity:0}.cursor-marker.visible{opacity:1!important}.geoman-draw-cursor,.geoman-draw-cursor .leaflet-interactive{cursor:crosshair}.rect-style-marker,.rect-start-marker{opacity:0}.rect-style-marker.visible,.rect-start-marker.visible{opacity:1!important}.vertexmarker-disabled{opacity:.7}.pm-text-marker{width:0;height:0}.pm-textarea{box-sizing:content-box;background-color:#fff;color:#000;resize:none;border:none;outline:0;cursor:pointer;border-radius:3px;padding-left:7px;padding-bottom:0;padding-top:4px}.leaflet-pm-draggable .pm-textarea{cursor:move}.pm-textarea:focus,.pm-textarea:focus-within,.pm-textarea:focus-visible,.pm-textarea:active{border:2px solid #000;outline:0}.pm-textarea.pm-disabled{border:none;user-select:none}.pm-textarea.pm-hasfocus{cursor:auto}.leaflet-pm-touch-hint{position:absolute;top:var(--pm-touch-hint-top, 10px);left:50%;transform:translate(-50%);background:#fffffff2;color:#333;padding:8px 16px;border-radius:4px;box-shadow:0 2px 6px #0003;z-index:1000;font-size:14px;pointer-events:none}.leaflet-pm-toolbar .leaflet-buttons-control-button{padding:5px;box-sizing:border-box;position:relative;z-index:3}.leaflet-pm-toolbar .leaflet-pm-actions-container a.leaflet-pm-action:first-child:not(.pos-right),.leaflet-pm-toolbar .leaflet-pm-actions-container a.leaflet-pm-action:last-child.pos-right{border-radius:0}.leaflet-pm-toolbar .button-container a.leaflet-buttons-control-button{border-radius:0}.leaflet-pm-toolbar .button-container:last-child a.leaflet-buttons-control-button{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-pm-toolbar .button-container:first-child a.leaflet-buttons-control-button{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-pm-toolbar .button-container:last-child a.leaflet-buttons-control-button{border-bottom:none}.leaflet-pm-toolbar .control-fa-icon{font-size:19px;line-height:24px}.leaflet-pm-toolbar .control-icon{width:100%;height:100%;box-sizing:border-box;background-size:contain;background-repeat:no-repeat;background-position:center center}.leaflet-pm-toolbar .leaflet-pm-icon-marker{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->%0A    <title>Atoms/Icons/Tools/Marker</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M15.5,24.8782959 C15.2909201,24.8772219 15.1744857,24.8467817 14.6590866,24.2354163 C10.2196955,19.4118054 8,15.5014392 8,12.5043177 C8,8.35979746 11.3578644,5 15.5,5 C19.6421356,5 23,8.35979746 23,12.5043177 C23,17 18.2878217,21.9268378 16.3336601,24.2440186 C15.8224622,24.8501802 15.7090799,24.8793699 15.5,24.8782959 Z M15.5,15.5326948 C17.275201,15.5326948 18.7142857,14.1180004 18.7142857,12.3728864 C18.7142857,10.6277723 17.275201,9.21307792 15.5,9.21307792 C13.724799,9.21307792 12.2857143,10.6277723 12.2857143,12.3728864 C12.2857143,14.1180004 13.724799,15.5326948 15.5,15.5326948 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Marker\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Mask\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23path-1\"></use>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-polygon{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"polygon-a\" d=\"M19.4206892,9.16509725 C19.1523681,8.66992914 19,8.10275831 19,7.5 C19,5.56700338 20.5670034,4 22.5,4 C24.4329966,4 26,5.56700338 26,7.5 C26,9.26323595 24.6961471,10.7219407 23,10.9645556 L23,19.0354444 C24.6961471,19.2780593 26,20.736764 26,22.5 C26,24.4329966 24.4329966,26 22.5,26 C20.736764,26 19.2780593,24.6961471 19.0354444,23 L10.9645556,23 C10.7219407,24.6961471 9.26323595,26 7.5,26 C5.56700338,26 4,24.4329966 4,22.5 C4,20.5670034 5.56700338,19 7.5,19 C8.10275831,19 8.66992914,19.1523681 9.16509725,19.4206892 L19.4206892,9.16509725 Z M20.8349073,10.5793063 L10.5793108,20.8349027 C10.6086731,20.8890888 10.6366469,20.9441372 10.6631844,21 L19.3368156,21 C19.6825775,20.272154 20.272154,19.6825775 21,19.3368156 L21,10.6631844 C20.9441372,10.6366469 20.8890888,10.6086731 20.8349027,10.5793108 Z M22.5,9 C23.3284271,9 24,8.32842712 24,7.5 C24,6.67157288 23.3284271,6 22.5,6 C21.6715729,6 21,6.67157288 21,7.5 C21,8.32842712 21.6715729,9 22.5,9 Z M22.5,24 C23.3284271,24 24,23.3284271 24,22.5 C24,21.6715729 23.3284271,21 22.5,21 C21.6715729,21 21,21.6715729 21,22.5 C21,23.3284271 21.6715729,24 22.5,24 Z M7.5,24 C8.32842712,24 9,23.3284271 9,22.5 C9,21.6715729 8.32842712,21 7.5,21 C6.67157288,21 6,21.6715729 6,22.5 C6,23.3284271 6.67157288,24 7.5,24 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"polygon-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23polygon-a\"/>%0A    </mask>%0A    <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23polygon-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23polygon-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-polyline{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"line-a\" d=\"M9.16509725,19.4206892 L18.4206892,10.1650973 C18.1523681,9.66992914 18,9.10275831 18,8.5 C18,6.56700338 19.5670034,5 21.5,5 C23.4329966,5 25,6.56700338 25,8.5 C25,10.4329966 23.4329966,12 21.5,12 C20.8972417,12 20.3300709,11.8476319 19.8349027,11.5793108 L10.5793108,20.8349027 C10.8476319,21.3300709 11,21.8972417 11,22.5 C11,24.4329966 9.43299662,26 7.5,26 C5.56700338,26 4,24.4329966 4,22.5 C4,20.5670034 5.56700338,19 7.5,19 C8.10275831,19 8.66992914,19.1523681 9.16509725,19.4206892 Z M21.5,10 C22.3284271,10 23,9.32842712 23,8.5 C23,7.67157288 22.3284271,7 21.5,7 C20.6715729,7 20,7.67157288 20,8.5 C20,9.32842712 20.6715729,10 21.5,10 Z M7.5,24 C8.32842712,24 9,23.3284271 9,22.5 C9,21.6715729 8.32842712,21 7.5,21 C6.67157288,21 6,21.6715729 6,22.5 C6,23.3284271 6.67157288,24 7.5,24 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"line-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23line-a\"/>%0A    </mask>%0A    <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23line-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23line-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-circle{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->%0A    <title>Atoms/Icons/Tools/Circle</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M18.2897751,6.78602275 C18.8924131,6.29464981 19.661797,6 20.5,6 C22.4329966,6 24,7.56700338 24,9.5 C24,10.338203 23.7053502,11.1075869 23.2139772,11.7102249 C23.719599,12.8712053 24,14.1528571 24,15.5 C24,20.7467051 19.7467051,25 14.5,25 C9.25329488,25 5,20.7467051 5,15.5 C5,10.2532949 9.25329488,6 14.5,6 C15.8471429,6 17.1287947,6.28040098 18.2897751,6.78602275 Z M17.1504228,8.4817586 C16.3263581,8.17039236 15.4330777,8 14.5,8 C10.3578644,8 7,11.3578644 7,15.5 C7,19.6421356 10.3578644,23 14.5,23 C18.6421356,23 22,19.6421356 22,15.5 C22,14.5669223 21.8296076,13.6736419 21.5182414,12.8495772 C21.1960383,12.9473968 20.8541622,13 20.5,13 C18.5670034,13 17,11.4329966 17,9.5 C17,9.14583778 17.0526032,8.80396169 17.1504228,8.4817586 Z M14.5,17 C13.6715729,17 13,16.3284271 13,15.5 C13,14.6715729 13.6715729,14 14.5,14 C15.3284271,14 16,14.6715729 16,15.5 C16,16.3284271 15.3284271,17 14.5,17 Z M20.5,11 C21.3284271,11 22,10.3284271 22,9.5 C22,8.67157288 21.3284271,8 20.5,8 C19.6715729,8 19,8.67157288 19,9.5 C19,10.3284271 19.6715729,11 20.5,11 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Circle\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Mask\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23path-1\"></use>%0A            <g id=\"Atoms/Color/Grey\" mask=\"url(%23mask-2)\" fill=\"%235B5B5B\">%0A                <rect id=\"Rectangle\" x=\"0\" y=\"0\" width=\"30\" height=\"30\"></rect>%0A            </g>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-circle-marker{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A%0A<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"%235B5B5B\" stroke-width=\"8\"%0A     fill=\"none\">%0A<circle cx=\"50\" cy=\"50\" r=\"35\"/>%0A  <circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"%235B5B5B\"/>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-rectangle{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"rectangle-a\" d=\"M23,10.9645556 L23,19.0354444 C24.6961471,19.2780593 26,20.736764 26,22.5 C26,24.4329966 24.4329966,26 22.5,26 C20.736764,26 19.2780593,24.6961471 19.0354444,23 L10.9645556,23 C10.7219407,24.6961471 9.26323595,26 7.5,26 C5.56700338,26 4,24.4329966 4,22.5 C4,20.736764 5.30385293,19.2780593 7,19.0354444 L7,10.9645556 C5.30385293,10.7219407 4,9.26323595 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 C9.26323595,4 10.7219407,5.30385293 10.9645556,7 L19.0354444,7 C19.2780593,5.30385293 20.736764,4 22.5,4 C24.4329966,4 26,5.56700338 26,7.5 C26,9.26323595 24.6961471,10.7219407 23,10.9645556 Z M21,10.6631844 C20.272154,10.3174225 19.6825775,9.72784598 19.3368156,9 L10.6631844,9 C10.3174225,9.72784598 9.72784598,10.3174225 9,10.6631844 L9,19.3368156 C9.72784598,19.6825775 10.3174225,20.272154 10.6631844,21 L19.3368156,21 C19.6825775,20.272154 20.272154,19.6825775 21,19.3368156 L21,10.6631844 Z M7.5,9 C8.32842712,9 9,8.32842712 9,7.5 C9,6.67157288 8.32842712,6 7.5,6 C6.67157288,6 6,6.67157288 6,7.5 C6,8.32842712 6.67157288,9 7.5,9 Z M22.5,9 C23.3284271,9 24,8.32842712 24,7.5 C24,6.67157288 23.3284271,6 22.5,6 C21.6715729,6 21,6.67157288 21,7.5 C21,8.32842712 21.6715729,9 22.5,9 Z M22.5,24 C23.3284271,24 24,23.3284271 24,22.5 C24,21.6715729 23.3284271,21 22.5,21 C21.6715729,21 21,21.6715729 21,22.5 C21,23.3284271 21.6715729,24 22.5,24 Z M7.5,24 C8.32842712,24 9,23.3284271 9,22.5 C9,21.6715729 8.32842712,21 7.5,21 C6.67157288,21 6,21.6715729 6,22.5 C6,23.3284271 6.67157288,24 7.5,24 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"rectangle-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23rectangle-a\"/>%0A    </mask>%0A    <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23rectangle-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23rectangle-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-delete{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->%0A    <title>Atoms/Icons/Tools/Eraser</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M17.7874219,18.4812552 L11.6480079,13.3498184 L6.40466009,19.3816001 L10.5539156,22.9884929 L13.86934,22.9884929 L17.7874219,18.4812552 Z M16.5074252,22.9884929 L26.0000002,22.9884929 L26.0000002,24.9884929 L10.0000002,24.9884929 L9.80708313,24.9884929 L5.09254204,20.8910192 C4.25891285,20.1663564 4.17057814,18.9031112 4.89524093,18.069482 L16.0482444,5.23941916 C16.7729072,4.40578998 18.0361525,4.31745526 18.8697816,5.04211806 L24.9074583,10.2905903 C25.7410875,11.0152531 25.8294222,12.2784983 25.1047594,13.1121275 L16.5074252,22.9884929 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Eraser\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Combined-Shape\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23path-1\"></use>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-edit{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"edit_anchor-a\" d=\"M13.5,11 C11.5670034,11 10,9.43299662 10,7.5 C10,5.56700338 11.5670034,4 13.5,4 C15.4329966,4 17,5.56700338 17,7.5 C17,9.43299662 15.4329966,11 13.5,11 Z M13.5,9 C14.3284271,9 15,8.32842712 15,7.5 C15,6.67157288 14.3284271,6 13.5,6 C12.6715729,6 12,6.67157288 12,7.5 C12,8.32842712 12.6715729,9 13.5,9 Z M12.0002889,7.52973893 C12.0125983,8.16273672 12.4170197,8.6996643 12.9807111,8.90767966 L3,15 L3,13 L12.0002889,7.52973893 Z M14.2172722,6.18228472 L19.453125,3 L22.6589355,3 L14.989102,7.68173885 C14.9962971,7.62216459 15,7.56151472 15,7.5 C15,6.93138381 14.6836098,6.4366645 14.2172722,6.18228472 Z M23.4434042,19.2851736 L20.1282799,19.2851736 L21.8729983,23.5349525 C21.9945296,23.8295773 21.8556546,24.1599209 21.5778734,24.2849208 L20.0414675,24.9545142 C19.7550613,25.0795141 19.4338738,24.9366704 19.3123426,24.6509518 L17.6544367,20.6154541 L14.9461873,23.4010151 C14.5852811,23.7721711 14,23.4860463 14,22.9992653 L14,9.57183533 C14,9.05933561 14.6225311,8.809492 14.946156,9.17008555 L23.8340292,18.3120179 C24.1925291,18.6613615 23.9279979,19.2851736 23.4434042,19.2851736 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"edit_anchor-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23edit_anchor-a\"/>%0A    </mask>%0A    <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23edit_anchor-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23edit_anchor-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-drag{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"move-a\" d=\"M21,14 L21,10 L27,15 L21,20 L21,16 L16,16 L16,21 L20,21 L15,27 L10,21 L14,21 L14,16 L9,16 L9,20 L3,15 L9,10 L9,14 L14,14 L14,9 L10,9 L15,3 L20,9 L16,9 L16,14 L21,14 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"move-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23move-a\"/>%0A    </mask>%0A    <use fill=\"%23D8D8D8\" xlink:href=\"%23move-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23move-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-cut{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->%0A    <title>Atoms/Icons/Tools/Scissors</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M12.9691574,13.4939435 L21.0317032,5.54167013 L23.4649499,5.67722957 L17.0470713,14.5106816 L27.5660336,17.1333535 L25.7891944,18.8012588 L14.5854951,17.8987506 L13.6487955,19.188007 C13.794639,19.2650958 13.9367985,19.3534417 14.0741377,19.4532245 C15.6379648,20.5894114 15.9846357,22.7782052 14.8484488,24.3420324 C13.7122619,25.9058595 11.5234681,26.2525304 9.95964096,25.1163435 C8.39581384,23.9801565 8.04914296,21.7913627 9.18532986,20.2275356 C9.74587276,19.4560145 10.5626188,18.9807475 11.4341218,18.8336407 L12.6805656,17.1180579 L12.5239724,16.3747216 L11.9506932,15.3012391 L9.89310646,14.7882251 C9.13093796,15.2357261 8.19977854,15.3966447 7.27445355,15.1659352 C5.39887519,14.698301 4.25751094,12.7987519 4.72514515,10.9231736 C5.19277935,9.04759519 7.09232846,7.90623094 8.96790682,8.37386515 C10.8434852,8.84149935 11.9848494,10.7410485 11.5172152,12.6166268 C11.4761464,12.7813449 11.4240335,12.9404001 11.3618627,13.0931999 L12.9691574,13.4939435 Z M7.75829735,13.2253438 C8.56211664,13.4257584 9.37620912,12.9366023 9.57662378,12.132783 C9.77703844,11.3289637 9.28788233,10.5148713 8.48406303,10.3144566 C7.68024373,10.1140419 6.86615126,10.603198 6.6657366,11.4070173 C6.46532194,12.2108366 6.95447805,13.0249291 7.75829735,13.2253438 Z M10.8033639,21.4031061 C10.3164266,22.0733177 10.4649998,23.0113722 11.1352115,23.4983095 C11.8054231,23.9852467 12.7434776,23.8366735 13.2304148,23.1664619 C13.7173521,22.4962502 13.5687788,21.5581957 12.8985672,21.0712585 C12.2283556,20.5843212 11.2903011,20.7328945 10.8033639,21.4031061 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Scissors\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Mask\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" transform=\"translate(16.093194, 15.663351) rotate(-32.000000) translate(-16.093194, -15.663351) \" xlink:href=\"%23path-1\"></use>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-snapping{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->%0A    <title>Atoms/Icons/Tools/Magnet</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M21.9994759,10.9428183 L21.9999985,16.3710417 C22,16.6872007 22,17.0058278 22,17.3269411 C22,21.5646545 18.6421356,25 14.5,25 C10.3578644,25 7,21.5646545 7,17.3269411 L7.00087508,10.9907507 L11.0022808,10.9984125 C11.0017033,11.6980114 11.001247,12.4168248 11.0008992,13.1554887 L11,17.3269411 C11,19.3756809 12.5876841,21 14.5,21 C16.4123159,21 18,19.3756809 18,17.3269411 C18,15.0702032 17.9995696,12.9619668 17.998539,10.9910032 L21.9994759,10.9428183 Z M10,7 C10.5522847,7 11,7.44771525 11,8 L11,10 L7,10 L7,8 C7,7.44771525 7.44771525,7 8,7 L10,7 Z M21,7 C21.5522847,7 22,7.44771525 22,8 L22,10 L18,10 L18,8 C18,7.44771525 18.4477153,7 19,7 L21,7 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Magnet\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Mask\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" transform=\"translate(14.500000, 16.000000) rotate(45.000000) translate(-14.500000, -16.000000) \" xlink:href=\"%23path-1\"></use>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-rotate{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A    <defs>%0A        <path id=\"rotate\" d=\"M21.2,5.8c-0.1-0.2-0.2-0.3-0.3-0.5l-0.1-0.2c-0.1-0.2-0.2-0.3-0.3-0.5l-0.1-0.2c-0.1-0.2-0.2-0.3-0.4-0.5l-0.2-0.3l2.8-3.1L18,0.6l-4.6,0.1l0.5,4.5l0.5,4.5l3.2-3.6v0.1l0.1,0.2c0.1,0.1,0.1,0.2,0.2,0.2l0.1,0.2C18,7,18,7.1,18.1,7.2c0.3,0.7,0.6,1.4,0.7,2.1c0.2,1.4,0,2.9-0.6,4.2L18,13.9L17.9,14l-0.3,0.5l-0.1,0.2c-0.2,0.2-0.4,0.5-0.6,0.7c-0.5,0.5-1.1,1-1.7,1.3c-0.6,0.4-1.3,0.6-2.1,0.8c-0.7,0.1-1.5,0.2-2.2,0.1c-0.8-0.1-1.5-0.3-2.2-0.5c-0.7-0.3-1.3-0.7-1.9-1.2l-0.4-0.4l-0.2-0.3L6,15c-0.1-0.1-0.2-0.2-0.2-0.3l-0.3-0.4l-0.1-0.1l-0.2-0.4c0-0.1-0.1-0.1-0.1-0.2l-0.3-0.5l-0.1-0.2c-0.1-0.3-0.2-0.6-0.3-0.9c-0.2-0.8-0.3-1.6-0.3-2.4c0-0.2,0-0.3,0-0.5V8.9c0-0.2,0-0.3,0.1-0.4l0.1-0.6l0.2-0.6c0.3-0.8,0.7-1.5,1.2-2.2c0.5-0.7,1.1-1.3,1.8-1.8c0.2-0.1,0.3-0.4,0.1-0.6C7.5,2.6,7.4,2.5,7.3,2.5H7.1L7,2.6C6.1,3,5.4,3.6,4.7,4.2C4,4.9,3.5,5.7,3,6.6c-0.9,1.8-1.2,3.8-0.8,5.8c0.1,0.5,0.2,0.9,0.3,1.4l0.3,0.8C2.9,14.7,3,14.8,3,15l0.2,0.4c0,0.1,0.1,0.2,0.1,0.2l0.3,0.5c0.1,0.2,0.2,0.3,0.3,0.5l0.1,0.2c0.1,0.1,0.2,0.3,0.3,0.4L5,17.8c0.7,0.7,1.6,1.3,2.5,1.8c0.9,0.5,1.9,0.8,3,0.9c0.5,0.1,1,0.1,1.5,0.1c0.6,0,1.1,0,1.6-0.1c1-0.2,2.1-0.5,3-1l0.2-0.1c0.2-0.1,0.3-0.2,0.5-0.3l0.7-0.4c0.2-0.1,0.3-0.2,0.4-0.3l0.2-0.2c0.2-0.1,0.4-0.3,0.5-0.5l0.1-0.1c0.3-0.3,0.7-0.7,0.9-1l0.6-0.9l0.4-0.6c1-1.9,1.4-4.1,1.1-6.2C22,7.8,21.7,6.7,21.2,5.8z\"/>%0A    </defs>%0A    <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0 2)\">%0A        <mask id=\"rotate-b\" fill=\"%23fff\">%0A            <use xlink:href=\"%23rotate\"/>%0A        </mask>%0A        <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23rotate\"/>%0A        <g fill=\"%235B5B5B\" mask=\"url(%23rotate-b)\">%0A            <rect width=\"30\" height=\"30\"/>%0A        </g>%0A    </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-text{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">%0A  <title>Text</title>%0A  <g id=\"Ebene_2\" data-name=\"Ebene 2\">%0A    <polyline points=\"19.64 7.27 19.64 4 12 4 12 20 15.91 20 8.09 20 12 20 12 4 4.36 4 4.36 7.27\" fill=\"none\" stroke=\"%235b5b5b\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5px\"/>%0A  </g>%0A</svg>\')}.leaflet-buttons-control-button:hover,.leaflet-buttons-control-button:focus{cursor:pointer;background-color:#f4f4f4}.active>.leaflet-buttons-control-button{box-shadow:inset 0 -1px 5px 2px #514d4d4f}.leaflet-buttons-control-text-hide{display:none}.button-container{position:relative}.button-container .leaflet-pm-actions-container{z-index:2;position:absolute;top:0;left:100%;display:none;white-space:nowrap;direction:ltr}.leaflet-right .leaflet-pm-toolbar .button-container .leaflet-pm-actions-container{right:100%;left:auto}.button-container.active .leaflet-pm-actions-container{display:block}.button-container .leaflet-pm-actions-container:not(.pos-right) a.leaflet-pm-action:last-child{border-radius:0 3px 3px 0;border-right:0}.button-container .leaflet-pm-actions-container.pos-right a.leaflet-pm-action:first-child{border-radius:3px 0 0 3px}.button-container .leaflet-pm-actions-container.pos-right a.leaflet-pm-action:last-child{border-right:0}.button-container .leaflet-pm-actions-container .leaflet-pm-action{padding:0 10px;background-color:#666;color:#fff;display:inline-block;width:auto;border-right:1px solid #eee;user-select:none;border-bottom:none;height:29px;line-height:29px;vertical-align:middle}.leaflet-pm-toolbar .button-container:first-child.pos-right.active a.leaflet-buttons-control-button{border-top-left-radius:0}.leaflet-pm-toolbar .button-container:first-child.active:not(.pos-right) a.leaflet-buttons-control-button{border-top-right-radius:0}.button-container .leaflet-pm-actions-container .leaflet-pm-action:hover,.button-container .leaflet-pm-actions-container .leaflet-pm-action:focus{cursor:pointer;background-color:#777}.button-container .leaflet-pm-actions-container .leaflet-pm-action.active-action{background-color:#8e8e8e}.leaflet-pm-toolbar.activeChild{z-index:801}.leaflet-buttons-control-button.pm-disabled{background-color:#f4f4f4}.leaflet-buttons-control-button.pm-disabled>.control-icon{filter:opacity(.6)}.button-container .leaflet-pm-actions-container .pm-action-button-mode.control-icon{filter:brightness(0) invert(1);width:18px}\n\n/*# sourceMappingURL=leaflet-geoman.css.map */"; document.head.appendChild(style); } catch(e) { console.error("CSS inject error:", e); } })();

var So = Object.defineProperty;
var To = (ye, ie, Q) => ie in ye ? So(ye, ie, { enumerable: !0, configurable: !0, writable: !0, value: Q }) : ye[ie] = Q;
var j = (ye, ie, Q) => To(ye, typeof ie != "symbol" ? ie + "" : ie, Q);
import { defineComponent as xr, ref as fe, onMounted as Fo, onUnmounted as Ro, openBlock as Er, createElementBlock as Br, createElementVNode as Z, createVNode as Oo, withDirectives as Kt, vModelCheckbox as Io, createTextVNode as Go, vModelText as zo, toDisplayString as Ci, vModelSelect as Mr, createStaticVNode as jo } from "vue";
import Ze from "leaflet";
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
(() => {
  var vr, kr;
  var ye = Object.create, ie = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, ee = Object.getOwnPropertyNames, _e = Object.getPrototypeOf, de = Object.prototype.hasOwnProperty, A = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ge = (e, t, i, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let a of ee(t)) !de.call(e, a) && a !== i && ie(e, a, { get: () => t[a], enumerable: !(r = Q(t, a)) || r.enumerable });
    return e;
  }, K = (e, t, i) => (i = e != null ? ye(_e(e)) : {}, Ge(t || !e || !e.__esModule ? ie(i, "default", { value: e, enumerable: !0 }) : i, e)), Ce = A((e, t) => {
    function i() {
      this.__data__ = [], this.size = 0;
    }
    t.exports = i;
  }), re = A((e, t) => {
    function i(r, a) {
      return r === a || r !== r && a !== a;
    }
    t.exports = i;
  }), ze = A((e, t) => {
    var i = re();
    function r(a, n) {
      for (var s = a.length; s--; ) if (i(a[s][0], n)) return s;
      return -1;
    }
    t.exports = r;
  }), nt = A((e, t) => {
    var i = ze(), r = Array.prototype, a = r.splice;
    function n(s) {
      var o = this.__data__, u = i(o, s);
      if (u < 0) return !1;
      var l = o.length - 1;
      return u == l ? o.pop() : a.call(o, u, 1), --this.size, !0;
    }
    t.exports = n;
  }), Fe = A((e, t) => {
    var i = ze();
    function r(a) {
      var n = this.__data__, s = i(n, a);
      return s < 0 ? void 0 : n[s][1];
    }
    t.exports = r;
  }), st = A((e, t) => {
    var i = ze();
    function r(a) {
      return i(this.__data__, a) > -1;
    }
    t.exports = r;
  }), ot = A((e, t) => {
    var i = ze();
    function r(a, n) {
      var s = this.__data__, o = i(s, a);
      return o < 0 ? (++this.size, s.push([a, n])) : s[o][1] = n, this;
    }
    t.exports = r;
  }), we = A((e, t) => {
    var i = Ce(), r = nt(), a = Fe(), n = st(), s = ot();
    function o(u) {
      var l = -1, f = u == null ? 0 : u.length;
      for (this.clear(); ++l < f; ) {
        var d = u[l];
        this.set(d[0], d[1]);
      }
    }
    o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = a, o.prototype.has = n, o.prototype.set = s, t.exports = o;
  }), je = A((e, t) => {
    var i = we();
    function r() {
      this.__data__ = new i(), this.size = 0;
    }
    t.exports = r;
  }), ut = A((e, t) => {
    function i(r) {
      var a = this.__data__, n = a.delete(r);
      return this.size = a.size, n;
    }
    t.exports = i;
  }), lt = A((e, t) => {
    function i(r) {
      return this.__data__.get(r);
    }
    t.exports = i;
  }), $e = A((e, t) => {
    function i(r) {
      return this.__data__.has(r);
    }
    t.exports = i;
  }), H = A((e, t) => {
    var i = typeof qt == "object" && qt && qt.Object === Object && qt;
    t.exports = i;
  }), ue = A((e, t) => {
    var i = H(), r = typeof self == "object" && self && self.Object === Object && self, a = i || r || Function("return this")();
    t.exports = a;
  }), ae = A((e, t) => {
    var i = ue(), r = i.Symbol;
    t.exports = r;
  }), X = A((e, t) => {
    var i = ae(), r = Object.prototype, a = r.hasOwnProperty, n = r.toString, s = i ? i.toStringTag : void 0;
    function o(u) {
      var l = a.call(u, s), f = u[s];
      try {
        u[s] = void 0;
        var d = !0;
      } catch {
      }
      var b = n.call(u);
      return d && (l ? u[s] = f : delete u[s]), b;
    }
    t.exports = o;
  }), le = A((e, t) => {
    var i = Object.prototype, r = i.toString;
    function a(n) {
      return r.call(n);
    }
    t.exports = a;
  }), be = A((e, t) => {
    var i = ae(), r = X(), a = le(), n = "[object Null]", s = "[object Undefined]", o = i ? i.toStringTag : void 0;
    function u(l) {
      return l == null ? l === void 0 ? s : n : o && o in Object(l) ? r(l) : a(l);
    }
    t.exports = u;
  }), qe = A((e, t) => {
    function i(r) {
      var a = typeof r;
      return r != null && (a == "object" || a == "function");
    }
    t.exports = i;
  }), Yt = A((e, t) => {
    var i = be(), r = qe(), a = "[object AsyncFunction]", n = "[object Function]", s = "[object GeneratorFunction]", o = "[object Proxy]";
    function u(l) {
      if (!r(l)) return !1;
      var f = i(l);
      return f == n || f == s || f == a || f == o;
    }
    t.exports = u;
  }), Ar = A((e, t) => {
    var i = ue(), r = i["__core-js_shared__"];
    t.exports = r;
  }), Pr = A((e, t) => {
    var i = Ar(), r = function() {
      var n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
      return n ? "Symbol(src)_1." + n : "";
    }();
    function a(n) {
      return !!r && r in n;
    }
    t.exports = a;
  }), Sr = A((e, t) => {
    var i = Function.prototype, r = i.toString;
    function a(n) {
      if (n != null) {
        try {
          return r.call(n);
        } catch {
        }
        try {
          return n + "";
        } catch {
        }
      }
      return "";
    }
    t.exports = a;
  }), Tr = A((e, t) => {
    var i = Yt(), r = Pr(), a = qe(), n = Sr(), s = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, u = Function.prototype, l = Object.prototype, f = u.toString, d = l.hasOwnProperty, b = RegExp("^" + f.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function v(D) {
      if (!a(D) || r(D)) return !1;
      var P = i(D) ? b : o;
      return P.test(n(D));
    }
    t.exports = v;
  }), Fr = A((e, t) => {
    function i(r, a) {
      return r == null ? void 0 : r[a];
    }
    t.exports = i;
  }), Xt = A((e, t) => {
    var i = Tr(), r = Fr();
    function a(n, s) {
      var o = r(n, s);
      return i(o) ? o : void 0;
    }
    t.exports = a;
  }), vi = A((e, t) => {
    var i = Xt(), r = ue(), a = i(r, "Map");
    t.exports = a;
  }), Ct = A((e, t) => {
    var i = Xt(), r = i(Object, "create");
    t.exports = r;
  }), Rr = A((e, t) => {
    var i = Ct();
    function r() {
      this.__data__ = i ? i(null) : {}, this.size = 0;
    }
    t.exports = r;
  }), Or = A((e, t) => {
    function i(r) {
      var a = this.has(r) && delete this.__data__[r];
      return this.size -= a ? 1 : 0, a;
    }
    t.exports = i;
  }), Ir = A((e, t) => {
    var i = Ct(), r = "__lodash_hash_undefined__", a = Object.prototype, n = a.hasOwnProperty;
    function s(o) {
      var u = this.__data__;
      if (i) {
        var l = u[o];
        return l === r ? void 0 : l;
      }
      return n.call(u, o) ? u[o] : void 0;
    }
    t.exports = s;
  }), Gr = A((e, t) => {
    var i = Ct(), r = Object.prototype, a = r.hasOwnProperty;
    function n(s) {
      var o = this.__data__;
      return i ? o[s] !== void 0 : a.call(o, s);
    }
    t.exports = n;
  }), zr = A((e, t) => {
    var i = Ct(), r = "__lodash_hash_undefined__";
    function a(n, s) {
      var o = this.__data__;
      return this.size += this.has(n) ? 0 : 1, o[n] = i && s === void 0 ? r : s, this;
    }
    t.exports = a;
  }), jr = A((e, t) => {
    var i = Rr(), r = Or(), a = Ir(), n = Gr(), s = zr();
    function o(u) {
      var l = -1, f = u == null ? 0 : u.length;
      for (this.clear(); ++l < f; ) {
        var d = u[l];
        this.set(d[0], d[1]);
      }
    }
    o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = a, o.prototype.has = n, o.prototype.set = s, t.exports = o;
  }), Nr = A((e, t) => {
    var i = jr(), r = we(), a = vi();
    function n() {
      this.size = 0, this.__data__ = { hash: new i(), map: new (a || r)(), string: new i() };
    }
    t.exports = n;
  }), Ur = A((e, t) => {
    function i(r) {
      var a = typeof r;
      return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? r !== "__proto__" : r === null;
    }
    t.exports = i;
  }), bt = A((e, t) => {
    var i = Ur();
    function r(a, n) {
      var s = a.__data__;
      return i(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
    }
    t.exports = r;
  }), Vr = A((e, t) => {
    var i = bt();
    function r(a) {
      var n = i(this, a).delete(a);
      return this.size -= n ? 1 : 0, n;
    }
    t.exports = r;
  }), Kr = A((e, t) => {
    var i = bt();
    function r(a) {
      return i(this, a).get(a);
    }
    t.exports = r;
  }), qr = A((e, t) => {
    var i = bt();
    function r(a) {
      return i(this, a).has(a);
    }
    t.exports = r;
  }), Hr = A((e, t) => {
    var i = bt();
    function r(a, n) {
      var s = i(this, a), o = s.size;
      return s.set(a, n), this.size += s.size == o ? 0 : 1, this;
    }
    t.exports = r;
  }), ki = A((e, t) => {
    var i = Nr(), r = Vr(), a = Kr(), n = qr(), s = Hr();
    function o(u) {
      var l = -1, f = u == null ? 0 : u.length;
      for (this.clear(); ++l < f; ) {
        var d = u[l];
        this.set(d[0], d[1]);
      }
    }
    o.prototype.clear = i, o.prototype.delete = r, o.prototype.get = a, o.prototype.has = n, o.prototype.set = s, t.exports = o;
  }), Yr = A((e, t) => {
    var i = we(), r = vi(), a = ki(), n = 200;
    function s(o, u) {
      var l = this.__data__;
      if (l instanceof i) {
        var f = l.__data__;
        if (!r || f.length < n - 1) return f.push([o, u]), this.size = ++l.size, this;
        l = this.__data__ = new a(f);
      }
      return l.set(o, u), this.size = l.size, this;
    }
    t.exports = s;
  }), Xr = A((e, t) => {
    var i = we(), r = je(), a = ut(), n = lt(), s = $e(), o = Yr();
    function u(l) {
      var f = this.__data__ = new i(l);
      this.size = f.size;
    }
    u.prototype.clear = r, u.prototype.delete = a, u.prototype.get = n, u.prototype.has = s, u.prototype.set = o, t.exports = u;
  }), Mi = A((e, t) => {
    var i = Xt(), r = function() {
      try {
        var a = i(Object, "defineProperty");
        return a({}, "", {}), a;
      } catch {
      }
    }();
    t.exports = r;
  }), Zt = A((e, t) => {
    var i = Mi();
    function r(a, n, s) {
      n == "__proto__" && i ? i(a, n, { configurable: !0, enumerable: !0, value: s, writable: !0 }) : a[n] = s;
    }
    t.exports = r;
  }), xi = A((e, t) => {
    var i = Zt(), r = re();
    function a(n, s, o) {
      (o !== void 0 && !r(n[s], o) || o === void 0 && !(s in n)) && i(n, s, o);
    }
    t.exports = a;
  }), Zr = A((e, t) => {
    function i(r) {
      return function(a, n, s) {
        for (var o = -1, u = Object(a), l = s(a), f = l.length; f--; ) {
          var d = l[r ? f : ++o];
          if (n(u[d], d, u) === !1) break;
        }
        return a;
      };
    }
    t.exports = i;
  }), $r = A((e, t) => {
    var i = Zr(), r = i();
    t.exports = r;
  }), Jr = A((e, t) => {
    var i = ue(), r = typeof e == "object" && e && !e.nodeType && e, a = r && typeof t == "object" && t && !t.nodeType && t, n = a && a.exports === r, s = n ? i.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
    function u(l, f) {
      if (f) return l.slice();
      var d = l.length, b = o ? o(d) : new l.constructor(d);
      return l.copy(b), b;
    }
    t.exports = u;
  }), Wr = A((e, t) => {
    var i = ue(), r = i.Uint8Array;
    t.exports = r;
  }), Qr = A((e, t) => {
    var i = Wr();
    function r(a) {
      var n = new a.constructor(a.byteLength);
      return new i(n).set(new i(a)), n;
    }
    t.exports = r;
  }), ea = A((e, t) => {
    var i = Qr();
    function r(a, n) {
      var s = n ? i(a.buffer) : a.buffer;
      return new a.constructor(s, a.byteOffset, a.length);
    }
    t.exports = r;
  }), ta = A((e, t) => {
    function i(r, a) {
      var n = -1, s = r.length;
      for (a || (a = Array(s)); ++n < s; ) a[n] = r[n];
      return a;
    }
    t.exports = i;
  }), ia = A((e, t) => {
    var i = qe(), r = Object.create, a = /* @__PURE__ */ function() {
      function n() {
      }
      return function(s) {
        if (!i(s)) return {};
        if (r) return r(s);
        n.prototype = s;
        var o = new n();
        return n.prototype = void 0, o;
      };
    }();
    t.exports = a;
  }), ra = A((e, t) => {
    function i(r, a) {
      return function(n) {
        return r(a(n));
      };
    }
    t.exports = i;
  }), Ei = A((e, t) => {
    var i = ra(), r = i(Object.getPrototypeOf, Object);
    t.exports = r;
  }), Bi = A((e, t) => {
    var i = Object.prototype;
    function r(a) {
      var n = a && a.constructor, s = typeof n == "function" && n.prototype || i;
      return a === s;
    }
    t.exports = r;
  }), aa = A((e, t) => {
    var i = ia(), r = Ei(), a = Bi();
    function n(s) {
      return typeof s.constructor == "function" && !a(s) ? i(r(s)) : {};
    }
    t.exports = n;
  }), Je = A((e, t) => {
    function i(r) {
      return r != null && typeof r == "object";
    }
    t.exports = i;
  }), na = A((e, t) => {
    var i = be(), r = Je(), a = "[object Arguments]";
    function n(s) {
      return r(s) && i(s) == a;
    }
    t.exports = n;
  }), wi = A((e, t) => {
    var i = na(), r = Je(), a = Object.prototype, n = a.hasOwnProperty, s = a.propertyIsEnumerable, o = i(/* @__PURE__ */ function() {
      return arguments;
    }()) ? i : function(u) {
      return r(u) && n.call(u, "callee") && !s.call(u, "callee");
    };
    t.exports = o;
  }), ht = A((e, t) => {
    var i = Array.isArray;
    t.exports = i;
  }), Di = A((e, t) => {
    var i = 9007199254740991;
    function r(a) {
      return typeof a == "number" && a > -1 && a % 1 == 0 && a <= i;
    }
    t.exports = r;
  }), $t = A((e, t) => {
    var i = Yt(), r = Di();
    function a(n) {
      return n != null && r(n.length) && !i(n);
    }
    t.exports = a;
  }), sa = A((e, t) => {
    var i = $t(), r = Je();
    function a(n) {
      return r(n) && i(n);
    }
    t.exports = a;
  }), oa = A((e, t) => {
    function i() {
      return !1;
    }
    t.exports = i;
  }), Ai = A((e, t) => {
    var i = ue(), r = oa(), a = typeof e == "object" && e && !e.nodeType && e, n = a && typeof t == "object" && t && !t.nodeType && t, s = n && n.exports === a, o = s ? i.Buffer : void 0, u = o ? o.isBuffer : void 0, l = u || r;
    t.exports = l;
  }), ua = A((e, t) => {
    var i = be(), r = Ei(), a = Je(), n = "[object Object]", s = Function.prototype, o = Object.prototype, u = s.toString, l = o.hasOwnProperty, f = u.call(Object);
    function d(b) {
      if (!a(b) || i(b) != n) return !1;
      var v = r(b);
      if (v === null) return !0;
      var D = l.call(v, "constructor") && v.constructor;
      return typeof D == "function" && D instanceof D && u.call(D) == f;
    }
    t.exports = d;
  }), la = A((e, t) => {
    var i = be(), r = Di(), a = Je(), n = "[object Arguments]", s = "[object Array]", o = "[object Boolean]", u = "[object Date]", l = "[object Error]", f = "[object Function]", d = "[object Map]", b = "[object Number]", v = "[object Object]", D = "[object RegExp]", P = "[object Set]", O = "[object String]", I = "[object WeakMap]", g = "[object ArrayBuffer]", M = "[object DataView]", w = "[object Float32Array]", R = "[object Float64Array]", T = "[object Int8Array]", F = "[object Int16Array]", h = "[object Int32Array]", p = "[object Uint8Array]", c = "[object Uint8ClampedArray]", y = "[object Uint16Array]", m = "[object Uint32Array]", _ = {};
    _[w] = _[R] = _[T] = _[F] = _[h] = _[p] = _[c] = _[y] = _[m] = !0, _[n] = _[s] = _[g] = _[o] = _[M] = _[u] = _[l] = _[f] = _[d] = _[b] = _[v] = _[D] = _[P] = _[O] = _[I] = !1;
    function x(C) {
      return a(C) && r(C.length) && !!_[i(C)];
    }
    t.exports = x;
  }), ha = A((e, t) => {
    function i(r) {
      return function(a) {
        return r(a);
      };
    }
    t.exports = i;
  }), pa = A((e, t) => {
    var i = H(), r = typeof e == "object" && e && !e.nodeType && e, a = r && typeof t == "object" && t && !t.nodeType && t, n = a && a.exports === r, s = n && i.process, o = function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    t.exports = o;
  }), Pi = A((e, t) => {
    var i = la(), r = ha(), a = pa(), n = a && a.isTypedArray, s = n ? r(n) : i;
    t.exports = s;
  }), Si = A((e, t) => {
    function i(r, a) {
      if (!(a === "constructor" && typeof r[a] == "function") && a != "__proto__") return r[a];
    }
    t.exports = i;
  }), da = A((e, t) => {
    var i = Zt(), r = re(), a = Object.prototype, n = a.hasOwnProperty;
    function s(o, u, l) {
      var f = o[u];
      (!(n.call(o, u) && r(f, l)) || l === void 0 && !(u in o)) && i(o, u, l);
    }
    t.exports = s;
  }), ca = A((e, t) => {
    var i = da(), r = Zt();
    function a(n, s, o, u) {
      var l = !o;
      o || (o = {});
      for (var f = -1, d = s.length; ++f < d; ) {
        var b = s[f], v = u ? u(o[b], n[b], b, o, n) : void 0;
        v === void 0 && (v = n[b]), l ? r(o, b, v) : i(o, b, v);
      }
      return o;
    }
    t.exports = a;
  }), ga = A((e, t) => {
    function i(r, a) {
      for (var n = -1, s = Array(r); ++n < r; ) s[n] = a(n);
      return s;
    }
    t.exports = i;
  }), Ti = A((e, t) => {
    var i = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
    function a(n, s) {
      var o = typeof n;
      return s = s ?? i, !!s && (o == "number" || o != "symbol" && r.test(n)) && n > -1 && n % 1 == 0 && n < s;
    }
    t.exports = a;
  }), fa = A((e, t) => {
    var i = ga(), r = wi(), a = ht(), n = Ai(), s = Ti(), o = Pi(), u = Object.prototype, l = u.hasOwnProperty;
    function f(d, b) {
      var v = a(d), D = !v && r(d), P = !v && !D && n(d), O = !v && !D && !P && o(d), I = v || D || P || O, g = I ? i(d.length, String) : [], M = g.length;
      for (var w in d) (b || l.call(d, w)) && !(I && (w == "length" || P && (w == "offset" || w == "parent") || O && (w == "buffer" || w == "byteLength" || w == "byteOffset") || s(w, M))) && g.push(w);
      return g;
    }
    t.exports = f;
  }), _a = A((e, t) => {
    function i(r) {
      var a = [];
      if (r != null) for (var n in Object(r)) a.push(n);
      return a;
    }
    t.exports = i;
  }), ma = A((e, t) => {
    var i = qe(), r = Bi(), a = _a(), n = Object.prototype, s = n.hasOwnProperty;
    function o(u) {
      if (!i(u)) return a(u);
      var l = r(u), f = [];
      for (var d in u) d == "constructor" && (l || !s.call(u, d)) || f.push(d);
      return f;
    }
    t.exports = o;
  }), Fi = A((e, t) => {
    var i = fa(), r = ma(), a = $t();
    function n(s) {
      return a(s) ? i(s, !0) : r(s);
    }
    t.exports = n;
  }), ya = A((e, t) => {
    var i = ca(), r = Fi();
    function a(n) {
      return i(n, r(n));
    }
    t.exports = a;
  }), La = A((e, t) => {
    var i = xi(), r = Jr(), a = ea(), n = ta(), s = aa(), o = wi(), u = ht(), l = sa(), f = Ai(), d = Yt(), b = qe(), v = ua(), D = Pi(), P = Si(), O = ya();
    function I(g, M, w, R, T, F, h) {
      var p = P(g, w), c = P(M, w), y = h.get(c);
      if (y) {
        i(g, w, y);
        return;
      }
      var m = F ? F(p, c, w + "", g, M, h) : void 0, _ = m === void 0;
      if (_) {
        var x = u(c), C = !x && f(c), k = !x && !C && D(c);
        m = c, x || C || k ? u(p) ? m = p : l(p) ? m = n(p) : C ? (_ = !1, m = r(c, !0)) : k ? (_ = !1, m = a(c, !0)) : m = [] : v(c) || o(c) ? (m = p, o(p) ? m = O(p) : (!b(p) || d(p)) && (m = s(c))) : _ = !1;
      }
      _ && (h.set(c, m), T(m, c, R, F, h), h.delete(c)), i(g, w, m);
    }
    t.exports = I;
  }), Ca = A((e, t) => {
    var i = Xr(), r = xi(), a = $r(), n = La(), s = qe(), o = Fi(), u = Si();
    function l(f, d, b, v, D) {
      f !== d && a(d, function(P, O) {
        if (D || (D = new i()), s(P)) n(f, d, O, b, l, v, D);
        else {
          var I = v ? v(u(f, O), P, O + "", f, d, D) : void 0;
          I === void 0 && (I = P), r(f, O, I);
        }
      }, o);
    }
    t.exports = l;
  }), Ri = A((e, t) => {
    function i(r) {
      return r;
    }
    t.exports = i;
  }), ba = A((e, t) => {
    function i(r, a, n) {
      switch (n.length) {
        case 0:
          return r.call(a);
        case 1:
          return r.call(a, n[0]);
        case 2:
          return r.call(a, n[0], n[1]);
        case 3:
          return r.call(a, n[0], n[1], n[2]);
      }
      return r.apply(a, n);
    }
    t.exports = i;
  }), va = A((e, t) => {
    var i = ba(), r = Math.max;
    function a(n, s, o) {
      return s = r(s === void 0 ? n.length - 1 : s, 0), function() {
        for (var u = arguments, l = -1, f = r(u.length - s, 0), d = Array(f); ++l < f; ) d[l] = u[s + l];
        l = -1;
        for (var b = Array(s + 1); ++l < s; ) b[l] = u[l];
        return b[s] = o(d), i(n, this, b);
      };
    }
    t.exports = a;
  }), ka = A((e, t) => {
    function i(r) {
      return function() {
        return r;
      };
    }
    t.exports = i;
  }), Ma = A((e, t) => {
    var i = ka(), r = Mi(), a = Ri(), n = r ? function(s, o) {
      return r(s, "toString", { configurable: !0, enumerable: !1, value: i(o), writable: !0 });
    } : a;
    t.exports = n;
  }), xa = A((e, t) => {
    var i = 800, r = 16, a = Date.now;
    function n(s) {
      var o = 0, u = 0;
      return function() {
        var l = a(), f = r - (l - u);
        if (u = l, f > 0) {
          if (++o >= i) return arguments[0];
        } else o = 0;
        return s.apply(void 0, arguments);
      };
    }
    t.exports = n;
  }), Ea = A((e, t) => {
    var i = Ma(), r = xa(), a = r(i);
    t.exports = a;
  }), Ba = A((e, t) => {
    var i = Ri(), r = va(), a = Ea();
    function n(s, o) {
      return a(r(s, o, i), s + "");
    }
    t.exports = n;
  }), wa = A((e, t) => {
    var i = re(), r = $t(), a = Ti(), n = qe();
    function s(o, u, l) {
      if (!n(l)) return !1;
      var f = typeof u;
      return (f == "number" ? r(l) && a(u, l.length) : f == "string" && u in l) ? i(l[u], o) : !1;
    }
    t.exports = s;
  }), Da = A((e, t) => {
    var i = Ba(), r = wa();
    function a(n) {
      return i(function(s, o) {
        var u = -1, l = o.length, f = l > 1 ? o[l - 1] : void 0, d = l > 2 ? o[2] : void 0;
        for (f = n.length > 3 && typeof f == "function" ? (l--, f) : void 0, d && r(o[0], o[1], d) && (f = l < 3 ? void 0 : f, l = 1), s = Object(s); ++u < l; ) {
          var b = o[u];
          b && n(s, b, u, f);
        }
        return s;
      });
    }
    t.exports = a;
  }), Jt = A((e, t) => {
    var i = Ca(), r = Da(), a = r(function(n, s, o) {
      i(n, s, o);
    });
    t.exports = a;
  }), Wt = A((e, t) => {
    var i = be(), r = Je(), a = "[object Symbol]";
    function n(s) {
      return typeof s == "symbol" || r(s) && i(s) == a;
    }
    t.exports = n;
  }), Aa = A((e, t) => {
    var i = ht(), r = Wt(), a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function s(o, u) {
      if (i(o)) return !1;
      var l = typeof o;
      return l == "number" || l == "symbol" || l == "boolean" || o == null || r(o) ? !0 : n.test(o) || !a.test(o) || u != null && o in Object(u);
    }
    t.exports = s;
  }), Pa = A((e, t) => {
    var i = ki(), r = "Expected a function";
    function a(n, s) {
      if (typeof n != "function" || s != null && typeof s != "function") throw new TypeError(r);
      var o = function() {
        var u = arguments, l = s ? s.apply(this, u) : u[0], f = o.cache;
        if (f.has(l)) return f.get(l);
        var d = n.apply(this, u);
        return o.cache = f.set(l, d) || f, d;
      };
      return o.cache = new (a.Cache || i)(), o;
    }
    a.Cache = i, t.exports = a;
  }), Sa = A((e, t) => {
    var i = Pa(), r = 500;
    function a(n) {
      var s = i(n, function(u) {
        return o.size === r && o.clear(), u;
      }), o = s.cache;
      return s;
    }
    t.exports = a;
  }), Ta = A((e, t) => {
    var i = Sa(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, a = /\\(\\)?/g, n = i(function(s) {
      var o = [];
      return s.charCodeAt(0) === 46 && o.push(""), s.replace(r, function(u, l, f, d) {
        o.push(f ? d.replace(a, "$1") : l || u);
      }), o;
    });
    t.exports = n;
  }), Fa = A((e, t) => {
    function i(r, a) {
      for (var n = -1, s = r == null ? 0 : r.length, o = Array(s); ++n < s; ) o[n] = a(r[n], n, r);
      return o;
    }
    t.exports = i;
  }), Ra = A((e, t) => {
    var i = ae(), r = Fa(), a = ht(), n = Wt(), s = i ? i.prototype : void 0, o = s ? s.toString : void 0;
    function u(l) {
      if (typeof l == "string") return l;
      if (a(l)) return r(l, u) + "";
      if (n(l)) return o ? o.call(l) : "";
      var f = l + "";
      return f == "0" && 1 / l == -1 / 0 ? "-0" : f;
    }
    t.exports = u;
  }), Oa = A((e, t) => {
    var i = Ra();
    function r(a) {
      return a == null ? "" : i(a);
    }
    t.exports = r;
  }), Ia = A((e, t) => {
    var i = ht(), r = Aa(), a = Ta(), n = Oa();
    function s(o, u) {
      return i(o) ? o : r(o, u) ? [o] : a(n(o));
    }
    t.exports = s;
  }), Ga = A((e, t) => {
    var i = Wt();
    function r(a) {
      if (typeof a == "string" || i(a)) return a;
      var n = a + "";
      return n == "0" && 1 / a == -1 / 0 ? "-0" : n;
    }
    t.exports = r;
  }), za = A((e, t) => {
    var i = Ia(), r = Ga();
    function a(n, s) {
      s = i(s, n);
      for (var o = 0, u = s.length; n != null && o < u; ) n = n[r(s[o++])];
      return o && o == u ? n : void 0;
    }
    t.exports = a;
  }), vt = A((e, t) => {
    var i = za();
    function r(a, n, s) {
      var o = a == null ? void 0 : i(a, n);
      return o === void 0 ? s : o;
    }
    t.exports = r;
  }), ja = A((e, t) => {
    (function(i, r) {
      typeof e == "object" && typeof t < "u" ? t.exports = r() : (i = i || self).RBush = r();
    })(e, function() {
      function i(g, M, w, R, T) {
        (function F(h, p, c, y, m) {
          for (; y > c; ) {
            if (y - c > 600) {
              var _ = y - c + 1, x = p - c + 1, C = Math.log(_), k = 0.5 * Math.exp(2 * C / 3), B = 0.5 * Math.sqrt(C * k * (_ - k) / _) * (x - _ / 2 < 0 ? -1 : 1), E = Math.max(c, Math.floor(p - x * k / _ + B)), S = Math.min(y, Math.floor(p + (_ - x) * k / _ + B));
              F(h, p, E, S, m);
            }
            var G = h[p], z = c, N = y;
            for (r(h, c, p), m(h[y], G) > 0 && r(h, c, y); z < N; ) {
              for (r(h, z, N), z++, N--; m(h[z], G) < 0; ) z++;
              for (; m(h[N], G) > 0; ) N--;
            }
            m(h[c], G) === 0 ? r(h, c, N) : r(h, ++N, y), N <= p && (c = N + 1), p <= N && (y = N - 1);
          }
        })(g, M, w || 0, R || g.length - 1, T || a);
      }
      function r(g, M, w) {
        var R = g[M];
        g[M] = g[w], g[w] = R;
      }
      function a(g, M) {
        return g < M ? -1 : g > M ? 1 : 0;
      }
      var n = function(g) {
        g === void 0 && (g = 9), this._maxEntries = Math.max(4, g), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
      };
      function s(g, M, w) {
        if (!w) return M.indexOf(g);
        for (var R = 0; R < M.length; R++) if (w(g, M[R])) return R;
        return -1;
      }
      function o(g, M) {
        u(g, 0, g.children.length, M, g);
      }
      function u(g, M, w, R, T) {
        T || (T = O(null)), T.minX = 1 / 0, T.minY = 1 / 0, T.maxX = -1 / 0, T.maxY = -1 / 0;
        for (var F = M; F < w; F++) {
          var h = g.children[F];
          l(T, g.leaf ? R(h) : h);
        }
        return T;
      }
      function l(g, M) {
        return g.minX = Math.min(g.minX, M.minX), g.minY = Math.min(g.minY, M.minY), g.maxX = Math.max(g.maxX, M.maxX), g.maxY = Math.max(g.maxY, M.maxY), g;
      }
      function f(g, M) {
        return g.minX - M.minX;
      }
      function d(g, M) {
        return g.minY - M.minY;
      }
      function b(g) {
        return (g.maxX - g.minX) * (g.maxY - g.minY);
      }
      function v(g) {
        return g.maxX - g.minX + (g.maxY - g.minY);
      }
      function D(g, M) {
        return g.minX <= M.minX && g.minY <= M.minY && M.maxX <= g.maxX && M.maxY <= g.maxY;
      }
      function P(g, M) {
        return M.minX <= g.maxX && M.minY <= g.maxY && M.maxX >= g.minX && M.maxY >= g.minY;
      }
      function O(g) {
        return { children: g, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
      }
      function I(g, M, w, R, T) {
        for (var F = [M, w]; F.length; ) if (!((w = F.pop()) - (M = F.pop()) <= R)) {
          var h = M + Math.ceil((w - M) / R / 2) * R;
          i(g, h, M, w, T), F.push(M, h, h, w);
        }
      }
      return n.prototype.all = function() {
        return this._all(this.data, []);
      }, n.prototype.search = function(g) {
        var M = this.data, w = [];
        if (!P(g, M)) return w;
        for (var R = this.toBBox, T = []; M; ) {
          for (var F = 0; F < M.children.length; F++) {
            var h = M.children[F], p = M.leaf ? R(h) : h;
            P(g, p) && (M.leaf ? w.push(h) : D(g, p) ? this._all(h, w) : T.push(h));
          }
          M = T.pop();
        }
        return w;
      }, n.prototype.collides = function(g) {
        var M = this.data;
        if (!P(g, M)) return !1;
        for (var w = []; M; ) {
          for (var R = 0; R < M.children.length; R++) {
            var T = M.children[R], F = M.leaf ? this.toBBox(T) : T;
            if (P(g, F)) {
              if (M.leaf || D(g, F)) return !0;
              w.push(T);
            }
          }
          M = w.pop();
        }
        return !1;
      }, n.prototype.load = function(g) {
        if (!g || !g.length) return this;
        if (g.length < this._minEntries) {
          for (var M = 0; M < g.length; M++) this.insert(g[M]);
          return this;
        }
        var w = this._build(g.slice(), 0, g.length - 1, 0);
        if (this.data.children.length) if (this.data.height === w.height) this._splitRoot(this.data, w);
        else {
          if (this.data.height < w.height) {
            var R = this.data;
            this.data = w, w = R;
          }
          this._insert(w, this.data.height - w.height - 1, !0);
        }
        else this.data = w;
        return this;
      }, n.prototype.insert = function(g) {
        return g && this._insert(g, this.data.height - 1), this;
      }, n.prototype.clear = function() {
        return this.data = O([]), this;
      }, n.prototype.remove = function(g, M) {
        if (!g) return this;
        for (var w, R, T, F = this.data, h = this.toBBox(g), p = [], c = []; F || p.length; ) {
          if (F || (F = p.pop(), R = p[p.length - 1], w = c.pop(), T = !0), F.leaf) {
            var y = s(g, F.children, M);
            if (y !== -1) return F.children.splice(y, 1), p.push(F), this._condense(p), this;
          }
          T || F.leaf || !D(F, h) ? R ? (w++, F = R.children[w], T = !1) : F = null : (p.push(F), c.push(w), w = 0, R = F, F = F.children[0]);
        }
        return this;
      }, n.prototype.toBBox = function(g) {
        return g;
      }, n.prototype.compareMinX = function(g, M) {
        return g.minX - M.minX;
      }, n.prototype.compareMinY = function(g, M) {
        return g.minY - M.minY;
      }, n.prototype.toJSON = function() {
        return this.data;
      }, n.prototype.fromJSON = function(g) {
        return this.data = g, this;
      }, n.prototype._all = function(g, M) {
        for (var w = []; g; ) g.leaf ? M.push.apply(M, g.children) : w.push.apply(w, g.children), g = w.pop();
        return M;
      }, n.prototype._build = function(g, M, w, R) {
        var T, F = w - M + 1, h = this._maxEntries;
        if (F <= h) return o(T = O(g.slice(M, w + 1)), this.toBBox), T;
        R || (R = Math.ceil(Math.log(F) / Math.log(h)), h = Math.ceil(F / Math.pow(h, R - 1))), (T = O([])).leaf = !1, T.height = R;
        var p = Math.ceil(F / h), c = p * Math.ceil(Math.sqrt(h));
        I(g, M, w, c, this.compareMinX);
        for (var y = M; y <= w; y += c) {
          var m = Math.min(y + c - 1, w);
          I(g, y, m, p, this.compareMinY);
          for (var _ = y; _ <= m; _ += p) {
            var x = Math.min(_ + p - 1, m);
            T.children.push(this._build(g, _, x, R - 1));
          }
        }
        return o(T, this.toBBox), T;
      }, n.prototype._chooseSubtree = function(g, M, w, R) {
        for (; R.push(M), !M.leaf && R.length - 1 !== w; ) {
          for (var T = 1 / 0, F = 1 / 0, h = void 0, p = 0; p < M.children.length; p++) {
            var c = M.children[p], y = b(c), m = (_ = g, x = c, (Math.max(x.maxX, _.maxX) - Math.min(x.minX, _.minX)) * (Math.max(x.maxY, _.maxY) - Math.min(x.minY, _.minY)) - y);
            m < F ? (F = m, T = y < T ? y : T, h = c) : m === F && y < T && (T = y, h = c);
          }
          M = h || M.children[0];
        }
        var _, x;
        return M;
      }, n.prototype._insert = function(g, M, w) {
        var R = w ? g : this.toBBox(g), T = [], F = this._chooseSubtree(R, this.data, M, T);
        for (F.children.push(g), l(F, R); M >= 0 && T[M].children.length > this._maxEntries; ) this._split(T, M), M--;
        this._adjustParentBBoxes(R, T, M);
      }, n.prototype._split = function(g, M) {
        var w = g[M], R = w.children.length, T = this._minEntries;
        this._chooseSplitAxis(w, T, R);
        var F = this._chooseSplitIndex(w, T, R), h = O(w.children.splice(F, w.children.length - F));
        h.height = w.height, h.leaf = w.leaf, o(w, this.toBBox), o(h, this.toBBox), M ? g[M - 1].children.push(h) : this._splitRoot(w, h);
      }, n.prototype._splitRoot = function(g, M) {
        this.data = O([g, M]), this.data.height = g.height + 1, this.data.leaf = !1, o(this.data, this.toBBox);
      }, n.prototype._chooseSplitIndex = function(g, M, w) {
        for (var R, T, F, h, p, c, y, m = 1 / 0, _ = 1 / 0, x = M; x <= w - M; x++) {
          var C = u(g, 0, x, this.toBBox), k = u(g, x, w, this.toBBox), B = (T = C, F = k, h = void 0, p = void 0, c = void 0, y = void 0, h = Math.max(T.minX, F.minX), p = Math.max(T.minY, F.minY), c = Math.min(T.maxX, F.maxX), y = Math.min(T.maxY, F.maxY), Math.max(0, c - h) * Math.max(0, y - p)), E = b(C) + b(k);
          B < m ? (m = B, R = x, _ = E < _ ? E : _) : B === m && E < _ && (_ = E, R = x);
        }
        return R || w - M;
      }, n.prototype._chooseSplitAxis = function(g, M, w) {
        var R = g.leaf ? this.compareMinX : f, T = g.leaf ? this.compareMinY : d;
        this._allDistMargin(g, M, w, R) < this._allDistMargin(g, M, w, T) && g.children.sort(R);
      }, n.prototype._allDistMargin = function(g, M, w, R) {
        g.children.sort(R);
        for (var T = this.toBBox, F = u(g, 0, M, T), h = u(g, w - M, w, T), p = v(F) + v(h), c = M; c < w - M; c++) {
          var y = g.children[c];
          l(F, g.leaf ? T(y) : y), p += v(F);
        }
        for (var m = w - M - 1; m >= M; m--) {
          var _ = g.children[m];
          l(h, g.leaf ? T(_) : _), p += v(h);
        }
        return p;
      }, n.prototype._adjustParentBBoxes = function(g, M, w) {
        for (var R = w; R >= 0; R--) l(M[R], g);
      }, n.prototype._condense = function(g) {
        for (var M = g.length - 1, w = void 0; M >= 0; M--) g[M].children.length === 0 ? M > 0 ? (w = g[M - 1].children).splice(w.indexOf(g[M]), 1) : this.clear() : o(g[M], this.toBBox);
      }, n;
    });
  });
  Array.prototype.findIndex = Array.prototype.findIndex || function(e) {
    if (this === null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
    if (typeof e != "function") throw new TypeError("callback must be a function");
    for (var t = Object(this), i = t.length >>> 0, r = arguments[1], a = 0; a < i; a++) if (e.call(r, t[a], a, t)) return a;
    return -1;
  }, Array.prototype.find = Array.prototype.find || function(e) {
    if (this === null) throw new TypeError("Array.prototype.find called on null or undefined");
    if (typeof e != "function") throw new TypeError("callback must be a function");
    for (var t = Object(this), i = t.length >>> 0, r = arguments[1], a = 0; a < i; a++) {
      var n = t[a];
      if (e.call(r, n, a, t)) return n;
    }
  }, typeof Object.assign != "function" && (Object.assign = function(e) {
    if (e == null) throw new TypeError("Cannot convert undefined or null to object");
    e = Object(e);
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      if (i != null) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }), function(e) {
    e.forEach(function(t) {
      t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function() {
        this.parentNode.removeChild(this);
      } });
    });
  }([Element.prototype, CharacterData.prototype, DocumentType.prototype]), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function(e, t) {
    if (this == null) throw new TypeError('"this" is null or not defined');
    var i = Object(this), r = i.length >>> 0;
    if (r === 0) return !1;
    var a = t | 0, n = Math.max(a >= 0 ? a : r - Math.abs(a), 0);
    function s(o, u) {
      return o === u || typeof o == "number" && typeof u == "number" && isNaN(o) && isNaN(u);
    }
    for (; n < r; ) {
      if (s(i[n], e)) return !0;
      n++;
    }
    return !1;
  } });
  var Na = { version: "2.19.2" }, Oi = K(Jt()), Ua = { tooltips: { placeMarker: "Click to place marker", placeMarkerTouch: "Tap the map to place a marker", firstVertex: "Click to place first vertex", continueLine: "Click to continue drawing", finishLine: "Click any existing marker to finish", finishPoly: "Click first marker to finish", finishRect: "Click to finish", startCircle: "Click to place circle center", finishCircle: "Click to finish circle", placeCircleMarker: "Click to place circle marker", placeText: "Click to place text", selectFirstLayerFor: "Select first layer for {action}", selectSecondLayerFor: "Select second layer for {action}" }, actions: { finish: "Finish", cancel: "Cancel", removeLastVertex: "Remove Last Vertex" }, buttonTitles: { drawMarkerButton: "Draw Marker", drawPolyButton: "Draw Polygons", drawLineButton: "Draw Polyline", drawCircleButton: "Draw Circle", drawRectButton: "Draw Rectangle", editButton: "Edit Layers", dragButton: "Drag Layers", cutButton: "Cut Layers", deleteButton: "Remove Layers", drawCircleMarkerButton: "Draw Circle Marker", snappingButton: "Snap dragged marker to other layers and vertices", pinningButton: "Pin shared vertices together", rotateButton: "Rotate Layers", drawTextButton: "Draw Text", scaleButton: "Scale Layers", autoTracingButton: "Auto trace Line", snapGuidesButton: "Show SnapGuides", unionButton: "Union layers", differenceButton: "Subtract layers" }, measurements: { totalLength: "Length", segmentLength: "Segment length", area: "Area", radius: "Radius", perimeter: "Perimeter", height: "Height", width: "Width", coordinates: "Position", coordinatesMarker: "Position Marker" } }, Va = { tooltips: { placeMarker: "Platziere den Marker mit Klick", placeMarkerTouch: "Tippe auf die Karte, um einen Marker zu platzieren", firstVertex: "Platziere den ersten Marker mit Klick", continueLine: "Klicke, um weiter zu zeichnen", finishLine: "Beende mit Klick auf existierenden Marker", finishPoly: "Beende mit Klick auf ersten Marker", finishRect: "Beende mit Klick", startCircle: "Platziere das Kreiszentrum mit Klick", finishCircle: "Beende den Kreis mit Klick", placeCircleMarker: "Platziere den Kreismarker mit Klick", placeText: "Platziere den Text mit Klick" }, actions: { finish: "Beenden", cancel: "Abbrechen", removeLastVertex: "Letzten Vertex löschen" }, buttonTitles: { drawMarkerButton: "Marker zeichnen", drawPolyButton: "Polygon zeichnen", drawLineButton: "Polyline zeichnen", drawCircleButton: "Kreis zeichnen", drawRectButton: "Rechteck zeichnen", editButton: "Layer editieren", dragButton: "Layer bewegen", cutButton: "Layer schneiden", deleteButton: "Layer löschen", drawCircleMarkerButton: "Kreismarker zeichnen", snappingButton: "Bewegter Layer an andere Layer oder Vertexe einhacken", pinningButton: "Vertexe an der gleichen Position verknüpfen", rotateButton: "Layer drehen", drawTextButton: "Text zeichnen", scaleButton: "Layer skalieren", autoTracingButton: "Linie automatisch nachzeichen" }, measurements: { totalLength: "Länge", segmentLength: "Segment Länge", area: "Fläche", radius: "Radius", perimeter: "Umfang", height: "Höhe", width: "Breite", coordinates: "Position", coordinatesMarker: "Position Marker" } }, Ka = { tooltips: { placeMarker: "Clicca per posizionare un Marker", placeMarkerTouch: "Tocca la mappa per posizionare un marker", firstVertex: "Clicca per posizionare il primo vertice", continueLine: "Clicca per continuare a disegnare", finishLine: "Clicca qualsiasi marker esistente per terminare", finishPoly: "Clicca il primo marker per terminare", finishRect: "Clicca per terminare", startCircle: "Clicca per posizionare il punto centrale del cerchio", finishCircle: "Clicca per terminare il cerchio", placeCircleMarker: "Clicca per posizionare un Marker del cherchio" }, actions: { finish: "Termina", cancel: "Annulla", removeLastVertex: "Rimuovi l'ultimo vertice" }, buttonTitles: { drawMarkerButton: "Disegna Marker", drawPolyButton: "Disegna Poligoni", drawLineButton: "Disegna Polilinea", drawCircleButton: "Disegna Cerchio", drawRectButton: "Disegna Rettangolo", editButton: "Modifica Livelli", dragButton: "Sposta Livelli", cutButton: "Ritaglia Livelli", deleteButton: "Elimina Livelli", drawCircleMarkerButton: "Disegna Marker del Cerchio", snappingButton: "Snap ha trascinato il pennarello su altri strati e vertici", pinningButton: "Pin condiviso vertici insieme", rotateButton: "Ruota livello" } }, qa = { tooltips: { placeMarker: "Klik untuk menempatkan marker", placeMarkerTouch: "Ketuk peta untuk menempatkan marker", firstVertex: "Klik untuk menempatkan vertex pertama", continueLine: "Klik untuk meneruskan digitasi", finishLine: "Klik pada sembarang marker yang ada untuk mengakhiri", finishPoly: "Klik marker pertama untuk mengakhiri", finishRect: "Klik untuk mengakhiri", startCircle: "Klik untuk menempatkan titik pusat lingkaran", finishCircle: "Klik untuk mengakhiri lingkaran", placeCircleMarker: "Klik untuk menempatkan penanda lingkarann" }, actions: { finish: "Selesai", cancel: "Batal", removeLastVertex: "Hilangkan Vertex Terakhir" }, buttonTitles: { drawMarkerButton: "Digitasi Marker", drawPolyButton: "Digitasi Polygon", drawLineButton: "Digitasi Polyline", drawCircleButton: "Digitasi Lingkaran", drawRectButton: "Digitasi Segi Empat", editButton: "Edit Layer", dragButton: "Geser Layer", cutButton: "Potong Layer", deleteButton: "Hilangkan Layer", drawCircleMarkerButton: "Digitasi Penanda Lingkaran", snappingButton: "Jepretkan penanda yang ditarik ke lapisan dan simpul lain", pinningButton: "Sematkan simpul bersama bersama", rotateButton: "Putar lapisan" } }, Ha = { tooltips: { placeMarker: "Adaugă un punct", placeMarkerTouch: "Atingeți harta pentru a plasa un punct", firstVertex: "Apasă aici pentru a adăuga primul Vertex", continueLine: "Apasă aici pentru a continua desenul", finishLine: "Apasă pe orice obiect pentru a finisa desenul", finishPoly: "Apasă pe primul obiect pentru a finisa", finishRect: "Apasă pentru a finisa", startCircle: "Apasă pentru a desena un cerc", finishCircle: "Apasă pentru a finisa un cerc", placeCircleMarker: "Adaugă un punct" }, actions: { finish: "Termină", cancel: "Anulează", removeLastVertex: "Șterge ultimul Vertex" }, buttonTitles: { drawMarkerButton: "Adaugă o bulină", drawPolyButton: "Desenează un poligon", drawLineButton: "Desenează o linie", drawCircleButton: "Desenează un cerc", drawRectButton: "Desenează un dreptunghi", editButton: "Editează straturile", dragButton: "Mută straturile", cutButton: "Taie straturile", deleteButton: "Șterge straturile", drawCircleMarkerButton: "Desenează marcatorul cercului", snappingButton: "Fixați marcatorul glisat pe alte straturi și vârfuri", pinningButton: "Fixați vârfurile partajate împreună", rotateButton: "Rotiți stratul" } }, Ya = { tooltips: { placeMarker: "Нажмите, чтобы нанести маркер", placeMarkerTouch: "Коснитесь карты, чтобы разместить маркер", firstVertex: "Нажмите, чтобы нанести первый объект", continueLine: "Нажмите, чтобы продолжить рисование", finishLine: "Нажмите любой существующий маркер для завершения", finishPoly: "Выберите первую точку, чтобы закончить", finishRect: "Нажмите, чтобы закончить", startCircle: "Нажмите, чтобы добавить центр круга", finishCircle: "Нажмите, чтобы задать радиус", placeCircleMarker: "Нажмите, чтобы нанести круговой маркер" }, actions: { finish: "Завершить", cancel: "Отменить", removeLastVertex: "Отменить последнее действие" }, buttonTitles: { drawMarkerButton: "Добавить маркер", drawPolyButton: "Рисовать полигон", drawLineButton: "Рисовать кривую", drawCircleButton: "Рисовать круг", drawRectButton: "Рисовать прямоугольник", editButton: "Редактировать слой", dragButton: "Перенести слой", cutButton: "Вырезать слой", deleteButton: "Удалить слой", drawCircleMarkerButton: "Добавить круговой маркер", snappingButton: "Привязать перетаскиваемый маркер к другим слоям и вершинам", pinningButton: "Связать общие точки вместе", rotateButton: "Поворот слоя" } }, Xa = { tooltips: { placeMarker: "Presiona para colocar un marcador", placeMarkerTouch: "Toca el mapa para colocar un marcador", firstVertex: "Presiona para colocar el primer vértice", continueLine: "Presiona para continuar dibujando", finishLine: "Presiona cualquier marcador existente para finalizar", finishPoly: "Presiona el primer marcador para finalizar", finishRect: "Presiona para finalizar", startCircle: "Presiona para colocar el centro del círculo", finishCircle: "Presiona para finalizar el círculo", placeCircleMarker: "Presiona para colocar un marcador de círculo" }, actions: { finish: "Finalizar", cancel: "Cancelar", removeLastVertex: "Eliminar último vértice" }, buttonTitles: { drawMarkerButton: "Dibujar Marcador", drawPolyButton: "Dibujar Polígono", drawLineButton: "Dibujar Línea", drawCircleButton: "Dibujar Círculo", drawRectButton: "Dibujar Rectángulo", editButton: "Editar Capas", dragButton: "Arrastrar Capas", cutButton: "Cortar Capas", deleteButton: "Eliminar Capas", drawCircleMarkerButton: "Dibujar Marcador de Círculo", snappingButton: "El marcador de Snap arrastrado a otras capas y vértices", pinningButton: "Fijar juntos los vértices compartidos", rotateButton: "Rotar capa" } }, Za = { tooltips: { placeMarker: "Klik om een marker te plaatsen", placeMarkerTouch: "Tik op de kaart om een marker te plaatsen", firstVertex: "Klik om het eerste punt te plaatsen", continueLine: "Klik om te blijven tekenen", finishLine: "Klik op een bestaand punt om te beëindigen", finishPoly: "Klik op het eerst punt om te beëindigen", finishRect: "Klik om te beëindigen", startCircle: "Klik om het middelpunt te plaatsen", finishCircle: "Klik om de cirkel te beëindigen", placeCircleMarker: "Klik om een marker te plaatsen" }, actions: { finish: "Bewaar", cancel: "Annuleer", removeLastVertex: "Verwijder laatste punt" }, buttonTitles: { drawMarkerButton: "Plaats Marker", drawPolyButton: "Teken een vlak", drawLineButton: "Teken een lijn", drawCircleButton: "Teken een cirkel", drawRectButton: "Teken een vierkant", editButton: "Bewerk", dragButton: "Verplaats", cutButton: "Knip", deleteButton: "Verwijder", drawCircleMarkerButton: "Plaats Marker", snappingButton: "Snap gesleepte marker naar andere lagen en hoekpunten", pinningButton: "Speld gedeelde hoekpunten samen", rotateButton: "Laag roteren" } }, $a = { tooltips: { placeMarker: "Cliquez pour placer un marqueur", placeMarkerTouch: "Appuyez sur la carte pour placer un marqueur", firstVertex: "Cliquez pour placer le premier sommet", continueLine: "Cliquez pour continuer à dessiner", finishLine: "Cliquez sur n'importe quel marqueur pour terminer", finishPoly: "Cliquez sur le premier marqueur pour terminer", finishRect: "Cliquez pour terminer", startCircle: "Cliquez pour placer le centre du cercle", finishCircle: "Cliquez pour finir le cercle", placeCircleMarker: "Cliquez pour placer le marqueur circulaire" }, actions: { finish: "Terminer", cancel: "Annuler", removeLastVertex: "Retirer le dernier sommet" }, buttonTitles: { drawMarkerButton: "Placer des marqueurs", drawPolyButton: "Dessiner des polygones", drawLineButton: "Dessiner des polylignes", drawCircleButton: "Dessiner un cercle", drawRectButton: "Dessiner un rectangle", editButton: "Éditer des calques", dragButton: "Déplacer des calques", cutButton: "Couper des calques", deleteButton: "Supprimer des calques", drawCircleMarkerButton: "Dessiner un marqueur circulaire", snappingButton: "Glisser le marqueur vers d'autres couches et sommets", pinningButton: "Épingler ensemble les sommets partagés", rotateButton: "Tourner des calques" } }, Ja = { tooltips: { placeMarker: "单击放置标记", placeMarkerTouch: "点击地图放置标记", firstVertex: "单击放置首个顶点", continueLine: "单击继续绘制", finishLine: "单击任何存在的标记以完成", finishPoly: "单击第一个标记以完成", finishRect: "单击完成", startCircle: "单击放置圆心", finishCircle: "单击完成圆形", placeCircleMarker: "点击放置圆形标记" }, actions: { finish: "完成", cancel: "取消", removeLastVertex: "移除最后的顶点" }, buttonTitles: { drawMarkerButton: "绘制标记", drawPolyButton: "绘制多边形", drawLineButton: "绘制线段", drawCircleButton: "绘制圆形", drawRectButton: "绘制长方形", editButton: "编辑图层", dragButton: "拖拽图层", cutButton: "剪切图层", deleteButton: "删除图层", drawCircleMarkerButton: "画圆圈标记", snappingButton: "将拖动的标记捕捉到其他图层和顶点", pinningButton: "将共享顶点固定在一起", rotateButton: "旋转图层" } }, Wa = { tooltips: { placeMarker: "單擊放置標記", placeMarkerTouch: "點擊地圖放置標記", firstVertex: "單擊放置第一個頂點", continueLine: "單擊繼續繪製", finishLine: "單擊任何存在的標記以完成", finishPoly: "單擊第一個標記以完成", finishRect: "單擊完成", startCircle: "單擊放置圓心", finishCircle: "單擊完成圓形", placeCircleMarker: "點擊放置圓形標記" }, actions: { finish: "完成", cancel: "取消", removeLastVertex: "移除最後一個頂點" }, buttonTitles: { drawMarkerButton: "放置標記", drawPolyButton: "繪製多邊形", drawLineButton: "繪製線段", drawCircleButton: "繪製圓形", drawRectButton: "繪製方形", editButton: "編輯圖形", dragButton: "移動圖形", cutButton: "裁切圖形", deleteButton: "刪除圖形", drawCircleMarkerButton: "畫圓圈標記", snappingButton: "將拖動的標記對齊到其他圖層和頂點", pinningButton: "將共享頂點固定在一起", rotateButton: "旋轉圖形" } }, Qa = { tooltips: { placeMarker: "Clique para posicionar o marcador", placeMarkerTouch: "Toque no mapa para posicionar um marcador", firstVertex: "Clique para posicionar o primeiro vértice", continueLine: "Clique para continuar desenhando", finishLine: "Clique em qualquer marcador existente para finalizar", finishPoly: "Clique no primeiro marcador para finalizar", finishRect: "Clique para finalizar", startCircle: "Clique para posicionar o centro do círculo", finishCircle: "Clique para finalizar o círculo", placeCircleMarker: "Clique para posicionar o marcador circular", placeText: "Clique para inserir texto" }, actions: { finish: "Finalizar", cancel: "Cancelar", removeLastVertex: "Remover último vértice" }, buttonTitles: { drawMarkerButton: "Desenhar Marcador", drawPolyButton: "Desenhar Polígonos", drawLineButton: "Desenhar Linha Poligonal", drawCircleButton: "Desenhar Círculo", drawRectButton: "Desenhar Retângulo", editButton: "Editar Camadas", dragButton: "Arrastar Camadas", cutButton: "Recortar Camadas", deleteButton: "Remover Camadas", drawCircleMarkerButton: "Desenhar Marcador de Círculo", snappingButton: "Ajustar marcador arrastado a outras camadas e vértices", pinningButton: "Unir vértices compartilhados", rotateButton: "Rotacionar Camadas", drawTextButton: "Desenhar Texto", scaleButton: "Redimensionar Camadas", autoTracingButton: "Traçado Automático de Linha" }, measurements: { totalLength: "Comprimento", segmentLength: "Comprimento do Segmento", area: "Área", radius: "Raio", perimeter: "Perímetro", height: "Altura", width: "Largura", coordinates: "Posição", coordinatesMarker: "Marcador de Posição" } }, Ii = { tooltips: { placeMarker: "Clique para colocar marcador", placeMarkerTouch: "Toque no mapa para colocar um marcador", firstVertex: "Clique para colocar primeiro vértice", continueLine: "Clique para continuar a desenhar", finishLine: "Clique num marcador existente para terminar", finishPoly: "Clique no primeiro marcador para terminar", finishRect: "Clique para terminar", startCircle: "Clique para colocar o centro do círculo", finishCircle: "Clique para terminar o círculo", placeCircleMarker: "Clique para colocar marcador de círculo", placeText: "Clique para colocar texto" }, actions: { finish: "Terminar", cancel: "Cancelar", removeLastVertex: "Remover Último Vértice" }, buttonTitles: { drawMarkerButton: "Desenhar Marcador", drawPolyButton: "Desenhar Polígonos", drawLineButton: "Desenhar Polilinha", drawCircleButton: "Desenhar Círculo", drawRectButton: "Desenhar Retângulo", editButton: "Editar Camadas", dragButton: "Arrastar Camadas", cutButton: "Cortar Camadas", deleteButton: "Remover Camadas", drawCircleMarkerButton: "Desenhar Marcador de Círculo", snappingButton: "Ajustar marcador arrastado a outras camadas e vértices", pinningButton: "Unir vértices partilhados", rotateButton: "Rodar Camadas", drawTextButton: "Desenhar Texto", scaleButton: "Escalar Camadas", autoTracingButton: "Traçado Automático de Linha" }, measurements: { totalLength: "Comprimento", segmentLength: "Comprimento do Segmento", area: "Área", radius: "Raio", perimeter: "Perímetro", height: "Altura", width: "Largura", coordinates: "Posição", coordinatesMarker: "Marcador de Posição" } }, en = { tooltips: { placeMarker: "Kliknij, aby umieścić znacznik", placeMarkerTouch: "Dotknij mapę, aby umieścić znacznik", firstVertex: "Kliknij, aby umieścić pierwszy wierzchołek", continueLine: "Kliknij, aby kontynuować rysowanie", finishLine: "Kliknij dowolny istniejący znacznik, aby zakończyć", finishPoly: "Kliknij pierwszy znacznik, aby zakończyć", finishRect: "Kliknij, aby zakończyć", startCircle: "Kliknij, aby umieścić środek okręgu", finishCircle: "Kliknij, aby zakończyć okrąg", placeCircleMarker: "Kliknij, aby umieścić znacznik okręgu", placeText: "Kliknij, aby umieścić tekst" }, actions: { finish: "Zakończ", cancel: "Anuluj", removeLastVertex: "Usuń ostatni wierzchołek" }, buttonTitles: { drawMarkerButton: "Rysuj znacznik", drawPolyButton: "Rysuj wielokąt", drawLineButton: "Rysuj linię", drawCircleButton: "Rysuj okrąg", drawRectButton: "Rysuj prostokąt", editButton: "Edytuj warstwy", dragButton: "Przeciągnij warstwy", cutButton: "Wytnij warstwy", deleteButton: "Usuń warstwy", drawCircleMarkerButton: "Rysuj znacznik okrągły", snappingButton: "Przyciągnij przenoszony znacznik do innych warstw i wierzchołków", pinningButton: "Przypnij wspólne wierzchołki razem", rotateButton: "Obróć warstwy", drawTextButton: "Rysuj tekst", scaleButton: "Skaluj warstwy", autoTracingButton: "Automatyczne śledzenie linii" }, measurements: { totalLength: "Długość", segmentLength: "Długość odcinka", area: "Obszar", radius: "Promień", perimeter: "Obwód", height: "Wysokość", width: "Szerokość", coordinates: "Pozycja", coordinatesMarker: "Znacznik pozycji" } }, tn = { tooltips: { placeMarker: "Klicka för att placera markör", placeMarkerTouch: "Tryck på kartan för att placera en markör", firstVertex: "Klicka för att placera första hörnet", continueLine: "Klicka för att fortsätta rita", finishLine: "Klicka på en existerande punkt för att slutföra", finishPoly: "Klicka på den första punkten för att slutföra", finishRect: "Klicka för att slutföra", startCircle: "Klicka för att placera cirkelns centrum", finishCircle: "Klicka för att slutföra cirkeln", placeCircleMarker: "Klicka för att placera cirkelmarkör" }, actions: { finish: "Slutför", cancel: "Avbryt", removeLastVertex: "Ta bort sista hörnet" }, buttonTitles: { drawMarkerButton: "Rita Markör", drawPolyButton: "Rita Polygoner", drawLineButton: "Rita Linje", drawCircleButton: "Rita Cirkel", drawRectButton: "Rita Rektangel", editButton: "Redigera Lager", dragButton: "Dra Lager", cutButton: "Klipp i Lager", deleteButton: "Ta bort Lager", drawCircleMarkerButton: "Rita Cirkelmarkör", snappingButton: "Snäpp dra markören till andra lager och hörn", pinningButton: "Fäst delade hörn tillsammans", rotateButton: "Rotera lagret" } }, rn = { tooltips: { placeMarker: "Κάντε κλικ για να τοποθετήσετε Δείκτη", placeMarkerTouch: "Πατήστε στο χάρτη για να τοποθετήσετε δείκτη", firstVertex: "Κάντε κλικ για να τοποθετήσετε το πρώτο σημείο", continueLine: "Κάντε κλικ για να συνεχίσετε να σχεδιάζετε", finishLine: "Κάντε κλικ σε οποιονδήποτε υπάρχον σημείο για να ολοκληρωθεί", finishPoly: "Κάντε κλικ στο πρώτο σημείο για να τελειώσετε", finishRect: "Κάντε κλικ για να τελειώσετε", startCircle: "Κάντε κλικ για να τοποθετήσετε κέντρο Κύκλου", finishCircle: "Κάντε κλικ για να ολοκληρώσετε τον Κύκλο", placeCircleMarker: "Κάντε κλικ για να τοποθετήσετε Κυκλικό Δείκτη" }, actions: { finish: "Τέλος", cancel: "Ακύρωση", removeLastVertex: "Κατάργηση τελευταίου σημείου" }, buttonTitles: { drawMarkerButton: "Σχεδίαση Δείκτη", drawPolyButton: "Σχεδίαση Πολυγώνου", drawLineButton: "Σχεδίαση Γραμμής", drawCircleButton: "Σχεδίαση Κύκλου", drawRectButton: "Σχεδίαση Ορθογωνίου", editButton: "Επεξεργασία Επιπέδων", dragButton: "Μεταφορά Επιπέδων", cutButton: "Αποκοπή Επιπέδων", deleteButton: "Κατάργηση Επιπέδων", drawCircleMarkerButton: "Σχεδίαση Κυκλικού Δείκτη", snappingButton: "Προσκόλληση του Δείκτη μεταφοράς σε άλλα Επίπεδα και Κορυφές", pinningButton: "Περικοπή κοινών κορυφών μαζί", rotateButton: "Περιστρέψτε το στρώμα" } }, an = { tooltips: { placeMarker: "Kattintson a jelölő elhelyezéséhez", placeMarkerTouch: "Érintse meg a térképet a jelölő elhelyezéséhez", firstVertex: "Kattintson az első pont elhelyezéséhez", continueLine: "Kattintson a következő pont elhelyezéséhez", finishLine: "A befejezéshez kattintson egy meglévő pontra", finishPoly: "A befejezéshez kattintson az első pontra", finishRect: "Kattintson a befejezéshez", startCircle: "Kattintson a kör középpontjának elhelyezéséhez", finishCircle: "Kattintson a kör befejezéséhez", placeCircleMarker: "Kattintson a körjelölő elhelyezéséhez" }, actions: { finish: "Befejezés", cancel: "Mégse", removeLastVertex: "Utolsó pont eltávolítása" }, buttonTitles: { drawMarkerButton: "Jelölő rajzolása", drawPolyButton: "Poligon rajzolása", drawLineButton: "Vonal rajzolása", drawCircleButton: "Kör rajzolása", drawRectButton: "Négyzet rajzolása", editButton: "Elemek szerkesztése", dragButton: "Elemek mozgatása", cutButton: "Elemek vágása", deleteButton: "Elemek törlése", drawCircleMarkerButton: "Kör jelölő rajzolása", snappingButton: "Kapcsolja a jelöltőt másik elemhez vagy ponthoz", pinningButton: "Közös pontok összekötése", rotateButton: "Fólia elforgatása" } }, nn = { tooltips: { placeMarker: "Tryk for at placere en markør", placeMarkerTouch: "Tryk på kortet for at placere en markør", firstVertex: "Tryk for at placere det første punkt", continueLine: "Tryk for at fortsætte linjen", finishLine: "Tryk på et eksisterende punkt for at afslutte", finishPoly: "Tryk på det første punkt for at afslutte", finishRect: "Tryk for at afslutte", startCircle: "Tryk for at placere cirklens center", finishCircle: "Tryk for at afslutte cirklen", placeCircleMarker: "Tryk for at placere en cirkelmarkør" }, actions: { finish: "Afslut", cancel: "Afbryd", removeLastVertex: "Fjern sidste punkt" }, buttonTitles: { drawMarkerButton: "Placer markør", drawPolyButton: "Tegn polygon", drawLineButton: "Tegn linje", drawCircleButton: "Tegn cirkel", drawRectButton: "Tegn firkant", editButton: "Rediger", dragButton: "Træk", cutButton: "Klip", deleteButton: "Fjern", drawCircleMarkerButton: "Tegn cirkelmarkør", snappingButton: "Fastgør trukket markør til andre elementer", pinningButton: "Sammenlæg delte elementer", rotateButton: "Roter laget" } }, sn = { tooltips: { placeMarker: "Klikk for å plassere punkt", placeMarkerTouch: "Trykk på kartet for å plassere et punkt", firstVertex: "Klikk for å plassere første punkt", continueLine: "Klikk for å tegne videre", finishLine: "Klikk på et eksisterende punkt for å fullføre", finishPoly: "Klikk første punkt for å fullføre", finishRect: "Klikk for å fullføre", startCircle: "Klikk for å sette sirkel midtpunkt", finishCircle: "Klikk for å fullføre sirkel", placeCircleMarker: "Klikk for å plassere sirkel", placeText: "Klikk for å plassere tekst" }, actions: { finish: "Fullfør", cancel: "Kanseller", removeLastVertex: "Fjern forrige punkt" }, buttonTitles: { drawMarkerButton: "Tegn punkt", drawPolyButton: "Tegn flate", drawLineButton: "Tegn linje", drawCircleButton: "Tegn sirkel", drawRectButton: "Tegn rektangel", editButton: "Rediger objekter", dragButton: "Dra objekter", cutButton: "Kutt objekter", deleteButton: "Fjern objekter", drawCircleMarkerButton: "Tegn sirkel-punkt", snappingButton: "Fest dratt punkt til andre objekter og punkt", pinningButton: "Pin delte punkter sammen", rotateButton: "Rotér objekter", drawTextButton: "Tegn tekst", scaleButton: "Skalér objekter", autoTracingButton: "Automatisk sporing av linje" }, measurements: { totalLength: "Lengde", segmentLength: "Segmentlengde", area: "Område", radius: "Radius", perimeter: "Omriss", height: "Høyde", width: "Bredde", coordinates: "Posisjon", coordinatesMarker: "Posisjonsmarkør" } }, on = { tooltips: { placeMarker: "کلیک برای جانمایی نشان", placeMarkerTouch: "روی نقشه ضربه بزنید تا نشان بگذارید", firstVertex: "کلیک برای رسم اولین رأس", continueLine: "کلیک برای ادامه رسم", finishLine: "کلیک روی هر نشان موجود برای پایان", finishPoly: "کلیک روی اولین نشان برای پایان", finishRect: "کلیک برای پایان", startCircle: "کلیک برای رسم مرکز دایره", finishCircle: "کلیک برای پایان رسم دایره", placeCircleMarker: "کلیک برای رسم نشان دایره", placeText: "کلیک برای نوشتن متن" }, actions: { finish: "پایان", cancel: "لفو", removeLastVertex: "حذف آخرین رأس" }, buttonTitles: { drawMarkerButton: "درج نشان", drawPolyButton: "رسم چندضلعی", drawLineButton: "رسم خط", drawCircleButton: "رسم دایره", drawRectButton: "رسم چهارضلعی", editButton: "ویرایش لایه‌ها", dragButton: "جابجایی لایه‌ها", cutButton: "برش لایه‌ها", deleteButton: "حذف لایه‌ها", drawCircleMarkerButton: "رسم نشان دایره", snappingButton: "نشانگر را به لایه‌ها و رئوس دیگر بکشید", pinningButton: "رئوس مشترک را با هم پین کنید", rotateButton: "چرخش لایه", drawTextButton: "رسم متن", scaleButton: "مقیاس‌گذاری", autoTracingButton: "ردیاب خودکار" }, measurements: { totalLength: "طول", segmentLength: "طول بخش", area: "ناحیه", radius: "شعاع", perimeter: "محیط", height: "ارتفاع", width: "عرض", coordinates: "موقعیت", coordinatesMarker: "موقعیت نشان" } }, un = { tooltips: { placeMarker: "Натисніть, щоб нанести маркер", placeMarkerTouch: "Торкніться карти, щоб розмістити маркер", firstVertex: "Натисніть, щоб нанести першу вершину", continueLine: "Натисніть, щоб продовжити малювати", finishLine: "Натисніть будь-який існуючий маркер для завершення", finishPoly: "Виберіть перший маркер, щоб завершити", finishRect: "Натисніть, щоб завершити", startCircle: "Натисніть, щоб додати центр кола", finishCircle: "Натисніть, щоб завершити коло", placeCircleMarker: "Натисніть, щоб нанести круговий маркер" }, actions: { finish: "Завершити", cancel: "Відмінити", removeLastVertex: "Видалити попередню вершину" }, buttonTitles: { drawMarkerButton: "Малювати маркер", drawPolyButton: "Малювати полігон", drawLineButton: "Малювати криву", drawCircleButton: "Малювати коло", drawRectButton: "Малювати прямокутник", editButton: "Редагувати шари", dragButton: "Перенести шари", cutButton: "Вирізати шари", deleteButton: "Видалити шари", drawCircleMarkerButton: "Малювати круговий маркер", snappingButton: "Прив’язати перетягнутий маркер до інших шарів та вершин", pinningButton: "Зв'язати спільні вершини разом", rotateButton: "Повернути шар" } }, ln = { tooltips: { placeMarker: "İşaretçi yerleştirmek için tıklayın", placeMarkerTouch: "İşaretçi yerleştirmek için haritaya dokunun", firstVertex: "İlk tepe noktasını yerleştirmek için tıklayın", continueLine: "Çizime devam etmek için tıklayın", finishLine: "Bitirmek için mevcut herhangi bir işaretçiyi tıklayın", finishPoly: "Bitirmek için ilk işaretçiyi tıklayın", finishRect: "Bitirmek için tıklayın", startCircle: "Daire merkezine yerleştirmek için tıklayın", finishCircle: "Daireyi bitirmek için tıklayın", placeCircleMarker: "Daire işaretçisi yerleştirmek için tıklayın" }, actions: { finish: "Bitir", cancel: "İptal", removeLastVertex: "Son köşeyi kaldır" }, buttonTitles: { drawMarkerButton: "Çizim İşaretçisi", drawPolyButton: "Çokgenler çiz", drawLineButton: "Çoklu çizgi çiz", drawCircleButton: "Çember çiz", drawRectButton: "Dikdörtgen çiz", editButton: "Katmanları düzenle", dragButton: "Katmanları sürükle", cutButton: "Katmanları kes", deleteButton: "Katmanları kaldır", drawCircleMarkerButton: "Daire işaretçisi çiz", snappingButton: "Sürüklenen işaretçiyi diğer katmanlara ve köşelere yapıştır", pinningButton: "Paylaşılan köşeleri birbirine sabitle", rotateButton: "Katmanı döndür" } }, hn = { tooltips: { placeMarker: "Kliknutím vytvoříte značku", placeMarkerTouch: "Klepnutím na mapu umístíte značku", firstVertex: "Kliknutím vytvoříte první objekt", continueLine: "Kliknutím pokračujte v kreslení", finishLine: "Kliknutí na libovolnou existující značku pro dokončení", finishPoly: "Vyberte první bod pro dokončení", finishRect: "Klikněte pro dokončení", startCircle: "Kliknutím přidejte střed kruhu", finishCircle: "Нажмите, чтобы задать радиус", placeCircleMarker: "Kliknutím nastavte poloměr" }, actions: { finish: "Dokončit", cancel: "Zrušit", removeLastVertex: "Zrušit poslední akci" }, buttonTitles: { drawMarkerButton: "Přidat značku", drawPolyButton: "Nakreslit polygon", drawLineButton: "Nakreslit křivku", drawCircleButton: "Nakreslit kruh", drawRectButton: "Nakreslit obdélník", editButton: "Upravit vrstvu", dragButton: "Přeneste vrstvu", cutButton: "Vyjmout vrstvu", deleteButton: "Smazat vrstvu", drawCircleMarkerButton: "Přidat kruhovou značku", snappingButton: "Navázat tažnou značku k dalším vrstvám a vrcholům", pinningButton: "Spojit společné body dohromady", rotateButton: "Otočte vrstvu" } }, pn = { tooltips: { placeMarker: "クリックしてマーカーを配置", placeMarkerTouch: "地図をタップしてマーカーを配置", firstVertex: "クリックして最初の頂点を配置", continueLine: "クリックして描画を続ける", finishLine: "任意のマーカーをクリックして終了", finishPoly: "最初のマーカーをクリックして終了", finishRect: "クリックして終了", startCircle: "クリックして円の中心を配置", finishCircle: "クリックして円の描画を終了", placeCircleMarker: "クリックして円マーカーを配置", placeText: "クリックしてテキストを配置" }, actions: { finish: "終了", cancel: "キャンセル", removeLastVertex: "最後の頂点を削除" }, buttonTitles: { drawMarkerButton: "マーカーを描画", drawPolyButton: "ポリゴンを描画", drawLineButton: "折れ線を描画", drawCircleButton: "円を描画", drawRectButton: "矩形を描画", editButton: "レイヤーを編集", dragButton: "レイヤーをドラッグ", cutButton: "レイヤーを切り取り", deleteButton: "レイヤーを削除", drawCircleMarkerButton: "円マーカーを描画", snappingButton: "ドラッグしたマーカーを他のレイヤーや頂点にスナップする", pinningButton: "共有する頂点を同時に動かす", rotateButton: "レイヤーを回転", drawTextButton: "テキストを描画" } }, dn = { tooltips: { placeMarker: "Klikkaa asettaaksesi merkin", placeMarkerTouch: "Napauta karttaa asettaaksesi merkin", firstVertex: "Klikkaa asettaakseni ensimmäisen osuuden", continueLine: "Klikkaa jatkaaksesi piirtämistä", finishLine: "Klikkaa olemassa olevaa merkkiä lopettaaksesi", finishPoly: "Klikkaa ensimmäistä merkkiä lopettaaksesi", finishRect: "Klikkaa lopettaaksesi", startCircle: "Klikkaa asettaaksesi ympyrän keskipisteen", finishCircle: "Klikkaa lopettaaksesi ympyrän", placeCircleMarker: "Klikkaa asettaaksesi ympyrämerkin", placeText: "Klikkaa asettaaksesi tekstin" }, actions: { finish: "Valmis", cancel: "Peruuta", removeLastVertex: "Poista viimeinen osuus" }, buttonTitles: { drawMarkerButton: "Piirrä merkkejä", drawPolyButton: "Piirrä monikulmioita", drawLineButton: "Piirrä viivoja", drawCircleButton: "Piirrä ympyrä", drawRectButton: "Piirrä neliskulmioita", editButton: "Muokkaa", dragButton: "Siirrä", cutButton: "Leikkaa", deleteButton: "Poista", drawCircleMarkerButton: "Piirrä ympyrämerkki", snappingButton: "Kiinnitä siirrettävä merkki toisiin muotoihin", pinningButton: "Kiinnitä jaetut muodot yhteen", rotateButton: "Käännä", drawTextButton: "Piirrä tekstiä" } }, cn = { tooltips: { placeMarker: "마커 위치를 클릭하세요", placeMarkerTouch: "지도를 탭하여 마커를 배치하세요", firstVertex: "첫번째 꼭지점 위치을 클릭하세요", continueLine: "계속 그리려면 클릭하세요", finishLine: "끝내려면 기존 마커를 클릭하세요", finishPoly: "끝내려면 처음 마커를 클릭하세요", finishRect: "끝내려면 클릭하세요", startCircle: "원의 중심이 될 위치를 클릭하세요", finishCircle: "원을 끝내려면 클릭하세요", placeCircleMarker: "원 마커 위치를 클릭하세요", placeText: "텍스트 위치를 클릭하세요" }, actions: { finish: "끝내기", cancel: "취소", removeLastVertex: "마지막 꼭지점 제거" }, buttonTitles: { drawMarkerButton: "마커 그리기", drawPolyButton: "다각형 그리기", drawLineButton: "다각선 그리기", drawCircleButton: "원 그리기", drawRectButton: "직사각형 그리기", editButton: "레이어 편집하기", dragButton: "레이어 끌기", cutButton: "레이어 자르기", deleteButton: "레이어 제거하기", drawCircleMarkerButton: "원 마커 그리기", snappingButton: "잡아끈 마커를 다른 레이어 및 꼭지점에 들러붙게 하기", pinningButton: "공유 꼭지점을 함께 찍기", rotateButton: "레이어 회전하기", drawTextButton: "텍스트 그리기" } }, gn = { tooltips: { placeMarker: "Маркерди жайгаштыруу үчүн басыңыз", placeMarkerTouch: "Маркерди жайгаштыруу үчүн картага тийиңиз", firstVertex: "Биринчи чокуну жайгаштырууну үчүн басыңыз", continueLine: "Сүрөт тартууну улантуу үчүн басыңыз", finishLine: "Аяктоо үчүн учурдагы маркерди басыңыз", finishPoly: "Бүтүрүү үчүн биринчи маркерди басыңыз", finishRect: "Бүтүрүү үчүн басыңыз", startCircle: "Айлананын борборун жайгаштырууну үчүн басыңыз", finishCircle: "Айлананы бүтүрүү үчүн басыңыз", placeCircleMarker: "Тегерек маркерди жайгаштыруу үчүн басыңыз", placeText: "Текстти жайгаштыруу үчүн басыңыз" }, actions: { finish: "Аягы", cancel: "Жок кылуу", removeLastVertex: "Акыркы чокуну өчүрүү" }, buttonTitles: { drawMarkerButton: "Маркерди чизуу", drawPolyButton: "Полигон чизуу", drawLineButton: "Полилиния чизуу", drawCircleButton: "Дайынды чизуу", drawRectButton: "Прямоугольник чизуу", editButton: "Слоопту түзөтүү", dragButton: "Слоопту карап сүйлөү", cutButton: "Слооптун башын кесүү", deleteButton: "Слооптун өчүрүү", drawCircleMarkerButton: "Дайынды маркерди чизуу", snappingButton: "Башка слооптордун жана вертекстердин арасына чекилдөө", pinningButton: "Бөлүшкөн вертекстерди бирге тутуштуруу", rotateButton: "Слооптун өзгөртүү", drawTextButton: "Текст чизуу", scaleButton: "Слооптун өлчөмүн өзгөртүү", autoTracingButton: "Автоматтык тизмеги чизуу" }, measurements: { totalLength: "Узундук", segmentLength: "Сегмент узундугу", area: "Аймак", radius: "Радиус", perimeter: "Периметр", height: "Диаметр", width: "Кенчилик", coordinates: "Координаттар", coordinatesMarker: "Маркердин координаттары" } }, fn = Ii, We = { en: Ua, de: Va, it: Ka, id: qa, ro: Ha, ru: Ya, es: Xa, nl: Za, fr: $a, pt: fn, pt_br: Qa, pt_pt: Ii, zh: Ja, zh_tw: Wa, pl: en, sv: tn, el: rn, hu: an, da: nn, no: sn, fa: on, ua: un, tr: ln, cz: hn, ja: pn, fi: dn, ko: cn, ky: gn }, _n = { _globalEditModeEnabled: !1, enableGlobalEditMode(e) {
    let t = { ...e };
    this._globalEditModeEnabled = !0, this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()), L.PM.Utils.findLayers(this.map).forEach((i) => {
      this._isRelevantForEdit(i) && i.pm.enable(t);
    }), this.throttledReInitEdit || (this.throttledReInitEdit = L.Util.throttle(this.handleLayerAdditionInGlobalEditMode, 100, this)), this._addedLayersEdit = {}, this.map.on("layeradd", this._layerAddedEdit, this), this.map.on("layeradd", this.throttledReInitEdit, this), this._fireGlobalEditModeToggled(!0);
  }, disableGlobalEditMode() {
    this._globalEditModeEnabled = !1, L.PM.Utils.findLayers(this.map).forEach((e) => {
      e.pm.disable();
    }), this.map.off("layeradd", this._layerAddedEdit, this), this.map.off("layeradd", this.throttledReInitEdit, this), this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()), this._fireGlobalEditModeToggled(!1);
  }, globalEditEnabled() {
    return this.globalEditModeEnabled();
  }, globalEditModeEnabled() {
    return this._globalEditModeEnabled;
  }, toggleGlobalEditMode(e = this.globalOptions) {
    this.globalEditModeEnabled() ? this.disableGlobalEditMode() : this.enableGlobalEditMode(e);
  }, handleLayerAdditionInGlobalEditMode() {
    let e = this._addedLayersEdit;
    if (this._addedLayersEdit = {}, this.globalEditModeEnabled()) for (let t in e) {
      let i = e[t];
      this._isRelevantForEdit(i) && i.pm.enable({ ...this.globalOptions });
    }
  }, _layerAddedEdit({ layer: e }) {
    this._addedLayersEdit[L.stamp(e)] = e;
  }, _isRelevantForEdit(e) {
    return e.pm && !(e instanceof L.LayerGroup) && (!L.PM.optIn && !e.options.pmIgnore || L.PM.optIn && e.options.pmIgnore === !1) && !e._pmTempLayer && e.pm.options.allowEditing;
  } }, mn = _n, yn = { _globalDragModeEnabled: !1, enableGlobalDragMode() {
    let e = L.PM.Utils.findLayers(this.map);
    this._globalDragModeEnabled = !0, this._addedLayersDrag = {}, e.forEach((t) => {
      this._isRelevantForDrag(t) && t.pm.enableLayerDrag();
    }), this.throttledReInitDrag || (this.throttledReInitDrag = L.Util.throttle(this.reinitGlobalDragMode, 100, this)), this.map.on("layeradd", this._layerAddedDrag, this), this.map.on("layeradd", this.throttledReInitDrag, this), this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()), this._fireGlobalDragModeToggled(!0);
  }, disableGlobalDragMode() {
    let e = L.PM.Utils.findLayers(this.map);
    this._globalDragModeEnabled = !1, e.forEach((t) => {
      t.pm.disableLayerDrag();
    }), this.map.off("layeradd", this._layerAddedDrag, this), this.map.off("layeradd", this.throttledReInitDrag, this), this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()), this._fireGlobalDragModeToggled(!1);
  }, globalDragModeEnabled() {
    return !!this._globalDragModeEnabled;
  }, toggleGlobalDragMode() {
    this.globalDragModeEnabled() ? this.disableGlobalDragMode() : this.enableGlobalDragMode();
  }, reinitGlobalDragMode() {
    let e = this._addedLayersDrag;
    if (this._addedLayersDrag = {}, this.globalDragModeEnabled()) for (let t in e) {
      let i = e[t];
      this._isRelevantForDrag(i) && i.pm.enableLayerDrag();
    }
  }, _layerAddedDrag({ layer: e }) {
    this._addedLayersDrag[L.stamp(e)] = e;
  }, _isRelevantForDrag(e) {
    return e.pm && !(e instanceof L.LayerGroup) && (!L.PM.optIn && !e.options.pmIgnore || L.PM.optIn && e.options.pmIgnore === !1) && !e._pmTempLayer && e.pm.options.draggable;
  } }, Ln = yn, Cn = { _globalRemovalModeEnabled: !1, enableGlobalRemovalMode() {
    this._globalRemovalModeEnabled = !0, this.map.eachLayer((e) => {
      this._isRelevantForRemoval(e) && (e.pm.enabled() && e.pm.disable(), e.on("click", this.removeLayer, this));
    }), this.throttledReInitRemoval || (this.throttledReInitRemoval = L.Util.throttle(this.handleLayerAdditionInGlobalRemovalMode, 100, this)), this._addedLayersRemoval = {}, this.map.on("layeradd", this._layerAddedRemoval, this), this.map.on("layeradd", this.throttledReInitRemoval, this), this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()), this._fireGlobalRemovalModeToggled(!0);
  }, disableGlobalRemovalMode() {
    this._globalRemovalModeEnabled = !1, this.map.eachLayer((e) => {
      e.off("click", this.removeLayer, this);
    }), this.map.off("layeradd", this._layerAddedRemoval, this), this.map.off("layeradd", this.throttledReInitRemoval, this), this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()), this._fireGlobalRemovalModeToggled(!1);
  }, globalRemovalEnabled() {
    return this.globalRemovalModeEnabled();
  }, globalRemovalModeEnabled() {
    return !!this._globalRemovalModeEnabled;
  }, toggleGlobalRemovalMode() {
    this.globalRemovalModeEnabled() ? this.disableGlobalRemovalMode() : this.enableGlobalRemovalMode();
  }, removeLayer(e) {
    let t = e.target;
    this._isRelevantForRemoval(t) && !t.pm.dragging() && (t.removeFrom(this.map.pm._getContainingLayer()), t.remove(), t instanceof L.LayerGroup ? (this._fireRemoveLayerGroup(t), this._fireRemoveLayerGroup(this.map, t)) : (t.pm._fireRemove(t), t.pm._fireRemove(this.map, t)));
  }, _isRelevantForRemoval(e) {
    return e.pm && !(e instanceof L.LayerGroup) && (!L.PM.optIn && !e.options.pmIgnore || L.PM.optIn && e.options.pmIgnore === !1) && !e._pmTempLayer && e.pm.options.allowRemoval;
  }, handleLayerAdditionInGlobalRemovalMode() {
    let e = this._addedLayersRemoval;
    if (this._addedLayersRemoval = {}, this.globalRemovalModeEnabled()) for (let t in e) {
      let i = e[t];
      this._isRelevantForRemoval(i) && (i.pm.enabled() && i.pm.disable(), i.on("click", this.removeLayer, this));
    }
  }, _layerAddedRemoval({ layer: e }) {
    this._addedLayersRemoval[L.stamp(e)] = e;
  } }, bn = Cn, vn = { _globalRotateModeEnabled: !1, enableGlobalRotateMode() {
    this._globalRotateModeEnabled = !0, L.PM.Utils.findLayers(this.map).filter((e) => e instanceof L.Polyline).forEach((e) => {
      this._isRelevantForRotate(e) && e.pm.enableRotate();
    }), this.throttledReInitRotate || (this.throttledReInitRotate = L.Util.throttle(this.handleLayerAdditionInGlobalRotateMode, 100, this)), this._addedLayersRotate = {}, this.map.on("layeradd", this._layerAddedRotate, this), this.map.on("layeradd", this.throttledReInitRotate, this), this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()), this._fireGlobalRotateModeToggled();
  }, disableGlobalRotateMode() {
    this._globalRotateModeEnabled = !1, L.PM.Utils.findLayers(this.map).filter((e) => e instanceof L.Polyline).forEach((e) => {
      e.pm.disableRotate();
    }), this.map.off("layeradd", this._layerAddedRotate, this), this.map.off("layeradd", this.throttledReInitRotate, this), this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()), this._fireGlobalRotateModeToggled();
  }, globalRotateModeEnabled() {
    return !!this._globalRotateModeEnabled;
  }, toggleGlobalRotateMode() {
    this.globalRotateModeEnabled() ? this.disableGlobalRotateMode() : this.enableGlobalRotateMode();
  }, _isRelevantForRotate(e) {
    return e.pm && e instanceof L.Polyline && !(e instanceof L.LayerGroup) && (!L.PM.optIn && !e.options.pmIgnore || L.PM.optIn && e.options.pmIgnore === !1) && !e._pmTempLayer && e.pm.options.allowRotation;
  }, handleLayerAdditionInGlobalRotateMode() {
    let e = this._addedLayersRotate;
    if (this._addedLayersRotate = {}, this.globalRotateModeEnabled()) for (let t in e) {
      let i = e[t];
      this._isRelevantForRemoval(i) && i.pm.enableRotate();
    }
  }, _layerAddedRotate({ layer: e }) {
    this._addedLayersRotate[L.stamp(e)] = e;
  } }, kn = vn, Mn = K(Jt()), xn = { _fireDrawStart(e = "Draw", t = {}) {
    this.__fire(this._map, "pm:drawstart", { shape: this._shape, workingLayer: this._layer }, e, t);
  }, _fireDrawEnd(e = "Draw", t = {}) {
    this.__fire(this._map, "pm:drawend", { shape: this._shape }, e, t);
  }, _fireCreate(e, t = "Draw", i = {}) {
    this.__fire(this._map, "pm:create", { shape: this._shape, marker: e, layer: e }, t, i);
  }, _fireCenterPlaced(e = "Draw", t = {}) {
    let i = e === "Draw" ? this._layer : void 0, r = e !== "Draw" ? this._layer : void 0;
    this.__fire(this._layer, "pm:centerplaced", { shape: this._shape, workingLayer: i, layer: r, latlng: this._layer.getLatLng() }, e, t);
  }, _fireCut(e, t, i, r = "Draw", a = {}) {
    this.__fire(e, "pm:cut", { shape: this._shape, layer: t, originalLayer: i }, r, a);
  }, _fireEdit(e = this._layer, t = "Edit", i = {}) {
    this.__fire(e, "pm:edit", { layer: this._layer, shape: this.getShape() }, t, i);
  }, _fireEnable(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:enable", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireDisable(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:disable", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireUpdate(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:update", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireMarkerDragStart(e, t = void 0, i = "Edit", r = {}) {
    this.__fire(this._layer, "pm:markerdragstart", { layer: this._layer, markerEvent: e, shape: this.getShape(), indexPath: t }, i, r);
  }, _fireMarkerDrag(e, t = void 0, i = "Edit", r = {}) {
    this.__fire(this._layer, "pm:markerdrag", { layer: this._layer, markerEvent: e, shape: this.getShape(), indexPath: t }, i, r);
  }, _fireMarkerDragEnd(e, t = void 0, i = void 0, r = "Edit", a = {}) {
    this.__fire(this._layer, "pm:markerdragend", { layer: this._layer, markerEvent: e, shape: this.getShape(), indexPath: t, intersectionReset: i }, r, a);
  }, _fireDragStart(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:dragstart", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireDrag(e, t = "Edit", i = {}) {
    this.__fire(this._layer, "pm:drag", { ...e, shape: this.getShape() }, t, i);
  }, _fireDragEnd(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:dragend", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireDragEnable(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:dragenable", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireDragDisable(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:dragdisable", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireRemove(e, t = e, i = "Edit", r = {}) {
    this.__fire(e, "pm:remove", { layer: t, shape: this.getShape() }, i, r);
  }, _fireVertexAdded(e, t, i, r = "Edit", a = {}) {
    this.__fire(this._layer, "pm:vertexadded", { layer: this._layer, workingLayer: this._layer, marker: e, indexPath: t, latlng: i, shape: this.getShape() }, r, a);
  }, _fireVertexRemoved(e, t, i = "Edit", r = {}) {
    this.__fire(this._layer, "pm:vertexremoved", { layer: this._layer, marker: e, indexPath: t, shape: this.getShape() }, i, r);
  }, _fireVertexClick(e, t, i = "Edit", r = {}) {
    this.__fire(this._layer, "pm:vertexclick", { layer: this._layer, markerEvent: e, indexPath: t, shape: this.getShape() }, i, r);
  }, _fireIntersect(e, t = this._layer, i = "Edit", r = {}) {
    this.__fire(t, "pm:intersect", { layer: this._layer, intersection: e, shape: this.getShape() }, i, r);
  }, _fireLayerReset(e, t, i = "Edit", r = {}) {
    this.__fire(this._layer, "pm:layerreset", { layer: this._layer, markerEvent: e, indexPath: t, shape: this.getShape() }, i, r);
  }, _fireChange(e, t = "Edit", i = {}) {
    this.__fire(this._layer, "pm:change", { layer: this._layer, latlngs: e, shape: this.getShape() }, t, i);
  }, _fireTextChange(e, t = "Edit", i = {}) {
    this.__fire(this._layer, "pm:textchange", { layer: this._layer, text: e, shape: this.getShape() }, t, i);
  }, _fireTextFocus(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:textfocus", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireTextBlur(e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:textblur", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireSnapDrag(e, t, i = "Snapping", r = {}) {
    this.__fire(e, "pm:snapdrag", t, i, r);
  }, _fireSnap(e, t, i = "Snapping", r = {}) {
    this.__fire(e, "pm:snap", t, i, r);
  }, _fireUnsnap(e, t, i = "Snapping", r = {}) {
    this.__fire(e, "pm:unsnap", t, i, r);
  }, _fireRotationEnable(e, t, i = "Rotation", r = {}) {
    this.__fire(e, "pm:rotateenable", { layer: this._layer, helpLayer: this._rotatePoly, shape: this.getShape() }, i, r);
  }, _fireRotationDisable(e, t = "Rotation", i = {}) {
    this.__fire(e, "pm:rotatedisable", { layer: this._layer, shape: this.getShape() }, t, i);
  }, _fireRotationStart(e, t, i = "Rotation", r = {}) {
    this.__fire(e, "pm:rotatestart", { layer: this._rotationLayer, helpLayer: this._layer, startAngle: this._startAngle, originLatLngs: t }, i, r);
  }, _fireRotation(e, t, i, r = this._rotationLayer, a = "Rotation", n = {}) {
    this.__fire(e, "pm:rotate", { layer: r, helpLayer: this._layer, startAngle: this._startAngle, angle: r.pm.getAngle(), angleDiff: t, oldLatLngs: i, newLatLngs: r.getLatLngs() }, a, n);
  }, _fireRotationEnd(e, t, i, r = "Rotation", a = {}) {
    this.__fire(e, "pm:rotateend", { layer: this._rotationLayer, helpLayer: this._layer, startAngle: t, angle: this._rotationLayer.pm.getAngle(), originLatLngs: i, newLatLngs: this._rotationLayer.getLatLngs() }, r, a);
  }, _fireActionClick(e, t, i, r = "Toolbar", a = {}) {
    this.__fire(this._map, "pm:actionclick", { text: e.text, action: e, btnName: t, button: i }, r, a);
  }, _fireButtonClick(e, t, i = "Toolbar", r = {}) {
    this.__fire(this._map, "pm:buttonclick", { btnName: e, button: t }, i, r);
  }, _fireLangChange(e, t, i, r, a = "Global", n = {}) {
    this.__fire(this.map, "pm:langchange", { oldLang: e, activeLang: t, fallback: i, translations: r }, a, n);
  }, _fireGlobalDragModeToggled(e, t = "Global", i = {}) {
    this.__fire(this.map, "pm:globaldragmodetoggled", { enabled: e, map: this.map }, t, i);
  }, _fireGlobalEditModeToggled(e, t = "Global", i = {}) {
    this.__fire(this.map, "pm:globaleditmodetoggled", { enabled: e, map: this.map }, t, i);
  }, _fireGlobalRemovalModeToggled(e, t = "Global", i = {}) {
    this.__fire(this.map, "pm:globalremovalmodetoggled", { enabled: e, map: this.map }, t, i);
  }, _fireGlobalCutModeToggled(e = "Global", t = {}) {
    this.__fire(this._map, "pm:globalcutmodetoggled", { enabled: !!this._enabled, map: this._map }, e, t);
  }, _fireGlobalDrawModeToggled(e = "Global", t = {}) {
    this.__fire(this._map, "pm:globaldrawmodetoggled", { enabled: this._enabled, shape: this._shape, map: this._map }, e, t);
  }, _fireGlobalRotateModeToggled(e = "Global", t = {}) {
    this.__fire(this.map, "pm:globalrotatemodetoggled", { enabled: this.globalRotateModeEnabled(), map: this.map }, e, t);
  }, _fireRemoveLayerGroup(e, t = e, i = "Edit", r = {}) {
    this.__fire(e, "pm:remove", { layer: t, shape: void 0 }, i, r);
  }, _fireKeyeventEvent(e, t, i, r = "Global", a = {}) {
    this.__fire(this.map, "pm:keyevent", { event: e, eventType: t, focusOn: i }, r, a);
  }, __fire(e, t, i, r, a = {}) {
    i = (0, Mn.default)(i, a, { source: r }), L.PM.Utils._fireEvent(e, t, i);
  } }, kt = xn, En = () => ({ _lastEvents: { keydown: void 0, keyup: void 0, current: void 0 }, _initKeyListener(e) {
    this.map = e, L.DomEvent.on(document, "keydown keyup", this._onKeyListener, this), L.DomEvent.on(window, "blur", this._onBlur, this), e.once("unload", this._unbindKeyListenerEvents, this);
  }, _handleEscapeKey(e) {
    let t = this.map.pm;
    return !t.getGlobalOptions().exitModeOnEscape || !(t.globalDrawModeEnabled() || t.globalEditModeEnabled() || t.globalDragModeEnabled() || t.globalRemovalModeEnabled() || t.globalRotateModeEnabled() || t.globalCutModeEnabled()) ? !1 : (e.preventDefault(), t.globalDrawModeEnabled() && t.disableDraw(), t.globalEditModeEnabled() && t.disableGlobalEditMode(), t.globalDragModeEnabled() && t.disableGlobalDragMode(), t.globalRemovalModeEnabled() && t.disableGlobalRemovalMode(), t.globalRotateModeEnabled() && t.disableGlobalRotateMode(), t.globalCutModeEnabled() && t.disableGlobalCutMode(), !0);
  }, _handleEnterKey(e) {
    let t = this.map.pm;
    if (!t.getGlobalOptions().finishOnEnter) return !1;
    let i = t.Draw.getActiveShape();
    if (!i) return !1;
    let r = t.Draw[i];
    return !r || !r._finishShape || !this._canFinishShape(r, i) ? !1 : (e.preventDefault(), r._finishShape(), !0);
  }, _canFinishShape(e, t) {
    var i;
    if (["Marker", "CircleMarker", "Text"].includes(t)) return !1;
    if (t === "Rectangle") return e._startMarker !== void 0;
    if (t === "Circle") return e._centerMarker && ((i = e._layerGroup) == null ? void 0 : i.hasLayer(e._centerMarker));
    if (e._layer && e._layer.getLatLngs) {
      let r = e._layer.getLatLngs();
      if (t === "Line") return (r.flat ? r.flat() : r).length >= 2;
      if (t === "Polygon" || t === "Cut") return r.length >= 3;
    }
    return !1;
  }, _unbindKeyListenerEvents() {
    L.DomEvent.off(document, "keydown keyup", this._onKeyListener, this), L.DomEvent.off(window, "blur", this._onBlur, this);
  }, _onKeyListener(e) {
    let t = "document";
    this.map.getContainer().contains(e.target) && (t = "map");
    let i = { event: e, eventType: e.type, focusOn: t };
    this._lastEvents[e.type] = i, this._lastEvents.current = i, this.map.pm._fireKeyeventEvent(e, e.type, t), e.type === "keydown" && (e.key === "Escape" && this._handleEscapeKey(e), e.key === "Enter" && this._handleEnterKey(e));
  }, _onBlur(e) {
    e.altKey = !1;
    let t = { event: e, eventType: e.type, focusOn: "document" };
    this._lastEvents[e.type] = t, this._lastEvents.current = t;
  }, getLastKeyEvent(e = "current") {
    return this._lastEvents[e];
  }, isShiftKeyPressed() {
    var e;
    return (e = this._lastEvents.current) == null ? void 0 : e.event.shiftKey;
  }, isAltKeyPressed() {
    var e;
    return (e = this._lastEvents.current) == null ? void 0 : e.event.altKey;
  }, isCtrlKeyPressed() {
    var e;
    return (e = this._lastEvents.current) == null ? void 0 : e.event.ctrlKey;
  }, isMetaKeyPressed() {
    var e;
    return (e = this._lastEvents.current) == null ? void 0 : e.event.metaKey;
  }, getPressedKey() {
    var e;
    return (e = this._lastEvents.current) == null ? void 0 : e.event.key;
  } }), Bn = En, Gi = K(vt());
  function V(e) {
    let t = L.PM.activeLang;
    return (0, Gi.default)(We[t], e) || (0, Gi.default)(We.en, e) || e;
  }
  function wn() {
    return window.matchMedia ? !window.matchMedia("(pointer: coarse)").matches : !0;
  }
  function Qt(e) {
    for (let t = 0; t < e.length; t += 1) {
      let i = e[t];
      if (Array.isArray(i)) {
        if (Qt(i)) return !0;
      } else if (i != null && i !== "") return !0;
    }
    return !1;
  }
  function Mt(e) {
    return e.reduce((t, i) => {
      if (i.length !== 0) {
        let r = Array.isArray(i) ? Mt(i) : i;
        Array.isArray(r) ? r.length !== 0 && t.push(r) : t.push(r);
      }
      return t;
    }, []);
  }
  function Dn(e, t, i) {
    let r = { a: L.CRS.Earth.R, b: 63567523142e-4, f: 0.0033528106647474805 }, { a, b: n, f: s } = r, o = e.lng, u = e.lat, l = i, f = Math.PI, d = t * f / 180, b = Math.sin(d), v = Math.cos(d), D = (1 - s) * Math.tan(u * f / 180), P = 1 / Math.sqrt(1 + D * D), O = D * P, I = Math.atan2(D, v), g = P * b, M = 1 - g * g, w = M * (a * a - n * n) / (n * n), R = 1 + w / 16384 * (4096 + w * (-768 + w * (320 - 175 * w))), T = w / 1024 * (256 + w * (-128 + w * (74 - 47 * w))), F = l / (n * R), h = 2 * Math.PI, p, c, y;
    for (; Math.abs(F - h) > 1e-12; ) {
      p = Math.cos(2 * I + F), c = Math.sin(F), y = Math.cos(F);
      let S = T * c * (p + T / 4 * (y * (-1 + 2 * p * p) - T / 6 * p * (-3 + 4 * c * c) * (-3 + 4 * p * p)));
      h = F, F = l / (n * R) + S;
    }
    let m = O * c - P * y * v, _ = Math.atan2(O * y + P * c * v, (1 - s) * Math.sqrt(g * g + m * m)), x = Math.atan2(c * b, P * y - O * c * v), C = s / 16 * M * (4 + s * (4 - 3 * M)), k = x - (1 - C) * s * g * (F + C * c * (p + C * y * (-1 + 2 * p * p))), B = o + k * 180 / f, E = _ * 180 / f;
    return L.latLng(B, E);
  }
  function zi(e, t, i, r, a = !0) {
    let n, s, o, u = [];
    for (let l = 0; l < i; l += 1) {
      if (a) n = l * 360 / i + r, s = Dn(e, n, t), o = L.latLng(s.lng, s.lat);
      else {
        let f = e.lat + Math.cos(2 * l * Math.PI / i) * t, d = e.lng + Math.sin(2 * l * Math.PI / i) * t;
        o = L.latLng(f, d);
      }
      u.push(o);
    }
    return u;
  }
  function An(e, t, i) {
    t = (t + 360) % 360;
    let r = Math.PI / 180, a = 180 / Math.PI, { R: n } = L.CRS.Earth, s = e.lng * r, o = e.lat * r, u = t * r, l = Math.sin(o), f = Math.cos(o), d = Math.cos(i / n), b = Math.sin(i / n), v = Math.asin(l * d + f * b * Math.cos(u)), D = s + Math.atan2(Math.sin(u) * b * f, d - l * Math.sin(v));
    D *= a;
    let P = D - 360, O = D < -180 ? D + 360 : D;
    return D = D > 180 ? P : O, L.latLng([v * a, D]);
  }
  function ei(e, t, i) {
    let r = e.latLngToContainerPoint(t), a = e.latLngToContainerPoint(i), n = Math.atan2(a.y - r.y, a.x - r.x) * 180 / Math.PI + 90;
    return n += n < 0 ? 360 : 0, n;
  }
  function xt(e, t, i, r) {
    let a = ei(e, t, i);
    return An(t, a, r);
  }
  function Pn(e, t, i = "asc") {
    if (!t || Object.keys(t).length === 0) return (u, l) => u - l;
    let r = Object.keys(t), a, n = r.length - 1, s = {};
    for (; n >= 0; ) a = r[n], s[a.toLowerCase()] = t[a], n -= 1;
    function o(u) {
      if (u instanceof L.Marker) return "Marker";
      if (u instanceof L.Circle) return "Circle";
      if (u instanceof L.CircleMarker) return "CircleMarker";
      if (u instanceof L.Rectangle) return "Rectangle";
      if (u instanceof L.Polygon) return "Polygon";
      if (u instanceof L.Polyline) return "Line";
    }
    return (u, l) => {
      let f, d;
      if (f = o(u.layer).toLowerCase(), d = o(l.layer).toLowerCase(), !f || !d) return 0;
      let b = f in s ? s[f] : Number.MAX_SAFE_INTEGER, v = d in s ? s[d] : Number.MAX_SAFE_INTEGER, D = 0;
      return b < v ? D = -1 : b > v && (D = 1), i === "desc" ? D * -1 : D;
    };
  }
  function Ne(e, t = e.getLatLngs()) {
    return e instanceof L.Polygon ? L.polygon(t).getLatLngs() : L.polyline(t).getLatLngs();
  }
  function ji(e, t) {
    var i, r, a, n;
    if ((r = (i = t.options.crs) == null ? void 0 : i.projection) != null && r.MAX_LATITUDE) {
      let s = (n = (a = t.options.crs) == null ? void 0 : a.projection) == null ? void 0 : n.MAX_LATITUDE;
      e.lat = Math.max(Math.min(s, e.lat), -s);
    }
    return e;
  }
  function Qe(e) {
    return e.options.renderer || e._map && (e._map._getPaneRenderer(e.options.pane) || e._map.options.renderer || e._map._renderer) || e._renderer;
  }
  function Sn(e, t) {
    if (e = e.trim().toLowerCase(), t[e]) return e;
    let i = e.replace(/[-_\s]/g, "_").match(/^([a-z]{2,3})(?:_([a-z]{2,3}))?$/);
    if (i) {
      let r = [];
      i[2] && r.push(`${i[1]}_${i[2]}`), r.push(i[1]);
      for (let a of r) if (t[a]) return a;
    }
    return e;
  }
  var Tn = L.Class.extend({ includes: [mn, Ln, bn, kn, kt], initialize(e) {
    this.map = e, this.Draw = new L.PM.Draw(e), this.Toolbar = new L.PM.Toolbar(e), this.Keyboard = Bn(), this.globalOptions = { snappable: !0, layerGroup: void 0, snappingOrder: ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"], panes: { vertexPane: "markerPane", layerPane: "overlayPane", markerPane: "markerPane" }, draggable: !0, exitModeOnEscape: !1, finishOnEnter: !1 }, this.Keyboard._initKeyListener(e);
  }, setLang(e = "en", t, i = "en") {
    e = Sn(e, We);
    let r = L.PM.activeLang;
    t && (We[e] = (0, Oi.default)(We[i], t)), L.PM.activeLang = e, this.map.pm.Toolbar.reinit(), this._fireLangChange(r, e, i, We[e]);
  }, addControls(e) {
    this.Toolbar.addControls(e);
  }, removeControls() {
    this.Toolbar.removeControls();
  }, toggleControls() {
    this.Toolbar.toggleControls();
  }, controlsVisible() {
    return this.Toolbar.isVisible;
  }, enableDraw(e = "Polygon", t) {
    e === "Poly" && (e = "Polygon"), this.Draw.enable(e, t);
  }, disableDraw(e = "Polygon") {
    e === "Poly" && (e = "Polygon"), this.Draw.disable(e);
  }, setPathOptions(e, t = {}) {
    let i = t.ignoreShapes || [], r = t.merge || !1;
    this.map.pm.Draw.shapes.forEach((a) => {
      i.indexOf(a) === -1 && this.map.pm.Draw[a].setPathOptions(e, r);
    });
  }, getGlobalOptions() {
    return this.globalOptions;
  }, setGlobalOptions(e) {
    let t = (0, Oi.default)(this.globalOptions, e);
    t.editable && (t.resizeableCircleMarker = t.editable, delete t.editable);
    let i = !1;
    this.map.pm.Draw.CircleMarker.enabled() && !!this.map.pm.Draw.CircleMarker.options.resizeableCircleMarker != !!t.resizeableCircleMarker && (this.map.pm.Draw.CircleMarker.disable(), i = !0);
    let r = !1;
    this.map.pm.Draw.Circle.enabled() && !!this.map.pm.Draw.Circle.options.resizeableCircle != !!t.resizeableCircle && (this.map.pm.Draw.Circle.disable(), r = !0), this.map.pm.Draw.shapes.forEach((a) => {
      this.map.pm.Draw[a].setOptions(t);
    }), i && this.map.pm.Draw.CircleMarker.enable(), r && this.map.pm.Draw.Circle.enable(), L.PM.Utils.findLayers(this.map).forEach((a) => {
      a.pm.setOptions(t);
    }), this.map.fire("pm:globaloptionschanged"), this.globalOptions = t, this.applyGlobalOptions();
  }, applyGlobalOptions() {
    L.PM.Utils.findLayers(this.map).forEach((e) => {
      e.pm.enabled() && e.pm.applyOptions();
    });
  }, globalDrawModeEnabled() {
    return !!this.Draw.getActiveShape();
  }, globalCutModeEnabled() {
    return !!this.Draw.Cut.enabled();
  }, enableGlobalCutMode(e) {
    return this.Draw.Cut.enable(e);
  }, toggleGlobalCutMode(e) {
    return this.Draw.Cut.toggle(e);
  }, disableGlobalCutMode() {
    return this.Draw.Cut.disable();
  }, getGeomanLayers(e = !1) {
    let t = L.PM.Utils.findLayers(this.map);
    if (!e) return t;
    let i = L.featureGroup();
    return i._pmTempLayer = !0, t.forEach((r) => {
      i.addLayer(r);
    }), i;
  }, getGeomanDrawLayers(e = !1) {
    let t = L.PM.Utils.findLayers(this.map).filter((r) => r._drawnByGeoman === !0);
    if (!e) return t;
    let i = L.featureGroup();
    return i._pmTempLayer = !0, t.forEach((r) => {
      i.addLayer(r);
    }), i;
  }, _getContainingLayer() {
    return this.globalOptions.layerGroup && this.globalOptions.layerGroup instanceof L.LayerGroup ? this.globalOptions.layerGroup : this.map;
  }, _isCRSSimple() {
    return this.map.options.crs === L.CRS.Simple;
  }, _touchEventCounter: 0, _addTouchEvents(e) {
    this._touchEventCounter === 0 && (L.DomEvent.on(e, "touchmove", this._canvasTouchMove, this), L.DomEvent.on(e, "touchstart touchend touchcancel", this._canvasTouchClick, this)), this._touchEventCounter += 1;
  }, _removeTouchEvents(e) {
    this._touchEventCounter === 1 && (L.DomEvent.off(e, "touchmove", this._canvasTouchMove, this), L.DomEvent.off(e, "touchstart touchend touchcancel", this._canvasTouchClick, this)), this._touchEventCounter = this._touchEventCounter <= 1 ? 0 : this._touchEventCounter - 1;
  }, _canvasTouchMove(e) {
    Qe(this.map)._onMouseMove(this._createMouseEvent("mousemove", e));
  }, _canvasTouchClick(e) {
    let t = "";
    e.type === "touchstart" || e.type === "pointerdown" ? t = "mousedown" : (e.type === "touchend" || e.type === "pointerup" || e.type === "touchcancel" || e.type === "pointercancel") && (t = "mouseup"), t && Qe(this.map)._onClick(this._createMouseEvent(t, e));
  }, _createMouseEvent(e, t) {
    let i, r = t.touches[0] || t.changedTouches[0];
    try {
      i = new MouseEvent(e, { bubbles: t.bubbles, cancelable: t.cancelable, view: t.view, detail: r.detail, screenX: r.screenX, screenY: r.screenY, clientX: r.clientX, clientY: r.clientY, ctrlKey: t.ctrlKey, altKey: t.altKey, shiftKey: t.shiftKey, metaKey: t.metaKey, button: t.button, relatedTarget: t.relatedTarget });
    } catch {
      i = document.createEvent("MouseEvents"), i.initMouseEvent(e, t.bubbles, t.cancelable, t.view, r.detail, r.screenX, r.screenY, r.clientX, r.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, t.button, t.relatedTarget);
    }
    return i;
  } }), Fn = Tn, Rn = L.Control.extend({ includes: [kt], options: { position: "topleft", disableByOtherButtons: !0 }, initialize(e) {
    this._button = L.Util.extend({}, this.options, e);
  }, onAdd(e) {
    return this._map = e, this._map.pm.Toolbar.options.oneBlock ? this._container = this._map.pm.Toolbar._createContainer(this.options.position) : this._button.tool === "edit" ? this._container = this._map.pm.Toolbar.editContainer : this._button.tool === "options" ? this._container = this._map.pm.Toolbar.optionsContainer : this._button.tool === "custom" ? this._container = this._map.pm.Toolbar.customContainer : this._container = this._map.pm.Toolbar.drawContainer, this._renderButton(), this._container;
  }, _renderButton() {
    let e = this.buttonsDomNode;
    this.buttonsDomNode = this._makeButton(this._button), e ? e.replaceWith(this.buttonsDomNode) : this._container.appendChild(this.buttonsDomNode);
  }, onRemove() {
    return this.buttonsDomNode.remove(), this._container;
  }, getText() {
    return this._button.text;
  }, getIconUrl() {
    return this._button.iconUrl;
  }, destroy() {
    this._button = {}, this._update();
  }, toggle(e) {
    return typeof e == "boolean" ? this._button.toggleStatus = e : this._button.toggleStatus = !this._button.toggleStatus, this._applyStyleClasses(), this._updateActiveAction(this._button), this._button.toggleStatus;
  }, toggled() {
    return this._button.toggleStatus;
  }, onCreate() {
    this.toggle(!1);
  }, disable() {
    this.toggle(!1), this._button.disabled = !0, this._updateDisabled();
  }, enable() {
    this._button.disabled = !1, this._updateDisabled(), this._updateActiveAction(this._button);
  }, _triggerClick(e) {
    e && e.preventDefault(), !this._button.disabled && (this._button.onClick(e, { button: this, event: e }), this._clicked(e), this._button.afterClick(e, { button: this, event: e }));
  }, _makeButton(e) {
    let t = this.options.position.indexOf("right") > -1 ? "pos-right" : "", i = L.DomUtil.create("div", `button-container  ${t}`, this._container);
    e.title && i.setAttribute("title", e.title);
    let r = L.DomUtil.create("a", "leaflet-buttons-control-button", i);
    r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), r.href = "#";
    let a = L.DomUtil.create("div", `leaflet-pm-actions-container ${t}`, i), n = e.actions, s = { cancel: { text: V("actions.cancel"), title: V("actions.cancel"), onClick() {
      this._triggerClick();
    } }, finishMode: { text: V("actions.finish"), title: V("actions.finish"), onClick() {
      this._triggerClick();
    } }, removeLastVertex: { text: V("actions.removeLastVertex"), title: V("actions.removeLastVertex"), onClick() {
      this._map.pm.Draw[e.jsClass]._removeLastVertex();
    } }, finish: { text: V("actions.finish"), title: V("actions.finish"), onClick(u) {
      this._map.pm.Draw[e.jsClass]._finishShape(u);
    } } };
    e._preparedActions = n.map((u) => {
      let l = typeof u == "string" ? u : u.name, f;
      if (s[l]) f = s[l];
      else if (u.text) f = u;
      else return f;
      let d = L.DomUtil.create("a", `leaflet-pm-action ${t} action-${l}`, a);
      if (d.setAttribute("role", "button"), d.setAttribute("tabindex", "0"), d.href = "#", f.title && (d.title = f.title), d.innerHTML = f.text, L.DomEvent.disableClickPropagation(d), L.DomEvent.on(d, "click", L.DomEvent.stop), f._node = d, !e.disabled && f.onClick) {
        let b = (v) => {
          v.preventDefault();
          let D = "", { buttons: P } = this._map.pm.Toolbar;
          for (let O in P) if (P[O]._button === e) {
            D = O;
            break;
          }
          this._fireActionClick(f, D, e);
        };
        L.DomEvent.addListener(d, "click", b, this), L.DomEvent.addListener(d, "click", f.onClick, this), L.DomEvent.addListener(d, "click", () => this._updateActiveAction(e));
      }
      return f;
    }), this._updateActiveAction(e), e.toggleStatus && L.DomUtil.addClass(i, "active");
    let o = L.DomUtil.create("div", "control-icon", r);
    return e.iconUrl && o.setAttribute("src", e.iconUrl), e.className && L.DomUtil.addClass(o, e.className), L.DomEvent.disableClickPropagation(r), L.DomEvent.on(r, "click", L.DomEvent.stop), e.disabled || (L.DomEvent.addListener(r, "click", this._onBtnClick, this), L.DomEvent.addListener(r, "click", this._triggerClick, this)), e.disabled && (L.DomUtil.addClass(r, "pm-disabled"), r.setAttribute("aria-disabled", "true")), i;
  }, _applyStyleClasses() {
    this._container && (!this._button.toggleStatus || this._button.cssToggle === !1 ? (L.DomUtil.removeClass(this.buttonsDomNode, "active"), L.DomUtil.removeClass(this._container, "activeChild")) : (L.DomUtil.addClass(this.buttonsDomNode, "active"), L.DomUtil.addClass(this._container, "activeChild")));
  }, _onBtnClick() {
    if (this._button.disabled) return;
    this._button.disableOtherButtons && this._map.pm.Toolbar.triggerClickOnToggledButtons(this);
    let e = "", { buttons: t } = this._map.pm.Toolbar;
    for (let i in t) if (t[i]._button === this._button) {
      e = i;
      break;
    }
    this._fireButtonClick(e, this._button);
  }, _clicked() {
    this._button.doToggle && this.toggle();
  }, _updateDisabled() {
    if (!this._container) return;
    let e = "pm-disabled", t = this.buttonsDomNode.children[0];
    this._button.disabled ? (L.DomUtil.addClass(t, e), t.setAttribute("aria-disabled", "true")) : (L.DomUtil.removeClass(t, e), t.setAttribute("aria-disabled", "false"));
  }, _updateActiveAction(e) {
    var t;
    (t = e._preparedActions) == null || t.forEach((i) => {
      i != null && i._node && (i.isActive && i.isActive.call(this) ? L.DomUtil.addClass(i._node, "active-action") : L.DomUtil.removeClass(i._node, "active-action"));
    });
  } }), On = Rn;
  L.Control.PMButton = On;
  var In = L.Class.extend({ options: { drawMarker: !0, drawRectangle: !0, drawPolyline: !0, drawPolygon: !0, drawCircle: !0, drawCircleMarker: !0, drawText: !0, editMode: !0, dragMode: !0, cutPolygon: !0, removalMode: !0, rotateMode: !0, snappingOption: !0, drawControls: !0, editControls: !0, optionsControls: !0, customControls: !0, oneBlock: !1, position: "topleft", positions: { draw: "", edit: "", options: "", custom: "" } }, customButtons: [], initialize(e) {
    this.customButtons = [], this.options.positions = { draw: "", edit: "", options: "", custom: "" }, this.init(e);
  }, reinit() {
    let e = this.isVisible;
    this.removeControls(), this._defineButtons(), e && this.addControls();
  }, init(e) {
    this.map = e, this.buttons = {}, this.isVisible = !1, this.drawContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"), this.editContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"), this.optionsContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control"), this.customContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control"), this._defineButtons();
  }, _createContainer(e) {
    let t = `${e}Container`;
    return this[t] || (this[t] = L.DomUtil.create("div", `leaflet-pm-toolbar leaflet-pm-${e} leaflet-bar leaflet-control`)), this[t];
  }, getButtons() {
    return this.buttons;
  }, addControls(e = this.options) {
    typeof e.editPolygon < "u" && (e.editMode = e.editPolygon), typeof e.deleteLayer < "u" && (e.removalMode = e.deleteLayer), L.Util.setOptions(this, e), this.applyIconStyle(), this.isVisible = !0, this._showHideButtons();
  }, applyIconStyle() {
    let e = this.getButtons(), t = { geomanIcons: { drawMarker: "control-icon leaflet-pm-icon-marker", drawPolyline: "control-icon leaflet-pm-icon-polyline", drawRectangle: "control-icon leaflet-pm-icon-rectangle", drawPolygon: "control-icon leaflet-pm-icon-polygon", drawCircle: "control-icon leaflet-pm-icon-circle", drawCircleMarker: "control-icon leaflet-pm-icon-circle-marker", editMode: "control-icon leaflet-pm-icon-edit", dragMode: "control-icon leaflet-pm-icon-drag", cutPolygon: "control-icon leaflet-pm-icon-cut", removalMode: "control-icon leaflet-pm-icon-delete", drawText: "control-icon leaflet-pm-icon-text" } };
    for (let i in e) {
      let r = e[i];
      L.Util.setOptions(r, { className: t.geomanIcons[i] });
    }
  }, removeControls() {
    let e = this.getButtons();
    for (let t in e) e[t].remove();
    this.isVisible = !1;
  }, deleteControl(e) {
    let t = this._btnNameMapping(e);
    this.buttons[t] && (this.buttons[t].remove(), delete this.buttons[t]);
  }, toggleControls(e = this.options) {
    this.isVisible ? this.removeControls() : this.addControls(e);
  }, _addButton(e, t) {
    return this.buttons[e] = t, this.options[e] = !!this.options[e] || !1, this.buttons[e];
  }, triggerClickOnToggledButtons(e) {
    for (let t in this.buttons) {
      let i = this.buttons[t];
      i._button.disableByOtherButtons && i !== e && i.toggled() && i._triggerClick();
    }
  }, toggleButton(e, t, i = !0) {
    e === "editPolygon" && (e = "editMode"), e === "deleteLayer" && (e = "removalMode");
    let r = e;
    return i && this.triggerClickOnToggledButtons(this.buttons[r]), this.buttons[r] ? this.buttons[r].toggle(t) : !1;
  }, _defineButtons() {
    let e = { className: "control-icon leaflet-pm-icon-marker", title: V("buttonTitles.drawMarkerButton"), jsClass: "Marker", onClick: () => {
    }, afterClick: (b, v) => {
      this.map.pm.Draw[v.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] }, t = { title: V("buttonTitles.drawPolyButton"), className: "control-icon leaflet-pm-icon-polygon", jsClass: "Polygon", onClick: () => {
    }, afterClick: (b, v) => {
      this.map.pm.Draw[v.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["finish", "removeLastVertex", "cancel"] }, i = { className: "control-icon leaflet-pm-icon-polyline", title: V("buttonTitles.drawLineButton"), jsClass: "Line", onClick: () => {
    }, afterClick: (b, v) => {
      this.map.pm.Draw[v.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["finish", "removeLastVertex", "cancel"] }, r = { title: V("buttonTitles.drawCircleButton"), className: "control-icon leaflet-pm-icon-circle", jsClass: "Circle", onClick: () => {
    }, afterClick: (b, v) => {
      this.map.pm.Draw[v.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] }, a = { title: V("buttonTitles.drawCircleMarkerButton"), className: "control-icon leaflet-pm-icon-circle-marker", jsClass: "CircleMarker", onClick: () => {
    }, afterClick: (b, v) => {
      this.map.pm.Draw[v.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] }, n = { title: V("buttonTitles.drawRectButton"), className: "control-icon leaflet-pm-icon-rectangle", jsClass: "Rectangle", onClick: () => {
    }, afterClick: (b, v) => {
      this.map.pm.Draw[v.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] }, s = { title: V("buttonTitles.editButton"), className: "control-icon leaflet-pm-icon-edit", onClick: () => {
    }, afterClick: () => {
      this.map.pm.toggleGlobalEditMode();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finishMode"] }, o = { title: V("buttonTitles.dragButton"), className: "control-icon leaflet-pm-icon-drag", onClick: () => {
    }, afterClick: () => {
      this.map.pm.toggleGlobalDragMode();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finishMode"] }, u = { title: V("buttonTitles.cutButton"), className: "control-icon leaflet-pm-icon-cut", jsClass: "Cut", onClick: () => {
    }, afterClick: (b, v) => {
      this.map.pm.Draw[v.button._button.jsClass].toggle({ snappable: !0, cursorMarker: !0, allowSelfIntersection: !1 });
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finish", "removeLastVertex", "cancel"] }, l = { title: V("buttonTitles.deleteButton"), className: "control-icon leaflet-pm-icon-delete", onClick: () => {
    }, afterClick: () => {
      this.map.pm.toggleGlobalRemovalMode();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finishMode"] }, f = { title: V("buttonTitles.rotateButton"), className: "control-icon leaflet-pm-icon-rotate", onClick: () => {
    }, afterClick: () => {
      this.map.pm.toggleGlobalRotateMode();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finishMode"] }, d = { className: "control-icon leaflet-pm-icon-text", title: V("buttonTitles.drawTextButton"), jsClass: "Text", onClick: () => {
    }, afterClick: (b, v) => {
      this.map.pm.Draw[v.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] };
    this._addButton("drawMarker", new L.Control.PMButton(e)), this._addButton("drawPolyline", new L.Control.PMButton(i)), this._addButton("drawRectangle", new L.Control.PMButton(n)), this._addButton("drawPolygon", new L.Control.PMButton(t)), this._addButton("drawCircle", new L.Control.PMButton(r)), this._addButton("drawCircleMarker", new L.Control.PMButton(a)), this._addButton("drawText", new L.Control.PMButton(d)), this._addButton("editMode", new L.Control.PMButton(s)), this._addButton("dragMode", new L.Control.PMButton(o)), this._addButton("cutPolygon", new L.Control.PMButton(u)), this._addButton("removalMode", new L.Control.PMButton(l)), this._addButton("rotateMode", new L.Control.PMButton(f));
  }, _showHideButtons() {
    if (!this.isVisible) return;
    this.removeControls(), this.isVisible = !0;
    let e = this.getButtons(), t = [];
    this.options.drawControls === !1 && (t = t.concat(Object.keys(e).filter((i) => !e[i]._button.tool))), this.options.editControls === !1 && (t = t.concat(Object.keys(e).filter((i) => e[i]._button.tool === "edit"))), this.options.optionsControls === !1 && (t = t.concat(Object.keys(e).filter((i) => e[i]._button.tool === "options"))), this.options.customControls === !1 && (t = t.concat(Object.keys(e).filter((i) => e[i]._button.tool === "custom")));
    for (let i in e) if (this.options[i] && t.indexOf(i) === -1) {
      let r = e[i]._button.tool;
      r || (r = "draw"), e[i].setPosition(this._getBtnPosition(r)), e[i].addTo(this.map);
    }
  }, _getBtnPosition(e) {
    return this.options.positions && this.options.positions[e] ? this.options.positions[e] : this.options.position;
  }, setBlockPosition(e, t) {
    this.options.positions[e] = t, this._showHideButtons(), this.changeControlOrder();
  }, getBlockPositions() {
    return this.options.positions;
  }, copyDrawControl(e, t) {
    if (t) typeof t != "object" && (t = { name: t });
    else throw new TypeError("Button has no name");
    let i = this._btnNameMapping(e);
    if (!t.name) throw new TypeError("Button has no name");
    if (this.buttons[t.name]) throw new TypeError("Button with this name already exists");
    let r = this.map.pm.Draw.createNewDrawInstance(t.name, i);
    t = { ...this.buttons[i]._button, ...t };
    let a = this.createCustomControl(t);
    return { drawInstance: r, control: a };
  }, createCustomControl(e) {
    if (!e.name) throw new TypeError("Button has no name");
    if (this.buttons[e.name]) throw new TypeError("Button with this name already exists");
    e.onClick || (e.onClick = () => {
    }), e.afterClick || (e.afterClick = () => {
    }), e.toggle !== !1 && (e.toggle = !0), e.block && (e.block = e.block.toLowerCase()), (!e.block || e.block === "draw") && (e.block = ""), e.className ? e.className.indexOf("control-icon") === -1 && (e.className = `control-icon ${e.className}`) : e.className = "control-icon";
    let t = { tool: e.block, className: e.className, title: e.title || "", jsClass: e.name, onClick: e.onClick, afterClick: e.afterClick, doToggle: e.toggle, toggleStatus: !1, disableOtherButtons: e.disableOtherButtons ?? !0, disableByOtherButtons: e.disableByOtherButtons ?? !0, cssToggle: e.toggle, position: this.options.position, actions: e.actions || [], disabled: !!e.disabled };
    this.options[e.name] !== !1 && (this.options[e.name] = !0);
    let i = this._addButton(e.name, new L.Control.PMButton(t));
    return this.changeControlOrder(), i;
  }, controlExists(e) {
    return !!this.getButton(e);
  }, getButton(e) {
    return this.getButtons()[e];
  }, getButtonsInBlock(e) {
    let t = {};
    if (e) for (let i in this.getButtons()) {
      let r = this.getButtons()[i];
      (r._button.tool === e || e === "draw" && !r._button.tool) && (t[i] = r);
    }
    return t;
  }, changeControlOrder(e = []) {
    let t = this._shapeMapping(), i = [];
    e.forEach((n) => {
      t[n] ? i.push(t[n]) : i.push(n);
    });
    let r = this.getButtons(), a = {};
    i.forEach((n) => {
      r[n] && (a[n] = r[n]);
    }), Object.keys(r).filter((n) => !r[n]._button.tool || r[n]._button.tool === "draw").forEach((n) => {
      i.indexOf(n) === -1 && (a[n] = r[n]);
    }), Object.keys(r).filter((n) => r[n]._button.tool === "edit").forEach((n) => {
      i.indexOf(n) === -1 && (a[n] = r[n]);
    }), Object.keys(r).filter((n) => r[n]._button.tool === "options").forEach((n) => {
      i.indexOf(n) === -1 && (a[n] = r[n]);
    }), Object.keys(r).filter((n) => r[n]._button.tool === "custom").forEach((n) => {
      i.indexOf(n) === -1 && (a[n] = r[n]);
    }), Object.keys(r).forEach((n) => {
      i.indexOf(n) === -1 && (a[n] = r[n]);
    }), this.map.pm.Toolbar.buttons = a, this._showHideButtons();
  }, getControlOrder() {
    let e = this.getButtons(), t = [];
    for (let i in e) t.push(i);
    return t;
  }, changeActionsOfControl(e, t) {
    let i = this._btnNameMapping(e);
    if (!i) throw new TypeError("No name passed");
    if (!t) throw new TypeError("No actions passed");
    if (!this.buttons[i]) throw new TypeError("Button with this name not exists");
    this.buttons[i]._button.actions = t, this.changeControlOrder();
  }, setButtonDisabled(e, t) {
    let i = this._btnNameMapping(e);
    t ? this.buttons[i].disable() : this.buttons[i].enable();
  }, _shapeMapping() {
    return { Marker: "drawMarker", Circle: "drawCircle", Polygon: "drawPolygon", Rectangle: "drawRectangle", Polyline: "drawPolyline", Line: "drawPolyline", CircleMarker: "drawCircleMarker", Edit: "editMode", Drag: "dragMode", Cut: "cutPolygon", Removal: "removalMode", Rotate: "rotateMode", Text: "drawText" };
  }, _btnNameMapping(e) {
    let t = this._shapeMapping();
    return t[e] ? t[e] : e;
  } }), Gn = In, zn = K(Jt()), jn = { _initSnappableMarkers() {
    this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, this._assignEvents(this._markers), this._layer.off("pm:dragstart", this._unsnap, this), this._layer.on("pm:dragstart", this._unsnap, this);
  }, _disableSnapping() {
    this._layer.off("pm:dragstart", this._unsnap, this);
  }, _assignEvents(e) {
    e.forEach((t) => {
      if (Array.isArray(t)) {
        this._assignEvents(t);
        return;
      }
      t.off("drag", this._handleSnapping, this), t.on("drag", this._handleSnapping, this), t.off("dragend", this._cleanupSnapping, this), t.on("dragend", this._cleanupSnapping, this);
    });
  }, _cleanupSnapping(e) {
    if (e) {
      let t = e.target;
      t._snapped = !1;
    }
    delete this._snapList, this.throttledList && (this._map.off("layeradd", this.throttledList, this), this.throttledList = void 0), this._map.off("layerremove", this._handleSnapLayerRemoval, this), this.debugIndicatorLines && this.debugIndicatorLines.forEach((t) => {
      t.remove();
    });
  }, _handleThrottleSnapping() {
    this.throttledList && this._createSnapList();
  }, _handleSnapping(e, t = !1) {
    var l, f, d;
    let i = e.target;
    if (i._snapped = !1, this.throttledList || (this.throttledList = L.Util.throttle(this._handleThrottleSnapping, 100, this)), ((l = e == null ? void 0 : e.originalEvent) == null ? void 0 : l.altKey) || ((d = (f = this._map) == null ? void 0 : f.pm) == null ? void 0 : d.Keyboard.isAltKeyPressed())) return !1;
    let r;
    if (t) {
      if (!this._otherSnapLayers || this._otherSnapLayers.length === 0) return !1;
      r = this._otherSnapLayers;
    } else this._snapList === void 0 && (this._createSnapList(), this._map.off("layeradd", this.throttledList, this), this._map.on("layeradd", this.throttledList, this)), r = this._snapList;
    if (r.length <= 0) return !1;
    let a = this._calcClosestLayer(i.getLatLng(), r);
    if (Object.keys(a).length === 0) return !1;
    let n = a.layer instanceof L.Marker || a.layer instanceof L.CircleMarker || !this.options.snapSegment, s;
    n ? s = a.latlng : s = this._checkPrioritiySnapping(a);
    let o = this.options.snapDistance, u = { marker: i, shape: this._shape, snapLatLng: s, segment: a.segment, layer: this._layer, workingLayer: this._layer, layerInteractedWith: a.layer, distance: a.distance };
    if (this._fireSnapDrag(u.marker, u), this._fireSnapDrag(this._layer, u), a.distance < o) {
      i._orgLatLng = i.getLatLng(), i.setLatLng(s), i._snapped = !0, i._snapInfo = u;
      let b = () => {
        this._snapLatLng = s, this._fireSnap(i, u), this._fireSnap(this._layer, u);
      }, v = this._snapLatLng || {}, D = s || {};
      (v.lat !== D.lat || v.lng !== D.lng) && b();
    } else this._snapLatLng && (this._unsnap(u), i._snapped = !1, i._snapInfo = void 0, this._fireUnsnap(u.marker, u), this._fireUnsnap(this._layer, u));
    return !0;
  }, _createSnapList() {
    let e = [], t = [], i = this._map;
    i.off("layerremove", this._handleSnapLayerRemoval, this), i.on("layerremove", this._handleSnapLayerRemoval, this), i.eachLayer((r) => {
      if ((r instanceof L.Polyline || r instanceof L.Marker || r instanceof L.CircleMarker || r instanceof L.ImageOverlay) && r.options.snapIgnore !== !0) {
        if (r.options.snapIgnore === void 0 && (!L.PM.optIn && r.options.pmIgnore === !0 || L.PM.optIn && r.options.pmIgnore !== !1)) return;
        (r instanceof L.Circle || r instanceof L.CircleMarker) && r.pm && r.pm._hiddenPolyCircle ? e.push(r.pm._hiddenPolyCircle) : r instanceof L.ImageOverlay && (r = L.rectangle(r.getBounds())), e.push(r);
        let a = L.polyline([], { color: "red", pmIgnore: !0 });
        a._pmTempLayer = !0, t.push(a), (r instanceof L.Circle || r instanceof L.CircleMarker) && t.push(a);
      }
    }), e = e.filter((r) => this._layer !== r), e = e.filter((r) => r._latlng || r._latlngs && Qt(r._latlngs)), e = e.filter((r) => !r._pmTempLayer), this._otherSnapLayers ? (this._otherSnapLayers.forEach(() => {
      let r = L.polyline([], { color: "red", pmIgnore: !0 });
      r._pmTempLayer = !0, t.push(r);
    }), this._snapList = e.concat(this._otherSnapLayers)) : this._snapList = e, this.debugIndicatorLines = t;
  }, _handleSnapLayerRemoval({ layer: e }) {
    if (!e._leaflet_id) return;
    let t = this._snapList.findIndex((i) => i._leaflet_id === e._leaflet_id);
    t > -1 && this._snapList.splice(t, 1);
  }, _calcClosestLayer(e, t) {
    return this._calcClosestLayers(e, t, 1)[0];
  }, _calcClosestLayers(e, t, i = 1) {
    let r = [], a = {};
    t.forEach((s, o) => {
      var l;
      if (s._parentCopy && s._parentCopy === this._layer || ((l = s.getLatLngs) == null ? void 0 : l.call(s).flat(5).length) < 2) return;
      let u = this._calcLayerDistances(e, s);
      if (u.distance = Math.floor(u.distance), this.debugIndicatorLines) {
        if (!this.debugIndicatorLines[o]) {
          let f = L.polyline([], { color: "red", pmIgnore: !0 });
          f._pmTempLayer = !0, this.debugIndicatorLines[o] = f;
        }
        this.debugIndicatorLines[o].setLatLngs([e, u.latlng]);
      }
      i === 1 && (a.distance === void 0 || u.distance - 5 <= a.distance) ? (u.distance + 5 < a.distance && (r = []), a = u, a.layer = s, r.push(a)) : i !== 1 && (a = {}, a = u, a.layer = s, r.push(a));
    }), i !== 1 && (r = r.sort((s, o) => s.distance - o.distance)), i === -1 && (i = r.length);
    let n = this._getClosestLayerByPriority(r, i);
    return L.Util.isArray(n) ? n : [n];
  }, _calcLayerDistances(e, t) {
    let i = this._map, r = t instanceof L.Marker || t instanceof L.CircleMarker, a = t instanceof L.Polygon, n = e;
    if (r) {
      let s = t.getLatLng();
      return { latlng: { ...s }, distance: this._getDistance(i, s, n) };
    }
    return this._calcLatLngDistances(n, t.getLatLngs(), i, a);
  }, _calcLatLngDistances(e, t, i, r = !1) {
    let a, n, s, o = (u) => {
      u.forEach((l, f) => {
        if (Array.isArray(l)) {
          o(l);
          return;
        }
        if (this.options.snapSegment) {
          let d = l, b;
          r ? b = f + 1 === u.length ? 0 : f + 1 : b = f + 1 === u.length ? void 0 : f + 1;
          let v = u[b];
          if (v) {
            let D = this._getDistanceToSegment(i, e, d, v);
            (n === void 0 || D < n) && (n = D, s = [d, v]);
          }
        } else {
          let d = this._getDistance(i, e, l);
          (n === void 0 || d < n) && (n = d, a = l);
        }
      });
    };
    return o(t), this.options.snapSegment ? { latlng: { ...this._getClosestPointOnSegment(i, e, s[0], s[1]) }, segment: s, distance: n } : { latlng: a, distance: n };
  }, _getClosestLayerByPriority(e, t = 1) {
    e = e.sort((s, o) => s._leaflet_id - o._leaflet_id);
    let i = ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"], r = this._map.pm.globalOptions.snappingOrder || [], a = 0, n = {};
    return r.concat(i).forEach((s) => {
      n[s] || (a += 1, n[s] = a);
    }), e.sort(Pn("instanceofShape", n)), t === 1 ? e[0] || {} : e.slice(0, t);
  }, _checkPrioritiySnapping(e) {
    let t = this._map, i = e.segment[0], r = e.segment[1], a = e.latlng, n = a;
    if (this.options.snapVertex) {
      let s = this._getDistance(t, i, a), o = this._getDistance(t, r, a), u = s < o ? i : r, l = s < o ? s : o;
      if (this.options.snapMiddle) {
        let d = L.PM.Utils.calcMiddleLatLng(t, i, r), b = this._getDistance(t, d, a);
        b < s && b < o && (u = d, l = b);
      }
      let f = this.options.snapDistance;
      l < f && (n = u);
    }
    return { ...n };
  }, _unsnap() {
    delete this._snapLatLng;
  }, _getClosestPointOnSegment(e, t, i, r) {
    let a = e.getMaxZoom();
    a === 1 / 0 && (a = e.getZoom());
    let n = e.project(t, a), s = e.project(i, a), o = e.project(r, a), u = L.LineUtil.closestPointOnSegment(n, s, o);
    return e.unproject(u, a);
  }, _getDistanceToSegment(e, t, i, r) {
    let a = e.latLngToContainerPoint(t), n = e.latLngToContainerPoint(i), s = e.latLngToContainerPoint(r);
    return L.LineUtil.pointToSegmentDistance(a, n, s);
  }, _getDistance(e, t, i) {
    return e.latLngToContainerPoint(t).distanceTo(e.latLngToContainerPoint(i));
  } }, Ni = jn, Nn = L.Class.extend({ includes: [Ni, kt], options: { snappable: !0, snapDistance: 20, snapMiddle: !1, allowSelfIntersection: !0, tooltips: !0, templineStyle: {}, hintlineStyle: { color: "#3388ff", dashArray: "5,5" }, pathOptions: null, cursorMarker: !0, finishOn: null, markerStyle: { draggable: !0, icon: L.icon() }, hideMiddleMarkers: !1, minRadiusCircle: null, maxRadiusCircle: null, minRadiusCircleMarker: null, maxRadiusCircleMarker: null, resizeableCircleMarker: !1, resizeableCircle: !0, markerEditable: !0, continueDrawing: !1, snapSegment: !0, requireSnapToFinish: !1, rectangleAngle: 0, textOptions: { text: null, focusAfterDraw: null, removeIfEmpty: null, className: null }, snapVertex: !0 }, setOptions(e) {
    L.Util.setOptions(this, e), this.setStyle(this.options);
  }, setStyle() {
  }, getOptions() {
    return this.options;
  }, initialize(e) {
    let t = new L.Icon.Default();
    t.options.tooltipAnchor = [0, 0], this.options.markerStyle.icon = t, this._map = e, this.shapes = ["Marker", "CircleMarker", "Line", "Polygon", "Rectangle", "Circle", "Cut", "Text"], this.shapes.forEach((i) => {
      this[i] = new L.PM.Draw[i](this._map);
    }), this.Marker.setOptions({ continueDrawing: !0 }), this.CircleMarker.setOptions({ continueDrawing: !0 });
  }, setPathOptions(e, t = !1) {
    t ? this.options.pathOptions = (0, zn.default)(this.options.pathOptions, e) : this.options.pathOptions = e;
  }, getShapes() {
    return this.shapes;
  }, getShape() {
    return this._shape;
  }, enable(e, t) {
    if (!e) throw new Error(`Error: Please pass a shape as a parameter. Possible shapes are: ${this.getShapes().join(",")}`);
    this.disable(), this[e].enable(t);
  }, disable() {
    this.shapes.forEach((e) => {
      this[e].disable();
    });
  }, addControls() {
    this.shapes.forEach((e) => {
      this[e].addButton();
    });
  }, getActiveShape() {
    let e;
    return this.shapes.forEach((t) => {
      this[t]._enabled && (e = t);
    }), e;
  }, _setGlobalDrawMode() {
    this._shape === "Cut" ? this._fireGlobalCutModeToggled() : this._fireGlobalDrawModeToggled();
    let e = [];
    this._map.eachLayer((t) => {
      (t instanceof L.Polyline || t instanceof L.Marker || t instanceof L.Circle || t instanceof L.CircleMarker || t instanceof L.ImageOverlay) && (t._pmTempLayer || e.push(t));
    }), this._enabled ? e.forEach((t) => {
      L.PM.Utils.disablePopup(t);
    }) : e.forEach((t) => {
      L.PM.Utils.enablePopup(t);
    });
  }, createNewDrawInstance(e, t) {
    let i = this._getShapeFromBtnName(t);
    if (this[e]) throw new TypeError("Draw Type already exists");
    if (!L.PM.Draw[i]) throw new TypeError(`There is no class L.PM.Draw.${i}`);
    return this[e] = new L.PM.Draw[i](this._map), this[e].toolbarButtonName = e, this[e]._shape = e, this.shapes.push(e), this[t] && this[e].setOptions(this[t].options), this[e].setOptions(this[e].options), this[e];
  }, _getShapeFromBtnName(e) {
    let t = { drawMarker: "Marker", drawCircle: "Circle", drawPolygon: "Polygon", drawPolyline: "Line", drawRectangle: "Rectangle", drawCircleMarker: "CircleMarker", editMode: "Edit", dragMode: "Drag", cutPolygon: "Cut", removalMode: "Removal", rotateMode: "Rotate", drawText: "Text" };
    return t[e] ? t[e] : this[e] ? this[e]._shape : e;
  }, _finishLayer(e) {
    e.pm && (e.pm.setOptions(this.options), e.pm._shape = this._shape, e.pm._map = this._map), this._addDrawnLayerProp(e);
  }, _addDrawnLayerProp(e) {
    e._drawnByGeoman = !0;
  }, _setPane(e, t) {
    t === "layerPane" ? e.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane || "overlayPane" : t === "vertexPane" ? e.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane || "markerPane" : t === "markerPane" && (e.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane || "markerPane");
  }, _isFirstLayer() {
    return (this._map || this._layer._map).pm.getGeomanLayers().length === 0;
  } }), oe = Nn;
  oe.Marker = oe.extend({ initialize(e) {
    this._map = e, this._shape = "Marker", this.toolbarButtonName = "drawMarker", this._layerIsDragging = !1;
  }, enable(e) {
    L.Util.setOptions(this, e), this._enabled = !0, this._isTouchDevice = !wn(), this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._isTouchDevice ? (this._createTouchHint(), this._hintMarker = L.marker(this._map.getCenter(), { ...this.options.markerStyle, opacity: 0, interactive: !1 }), this._setPane(this._hintMarker, "markerPane"), this._hintMarker._pmTempLayer = !0) : (this._hintMarker = L.marker(this._map.getCenter(), this.options.markerStyle), this._setPane(this._hintMarker, "markerPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.placeMarker"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._map.on("mousemove", this._syncHintMarker, this)), this._layer = this._hintMarker, this.options.markerEditable && this._map.eachLayer((t) => {
      this.isRelevantMarker(t) && t.pm.enable();
    }), this._fireDrawStart(), this._setGlobalDrawMode();
  }, disable() {
    this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._createMarker, this), this._isTouchDevice ? (this._removeTouchHint(), this._hintMarker = null) : (this._hintMarker.remove(), this._map.off("mousemove", this._syncHintMarker, this)), this._map.eachLayer((e) => {
      this.isRelevantMarker(e) && e.pm.disable();
    }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, enabled() {
    return this._enabled;
  }, toggle(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, isRelevantMarker(e) {
    return e instanceof L.Marker && e.pm && !e._pmTempLayer && !e.pm._initTextMarker;
  }, _syncHintMarker(e) {
    if (this._hintMarker.setLatLng(e.latlng), this.options.snappable) {
      let t = e;
      t.target = this._hintMarker, this._handleSnapping(t);
    }
    this._fireChange(this._hintMarker.getLatLng(), "Draw");
  }, _createMarker(e) {
    if (!e.latlng || this._layerIsDragging || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    this._hintMarker._snapped || this._hintMarker.setLatLng(e.latlng);
    let t = this._hintMarker.getLatLng(), i = new L.Marker(t, this.options.markerStyle);
    this._setPane(i, "markerPane"), this._finishLayer(i), i.pm || (i.options.draggable = !1), i.addTo(this._map.pm._getContainingLayer()), i.pm && this.options.markerEditable ? i.pm.enable() : i.dragging && i.dragging.disable(), this._fireCreate(i), this._cleanupSnapping(), this.options.continueDrawing || this.disable();
  }, setStyle() {
    var e, t;
    (e = this.options.markerStyle) != null && e.icon && ((t = this._hintMarker) == null || t.setIcon(this.options.markerStyle.icon));
  }, _createTouchHint() {
    this.options.tooltips && (this._touchHint = L.DomUtil.create("div", "leaflet-pm-touch-hint"), this._touchHint.textContent = V("tooltips.placeMarkerTouch"), this._map.getContainer().appendChild(this._touchHint));
  }, _removeTouchHint() {
    this._touchHint && this._touchHint.parentNode && (this._touchHint.parentNode.removeChild(this._touchHint), this._touchHint = null);
  } });
  var Le = 63710088e-1, Un = { centimeters: Le * 100, centimetres: Le * 100, degrees: 360 / (2 * Math.PI), feet: Le * 3.28084, inches: Le * 39.37, kilometers: Le / 1e3, kilometres: Le / 1e3, meters: Le, metres: Le, miles: Le / 1609.344, millimeters: Le * 1e3, millimetres: Le * 1e3, nauticalmiles: Le / 1852, radians: 1, yards: Le * 1.0936 };
  function Ue(e, t, i = {}) {
    let r = { type: "Feature" };
    return (i.id === 0 || i.id) && (r.id = i.id), i.bbox && (r.bbox = i.bbox), r.properties = t || {}, r.geometry = e, r;
  }
  function et(e, t, i = {}) {
    if (!e) throw new Error("coordinates is required");
    if (!Array.isArray(e)) throw new Error("coordinates must be an Array");
    if (e.length < 2) throw new Error("coordinates must be at least 2 numbers long");
    if (!Vi(e[0]) || !Vi(e[1])) throw new Error("coordinates must contain numbers");
    return Ue({ type: "Point", coordinates: e }, t, i);
  }
  function Et(e, t, i = {}) {
    if (e.length < 2) throw new Error("coordinates must be an array of two or more positions");
    return Ue({ type: "LineString", coordinates: e }, t, i);
  }
  function Ee(e, t = {}) {
    let i = { type: "FeatureCollection" };
    return t.id && (i.id = t.id), t.bbox && (i.bbox = t.bbox), i.features = e, i;
  }
  function Vn(e, t = "kilometers") {
    let i = Un[t];
    if (!i) throw new Error(t + " units is invalid");
    return e * i;
  }
  function Ui(e) {
    return e % (2 * Math.PI) * 180 / Math.PI;
  }
  function tt(e) {
    return e % 360 * Math.PI / 180;
  }
  function Vi(e) {
    return !isNaN(e) && e !== null && !Array.isArray(e);
  }
  function Kn(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
  }
  function qn(e) {
    let t, i, r = { type: "FeatureCollection", features: [] };
    if (e.type === "Feature" ? i = e.geometry : i = e, i.type === "LineString") t = [i.coordinates];
    else if (i.type === "MultiLineString") t = i.coordinates;
    else if (i.type === "MultiPolygon") t = [].concat(...i.coordinates);
    else if (i.type === "Polygon") t = i.coordinates;
    else throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");
    return t.forEach((a) => {
      t.forEach((n) => {
        for (let s = 0; s < a.length - 1; s++) for (let o = s; o < n.length - 1; o++) {
          if (a === n && (Math.abs(s - o) === 1 || s === 0 && o === a.length - 2 && a[s][0] === a[a.length - 1][0] && a[s][1] === a[a.length - 1][1])) continue;
          let u = Hn(a[s][0], a[s][1], a[s + 1][0], a[s + 1][1], n[o][0], n[o][1], n[o + 1][0], n[o + 1][1]);
          u && r.features.push(et([u[0], u[1]]));
        }
      });
    }), r;
  }
  function Hn(e, t, i, r, a, n, s, o) {
    let u, l, f, d, b, v = { x: null, y: null, onLine1: !1, onLine2: !1 };
    return u = (o - n) * (i - e) - (s - a) * (r - t), u === 0 ? v.x !== null && v.y !== null ? v : !1 : (l = t - n, f = e - a, d = (s - a) * l - (o - n) * f, b = (i - e) * l - (r - t) * f, l = d / u, f = b / u, v.x = e + l * (i - e), v.y = t + l * (r - t), l >= 0 && l <= 1 && (v.onLine1 = !0), f >= 0 && f <= 1 && (v.onLine2 = !0), v.onLine1 && v.onLine2 ? [v.x, v.y] : !1);
  }
  var Bt = qn;
  oe.Line = oe.extend({ initialize(e) {
    this._map = e, this._shape = "Line", this.toolbarButtonName = "drawPolyline", this._doesSelfIntersect = !1;
  }, enable(e) {
    L.Util.setOptions(this, e), this._enabled = !0, this._markers = [], this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.polyline([], { ...this.options.templineStyle, pmIgnore: !1 }), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._layerGroup.addLayer(this._layer), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._layerGroup.addLayer(this._hintline), this._hintMarker = L.marker(this._map.getCenter(), { interactive: !1, zIndexOffset: 100, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.firstVertex"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._createVertex, this), this.options.finishOn && this.options.finishOn !== "snap" && this._map.on(this.options.finishOn, this._finishShape, this), this.options.finishOn === "dblclick" && (this.tempMapDoubleClickZoomState = this._map.doubleClickZoom._enabled, this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.disable()), this._map.on("mousemove", this._syncHintMarker, this), this._hintMarker.on("move", this._syncHintLine, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = [], this.isRed = !1, this._fireDrawStart(), this._setGlobalDrawMode();
  }, disable() {
    this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._createVertex, this), this._map.off("mousemove", this._syncHintMarker, this), this.options.finishOn && this.options.finishOn !== "snap" && this._map.off(this.options.finishOn, this._finishShape, this), this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.enable(), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, enabled() {
    return this._enabled;
  }, toggle(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, _syncHintLine() {
    let e = this._layer.getLatLngs();
    if (e.length > 0) {
      let t = e[e.length - 1];
      this._hintline.setLatLngs([t, this._hintMarker.getLatLng()]);
    }
  }, _syncHintMarker(e) {
    if (this._hintMarker.setLatLng(e.latlng), this.options.snappable) {
      let i = e;
      i.target = this._hintMarker, this._handleSnapping(i);
    } else if (this._otherSnapLayers && this._otherSnapLayers.length > 0) {
      let i = e;
      i.target = this._hintMarker, this._handleSnapping(i, !0);
    }
    this.options.allowSelfIntersection || this._handleSelfIntersection(!0, this._hintMarker.getLatLng());
    let t = this._layer._defaultShape().slice();
    t.push(this._hintMarker.getLatLng()), this._change(t);
  }, hasSelfIntersection() {
    return Bt(this._layer.toGeoJSON(15)).features.length > 0;
  }, _handleSelfIntersection(e, t) {
    let i = L.polyline(this._layer.getLatLngs());
    e && (t || (t = this._hintMarker.getLatLng()), i.addLatLng(t));
    let r = Bt(i.toGeoJSON(15));
    this._doesSelfIntersect = r.features.length > 0, this._doesSelfIntersect ? this.isRed || (this.isRed = !0, this._hintline.setStyle({ color: "#f00000ff" }), this._fireIntersect(r, this._map, "Draw")) : this._hintline.isEmpty() || (this.isRed = !1, this._hintline.setStyle(this.options.hintlineStyle));
  }, _createVertex(e) {
    if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, e.latlng), this._doesSelfIntersect)) return;
    this._hintMarker._snapped || this._hintMarker.setLatLng(e.latlng);
    let t = this._hintMarker.getLatLng(), i = this._layer.getLatLngs(), r = i[i.length - 1];
    if (t.equals(i[0]) || i.length > 0 && t.equals(r)) {
      this._finishShape();
      return;
    }
    this._layer._latlngInfo = this._layer._latlngInfo || [], this._layer._latlngInfo.push({ latlng: t, snapInfo: this._hintMarker._snapInfo }), this._layer.addLatLng(t);
    let a = this._createMarker(t);
    this._setTooltipText(), this._setHintLineAfterNewVertex(t), this._fireVertexAdded(a, void 0, t, "Draw"), this._change(this._layer.getLatLngs()), this.options.finishOn === "snap" && this._hintMarker._snapped && this._finishShape(e);
  }, _setHintLineAfterNewVertex(e) {
    this._hintline.setLatLngs([e, e]);
  }, _removeLastVertex() {
    let e = this._markers;
    if (e.length <= 1) {
      this.disable();
      return;
    }
    let t = this._layer.getLatLngs(), i = e[e.length - 1], { indexPath: r } = L.PM.Utils.findDeepMarkerIndex(e, i);
    e.pop(), this._layerGroup.removeLayer(i);
    let a = e[e.length - 1], n = t.indexOf(a.getLatLng());
    t = t.slice(0, n + 1), this._layer.setLatLngs(t), this._layer._latlngInfo.pop(), this._syncHintLine(), this._setTooltipText(), this._fireVertexRemoved(i, r, "Draw"), this._change(this._layer.getLatLngs());
  }, _finishShape() {
    if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!1), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    let e = this._layer.getLatLngs();
    if (e.length <= 1) return;
    let t = L.polyline(e, this.options.pathOptions);
    this._setPane(t, "layerPane"), this._finishLayer(t), t.addTo(this._map.pm._getContainingLayer()), this._fireCreate(t), this.options.snappable && this._cleanupSnapping();
    let i = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(i));
  }, _createMarker(e) {
    let t = new L.Marker(e, { draggable: !1, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(t, "vertexPane"), t._pmTempLayer = !0, this._layerGroup.addLayer(t), this._markers.push(t), t.on("click", this._finishShape, this), t;
  }, _setTooltipText() {
    let { length: e } = this._layer.getLatLngs().flat(), t = "";
    e <= 1 ? t = V("tooltips.continueLine") : t = V("tooltips.finishLine"), this._hintMarker.setTooltipContent(t);
  }, _change(e) {
    this._fireChange(e, "Draw");
  }, setStyle() {
    var e, t;
    (e = this._layer) == null || e.setStyle(this.options.templineStyle), (t = this._hintline) == null || t.setStyle(this.options.hintlineStyle);
  } }), oe.Polygon = oe.Line.extend({ initialize(e) {
    this._map = e, this._shape = "Polygon", this.toolbarButtonName = "drawPolygon";
  }, enable(e) {
    L.PM.Draw.Line.prototype.enable.call(this, e), this._layer.pm._shape = "Polygon";
  }, _createMarker(e) {
    let t = new L.Marker(e, { draggable: !1, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(t, "vertexPane"), t._pmTempLayer = !0, this._layerGroup.addLayer(t), this._markers.push(t), this._layer.getLatLngs().flat().length === 1 ? (t.on("click", this._finishShape, this), this._tempSnapLayerIndex = this._otherSnapLayers.push(t) - 1, this.options.snappable && this._cleanupSnapping()) : t.on("click", () => 1), t;
  }, _setTooltipText() {
    let { length: e } = this._layer.getLatLngs().flat(), t = "";
    e <= 2 ? t = V("tooltips.continueLine") : t = V("tooltips.finishPoly"), this._hintMarker.setTooltipContent(t);
  }, _finishShape() {
    if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    let e = this._layer.getLatLngs();
    if (e.length <= 2) return;
    let t = L.polygon(e, this.options.pathOptions);
    this._setPane(t, "layerPane"), this._finishLayer(t), t.addTo(this._map.pm._getContainingLayer()), this._fireCreate(t), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex;
    let i = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(i));
  } }), oe.Rectangle = oe.extend({ initialize(e) {
    this._map = e, this._shape = "Rectangle", this.toolbarButtonName = "drawRectangle";
  }, enable(e) {
    if (L.Util.setOptions(this, e), this._enabled = !0, this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.rectangle([[0, 0], [0, 0]], this.options.pathOptions), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._startMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon rect-start-marker" }), draggable: !1, zIndexOffset: -100, opacity: this.options.cursorMarker ? 1 : 0 }), this._setPane(this._startMarker, "vertexPane"), this._startMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._startMarker), this._hintMarker = L.marker(this._map.getCenter(), { zIndexOffset: 150, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.firstVertex"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this.options.cursorMarker) {
      this._styleMarkers = [];
      for (let t = 0; t < 2; t += 1) {
        let i = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon rect-style-marker" }), draggable: !1, zIndexOffset: 100 });
        this._setPane(i, "vertexPane"), i._pmTempLayer = !0, this._layerGroup.addLayer(i), this._styleMarkers.push(i);
      }
    }
    this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._placeStartingMarkers, this), this._map.on("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode();
  }, disable() {
    this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._finishShape, this), this._map.off("click", this._placeStartingMarkers, this), this._map.off("mousemove", this._syncHintMarker, this), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, enabled() {
    return this._enabled;
  }, toggle(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, _placeStartingMarkers(e) {
    this._hintMarker._snapped || this._hintMarker.setLatLng(e.latlng);
    let t = this._hintMarker.getLatLng();
    L.DomUtil.addClass(this._startMarker._icon, "visible"), this._startMarker.setLatLng(t), this.options.cursorMarker && this._styleMarkers && this._styleMarkers.forEach((i) => {
      L.DomUtil.addClass(i._icon, "visible"), i.setLatLng(t);
    }), this._map.off("click", this._placeStartingMarkers, this), this._map.on("click", this._finishShape, this), this._hintMarker.setTooltipContent(V("tooltips.finishRect")), this._setRectangleOrigin();
  }, _setRectangleOrigin() {
    let e = this._startMarker.getLatLng();
    e && (this._layerGroup.addLayer(this._layer), this._layer.setLatLngs([e, e]), this._hintMarker.on("move", this._syncRectangleSize, this));
  }, _syncHintMarker(e) {
    if (this._hintMarker.setLatLng(e.latlng), this.options.snappable) {
      let i = e;
      i.target = this._hintMarker, this._handleSnapping(i);
    }
    let t = this._layerGroup && this._layerGroup.hasLayer(this._layer) ? this._layer.getLatLngs() : [this._hintMarker.getLatLng()];
    this._fireChange(t, "Draw");
  }, _syncRectangleSize() {
    let e = ji(this._startMarker.getLatLng(), this._map), t = ji(this._hintMarker.getLatLng(), this._map), i = L.PM.Utils._getRotatedRectangle(e, t, this.options.rectangleAngle || 0, this._map);
    if (this._layer.setLatLngs(i), this.options.cursorMarker && this._styleMarkers) {
      let r = [];
      i.forEach((a) => {
        !a.equals(e, 1e-8) && !a.equals(t, 1e-8) && r.push(a);
      }), r.forEach((a, n) => {
        try {
          this._styleMarkers[n].setLatLng(a);
        } catch {
        }
      });
    }
  }, _findCorners() {
    let e = this._layer.getLatLngs()[0];
    return L.PM.Utils._getRotatedRectangle(e[0], e[2], this.options.rectangleAngle || 0, this._map);
  }, _finishShape(e) {
    e != null && e.latlng && !this._hintMarker._snapped && this._hintMarker.setLatLng(e.latlng);
    let t = this._hintMarker.getLatLng(), i = this._startMarker.getLatLng();
    if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer() || i.equals(t)) return;
    let r = L.rectangle([i, t], this.options.pathOptions);
    if (this.options.rectangleAngle) {
      let n = L.PM.Utils._getRotatedRectangle(i, t, this.options.rectangleAngle || 0, this._map);
      r.setLatLngs(n), r.pm && r.pm._setAngle(this.options.rectangleAngle || 0);
    }
    this._setPane(r, "layerPane"), this._finishLayer(r), r.addTo(this._map.pm._getContainingLayer()), this._fireCreate(r);
    let a = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(a));
  }, setStyle() {
    var e;
    (e = this._layer) == null || e.setStyle(this.options.pathOptions);
  } }), oe.CircleMarker = oe.extend({ initialize(e) {
    this._map = e, this._shape = "CircleMarker", this.toolbarButtonName = "drawCircleMarker", this._layerIsDragging = !1, this._BaseCircleClass = L.CircleMarker, this._minRadiusOption = "minRadiusCircleMarker", this._maxRadiusOption = "maxRadiusCircleMarker", this._editableOption = "resizeableCircleMarker", this._defaultRadius = 10;
  }, enable(e) {
    if (L.Util.setOptions(this, e), this.options.editable && (this.options.resizeableCircleMarker = this.options.editable, delete this.options.editable), this._enabled = !0, this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._map.getContainer().classList.add("geoman-draw-cursor"), this.options[this._editableOption]) {
      let t = {};
      L.extend(t, this.options.templineStyle), t.radius = 0, this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = new this._BaseCircleClass(this._map.getCenter(), t), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._centerMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon" }), draggable: !1, zIndexOffset: 100 }), this._setPane(this._centerMarker, "vertexPane"), this._centerMarker._pmTempLayer = !0, this._hintMarker = L.marker(this._map.getCenter(), { zIndexOffset: 110, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.startCircle"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._layerGroup.addLayer(this._hintline), this._map.on("click", this._placeCenterMarker, this);
    } else this._map.on("click", this._createMarker, this), this._hintMarker = new this._BaseCircleClass(this._map.getCenter(), { radius: this._defaultRadius, ...this.options.templineStyle }), this._setPane(this._hintMarker, "layerPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this._layer = this._hintMarker, this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.placeCircleMarker"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip();
    this._map.on("mousemove", this._syncHintMarker, this), this._extendingEnable(), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode();
  }, _extendingEnable() {
    !this.options[this._editableOption] && this.options.markerEditable && this._map.eachLayer((e) => {
      this.isRelevantMarker(e) && e.pm.enable();
    }), this._layer.bringToBack();
  }, disable() {
    this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this.options[this._editableOption] ? (this._map.off("click", this._finishShape, this), this._map.off("click", this._placeCenterMarker, this), this._map.removeLayer(this._layerGroup)) : (this._map.off("click", this._createMarker, this), this._extendingDisable(), this._hintMarker.remove()), this._map.off("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, _extendingDisable() {
    this._map.eachLayer((e) => {
      this.isRelevantMarker(e) && e.pm.disable();
    });
  }, enabled() {
    return this._enabled;
  }, toggle(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, _placeCenterMarker(e) {
    this._hintMarker._snapped || this._hintMarker.setLatLng(e.latlng), this._layerGroup.addLayer(this._layer), this._layerGroup.addLayer(this._centerMarker);
    let t = this._hintMarker.getLatLng();
    this._centerMarker.setLatLng(t), this._map.off("click", this._placeCenterMarker, this), this._map.on("click", this._finishShape, this), this._placeCircleCenter();
  }, _placeCircleCenter() {
    let e = this._centerMarker.getLatLng();
    e && (this._layer.setLatLng(e), this._hintMarker.on("move", this._syncHintLine, this), this._hintMarker.on("move", this._syncCircleRadius, this), this._hintMarker.setTooltipContent(V("tooltips.finishCircle")), this._fireCenterPlaced(), this._fireChange(this._layer.getLatLng(), "Draw"));
  }, _syncHintLine() {
    let e = this._centerMarker.getLatLng(), t = this._getNewDestinationOfHintMarker();
    this._hintline.setLatLngs([e, t]);
  }, _syncCircleRadius() {
    let e = this._centerMarker.getLatLng(), t = this._hintMarker.getLatLng(), i = this._distanceCalculation(e, t);
    this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? this._layer.setRadius(this.options[this._minRadiusOption]) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] ? this._layer.setRadius(this.options[this._maxRadiusOption]) : this._layer.setRadius(i);
  }, _syncHintMarker(e) {
    if (this._hintMarker.setLatLng(e.latlng), this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()), this.options.snappable) {
      let i = e;
      i.target = this._hintMarker, this._handleSnapping(i);
    }
    this._handleHintMarkerSnapping();
    let t = this._layerGroup && this._layerGroup.hasLayer(this._centerMarker) ? this._centerMarker.getLatLng() : this._hintMarker.getLatLng();
    this._fireChange(t, "Draw");
  }, isRelevantMarker(e) {
    return e instanceof L.CircleMarker && !(e instanceof L.Circle) && e.pm && !e._pmTempLayer;
  }, _createMarker(e) {
    if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer() || !e.latlng || this._layerIsDragging) return;
    this._hintMarker._snapped || this._hintMarker.setLatLng(e.latlng);
    let t = this._hintMarker.getLatLng(), i = new this._BaseCircleClass(t, { radius: this._defaultRadius, ...this.options.pathOptions });
    this._setPane(i, "layerPane"), this._finishLayer(i), i.addTo(this._map.pm._getContainingLayer()), this._extendingCreateMarker(i), this._fireCreate(i), this._cleanupSnapping(), this.options.continueDrawing || this.disable();
  }, _extendingCreateMarker(e) {
    e.pm && this.options.markerEditable && e.pm.enable();
  }, _finishShape(e) {
    if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    e != null && e.latlng && !this._hintMarker._snapped && this._hintMarker.setLatLng(e.latlng);
    let t = this._centerMarker.getLatLng(), i = this._defaultRadius;
    if (this.options[this._editableOption]) {
      let s = this._hintMarker.getLatLng();
      i = this._distanceCalculation(t, s), this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? i = this.options[this._minRadiusOption] : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && (i = this.options[this._maxRadiusOption]);
    }
    let r = { ...this.options.pathOptions, radius: i }, a = new this._BaseCircleClass(t, r);
    this._setPane(a, "layerPane"), this._finishLayer(a), a.addTo(this._map.pm._getContainingLayer()), a.pm && a.pm._updateHiddenPolyCircle(), this._fireCreate(a);
    let n = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(n));
  }, _getNewDestinationOfHintMarker() {
    let e = this._hintMarker.getLatLng();
    if (this.options[this._editableOption]) {
      if (!this._layerGroup.hasLayer(this._centerMarker)) return e;
      let t = this._centerMarker.getLatLng(), i = this._distanceCalculation(t, e);
      this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? e = xt(this._map, t, e, this._getMinDistanceInMeter()) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && (e = xt(this._map, t, e, this._getMaxDistanceInMeter()));
    }
    return e;
  }, _getMinDistanceInMeter() {
    return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._minRadiusOption], this._map, this._centerMarker.getLatLng());
  }, _getMaxDistanceInMeter() {
    return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._maxRadiusOption], this._map, this._centerMarker.getLatLng());
  }, _handleHintMarkerSnapping() {
    if (this.options[this._editableOption]) {
      if (this._hintMarker._snapped) {
        let e = this._centerMarker.getLatLng(), t = this._hintMarker.getLatLng(), i = this._distanceCalculation(e, t);
        this._layerGroup.hasLayer(this._centerMarker) && (this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? this._hintMarker.setLatLng(this._hintMarker._orgLatLng) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && this._hintMarker.setLatLng(this._hintMarker._orgLatLng));
      }
      this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker());
    }
  }, setStyle() {
    var t, i;
    let e = {};
    L.extend(e, this.options.templineStyle), this.options[this._editableOption] && (e.radius = 0), (t = this._layer) == null || t.setStyle(e), (i = this._hintline) == null || i.setStyle(this.options.hintlineStyle);
  }, _distanceCalculation(e, t) {
    return this._map.project(e).distanceTo(this._map.project(t));
  } }), oe.Circle = oe.CircleMarker.extend({ initialize(e) {
    this._map = e, this._shape = "Circle", this.toolbarButtonName = "drawCircle", this._BaseCircleClass = L.Circle, this._minRadiusOption = "minRadiusCircle", this._maxRadiusOption = "maxRadiusCircle", this._editableOption = "resizeableCircle", this._defaultRadius = 100;
  }, _extendingEnable() {
  }, _extendingDisable() {
  }, _extendingCreateMarker() {
  }, isRelevantMarker() {
  }, _getMinDistanceInMeter() {
    return this.options[this._minRadiusOption];
  }, _getMaxDistanceInMeter() {
    return this.options[this._maxRadiusOption];
  }, _distanceCalculation(e, t) {
    return this._map.distance(e, t);
  } });
  var Ki = class {
    constructor(e = [], t = Yn) {
      if (this.data = e, this.length = this.data.length, this.compare = t, this.length > 0) for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
    push(e) {
      this.data.push(e), this.length++, this._up(this.length - 1);
    }
    pop() {
      if (this.length === 0) return;
      let e = this.data[0], t = this.data.pop();
      return this.length--, this.length > 0 && (this.data[0] = t, this._down(0)), e;
    }
    peek() {
      return this.data[0];
    }
    _up(e) {
      let { data: t, compare: i } = this, r = t[e];
      for (; e > 0; ) {
        let a = e - 1 >> 1, n = t[a];
        if (i(r, n) >= 0) break;
        t[e] = n, e = a;
      }
      t[e] = r;
    }
    _down(e) {
      let { data: t, compare: i } = this, r = this.length >> 1, a = t[e];
      for (; e < r; ) {
        let n = (e << 1) + 1, s = t[n], o = n + 1;
        if (o < this.length && i(t[o], s) < 0 && (n = o, s = t[o]), i(s, a) >= 0) break;
        t[e] = s, e = n;
      }
      t[e] = a;
    }
  };
  function Yn(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }
  function qi(e, t) {
    return e.p.x > t.p.x ? 1 : e.p.x < t.p.x ? -1 : e.p.y !== t.p.y ? e.p.y > t.p.y ? 1 : -1 : 1;
  }
  function Xn(e, t) {
    return e.rightSweepEvent.p.x > t.rightSweepEvent.p.x ? 1 : e.rightSweepEvent.p.x < t.rightSweepEvent.p.x ? -1 : e.rightSweepEvent.p.y !== t.rightSweepEvent.p.y ? e.rightSweepEvent.p.y < t.rightSweepEvent.p.y ? 1 : -1 : 1;
  }
  var Hi = class {
    constructor(e, t, i, r) {
      this.p = { x: e[0], y: e[1] }, this.featureId = t, this.ringId = i, this.eventId = r, this.otherEvent = null, this.isLeftEndpoint = null;
    }
    isSamePoint(e) {
      return this.p.x === e.p.x && this.p.y === e.p.y;
    }
  };
  function Zn(e, t) {
    if (e.type === "FeatureCollection") {
      let i = e.features;
      for (let r = 0; r < i.length; r++) Yi(i[r], t);
    } else Yi(e, t);
  }
  var wt = 0, Dt = 0, At = 0;
  function Yi(e, t) {
    let i = e.type === "Feature" ? e.geometry : e, r = i.coordinates;
    (i.type === "Polygon" || i.type === "MultiLineString") && (r = [r]), i.type === "LineString" && (r = [[r]]);
    for (let a = 0; a < r.length; a++) for (let n = 0; n < r[a].length; n++) {
      let s = r[a][n][0], o = null;
      Dt = Dt + 1;
      for (let u = 0; u < r[a][n].length - 1; u++) {
        o = r[a][n][u + 1];
        let l = new Hi(s, wt, Dt, At), f = new Hi(o, wt, Dt, At + 1);
        l.otherEvent = f, f.otherEvent = l, qi(l, f) > 0 ? (f.isLeftEndpoint = !0, l.isLeftEndpoint = !1) : (l.isLeftEndpoint = !0, f.isLeftEndpoint = !1), t.push(l), t.push(f), s = o, At = At + 1;
      }
    }
    wt = wt + 1;
  }
  var $n = class {
    constructor(e) {
      this.leftSweepEvent = e, this.rightSweepEvent = e.otherEvent;
    }
  };
  function Jn(e, t) {
    if (e === null || t === null || e.leftSweepEvent.ringId === t.leftSweepEvent.ringId && (e.rightSweepEvent.isSamePoint(t.leftSweepEvent) || e.rightSweepEvent.isSamePoint(t.leftSweepEvent) || e.rightSweepEvent.isSamePoint(t.rightSweepEvent) || e.leftSweepEvent.isSamePoint(t.leftSweepEvent) || e.leftSweepEvent.isSamePoint(t.rightSweepEvent))) return !1;
    let i = e.leftSweepEvent.p.x, r = e.leftSweepEvent.p.y, a = e.rightSweepEvent.p.x, n = e.rightSweepEvent.p.y, s = t.leftSweepEvent.p.x, o = t.leftSweepEvent.p.y, u = t.rightSweepEvent.p.x, l = t.rightSweepEvent.p.y, f = (l - o) * (a - i) - (u - s) * (n - r), d = (u - s) * (r - o) - (l - o) * (i - s), b = (a - i) * (r - o) - (n - r) * (i - s);
    if (f === 0) return !1;
    let v = d / f, D = b / f;
    if (v >= 0 && v <= 1 && D >= 0 && D <= 1) {
      let P = i + v * (a - i), O = r + v * (n - r);
      return [P, O];
    }
    return !1;
  }
  function Wn(e, t) {
    t = t || !1;
    let i = [], r = new Ki([], Xn);
    for (; e.length; ) {
      let a = e.pop();
      if (a.isLeftEndpoint) {
        let n = new $n(a);
        for (let s = 0; s < r.data.length; s++) {
          let o = r.data[s];
          if (t && o.leftSweepEvent.featureId === a.featureId) continue;
          let u = Jn(n, o);
          u !== !1 && i.push(u);
        }
        r.push(n);
      } else a.isLeftEndpoint === !1 && r.pop();
    }
    return i;
  }
  function Qn(e, t) {
    let i = new Ki([], qi);
    return Zn(e, i), Wn(i, t);
  }
  var es = Qn, ts = es;
  function Xi(e, t, i = {}) {
    let { removeDuplicates: r = !0, ignoreSelfIntersections: a = !0 } = i, n = [];
    e.type === "FeatureCollection" ? n = n.concat(e.features) : e.type === "Feature" ? n.push(e) : (e.type === "LineString" || e.type === "Polygon" || e.type === "MultiLineString" || e.type === "MultiPolygon") && n.push(Ue(e)), t.type === "FeatureCollection" ? n = n.concat(t.features) : t.type === "Feature" ? n.push(t) : (t.type === "LineString" || t.type === "Polygon" || t.type === "MultiLineString" || t.type === "MultiPolygon") && n.push(Ue(t));
    let s = ts(Ee(n), a), o = [];
    if (r) {
      let u = {};
      s.forEach((l) => {
        let f = l.join(",");
        u[f] || (u[f] = !0, o.push(l));
      });
    } else o = s;
    return Ee(o.map((u) => et(u)));
  }
  var pt = Xi, is = K(ja(), 1);
  function ti(e, t, i) {
    if (e !== null) for (var r, a, n, s, o, u, l, f = 0, d = 0, b, v = e.type, D = v === "FeatureCollection", P = v === "Feature", O = D ? e.features.length : 1, I = 0; I < O; I++) {
      l = D ? e.features[I].geometry : P ? e.geometry : e, b = l ? l.type === "GeometryCollection" : !1, o = b ? l.geometries.length : 1;
      for (var g = 0; g < o; g++) {
        var M = 0, w = 0;
        if (s = b ? l.geometries[g] : l, s !== null) {
          u = s.coordinates;
          var R = s.type;
          switch (f = 0, R) {
            case null:
              break;
            case "Point":
              if (t(u, d, I, M, w) === !1) return !1;
              d++, M++;
              break;
            case "LineString":
            case "MultiPoint":
              for (r = 0; r < u.length; r++) {
                if (t(u[r], d, I, M, w) === !1) return !1;
                d++, R === "MultiPoint" && M++;
              }
              R === "LineString" && M++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (r = 0; r < u.length; r++) {
                for (a = 0; a < u[r].length - f; a++) {
                  if (t(u[r][a], d, I, M, w) === !1) return !1;
                  d++;
                }
                R === "MultiLineString" && M++, R === "Polygon" && w++;
              }
              R === "Polygon" && M++;
              break;
            case "MultiPolygon":
              for (r = 0; r < u.length; r++) {
                for (w = 0, a = 0; a < u[r].length; a++) {
                  for (n = 0; n < u[r][a].length - f; n++) {
                    if (t(u[r][a][n], d, I, M, w) === !1) return !1;
                    d++;
                  }
                  w++;
                }
                M++;
              }
              break;
            case "GeometryCollection":
              for (r = 0; r < s.geometries.length; r++) if (ti(s.geometries[r], t) === !1) return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
  }
  function Pt(e, t) {
    if (e.type === "Feature") t(e, 0);
    else if (e.type === "FeatureCollection") for (var i = 0; i < e.features.length && t(e.features[i], i) !== !1; i++) ;
  }
  function rs(e, t, i) {
    var r = i;
    return Pt(e, function(a, n) {
      n === 0 && i === void 0 ? r = a : r = t(r, a, n);
    }), r;
  }
  function as(e, t) {
    var i, r, a, n, s, o, u, l, f, d, b = 0, v = e.type === "FeatureCollection", D = e.type === "Feature", P = v ? e.features.length : 1;
    for (i = 0; i < P; i++) {
      for (o = v ? e.features[i].geometry : D ? e.geometry : e, l = v ? e.features[i].properties : D ? e.properties : {}, f = v ? e.features[i].bbox : D ? e.bbox : void 0, d = v ? e.features[i].id : D ? e.id : void 0, u = o ? o.type === "GeometryCollection" : !1, s = u ? o.geometries.length : 1, a = 0; a < s; a++) {
        if (n = u ? o.geometries[a] : o, n === null) {
          if (t(null, b, l, f, d) === !1) return !1;
          continue;
        }
        switch (n.type) {
          case "Point":
          case "LineString":
          case "MultiPoint":
          case "Polygon":
          case "MultiLineString":
          case "MultiPolygon": {
            if (t(n, b, l, f, d) === !1) return !1;
            break;
          }
          case "GeometryCollection": {
            for (r = 0; r < n.geometries.length; r++) if (t(n.geometries[r], b, l, f, d) === !1) return !1;
            break;
          }
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
      b++;
    }
  }
  function ii(e, t) {
    as(e, function(i, r, a, n, s) {
      var o = i === null ? null : i.type;
      switch (o) {
        case null:
        case "Point":
        case "LineString":
        case "Polygon":
          return t(Ue(i, a, { bbox: n, id: s }), r, 0) === !1 ? !1 : void 0;
      }
      var u;
      switch (o) {
        case "MultiPoint":
          u = "Point";
          break;
        case "MultiLineString":
          u = "LineString";
          break;
        case "MultiPolygon":
          u = "Polygon";
          break;
      }
      for (var l = 0; l < i.coordinates.length; l++) {
        var f = i.coordinates[l], d = { type: u, coordinates: f };
        if (t(Ue(d, a), r, l) === !1) return !1;
      }
    });
  }
  function De(e, t = {}) {
    if (e.bbox != null && t.recompute !== !0) return e.bbox;
    let i = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return ti(e, (r) => {
      i[0] > r[0] && (i[0] = r[0]), i[1] > r[1] && (i[1] = r[1]), i[2] < r[0] && (i[2] = r[0]), i[3] < r[1] && (i[3] = r[1]);
    }), i;
  }
  function ri(e) {
    var t;
    if (e.bbox) t = e.bbox;
    else if (Array.isArray(e) && e.length === 4) t = e;
    else if (Array.isArray(e) && e.length === 6) t = [e[0], e[1], e[3], e[4]];
    else if (e.type === "Feature") t = De(e);
    else if (e.type === "FeatureCollection") t = De(e);
    else throw new Error("invalid geojson");
    return { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] };
  }
  var ns = class {
    constructor(e = 9) {
      this.tree = new is.default(e), this.tree.toBBox = ri;
    }
    insert(e) {
      if (e.type !== "Feature") throw new Error("invalid feature");
      return e.bbox = e.bbox ? e.bbox : De(e), this.tree.insert(e), this;
    }
    load(e) {
      var t = [];
      return Array.isArray(e) ? e.forEach(function(i) {
        if (i.type !== "Feature") throw new Error("invalid features");
        i.bbox = i.bbox ? i.bbox : De(i), t.push(i);
      }) : Pt(e, function(i) {
        if (i.type !== "Feature") throw new Error("invalid features");
        i.bbox = i.bbox ? i.bbox : De(i), t.push(i);
      }), this.tree.load(t), this;
    }
    remove(e, t) {
      if (e.type !== "Feature") throw new Error("invalid feature");
      return e.bbox = e.bbox ? e.bbox : De(e), this.tree.remove(e, t), this;
    }
    clear() {
      return this.tree.clear(), this;
    }
    search(e) {
      var t = this.tree.search(ri(e));
      return Ee(t);
    }
    collides(e) {
      return this.tree.collides(ri(e));
    }
    all() {
      let e = this.tree.all();
      return Ee(e);
    }
    toJSON() {
      return this.tree.toJSON();
    }
    fromJSON(e) {
      return this.tree.fromJSON(e), this;
    }
  };
  function Zi(e) {
    return new ns(e);
  }
  function ss(e, t) {
    if (t = t ?? {}, !Kn(t)) throw new Error("options is invalid");
    var i = t.precision, r = t.coordinates, a = t.mutate;
    if (i = i == null || isNaN(i) ? 6 : i, r = r == null || isNaN(r) ? 3 : r, !e) throw new Error("<geojson> is required");
    if (typeof i != "number") throw new Error("<precision> must be a number");
    if (typeof r != "number") throw new Error("<coordinates> must be a number");
    (a === !1 || a === void 0) && (e = JSON.parse(JSON.stringify(e)));
    var n = Math.pow(10, i);
    return ti(e, function(s) {
      os(s, n, r);
    }), e;
  }
  function os(e, t, i) {
    e.length > i && e.splice(i, e.length);
    for (var r = 0; r < e.length; r++) e[r] = Math.round(e[r] * t) / t;
    return e;
  }
  function Ae(e) {
    if (!e) throw new Error("coord is required");
    if (!Array.isArray(e)) {
      if (e.type === "Feature" && e.geometry !== null && e.geometry.type === "Point") return [...e.geometry.coordinates];
      if (e.type === "Point") return [...e.coordinates];
    }
    if (Array.isArray(e) && e.length >= 2 && !Array.isArray(e[0]) && !Array.isArray(e[1])) return [...e];
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
  }
  function He(e) {
    if (Array.isArray(e)) return e;
    if (e.type === "Feature") {
      if (e.geometry !== null) return e.geometry.coordinates;
    } else if (e.coordinates) return e.coordinates;
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
  }
  function St(e) {
    return e.type === "Feature" ? e.geometry : e;
  }
  function $i(e, t) {
    return e.type === "FeatureCollection" ? "FeatureCollection" : e.type === "GeometryCollection" ? "GeometryCollection" : e.type === "Feature" && e.geometry !== null ? e.geometry.type : e.type;
  }
  function us(e) {
    if (!e) throw new Error("geojson is required");
    let t = [];
    return ii(e, (i) => {
      ls(i, t);
    }), Ee(t);
  }
  function ls(e, t) {
    let i = [], r = e.geometry;
    if (r !== null) {
      switch (r.type) {
        case "Polygon":
          i = He(r);
          break;
        case "LineString":
          i = [He(r)];
      }
      i.forEach((a) => {
        hs(a, e.properties).forEach((n) => {
          n.id = t.length, t.push(n);
        });
      });
    }
  }
  function hs(e, t) {
    let i = [];
    return e.reduce((r, a) => {
      let n = Et([r, a], t);
      return n.bbox = ps(r, a), i.push(n), a;
    }), i;
  }
  function ps(e, t) {
    let i = e[0], r = e[1], a = t[0], n = t[1], s = i < a ? i : a, o = r < n ? r : n, u = i > a ? i : a, l = r > n ? r : n;
    return [s, o, u, l];
  }
  function ai(e, t, i = {}) {
    var r = Ae(e), a = Ae(t), n = tt(a[1] - r[1]), s = tt(a[0] - r[0]), o = tt(r[1]), u = tt(a[1]), l = Math.pow(Math.sin(n / 2), 2) + Math.pow(Math.sin(s / 2), 2) * Math.cos(o) * Math.cos(u);
    return Vn(2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l)), i.units);
  }
  var ds = Object.defineProperty, cs = Object.defineProperties, gs = Object.getOwnPropertyDescriptors, Ji = Object.getOwnPropertySymbols, fs = Object.prototype.hasOwnProperty, _s = Object.prototype.propertyIsEnumerable, Wi = (e, t, i) => t in e ? ds(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i, ms = (e, t) => {
    for (var i in t || (t = {})) fs.call(t, i) && Wi(e, i, t[i]);
    if (Ji) for (var i of Ji(t)) _s.call(t, i) && Wi(e, i, t[i]);
    return e;
  }, ys = (e, t) => cs(e, gs(t));
  function Ls(e, t, i = {}) {
    if (!e || !t) throw new Error("lines and inputPoint are required arguments");
    let r = Ae(t), a = et([1 / 0, 1 / 0], { lineStringIndex: -1, segmentIndex: -1, totalDistance: -1, lineDistance: -1, segmentDistance: -1, pointDistance: 1 / 0, multiFeatureIndex: -1, index: -1, location: -1, dist: 1 / 0 }), n = 0, s = 0, o = -1;
    return ii(e, function(u, l, f) {
      o !== f && (o = f, s = 0);
      let d = He(u), b = d.length - 2;
      for (let v = 0; v < d.length - 1; v++) {
        let D = et(d[v]), P = Ae(D), O = et(d[v + 1]), I = Ae(O), g = ai(D, O, i), M, w;
        I[0] === r[0] && I[1] === r[1] ? [M, w] = [I, !0] : P[0] === r[0] && P[1] === r[1] ? [M, w] = [P, !1] : [M, w] = vs(P, I, r);
        let R = ai(t, M, i);
        if (R < a.properties.pointDistance) {
          let T = ai(D, M, i);
          a = et(M, { lineStringIndex: f, segmentIndex: w && v + 1 <= b ? v + 1 : v, totalDistance: n + T, lineDistance: s + T, segmentDistance: T, pointDistance: R, multiFeatureIndex: -1, index: -1, location: -1, dist: 1 / 0 }), a.properties = ys(ms({}, a.properties), { multiFeatureIndex: a.properties.lineStringIndex, index: a.properties.segmentIndex, location: a.properties.totalDistance, dist: a.properties.pointDistance });
        }
        n += g, s += g;
      }
    }), a;
  }
  function Ye(e, t) {
    let [i, r, a] = e, [n, s, o] = t;
    return i * n + r * s + a * o;
  }
  function dt(e, t) {
    let [i, r, a] = e, [n, s, o] = t;
    return [r * o - a * s, a * n - i * o, i * s - r * n];
  }
  function Cs(e) {
    return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2));
  }
  function Qi(e) {
    let t = Cs(e);
    return [e[0] / t, e[1] / t, e[2] / t];
  }
  function ni(e) {
    let t = tt(e[1]), i = tt(e[0]);
    return [Math.cos(t) * Math.cos(i), Math.cos(t) * Math.sin(i), Math.sin(t)];
  }
  function bs(e) {
    let [t, i, r] = e, a = Math.min(Math.max(r, -1), 1), n = Ui(Math.asin(a));
    return [Ui(Math.atan2(i, t)), n];
  }
  function vs(e, t, i) {
    let r = ni(e), a = ni(t), n = ni(i), s = dt(r, a);
    if (s[0] === 0 && s[1] === 0 && s[2] === 0) return Ye(r, a) > 0 ? [[...t], !0] : [[...i], !1];
    let o = dt(s, n);
    if (o[0] === 0 && o[1] === 0 && o[2] === 0) return [[...t], !0];
    let u = dt(o, s), l = Qi(u), f = [-l[0], -l[1], -l[2]], d = Ye(n, l) > Ye(n, f) ? l : f, b = Qi(s), v = Ye(dt(r, d), b), D = Ye(dt(d, a), b);
    return v >= 0 && D >= 0 ? [bs(d), !1] : Ye(r, n) > Ye(a, n) ? [[...e], !1] : [[...t], !0];
  }
  function er(e, t) {
    if (!e) throw new Error("line is required");
    if (!t) throw new Error("splitter is required");
    let i = $i(e), r = $i(t);
    if (i !== "LineString") throw new Error("line must be LineString");
    if (r === "FeatureCollection") throw new Error("splitter cannot be a FeatureCollection");
    if (r === "GeometryCollection") throw new Error("splitter cannot be a GeometryCollection");
    var a = ss(t, { precision: 7 });
    switch (e.type !== "Feature" && (e = Ue(e)), r) {
      case "Point":
        return si(e, a);
      case "MultiPoint":
        return tr(e, a);
      case "LineString":
      case "MultiLineString":
      case "Polygon":
      case "MultiPolygon":
        return tr(e, Xi(e, a, { ignoreSelfIntersections: !0 }));
    }
  }
  function tr(e, t) {
    var i = [], r = Zi();
    return ii(t, function(a) {
      if (i.forEach(function(o, u) {
        o.id = u;
      }), !i.length) i = si(e, a).features, r.load(Ee(i));
      else {
        var n = r.search(a);
        if (n.features.length) {
          var s = ir(a, n);
          i = i.filter(function(o) {
            return o.id !== s.id;
          }), r.remove(s), Pt(si(s, a), function(o) {
            i.push(o), r.insert(o);
          });
        }
      }
    }), Ee(i);
  }
  function si(e, t) {
    var i = [], r = He(e)[0], a = He(e)[e.geometry.coordinates.length - 1];
    if (oi(r, Ae(t)) || oi(a, Ae(t))) return Ee([e]);
    var n = Zi(), s = us(e);
    n.load(s);
    var o = n.search(t);
    if (!o.features.length) return Ee([e]);
    var u = ir(t, o), l = [r], f = rs(s, function(d, b, v) {
      var D = He(b)[1], P = Ae(t);
      return v === u.id ? (d.push(P), i.push(Et(d)), oi(P, D) ? [P] : [P, D]) : (d.push(D), d);
    }, l);
    return f.length > 1 && i.push(Et(f)), Ee(i);
  }
  function ir(e, t) {
    if (!t.features.length) throw new Error("lines must contain features");
    if (t.features.length === 1) return t.features[0];
    var i, r = 1 / 0;
    return Pt(t, function(a) {
      var n = Ls(a, e), s = n.properties.dist;
      s < r && (i = a, r = s);
    }), i;
  }
  function oi(e, t) {
    return e[0] === t[0] && e[1] === t[1];
  }
  var ks = er, Re = 11102230246251565e-32, he = 134217729, Ms = (3 + 8 * Re) * Re;
  function ui(e, t, i, r, a) {
    let n, s, o, u, l = t[0], f = r[0], d = 0, b = 0;
    f > l == f > -l ? (n = l, l = t[++d]) : (n = f, f = r[++b]);
    let v = 0;
    if (d < e && b < i) for (f > l == f > -l ? (s = l + n, o = n - (s - l), l = t[++d]) : (s = f + n, o = n - (s - f), f = r[++b]), n = s, o !== 0 && (a[v++] = o); d < e && b < i; ) f > l == f > -l ? (s = n + l, u = s - n, o = n - (s - u) + (l - u), l = t[++d]) : (s = n + f, u = s - n, o = n - (s - u) + (f - u), f = r[++b]), n = s, o !== 0 && (a[v++] = o);
    for (; d < e; ) s = n + l, u = s - n, o = n - (s - u) + (l - u), l = t[++d], n = s, o !== 0 && (a[v++] = o);
    for (; b < i; ) s = n + f, u = s - n, o = n - (s - u) + (f - u), f = r[++b], n = s, o !== 0 && (a[v++] = o);
    return (n !== 0 || v === 0) && (a[v++] = n), v;
  }
  function xs(e, t) {
    let i = t[0];
    for (let r = 1; r < e; r++) i += t[r];
    return i;
  }
  function ct(e) {
    return new Float64Array(e);
  }
  var Es = (3 + 16 * Re) * Re, Bs = (2 + 12 * Re) * Re, ws = (9 + 64 * Re) * Re * Re, it = ct(4), rr = ct(8), ar = ct(12), nr = ct(16), ce = ct(4);
  function Ds(e, t, i, r, a, n, s) {
    let o, u, l, f, d, b, v, D, P, O, I, g, M, w, R, T, F, h, p = e - a, c = i - a, y = t - n, m = r - n;
    w = p * m, b = he * p, v = b - (b - p), D = p - v, b = he * m, P = b - (b - m), O = m - P, R = D * O - (w - v * P - D * P - v * O), T = y * c, b = he * y, v = b - (b - y), D = y - v, b = he * c, P = b - (b - c), O = c - P, F = D * O - (T - v * P - D * P - v * O), I = R - F, d = R - I, it[0] = R - (I + d) + (d - F), g = w + I, d = g - w, M = w - (g - d) + (I - d), I = M - T, d = M - I, it[1] = M - (I + d) + (d - T), h = g + I, d = h - g, it[2] = g - (h - d) + (I - d), it[3] = h;
    let _ = xs(4, it), x = Bs * s;
    if (_ >= x || -_ >= x || (d = e - p, o = e - (p + d) + (d - a), d = i - c, l = i - (c + d) + (d - a), d = t - y, u = t - (y + d) + (d - n), d = r - m, f = r - (m + d) + (d - n), o === 0 && u === 0 && l === 0 && f === 0) || (x = ws * s + Ms * Math.abs(_), _ += p * f + m * o - (y * l + c * u), _ >= x || -_ >= x)) return _;
    w = o * m, b = he * o, v = b - (b - o), D = o - v, b = he * m, P = b - (b - m), O = m - P, R = D * O - (w - v * P - D * P - v * O), T = u * c, b = he * u, v = b - (b - u), D = u - v, b = he * c, P = b - (b - c), O = c - P, F = D * O - (T - v * P - D * P - v * O), I = R - F, d = R - I, ce[0] = R - (I + d) + (d - F), g = w + I, d = g - w, M = w - (g - d) + (I - d), I = M - T, d = M - I, ce[1] = M - (I + d) + (d - T), h = g + I, d = h - g, ce[2] = g - (h - d) + (I - d), ce[3] = h;
    let C = ui(4, it, 4, ce, rr);
    w = p * f, b = he * p, v = b - (b - p), D = p - v, b = he * f, P = b - (b - f), O = f - P, R = D * O - (w - v * P - D * P - v * O), T = y * l, b = he * y, v = b - (b - y), D = y - v, b = he * l, P = b - (b - l), O = l - P, F = D * O - (T - v * P - D * P - v * O), I = R - F, d = R - I, ce[0] = R - (I + d) + (d - F), g = w + I, d = g - w, M = w - (g - d) + (I - d), I = M - T, d = M - I, ce[1] = M - (I + d) + (d - T), h = g + I, d = h - g, ce[2] = g - (h - d) + (I - d), ce[3] = h;
    let k = ui(C, rr, 4, ce, ar);
    w = o * f, b = he * o, v = b - (b - o), D = o - v, b = he * f, P = b - (b - f), O = f - P, R = D * O - (w - v * P - D * P - v * O), T = u * l, b = he * u, v = b - (b - u), D = u - v, b = he * l, P = b - (b - l), O = l - P, F = D * O - (T - v * P - D * P - v * O), I = R - F, d = R - I, ce[0] = R - (I + d) + (d - F), g = w + I, d = g - w, M = w - (g - d) + (I - d), I = M - T, d = M - I, ce[1] = M - (I + d) + (d - T), h = g + I, d = h - g, ce[2] = g - (h - d) + (I - d), ce[3] = h;
    let B = ui(k, ar, 4, ce, nr);
    return nr[B - 1];
  }
  function As(e, t, i, r, a, n) {
    let s = (t - n) * (i - a), o = (e - a) * (r - n), u = s - o, l = Math.abs(s + o);
    return Math.abs(u) >= Es * l ? u : -Ds(e, t, i, r, a, n, l);
  }
  function Ps(e, t) {
    var i, r, a = 0, n, s, o, u, l, f, d, b = e[0], v = e[1], D = t.length;
    for (i = 0; i < D; i++) {
      r = 0;
      var P = t[i], O = P.length - 1;
      if (f = P[0], f[0] !== P[O][0] && f[1] !== P[O][1]) throw new Error("First and last coordinates in a ring must be the same");
      for (s = f[0] - b, o = f[1] - v, r; r < O; r++) {
        if (d = P[r + 1], u = d[0] - b, l = d[1] - v, o === 0 && l === 0) {
          if (u <= 0 && s >= 0 || s <= 0 && u >= 0) return 0;
        } else if (l >= 0 && o <= 0 || l <= 0 && o >= 0) {
          if (n = As(s, u, o, l, 0, 0), n === 0) return 0;
          (n > 0 && l > 0 && o <= 0 || n < 0 && l <= 0 && o > 0) && a++;
        }
        f = d, o = l, s = u;
      }
    }
    return a % 2 !== 0;
  }
  function rt(e, t, i = {}) {
    if (!e) throw new Error("point is required");
    if (!t) throw new Error("polygon is required");
    let r = Ae(e), a = St(t), n = a.type, s = t.bbox, o = a.coordinates;
    if (s && Ss(r, s) === !1) return !1;
    n === "Polygon" && (o = [o]);
    let u = !1;
    for (var l = 0; l < o.length; ++l) {
      let f = Ps(r, o[l]);
      if (f === 0) return !i.ignoreBoundary;
      f && (u = !0);
    }
    return u;
  }
  function Ss(e, t) {
    return t[0] <= e[0] && t[1] <= e[1] && t[2] >= e[0] && t[3] >= e[1];
  }
  function gt(e, t, i = {}) {
    let r = Ae(e), a = He(t);
    for (let n = 0; n < a.length - 1; n++) {
      let s = !1;
      if (i.ignoreEndVertices && (n === 0 && (s = "start"), n === a.length - 2 && (s = "end"), n === 0 && n + 1 === a.length - 1 && (s = "both")), Ts(a[n], a[n + 1], r, s, typeof i.epsilon > "u" ? null : i.epsilon)) return !0;
    }
    return !1;
  }
  function Ts(e, t, i, r, a) {
    let n = i[0], s = i[1], o = e[0], u = e[1], l = t[0], f = t[1], d = i[0] - o, b = i[1] - u, v = l - o, D = f - u, P = d * D - b * v;
    if (a !== null) {
      if (Math.abs(P) > a) return !1;
    } else if (P !== 0) return !1;
    if (Math.abs(v) === Math.abs(D) && Math.abs(v) === 0) return r ? !1 : i[0] === e[0] && i[1] === e[1];
    if (r) {
      if (r === "start") return Math.abs(v) >= Math.abs(D) ? v > 0 ? o < n && n <= l : l <= n && n < o : D > 0 ? u < s && s <= f : f <= s && s < u;
      if (r === "end") return Math.abs(v) >= Math.abs(D) ? v > 0 ? o <= n && n < l : l < n && n <= o : D > 0 ? u <= s && s < f : f < s && s <= u;
      if (r === "both") return Math.abs(v) >= Math.abs(D) ? v > 0 ? o < n && n < l : l < n && n < o : D > 0 ? u < s && s < f : f < s && s < u;
    } else return Math.abs(v) >= Math.abs(D) ? v > 0 ? o <= n && n <= l : l <= n && n <= o : D > 0 ? u <= s && s <= f : f <= s && s <= u;
    return !1;
  }
  function Fs(e, t) {
    let i = St(e), r = St(t), a = i.type, n = r.type, s = i.coordinates, o = r.coordinates;
    switch (a) {
      case "Point":
        if (n === "Point") return hi(s, o);
        throw new Error("feature2 " + n + " geometry not supported");
      case "MultiPoint":
        switch (n) {
          case "Point":
            return Is(i, r);
          case "MultiPoint":
            return Gs(i, r);
          default:
            throw new Error("feature2 " + n + " geometry not supported");
        }
      case "LineString":
        switch (n) {
          case "Point":
            return gt(r, i, { ignoreEndVertices: !0 });
          case "LineString":
            return Ns(i, r);
          case "MultiPoint":
            return zs(i, r);
          default:
            throw new Error("feature2 " + n + " geometry not supported");
        }
      case "Polygon":
        switch (n) {
          case "Point":
            return rt(r, i, { ignoreBoundary: !0 });
          case "LineString":
            return Vs(i, r);
          case "Polygon":
            return li(i, r);
          case "MultiPoint":
            return js(i, r);
          case "MultiPolygon":
            return Os(i, r);
          default:
            throw new Error("feature2 " + n + " geometry not supported");
        }
      case "MultiPolygon":
        if (n === "Polygon") return Rs(i, r);
        throw new Error("feature2 " + n + " geometry not supported");
      default:
        throw new Error("feature1 " + a + " geometry not supported");
    }
  }
  function Rs(e, t) {
    return e.coordinates.some((i) => li({ type: "Polygon", coordinates: i }, t));
  }
  function Os(e, t) {
    return t.coordinates.every((i) => li(e, { type: "Polygon", coordinates: i }));
  }
  function Is(e, t) {
    let i, r = !1;
    for (i = 0; i < e.coordinates.length; i++) if (hi(e.coordinates[i], t.coordinates)) {
      r = !0;
      break;
    }
    return r;
  }
  function Gs(e, t) {
    for (let i of t.coordinates) {
      let r = !1;
      for (let a of e.coordinates) if (hi(i, a)) {
        r = !0;
        break;
      }
      if (!r) return !1;
    }
    return !0;
  }
  function zs(e, t) {
    let i = !1;
    for (let r of t.coordinates) if (gt(r, e, { ignoreEndVertices: !0 }) && (i = !0), !gt(r, e)) return !1;
    return !!i;
  }
  function js(e, t) {
    for (let i of t.coordinates) if (!rt(i, e, { ignoreBoundary: !0 })) return !1;
    return !0;
  }
  function Ns(e, t) {
    let i = !1;
    for (let r of t.coordinates) if (gt({ type: "Point", coordinates: r }, e, { ignoreEndVertices: !0 }) && (i = !0), !gt({ type: "Point", coordinates: r }, e, { ignoreEndVertices: !1 })) return !1;
    return i;
  }
  function Us(e, t) {
    let i = e.coordinates, r = [];
    for (let a = 0; a < i.length - 1; a++) {
      let n = Et([i[a], i[a + 1]]), s = er(n, Ue(t));
      s.features.length === 0 ? r.push(n) : r.push(...s.features);
    }
    return Ee(r);
  }
  function Vs(e, t) {
    let i = De(e), r = De(t);
    if (!sr(i, r)) return !1;
    for (let s of t.coordinates) if (!rt(s, e)) return !1;
    let a = !1, n = Us(t, e);
    for (let s of n.features) {
      let o = Ks(s.geometry.coordinates[0], s.geometry.coordinates[1]);
      if (!rt(o, e)) return !1;
      !a && rt(o, e, { ignoreBoundary: !0 }) && (a = !0);
    }
    return a;
  }
  function li(e, t) {
    if (e.type === "Feature" && e.geometry === null || t.type === "Feature" && t.geometry === null) return !1;
    let i = De(e), r = De(t);
    if (!sr(i, r)) return !1;
    let a = St(t).coordinates;
    for (let n of a) for (let s of n) if (!rt(s, e)) return !1;
    return !0;
  }
  function sr(e, t) {
    return !(e[0] > t[0] || e[2] < t[2] || e[1] > t[1] || e[3] < t[3]);
  }
  function hi(e, t) {
    return e[0] === t[0] && e[1] === t[1];
  }
  function Ks(e, t) {
    return [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2];
  }
  var qs = Fs, Hs = K(vt()), Ys = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, pi = Math.ceil, ve = Math.floor, me = "[BigNumber Error] ", or = me + "Number primitive has more than 15 significant digits: ", Be = 1e14, U = 14, di = 9007199254740991, ci = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ve = 1e7, ne = 1e9;
  function ur(e) {
    var t, i, r, a = g.prototype = { constructor: g, toString: null, valueOf: null }, n = new g(1), s = 20, o = 4, u = -7, l = 21, f = -1e7, d = 1e7, b = !1, v = 1, D = 0, P = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: " ", suffix: "" }, O = "0123456789abcdefghijklmnopqrstuvwxyz", I = !0;
    function g(h, p) {
      var c, y, m, _, x, C, k, B, E = this;
      if (!(E instanceof g)) return new g(h, p);
      if (p == null) {
        if (h && h._isBigNumber === !0) {
          E.s = h.s, !h.c || h.e > d ? E.c = E.e = null : h.e < f ? E.c = [E.e = 0] : (E.e = h.e, E.c = h.c.slice());
          return;
        }
        if ((C = typeof h == "number") && h * 0 == 0) {
          if (E.s = 1 / h < 0 ? (h = -h, -1) : 1, h === ~~h) {
            for (_ = 0, x = h; x >= 10; x /= 10, _++) ;
            _ > d ? E.c = E.e = null : (E.e = _, E.c = [h]);
            return;
          }
          B = String(h);
        } else {
          if (!Ys.test(B = String(h))) return r(E, B, C);
          E.s = B.charCodeAt(0) == 45 ? (B = B.slice(1), -1) : 1;
        }
        (_ = B.indexOf(".")) > -1 && (B = B.replace(".", "")), (x = B.search(/e/i)) > 0 ? (_ < 0 && (_ = x), _ += +B.slice(x + 1), B = B.substring(0, x)) : _ < 0 && (_ = B.length);
      } else {
        if ($(p, 2, O.length, "Base"), p == 10 && I) return E = new g(h), T(E, s + E.e + 1, o);
        if (B = String(h), C = typeof h == "number") {
          if (h * 0 != 0) return r(E, B, C, p);
          if (E.s = 1 / h < 0 ? (B = B.slice(1), -1) : 1, g.DEBUG && B.replace(/^0\.0*|\./, "").length > 15) throw Error(or + h);
        } else E.s = B.charCodeAt(0) === 45 ? (B = B.slice(1), -1) : 1;
        for (c = O.slice(0, p), _ = x = 0, k = B.length; x < k; x++) if (c.indexOf(y = B.charAt(x)) < 0) {
          if (y == ".") {
            if (x > _) {
              _ = k;
              continue;
            }
          } else if (!m && (B == B.toUpperCase() && (B = B.toLowerCase()) || B == B.toLowerCase() && (B = B.toUpperCase()))) {
            m = !0, x = -1, _ = 0;
            continue;
          }
          return r(E, String(h), C, p);
        }
        C = !1, B = i(B, p, 10, E.s), (_ = B.indexOf(".")) > -1 ? B = B.replace(".", "") : _ = B.length;
      }
      for (x = 0; B.charCodeAt(x) === 48; x++) ;
      for (k = B.length; B.charCodeAt(--k) === 48; ) ;
      if (B = B.slice(x, ++k)) {
        if (k -= x, C && g.DEBUG && k > 15 && (h > di || h !== ve(h))) throw Error(or + E.s * h);
        if ((_ = _ - x - 1) > d) E.c = E.e = null;
        else if (_ < f) E.c = [E.e = 0];
        else {
          if (E.e = _, E.c = [], x = (_ + 1) % U, _ < 0 && (x += U), x < k) {
            for (x && E.c.push(+B.slice(0, x)), k -= U; x < k; ) E.c.push(+B.slice(x, x += U));
            x = U - (B = B.slice(x)).length;
          } else x -= k;
          for (; x--; B += "0") ;
          E.c.push(+B);
        }
      } else E.c = [E.e = 0];
    }
    g.clone = ur, g.ROUND_UP = 0, g.ROUND_DOWN = 1, g.ROUND_CEIL = 2, g.ROUND_FLOOR = 3, g.ROUND_HALF_UP = 4, g.ROUND_HALF_DOWN = 5, g.ROUND_HALF_EVEN = 6, g.ROUND_HALF_CEIL = 7, g.ROUND_HALF_FLOOR = 8, g.EUCLID = 9, g.config = g.set = function(h) {
      var p, c;
      if (h != null) if (typeof h == "object") {
        if (h.hasOwnProperty(p = "DECIMAL_PLACES") && (c = h[p], $(c, 0, ne, p), s = c), h.hasOwnProperty(p = "ROUNDING_MODE") && (c = h[p], $(c, 0, 8, p), o = c), h.hasOwnProperty(p = "EXPONENTIAL_AT") && (c = h[p], c && c.pop ? ($(c[0], -ne, 0, p), $(c[1], 0, ne, p), u = c[0], l = c[1]) : ($(c, -ne, ne, p), u = -(l = c < 0 ? -c : c))), h.hasOwnProperty(p = "RANGE")) if (c = h[p], c && c.pop) $(c[0], -ne, -1, p), $(c[1], 1, ne, p), f = c[0], d = c[1];
        else if ($(c, -ne, ne, p), c) f = -(d = c < 0 ? -c : c);
        else throw Error(me + p + " cannot be zero: " + c);
        if (h.hasOwnProperty(p = "CRYPTO")) if (c = h[p], c === !!c) if (c) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) b = c;
        else throw b = !c, Error(me + "crypto unavailable");
        else b = c;
        else throw Error(me + p + " not true or false: " + c);
        if (h.hasOwnProperty(p = "MODULO_MODE") && (c = h[p], $(c, 0, 9, p), v = c), h.hasOwnProperty(p = "POW_PRECISION") && (c = h[p], $(c, 0, ne, p), D = c), h.hasOwnProperty(p = "FORMAT")) if (c = h[p], typeof c == "object") P = c;
        else throw Error(me + p + " not an object: " + c);
        if (h.hasOwnProperty(p = "ALPHABET")) if (c = h[p], typeof c == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(c)) I = c.slice(0, 10) == "0123456789", O = c;
        else throw Error(me + p + " invalid: " + c);
      } else throw Error(me + "Object expected: " + h);
      return { DECIMAL_PLACES: s, ROUNDING_MODE: o, EXPONENTIAL_AT: [u, l], RANGE: [f, d], CRYPTO: b, MODULO_MODE: v, POW_PRECISION: D, FORMAT: P, ALPHABET: O };
    }, g.isBigNumber = function(h) {
      if (!h || h._isBigNumber !== !0) return !1;
      if (!g.DEBUG) return !0;
      var p, c, y = h.c, m = h.e, _ = h.s;
      e: if ({}.toString.call(y) == "[object Array]") {
        if ((_ === 1 || _ === -1) && m >= -ne && m <= ne && m === ve(m)) {
          if (y[0] === 0) {
            if (m === 0 && y.length === 1) return !0;
            break e;
          }
          if (p = (m + 1) % U, p < 1 && (p += U), String(y[0]).length == p) {
            for (p = 0; p < y.length; p++) if (c = y[p], c < 0 || c >= Be || c !== ve(c)) break e;
            if (c !== 0) return !0;
          }
        }
      } else if (y === null && m === null && (_ === null || _ === 1 || _ === -1)) return !0;
      throw Error(me + "Invalid BigNumber: " + h);
    }, g.maximum = g.max = function() {
      return w(arguments, -1);
    }, g.minimum = g.min = function() {
      return w(arguments, 1);
    }, g.random = function() {
      var h = 9007199254740992, p = Math.random() * h & 2097151 ? function() {
        return ve(Math.random() * h);
      } : function() {
        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
      };
      return function(c) {
        var y, m, _, x, C, k = 0, B = [], E = new g(n);
        if (c == null ? c = s : $(c, 0, ne), x = pi(c / U), b) if (crypto.getRandomValues) {
          for (y = crypto.getRandomValues(new Uint32Array(x *= 2)); k < x; ) C = y[k] * 131072 + (y[k + 1] >>> 11), C >= 9e15 ? (m = crypto.getRandomValues(new Uint32Array(2)), y[k] = m[0], y[k + 1] = m[1]) : (B.push(C % 1e14), k += 2);
          k = x / 2;
        } else if (crypto.randomBytes) {
          for (y = crypto.randomBytes(x *= 7); k < x; ) C = (y[k] & 31) * 281474976710656 + y[k + 1] * 1099511627776 + y[k + 2] * 4294967296 + y[k + 3] * 16777216 + (y[k + 4] << 16) + (y[k + 5] << 8) + y[k + 6], C >= 9e15 ? crypto.randomBytes(7).copy(y, k) : (B.push(C % 1e14), k += 7);
          k = x / 7;
        } else throw b = !1, Error(me + "crypto unavailable");
        if (!b) for (; k < x; ) C = p(), C < 9e15 && (B[k++] = C % 1e14);
        for (x = B[--k], c %= U, x && c && (C = ci[U - c], B[k] = ve(x / C) * C); B[k] === 0; B.pop(), k--) ;
        if (k < 0) B = [_ = 0];
        else {
          for (_ = -1; B[0] === 0; B.splice(0, 1), _ -= U) ;
          for (k = 1, C = B[0]; C >= 10; C /= 10, k++) ;
          k < U && (_ -= U - k);
        }
        return E.e = _, E.c = B, E;
      };
    }(), g.sum = function() {
      for (var h = 1, p = arguments, c = new g(p[0]); h < p.length; ) c = c.plus(p[h++]);
      return c;
    }, i = /* @__PURE__ */ function() {
      var h = "0123456789";
      function p(c, y, m, _) {
        for (var x, C = [0], k, B = 0, E = c.length; B < E; ) {
          for (k = C.length; k--; C[k] *= y) ;
          for (C[0] += _.indexOf(c.charAt(B++)), x = 0; x < C.length; x++) C[x] > m - 1 && (C[x + 1] == null && (C[x + 1] = 0), C[x + 1] += C[x] / m | 0, C[x] %= m);
        }
        return C.reverse();
      }
      return function(c, y, m, _, x) {
        var C, k, B, E, S, G, z, N, J = c.indexOf("."), te = s, q = o;
        for (J >= 0 && (E = D, D = 0, c = c.replace(".", ""), N = new g(y), G = N.pow(c.length - J), D = E, N.c = p(Oe(Me(G.c), G.e, "0"), 10, m, h), N.e = N.c.length), z = p(c, y, m, x ? (C = O, h) : (C = h, O)), B = E = z.length; z[--E] == 0; z.pop()) ;
        if (!z[0]) return C.charAt(0);
        if (J < 0 ? --B : (G.c = z, G.e = B, G.s = _, G = t(G, N, te, q, m), z = G.c, S = G.r, B = G.e), k = B + te + 1, J = z[k], E = m / 2, S = S || k < 0 || z[k + 1] != null, S = q < 4 ? (J != null || S) && (q == 0 || q == (G.s < 0 ? 3 : 2)) : J > E || J == E && (q == 4 || S || q == 6 && z[k - 1] & 1 || q == (G.s < 0 ? 8 : 7)), k < 1 || !z[0]) c = S ? Oe(C.charAt(1), -te, C.charAt(0)) : C.charAt(0);
        else {
          if (z.length = k, S) for (--m; ++z[--k] > m; ) z[k] = 0, k || (++B, z = [1].concat(z));
          for (E = z.length; !z[--E]; ) ;
          for (J = 0, c = ""; J <= E; c += C.charAt(z[J++])) ;
          c = Oe(c, B, C.charAt(0));
        }
        return c;
      };
    }(), t = /* @__PURE__ */ function() {
      function h(y, m, _) {
        var x, C, k, B, E = 0, S = y.length, G = m % Ve, z = m / Ve | 0;
        for (y = y.slice(); S--; ) k = y[S] % Ve, B = y[S] / Ve | 0, x = z * k + B * G, C = G * k + x % Ve * Ve + E, E = (C / _ | 0) + (x / Ve | 0) + z * B, y[S] = C % _;
        return E && (y = [E].concat(y)), y;
      }
      function p(y, m, _, x) {
        var C, k;
        if (_ != x) k = _ > x ? 1 : -1;
        else for (C = k = 0; C < _; C++) if (y[C] != m[C]) {
          k = y[C] > m[C] ? 1 : -1;
          break;
        }
        return k;
      }
      function c(y, m, _, x) {
        for (var C = 0; _--; ) y[_] -= C, C = y[_] < m[_] ? 1 : 0, y[_] = C * x + y[_] - m[_];
        for (; !y[0] && y.length > 1; y.splice(0, 1)) ;
      }
      return function(y, m, _, x, C) {
        var k, B, E, S, G, z, N, J, te, q, Y, pe, Vt, yi, Li, Te, yt, xe = y.s == m.s ? 1 : -1, ge = y.c, W = m.c;
        if (!ge || !ge[0] || !W || !W[0]) return new g(!y.s || !m.s || (ge ? W && ge[0] == W[0] : !W) ? NaN : ge && ge[0] == 0 || !W ? xe * 0 : xe / 0);
        for (J = new g(xe), te = J.c = [], B = y.e - m.e, xe = _ + B + 1, C || (C = Be, B = ke(y.e / U) - ke(m.e / U), xe = xe / U | 0), E = 0; W[E] == (ge[E] || 0); E++) ;
        if (W[E] > (ge[E] || 0) && B--, xe < 0) te.push(1), S = !0;
        else {
          for (yi = ge.length, Te = W.length, E = 0, xe += 2, G = ve(C / (W[0] + 1)), G > 1 && (W = h(W, G, C), ge = h(ge, G, C), Te = W.length, yi = ge.length), Vt = Te, q = ge.slice(0, Te), Y = q.length; Y < Te; q[Y++] = 0) ;
          yt = W.slice(), yt = [0].concat(yt), Li = W[0], W[1] >= C / 2 && Li++;
          do {
            if (G = 0, k = p(W, q, Te, Y), k < 0) {
              if (pe = q[0], Te != Y && (pe = pe * C + (q[1] || 0)), G = ve(pe / Li), G > 1) for (G >= C && (G = C - 1), z = h(W, G, C), N = z.length, Y = q.length; p(z, q, N, Y) == 1; ) G--, c(z, Te < N ? yt : W, N, C), N = z.length, k = 1;
              else G == 0 && (k = G = 1), z = W.slice(), N = z.length;
              if (N < Y && (z = [0].concat(z)), c(q, z, Y, C), Y = q.length, k == -1) for (; p(W, q, Te, Y) < 1; ) G++, c(q, Te < Y ? yt : W, Y, C), Y = q.length;
            } else k === 0 && (G++, q = [0]);
            te[E++] = G, q[0] ? q[Y++] = ge[Vt] || 0 : (q = [ge[Vt]], Y = 1);
          } while ((Vt++ < yi || q[0] != null) && xe--);
          S = q[0] != null, te[0] || te.splice(0, 1);
        }
        if (C == Be) {
          for (E = 1, xe = te[0]; xe >= 10; xe /= 10, E++) ;
          T(J, _ + (J.e = E + B * U - 1) + 1, x, S);
        } else J.e = B, J.r = +S;
        return J;
      };
    }();
    function M(h, p, c, y) {
      var m, _, x, C, k;
      if (c == null ? c = o : $(c, 0, 8), !h.c) return h.toString();
      if (m = h.c[0], x = h.e, p == null) k = Me(h.c), k = y == 1 || y == 2 && (x <= u || x >= l) ? Ft(k, x) : Oe(k, x, "0");
      else if (h = T(new g(h), p, c), _ = h.e, k = Me(h.c), C = k.length, y == 1 || y == 2 && (p <= _ || _ <= u)) {
        for (; C < p; k += "0", C++) ;
        k = Ft(k, _);
      } else if (p -= x + (y === 2 && _ > x), k = Oe(k, _, "0"), _ + 1 > C) {
        if (--p > 0) for (k += "."; p--; k += "0") ;
      } else if (p += _ - C, p > 0) for (_ + 1 == C && (k += "."); p--; k += "0") ;
      return h.s < 0 && m ? "-" + k : k;
    }
    function w(h, p) {
      for (var c, y, m = 1, _ = new g(h[0]); m < h.length; m++) y = new g(h[m]), (!y.s || (c = Xe(_, y)) === p || c === 0 && _.s === p) && (_ = y);
      return _;
    }
    function R(h, p, c) {
      for (var y = 1, m = p.length; !p[--m]; p.pop()) ;
      for (m = p[0]; m >= 10; m /= 10, y++) ;
      return (c = y + c * U - 1) > d ? h.c = h.e = null : c < f ? h.c = [h.e = 0] : (h.e = c, h.c = p), h;
    }
    r = /* @__PURE__ */ function() {
      var h = /^(-?)0([xbo])(?=\w[\w.]*$)/i, p = /^([^.]+)\.$/, c = /^\.([^.]+)$/, y = /^-?(Infinity|NaN)$/, m = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
      return function(_, x, C, k) {
        var B, E = C ? x : x.replace(m, "");
        if (y.test(E)) _.s = isNaN(E) ? null : E < 0 ? -1 : 1;
        else {
          if (!C && (E = E.replace(h, function(S, G, z) {
            return B = (z = z.toLowerCase()) == "x" ? 16 : z == "b" ? 2 : 8, !k || k == B ? G : S;
          }), k && (B = k, E = E.replace(p, "$1").replace(c, "0.$1")), x != E)) return new g(E, B);
          if (g.DEBUG) throw Error(me + "Not a" + (k ? " base " + k : "") + " number: " + x);
          _.s = null;
        }
        _.c = _.e = null;
      };
    }();
    function T(h, p, c, y) {
      var m, _, x, C, k, B, E, S = h.c, G = ci;
      if (S) {
        e: {
          for (m = 1, C = S[0]; C >= 10; C /= 10, m++) ;
          if (_ = p - m, _ < 0) _ += U, x = p, k = S[B = 0], E = ve(k / G[m - x - 1] % 10);
          else if (B = pi((_ + 1) / U), B >= S.length) if (y) {
            for (; S.length <= B; S.push(0)) ;
            k = E = 0, m = 1, _ %= U, x = _ - U + 1;
          } else break e;
          else {
            for (k = C = S[B], m = 1; C >= 10; C /= 10, m++) ;
            _ %= U, x = _ - U + m, E = x < 0 ? 0 : ve(k / G[m - x - 1] % 10);
          }
          if (y = y || p < 0 || S[B + 1] != null || (x < 0 ? k : k % G[m - x - 1]), y = c < 4 ? (E || y) && (c == 0 || c == (h.s < 0 ? 3 : 2)) : E > 5 || E == 5 && (c == 4 || y || c == 6 && (_ > 0 ? x > 0 ? k / G[m - x] : 0 : S[B - 1]) % 10 & 1 || c == (h.s < 0 ? 8 : 7)), p < 1 || !S[0]) return S.length = 0, y ? (p -= h.e + 1, S[0] = G[(U - p % U) % U], h.e = -p || 0) : S[0] = h.e = 0, h;
          if (_ == 0 ? (S.length = B, C = 1, B--) : (S.length = B + 1, C = G[U - _], S[B] = x > 0 ? ve(k / G[m - x] % G[x]) * C : 0), y) for (; ; ) if (B == 0) {
            for (_ = 1, x = S[0]; x >= 10; x /= 10, _++) ;
            for (x = S[0] += C, C = 1; x >= 10; x /= 10, C++) ;
            _ != C && (h.e++, S[0] == Be && (S[0] = 1));
            break;
          } else {
            if (S[B] += C, S[B] != Be) break;
            S[B--] = 0, C = 1;
          }
          for (_ = S.length; S[--_] === 0; S.pop()) ;
        }
        h.e > d ? h.c = h.e = null : h.e < f && (h.c = [h.e = 0]);
      }
      return h;
    }
    function F(h) {
      var p, c = h.e;
      return c === null ? h.toString() : (p = Me(h.c), p = c <= u || c >= l ? Ft(p, c) : Oe(p, c, "0"), h.s < 0 ? "-" + p : p);
    }
    return a.absoluteValue = a.abs = function() {
      var h = new g(this);
      return h.s < 0 && (h.s = 1), h;
    }, a.comparedTo = function(h, p) {
      return Xe(this, new g(h, p));
    }, a.decimalPlaces = a.dp = function(h, p) {
      var c, y, m, _ = this;
      if (h != null) return $(h, 0, ne), p == null ? p = o : $(p, 0, 8), T(new g(_), h + _.e + 1, p);
      if (!(c = _.c)) return null;
      if (y = ((m = c.length - 1) - ke(this.e / U)) * U, m = c[m]) for (; m % 10 == 0; m /= 10, y--) ;
      return y < 0 && (y = 0), y;
    }, a.dividedBy = a.div = function(h, p) {
      return t(this, new g(h, p), s, o);
    }, a.dividedToIntegerBy = a.idiv = function(h, p) {
      return t(this, new g(h, p), 0, 1);
    }, a.exponentiatedBy = a.pow = function(h, p) {
      var c, y, m, _, x, C, k, B, E, S = this;
      if (h = new g(h), h.c && !h.isInteger()) throw Error(me + "Exponent not an integer: " + F(h));
      if (p != null && (p = new g(p)), C = h.e > 14, !S.c || !S.c[0] || S.c[0] == 1 && !S.e && S.c.length == 1 || !h.c || !h.c[0]) return E = new g(Math.pow(+F(S), C ? h.s * (2 - Tt(h)) : +F(h))), p ? E.mod(p) : E;
      if (k = h.s < 0, p) {
        if (p.c ? !p.c[0] : !p.s) return new g(NaN);
        y = !k && S.isInteger() && p.isInteger(), y && (S = S.mod(p));
      } else {
        if (h.e > 9 && (S.e > 0 || S.e < -1 || (S.e == 0 ? S.c[0] > 1 || C && S.c[1] >= 24e7 : S.c[0] < 8e13 || C && S.c[0] <= 9999975e7))) return _ = S.s < 0 && Tt(h) ? -0 : 0, S.e > -1 && (_ = 1 / _), new g(k ? 1 / _ : _);
        D && (_ = pi(D / U + 2));
      }
      for (C ? (c = new g(0.5), k && (h.s = 1), B = Tt(h)) : (m = Math.abs(+F(h)), B = m % 2), E = new g(n); ; ) {
        if (B) {
          if (E = E.times(S), !E.c) break;
          _ ? E.c.length > _ && (E.c.length = _) : y && (E = E.mod(p));
        }
        if (m) {
          if (m = ve(m / 2), m === 0) break;
          B = m % 2;
        } else if (h = h.times(c), T(h, h.e + 1, 1), h.e > 14) B = Tt(h);
        else {
          if (m = +F(h), m === 0) break;
          B = m % 2;
        }
        S = S.times(S), _ ? S.c && S.c.length > _ && (S.c.length = _) : y && (S = S.mod(p));
      }
      return y ? E : (k && (E = n.div(E)), p ? E.mod(p) : _ ? T(E, D, o, x) : E);
    }, a.integerValue = function(h) {
      var p = new g(this);
      return h == null ? h = o : $(h, 0, 8), T(p, p.e + 1, h);
    }, a.isEqualTo = a.eq = function(h, p) {
      return Xe(this, new g(h, p)) === 0;
    }, a.isFinite = function() {
      return !!this.c;
    }, a.isGreaterThan = a.gt = function(h, p) {
      return Xe(this, new g(h, p)) > 0;
    }, a.isGreaterThanOrEqualTo = a.gte = function(h, p) {
      return (p = Xe(this, new g(h, p))) === 1 || p === 0;
    }, a.isInteger = function() {
      return !!this.c && ke(this.e / U) > this.c.length - 2;
    }, a.isLessThan = a.lt = function(h, p) {
      return Xe(this, new g(h, p)) < 0;
    }, a.isLessThanOrEqualTo = a.lte = function(h, p) {
      return (p = Xe(this, new g(h, p))) === -1 || p === 0;
    }, a.isNaN = function() {
      return !this.s;
    }, a.isNegative = function() {
      return this.s < 0;
    }, a.isPositive = function() {
      return this.s > 0;
    }, a.isZero = function() {
      return !!this.c && this.c[0] == 0;
    }, a.minus = function(h, p) {
      var c, y, m, _, x = this, C = x.s;
      if (h = new g(h, p), p = h.s, !C || !p) return new g(NaN);
      if (C != p) return h.s = -p, x.plus(h);
      var k = x.e / U, B = h.e / U, E = x.c, S = h.c;
      if (!k || !B) {
        if (!E || !S) return E ? (h.s = -p, h) : new g(S ? x : NaN);
        if (!E[0] || !S[0]) return S[0] ? (h.s = -p, h) : new g(E[0] ? x : o == 3 ? -0 : 0);
      }
      if (k = ke(k), B = ke(B), E = E.slice(), C = k - B) {
        for ((_ = C < 0) ? (C = -C, m = E) : (B = k, m = S), m.reverse(), p = C; p--; m.push(0)) ;
        m.reverse();
      } else for (y = (_ = (C = E.length) < (p = S.length)) ? C : p, C = p = 0; p < y; p++) if (E[p] != S[p]) {
        _ = E[p] < S[p];
        break;
      }
      if (_ && (m = E, E = S, S = m, h.s = -h.s), p = (y = S.length) - (c = E.length), p > 0) for (; p--; E[c++] = 0) ;
      for (p = Be - 1; y > C; ) {
        if (E[--y] < S[y]) {
          for (c = y; c && !E[--c]; E[c] = p) ;
          --E[c], E[y] += Be;
        }
        E[y] -= S[y];
      }
      for (; E[0] == 0; E.splice(0, 1), --B) ;
      return E[0] ? R(h, E, B) : (h.s = o == 3 ? -1 : 1, h.c = [h.e = 0], h);
    }, a.modulo = a.mod = function(h, p) {
      var c, y, m = this;
      return h = new g(h, p), !m.c || !h.s || h.c && !h.c[0] ? new g(NaN) : !h.c || m.c && !m.c[0] ? new g(m) : (v == 9 ? (y = h.s, h.s = 1, c = t(m, h, 0, 3), h.s = y, c.s *= y) : c = t(m, h, 0, v), h = m.minus(c.times(h)), !h.c[0] && v == 1 && (h.s = m.s), h);
    }, a.multipliedBy = a.times = function(h, p) {
      var c, y, m, _, x, C, k, B, E, S, G, z, N, J, te, q = this, Y = q.c, pe = (h = new g(h, p)).c;
      if (!Y || !pe || !Y[0] || !pe[0]) return !q.s || !h.s || Y && !Y[0] && !pe || pe && !pe[0] && !Y ? h.c = h.e = h.s = null : (h.s *= q.s, !Y || !pe ? h.c = h.e = null : (h.c = [0], h.e = 0)), h;
      for (y = ke(q.e / U) + ke(h.e / U), h.s *= q.s, k = Y.length, S = pe.length, k < S && (N = Y, Y = pe, pe = N, m = k, k = S, S = m), m = k + S, N = []; m--; N.push(0)) ;
      for (J = Be, te = Ve, m = S; --m >= 0; ) {
        for (c = 0, G = pe[m] % te, z = pe[m] / te | 0, x = k, _ = m + x; _ > m; ) B = Y[--x] % te, E = Y[x] / te | 0, C = z * B + E * G, B = G * B + C % te * te + N[_] + c, c = (B / J | 0) + (C / te | 0) + z * E, N[_--] = B % J;
        N[_] = c;
      }
      return c ? ++y : N.splice(0, 1), R(h, N, y);
    }, a.negated = function() {
      var h = new g(this);
      return h.s = -h.s || null, h;
    }, a.plus = function(h, p) {
      var c, y = this, m = y.s;
      if (h = new g(h, p), p = h.s, !m || !p) return new g(NaN);
      if (m != p) return h.s = -p, y.minus(h);
      var _ = y.e / U, x = h.e / U, C = y.c, k = h.c;
      if (!_ || !x) {
        if (!C || !k) return new g(m / 0);
        if (!C[0] || !k[0]) return k[0] ? h : new g(C[0] ? y : m * 0);
      }
      if (_ = ke(_), x = ke(x), C = C.slice(), m = _ - x) {
        for (m > 0 ? (x = _, c = k) : (m = -m, c = C), c.reverse(); m--; c.push(0)) ;
        c.reverse();
      }
      for (m = C.length, p = k.length, m - p < 0 && (c = k, k = C, C = c, p = m), m = 0; p; ) m = (C[--p] = C[p] + k[p] + m) / Be | 0, C[p] = Be === C[p] ? 0 : C[p] % Be;
      return m && (C = [m].concat(C), ++x), R(h, C, x);
    }, a.precision = a.sd = function(h, p) {
      var c, y, m, _ = this;
      if (h != null && h !== !!h) return $(h, 1, ne), p == null ? p = o : $(p, 0, 8), T(new g(_), h, p);
      if (!(c = _.c)) return null;
      if (m = c.length - 1, y = m * U + 1, m = c[m]) {
        for (; m % 10 == 0; m /= 10, y--) ;
        for (m = c[0]; m >= 10; m /= 10, y++) ;
      }
      return h && _.e + 1 > y && (y = _.e + 1), y;
    }, a.shiftedBy = function(h) {
      return $(h, -di, di), this.times("1e" + h);
    }, a.squareRoot = a.sqrt = function() {
      var h, p, c, y, m, _ = this, x = _.c, C = _.s, k = _.e, B = s + 4, E = new g("0.5");
      if (C !== 1 || !x || !x[0]) return new g(!C || C < 0 && (!x || x[0]) ? NaN : x ? _ : 1 / 0);
      if (C = Math.sqrt(+F(_)), C == 0 || C == 1 / 0 ? (p = Me(x), (p.length + k) % 2 == 0 && (p += "0"), C = Math.sqrt(+p), k = ke((k + 1) / 2) - (k < 0 || k % 2), C == 1 / 0 ? p = "5e" + k : (p = C.toExponential(), p = p.slice(0, p.indexOf("e") + 1) + k), c = new g(p)) : c = new g(C + ""), c.c[0]) {
        for (k = c.e, C = k + B, C < 3 && (C = 0); ; ) if (m = c, c = E.times(m.plus(t(_, m, B, 1))), Me(m.c).slice(0, C) === (p = Me(c.c)).slice(0, C)) if (c.e < k && --C, p = p.slice(C - 3, C + 1), p == "9999" || !y && p == "4999") {
          if (!y && (T(m, m.e + s + 2, 0), m.times(m).eq(_))) {
            c = m;
            break;
          }
          B += 4, C += 4, y = 1;
        } else {
          (!+p || !+p.slice(1) && p.charAt(0) == "5") && (T(c, c.e + s + 2, 1), h = !c.times(c).eq(_));
          break;
        }
      }
      return T(c, c.e + s + 1, o, h);
    }, a.toExponential = function(h, p) {
      return h != null && ($(h, 0, ne), h++), M(this, h, p, 1);
    }, a.toFixed = function(h, p) {
      return h != null && ($(h, 0, ne), h = h + this.e + 1), M(this, h, p);
    }, a.toFormat = function(h, p, c) {
      var y, m = this;
      if (c == null) h != null && p && typeof p == "object" ? (c = p, p = null) : h && typeof h == "object" ? (c = h, h = p = null) : c = P;
      else if (typeof c != "object") throw Error(me + "Argument not an object: " + c);
      if (y = m.toFixed(h, p), m.c) {
        var _, x = y.split("."), C = +c.groupSize, k = +c.secondaryGroupSize, B = c.groupSeparator || "", E = x[0], S = x[1], G = m.s < 0, z = G ? E.slice(1) : E, N = z.length;
        if (k && (_ = C, C = k, k = _, N -= _), C > 0 && N > 0) {
          for (_ = N % C || C, E = z.substr(0, _); _ < N; _ += C) E += B + z.substr(_, C);
          k > 0 && (E += B + z.slice(_)), G && (E = "-" + E);
        }
        y = S ? E + (c.decimalSeparator || "") + ((k = +c.fractionGroupSize) ? S.replace(new RegExp("\\d{" + k + "}\\B", "g"), "$&" + (c.fractionGroupSeparator || "")) : S) : E;
      }
      return (c.prefix || "") + y + (c.suffix || "");
    }, a.toFraction = function(h) {
      var p, c, y, m, _, x, C, k, B, E, S, G, z = this, N = z.c;
      if (h != null && (C = new g(h), !C.isInteger() && (C.c || C.s !== 1) || C.lt(n))) throw Error(me + "Argument " + (C.isInteger() ? "out of range: " : "not an integer: ") + F(C));
      if (!N) return new g(z);
      for (p = new g(n), B = c = new g(n), y = k = new g(n), G = Me(N), _ = p.e = G.length - z.e - 1, p.c[0] = ci[(x = _ % U) < 0 ? U + x : x], h = !h || C.comparedTo(p) > 0 ? _ > 0 ? p : B : C, x = d, d = 1 / 0, C = new g(G), k.c[0] = 0; E = t(C, p, 0, 1), m = c.plus(E.times(y)), m.comparedTo(h) != 1; ) c = y, y = m, B = k.plus(E.times(m = B)), k = m, p = C.minus(E.times(m = p)), C = m;
      return m = t(h.minus(c), y, 0, 1), k = k.plus(m.times(B)), c = c.plus(m.times(y)), k.s = B.s = z.s, _ = _ * 2, S = t(B, y, _, o).minus(z).abs().comparedTo(t(k, c, _, o).minus(z).abs()) < 1 ? [B, y] : [k, c], d = x, S;
    }, a.toNumber = function() {
      return +F(this);
    }, a.toPrecision = function(h, p) {
      return h != null && $(h, 1, ne), M(this, h, p, 2);
    }, a.toString = function(h) {
      var p, c = this, y = c.s, m = c.e;
      return m === null ? y ? (p = "Infinity", y < 0 && (p = "-" + p)) : p = "NaN" : (h == null ? p = m <= u || m >= l ? Ft(Me(c.c), m) : Oe(Me(c.c), m, "0") : h === 10 && I ? (c = T(new g(c), s + m + 1, o), p = Oe(Me(c.c), c.e, "0")) : ($(h, 2, O.length, "Base"), p = i(Oe(Me(c.c), m, "0"), 10, h, y, !0)), y < 0 && c.c[0] && (p = "-" + p)), p;
    }, a.valueOf = a.toJSON = function() {
      return F(this);
    }, a._isBigNumber = !0, a[Symbol.toStringTag] = "BigNumber", a[Symbol.for("nodejs.util.inspect.custom")] = a.valueOf, e != null && g.set(e), g;
  }
  function ke(e) {
    var t = e | 0;
    return e > 0 || e === t ? t : t - 1;
  }
  function Me(e) {
    for (var t, i, r = 1, a = e.length, n = e[0] + ""; r < a; ) {
      for (t = e[r++] + "", i = U - t.length; i--; t = "0" + t) ;
      n += t;
    }
    for (a = n.length; n.charCodeAt(--a) === 48; ) ;
    return n.slice(0, a + 1 || 1);
  }
  function Xe(e, t) {
    var i, r, a = e.c, n = t.c, s = e.s, o = t.s, u = e.e, l = t.e;
    if (!s || !o) return null;
    if (i = a && !a[0], r = n && !n[0], i || r) return i ? r ? 0 : -o : s;
    if (s != o) return s;
    if (i = s < 0, r = u == l, !a || !n) return r ? 0 : !a ^ i ? 1 : -1;
    if (!r) return u > l ^ i ? 1 : -1;
    for (o = (u = a.length) < (l = n.length) ? u : l, s = 0; s < o; s++) if (a[s] != n[s]) return a[s] > n[s] ^ i ? 1 : -1;
    return u == l ? 0 : u > l ^ i ? 1 : -1;
  }
  function $(e, t, i, r) {
    if (e < t || e > i || e !== ve(e)) throw Error(me + (r || "Argument") + (typeof e == "number" ? e < t || e > i ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
  }
  function Tt(e) {
    var t = e.c.length - 1;
    return ke(e.e / U) == t && e.c[t] % 2 != 0;
  }
  function Ft(e, t) {
    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
  }
  function Oe(e, t, i) {
    var r, a;
    if (t < 0) {
      for (a = i + "."; ++t; a += i) ;
      e = a + e;
    } else if (r = e.length, ++t > r) {
      for (a = i, t -= r; --t; a += i) ;
      e += a;
    } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
    return e;
  }
  var Xs = ur(), Pe = Xs, Zs = class {
    constructor(e) {
      j(this, "key");
      j(this, "left", null);
      j(this, "right", null);
      this.key = e;
    }
  }, ft = class extends Zs {
    constructor(e) {
      super(e);
    }
  }, $s = class {
    constructor() {
      j(this, "size", 0);
      j(this, "modificationCount", 0);
      j(this, "splayCount", 0);
    }
    splay(e) {
      let t = this.root;
      if (t == null) return this.compare(e, e), -1;
      let i = null, r = null, a = null, n = null, s = t, o = this.compare, u;
      for (; ; ) if (u = o(s.key, e), u > 0) {
        let l = s.left;
        if (l == null || (u = o(l.key, e), u > 0 && (s.left = l.right, l.right = s, s = l, l = s.left, l == null))) break;
        i == null ? r = s : i.left = s, i = s, s = l;
      } else if (u < 0) {
        let l = s.right;
        if (l == null || (u = o(l.key, e), u < 0 && (s.right = l.left, l.left = s, s = l, l = s.right, l == null))) break;
        a == null ? n = s : a.right = s, a = s, s = l;
      } else break;
      return a != null && (a.right = s.left, s.left = n), i != null && (i.left = s.right, s.right = r), this.root !== s && (this.root = s, this.splayCount++), u;
    }
    splayMin(e) {
      let t = e, i = t.left;
      for (; i != null; ) {
        let r = i;
        t.left = r.right, r.right = t, t = r, i = t.left;
      }
      return t;
    }
    splayMax(e) {
      let t = e, i = t.right;
      for (; i != null; ) {
        let r = i;
        t.right = r.left, r.left = t, t = r, i = t.right;
      }
      return t;
    }
    _delete(e) {
      if (this.root == null || this.splay(e) != 0) return null;
      let t = this.root, i = t, r = t.left;
      if (this.size--, r == null) this.root = t.right;
      else {
        let a = t.right;
        t = this.splayMax(r), t.right = a, this.root = t;
      }
      return this.modificationCount++, i;
    }
    addNewRoot(e, t) {
      this.size++, this.modificationCount++;
      let i = this.root;
      if (i == null) {
        this.root = e;
        return;
      }
      t < 0 ? (e.left = i, e.right = i.right, i.right = null) : (e.right = i, e.left = i.left, i.left = null), this.root = e;
    }
    _first() {
      let e = this.root;
      return e == null ? null : (this.root = this.splayMin(e), this.root);
    }
    _last() {
      let e = this.root;
      return e == null ? null : (this.root = this.splayMax(e), this.root);
    }
    clear() {
      this.root = null, this.size = 0, this.modificationCount++;
    }
    has(e) {
      return this.validKey(e) && this.splay(e) == 0;
    }
    defaultCompare() {
      return (e, t) => e < t ? -1 : e > t ? 1 : 0;
    }
    wrap() {
      return { getRoot: () => this.root, setRoot: (e) => {
        this.root = e;
      }, getSize: () => this.size, getModificationCount: () => this.modificationCount, getSplayCount: () => this.splayCount, setSplayCount: (e) => {
        this.splayCount = e;
      }, splay: (e) => this.splay(e), has: (e) => this.has(e) };
    }
  }, Rt = class Lt extends $s {
    constructor(i, r) {
      super();
      j(this, "root", null);
      j(this, "compare");
      j(this, "validKey");
      j(this, vr, "[object Set]");
      this.compare = i ?? this.defaultCompare(), this.validKey = r ?? ((a) => a != null && a != null);
    }
    delete(i) {
      return this.validKey(i) ? this._delete(i) != null : !1;
    }
    deleteAll(i) {
      for (let r of i) this.delete(r);
    }
    forEach(i) {
      let r = this[Symbol.iterator](), a;
      for (; a = r.next(), !a.done; ) i(a.value, a.value, this);
    }
    add(i) {
      let r = this.splay(i);
      return r != 0 && this.addNewRoot(new ft(i), r), this;
    }
    addAndReturn(i) {
      let r = this.splay(i);
      return r != 0 && this.addNewRoot(new ft(i), r), this.root.key;
    }
    addAll(i) {
      for (let r of i) this.add(r);
    }
    isEmpty() {
      return this.root == null;
    }
    isNotEmpty() {
      return this.root != null;
    }
    single() {
      if (this.size == 0) throw "Bad state: No element";
      if (this.size > 1) throw "Bad state: Too many element";
      return this.root.key;
    }
    first() {
      if (this.size == 0) throw "Bad state: No element";
      return this._first().key;
    }
    last() {
      if (this.size == 0) throw "Bad state: No element";
      return this._last().key;
    }
    lastBefore(i) {
      if (i == null) throw "Invalid arguments(s)";
      if (this.root == null) return null;
      if (this.splay(i) < 0) return this.root.key;
      let r = this.root.left;
      if (r == null) return null;
      let a = r.right;
      for (; a != null; ) r = a, a = r.right;
      return r.key;
    }
    firstAfter(i) {
      if (i == null) throw "Invalid arguments(s)";
      if (this.root == null) return null;
      if (this.splay(i) > 0) return this.root.key;
      let r = this.root.right;
      if (r == null) return null;
      let a = r.left;
      for (; a != null; ) r = a, a = r.left;
      return r.key;
    }
    retainAll(i) {
      let r = new Lt(this.compare, this.validKey), a = this.modificationCount;
      for (let n of i) {
        if (a != this.modificationCount) throw "Concurrent modification during iteration.";
        this.validKey(n) && this.splay(n) == 0 && r.add(this.root.key);
      }
      r.size != this.size && (this.root = r.root, this.size = r.size, this.modificationCount++);
    }
    lookup(i) {
      return !this.validKey(i) || this.splay(i) != 0 ? null : this.root.key;
    }
    intersection(i) {
      let r = new Lt(this.compare, this.validKey);
      for (let a of this) i.has(a) && r.add(a);
      return r;
    }
    difference(i) {
      let r = new Lt(this.compare, this.validKey);
      for (let a of this) i.has(a) || r.add(a);
      return r;
    }
    union(i) {
      let r = this.clone();
      return r.addAll(i), r;
    }
    clone() {
      let i = new Lt(this.compare, this.validKey);
      return i.size = this.size, i.root = this.copyNode(this.root), i;
    }
    copyNode(i) {
      if (i == null) return null;
      function r(n, s) {
        let o, u;
        do {
          if (o = n.left, u = n.right, o != null) {
            let l = new ft(o.key);
            s.left = l, r(o, l);
          }
          if (u != null) {
            let l = new ft(u.key);
            s.right = l, n = u, s = l;
          }
        } while (u != null);
      }
      let a = new ft(i.key);
      return r(i, a), a;
    }
    toSet() {
      return this.clone();
    }
    entries() {
      return new Ws(this.wrap());
    }
    keys() {
      return this[Symbol.iterator]();
    }
    values() {
      return this[Symbol.iterator]();
    }
    [(kr = Symbol.iterator, vr = Symbol.toStringTag, kr)]() {
      return new Js(this.wrap());
    }
  }, lr = class {
    constructor(e) {
      j(this, "tree");
      j(this, "path", new Array());
      j(this, "modificationCount", null);
      j(this, "splayCount");
      this.tree = e, this.splayCount = e.getSplayCount();
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
    }
    current() {
      if (!this.path.length) return null;
      let e = this.path[this.path.length - 1];
      return this.getValue(e);
    }
    rebuildPath(e) {
      this.path.splice(0, this.path.length), this.tree.splay(e), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
    }
    findLeftMostDescendent(e) {
      for (; e != null; ) this.path.push(e), e = e.left;
    }
    moveNext() {
      if (this.modificationCount != this.tree.getModificationCount()) {
        if (this.modificationCount == null) {
          this.modificationCount = this.tree.getModificationCount();
          let i = this.tree.getRoot();
          for (; i != null; ) this.path.push(i), i = i.left;
          return this.path.length > 0;
        }
        throw "Concurrent modification during iteration.";
      }
      if (!this.path.length) return !1;
      this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
      let e = this.path[this.path.length - 1], t = e.right;
      if (t != null) {
        for (; t != null; ) this.path.push(t), t = t.left;
        return !0;
      }
      for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === e; ) e = this.path.pop();
      return this.path.length > 0;
    }
  }, Js = class extends lr {
    getValue(e) {
      return e.key;
    }
  }, Ws = class extends lr {
    getValue(e) {
      return [e.key, e.key];
    }
  }, hr = (e) => () => e, gi = (e) => {
    let t = e ? (i, r) => r.minus(i).abs().isLessThanOrEqualTo(e) : hr(!1);
    return (i, r) => t(i, r) ? 0 : i.comparedTo(r);
  };
  function Qs(e) {
    let t = e ? (i, r, a, n, s) => i.exponentiatedBy(2).isLessThanOrEqualTo(n.minus(r).exponentiatedBy(2).plus(s.minus(a).exponentiatedBy(2)).times(e)) : hr(!1);
    return (i, r, a) => {
      let n = i.x, s = i.y, o = a.x, u = a.y, l = s.minus(u).times(r.x.minus(o)).minus(n.minus(o).times(r.y.minus(u)));
      return t(l, n, s, o, u) ? 0 : l.comparedTo(0);
    };
  }
  var eo = (e) => e, to = (e) => {
    if (e) {
      let t = new Rt(gi(e)), i = new Rt(gi(e)), r = (n, s) => s.addAndReturn(n), a = (n) => ({ x: r(n.x, t), y: r(n.y, i) });
      return a({ x: new Pe(0), y: new Pe(0) }), a;
    }
    return eo;
  }, fi = (e) => ({ set: (t) => {
    Ie = fi(t);
  }, reset: () => fi(e), compare: gi(e), snap: to(e), orient: Qs(e) }), Ie = fi(), _t = (e, t) => e.ll.x.isLessThanOrEqualTo(t.x) && t.x.isLessThanOrEqualTo(e.ur.x) && e.ll.y.isLessThanOrEqualTo(t.y) && t.y.isLessThanOrEqualTo(e.ur.y), _i = (e, t) => {
    if (t.ur.x.isLessThan(e.ll.x) || e.ur.x.isLessThan(t.ll.x) || t.ur.y.isLessThan(e.ll.y) || e.ur.y.isLessThan(t.ll.y)) return null;
    let i = e.ll.x.isLessThan(t.ll.x) ? t.ll.x : e.ll.x, r = e.ur.x.isLessThan(t.ur.x) ? e.ur.x : t.ur.x, a = e.ll.y.isLessThan(t.ll.y) ? t.ll.y : e.ll.y, n = e.ur.y.isLessThan(t.ur.y) ? e.ur.y : t.ur.y;
    return { ll: { x: i, y: a }, ur: { x: r, y: n } };
  }, Ot = (e, t) => e.x.times(t.y).minus(e.y.times(t.x)), pr = (e, t) => e.x.times(t.x).plus(e.y.times(t.y)), It = (e) => pr(e, e).sqrt(), io = (e, t, i) => {
    let r = { x: t.x.minus(e.x), y: t.y.minus(e.y) }, a = { x: i.x.minus(e.x), y: i.y.minus(e.y) };
    return Ot(a, r).div(It(a)).div(It(r));
  }, ro = (e, t, i) => {
    let r = { x: t.x.minus(e.x), y: t.y.minus(e.y) }, a = { x: i.x.minus(e.x), y: i.y.minus(e.y) };
    return pr(a, r).div(It(a)).div(It(r));
  }, dr = (e, t, i) => t.y.isZero() ? null : { x: e.x.plus(t.x.div(t.y).times(i.minus(e.y))), y: i }, cr = (e, t, i) => t.x.isZero() ? null : { x: i, y: e.y.plus(t.y.div(t.x).times(i.minus(e.x))) }, ao = (e, t, i, r) => {
    if (t.x.isZero()) return cr(i, r, e.x);
    if (r.x.isZero()) return cr(e, t, i.x);
    if (t.y.isZero()) return dr(i, r, e.y);
    if (r.y.isZero()) return dr(e, t, i.y);
    let a = Ot(t, r);
    if (a.isZero()) return null;
    let n = { x: i.x.minus(e.x), y: i.y.minus(e.y) }, s = Ot(n, t).div(a), o = Ot(n, r).div(a), u = e.x.plus(o.times(t.x)), l = i.x.plus(s.times(r.x)), f = e.y.plus(o.times(t.y)), d = i.y.plus(s.times(r.y)), b = u.plus(l).div(2), v = f.plus(d).div(2);
    return { x: b, y: v };
  }, Se = class wr {
    constructor(t, i) {
      j(this, "point");
      j(this, "isLeft");
      j(this, "segment");
      j(this, "otherSE");
      j(this, "consumedBy");
      t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = i;
    }
    static compare(t, i) {
      let r = wr.comparePoints(t.point, i.point);
      return r !== 0 ? r : (t.point !== i.point && t.link(i), t.isLeft !== i.isLeft ? t.isLeft ? 1 : -1 : zt.compare(t.segment, i.segment));
    }
    static comparePoints(t, i) {
      return t.x.isLessThan(i.x) ? -1 : t.x.isGreaterThan(i.x) ? 1 : t.y.isLessThan(i.y) ? -1 : t.y.isGreaterThan(i.y) ? 1 : 0;
    }
    link(t) {
      if (t.point === this.point) throw new Error("Tried to link already linked events");
      let i = t.point.events;
      for (let r = 0, a = i.length; r < a; r++) {
        let n = i[r];
        this.point.events.push(n), n.point = this.point;
      }
      this.checkForConsuming();
    }
    checkForConsuming() {
      let t = this.point.events.length;
      for (let i = 0; i < t; i++) {
        let r = this.point.events[i];
        if (r.segment.consumedBy === void 0) for (let a = i + 1; a < t; a++) {
          let n = this.point.events[a];
          n.consumedBy === void 0 && r.otherSE.point.events === n.otherSE.point.events && r.segment.consume(n.segment);
        }
      }
    }
    getAvailableLinkedEvents() {
      let t = [];
      for (let i = 0, r = this.point.events.length; i < r; i++) {
        let a = this.point.events[i];
        a !== this && !a.segment.ringOut && a.segment.isInResult() && t.push(a);
      }
      return t;
    }
    getLeftmostComparator(t) {
      let i = /* @__PURE__ */ new Map(), r = (a) => {
        let n = a.otherSE;
        i.set(a, { sine: io(this.point, t.point, n.point), cosine: ro(this.point, t.point, n.point) });
      };
      return (a, n) => {
        i.has(a) || r(a), i.has(n) || r(n);
        let { sine: s, cosine: o } = i.get(a), { sine: u, cosine: l } = i.get(n);
        return s.isGreaterThanOrEqualTo(0) && u.isGreaterThanOrEqualTo(0) ? o.isLessThan(l) ? 1 : o.isGreaterThan(l) ? -1 : 0 : s.isLessThan(0) && u.isLessThan(0) ? o.isLessThan(l) ? -1 : o.isGreaterThan(l) ? 1 : 0 : u.isLessThan(s) ? -1 : u.isGreaterThan(s) ? 1 : 0;
      };
    }
  }, no = class bi {
    constructor(t) {
      j(this, "events");
      j(this, "poly");
      j(this, "_isExteriorRing");
      j(this, "_enclosingRing");
      this.events = t;
      for (let i = 0, r = t.length; i < r; i++) t[i].segment.ringOut = this;
      this.poly = null;
    }
    static factory(t) {
      let i = [];
      for (let r = 0, a = t.length; r < a; r++) {
        let n = t[r];
        if (!n.isInResult() || n.ringOut) continue;
        let s = null, o = n.leftSE, u = n.rightSE, l = [o], f = o.point, d = [];
        for (; s = o, o = u, l.push(o), o.point !== f; ) for (; ; ) {
          let b = o.getAvailableLinkedEvents();
          if (b.length === 0) {
            let P = l[0].point, O = l[l.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${P.x}, ${P.y}]. Last matching segment found ends at [${O.x}, ${O.y}].`);
          }
          if (b.length === 1) {
            u = b[0].otherSE;
            break;
          }
          let v = null;
          for (let P = 0, O = d.length; P < O; P++) if (d[P].point === o.point) {
            v = P;
            break;
          }
          if (v !== null) {
            let P = d.splice(v)[0], O = l.splice(P.index);
            O.unshift(O[0].otherSE), i.push(new bi(O.reverse()));
            continue;
          }
          d.push({ index: l.length, point: o.point });
          let D = o.getLeftmostComparator(s);
          u = b.sort(D)[0].otherSE;
          break;
        }
        i.push(new bi(l));
      }
      return i;
    }
    getGeom() {
      let t = this.events[0].point, i = [t];
      for (let l = 1, f = this.events.length - 1; l < f; l++) {
        let d = this.events[l].point, b = this.events[l + 1].point;
        Ie.orient(d, t, b) !== 0 && (i.push(d), t = d);
      }
      if (i.length === 1) return null;
      let r = i[0], a = i[1];
      Ie.orient(r, t, a) === 0 && i.shift(), i.push(i[0]);
      let n = this.isExteriorRing() ? 1 : -1, s = this.isExteriorRing() ? 0 : i.length - 1, o = this.isExteriorRing() ? i.length : -1, u = [];
      for (let l = s; l != o; l += n) u.push([i[l].x.toNumber(), i[l].y.toNumber()]);
      return u;
    }
    isExteriorRing() {
      if (this._isExteriorRing === void 0) {
        let t = this.enclosingRing();
        this._isExteriorRing = t ? !t.isExteriorRing() : !0;
      }
      return this._isExteriorRing;
    }
    enclosingRing() {
      return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
    }
    _calcEnclosingRing() {
      var a, n;
      let t = this.events[0];
      for (let s = 1, o = this.events.length; s < o; s++) {
        let u = this.events[s];
        Se.compare(t, u) > 0 && (t = u);
      }
      let i = t.segment.prevInResult(), r = i ? i.prevInResult() : null;
      for (; ; ) {
        if (!i) return null;
        if (!r) return i.ringOut;
        if (r.ringOut !== i.ringOut) return ((a = r.ringOut) == null ? void 0 : a.enclosingRing()) !== i.ringOut ? i.ringOut : (n = i.ringOut) == null ? void 0 : n.enclosingRing();
        i = r.prevInResult(), r = i ? i.prevInResult() : null;
      }
    }
  }, gr = class {
    constructor(e) {
      j(this, "exteriorRing");
      j(this, "interiorRings");
      this.exteriorRing = e, e.poly = this, this.interiorRings = [];
    }
    addInterior(e) {
      this.interiorRings.push(e), e.poly = this;
    }
    getGeom() {
      let e = this.exteriorRing.getGeom();
      if (e === null) return null;
      let t = [e];
      for (let i = 0, r = this.interiorRings.length; i < r; i++) {
        let a = this.interiorRings[i].getGeom();
        a !== null && t.push(a);
      }
      return t;
    }
  }, so = class {
    constructor(e) {
      j(this, "rings");
      j(this, "polys");
      this.rings = e, this.polys = this._composePolys(e);
    }
    getGeom() {
      let e = [];
      for (let t = 0, i = this.polys.length; t < i; t++) {
        let r = this.polys[t].getGeom();
        r !== null && e.push(r);
      }
      return e;
    }
    _composePolys(e) {
      var i;
      let t = [];
      for (let r = 0, a = e.length; r < a; r++) {
        let n = e[r];
        if (!n.poly) if (n.isExteriorRing()) t.push(new gr(n));
        else {
          let s = n.enclosingRing();
          s != null && s.poly || t.push(new gr(s)), (i = s == null ? void 0 : s.poly) == null || i.addInterior(n);
        }
      }
      return t;
    }
  }, oo = class {
    constructor(e, t = zt.compare) {
      j(this, "queue");
      j(this, "tree");
      j(this, "segments");
      this.queue = e, this.tree = new Rt(t), this.segments = [];
    }
    process(e) {
      let t = e.segment, i = [];
      if (e.consumedBy) return e.isLeft ? this.queue.delete(e.otherSE) : this.tree.delete(t), i;
      e.isLeft && this.tree.add(t);
      let r = t, a = t;
      do
        r = this.tree.lastBefore(r);
      while (r != null && r.consumedBy != null);
      do
        a = this.tree.firstAfter(a);
      while (a != null && a.consumedBy != null);
      if (e.isLeft) {
        let n = null;
        if (r) {
          let o = r.getIntersection(t);
          if (o !== null && (t.isAnEndpoint(o) || (n = o), !r.isAnEndpoint(o))) {
            let u = this._splitSafely(r, o);
            for (let l = 0, f = u.length; l < f; l++) i.push(u[l]);
          }
        }
        let s = null;
        if (a) {
          let o = a.getIntersection(t);
          if (o !== null && (t.isAnEndpoint(o) || (s = o), !a.isAnEndpoint(o))) {
            let u = this._splitSafely(a, o);
            for (let l = 0, f = u.length; l < f; l++) i.push(u[l]);
          }
        }
        if (n !== null || s !== null) {
          let o = null;
          n === null ? o = s : s === null ? o = n : o = Se.comparePoints(n, s) <= 0 ? n : s, this.queue.delete(t.rightSE), i.push(t.rightSE);
          let u = t.split(o);
          for (let l = 0, f = u.length; l < f; l++) i.push(u[l]);
        }
        i.length > 0 ? (this.tree.delete(t), i.push(e)) : (this.segments.push(t), t.prev = r);
      } else {
        if (r && a) {
          let n = r.getIntersection(a);
          if (n !== null) {
            if (!r.isAnEndpoint(n)) {
              let s = this._splitSafely(r, n);
              for (let o = 0, u = s.length; o < u; o++) i.push(s[o]);
            }
            if (!a.isAnEndpoint(n)) {
              let s = this._splitSafely(a, n);
              for (let o = 0, u = s.length; o < u; o++) i.push(s[o]);
            }
          }
        }
        this.tree.delete(t);
      }
      return i;
    }
    _splitSafely(e, t) {
      this.tree.delete(e);
      let i = e.rightSE;
      this.queue.delete(i);
      let r = e.split(t);
      return r.push(i), e.consumedBy === void 0 && this.tree.add(e), r;
    }
  }, uo = class {
    constructor() {
      j(this, "type");
      j(this, "numMultiPolys");
    }
    run(e, t, i) {
      mt.type = e;
      let r = [new _r(t, !0)];
      for (let u = 0, l = i.length; u < l; u++) r.push(new _r(i[u], !1));
      if (mt.numMultiPolys = r.length, mt.type === "difference") {
        let u = r[0], l = 1;
        for (; l < r.length; ) _i(r[l].bbox, u.bbox) !== null ? l++ : r.splice(l, 1);
      }
      if (mt.type === "intersection") for (let u = 0, l = r.length; u < l; u++) {
        let f = r[u];
        for (let d = u + 1, b = r.length; d < b; d++) if (_i(f.bbox, r[d].bbox) === null) return [];
      }
      let a = new Rt(Se.compare);
      for (let u = 0, l = r.length; u < l; u++) {
        let f = r[u].getSweepEvents();
        for (let d = 0, b = f.length; d < b; d++) a.add(f[d]);
      }
      let n = new oo(a), s = null;
      for (a.size != 0 && (s = a.first(), a.delete(s)); s; ) {
        let u = n.process(s);
        for (let l = 0, f = u.length; l < f; l++) {
          let d = u[l];
          d.consumedBy === void 0 && a.add(d);
        }
        a.size != 0 ? (s = a.first(), a.delete(s)) : s = null;
      }
      Ie.reset();
      let o = no.factory(n.segments);
      return new so(o).getGeom();
    }
  }, mt = new uo(), Gt = mt, lo = 0, zt = class Ht {
    constructor(t, i, r, a) {
      j(this, "id");
      j(this, "leftSE");
      j(this, "rightSE");
      j(this, "rings");
      j(this, "windings");
      j(this, "ringOut");
      j(this, "consumedBy");
      j(this, "prev");
      j(this, "_prevInResult");
      j(this, "_beforeState");
      j(this, "_afterState");
      j(this, "_isInResult");
      this.id = ++lo, this.leftSE = t, t.segment = this, t.otherSE = i, this.rightSE = i, i.segment = this, i.otherSE = t, this.rings = r, this.windings = a;
    }
    static compare(t, i) {
      let r = t.leftSE.point.x, a = i.leftSE.point.x, n = t.rightSE.point.x, s = i.rightSE.point.x;
      if (s.isLessThan(r)) return 1;
      if (n.isLessThan(a)) return -1;
      let o = t.leftSE.point.y, u = i.leftSE.point.y, l = t.rightSE.point.y, f = i.rightSE.point.y;
      if (r.isLessThan(a)) {
        if (u.isLessThan(o) && u.isLessThan(l)) return 1;
        if (u.isGreaterThan(o) && u.isGreaterThan(l)) return -1;
        let d = t.comparePoint(i.leftSE.point);
        if (d < 0) return 1;
        if (d > 0) return -1;
        let b = i.comparePoint(t.rightSE.point);
        return b !== 0 ? b : -1;
      }
      if (r.isGreaterThan(a)) {
        if (o.isLessThan(u) && o.isLessThan(f)) return -1;
        if (o.isGreaterThan(u) && o.isGreaterThan(f)) return 1;
        let d = i.comparePoint(t.leftSE.point);
        if (d !== 0) return d;
        let b = t.comparePoint(i.rightSE.point);
        return b < 0 ? 1 : b > 0 ? -1 : 1;
      }
      if (o.isLessThan(u)) return -1;
      if (o.isGreaterThan(u)) return 1;
      if (n.isLessThan(s)) {
        let d = i.comparePoint(t.rightSE.point);
        if (d !== 0) return d;
      }
      if (n.isGreaterThan(s)) {
        let d = t.comparePoint(i.rightSE.point);
        if (d < 0) return 1;
        if (d > 0) return -1;
      }
      if (!n.eq(s)) {
        let d = l.minus(o), b = n.minus(r), v = f.minus(u), D = s.minus(a);
        if (d.isGreaterThan(b) && v.isLessThan(D)) return 1;
        if (d.isLessThan(b) && v.isGreaterThan(D)) return -1;
      }
      return n.isGreaterThan(s) ? 1 : n.isLessThan(s) || l.isLessThan(f) ? -1 : l.isGreaterThan(f) ? 1 : t.id < i.id ? -1 : t.id > i.id ? 1 : 0;
    }
    static fromRing(t, i, r) {
      let a, n, s, o = Se.comparePoints(t, i);
      if (o < 0) a = t, n = i, s = 1;
      else if (o > 0) a = i, n = t, s = -1;
      else throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);
      let u = new Se(a, !0), l = new Se(n, !1);
      return new Ht(u, l, [r], [s]);
    }
    replaceRightSE(t) {
      this.rightSE = t, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
    }
    bbox() {
      let t = this.leftSE.point.y, i = this.rightSE.point.y;
      return { ll: { x: this.leftSE.point.x, y: t.isLessThan(i) ? t : i }, ur: { x: this.rightSE.point.x, y: t.isGreaterThan(i) ? t : i } };
    }
    vector() {
      return { x: this.rightSE.point.x.minus(this.leftSE.point.x), y: this.rightSE.point.y.minus(this.leftSE.point.y) };
    }
    isAnEndpoint(t) {
      return t.x.eq(this.leftSE.point.x) && t.y.eq(this.leftSE.point.y) || t.x.eq(this.rightSE.point.x) && t.y.eq(this.rightSE.point.y);
    }
    comparePoint(t) {
      return Ie.orient(this.leftSE.point, t, this.rightSE.point);
    }
    getIntersection(t) {
      let i = this.bbox(), r = t.bbox(), a = _i(i, r);
      if (a === null) return null;
      let n = this.leftSE.point, s = this.rightSE.point, o = t.leftSE.point, u = t.rightSE.point, l = _t(i, o) && this.comparePoint(o) === 0, f = _t(r, n) && t.comparePoint(n) === 0, d = _t(i, u) && this.comparePoint(u) === 0, b = _t(r, s) && t.comparePoint(s) === 0;
      if (f && l) return b && !d ? s : !b && d ? u : null;
      if (f) return d && n.x.eq(u.x) && n.y.eq(u.y) ? null : n;
      if (l) return b && s.x.eq(o.x) && s.y.eq(o.y) ? null : o;
      if (b && d) return null;
      if (b) return s;
      if (d) return u;
      let v = ao(n, this.vector(), o, t.vector());
      return v === null || !_t(a, v) ? null : Ie.snap(v);
    }
    split(t) {
      let i = [], r = t.events !== void 0, a = new Se(t, !0), n = new Se(t, !1), s = this.rightSE;
      this.replaceRightSE(n), i.push(n), i.push(a);
      let o = new Ht(a, s, this.rings.slice(), this.windings.slice());
      return Se.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), Se.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), r && (a.checkForConsuming(), n.checkForConsuming()), i;
    }
    swapEvents() {
      let t = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = t, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (let i = 0, r = this.windings.length; i < r; i++) this.windings[i] *= -1;
    }
    consume(t) {
      let i = this, r = t;
      for (; i.consumedBy; ) i = i.consumedBy;
      for (; r.consumedBy; ) r = r.consumedBy;
      let a = Ht.compare(i, r);
      if (a !== 0) {
        if (a > 0) {
          let n = i;
          i = r, r = n;
        }
        if (i.prev === r) {
          let n = i;
          i = r, r = n;
        }
        for (let n = 0, s = r.rings.length; n < s; n++) {
          let o = r.rings[n], u = r.windings[n], l = i.rings.indexOf(o);
          l === -1 ? (i.rings.push(o), i.windings.push(u)) : i.windings[l] += u;
        }
        r.rings = null, r.windings = null, r.consumedBy = i, r.leftSE.consumedBy = i.leftSE, r.rightSE.consumedBy = i.rightSE;
      }
    }
    prevInResult() {
      return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
    }
    beforeState() {
      if (this._beforeState !== void 0) return this._beforeState;
      if (!this.prev) this._beforeState = { rings: [], windings: [], multiPolys: [] };
      else {
        let t = this.prev.consumedBy || this.prev;
        this._beforeState = t.afterState();
      }
      return this._beforeState;
    }
    afterState() {
      if (this._afterState !== void 0) return this._afterState;
      let t = this.beforeState();
      this._afterState = { rings: t.rings.slice(0), windings: t.windings.slice(0), multiPolys: [] };
      let i = this._afterState.rings, r = this._afterState.windings, a = this._afterState.multiPolys;
      for (let o = 0, u = this.rings.length; o < u; o++) {
        let l = this.rings[o], f = this.windings[o], d = i.indexOf(l);
        d === -1 ? (i.push(l), r.push(f)) : r[d] += f;
      }
      let n = [], s = [];
      for (let o = 0, u = i.length; o < u; o++) {
        if (r[o] === 0) continue;
        let l = i[o], f = l.poly;
        if (s.indexOf(f) === -1) if (l.isExterior) n.push(f);
        else {
          s.indexOf(f) === -1 && s.push(f);
          let d = n.indexOf(l.poly);
          d !== -1 && n.splice(d, 1);
        }
      }
      for (let o = 0, u = n.length; o < u; o++) {
        let l = n[o].multiPoly;
        a.indexOf(l) === -1 && a.push(l);
      }
      return this._afterState;
    }
    isInResult() {
      if (this.consumedBy) return !1;
      if (this._isInResult !== void 0) return this._isInResult;
      let t = this.beforeState().multiPolys, i = this.afterState().multiPolys;
      switch (Gt.type) {
        case "union": {
          let r = t.length === 0, a = i.length === 0;
          this._isInResult = r !== a;
          break;
        }
        case "intersection": {
          let r, a;
          t.length < i.length ? (r = t.length, a = i.length) : (r = i.length, a = t.length), this._isInResult = a === Gt.numMultiPolys && r < a;
          break;
        }
        case "xor": {
          let r = Math.abs(t.length - i.length);
          this._isInResult = r % 2 === 1;
          break;
        }
        case "difference": {
          let r = (a) => a.length === 1 && a[0].isSubject;
          this._isInResult = r(t) !== r(i);
          break;
        }
      }
      return this._isInResult;
    }
  }, fr = class {
    constructor(e, t, i) {
      j(this, "poly");
      j(this, "isExterior");
      j(this, "segments");
      j(this, "bbox");
      if (!Array.isArray(e) || e.length === 0) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      if (this.poly = t, this.isExterior = i, this.segments = [], typeof e[0][0] != "number" || typeof e[0][1] != "number") throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let r = Ie.snap({ x: new Pe(e[0][0]), y: new Pe(e[0][1]) });
      this.bbox = { ll: { x: r.x, y: r.y }, ur: { x: r.x, y: r.y } };
      let a = r;
      for (let n = 1, s = e.length; n < s; n++) {
        if (typeof e[n][0] != "number" || typeof e[n][1] != "number") throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
        let o = Ie.snap({ x: new Pe(e[n][0]), y: new Pe(e[n][1]) });
        o.x.eq(a.x) && o.y.eq(a.y) || (this.segments.push(zt.fromRing(a, o, this)), o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x), o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y), o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x), o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y), a = o);
      }
      (!r.x.eq(a.x) || !r.y.eq(a.y)) && this.segments.push(zt.fromRing(a, r, this));
    }
    getSweepEvents() {
      let e = [];
      for (let t = 0, i = this.segments.length; t < i; t++) {
        let r = this.segments[t];
        e.push(r.leftSE), e.push(r.rightSE);
      }
      return e;
    }
  }, ho = class {
    constructor(e, t) {
      j(this, "multiPoly");
      j(this, "exteriorRing");
      j(this, "interiorRings");
      j(this, "bbox");
      if (!Array.isArray(e)) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      this.exteriorRing = new fr(e[0], this, !0), this.bbox = { ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y }, ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y } }, this.interiorRings = [];
      for (let i = 1, r = e.length; i < r; i++) {
        let a = new fr(e[i], this, !1);
        a.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = a.bbox.ll.x), a.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = a.bbox.ll.y), a.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = a.bbox.ur.x), a.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = a.bbox.ur.y), this.interiorRings.push(a);
      }
      this.multiPoly = t;
    }
    getSweepEvents() {
      let e = this.exteriorRing.getSweepEvents();
      for (let t = 0, i = this.interiorRings.length; t < i; t++) {
        let r = this.interiorRings[t].getSweepEvents();
        for (let a = 0, n = r.length; a < n; a++) e.push(r[a]);
      }
      return e;
    }
  }, _r = class {
    constructor(e, t) {
      j(this, "isSubject");
      j(this, "polys");
      j(this, "bbox");
      if (!Array.isArray(e)) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      try {
        typeof e[0][0][0] == "number" && (e = [e]);
      } catch {
      }
      this.polys = [], this.bbox = { ll: { x: new Pe(Number.POSITIVE_INFINITY), y: new Pe(Number.POSITIVE_INFINITY) }, ur: { x: new Pe(Number.NEGATIVE_INFINITY), y: new Pe(Number.NEGATIVE_INFINITY) } };
      for (let i = 0, r = e.length; i < r; i++) {
        let a = new ho(e[i], this);
        a.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = a.bbox.ll.x), a.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = a.bbox.ll.y), a.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = a.bbox.ur.x), a.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = a.bbox.ur.y), this.polys.push(a);
      }
      this.isSubject = t;
    }
    getSweepEvents() {
      let e = [];
      for (let t = 0, i = this.polys.length; t < i; t++) {
        let r = this.polys[t].getSweepEvents();
        for (let a = 0, n = r.length; a < n; a++) e.push(r[a]);
      }
      return e;
    }
  }, po = (e, ...t) => Gt.run("intersection", e, t), co = (e, ...t) => Gt.run("difference", e, t);
  Ie.set;
  function jt(e) {
    let t = { type: "Feature" };
    return t.geometry = e, t;
  }
  function Nt(e) {
    return e.type === "Feature" ? e.geometry : e;
  }
  function mr(e) {
    return e && e.geometry && e.geometry.coordinates ? e.geometry.coordinates : e;
  }
  function go(e) {
    return jt({ type: "LineString", coordinates: e });
  }
  function fo(e) {
    return jt({ type: "MultiLineString", coordinates: e });
  }
  function yr(e) {
    return jt({ type: "Polygon", coordinates: e });
  }
  function Lr(e) {
    return jt({ type: "MultiPolygon", coordinates: e });
  }
  function _o(e, t) {
    let i = Nt(e), r = Nt(t), a = po(i.coordinates, r.coordinates);
    return a.length === 0 ? null : a.length === 1 ? yr(a[0]) : Lr(a);
  }
  function mo(e, t) {
    let i = Nt(e), r = Nt(t), a = co(i.coordinates, r.coordinates);
    return a.length === 0 ? null : a.length === 1 ? yr(a[0]) : Lr(a);
  }
  function Cr(e) {
    return Array.isArray(e) ? 1 + Cr(e[0]) : -1;
  }
  function yo(e) {
    e instanceof L.Polyline && (e = e.toGeoJSON(15));
    let t = mr(e), i = Cr(t), r = [];
    return i > 1 ? t.forEach((a) => {
      r.push(go(a));
    }) : r.push(e), r;
  }
  function Lo(e) {
    let t = [];
    return e.eachLayer((i) => {
      t.push(mr(i.toGeoJSON(15)));
    }), fo(t);
  }
  oe.Cut = oe.Polygon.extend({ initialize(e) {
    this._map = e, this._shape = "Cut", this.toolbarButtonName = "cutPolygon";
  }, _finishShape() {
    if (this._editedLayers = [], !this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    let e = this._layer.getLatLngs();
    if (e.length <= 2) return;
    let t = L.polygon(e, this.options.pathOptions);
    t._latlngInfos = this._layer._latlngInfo, this.cut(t), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex, this._editedLayers.forEach(({ layer: r, originalLayer: a }) => {
      this._fireCut(a, r, a), this._fireCut(this._map, r, a), a.pm._fireEdit();
    }), this._editedLayers = [];
    let i = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(i));
  }, cut(e) {
    let t = this._map._layers, i = e._latlngInfos || [];
    Object.keys(t).map((r) => t[r]).filter((r) => r.pm).filter((r) => !r._pmTempLayer).filter((r) => !L.PM.optIn && !r.options.pmIgnore || L.PM.optIn && r.options.pmIgnore === !1).filter((r) => r instanceof L.Polyline).filter((r) => r !== e).filter((r) => r.pm.options.allowCutting).filter((r) => this.options.layersToCut && L.Util.isArray(this.options.layersToCut) && this.options.layersToCut.length > 0 ? this.options.layersToCut.indexOf(r) > -1 : !0).filter((r) => !this._layerGroup.hasLayer(r)).filter((r) => {
      try {
        let a = !!pt(e.toGeoJSON(15), r.toGeoJSON(15)).features.length > 0;
        return a || r instanceof L.Polyline && !(r instanceof L.Polygon) ? a : !!_o(e.toGeoJSON(15), r.toGeoJSON(15));
      } catch {
        return r instanceof L.Polygon && console.error("You can't cut polygons with self-intersections"), !1;
      }
    }).forEach((r) => {
      let a;
      if (r instanceof L.Polygon) {
        a = L.polygon(r.getLatLngs());
        let u = a.getLatLngs();
        i.forEach((l) => {
          if (l && l.snapInfo) {
            let { latlng: f } = l, d = this._calcClosestLayer(f, [a]);
            if (d && d.segment && d.distance < this.options.snapDistance) {
              let { segment: b } = d;
              if (b && b.length === 2) {
                let { indexPath: v, parentPath: D, newIndex: P } = L.PM.Utils._getIndexFromSegment(u, b);
                (v.length > 1 ? (0, Hs.default)(u, D) : u).splice(P, 0, f);
              }
            }
          }
        });
      } else a = r;
      let n = this._cutLayer(e, a), s = L.geoJSON(n, r.options);
      s.getLayers().length === 1 && ([s] = s.getLayers()), this._setPane(s, "layerPane");
      let o = s.addTo(this._map.pm._getContainingLayer());
      if (o.pm.enable(r.pm.options), o.pm.disable(), r._pmTempLayer = !0, e._pmTempLayer = !0, r.remove(), r.removeFrom(this._map.pm._getContainingLayer()), e.remove(), e.removeFrom(this._map.pm._getContainingLayer()), o.getLayers && o.getLayers().length === 0 && this._map.pm.removeLayer({ target: o }), o instanceof L.LayerGroup ? (o.eachLayer((u) => {
        this._addDrawnLayerProp(u);
      }), this._addDrawnLayerProp(o)) : this._addDrawnLayerProp(o), this.options.layersToCut && L.Util.isArray(this.options.layersToCut) && this.options.layersToCut.length > 0) {
        let u = this.options.layersToCut.indexOf(r);
        u > -1 && this.options.layersToCut.splice(u, 1);
      }
      this._editedLayers.push({ layer: o, originalLayer: r });
    });
  }, _cutLayer(e, t) {
    let i = L.geoJSON(), r;
    if (t instanceof L.Polygon) r = mo(t.toGeoJSON(15), e.toGeoJSON(15));
    else {
      let a = yo(t);
      a.forEach((n) => {
        let s = ks(n, e.toGeoJSON(15)), o;
        s && s.features.length > 0 ? o = L.geoJSON(s) : o = L.geoJSON(n), o.getLayers().forEach((u) => {
          qs(e.toGeoJSON(15), u.toGeoJSON(15)) || u.addTo(i);
        });
      }), a.length > 1 ? r = Lo(i) : r = i.toGeoJSON(15);
    }
    return r;
  }, _change: L.Util.falseFn }), oe.Text = oe.extend({ initialize(e) {
    this._map = e, this._shape = "Text", this.toolbarButtonName = "drawText";
  }, enable(e) {
    L.Util.setOptions(this, e), this._enabled = !0, this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._hintMarker = L.marker(this._map.getCenter(), { interactive: !1, zIndexOffset: 100, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.placeText"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._layer = this._hintMarker, this._map.on("mousemove", this._syncHintMarker, this), this._map.getContainer().classList.add("geoman-draw-cursor"), this._fireDrawStart(), this._setGlobalDrawMode();
  }, disable() {
    var e;
    this._enabled && (this._enabled = !1, this._map.off("click", this._createMarker, this), (e = this._hintMarker) == null || e.remove(), this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("mousemove", this._syncHintMarker, this), this._map.off("mousemove", this._showHintMarkerAfterMoving, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, enabled() {
    return this._enabled;
  }, toggle(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, _syncHintMarker(e) {
    if (this._hintMarker.setLatLng(e.latlng), this.options.snappable) {
      let t = e;
      t.target = this._hintMarker, this._handleSnapping(t);
    }
  }, _createMarker(e) {
    var a, n, s, o;
    if (!e.latlng || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    this._hintMarker._snapped || this._hintMarker.setLatLng(e.latlng);
    let t = this._hintMarker.getLatLng();
    if (this.textArea = this._createTextArea(), (a = this.options.textOptions) == null ? void 0 : a.className) {
      let u = this.options.textOptions.className.split(" ");
      this.textArea.classList.add(...u);
    }
    let i = this._createTextIcon(this.textArea), r = new L.Marker(t, { textMarker: !0, _textMarkerOverPM: !0, icon: i });
    if (this._setPane(r, "markerPane"), this._finishLayer(r), r.pm || (r.options.draggable = !1), r.addTo(this._map.pm._getContainingLayer()), r.pm) {
      r.pm.textArea = this.textArea, L.setOptions(r.pm, { removeIfEmpty: ((n = this.options.textOptions) == null ? void 0 : n.removeIfEmpty) ?? !0 });
      let u = ((s = this.options.textOptions) == null ? void 0 : s.focusAfterDraw) ?? !0;
      r.pm._createTextMarker(u), (o = this.options.textOptions) != null && o.text && r.pm.setText(this.options.textOptions.text);
    }
    this._fireCreate(r), this._cleanupSnapping(), this.disable(), this.options.continueDrawing && this._map.once("mousemove", this._showHintMarkerAfterMoving, this);
  }, _showHintMarkerAfterMoving(e) {
    this.enable(), this._hintMarker.setLatLng(e.latlng);
  }, _createTextArea() {
    let e = document.createElement("textarea");
    return e.readOnly = !0, e.classList.add("pm-textarea", "pm-disabled"), e;
  }, _createTextIcon(e) {
    return L.divIcon({ className: "pm-text-marker", html: e });
  } });
  var Co = { enableLayerDrag() {
    if (!this.options.draggable || !this._layer._map) return;
    this.disable(), this._layerDragEnabled = !0, this._map || (this._map = this._layer._map), (this._layer instanceof L.Marker || this._layer instanceof L.ImageOverlay) && L.DomEvent.on(this._getDOMElem(), "dragstart", this._stopDOMImageDrag), this._layer.dragging && this._layer.dragging.disable(), this._tempDragCoord = null, Qe(this._layer) instanceof L.Canvas ? (this._layer.on("mouseout", this.removeDraggingClass, this), this._layer.on("mouseover", this.addDraggingClass, this)) : this.addDraggingClass(), this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = !0;
    let e = this._getDOMElem();
    e && (Qe(this._layer) instanceof L.Canvas ? (this._layer.on("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._addTouchEvents(e)) : L.DomEvent.on(e, "touchstart mousedown", this._simulateMouseDownEvent, this)), this._fireDragEnable();
  }, disableLayerDrag() {
    this._layerDragEnabled = !1, Qe(this._layer) instanceof L.Canvas ? (this._layer.off("mouseout", this.removeDraggingClass, this), this._layer.off("mouseover", this.addDraggingClass, this)) : this.removeDraggingClass(), this._originalMapDragState && this._dragging && this._map.dragging.enable(), this._safeToCacheDragState = !1, this._layer.dragging && this._layer.dragging.disable();
    let e = this._getDOMElem();
    e && (Qe(this._layer) instanceof L.Canvas ? (this._layer.off("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._removeTouchEvents(e)) : L.DomEvent.off(e, "touchstart mousedown", this._simulateMouseDownEvent, this)), this._layerDragged && this._fireUpdate(), this._layerDragged = !1, this._fireDragDisable();
  }, dragging() {
    return this._dragging;
  }, layerDragEnabled() {
    return !!this._layerDragEnabled;
  }, _simulateMouseDownEvent(e) {
    let t = e.touches ? e.touches[0] : e, i = { originalEvent: t, target: this._layer };
    return i.containerPoint = this._map.mouseEventToContainerPoint(t), i.latlng = this._map.containerPointToLatLng(i.containerPoint), this._dragMixinOnMouseDown(i), !1;
  }, _simulateMouseMoveEvent(e) {
    let t = e.touches ? e.touches[0] : e, i = { originalEvent: t, target: this._layer };
    return i.containerPoint = this._map.mouseEventToContainerPoint(t), i.latlng = this._map.containerPointToLatLng(i.containerPoint), this._dragMixinOnMouseMove(i), !1;
  }, _simulateMouseUpEvent(e) {
    let t = { originalEvent: e.touches ? e.touches[0] : e, target: this._layer };
    return e.type.indexOf("touch") === -1 && (t.containerPoint = this._map.mouseEventToContainerPoint(e), t.latlng = this._map.containerPointToLatLng(t.containerPoint)), this._dragMixinOnMouseUp(t), !1;
  }, _dragMixinOnMouseDown(e) {
    if (e.originalEvent.button > 0) return;
    this._overwriteEventIfItComesFromMarker(e);
    let t = e._fromLayerSync, i = this._syncLayers("_dragMixinOnMouseDown", e);
    if (this._layer instanceof L.Marker && (this.options.snappable && !t && !i ? this._initSnappableMarkers() : this._disableSnapping()), this._layer instanceof L.CircleMarker) {
      let r = "resizeableCircleMarker";
      this._layer instanceof L.Circle && (r = "resizeableCircle"), this.options.snappable && !t && !i ? this._layer.pm.options[r] || this._initSnappableMarkersDrag() : this._layer.pm.options[r] ? this._layer.pm._disableSnapping() : this._layer.pm._disableSnappingDrag();
    }
    this._safeToCacheDragState && (this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = !1), this._tempDragCoord = e.latlng, L.DomEvent.on(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this), L.DomEvent.on(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this);
  }, _dragMixinOnMouseMove(e) {
    this._overwriteEventIfItComesFromMarker(e);
    let t = this._getDOMElem();
    this._syncLayers("_dragMixinOnMouseMove", e), this._dragging || (this._dragging = !0, L.DomUtil.addClass(t, "leaflet-pm-dragging"), this._layer instanceof L.Marker || this._layer.bringToFront(), this._originalMapDragState && this._map.dragging.disable(), this._fireDragStart()), this._tempDragCoord || (this._tempDragCoord = e.latlng), this._onLayerDrag(e), this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle();
  }, _dragMixinOnMouseUp(e) {
    let t = this._getDOMElem();
    return this._syncLayers("_dragMixinOnMouseUp", e), this._originalMapDragState && this._map.dragging.enable(), this._safeToCacheDragState = !0, L.DomEvent.off(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this), L.DomEvent.off(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this), this._dragging ? (this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle(), this._layerDragged = !0, window.setTimeout(() => {
      this._dragging = !1, t && L.DomUtil.removeClass(t, "leaflet-pm-dragging"), this._fireDragEnd(), this._fireEdit(), this._layerEdited = !0;
    }, 10), !0) : !1;
  }, _onLayerDrag(e) {
    let { latlng: t } = e, i = { lat: t.lat - this._tempDragCoord.lat, lng: t.lng - this._tempDragCoord.lng }, r = (a) => a.map((n) => {
      if (Array.isArray(n)) return r(n);
      let s = { lat: n.lat + i.lat, lng: n.lng + i.lng };
      return (n.alt || n.alt === 0) && (s.alt = n.alt), s;
    });
    if (this._layer instanceof L.Circle && this._layer.options.resizeableCircle || this._layer instanceof L.CircleMarker && this._layer.options.resizeableCircleMarker) {
      let a = r([this._layer.getLatLng()]);
      this._layer.setLatLng(a[0]), this._fireChange(this._layer.getLatLng(), "Edit");
    } else if (this._layer instanceof L.CircleMarker || this._layer instanceof L.Marker) {
      let a = this._layer.getLatLng();
      this._layer._snapped && (a = this._layer._orgLatLng);
      let n = r([a]);
      this._layer.setLatLng(n[0]), this._fireChange(this._layer.getLatLng(), "Edit");
    } else if (this._layer instanceof L.ImageOverlay) {
      let a = r([this._layer.getBounds().getNorthWest(), this._layer.getBounds().getSouthEast()]);
      this._layer.setBounds(a), this._fireChange(this._layer.getBounds(), "Edit");
    } else {
      let a = r(this._layer.getLatLngs());
      this._layer.setLatLngs(a), this._fireChange(this._layer.getLatLngs(), "Edit");
    }
    this._tempDragCoord = t, e.layer = this._layer, this._fireDrag(e);
  }, addDraggingClass() {
    let e = this._getDOMElem();
    e && L.DomUtil.addClass(e, "leaflet-pm-draggable");
  }, removeDraggingClass() {
    let e = this._getDOMElem();
    e && L.DomUtil.removeClass(e, "leaflet-pm-draggable");
  }, _getDOMElem() {
    let e = null;
    return this._layer._path ? e = this._layer._path : this._layer._renderer && this._layer._renderer._container ? e = this._layer._renderer._container : this._layer._image ? e = this._layer._image : this._layer._icon && (e = this._layer._icon), e;
  }, _overwriteEventIfItComesFromMarker(e) {
    e.target.getLatLng && (!e.target._radius || e.target._radius <= 10) && (e.containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent), e.latlng = this._map.containerPointToLatLng(e.containerPoint));
  }, _syncLayers(e, t) {
    if (this.enabled()) return !1;
    if (!t._fromLayerSync && this._layer === t.target && this.options.syncLayersOnDrag) {
      t._fromLayerSync = !0;
      let i = [];
      if (L.Util.isArray(this.options.syncLayersOnDrag)) i = this.options.syncLayersOnDrag, this.options.syncLayersOnDrag.forEach((r) => {
        r instanceof L.LayerGroup && (i = i.concat(r.pm.getLayers(!0)));
      });
      else if (this.options.syncLayersOnDrag === !0 && this._parentLayerGroup) for (let r in this._parentLayerGroup) {
        let a = this._parentLayerGroup[r];
        a.pm && (i = a.pm.getLayers(!0));
      }
      return L.Util.isArray(i) && i.length > 0 && (i = i.filter((r) => !!r.pm).filter((r) => !!r.pm.options.draggable), i.forEach((r) => {
        r !== this._layer && r.pm[e] && (r._snapped = !1, r.pm[e](t));
      })), i.length > 0;
    }
    return !1;
  }, _stopDOMImageDrag(e) {
    return e.preventDefault(), !1;
  } }, bo = Co, vo = K(vt());
  function ko(e, t, i, r) {
    return i.unproject(t.transform(i.project(e, r)), r);
  }
  function br(e, t, i) {
    let r = i.getMaxZoom();
    if (r === 1 / 0 && (r = i.getZoom()), L.Util.isArray(e)) {
      let a = [];
      return e.forEach((n) => {
        a.push(br(n, t, i));
      }), a;
    }
    return e instanceof L.LatLng ? ko(e, t, i, r) : null;
  }
  function at(e, t) {
    t instanceof L.Layer && (t = t.getLatLng());
    let i = e.getMaxZoom();
    return i === 1 / 0 && (i = e.getZoom()), e.project(t, i);
  }
  function Ut(e, t) {
    let i = e.getMaxZoom();
    return i === 1 / 0 && (i = e.getZoom()), e.unproject(t, i);
  }
  var Mo = { _onRotateStart(e) {
    this._preventRenderingMarkers(!0), this._rotationOriginLatLng = this._getRotationCenter().clone(), this._rotationOriginPoint = at(this._map, this._rotationOriginLatLng), this._rotationStartPoint = at(this._map, e.target.getLatLng()), this._initialRotateLatLng = Ne(this._layer), this._startAngle = this.getAngle();
    let t = Ne(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
    this._fireRotationStart(this._rotationLayer, t), this._fireRotationStart(this._map, t);
  }, _onRotate(e) {
    let t = at(this._map, e.target.getLatLng()), i = this._rotationStartPoint, r = this._rotationOriginPoint, a = Math.atan2(t.y - r.y, t.x - r.x) - Math.atan2(i.y - r.y, i.x - r.x);
    this._layer.setLatLngs(this._rotateLayer(a, this._initialRotateLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
    let n = this;
    function s(f, d = [], b = -1) {
      if (b > -1 && d.push(b), L.Util.isArray(f[0])) f.forEach((v, D) => s(v, d.slice(), D));
      else {
        let v = d.length > 0 ? (0, vo.default)(n._markers, d) : n._markers[0];
        f.forEach((D, P) => {
          v[P].setLatLng(D);
        });
      }
    }
    s(this._layer.getLatLngs());
    let o = Ne(this._rotationLayer);
    this._rotationLayer.setLatLngs(this._rotateLayer(a, this._rotationLayer.pm._rotateOrgLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
    let u = a * 180 / Math.PI;
    u = u < 0 ? u + 360 : u;
    let l = u + this._startAngle;
    this._setAngle(l), this._rotationLayer.pm._setAngle(l), this._fireRotation(this._rotationLayer, u, o), this._fireRotation(this._map, u, o), this._rotationLayer.pm._fireChange(this._rotationLayer.getLatLngs(), "Rotation");
  }, _onRotateEnd() {
    let e = this._startAngle;
    delete this._rotationOriginLatLng, delete this._rotationOriginPoint, delete this._rotationStartPoint, delete this._initialRotateLatLng, delete this._startAngle;
    let t = Ne(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
    this._rotationLayer.pm._rotateOrgLatLng = Ne(this._rotationLayer), this._fireRotationEnd(this._rotationLayer, e, t), this._fireRotationEnd(this._map, e, t), this._rotationLayer.pm._fireEdit(this._rotationLayer, "Rotation"), this._preventRenderingMarkers(!1), this._layerRotated = !0;
  }, _rotateLayer(e, t, i, r, a) {
    let n = at(a, i);
    return this._matrix = r.clone().rotate(e, n).flip(), br(t, this._matrix, a);
  }, _setAngle(e) {
    e = e < 0 ? e + 360 : e, this._angle = e % 360;
  }, _getRotationCenter() {
    if (this._rotationCenter) return this._rotationCenter;
    let e = L.polygon(this._layer.getLatLngs(), { stroke: !1, fill: !1, pmIgnore: !0 }).addTo(this._layer._map), t = e.getCenter();
    return e.removeFrom(this._layer._map), t;
  }, enableRotate() {
    if (!this.options.allowRotation) {
      this.disableRotate();
      return;
    }
    this.rotateEnabled() && this.disableRotate(), this._layer instanceof L.Rectangle && this._angle === void 0 && this.setInitAngle(ei(this._layer._map, this._layer.getLatLngs()[0][0], this._layer.getLatLngs()[0][1]) || 0);
    let e = { fill: !1, stroke: !1, pmIgnore: !1, snapIgnore: !0 };
    this._rotatePoly = L.polygon(this._layer.getLatLngs(), e), this._rotatePoly._pmTempLayer = !0, this._rotatePoly.addTo(this._layer._map), this._rotatePoly.pm._setAngle(this.getAngle()), this._rotatePoly.pm.setRotationCenter(this.getRotationCenter()), this._rotatePoly.pm.setOptions(this._layer._map.pm.getGlobalOptions()), this._rotatePoly.pm.setOptions({ rotate: !0, snappable: !1, hideMiddleMarkers: !0 }), this._rotatePoly.pm._rotationLayer = this._layer, this._rotatePoly.pm.enable(), this._rotateOrgLatLng = Ne(this._layer), this._rotateEnabled = !0, this._layer.on("remove", this.disableRotate, this), this._fireRotationEnable(this._layer), this._fireRotationEnable(this._layer._map);
  }, disableRotate() {
    this.rotateEnabled() && (this._rotatePoly.pm._layerRotated && this._fireUpdate(), this._rotatePoly.pm._layerRotated = !1, this._rotatePoly.pm.disable(), this._rotatePoly.remove(), this._rotatePoly.pm.setOptions({ rotate: !1 }), this._rotatePoly = void 0, this._rotateOrgLatLng = void 0, this._layer.off("remove", this.disableRotate, this), this._rotateEnabled = !1, this._fireRotationDisable(this._layer), this._fireRotationDisable(this._layer._map));
  }, rotateEnabled() {
    return !!this._rotateEnabled;
  }, rotateLayer(e) {
    let t = this.getAngle(), i = this._layer.getLatLngs(), r = e * (Math.PI / 180);
    this._layer.setLatLngs(this._rotateLayer(r, this._layer.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._layer._map)), this._rotateOrgLatLng = L.polygon(this._layer.getLatLngs()).getLatLngs(), this._setAngle(this.getAngle() + e), this.rotateEnabled() && this._rotatePoly && this._rotatePoly.pm.enabled() && (this._rotatePoly.setLatLngs(this._rotateLayer(r, this._rotatePoly.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._rotatePoly._map)), this._rotatePoly.pm._initMarkers());
    let a = this.getAngle() - t;
    a = a < 0 ? a + 360 : a, this._startAngle = t, this._fireRotation(this._layer, a, i, this._layer), this._fireRotation(this._map || this._layer._map, a, i, this._layer), delete this._startAngle, this._fireChange(this._layer.getLatLngs(), "Rotation");
  }, rotateLayerToAngle(e) {
    let t = e - this.getAngle();
    this.rotateLayer(t);
  }, getAngle() {
    return this._angle || 0;
  }, setInitAngle(e) {
    this._setAngle(e);
  }, getRotationCenter() {
    return this._getRotationCenter();
  }, setRotationCenter(e) {
    this._rotationCenter = e, this._rotatePoly && this._rotatePoly.pm.setRotationCenter(e);
  } }, xo = Mo, Eo = L.Class.extend({ includes: [bo, Ni, xo, kt], options: { snappable: !0, snapDistance: 20, allowSelfIntersection: !0, allowSelfIntersectionEdit: !1, preventMarkerRemoval: !1, removeLayerBelowMinVertexCount: !0, limitMarkersToCount: -1, hideMiddleMarkers: !1, snapSegment: !0, syncLayersOnDrag: !1, draggable: !0, allowEditing: !0, allowRemoval: !0, allowCutting: !0, allowRotation: !0, addVertexOn: "click", removeVertexOn: "contextmenu", removeVertexValidation: void 0, addVertexValidation: void 0, moveVertexValidation: void 0, resizeableCircleMarker: !1, resizeableCircle: !0, snapMiddle: !1, snapVertex: !0 }, setOptions(e) {
    L.Util.setOptions(this, e);
  }, getOptions() {
    return this.options;
  }, applyOptions() {
  }, isPolygon() {
    return this._layer instanceof L.Polygon;
  }, getShape() {
    return this._shape;
  }, _setPane(e, t) {
    t === "layerPane" ? e.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane || "overlayPane" : t === "vertexPane" ? e.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane || "markerPane" : t === "markerPane" && (e.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane || "markerPane");
  }, remove() {
    (this._map || this._layer._map).pm.removeLayer({ target: this._layer });
  }, _vertexValidation(e, t) {
    let i = t.target, r = { layer: this._layer, marker: i, event: t }, a = "";
    return e === "move" ? a = "moveVertexValidation" : e === "add" ? a = "addVertexValidation" : e === "remove" && (a = "removeVertexValidation"), this.options[a] && typeof this.options[a] == "function" && !this.options[a](r) ? (e === "move" && (i._cancelDragEventChain = i.getLatLng()), !1) : (i._cancelDragEventChain = null, !0);
  }, _vertexValidationDrag(e) {
    return e._cancelDragEventChain ? (e._latlng = e._cancelDragEventChain, e.update(), !1) : !0;
  }, _vertexValidationDragEnd(e) {
    return e._cancelDragEventChain ? (e._cancelDragEventChain = null, !1) : !0;
  } }), se = Eo;
  se.LayerGroup = L.Class.extend({ initialize(e) {
    this._layerGroup = e, this._layers = this.getLayers(), this._getMap(), this._layers.forEach((r) => this._initLayer(r));
    let t = (r) => {
      if (r.layer._pmTempLayer) return;
      this._layers = this.getLayers();
      let a = this._layers.filter((n) => !n.pm._parentLayerGroup || !(this._layerGroup._leaflet_id in n.pm._parentLayerGroup));
      a.forEach((n) => {
        this._initLayer(n);
      }), a.length > 0 && this._getMap() && this._getMap().pm.globalEditModeEnabled() && this.enabled() && this.enable(this.getOptions());
    };
    this._layerGroup.on("layeradd", L.Util.throttle(t, 100, this), this), this._layerGroup.on("layerremove", (r) => {
      this._removeLayerFromGroup(r.target);
    }, this);
    let i = (r) => {
      r.target._pmTempLayer || (this._layers = this.getLayers());
    };
    this._layerGroup.on("layerremove", L.Util.throttle(i, 100, this), this);
  }, enable(e, t = []) {
    t.length === 0 && (this._layers = this.getLayers()), this._options = e, this._layers.forEach((i) => {
      i instanceof L.LayerGroup ? t.indexOf(i._leaflet_id) === -1 && (t.push(i._leaflet_id), i.pm.enable(e, t)) : i.pm.enable(e);
    });
  }, disable(e = []) {
    e.length === 0 && (this._layers = this.getLayers()), this._layers.forEach((t) => {
      t instanceof L.LayerGroup ? e.indexOf(t._leaflet_id) === -1 && (e.push(t._leaflet_id), t.pm.disable(e)) : t.pm.disable();
    });
  }, enabled(e = []) {
    return e.length === 0 && (this._layers = this.getLayers()), !!this._layers.find((t) => t instanceof L.LayerGroup ? e.indexOf(t._leaflet_id) === -1 ? (e.push(t._leaflet_id), t.pm.enabled(e)) : !1 : t.pm.enabled());
  }, toggleEdit(e, t = []) {
    t.length === 0 && (this._layers = this.getLayers()), this._options = e, this._layers.forEach((i) => {
      i instanceof L.LayerGroup ? t.indexOf(i._leaflet_id) === -1 && (t.push(i._leaflet_id), i.pm.toggleEdit(e, t)) : i.pm.toggleEdit(e);
    });
  }, _initLayer(e) {
    let t = L.Util.stamp(this._layerGroup);
    e.pm._parentLayerGroup || (e.pm._parentLayerGroup = {}), e.pm._parentLayerGroup[t] = this._layerGroup;
  }, _removeLayerFromGroup(e) {
    if (e.pm && e.pm._layerGroup) {
      let t = L.Util.stamp(this._layerGroup);
      delete e.pm._layerGroup[t];
    }
  }, dragging() {
    return this._layers = this.getLayers(), this._layers ? !!this._layers.find((e) => e.pm.dragging()) : !1;
  }, getOptions() {
    return this.options;
  }, _getMap() {
    var e;
    return this._map || ((e = this._layers.find((t) => !!t._map)) == null ? void 0 : e._map) || null;
  }, getLayers(e = !1, t = !0, i = !0, r = []) {
    let a = [];
    return e ? this._layerGroup.getLayers().forEach((n) => {
      a.push(n), n instanceof L.LayerGroup && r.indexOf(n._leaflet_id) === -1 && (r.push(n._leaflet_id), a = a.concat(n.pm.getLayers(!0, !0, !0, r)));
    }) : a = this._layerGroup.getLayers(), i && (a = a.filter((n) => !(n instanceof L.LayerGroup))), t && (a = a.filter((n) => !!n.pm), a = a.filter((n) => !n._pmTempLayer), a = a.filter((n) => !L.PM.optIn && !n.options.pmIgnore || L.PM.optIn && n.options.pmIgnore === !1)), a;
  }, setOptions(e, t = []) {
    t.length === 0 && (this._layers = this.getLayers()), this.options = e, this._layers.forEach((i) => {
      i.pm && (i instanceof L.LayerGroup ? t.indexOf(i._leaflet_id) === -1 && (t.push(i._leaflet_id), i.pm.setOptions(e, t)) : i.pm.setOptions(e));
    });
  } }), se.Marker = se.extend({ _shape: "Marker", initialize(e) {
    this._layer = e, this._enabled = !1, this._layer.on("dragend", this._onDragEnd, this);
  }, enable(e = { draggable: !0 }) {
    if (L.Util.setOptions(this, e), !this.options.allowEditing || !this._layer._map) {
      this.disable();
      return;
    }
    this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._enabled = !0, this._layer.on("pm:dragstart", this._onDragStart, this), this._layer.on("pm:dragend", this._onMarkerDragEnd, this), this._fireEnable();
  }, disable() {
    this.enabled() && (this.disableLayerDrag(), this._layer.off("remove", this.disable, this), this._layer.off("contextmenu", this._removeMarker, this), this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable(), this._enabled = !1);
  }, enabled() {
    return this._enabled;
  }, toggleEdit(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, applyOptions() {
    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this.options.draggable ? this.enableLayerDrag() : this.disableLayerDrag(), this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this);
  }, _removeMarker(e) {
    let t = e.target;
    t.remove(), this._fireRemove(t), this._fireRemove(this._map, t);
  }, _onDragStart() {
    this._map.pm.Draw.Marker._layerIsDragging = !0;
  }, _onMarkerDragEnd() {
    this._map.pm.Draw.Marker._layerIsDragging = !1;
  }, _onDragEnd() {
    this._fireEdit(), this._layerEdited = !0;
  }, _initSnappableMarkers() {
    let e = this._layer;
    this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, e.off("pm:drag", this._handleSnapping, this), e.on("pm:drag", this._handleSnapping, this), e.off("pm:dragend", this._cleanupSnapping, this), e.on("pm:dragend", this._cleanupSnapping, this), e.off("pm:dragstart", this._unsnap, this), e.on("pm:dragstart", this._unsnap, this);
  }, _disableSnapping() {
    let e = this._layer;
    e.off("pm:drag", this._handleSnapping, this), e.off("pm:dragend", this._cleanupSnapping, this), e.off("pm:dragstart", this._unsnap, this);
  } });
  var Ke = K(vt()), Bo = { filterMarkerGroup() {
    this.markerCache = [], this.createCache(), this._layer.on("pm:edit", this.createCache, this), this.applyLimitFilters({}), this.throttledApplyLimitFilters || (this.throttledApplyLimitFilters = L.Util.throttle(this.applyLimitFilters, 100, this)), this._layer.on("pm:disable", this._removeMarkerLimitEvents, this), this._layer.on("remove", this._removeMarkerLimitEvents, this), this.options.limitMarkersToCount > -1 && (this._layer.on("pm:vertexremoved", this._initMarkers, this), this._map.on("mousemove", this.throttledApplyLimitFilters, this));
  }, _removeMarkerLimitEvents() {
    this._map.off("mousemove", this.throttledApplyLimitFilters, this), this._layer.off("pm:edit", this.createCache, this), this._layer.off("pm:disable", this._removeMarkerLimitEvents, this), this._layer.off("pm:vertexremoved", this._initMarkers, this);
  }, createCache() {
    let e = [...this._markerGroup.getLayers(), ...this.markerCache];
    this.markerCache = e.filter((t, i, r) => r.indexOf(t) === i);
  }, _removeFromCache(e) {
    let t = this.markerCache.indexOf(e);
    t > -1 && this.markerCache.splice(t, 1);
  }, renderLimits(e) {
    this.markerCache.forEach((t) => {
      e.includes(t) ? this._markerGroup.addLayer(t) : this._markerGroup.removeLayer(t);
    });
  }, applyLimitFilters({ latlng: e = { lat: 0, lng: 0 } }) {
    if (this._preventRenderMarkers) return;
    let t = [...this._filterClosestMarkers(e)];
    this.renderLimits(t);
  }, _filterClosestMarkers(e) {
    let t = [...this.markerCache], i = this.options.limitMarkersToCount;
    return i === -1 ? t : (t.sort((r, a) => {
      let n = r._latlng.distanceTo(e), s = a._latlng.distanceTo(e);
      return n - s;
    }), t.filter((r, a) => i > -1 ? a < i : !0));
  }, _preventRenderMarkers: !1, _preventRenderingMarkers(e) {
    this._preventRenderMarkers = !!e;
  } }, wo = Bo;
  se.Line = se.extend({ includes: [wo], _shape: "Line", initialize(e) {
    this._layer = e, this._enabled = !1;
  }, enable(e) {
    if (L.Util.setOptions(this, e), this._map = this._layer._map, !!this._map) {
      if (!this.options.allowEditing) {
        this.disable();
        return;
      }
      this.enabled() && this.disable(), this._enabled = !0, this._initMarkers(), this.applyOptions(), this._layer.on("remove", this.disable, this), this.options.allowSelfIntersection || this._layer.on("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this), this.options.allowSelfIntersection ? this.cachedColor = void 0 : (this._layer.options.color !== "#f00000ff" ? (this.cachedColor = this._layer.options.color, this.isRed = !1) : this.isRed = !0, this._handleLayerStyle()), this._fireEnable();
    }
  }, disable() {
    if (!this.enabled() || this._dragging) return;
    this._enabled = !1, this._markerGroup.clearLayers(), this._markerGroup.removeFrom(this._map), this._layer.off("remove", this.disable, this), this.options.allowSelfIntersection || this._layer.off("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this);
    let e = this._layer._path ? this._layer._path : this._layer._renderer._container;
    L.DomUtil.removeClass(e, "leaflet-pm-draggable"), this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable();
  }, enabled() {
    return this._enabled;
  }, toggleEdit(e) {
    return this.enabled() ? this.disable() : this.enable(e), this.enabled();
  }, applyOptions() {
    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping();
  }, _initMarkers() {
    let e = this._map, t = this._layer.getLatLngs();
    this._markerGroup && (this._markerGroup.removeFrom(e), this._markerGroup.clearLayers()), this._markerGroup = new L.FeatureGroup(), this._markerGroup._pmTempLayer = !0;
    let i = (r) => {
      if (Array.isArray(r[0])) return r.map(i, this);
      let a = r.map(this._createMarker, this);
      return this.options.hideMiddleMarkers !== !0 && r.map((n, s) => {
        let o = this.isPolygon() ? (s + 1) % r.length : s + 1;
        return this._createMiddleMarker(a[s], a[o]);
      }), a;
    };
    this._markers = i(t), this.filterMarkerGroup(), e.addLayer(this._markerGroup);
  }, _createMarker(e) {
    let t = new L.Marker(e, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(t, "vertexPane"), t._pmTempLayer = !0, this.options.rotate ? (t.on("dragstart", this._onRotateStart, this), t.on("drag", this._onRotate, this), t.on("dragend", this._onRotateEnd, this)) : (t.on("click", this._onVertexClick, this), t.on("dragstart", this._onMarkerDragStart, this), t.on("move", this._onMarkerDrag, this), t.on("dragend", this._onMarkerDragEnd, this), this.options.preventMarkerRemoval || t.on(this.options.removeVertexOn, this._removeMarker, this)), this._markerGroup.addLayer(t), t;
  }, _createMiddleMarker(e, t) {
    if (!e || !t) return !1;
    let i = L.PM.Utils.calcMiddleLatLng(this._map, e.getLatLng(), t.getLatLng()), r = this._createMarker(i), a = L.divIcon({ className: "marker-icon marker-icon-middle" });
    return r.setIcon(a), r.leftM = e, r.rightM = t, e._middleMarkerNext = r, t._middleMarkerPrev = r, r.on(this.options.addVertexOn, this._onMiddleMarkerClick, this), r.on("movestart", this._onMiddleMarkerMoveStart, this), r;
  }, _onMiddleMarkerClick(e) {
    let t = e.target;
    if (!this._vertexValidation("add", e)) return;
    let i = L.divIcon({ className: "marker-icon" });
    t.setIcon(i), this._addMarker(t, t.leftM, t.rightM);
  }, _onMiddleMarkerMoveStart(e) {
    let t = e.target;
    if (t.on("moveend", this._onMiddleMarkerMoveEnd, this), !this._vertexValidation("add", e)) {
      t.on("move", this._onMiddleMarkerMovePrevent, this);
      return;
    }
    t._dragging = !0, this._addMarker(t, t.leftM, t.rightM);
  }, _onMiddleMarkerMovePrevent(e) {
    let t = e.target;
    this._vertexValidationDrag(t);
  }, _onMiddleMarkerMoveEnd(e) {
    let t = e.target;
    if (t.off("move", this._onMiddleMarkerMovePrevent, this), t.off("moveend", this._onMiddleMarkerMoveEnd, this), !this._vertexValidationDragEnd(t)) return;
    let i = L.divIcon({ className: "marker-icon" });
    t.setIcon(i), setTimeout(() => {
      delete t._dragging;
    }, 100);
  }, _addMarker(e, t, i) {
    e.off("movestart", this._onMiddleMarkerMoveStart, this), e.off(this.options.addVertexOn, this._onMiddleMarkerClick, this);
    let r = e.getLatLng(), a = this._layer._latlngs;
    delete e.leftM, delete e.rightM;
    let { indexPath: n, index: s, parentPath: o } = L.PM.Utils.findDeepMarkerIndex(this._markers, t), u = n.length > 1 ? (0, Ke.default)(a, o) : a, l = n.length > 1 ? (0, Ke.default)(this._markers, o) : this._markers;
    u.splice(s + 1, 0, r), l.splice(s + 1, 0, e), this._layer.setLatLngs(a), this.options.hideMiddleMarkers !== !0 && (this._createMiddleMarker(t, e), this._createMiddleMarker(e, i)), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit"), this._fireVertexAdded(e, L.PM.Utils.findDeepMarkerIndex(this._markers, e).indexPath, r), this.options.snappable && this._initSnappableMarkers();
  }, hasSelfIntersection() {
    return Bt(this._layer.toGeoJSON(15)).features.length > 0;
  }, _handleSelfIntersectionOnVertexRemoval() {
    this._handleLayerStyle(!0) && (this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers());
  }, _handleLayerStyle(e) {
    let t = this._layer, i, r;
    if (this.options.allowSelfIntersection ? i = !1 : (r = Bt(this._layer.toGeoJSON(15)), i = r.features.length > 0), i) {
      if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, !0), this.isRed) return i;
      e ? this._flashLayer() : (t.setStyle({ color: "#f00000ff" }), this.isRed = !0), this._fireIntersect(r);
    } else t.setStyle({ color: this.cachedColor }), this.isRed = !1, !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, !1);
    return i;
  }, _flashLayer() {
    this.cachedColor || (this.cachedColor = this._layer.options.color), this._layer.setStyle({ color: "#f00000ff" }), this.isRed = !0, window.setTimeout(() => {
      this._layer.setStyle({ color: this.cachedColor }), this.isRed = !1;
    }, 200);
  }, _updateDisabledMarkerStyle(e, t) {
    e.forEach((i) => {
      Array.isArray(i) ? this._updateDisabledMarkerStyle(i, t) : i._icon && (t && !this._checkMarkerAllowedToDrag(i) ? L.DomUtil.addClass(i._icon, "vertexmarker-disabled") : L.DomUtil.removeClass(i._icon, "vertexmarker-disabled"));
    });
  }, _removeMarker(e) {
    let t = e.target;
    if (!this._vertexValidation("remove", e)) return;
    this.options.allowSelfIntersection || (this._coordsBeforeEdit = Ne(this._layer, this._layer.getLatLngs()));
    let i = this._layer.getLatLngs(), { indexPath: r, index: a, parentPath: n } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
    if (!r) return;
    let s = r.length > 1 ? (0, Ke.default)(i, n) : i, o = r.length > 1 ? (0, Ke.default)(this._markers, n) : this._markers, u = n[n.length - 1] > 0 && this._layer instanceof L.Polygon;
    if (!this.options.removeLayerBelowMinVertexCount && !u && (s.length <= 2 || this.isPolygon() && s.length <= 3)) {
      this._flashLayer();
      return;
    }
    s.splice(a, 1), this._layer.setLatLngs(i), this.isPolygon() && s.length <= 2 && s.splice(0, s.length);
    let l = !1;
    if (s.length <= 1 && (s.splice(0, s.length), n.length > 1 && r.length > 1 && (i = Mt(i)), this._layer.setLatLngs(i), this._initMarkers(), l = !0), Qt(i) || this._layer.remove(), i = Mt(i), this._layer.setLatLngs(i), this._markers = Mt(this._markers), !l && (o = r.length > 1 ? (0, Ke.default)(this._markers, n) : this._markers, t._middleMarkerPrev && (this._markerGroup.removeLayer(t._middleMarkerPrev), this._removeFromCache(t._middleMarkerPrev)), t._middleMarkerNext && (this._markerGroup.removeLayer(t._middleMarkerNext), this._removeFromCache(t._middleMarkerNext)), this._markerGroup.removeLayer(t), this._removeFromCache(t), o)) {
      let f, d;
      if (this.isPolygon() ? (f = (a + 1) % o.length, d = (a + (o.length - 1)) % o.length) : (d = a - 1 < 0 ? void 0 : a - 1, f = a + 1 >= o.length ? void 0 : a + 1), f !== d) {
        let b = o[d], v = o[f];
        this.options.hideMiddleMarkers !== !0 && this._createMiddleMarker(b, v);
      }
      o.splice(a, 1);
    }
    this._fireEdit(), this._layerEdited = !0, this._fireVertexRemoved(t, r), this._fireChange(this._layer.getLatLngs(), "Edit");
  }, updatePolygonCoordsFromMarkerDrag(e) {
    let t = this._layer.getLatLngs(), i = e.getLatLng(), { indexPath: r, index: a, parentPath: n } = L.PM.Utils.findDeepMarkerIndex(this._markers, e), s = r.length > 1 ? (0, Ke.default)(t, n) : t;
    i.alt = s[a].alt, s.splice(a, 1, i), this._layer.setLatLngs(t);
  }, _getNeighborMarkers(e) {
    let { indexPath: t, index: i, parentPath: r } = L.PM.Utils.findDeepMarkerIndex(this._markers, e), a = t.length > 1 ? (0, Ke.default)(this._markers, r) : this._markers, n = (i + 1) % a.length, s = (i + (a.length - 1)) % a.length, o = a[s], u = a[n];
    return { prevMarker: o, nextMarker: u };
  }, _checkMarkerAllowedToDrag(e) {
    let { prevMarker: t, nextMarker: i } = this._getNeighborMarkers(e), r = L.polyline([t.getLatLng(), e.getLatLng()]), a = L.polyline([e.getLatLng(), i.getLatLng()]), n = pt(this._layer.toGeoJSON(15), r.toGeoJSON(15)).features.filter((o) => {
      let u = o.geometry.coordinates, l = L.latLng(u[1], u[0]);
      return !l.equals(t.getLatLng()) && !l.equals(e.getLatLng());
    }).length, s = pt(this._layer.toGeoJSON(15), a.toGeoJSON(15)).features.filter((o) => {
      let u = o.geometry.coordinates, l = L.latLng(u[1], u[0]);
      return !l.equals(i.getLatLng()) && !l.equals(e.getLatLng());
    }).length;
    return !(n < 1 && s < 1);
  }, _onMarkerDragStart(e) {
    let t = e.target;
    if (this._preventRenderingMarkers(!0), this.cachedColor || (this.cachedColor = this._layer.options.color), !this._vertexValidation("move", e)) return;
    let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
    this._fireMarkerDragStart(e, i), this.options.allowSelfIntersection || (this._coordsBeforeEdit = Ne(this._layer, this._layer.getLatLngs())), !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() ? this._markerAllowedToDrag = this._checkMarkerAllowedToDrag(t) : this._markerAllowedToDrag = null;
  }, _onMarkerDrag(e) {
    let t = e.target;
    if (!this._vertexValidationDrag(t)) return;
    let { indexPath: i, index: r, parentPath: a } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
    if (!i) return;
    if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() && this._markerAllowedToDrag === !1) {
      this._layer.setLatLngs(this._coordsBeforeEdit), this._initMarkers(), this._handleLayerStyle();
      return;
    }
    this.updatePolygonCoordsFromMarkerDrag(t);
    let n = i.length > 1 ? (0, Ke.default)(this._markers, a) : this._markers, s = (r + 1) % n.length, o = (r + (n.length - 1)) % n.length, u = t.getLatLng(), l = n[o].getLatLng(), f = n[s].getLatLng();
    if (t._middleMarkerNext) {
      let d = L.PM.Utils.calcMiddleLatLng(this._map, u, f);
      t._middleMarkerNext.setLatLng(d);
    }
    if (t._middleMarkerPrev) {
      let d = L.PM.Utils.calcMiddleLatLng(this._map, u, l);
      t._middleMarkerPrev.setLatLng(d);
    }
    this.options.allowSelfIntersection || this._handleLayerStyle(), this._fireMarkerDrag(e, i), this._fireChange(this._layer.getLatLngs(), "Edit");
  }, _onMarkerDragEnd(e) {
    let t = e.target;
    if (this._preventRenderingMarkers(!1), !this._vertexValidationDragEnd(t)) return;
    let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, t), r = !this.options.allowSelfIntersection && this.hasSelfIntersection();
    r && this.options.allowSelfIntersectionEdit && this._markerAllowedToDrag && (r = !1);
    let a = !this.options.allowSelfIntersection && r;
    if (this._fireMarkerDragEnd(e, i, a), a) {
      this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers(), this.options.snappable && this._initSnappableMarkers(), this._handleLayerStyle(), this._fireLayerReset(e, i);
      return;
    }
    !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._handleLayerStyle(), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit");
  }, _onVertexClick(e) {
    let t = e.target;
    if (t._dragging) return;
    let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
    this._fireVertexClick(e, i);
  } }), se.Polygon = se.Line.extend({ _shape: "Polygon", _checkMarkerAllowedToDrag(e) {
    let { prevMarker: t, nextMarker: i } = this._getNeighborMarkers(e), r = L.polyline([t.getLatLng(), e.getLatLng()]), a = L.polyline([e.getLatLng(), i.getLatLng()]), n = pt(this._layer.toGeoJSON(15), r.toGeoJSON(15)).features.filter((o) => {
      let u = o.geometry.coordinates, l = L.latLng(u[1], u[0]);
      return !l.equals(t.getLatLng()) && !l.equals(e.getLatLng());
    }).length, s = pt(this._layer.toGeoJSON(15), a.toGeoJSON(15)).features.filter((o) => {
      let u = o.geometry.coordinates, l = L.latLng(u[1], u[0]);
      return !l.equals(i.getLatLng()) && !l.equals(e.getLatLng());
    }).length;
    return !(n < 1 && s < 1);
  } }), se.Rectangle = se.Polygon.extend({ _shape: "Rectangle", _initMarkers() {
    let e = this._map, t = this._findCorners();
    this._markerGroup && this._markerGroup.clearLayers(), this._markerGroup = new L.FeatureGroup(), this._markerGroup._pmTempLayer = !0, e.addLayer(this._markerGroup), this._markers = [], this._markers[0] = t.map(this._createMarker, this), [this._cornerMarkers] = this._markers, this._layer.getLatLngs()[0].forEach((i, r) => {
      let a = this._cornerMarkers.find((n) => n._index === r);
      a && a.setLatLng(i);
    });
  }, applyOptions() {
    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this._addMarkerEvents();
  }, _createMarker(e, t) {
    let i = new L.Marker(e, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(i, "vertexPane"), i._origLatLng = e, i._index = t, i._pmTempLayer = !0, i.on("click", this._onVertexClick, this), this._markerGroup.addLayer(i), i;
  }, _addMarkerEvents() {
    this._markers[0].forEach((e) => {
      e.on("dragstart", this._onMarkerDragStart, this), e.on("drag", this._onMarkerDrag, this), e.on("dragend", this._onMarkerDragEnd, this), this.options.preventMarkerRemoval || e.on("contextmenu", this._removeMarker, this);
    });
  }, _removeMarker() {
    return null;
  }, _onMarkerDragStart(e) {
    if (!this._vertexValidation("move", e)) return;
    let t = e.target, i = this._cornerMarkers;
    t._oppositeCornerLatLng = i.find((a) => a._index === (t._index + 2) % 4).getLatLng(), t._snapped = !1;
    let { indexPath: r } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
    this._fireMarkerDragStart(e, r);
  }, _onMarkerDrag(e) {
    let t = e.target;
    if (!this._vertexValidationDrag(t) || t._index === void 0) return;
    this._adjustRectangleForMarkerMove(t);
    let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
    this._fireMarkerDrag(e, i), this._fireChange(this._layer.getLatLngs(), "Edit");
  }, _onMarkerDragEnd(e) {
    let t = e.target;
    if (!this._vertexValidationDragEnd(t)) return;
    this._cornerMarkers.forEach((r) => {
      delete r._oppositeCornerLatLng;
    });
    let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
    this._fireMarkerDragEnd(e, i), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit");
  }, _adjustRectangleForMarkerMove(e) {
    L.extend(e._origLatLng, e._latlng);
    let t = L.PM.Utils._getRotatedRectangle(e.getLatLng(), e._oppositeCornerLatLng, this.getAngle(), this._map);
    this._layer.setLatLngs(t), this._adjustAllMarkers(e), this._layer.redraw();
  }, _adjustAllMarkers(e) {
    let t = this._layer.getLatLngs()[0];
    if (t && t.length !== 4 && t.length > 0) t.forEach((i, r) => {
      this._cornerMarkers[r].setLatLng(i);
    }), this._cornerMarkers.slice(t.length).forEach((i) => {
      i.setLatLng(t[0]);
    });
    else if (!t || !t.length) console.error("The layer has no LatLngs");
    else {
      let i = t.findIndex((r) => e.getLatLng().equals(r));
      i > -1 ? (this._cornerMarkers[(e._index + 1) % 4].setLatLng(t[(i + 1) % 4]), this._cornerMarkers[(e._index + 2) % 4].setLatLng(t[(i + 2) % 4]), this._cornerMarkers[(e._index + 3) % 4].setLatLng(t[(i + 3) % 4])) : this._cornerMarkers.forEach((r) => {
        r.setLatLng(t[r._index]);
      });
    }
  }, _findCorners() {
    this._angle === void 0 && this.setInitAngle(ei(this._map, this._layer.getLatLngs()[0][0], this._layer.getLatLngs()[0][1]) || 0);
    let e = this._layer.getLatLngs()[0];
    return L.PM.Utils._getRotatedRectangle(e[0], e[2], this.getAngle(), this._map || this);
  } }), se.CircleMarker = se.extend({ _shape: "CircleMarker", initialize(e) {
    this._layer = e, this._enabled = !1, this._minRadiusOption = "minRadiusCircleMarker", this._maxRadiusOption = "maxRadiusCircleMarker", this._editableOption = "resizeableCircleMarker", this._updateHiddenPolyCircle();
  }, enable(e = { draggable: !0, snappable: !0 }) {
    if (L.Util.setOptions(this, e), this.options.editable && (this.options.resizeableCircleMarker = this.options.editable, delete this.options.editable), !this.options.allowEditing || !this._layer._map) {
      this.disable();
      return;
    }
    this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._enabled = !0, this._extendingEnable(), this._updateHiddenPolyCircle(), this._fireEnable();
  }, _extendingEnable() {
    this._layer.on("pm:dragstart", this._onDragStart, this), this._layer.on("pm:drag", this._onMarkerDrag, this), this._layer.on("pm:dragend", this._onMarkerDragEnd, this);
  }, disable() {
    this.dragging() || (this._map || (this._map = this._layer._map), this._map && this.enabled() && (this.layerDragEnabled() && this.disableLayerDrag(), this._helperLayers && (this._helperLayers.clearLayers(), this._helperLayers.removeFrom(this._map)), this.options[this._editableOption] ? (this._map.off("move", this._syncMarkers, this), this._outerMarker.off("drag", this._handleOuterMarkerSnapping, this)) : this._map.off("move", this._updateHiddenPolyCircle, this), this._extendingDisable(), this._layer.off("remove", this.disable, this), this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable(), this._enabled = !1));
  }, _extendingDisable() {
    this._layer.off("contextmenu", this._removeMarker, this);
  }, enabled() {
    return this._enabled;
  }, toggleEdit(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, applyOptions() {
    this.options[this._editableOption] ? (this._initMarkers(), this._map.on("move", this._syncMarkers, this), this.options.snappable ? (this._initSnappableMarkers(), this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this), this._outerMarker.on("move", this._syncHintLine, this), this._outerMarker.on("move", this._syncCircleRadius, this)) : this._disableSnapping()) : (this.options.draggable && this.enableLayerDrag(), this._map.on("move", this._updateHiddenPolyCircle, this), this.options.snappable ? this._initSnappableMarkersDrag() : this._disableSnappingDrag()), this._extendingApplyOptions();
  }, _extendingApplyOptions() {
    this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this);
  }, _initMarkers() {
    let e = this._map;
    this._helperLayers && (this._helperLayers.removeFrom(e), this._helperLayers.clearLayers()), this._helperLayers = new L.FeatureGroup(), this._helperLayers._pmTempLayer = !0, this._helperLayers.addTo(e);
    let t = this._layer.getLatLng(), i = this._layer._radius, r = this._getLatLngOnCircle(t, i);
    this._centerMarker = this._createCenterMarker(t), this._outerMarker = this._createOuterMarker(r), this._markers = [this._centerMarker, this._outerMarker], this._createHintLine(this._centerMarker, this._outerMarker);
  }, _getLatLngOnCircle(e, t) {
    let i = this._map.project(e), r = L.point(i.x + t, i.y);
    return this._map.unproject(r);
  }, _createHintLine(e, t) {
    let i = e.getLatLng(), r = t.getLatLng();
    this._hintline = L.polyline([i, r], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._helperLayers.addLayer(this._hintline);
  }, _createCenterMarker(e) {
    let t = this._createMarker(e);
    return this.options.draggable ? (L.DomUtil.addClass(t._icon, "leaflet-pm-draggable"), t.on("move", this._moveCircle, this)) : t.dragging.disable(), t;
  }, _createOuterMarker(e) {
    let t = this._createMarker(e);
    return t.on("drag", this._resizeCircle, this), t;
  }, _createMarker(e) {
    let t = new L.Marker(e, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(t, "vertexPane"), t._origLatLng = e, t._pmTempLayer = !0, t.on("dragstart", this._onMarkerDragStart, this), t.on("drag", this._onMarkerDrag, this), t.on("dragend", this._onMarkerDragEnd, this), t.on("click", this._onVertexClick, this), this._helperLayers.addLayer(t), t;
  }, _moveCircle(e) {
    if (e.target._cancelDragEventChain) return;
    let t = this._centerMarker.getLatLng();
    this._layer.setLatLng(t);
    let i = this._layer._radius, r = this._getLatLngOnCircle(t, i);
    this._outerMarker._latlng = r, this._outerMarker.update(), this._syncHintLine(), this._updateHiddenPolyCircle(), this._fireCenterPlaced("Edit"), this._fireChange(this._layer.getLatLng(), "Edit");
  }, _syncMarkers() {
    let e = this._layer.getLatLng(), t = this._layer._radius, i = this._getLatLngOnCircle(e, t);
    this._outerMarker.setLatLng(i), this._centerMarker.setLatLng(e), this._syncHintLine(), this._updateHiddenPolyCircle();
  }, _resizeCircle() {
    this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()), this._syncHintLine(), this._syncCircleRadius();
  }, _syncCircleRadius() {
    let e = this._centerMarker.getLatLng(), t = this._outerMarker.getLatLng(), i = this._distanceCalculation(e, t);
    this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? this._layer.setRadius(this.options[this._minRadiusOption]) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] ? this._layer.setRadius(this.options[this._maxRadiusOption]) : this._layer.setRadius(i), this._updateHiddenPolyCircle(), this._fireChange(this._layer.getLatLng(), "Edit");
  }, _syncHintLine() {
    let e = this._centerMarker.getLatLng(), t = this._outerMarker.getLatLng();
    this._hintline.setLatLngs([e, t]);
  }, _removeMarker() {
    this.options[this._editableOption] && this.disable(), this._layer.remove(), this._fireRemove(this._layer), this._fireRemove(this._map, this._layer);
  }, _onDragStart() {
    this._map.pm.Draw.CircleMarker._layerIsDragging = !0;
  }, _onMarkerDragStart(e) {
    this._vertexValidation("move", e) && this._fireMarkerDragStart(e);
  }, _onMarkerDrag(e) {
    let t = e.target;
    t instanceof L.Marker && !this._vertexValidationDrag(t) || this._fireMarkerDrag(e);
  }, _onMarkerDragEnd(e) {
    this._extedingMarkerDragEnd();
    let t = e.target;
    this._vertexValidationDragEnd(t) && (this.options[this._editableOption] && (this._fireEdit(), this._layerEdited = !0), this._fireMarkerDragEnd(e));
  }, _extedingMarkerDragEnd() {
    this._map.pm.Draw.CircleMarker._layerIsDragging = !1;
  }, _initSnappableMarkersDrag() {
    let e = this._layer;
    this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, e.off("pm:drag", this._handleSnapping, this), e.on("pm:drag", this._handleSnapping, this), e.off("pm:dragend", this._cleanupSnapping, this), e.on("pm:dragend", this._cleanupSnapping, this), e.off("pm:dragstart", this._unsnap, this), e.on("pm:dragstart", this._unsnap, this);
  }, _disableSnappingDrag() {
    let e = this._layer;
    e.off("pm:drag", this._handleSnapping, this), e.off("pm:dragend", this._cleanupSnapping, this), e.off("pm:dragstart", this._unsnap, this);
  }, _updateHiddenPolyCircle() {
    let e = this._layer._map || this._map;
    if (e) {
      let t = L.PM.Utils.pxRadiusToMeterRadius(this._layer.getRadius(), e, this._layer.getLatLng()), i = L.circle(this._layer.getLatLng(), this._layer.options);
      i.setRadius(t);
      let r = e && e.pm._isCRSSimple();
      this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(i, 200, !r).getLatLngs()) : this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(i, 200, !r), this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer);
    }
  }, _getNewDestinationOfOuterMarker() {
    let e = this._centerMarker.getLatLng(), t = this._outerMarker.getLatLng(), i = this._distanceCalculation(e, t);
    return this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? t = xt(this._map, e, t, this._getMinDistanceInMeter(e)) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && (t = xt(this._map, e, t, this._getMaxDistanceInMeter(e))), t;
  }, _handleOuterMarkerSnapping() {
    if (this._outerMarker._snapped) {
      let e = this._centerMarker.getLatLng(), t = this._outerMarker.getLatLng(), i = this._distanceCalculation(e, t);
      this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? this._outerMarker.setLatLng(this._outerMarker._orgLatLng) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && this._outerMarker.setLatLng(this._outerMarker._orgLatLng);
    }
    this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker());
  }, _distanceCalculation(e, t) {
    return this._map.project(e).distanceTo(this._map.project(t));
  }, _getMinDistanceInMeter(e) {
    return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._minRadiusOption], this._map, e);
  }, _getMaxDistanceInMeter(e) {
    return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._maxRadiusOption], this._map, e);
  }, _onVertexClick(e) {
    e.target._dragging || this._fireVertexClick(e, void 0);
  } }), se.Circle = se.CircleMarker.extend({ _shape: "Circle", initialize(e) {
    this._layer = e, this._enabled = !1, this._minRadiusOption = "minRadiusCircle", this._maxRadiusOption = "maxRadiusCircle", this._editableOption = "resizeableCircle", this._updateHiddenPolyCircle();
  }, enable(e) {
    L.PM.Edit.CircleMarker.prototype.enable.call(this, e || {});
  }, _extendingEnable() {
  }, _extendingDisable() {
    this._layer.off("remove", this.disable, this);
    let e = this._layer._path ? this._layer._path : this._layer._renderer._container;
    L.DomUtil.removeClass(e, "leaflet-pm-draggable");
  }, _extendingApplyOptions() {
  }, _syncMarkers() {
  }, _removeMarker() {
  }, _onDragStart() {
  }, _extedingMarkerDragEnd() {
  }, _updateHiddenPolyCircle() {
    let e = this._map && this._map.pm._isCRSSimple();
    this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(this._layer, 200, !e).getLatLngs()) : this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(this._layer, 200, !e), this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer);
  }, _distanceCalculation(e, t) {
    return this._map.distance(e, t);
  }, _getMinDistanceInMeter() {
    return this.options[this._minRadiusOption];
  }, _getMaxDistanceInMeter() {
    return this.options[this._maxRadiusOption];
  }, _onVertexClick(e) {
    e.target._dragging || this._fireVertexClick(e, void 0);
  } }), se.ImageOverlay = se.extend({ _shape: "ImageOverlay", initialize(e) {
    this._layer = e, this._enabled = !1;
  }, toggleEdit(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, enabled() {
    return this._enabled;
  }, enable(e = { draggable: !0, snappable: !0 }) {
    if (L.Util.setOptions(this, e), this._map = this._layer._map, !!this._map) {
      if (!this.options.allowEditing) {
        this.disable();
        return;
      }
      this.enabled() || this.disable(), this.enableLayerDrag(), this._layer.on("remove", this.disable, this), this._enabled = !0, this._otherSnapLayers = this._findCorners(), this._fireEnable();
    }
  }, disable() {
    this._dragging || (this._map || (this._map = this._layer._map), this.disableLayerDrag(), this._layer.off("remove", this.disable, this), this.enabled() || (this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable()), this._enabled = !1);
  }, _findCorners() {
    let e = this._layer.getBounds(), t = e.getNorthWest(), i = e.getNorthEast(), r = e.getSouthEast(), a = e.getSouthWest();
    return [t, i, r, a];
  } }), se.Text = se.extend({ _shape: "Text", initialize(e) {
    this._layer = e, this._enabled = !1;
  }, enable(e) {
    if (L.Util.setOptions(this, e), !!this.textArea) {
      if (!this.options.allowEditing || !this._layer._map) {
        this.disable();
        return;
      }
      this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._safeToCacheDragState = !0, this._focusChange(), this.textArea.readOnly = !1, this.textArea.classList.remove("pm-disabled"), this._layer.on("remove", this.disable, this), L.DomEvent.on(this.textArea, "input", this._autoResize, this), L.DomEvent.on(this.textArea, "focus", this._focusChange, this), L.DomEvent.on(this.textArea, "blur", this._focusChange, this), this._layer.on("dblclick", L.DomEvent.stop), L.DomEvent.off(this.textArea, "mousedown", this._preventTextSelection), this._enabled = !0, this._fireEnable();
    }
  }, disable() {
    if (!this.enabled()) return;
    this._layer.off("remove", this.disable, this), L.DomEvent.off(this.textArea, "input", this._autoResize, this), L.DomEvent.off(this.textArea, "focus", this._focusChange, this), L.DomEvent.off(this.textArea, "blur", this._focusChange, this), document.removeEventListener("click", this._documentClickThis, { capture: !0 }), this._focusChange(), this.textArea.readOnly = !0, this.textArea.classList.add("pm-disabled");
    let e = document.activeElement;
    this.textArea.focus(), this.textArea.selectionStart = 0, this.textArea.selectionEnd = 0, L.DomEvent.on(this.textArea, "mousedown", this._preventTextSelection), e.focus(), this._disableOnBlurActive = !1, this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable(), this._enabled = !1;
  }, enabled() {
    return this._enabled;
  }, toggleEdit(e) {
    this.enabled() ? this.disable() : this.enable(e);
  }, applyOptions() {
    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping();
  }, _initSnappableMarkers() {
    let e = this._layer;
    this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, e.off("pm:drag", this._handleSnapping, this), e.on("pm:drag", this._handleSnapping, this), e.off("pm:dragend", this._cleanupSnapping, this), e.on("pm:dragend", this._cleanupSnapping, this), e.off("pm:dragstart", this._unsnap, this), e.on("pm:dragstart", this._unsnap, this);
  }, _disableSnapping() {
    let e = this._layer;
    e.off("pm:drag", this._handleSnapping, this), e.off("pm:dragend", this._cleanupSnapping, this), e.off("pm:dragstart", this._unsnap, this);
  }, _autoResize() {
    this.textArea.style.height = "1px", this.textArea.style.width = "1px";
    let e = this.textArea.scrollHeight > 21 ? this.textArea.scrollHeight : 21, t = this.textArea.scrollWidth > 16 ? this.textArea.scrollWidth : 16;
    this.textArea.style.height = `${e}px`, this.textArea.style.width = `${t}px`, this._layer.options.text = this.getText(), this._fireTextChange(this.getText());
  }, _disableOnBlur() {
    this._disableOnBlurActive = !0, setTimeout(() => {
      this.enabled() && (this._documentClickThis = this._documentClickThis || this._documentClick.bind(this), document.addEventListener("click", this._documentClickThis, { capture: !0 }));
    }, 100);
  }, _documentClick(e) {
    e.target !== this.textArea && (this.disable(), !this.getText() && this.options.removeIfEmpty && this.remove());
  }, _focusChange(e = {}) {
    let t = this._hasFocus;
    this._hasFocus = e.type === "focus", !t != !this._hasFocus && (this._hasFocus ? (this._applyFocus(), this._focusText = this.getText(), this._fireTextFocus()) : (this._removeFocus(), this._fireTextBlur(), this._focusText !== this.getText() && (this._fireEdit(), this._layerEdited = !0)));
  }, _applyFocus() {
    this.textArea.classList.add("pm-hasfocus"), this._map.dragging && (this._safeToCacheDragState && (this._originalMapDragState = this._map.dragging._enabled, this._safeToCacheDragState = !1), this._map.dragging.disable());
  }, _removeFocus() {
    this._map.dragging && (this._originalMapDragState && this._map.dragging.enable(), this._safeToCacheDragState = !0), this.textArea.classList.remove("pm-hasfocus");
  }, focus() {
    if (!this.enabled()) throw new TypeError("Layer is not enabled");
    this.textArea.focus();
  }, blur() {
    if (!this.enabled()) throw new TypeError("Layer is not enabled");
    this.textArea.blur(), this._disableOnBlurActive && this.disable();
  }, hasFocus() {
    return this._hasFocus;
  }, getElement() {
    return this.textArea;
  }, setText(e) {
    e && (this.textArea.value = e), this._autoResize();
  }, getText() {
    return this.textArea.value;
  }, _initTextMarker() {
    if (this.textArea = L.PM.Draw.Text.prototype._createTextArea.call(this), this.options.className) {
      let t = this.options.className.split(" ");
      this.textArea.classList.add(...t);
    }
    let e = L.PM.Draw.Text.prototype._createTextIcon.call(this, this.textArea);
    this._layer.setIcon(e), this._layer.once("add", this._createTextMarker, this);
  }, _createTextMarker(e = !1) {
    this._layer.off("add", this._createTextMarker, this), this._layer.getElement().tabIndex = -1, this.textArea.wrap = "off", this.textArea.style.overflow = "hidden", this.textArea.style.height = L.DomUtil.getStyle(this.textArea, "font-size"), this.textArea.style.width = "1px", this._layer.options.text && this.setText(this._layer.options.text), this._autoResize(), e === !0 && (this.enable(), this.focus(), this._disableOnBlur());
  }, _preventTextSelection(e) {
    e.preventDefault();
  } });
  var mi = function(e, t, i, r, a, n) {
    this._matrix = [e, t, i, r, a, n];
  };
  mi.init = () => new L.PM.Matrix(1, 0, 0, 1, 0, 0), mi.prototype = { transform(e) {
    return this._transform(e.clone());
  }, _transform(e) {
    let t = this._matrix, { x: i, y: r } = e;
    return e.x = t[0] * i + t[1] * r + t[4], e.y = t[2] * i + t[3] * r + t[5], e;
  }, untransform(e) {
    let t = this._matrix;
    return new L.Point((e.x / t[0] - t[4]) / t[0], (e.y / t[2] - t[5]) / t[2]);
  }, clone() {
    let e = this._matrix;
    return new L.PM.Matrix(e[0], e[1], e[2], e[3], e[4], e[5]);
  }, translate(e) {
    if (e === void 0) return new L.Point(this._matrix[4], this._matrix[5]);
    let t, i;
    return typeof e == "number" ? (t = e, i = e) : (t = e.x, i = e.y), this._add(1, 0, 0, 1, t, i);
  }, scale(e, t) {
    if (e === void 0) return new L.Point(this._matrix[0], this._matrix[3]);
    let i, r;
    return t = t || L.point(0, 0), typeof e == "number" ? (i = e, r = e) : (i = e.x, r = e.y), this._add(i, 0, 0, r, t.x, t.y)._add(1, 0, 0, 1, -t.x, -t.y);
  }, rotate(e, t) {
    let i = Math.cos(e), r = Math.sin(e);
    return t = t || new L.Point(0, 0), this._add(i, r, -r, i, t.x, t.y)._add(1, 0, 0, 1, -t.x, -t.y);
  }, flip() {
    return this._matrix[1] *= -1, this._matrix[2] *= -1, this;
  }, _add(e, t, i, r, a, n) {
    let s = [[], [], []], o = this._matrix, u = [[o[0], o[2], o[4]], [o[1], o[3], o[5]], [0, 0, 1]], l = [[e, i, a], [t, r, n], [0, 0, 1]], f;
    e && e instanceof L.PM.Matrix && (o = e._matrix, l = [[o[0], o[2], o[4]], [o[1], o[3], o[5]], [0, 0, 1]]);
    for (let d = 0; d < 3; d += 1) for (let b = 0; b < 3; b += 1) {
      f = 0;
      for (let v = 0; v < 3; v += 1) f += u[d][v] * l[v][b];
      s[d][b] = f;
    }
    return this._matrix = [s[0][0], s[1][0], s[0][1], s[1][1], s[0][2], s[1][2]], this;
  } };
  var Do = mi, Ao = { calcMiddleLatLng(e, t, i) {
    let r = e.project(t), a = e.project(i);
    return e.unproject(r._add(a)._divideBy(2));
  }, findLayers(e) {
    let t = [];
    return e.eachLayer((i) => {
      (i instanceof L.Polyline || i instanceof L.Marker || i instanceof L.Circle || i instanceof L.CircleMarker || i instanceof L.ImageOverlay) && t.push(i);
    }), t = t.filter((i) => !!i.pm), t = t.filter((i) => !i._pmTempLayer), t = t.filter((i) => !L.PM.optIn && !i.options.pmIgnore || L.PM.optIn && i.options.pmIgnore === !1), t;
  }, circleToPolygon(e, t = 60, i = !0) {
    let r = e.getLatLng(), a = e.getRadius(), n = zi(r, a, t, 0, i), s = [];
    for (let o = 0; o < n.length; o += 1) {
      let u = [n[o].lat, n[o].lng];
      s.push(u);
    }
    return L.polygon(s, e.options);
  }, disablePopup(e) {
    e.getPopup() && (e._tempPopupCopy = e.getPopup(), e.unbindPopup());
  }, enablePopup(e) {
    e._tempPopupCopy && (e.bindPopup(e._tempPopupCopy), delete e._tempPopupCopy);
  }, _fireEvent(e, t, i, r = !1) {
    e.fire(t, i, r);
    let { groups: a } = this.getAllParentGroups(e);
    a.forEach((n) => {
      n.fire(t, i, r);
    });
  }, getAllParentGroups(e) {
    let t = [], i = [], r = (a) => {
      for (let n in a._eventParents) if (t.indexOf(n) === -1) {
        t.push(n);
        let s = a._eventParents[n];
        i.push(s), r(s);
      }
    };
    return !e._pmLastGroupFetch || !e._pmLastGroupFetch.time || (/* @__PURE__ */ new Date()).getTime() - e._pmLastGroupFetch.time > 1e3 ? (r(e), e._pmLastGroupFetch = { time: (/* @__PURE__ */ new Date()).getTime(), groups: i, groupIds: t }, { groupIds: t, groups: i }) : { groups: e._pmLastGroupFetch.groups, groupIds: e._pmLastGroupFetch.groupIds };
  }, createGeodesicPolygon: zi, getTranslation: V, findDeepCoordIndex(e, t, i = !0) {
    let r, a = (s) => (o, u) => {
      let l = s.concat(u);
      if (i) {
        if (o.lat && o.lat === t.lat && o.lng === t.lng) return r = l, !0;
      } else if (o.lat && L.latLng(o).equals(t)) return r = l, !0;
      return Array.isArray(o) && o.some(a(l));
    };
    e.some(a([]));
    let n = {};
    return r && (n = { indexPath: r, index: r[r.length - 1], parentPath: r.slice(0, r.length - 1) }), n;
  }, findDeepMarkerIndex(e, t) {
    let i, r = (n) => (s, o) => {
      let u = n.concat(o);
      return s._leaflet_id === t._leaflet_id ? (i = u, !0) : Array.isArray(s) && s.some(r(u));
    };
    e.some(r([]));
    let a = {};
    return i && (a = { indexPath: i, index: i[i.length - 1], parentPath: i.slice(0, i.length - 1) }), a;
  }, _getIndexFromSegment(e, t) {
    if (t && t.length === 2) {
      let i = this.findDeepCoordIndex(e, t[0]), r = this.findDeepCoordIndex(e, t[1]), a = Math.max(i.index, r.index);
      return (i.index === 0 || r.index === 0) && a !== 1 && (a += 1), { indexA: i, indexB: r, newIndex: a, indexPath: i.indexPath, parentPath: i.parentPath };
    }
    return null;
  }, _getRotatedRectangle(e, t, i, r) {
    let a = at(r, e), n = at(r, t), s = i * Math.PI / 180, o = Math.cos(s), u = Math.sin(s), l = (n.x - a.x) * o + (n.y - a.y) * u, f = (n.y - a.y) * o - (n.x - a.x) * u, d = l * o + a.x, b = l * u + a.y, v = -f * u + a.x, D = f * o + a.y, P = Ut(r, a), O = Ut(r, { x: d, y: b }), I = Ut(r, n), g = Ut(r, { x: v, y: D });
    return [P, O, I, g];
  }, pxRadiusToMeterRadius(e, t, i) {
    let r = t.project(i), a = L.point(r.x + e, r.y);
    return t.distance(t.unproject(a), i);
  } }, Po = Ao;
  L.PM = L.PM || { version: Na.version, Map: Fn, Toolbar: Gn, Draw: oe, Edit: se, Utils: Po, Matrix: Do, activeLang: "en", optIn: !1, initialize(e) {
    this.addInitHooks(e);
  }, setOptIn(e) {
    this.optIn = !!e;
  }, addInitHooks() {
    function e() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Map(this)) : this.options.pmIgnore || (this.pm = new L.PM.Map(this)), this.pm && this.pm.setGlobalOptions({});
    }
    L.Map.addInitHook(e);
    function t() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.LayerGroup(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.LayerGroup(this));
    }
    L.LayerGroup.addInitHook(t);
    function i() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.options.textMarker ? (this.pm = new L.PM.Edit.Text(this), this.options._textMarkerOverPM || this.pm._initTextMarker(), delete this.options._textMarkerOverPM) : this.pm = new L.PM.Edit.Marker(this)) : this.options.pmIgnore || (this.options.textMarker ? (this.pm = new L.PM.Edit.Text(this), this.options._textMarkerOverPM || this.pm._initTextMarker(), delete this.options._textMarkerOverPM) : this.pm = new L.PM.Edit.Marker(this));
    }
    L.Marker.addInitHook(i);
    function r() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.CircleMarker(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.CircleMarker(this));
    }
    L.CircleMarker.addInitHook(r);
    function a() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Line(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Line(this));
    }
    L.Polyline.addInitHook(a);
    function n() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Polygon(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Polygon(this));
    }
    L.Polygon.addInitHook(n);
    function s() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Rectangle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Rectangle(this));
    }
    L.Rectangle.addInitHook(s);
    function o() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Circle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Circle(this));
    }
    L.Circle.addInitHook(o);
    function u() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.ImageOverlay(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.ImageOverlay(this));
    }
    L.ImageOverlay.addInitHook(u);
  }, reInitLayer(e) {
    e instanceof L.LayerGroup && e.eachLayer((t) => {
      this.reInitLayer(t);
    }), e.pm || L.PM.optIn && e.options.pmIgnore !== !1 || e.options.pmIgnore || (e instanceof L.Map ? e.pm = new L.PM.Map(e) : e instanceof L.Marker ? e.options.textMarker ? (e.pm = new L.PM.Edit.Text(e), e.pm._initTextMarker(), e.pm._createTextMarker(!1)) : e.pm = new L.PM.Edit.Marker(e) : e instanceof L.Circle ? e.pm = new L.PM.Edit.Circle(e) : e instanceof L.CircleMarker ? e.pm = new L.PM.Edit.CircleMarker(e) : e instanceof L.Rectangle ? e.pm = new L.PM.Edit.Rectangle(e) : e instanceof L.Polygon ? e.pm = new L.PM.Edit.Polygon(e) : e instanceof L.Polyline ? e.pm = new L.PM.Edit.Line(e) : e instanceof L.LayerGroup ? e.pm = new L.PM.Edit.LayerGroup(e) : e instanceof L.ImageOverlay && (e.pm = new L.PM.Edit.ImageOverlay(e)));
  } }, L.version === "1.7.1" && L.Canvas.include({ _onClick(e) {
    let t = this._map.mouseEventToLayerPoint(e), i, r;
    for (let a = this._drawFirst; a; a = a.next) i = a.layer, i.options.interactive && i._containsPoint(t) && (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(i)) && (r = i);
    r && (L.DomEvent.fakeStop(e), this._fireEvent([r], e));
  } }), L.PM.initialize();
})();
const No = { class: "base-map-wrapper" }, Uo = ["id"], Vo = /* @__PURE__ */ xr({
  __name: "BaseMap",
  props: {
    options: { default: () => ({}) },
    basemap: { default: "tianditu_img" },
    tiandituToken: { default: "93724b915d1898d946ca7dc7b765dda5" },
    showAnnotation: { type: Boolean, default: !0 }
  },
  emits: ["map-ready"],
  setup(ye, { expose: ie, emit: Q }) {
    const ee = {
      // 天地图影像
      tianditu_img: {
        url: "https://t{s}.tianditu.gov.cn/img_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        options: {
          subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
          maxZoom: 18
        },
        annotation: {
          url: "https://t{s}.tianditu.gov.cn/cia_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
          options: {
            subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
            transparent: !0,
            zIndex: 3
          }
        }
      },
      // 天地图矢量
      tianditu_vec: {
        url: "https://t{s}.tianditu.gov.cn/vec_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        options: {
          subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
          maxZoom: 18
        },
        annotation: {
          url: "https://t{s}.tianditu.gov.cn/cva_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
          options: {
            subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
            transparent: !0,
            zIndex: 3
          }
        }
      },
      // 天地图地形
      tianditu_ter: {
        url: "https://t{s}.tianditu.gov.cn/ter_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
        options: {
          subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
          maxZoom: 18
        },
        annotation: {
          url: "https://t{s}.tianditu.gov.cn/cta_w/wmts?tk={tk}&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}",
          options: {
            subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
            transparent: !0,
            zIndex: 3
          }
        }
      },
      // OpenStreetMap
      osm: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        options: {
          maxZoom: 19,
          attribution: "© OpenStreetMap contributors"
        }
      },
      // 高德地图
      gaode_vec: {
        url: "https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
        options: {
          subdomains: ["1", "2", "3", "4"],
          maxZoom: 18
        }
      },
      gaode_img: {
        url: "https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        options: {
          subdomains: ["1", "2", "3", "4"],
          maxZoom: 18
        }
      },
      // 暗色底图
      dark: {
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        options: {
          maxZoom: 19,
          attribution: "© CARTO"
        }
      },
      // 无底图
      none: null
    };
    let _e = 0;
    const de = ye, A = Q, Ge = fe(`base-map-${++_e}`), K = fe(null), Ce = fe(null), re = fe(null), ze = () => {
      const X = { ...{
        center: [35, 110],
        zoom: 4,
        maxZoom: 18,
        minZoom: 2,
        zoomControl: !0
      }, ...de.options }, { center: le, ...be } = X;
      K.value = Ze.map(Ge.value, be).setView(
        le,
        X.zoom
      ), Fe(de.basemap), A("map-ready", K.value);
    }, nt = () => K.value, Fe = (ae) => {
      if (!K.value) return;
      we();
      const X = ee[ae];
      if (!X) return;
      let le = X.url;
      if (le.includes("{tk}") && (le = le.replace(/{tk}/g, de.tiandituToken)), Ce.value = Ze.tileLayer(le, X.options), Ce.value.addTo(K.value), de.showAnnotation && X.annotation) {
        let be = X.annotation.url;
        be.includes("{tk}") && (be = be.replace(/{tk}/g, de.tiandituToken)), re.value = Ze.tileLayer(
          be,
          X.annotation.options
        ), re.value.addTo(K.value);
      }
    }, st = (ae, X = {}) => {
      K.value && (we(), Ce.value = Ze.tileLayer(ae, X), Ce.value.addTo(K.value));
    }, ot = (ae, X = {}) => {
      K.value && (je(), re.value = Ze.tileLayer(ae, {
        transparent: !0,
        zIndex: 3,
        ...X
      }), re.value.addTo(K.value));
    }, we = () => {
      K.value && (Ce.value && (K.value.removeLayer(Ce.value), Ce.value = null), je());
    }, je = () => {
      K.value && re.value && (K.value.removeLayer(re.value), re.value = null);
    }, ut = (ae) => {
      if (K.value)
        if (ae && !re.value) {
          const X = ee[de.basemap];
          if (X && X.annotation) {
            let le = X.annotation.url.replace(/{tk}/g, de.tiandituToken);
            re.value = Ze.tileLayer(le, X.annotation.options), re.value.addTo(K.value);
          }
        } else !ae && re.value && je();
    }, lt = (ae, X) => {
      var le;
      (le = K.value) == null || le.setView(ae, X);
    }, $e = (ae, X = {}) => {
      var le;
      (le = K.value) == null || le.fitBounds(ae, { padding: [50, 50], ...X });
    }, H = () => {
      K.value && (K.value.remove(), K.value = null);
    }, ue = () => Object.keys(ee);
    return Fo(() => {
      ze();
    }), Ro(() => {
      H();
    }), ie({
      getMap: nt,
      setBasemap: Fe,
      setCustomBasemap: st,
      setCustomAnnotation: ot,
      removeBasemap: we,
      removeAnnotation: je,
      toggleAnnotation: ut,
      setView: lt,
      fitBounds: $e,
      destroy: H,
      getBasemapPresets: ue
    }), (ae, X) => (Er(), Br("div", No, [
      Z("div", {
        id: Ge.value,
        class: "map-container"
      }, null, 8, Uo)
    ]));
  }
}), Dr = (ye, ie) => {
  const Q = ye.__vccOpts || ye;
  for (const [ee, _e] of ie)
    Q[ee] = _e;
  return Q;
}, Ko = /* @__PURE__ */ Dr(Vo, [["__scopeId", "data-v-37eeeb99"]]), qo = { class: "wms-page" }, Ho = { class: "controls" }, Yo = { class: "control-item" }, Xo = { class: "control-item" }, Zo = ["disabled"], $o = { class: "control-item" }, Jo = ["disabled"], Wo = { class: "control-item" }, Qo = ["disabled"], eu = ["disabled"], tu = { class: "control-item" }, iu = { class: "wms-info" }, ru = /* @__PURE__ */ xr({
  __name: "WmsPage",
  setup(ye) {
    const ie = fe(null), Q = fe(null), ee = fe(null), _e = fe(!0), de = fe(0.8), A = fe("population"), Ge = fe("osm"), K = fe("http://localhost:8080/geoserver/wms"), Ce = fe("ne:my_points"), re = fe([
      [24, -130],
      [50, -66]
    ]), ze = fe({
      center: [37, -98],
      zoom: 4,
      maxZoom: 18,
      minZoom: 2
    }), nt = ($e) => {
      Q.value = $e, _e.value && Fe();
    }, Fe = () => {
      Q.value && (ee.value && Q.value.removeLayer(ee.value), ee.value = Ze.tileLayer.wms(K.value, {
        layers: Ce.value,
        styles: A.value,
        format: "image/png",
        transparent: !0,
        version: "1.1.1",
        opacity: de.value,
        attribution: "GeoServer Demo"
      }), ee.value.addTo(Q.value));
    }, st = () => {
      _e.value ? Fe() : ee.value && Q.value && (Q.value.removeLayer(ee.value), ee.value = null);
    }, ot = () => {
      ee.value && ee.value.setOpacity(de.value);
    }, we = () => {
      ee.value && Fe();
    }, je = () => {
      ie.value && ie.value.setBasemap(Ge.value);
    }, ut = () => {
      Q.value && Q.value.fitBounds(re.value);
    }, lt = () => {
      ee.value && Fe();
    };
    return ($e, H) => (Er(), Br("div", qo, [
      Oo(Ko, {
        ref_key: "baseMap",
        ref: ie,
        basemap: "osm",
        options: ze.value,
        "show-annotation": !1,
        onMapReady: nt
      }, null, 8, ["options"]),
      Z("div", Ho, [
        H[10] || (H[10] = Z("h3", null, "WMS 图层控制", -1)),
        Z("div", Yo, [
          Z("label", null, [
            Kt(Z("input", {
              type: "checkbox",
              "onUpdate:modelValue": H[0] || (H[0] = (ue) => _e.value = ue),
              onChange: st
            }, null, 544), [
              [Io, _e.value]
            ]),
            H[4] || (H[4] = Go(" WMS 图层 (topp:states) ", -1))
          ])
        ]),
        Z("div", Xo, [
          H[5] || (H[5] = Z("label", null, "透明度", -1)),
          Kt(Z("input", {
            type: "range",
            "onUpdate:modelValue": H[1] || (H[1] = (ue) => de.value = ue),
            min: "0",
            max: "1",
            step: "0.1",
            onInput: ot,
            disabled: !_e.value
          }, null, 40, Zo), [
            [
              zo,
              de.value,
              void 0,
              { number: !0 }
            ]
          ]),
          Z("span", null, Ci(de.value), 1)
        ]),
        Z("div", $o, [
          H[7] || (H[7] = Z("label", null, "图层样式", -1)),
          Kt(Z("select", {
            "onUpdate:modelValue": H[2] || (H[2] = (ue) => A.value = ue),
            onChange: we,
            disabled: !_e.value
          }, [...H[6] || (H[6] = [
            Z("option", { value: "population" }, "population", -1),
            Z("option", { value: "pophatch" }, "pophatch", -1),
            Z("option", { value: "polygon" }, "polygon", -1)
          ])], 40, Jo), [
            [Mr, A.value]
          ])
        ]),
        Z("div", Wo, [
          Z("button", {
            onClick: ut,
            disabled: !_e.value
          }, "定位到图层", 8, Qo),
          Z("button", {
            onClick: lt,
            disabled: !_e.value
          }, "刷新图层", 8, eu)
        ]),
        Z("div", tu, [
          H[9] || (H[9] = Z("label", null, "底图切换", -1)),
          Kt(Z("select", {
            "onUpdate:modelValue": H[3] || (H[3] = (ue) => Ge.value = ue),
            onChange: je
          }, [...H[8] || (H[8] = [
            jo('<option value="osm" data-v-b72b9f0b>OpenStreetMap</option><option value="tianditu_img" data-v-b72b9f0b>天地图影像</option><option value="tianditu_vec" data-v-b72b9f0b>天地图矢量</option><option value="dark" data-v-b72b9f0b>暗色底图</option><option value="gaode_vec" data-v-b72b9f0b>高德矢量</option>', 5)
          ])], 544), [
            [Mr, Ge.value]
          ])
        ]),
        Z("div", iu, [
          Z("p", null, "服务地址: " + Ci(K.value), 1),
          Z("p", null, "图层: " + Ci(Ce.value), 1)
        ])
      ])
    ]));
  }
}), ou = /* @__PURE__ */ Dr(ru, [["__scopeId", "data-v-b72b9f0b"]]);
export {
  ou as default
};
