(function() { try { var style = document.createElement("style"); style.textContent = "\n.leader-line-page[data-v-b6c4a024] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.base-map-wrapper[data-v-37eeeb99] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.map-container[data-v-37eeeb99] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.control-panel[data-v-d8c4d04f] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 260px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  transition: transform 0.3s ease;\n}\n.control-panel.collapsed[data-v-d8c4d04f] {\n  transform: translateX(calc(100% - 24px));\n}\n.control-header[data-v-d8c4d04f] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: #2c3e50;\n  color: #fff;\n  border-radius: 8px 8px 0 0;\n  font-weight: bold;\n}\n.header-actions[data-v-d8c4d04f] {\n  display: flex;\n  gap: 8px;\n}\n.control-body[data-v-d8c4d04f] {\n  padding: 12px 16px;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.select-all[data-v-d8c4d04f] {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 10px;\n}\n.auto-layout-switch[data-v-d8c4d04f] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n.panel-list[data-v-d8c4d04f] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.panel-item[data-v-d8c4d04f] {\n  padding: 4px 0;\n}\n.panel-label[data-v-d8c4d04f] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.panel-color[data-v-d8c4d04f] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n}\n.collapse-btn[data-v-d8c4d04f] {\n  position: absolute;\n  left: -24px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 24px;\n  height: 48px;\n  background: #2c3e50;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 4px 0 0 4px;\n  font-size: 12px;\n}\n.collapse-btn[data-v-d8c4d04f]:hover {\n  background: #34495e;\n}\n\n.leader-panel-layer[data-v-28bc6137] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1000;\n}\n.leader-lines-svg[data-v-28bc6137] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  pointer-events: none;\n  z-index: 0; /* 引线在最底层 */\n}\n.marker-icon{background-color:#fff;border:1px solid #3388ff;border-radius:50%;margin:-8px 0 0 -8px!important;width:14px!important;height:14px!important;outline:0;transition:opacity ease .3s}.marker-icon-middle{opacity:.7;margin:-6px 0 0 -6px!important;width:10px!important;height:10px!important}.leaflet-pm-draggable{cursor:move!important}.cursor-marker{cursor:crosshair;pointer-events:none;opacity:0}.cursor-marker.visible{opacity:1!important}.geoman-draw-cursor,.geoman-draw-cursor .leaflet-interactive{cursor:crosshair}.rect-style-marker,.rect-start-marker{opacity:0}.rect-style-marker.visible,.rect-start-marker.visible{opacity:1!important}.vertexmarker-disabled{opacity:.7}.pm-text-marker{width:0;height:0}.pm-textarea{box-sizing:content-box;background-color:#fff;color:#000;resize:none;border:none;outline:0;cursor:pointer;border-radius:3px;padding-left:7px;padding-bottom:0;padding-top:4px}.leaflet-pm-draggable .pm-textarea{cursor:move}.pm-textarea:focus,.pm-textarea:focus-within,.pm-textarea:focus-visible,.pm-textarea:active{border:2px solid #000;outline:0}.pm-textarea.pm-disabled{border:none;user-select:none}.pm-textarea.pm-hasfocus{cursor:auto}.leaflet-pm-touch-hint{position:absolute;top:var(--pm-touch-hint-top, 10px);left:50%;transform:translate(-50%);background:#fffffff2;color:#333;padding:8px 16px;border-radius:4px;box-shadow:0 2px 6px #0003;z-index:1000;font-size:14px;pointer-events:none}.leaflet-pm-toolbar .leaflet-buttons-control-button{padding:5px;box-sizing:border-box;position:relative;z-index:3}.leaflet-pm-toolbar .leaflet-pm-actions-container a.leaflet-pm-action:first-child:not(.pos-right),.leaflet-pm-toolbar .leaflet-pm-actions-container a.leaflet-pm-action:last-child.pos-right{border-radius:0}.leaflet-pm-toolbar .button-container a.leaflet-buttons-control-button{border-radius:0}.leaflet-pm-toolbar .button-container:last-child a.leaflet-buttons-control-button{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-pm-toolbar .button-container:first-child a.leaflet-buttons-control-button{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-pm-toolbar .button-container:last-child a.leaflet-buttons-control-button{border-bottom:none}.leaflet-pm-toolbar .control-fa-icon{font-size:19px;line-height:24px}.leaflet-pm-toolbar .control-icon{width:100%;height:100%;box-sizing:border-box;background-size:contain;background-repeat:no-repeat;background-position:center center}.leaflet-pm-toolbar .leaflet-pm-icon-marker{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->%0A    <title>Atoms/Icons/Tools/Marker</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M15.5,24.8782959 C15.2909201,24.8772219 15.1744857,24.8467817 14.6590866,24.2354163 C10.2196955,19.4118054 8,15.5014392 8,12.5043177 C8,8.35979746 11.3578644,5 15.5,5 C19.6421356,5 23,8.35979746 23,12.5043177 C23,17 18.2878217,21.9268378 16.3336601,24.2440186 C15.8224622,24.8501802 15.7090799,24.8793699 15.5,24.8782959 Z M15.5,15.5326948 C17.275201,15.5326948 18.7142857,14.1180004 18.7142857,12.3728864 C18.7142857,10.6277723 17.275201,9.21307792 15.5,9.21307792 C13.724799,9.21307792 12.2857143,10.6277723 12.2857143,12.3728864 C12.2857143,14.1180004 13.724799,15.5326948 15.5,15.5326948 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Marker\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Mask\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23path-1\"></use>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-polygon{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"polygon-a\" d=\"M19.4206892,9.16509725 C19.1523681,8.66992914 19,8.10275831 19,7.5 C19,5.56700338 20.5670034,4 22.5,4 C24.4329966,4 26,5.56700338 26,7.5 C26,9.26323595 24.6961471,10.7219407 23,10.9645556 L23,19.0354444 C24.6961471,19.2780593 26,20.736764 26,22.5 C26,24.4329966 24.4329966,26 22.5,26 C20.736764,26 19.2780593,24.6961471 19.0354444,23 L10.9645556,23 C10.7219407,24.6961471 9.26323595,26 7.5,26 C5.56700338,26 4,24.4329966 4,22.5 C4,20.5670034 5.56700338,19 7.5,19 C8.10275831,19 8.66992914,19.1523681 9.16509725,19.4206892 L19.4206892,9.16509725 Z M20.8349073,10.5793063 L10.5793108,20.8349027 C10.6086731,20.8890888 10.6366469,20.9441372 10.6631844,21 L19.3368156,21 C19.6825775,20.272154 20.272154,19.6825775 21,19.3368156 L21,10.6631844 C20.9441372,10.6366469 20.8890888,10.6086731 20.8349027,10.5793108 Z M22.5,9 C23.3284271,9 24,8.32842712 24,7.5 C24,6.67157288 23.3284271,6 22.5,6 C21.6715729,6 21,6.67157288 21,7.5 C21,8.32842712 21.6715729,9 22.5,9 Z M22.5,24 C23.3284271,24 24,23.3284271 24,22.5 C24,21.6715729 23.3284271,21 22.5,21 C21.6715729,21 21,21.6715729 21,22.5 C21,23.3284271 21.6715729,24 22.5,24 Z M7.5,24 C8.32842712,24 9,23.3284271 9,22.5 C9,21.6715729 8.32842712,21 7.5,21 C6.67157288,21 6,21.6715729 6,22.5 C6,23.3284271 6.67157288,24 7.5,24 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"polygon-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23polygon-a\"/>%0A    </mask>%0A    <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23polygon-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23polygon-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-polyline{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"line-a\" d=\"M9.16509725,19.4206892 L18.4206892,10.1650973 C18.1523681,9.66992914 18,9.10275831 18,8.5 C18,6.56700338 19.5670034,5 21.5,5 C23.4329966,5 25,6.56700338 25,8.5 C25,10.4329966 23.4329966,12 21.5,12 C20.8972417,12 20.3300709,11.8476319 19.8349027,11.5793108 L10.5793108,20.8349027 C10.8476319,21.3300709 11,21.8972417 11,22.5 C11,24.4329966 9.43299662,26 7.5,26 C5.56700338,26 4,24.4329966 4,22.5 C4,20.5670034 5.56700338,19 7.5,19 C8.10275831,19 8.66992914,19.1523681 9.16509725,19.4206892 Z M21.5,10 C22.3284271,10 23,9.32842712 23,8.5 C23,7.67157288 22.3284271,7 21.5,7 C20.6715729,7 20,7.67157288 20,8.5 C20,9.32842712 20.6715729,10 21.5,10 Z M7.5,24 C8.32842712,24 9,23.3284271 9,22.5 C9,21.6715729 8.32842712,21 7.5,21 C6.67157288,21 6,21.6715729 6,22.5 C6,23.3284271 6.67157288,24 7.5,24 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"line-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23line-a\"/>%0A    </mask>%0A    <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23line-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23line-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-circle{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->%0A    <title>Atoms/Icons/Tools/Circle</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M18.2897751,6.78602275 C18.8924131,6.29464981 19.661797,6 20.5,6 C22.4329966,6 24,7.56700338 24,9.5 C24,10.338203 23.7053502,11.1075869 23.2139772,11.7102249 C23.719599,12.8712053 24,14.1528571 24,15.5 C24,20.7467051 19.7467051,25 14.5,25 C9.25329488,25 5,20.7467051 5,15.5 C5,10.2532949 9.25329488,6 14.5,6 C15.8471429,6 17.1287947,6.28040098 18.2897751,6.78602275 Z M17.1504228,8.4817586 C16.3263581,8.17039236 15.4330777,8 14.5,8 C10.3578644,8 7,11.3578644 7,15.5 C7,19.6421356 10.3578644,23 14.5,23 C18.6421356,23 22,19.6421356 22,15.5 C22,14.5669223 21.8296076,13.6736419 21.5182414,12.8495772 C21.1960383,12.9473968 20.8541622,13 20.5,13 C18.5670034,13 17,11.4329966 17,9.5 C17,9.14583778 17.0526032,8.80396169 17.1504228,8.4817586 Z M14.5,17 C13.6715729,17 13,16.3284271 13,15.5 C13,14.6715729 13.6715729,14 14.5,14 C15.3284271,14 16,14.6715729 16,15.5 C16,16.3284271 15.3284271,17 14.5,17 Z M20.5,11 C21.3284271,11 22,10.3284271 22,9.5 C22,8.67157288 21.3284271,8 20.5,8 C19.6715729,8 19,8.67157288 19,9.5 C19,10.3284271 19.6715729,11 20.5,11 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Circle\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Mask\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23path-1\"></use>%0A            <g id=\"Atoms/Color/Grey\" mask=\"url(%23mask-2)\" fill=\"%235B5B5B\">%0A                <rect id=\"Rectangle\" x=\"0\" y=\"0\" width=\"30\" height=\"30\"></rect>%0A            </g>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-circle-marker{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A%0A<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"%235B5B5B\" stroke-width=\"8\"%0A     fill=\"none\">%0A<circle cx=\"50\" cy=\"50\" r=\"35\"/>%0A  <circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"%235B5B5B\"/>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-rectangle{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"rectangle-a\" d=\"M23,10.9645556 L23,19.0354444 C24.6961471,19.2780593 26,20.736764 26,22.5 C26,24.4329966 24.4329966,26 22.5,26 C20.736764,26 19.2780593,24.6961471 19.0354444,23 L10.9645556,23 C10.7219407,24.6961471 9.26323595,26 7.5,26 C5.56700338,26 4,24.4329966 4,22.5 C4,20.736764 5.30385293,19.2780593 7,19.0354444 L7,10.9645556 C5.30385293,10.7219407 4,9.26323595 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 C9.26323595,4 10.7219407,5.30385293 10.9645556,7 L19.0354444,7 C19.2780593,5.30385293 20.736764,4 22.5,4 C24.4329966,4 26,5.56700338 26,7.5 C26,9.26323595 24.6961471,10.7219407 23,10.9645556 Z M21,10.6631844 C20.272154,10.3174225 19.6825775,9.72784598 19.3368156,9 L10.6631844,9 C10.3174225,9.72784598 9.72784598,10.3174225 9,10.6631844 L9,19.3368156 C9.72784598,19.6825775 10.3174225,20.272154 10.6631844,21 L19.3368156,21 C19.6825775,20.272154 20.272154,19.6825775 21,19.3368156 L21,10.6631844 Z M7.5,9 C8.32842712,9 9,8.32842712 9,7.5 C9,6.67157288 8.32842712,6 7.5,6 C6.67157288,6 6,6.67157288 6,7.5 C6,8.32842712 6.67157288,9 7.5,9 Z M22.5,9 C23.3284271,9 24,8.32842712 24,7.5 C24,6.67157288 23.3284271,6 22.5,6 C21.6715729,6 21,6.67157288 21,7.5 C21,8.32842712 21.6715729,9 22.5,9 Z M22.5,24 C23.3284271,24 24,23.3284271 24,22.5 C24,21.6715729 23.3284271,21 22.5,21 C21.6715729,21 21,21.6715729 21,22.5 C21,23.3284271 21.6715729,24 22.5,24 Z M7.5,24 C8.32842712,24 9,23.3284271 9,22.5 C9,21.6715729 8.32842712,21 7.5,21 C6.67157288,21 6,21.6715729 6,22.5 C6,23.3284271 6.67157288,24 7.5,24 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"rectangle-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23rectangle-a\"/>%0A    </mask>%0A    <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23rectangle-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23rectangle-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-delete{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->%0A    <title>Atoms/Icons/Tools/Eraser</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M17.7874219,18.4812552 L11.6480079,13.3498184 L6.40466009,19.3816001 L10.5539156,22.9884929 L13.86934,22.9884929 L17.7874219,18.4812552 Z M16.5074252,22.9884929 L26.0000002,22.9884929 L26.0000002,24.9884929 L10.0000002,24.9884929 L9.80708313,24.9884929 L5.09254204,20.8910192 C4.25891285,20.1663564 4.17057814,18.9031112 4.89524093,18.069482 L16.0482444,5.23941916 C16.7729072,4.40578998 18.0361525,4.31745526 18.8697816,5.04211806 L24.9074583,10.2905903 C25.7410875,11.0152531 25.8294222,12.2784983 25.1047594,13.1121275 L16.5074252,22.9884929 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Eraser\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Combined-Shape\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23path-1\"></use>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-edit{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"edit_anchor-a\" d=\"M13.5,11 C11.5670034,11 10,9.43299662 10,7.5 C10,5.56700338 11.5670034,4 13.5,4 C15.4329966,4 17,5.56700338 17,7.5 C17,9.43299662 15.4329966,11 13.5,11 Z M13.5,9 C14.3284271,9 15,8.32842712 15,7.5 C15,6.67157288 14.3284271,6 13.5,6 C12.6715729,6 12,6.67157288 12,7.5 C12,8.32842712 12.6715729,9 13.5,9 Z M12.0002889,7.52973893 C12.0125983,8.16273672 12.4170197,8.6996643 12.9807111,8.90767966 L3,15 L3,13 L12.0002889,7.52973893 Z M14.2172722,6.18228472 L19.453125,3 L22.6589355,3 L14.989102,7.68173885 C14.9962971,7.62216459 15,7.56151472 15,7.5 C15,6.93138381 14.6836098,6.4366645 14.2172722,6.18228472 Z M23.4434042,19.2851736 L20.1282799,19.2851736 L21.8729983,23.5349525 C21.9945296,23.8295773 21.8556546,24.1599209 21.5778734,24.2849208 L20.0414675,24.9545142 C19.7550613,25.0795141 19.4338738,24.9366704 19.3123426,24.6509518 L17.6544367,20.6154541 L14.9461873,23.4010151 C14.5852811,23.7721711 14,23.4860463 14,22.9992653 L14,9.57183533 C14,9.05933561 14.6225311,8.809492 14.946156,9.17008555 L23.8340292,18.3120179 C24.1925291,18.6613615 23.9279979,19.2851736 23.4434042,19.2851736 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"edit_anchor-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23edit_anchor-a\"/>%0A    </mask>%0A    <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23edit_anchor-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23edit_anchor-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-drag{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A  <defs>%0A    <path id=\"move-a\" d=\"M21,14 L21,10 L27,15 L21,20 L21,16 L16,16 L16,21 L20,21 L15,27 L10,21 L14,21 L14,16 L9,16 L9,20 L3,15 L9,10 L9,14 L14,14 L14,9 L10,9 L15,3 L20,9 L16,9 L16,14 L21,14 Z\"/>%0A  </defs>%0A  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-3 -3)\">%0A    <mask id=\"move-b\" fill=\"%23fff\">%0A      <use xlink:href=\"%23move-a\"/>%0A    </mask>%0A    <use fill=\"%23D8D8D8\" xlink:href=\"%23move-a\"/>%0A    <g fill=\"%235B5B5B\" mask=\"url(%23move-b)\">%0A      <rect width=\"30\" height=\"30\"/>%0A    </g>%0A  </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-cut{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->%0A    <title>Atoms/Icons/Tools/Scissors</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M12.9691574,13.4939435 L21.0317032,5.54167013 L23.4649499,5.67722957 L17.0470713,14.5106816 L27.5660336,17.1333535 L25.7891944,18.8012588 L14.5854951,17.8987506 L13.6487955,19.188007 C13.794639,19.2650958 13.9367985,19.3534417 14.0741377,19.4532245 C15.6379648,20.5894114 15.9846357,22.7782052 14.8484488,24.3420324 C13.7122619,25.9058595 11.5234681,26.2525304 9.95964096,25.1163435 C8.39581384,23.9801565 8.04914296,21.7913627 9.18532986,20.2275356 C9.74587276,19.4560145 10.5626188,18.9807475 11.4341218,18.8336407 L12.6805656,17.1180579 L12.5239724,16.3747216 L11.9506932,15.3012391 L9.89310646,14.7882251 C9.13093796,15.2357261 8.19977854,15.3966447 7.27445355,15.1659352 C5.39887519,14.698301 4.25751094,12.7987519 4.72514515,10.9231736 C5.19277935,9.04759519 7.09232846,7.90623094 8.96790682,8.37386515 C10.8434852,8.84149935 11.9848494,10.7410485 11.5172152,12.6166268 C11.4761464,12.7813449 11.4240335,12.9404001 11.3618627,13.0931999 L12.9691574,13.4939435 Z M7.75829735,13.2253438 C8.56211664,13.4257584 9.37620912,12.9366023 9.57662378,12.132783 C9.77703844,11.3289637 9.28788233,10.5148713 8.48406303,10.3144566 C7.68024373,10.1140419 6.86615126,10.603198 6.6657366,11.4070173 C6.46532194,12.2108366 6.95447805,13.0249291 7.75829735,13.2253438 Z M10.8033639,21.4031061 C10.3164266,22.0733177 10.4649998,23.0113722 11.1352115,23.4983095 C11.8054231,23.9852467 12.7434776,23.8366735 13.2304148,23.1664619 C13.7173521,22.4962502 13.5687788,21.5581957 12.8985672,21.0712585 C12.2283556,20.5843212 11.2903011,20.7328945 10.8033639,21.4031061 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Scissors\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Mask\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" transform=\"translate(16.093194, 15.663351) rotate(-32.000000) translate(-16.093194, -15.663351) \" xlink:href=\"%23path-1\"></use>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-snapping{background-image:url(\'data:image/svg+xml,<?xml version=\"1.0\" encoding=\"UTF-8\"?>%0A<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">%0A    <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->%0A    <title>Atoms/Icons/Tools/Magnet</title>%0A    <desc>Created with Sketch.</desc>%0A    <defs>%0A        <path d=\"M21.9994759,10.9428183 L21.9999985,16.3710417 C22,16.6872007 22,17.0058278 22,17.3269411 C22,21.5646545 18.6421356,25 14.5,25 C10.3578644,25 7,21.5646545 7,17.3269411 L7.00087508,10.9907507 L11.0022808,10.9984125 C11.0017033,11.6980114 11.001247,12.4168248 11.0008992,13.1554887 L11,17.3269411 C11,19.3756809 12.5876841,21 14.5,21 C16.4123159,21 18,19.3756809 18,17.3269411 C18,15.0702032 17.9995696,12.9619668 17.998539,10.9910032 L21.9994759,10.9428183 Z M10,7 C10.5522847,7 11,7.44771525 11,8 L11,10 L7,10 L7,8 C7,7.44771525 7.44771525,7 8,7 L10,7 Z M21,7 C21.5522847,7 22,7.44771525 22,8 L22,10 L18,10 L18,8 C18,7.44771525 18.4477153,7 19,7 L21,7 Z\" id=\"path-1\"></path>%0A    </defs>%0A    <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">%0A        <g id=\"Atoms/Icons/Tools/Magnet\" transform=\"translate(-3.000000, -3.000000)\">%0A            <mask id=\"mask-2\" fill=\"white\">%0A                <use xlink:href=\"%23path-1\"></use>%0A            </mask>%0A            <use id=\"Mask\" fill=\"%235B5B5B\" fill-rule=\"nonzero\" transform=\"translate(14.500000, 16.000000) rotate(45.000000) translate(-14.500000, -16.000000) \" xlink:href=\"%23path-1\"></use>%0A        </g>%0A    </g>%0A</svg>\')}.leaflet-pm-toolbar .leaflet-pm-icon-rotate{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">%0A    <defs>%0A        <path id=\"rotate\" d=\"M21.2,5.8c-0.1-0.2-0.2-0.3-0.3-0.5l-0.1-0.2c-0.1-0.2-0.2-0.3-0.3-0.5l-0.1-0.2c-0.1-0.2-0.2-0.3-0.4-0.5l-0.2-0.3l2.8-3.1L18,0.6l-4.6,0.1l0.5,4.5l0.5,4.5l3.2-3.6v0.1l0.1,0.2c0.1,0.1,0.1,0.2,0.2,0.2l0.1,0.2C18,7,18,7.1,18.1,7.2c0.3,0.7,0.6,1.4,0.7,2.1c0.2,1.4,0,2.9-0.6,4.2L18,13.9L17.9,14l-0.3,0.5l-0.1,0.2c-0.2,0.2-0.4,0.5-0.6,0.7c-0.5,0.5-1.1,1-1.7,1.3c-0.6,0.4-1.3,0.6-2.1,0.8c-0.7,0.1-1.5,0.2-2.2,0.1c-0.8-0.1-1.5-0.3-2.2-0.5c-0.7-0.3-1.3-0.7-1.9-1.2l-0.4-0.4l-0.2-0.3L6,15c-0.1-0.1-0.2-0.2-0.2-0.3l-0.3-0.4l-0.1-0.1l-0.2-0.4c0-0.1-0.1-0.1-0.1-0.2l-0.3-0.5l-0.1-0.2c-0.1-0.3-0.2-0.6-0.3-0.9c-0.2-0.8-0.3-1.6-0.3-2.4c0-0.2,0-0.3,0-0.5V8.9c0-0.2,0-0.3,0.1-0.4l0.1-0.6l0.2-0.6c0.3-0.8,0.7-1.5,1.2-2.2c0.5-0.7,1.1-1.3,1.8-1.8c0.2-0.1,0.3-0.4,0.1-0.6C7.5,2.6,7.4,2.5,7.3,2.5H7.1L7,2.6C6.1,3,5.4,3.6,4.7,4.2C4,4.9,3.5,5.7,3,6.6c-0.9,1.8-1.2,3.8-0.8,5.8c0.1,0.5,0.2,0.9,0.3,1.4l0.3,0.8C2.9,14.7,3,14.8,3,15l0.2,0.4c0,0.1,0.1,0.2,0.1,0.2l0.3,0.5c0.1,0.2,0.2,0.3,0.3,0.5l0.1,0.2c0.1,0.1,0.2,0.3,0.3,0.4L5,17.8c0.7,0.7,1.6,1.3,2.5,1.8c0.9,0.5,1.9,0.8,3,0.9c0.5,0.1,1,0.1,1.5,0.1c0.6,0,1.1,0,1.6-0.1c1-0.2,2.1-0.5,3-1l0.2-0.1c0.2-0.1,0.3-0.2,0.5-0.3l0.7-0.4c0.2-0.1,0.3-0.2,0.4-0.3l0.2-0.2c0.2-0.1,0.4-0.3,0.5-0.5l0.1-0.1c0.3-0.3,0.7-0.7,0.9-1l0.6-0.9l0.4-0.6c1-1.9,1.4-4.1,1.1-6.2C22,7.8,21.7,6.7,21.2,5.8z\"/>%0A    </defs>%0A    <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0 2)\">%0A        <mask id=\"rotate-b\" fill=\"%23fff\">%0A            <use xlink:href=\"%23rotate\"/>%0A        </mask>%0A        <use fill=\"%235B5B5B\" fill-rule=\"nonzero\" xlink:href=\"%23rotate\"/>%0A        <g fill=\"%235B5B5B\" mask=\"url(%23rotate-b)\">%0A            <rect width=\"30\" height=\"30\"/>%0A        </g>%0A    </g>%0A</svg>%0A\')}.leaflet-pm-toolbar .leaflet-pm-icon-text{background-image:url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">%0A  <title>Text</title>%0A  <g id=\"Ebene_2\" data-name=\"Ebene 2\">%0A    <polyline points=\"19.64 7.27 19.64 4 12 4 12 20 15.91 20 8.09 20 12 20 12 4 4.36 4 4.36 7.27\" fill=\"none\" stroke=\"%235b5b5b\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5px\"/>%0A  </g>%0A</svg>\')}.leaflet-buttons-control-button:hover,.leaflet-buttons-control-button:focus{cursor:pointer;background-color:#f4f4f4}.active>.leaflet-buttons-control-button{box-shadow:inset 0 -1px 5px 2px #514d4d4f}.leaflet-buttons-control-text-hide{display:none}.button-container{position:relative}.button-container .leaflet-pm-actions-container{z-index:2;position:absolute;top:0;left:100%;display:none;white-space:nowrap;direction:ltr}.leaflet-right .leaflet-pm-toolbar .button-container .leaflet-pm-actions-container{right:100%;left:auto}.button-container.active .leaflet-pm-actions-container{display:block}.button-container .leaflet-pm-actions-container:not(.pos-right) a.leaflet-pm-action:last-child{border-radius:0 3px 3px 0;border-right:0}.button-container .leaflet-pm-actions-container.pos-right a.leaflet-pm-action:first-child{border-radius:3px 0 0 3px}.button-container .leaflet-pm-actions-container.pos-right a.leaflet-pm-action:last-child{border-right:0}.button-container .leaflet-pm-actions-container .leaflet-pm-action{padding:0 10px;background-color:#666;color:#fff;display:inline-block;width:auto;border-right:1px solid #eee;user-select:none;border-bottom:none;height:29px;line-height:29px;vertical-align:middle}.leaflet-pm-toolbar .button-container:first-child.pos-right.active a.leaflet-buttons-control-button{border-top-left-radius:0}.leaflet-pm-toolbar .button-container:first-child.active:not(.pos-right) a.leaflet-buttons-control-button{border-top-right-radius:0}.button-container .leaflet-pm-actions-container .leaflet-pm-action:hover,.button-container .leaflet-pm-actions-container .leaflet-pm-action:focus{cursor:pointer;background-color:#777}.button-container .leaflet-pm-actions-container .leaflet-pm-action.active-action{background-color:#8e8e8e}.leaflet-pm-toolbar.activeChild{z-index:801}.leaflet-buttons-control-button.pm-disabled{background-color:#f4f4f4}.leaflet-buttons-control-button.pm-disabled>.control-icon{filter:opacity(.6)}.button-container .leaflet-pm-actions-container .pm-action-button-mode.control-icon{filter:brightness(0) invert(1);width:18px}\n\n/*# sourceMappingURL=leaflet-geoman.css.map */\n.leader-panel-wrapper[data-v-34e3aa18] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.leader-line-svg[data-v-34e3aa18] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  pointer-events: none;\n}\n.panel-content[data-v-34e3aa18] {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.98);\n  border: 2px solid #e74c3c;\n  border-radius: 4px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);\n  min-width: 150px;\n  cursor: move;\n  pointer-events: auto;\n  user-select: none;\n}\n.panel-header[data-v-34e3aa18] {\n  background: #e74c3c;\n  color: #fff;\n  padding: 6px 10px;\n  font-weight: bold;\n  font-size: 12px;\n}\n.panel-body[data-v-34e3aa18] {\n  padding: 8px;\n  font-size: 12px;\n}\n.panel-table[data-v-34e3aa18] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.panel-table td[data-v-34e3aa18] {\n  padding: 3px 6px;\n  border: 1px solid #ddd;\n  white-space: nowrap;\n}\n.panel-table .cell-label[data-v-34e3aa18] {\n  background: #f5f5f5;\n  font-weight: 500;\n}\n.panel-text[data-v-34e3aa18] {\n  line-height: 1.5;\n}\n"; document.head.appendChild(style); } catch(e) { console.error("CSS inject error:", e); } })();

var l0 = Object.defineProperty;
var h0 = (n, r, a) => r in n ? l0(n, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[r] = a;
var cA = (n, r, a) => h0(n, typeof r != "symbol" ? r + "" : r, a);
import { defineComponent as Br, ref as UA, onMounted as ra, onUnmounted as ia, openBlock as MA, createElementBlock as DA, createElementVNode as GA, computed as lt, watch as Mn, nextTick as In, withDirectives as c0, createCommentVNode as sr, normalizeStyle as Bo, toDisplayString as ot, Fragment as or, renderList as ur, normalizeClass as go, vShow as B0, createBlock as po, resolveComponent as sn, createVNode as xt, withCtx as on, createTextVNode as un } from "vue";
import { message as Bs } from "ant-design-vue";
import yt from "leaflet";
var Rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
(() => {
  var hs, cs;
  var n = Object.create, r = Object.defineProperty, a = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, l = Object.getPrototypeOf, B = Object.prototype.hasOwnProperty, g = (A, e) => () => (e || A((e = { exports: {} }).exports, e), e.exports), w = (A, e, t, i) => {
    if (e && typeof e == "object" || typeof e == "function") for (let o of s(e)) !B.call(A, o) && o !== t && r(A, o, { get: () => e[o], enumerable: !(i = a(e, o)) || i.enumerable });
    return A;
  }, C = (A, e, t) => (t = A != null ? n(l(A)) : {}, w(e || !A || !A.__esModule ? r(t, "default", { value: A, enumerable: !0 }) : t, A)), E = g((A, e) => {
    function t() {
      this.__data__ = [], this.size = 0;
    }
    e.exports = t;
  }), v = g((A, e) => {
    function t(i, o) {
      return i === o || i !== i && o !== o;
    }
    e.exports = t;
  }), D = g((A, e) => {
    var t = v();
    function i(o, u) {
      for (var h = o.length; h--; ) if (t(o[h][0], u)) return h;
      return -1;
    }
    e.exports = i;
  }), R = g((A, e) => {
    var t = D(), i = Array.prototype, o = i.splice;
    function u(h) {
      var c = this.__data__, p = t(c, h);
      if (p < 0) return !1;
      var f = c.length - 1;
      return p == f ? c.pop() : o.call(c, p, 1), --this.size, !0;
    }
    e.exports = u;
  }), q = g((A, e) => {
    var t = D();
    function i(o) {
      var u = this.__data__, h = t(u, o);
      return h < 0 ? void 0 : u[h][1];
    }
    e.exports = i;
  }), N = g((A, e) => {
    var t = D();
    function i(o) {
      return t(this.__data__, o) > -1;
    }
    e.exports = i;
  }), X = g((A, e) => {
    var t = D();
    function i(o, u) {
      var h = this.__data__, c = t(h, o);
      return c < 0 ? (++this.size, h.push([o, u])) : h[c][1] = u, this;
    }
    e.exports = i;
  }), nA = g((A, e) => {
    var t = E(), i = R(), o = q(), u = N(), h = X();
    function c(p) {
      var f = -1, F = p == null ? 0 : p.length;
      for (this.clear(); ++f < F; ) {
        var y = p[f];
        this.set(y[0], y[1]);
      }
    }
    c.prototype.clear = t, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = u, c.prototype.set = h, e.exports = c;
  }), $ = g((A, e) => {
    var t = nA();
    function i() {
      this.__data__ = new t(), this.size = 0;
    }
    e.exports = i;
  }), AA = g((A, e) => {
    function t(i) {
      var o = this.__data__, u = o.delete(i);
      return this.size = o.size, u;
    }
    e.exports = t;
  }), BA = g((A, e) => {
    function t(i) {
      return this.__data__.get(i);
    }
    e.exports = t;
  }), Y = g((A, e) => {
    function t(i) {
      return this.__data__.has(i);
    }
    e.exports = t;
  }), tA = g((A, e) => {
    var t = typeof Rr == "object" && Rr && Rr.Object === Object && Rr;
    e.exports = t;
  }), V = g((A, e) => {
    var t = tA(), i = typeof self == "object" && self && self.Object === Object && self, o = t || i || Function("return this")();
    e.exports = o;
  }), sA = g((A, e) => {
    var t = V(), i = t.Symbol;
    e.exports = i;
  }), iA = g((A, e) => {
    var t = sA(), i = Object.prototype, o = i.hasOwnProperty, u = i.toString, h = t ? t.toStringTag : void 0;
    function c(p) {
      var f = o.call(p, h), F = p[h];
      try {
        p[h] = void 0;
        var y = !0;
      } catch {
      }
      var I = u.call(p);
      return y && (f ? p[h] = F : delete p[h]), I;
    }
    e.exports = c;
  }), uA = g((A, e) => {
    var t = Object.prototype, i = t.toString;
    function o(u) {
      return i.call(u);
    }
    e.exports = o;
  }), CA = g((A, e) => {
    var t = sA(), i = iA(), o = uA(), u = "[object Null]", h = "[object Undefined]", c = t ? t.toStringTag : void 0;
    function p(f) {
      return f == null ? f === void 0 ? h : u : c && c in Object(f) ? i(f) : o(f);
    }
    e.exports = p;
  }), LA = g((A, e) => {
    function t(i) {
      var o = typeof i;
      return i != null && (o == "object" || o == "function");
    }
    e.exports = t;
  }), NA = g((A, e) => {
    var t = CA(), i = LA(), o = "[object AsyncFunction]", u = "[object Function]", h = "[object GeneratorFunction]", c = "[object Proxy]";
    function p(f) {
      if (!i(f)) return !1;
      var F = t(f);
      return F == u || F == h || F == o || F == c;
    }
    e.exports = p;
  }), mA = g((A, e) => {
    var t = V(), i = t["__core-js_shared__"];
    e.exports = i;
  }), SA = g((A, e) => {
    var t = mA(), i = function() {
      var u = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
      return u ? "Symbol(src)_1." + u : "";
    }();
    function o(u) {
      return !!i && i in u;
    }
    e.exports = o;
  }), Qe = g((A, e) => {
    var t = Function.prototype, i = t.toString;
    function o(u) {
      if (u != null) {
        try {
          return i.call(u);
        } catch {
        }
        try {
          return u + "";
        } catch {
        }
      }
      return "";
    }
    e.exports = o;
  }), YA = g((A, e) => {
    var t = NA(), i = SA(), o = LA(), u = Qe(), h = /[\\^$.*+?()[\]{}|]/g, c = /^\[object .+?Constructor\]$/, p = Function.prototype, f = Object.prototype, F = p.toString, y = f.hasOwnProperty, I = RegExp("^" + F.call(y).replace(h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function k(G) {
      if (!o(G) || i(G)) return !1;
      var J = t(G) ? I : c;
      return J.test(u(G));
    }
    e.exports = k;
  }), zA = g((A, e) => {
    function t(i, o) {
      return i == null ? void 0 : i[o];
    }
    e.exports = t;
  }), fe = g((A, e) => {
    var t = YA(), i = zA();
    function o(u, h) {
      var c = i(u, h);
      return t(c) ? c : void 0;
    }
    e.exports = o;
  }), ie = g((A, e) => {
    var t = fe(), i = V(), o = t(i, "Map");
    e.exports = o;
  }), ne = g((A, e) => {
    var t = fe(), i = t(Object, "create");
    e.exports = i;
  }), Ie = g((A, e) => {
    var t = ne();
    function i() {
      this.__data__ = t ? t(null) : {}, this.size = 0;
    }
    e.exports = i;
  }), ke = g((A, e) => {
    function t(i) {
      var o = this.has(i) && delete this.__data__[i];
      return this.size -= o ? 1 : 0, o;
    }
    e.exports = t;
  }), de = g((A, e) => {
    var t = ne(), i = "__lodash_hash_undefined__", o = Object.prototype, u = o.hasOwnProperty;
    function h(c) {
      var p = this.__data__;
      if (t) {
        var f = p[c];
        return f === i ? void 0 : f;
      }
      return u.call(p, c) ? p[c] : void 0;
    }
    e.exports = h;
  }), De = g((A, e) => {
    var t = ne(), i = Object.prototype, o = i.hasOwnProperty;
    function u(h) {
      var c = this.__data__;
      return t ? c[h] !== void 0 : o.call(c, h);
    }
    e.exports = u;
  }), Ce = g((A, e) => {
    var t = ne(), i = "__lodash_hash_undefined__";
    function o(u, h) {
      var c = this.__data__;
      return this.size += this.has(u) ? 0 : 1, c[u] = t && h === void 0 ? i : h, this;
    }
    e.exports = o;
  }), Ge = g((A, e) => {
    var t = Ie(), i = ke(), o = de(), u = De(), h = Ce();
    function c(p) {
      var f = -1, F = p == null ? 0 : p.length;
      for (this.clear(); ++f < F; ) {
        var y = p[f];
        this.set(y[0], y[1]);
      }
    }
    c.prototype.clear = t, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = u, c.prototype.set = h, e.exports = c;
  }), tt = g((A, e) => {
    var t = Ge(), i = nA(), o = ie();
    function u() {
      this.size = 0, this.__data__ = { hash: new t(), map: new (o || i)(), string: new t() };
    }
    e.exports = u;
  }), _u = g((A, e) => {
    function t(i) {
      var o = typeof i;
      return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
    }
    e.exports = t;
  }), dr = g((A, e) => {
    var t = _u();
    function i(o, u) {
      var h = o.__data__;
      return t(u) ? h[typeof u == "string" ? "string" : "hash"] : h.map;
    }
    e.exports = i;
  }), Qu = g((A, e) => {
    var t = dr();
    function i(o) {
      var u = t(this, o).delete(o);
      return this.size -= u ? 1 : 0, u;
    }
    e.exports = i;
  }), Fu = g((A, e) => {
    var t = dr();
    function i(o) {
      return t(this, o).get(o);
    }
    e.exports = i;
  }), Eu = g((A, e) => {
    var t = dr();
    function i(o) {
      return t(this, o).has(o);
    }
    e.exports = i;
  }), vu = g((A, e) => {
    var t = dr();
    function i(o, u) {
      var h = t(this, o), c = h.size;
      return h.set(o, u), this.size += h.size == c ? 0 : 1, this;
    }
    e.exports = i;
  }), ca = g((A, e) => {
    var t = tt(), i = Qu(), o = Fu(), u = Eu(), h = vu();
    function c(p) {
      var f = -1, F = p == null ? 0 : p.length;
      for (this.clear(); ++f < F; ) {
        var y = p[f];
        this.set(y[0], y[1]);
      }
    }
    c.prototype.clear = t, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = u, c.prototype.set = h, e.exports = c;
  }), Uu = g((A, e) => {
    var t = nA(), i = ie(), o = ca(), u = 200;
    function h(c, p) {
      var f = this.__data__;
      if (f instanceof t) {
        var F = f.__data__;
        if (!i || F.length < u - 1) return F.push([c, p]), this.size = ++f.size, this;
        f = this.__data__ = new o(F);
      }
      return f.set(c, p), this.size = f.size, this;
    }
    e.exports = h;
  }), Lu = g((A, e) => {
    var t = nA(), i = $(), o = AA(), u = BA(), h = Y(), c = Uu();
    function p(f) {
      var F = this.__data__ = new t(f);
      this.size = F.size;
    }
    p.prototype.clear = i, p.prototype.delete = o, p.prototype.get = u, p.prototype.has = h, p.prototype.set = c, e.exports = p;
  }), Ba = g((A, e) => {
    var t = fe(), i = function() {
      try {
        var o = t(Object, "defineProperty");
        return o({}, "", {}), o;
      } catch {
      }
    }();
    e.exports = i;
  }), Hi = g((A, e) => {
    var t = Ba();
    function i(o, u, h) {
      u == "__proto__" && t ? t(o, u, { configurable: !0, enumerable: !0, value: h, writable: !0 }) : o[u] = h;
    }
    e.exports = i;
  }), ga = g((A, e) => {
    var t = Hi(), i = v();
    function o(u, h, c) {
      (c !== void 0 && !i(u[h], c) || c === void 0 && !(h in u)) && t(u, h, c);
    }
    e.exports = o;
  }), bu = g((A, e) => {
    function t(i) {
      return function(o, u, h) {
        for (var c = -1, p = Object(o), f = h(o), F = f.length; F--; ) {
          var y = f[i ? F : ++c];
          if (u(p[y], y, p) === !1) break;
        }
        return o;
      };
    }
    e.exports = t;
  }), xu = g((A, e) => {
    var t = bu(), i = t();
    e.exports = i;
  }), Mu = g((A, e) => {
    var t = V(), i = typeof A == "object" && A && !A.nodeType && A, o = i && typeof e == "object" && e && !e.nodeType && e, u = o && o.exports === i, h = u ? t.Buffer : void 0, c = h ? h.allocUnsafe : void 0;
    function p(f, F) {
      if (F) return f.slice();
      var y = f.length, I = c ? c(y) : new f.constructor(y);
      return f.copy(I), I;
    }
    e.exports = p;
  }), Iu = g((A, e) => {
    var t = V(), i = t.Uint8Array;
    e.exports = i;
  }), ku = g((A, e) => {
    var t = Iu();
    function i(o) {
      var u = new o.constructor(o.byteLength);
      return new t(u).set(new t(o)), u;
    }
    e.exports = i;
  }), Du = g((A, e) => {
    var t = ku();
    function i(o, u) {
      var h = u ? t(o.buffer) : o.buffer;
      return new o.constructor(h, o.byteOffset, o.length);
    }
    e.exports = i;
  }), Hu = g((A, e) => {
    function t(i, o) {
      var u = -1, h = i.length;
      for (o || (o = Array(h)); ++u < h; ) o[u] = i[u];
      return o;
    }
    e.exports = t;
  }), Su = g((A, e) => {
    var t = LA(), i = Object.create, o = /* @__PURE__ */ function() {
      function u() {
      }
      return function(h) {
        if (!t(h)) return {};
        if (i) return i(h);
        u.prototype = h;
        var c = new u();
        return u.prototype = void 0, c;
      };
    }();
    e.exports = o;
  }), Tu = g((A, e) => {
    function t(i, o) {
      return function(u) {
        return i(o(u));
      };
    }
    e.exports = t;
  }), pa = g((A, e) => {
    var t = Tu(), i = t(Object.getPrototypeOf, Object);
    e.exports = i;
  }), fa = g((A, e) => {
    var t = Object.prototype;
    function i(o) {
      var u = o && o.constructor, h = typeof u == "function" && u.prototype || t;
      return o === h;
    }
    e.exports = i;
  }), Ku = g((A, e) => {
    var t = Su(), i = pa(), o = fa();
    function u(h) {
      return typeof h.constructor == "function" && !o(h) ? t(i(h)) : {};
    }
    e.exports = u;
  }), Bt = g((A, e) => {
    function t(i) {
      return i != null && typeof i == "object";
    }
    e.exports = t;
  }), Ou = g((A, e) => {
    var t = CA(), i = Bt(), o = "[object Arguments]";
    function u(h) {
      return i(h) && t(h) == o;
    }
    e.exports = u;
  }), da = g((A, e) => {
    var t = Ou(), i = Bt(), o = Object.prototype, u = o.hasOwnProperty, h = o.propertyIsEnumerable, c = t(/* @__PURE__ */ function() {
      return arguments;
    }()) ? t : function(p) {
      return i(p) && u.call(p, "callee") && !h.call(p, "callee");
    };
    e.exports = c;
  }), Ht = g((A, e) => {
    var t = Array.isArray;
    e.exports = t;
  }), Ca = g((A, e) => {
    var t = 9007199254740991;
    function i(o) {
      return typeof o == "number" && o > -1 && o % 1 == 0 && o <= t;
    }
    e.exports = i;
  }), Si = g((A, e) => {
    var t = NA(), i = Ca();
    function o(u) {
      return u != null && i(u.length) && !t(u);
    }
    e.exports = o;
  }), Ru = g((A, e) => {
    var t = Si(), i = Bt();
    function o(u) {
      return i(u) && t(u);
    }
    e.exports = o;
  }), Pu = g((A, e) => {
    function t() {
      return !1;
    }
    e.exports = t;
  }), wa = g((A, e) => {
    var t = V(), i = Pu(), o = typeof A == "object" && A && !A.nodeType && A, u = o && typeof e == "object" && e && !e.nodeType && e, h = u && u.exports === o, c = h ? t.Buffer : void 0, p = c ? c.isBuffer : void 0, f = p || i;
    e.exports = f;
  }), Gu = g((A, e) => {
    var t = CA(), i = pa(), o = Bt(), u = "[object Object]", h = Function.prototype, c = Object.prototype, p = h.toString, f = c.hasOwnProperty, F = p.call(Object);
    function y(I) {
      if (!o(I) || t(I) != u) return !1;
      var k = i(I);
      if (k === null) return !0;
      var G = f.call(k, "constructor") && k.constructor;
      return typeof G == "function" && G instanceof G && p.call(G) == F;
    }
    e.exports = y;
  }), Nu = g((A, e) => {
    var t = CA(), i = Ca(), o = Bt(), u = "[object Arguments]", h = "[object Array]", c = "[object Boolean]", p = "[object Date]", f = "[object Error]", F = "[object Function]", y = "[object Map]", I = "[object Number]", k = "[object Object]", G = "[object RegExp]", J = "[object Set]", eA = "[object String]", rA = "[object WeakMap]", Q = "[object ArrayBuffer]", S = "[object DataView]", P = "[object Float32Array]", Z = "[object Float64Array]", j = "[object Int8Array]", W = "[object Int16Array]", d = "[object Int32Array]", m = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", x = "[object Uint16Array]", b = "[object Uint32Array]", U = {};
    U[P] = U[Z] = U[j] = U[W] = U[d] = U[m] = U[_] = U[x] = U[b] = !0, U[u] = U[h] = U[Q] = U[c] = U[S] = U[p] = U[f] = U[F] = U[y] = U[I] = U[k] = U[G] = U[J] = U[eA] = U[rA] = !1;
    function T(M) {
      return o(M) && i(M.length) && !!U[t(M)];
    }
    e.exports = T;
  }), Vu = g((A, e) => {
    function t(i) {
      return function(o) {
        return i(o);
      };
    }
    e.exports = t;
  }), Xu = g((A, e) => {
    var t = tA(), i = typeof A == "object" && A && !A.nodeType && A, o = i && typeof e == "object" && e && !e.nodeType && e, u = o && o.exports === i, h = u && t.process, c = function() {
      try {
        var p = o && o.require && o.require("util").types;
        return p || h && h.binding && h.binding("util");
      } catch {
      }
    }();
    e.exports = c;
  }), ma = g((A, e) => {
    var t = Nu(), i = Vu(), o = Xu(), u = o && o.isTypedArray, h = u ? i(u) : t;
    e.exports = h;
  }), ya = g((A, e) => {
    function t(i, o) {
      if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__") return i[o];
    }
    e.exports = t;
  }), Ju = g((A, e) => {
    var t = Hi(), i = v(), o = Object.prototype, u = o.hasOwnProperty;
    function h(c, p, f) {
      var F = c[p];
      (!(u.call(c, p) && i(F, f)) || f === void 0 && !(p in c)) && t(c, p, f);
    }
    e.exports = h;
  }), Yu = g((A, e) => {
    var t = Ju(), i = Hi();
    function o(u, h, c, p) {
      var f = !c;
      c || (c = {});
      for (var F = -1, y = h.length; ++F < y; ) {
        var I = h[F], k = p ? p(c[I], u[I], I, c, u) : void 0;
        k === void 0 && (k = u[I]), f ? i(c, I, k) : t(c, I, k);
      }
      return c;
    }
    e.exports = o;
  }), zu = g((A, e) => {
    function t(i, o) {
      for (var u = -1, h = Array(i); ++u < i; ) h[u] = o(u);
      return h;
    }
    e.exports = t;
  }), _a = g((A, e) => {
    var t = 9007199254740991, i = /^(?:0|[1-9]\d*)$/;
    function o(u, h) {
      var c = typeof u;
      return h = h ?? t, !!h && (c == "number" || c != "symbol" && i.test(u)) && u > -1 && u % 1 == 0 && u < h;
    }
    e.exports = o;
  }), ju = g((A, e) => {
    var t = zu(), i = da(), o = Ht(), u = wa(), h = _a(), c = ma(), p = Object.prototype, f = p.hasOwnProperty;
    function F(y, I) {
      var k = o(y), G = !k && i(y), J = !k && !G && u(y), eA = !k && !G && !J && c(y), rA = k || G || J || eA, Q = rA ? t(y.length, String) : [], S = Q.length;
      for (var P in y) (I || f.call(y, P)) && !(rA && (P == "length" || J && (P == "offset" || P == "parent") || eA && (P == "buffer" || P == "byteLength" || P == "byteOffset") || h(P, S))) && Q.push(P);
      return Q;
    }
    e.exports = F;
  }), Wu = g((A, e) => {
    function t(i) {
      var o = [];
      if (i != null) for (var u in Object(i)) o.push(u);
      return o;
    }
    e.exports = t;
  }), Zu = g((A, e) => {
    var t = LA(), i = fa(), o = Wu(), u = Object.prototype, h = u.hasOwnProperty;
    function c(p) {
      if (!t(p)) return o(p);
      var f = i(p), F = [];
      for (var y in p) y == "constructor" && (f || !h.call(p, y)) || F.push(y);
      return F;
    }
    e.exports = c;
  }), Qa = g((A, e) => {
    var t = ju(), i = Zu(), o = Si();
    function u(h) {
      return o(h) ? t(h, !0) : i(h);
    }
    e.exports = u;
  }), qu = g((A, e) => {
    var t = Yu(), i = Qa();
    function o(u) {
      return t(u, i(u));
    }
    e.exports = o;
  }), $u = g((A, e) => {
    var t = ga(), i = Mu(), o = Du(), u = Hu(), h = Ku(), c = da(), p = Ht(), f = Ru(), F = wa(), y = NA(), I = LA(), k = Gu(), G = ma(), J = ya(), eA = qu();
    function rA(Q, S, P, Z, j, W, d) {
      var m = J(Q, P), _ = J(S, P), x = d.get(_);
      if (x) {
        t(Q, P, x);
        return;
      }
      var b = W ? W(m, _, P + "", Q, S, d) : void 0, U = b === void 0;
      if (U) {
        var T = p(_), M = !T && F(_), H = !T && !M && G(_);
        b = _, T || M || H ? p(m) ? b = m : f(m) ? b = u(m) : M ? (U = !1, b = i(_, !0)) : H ? (U = !1, b = o(_, !0)) : b = [] : k(_) || c(_) ? (b = m, c(m) ? b = eA(m) : (!I(m) || y(m)) && (b = h(_))) : U = !1;
      }
      U && (d.set(_, b), j(b, _, Z, W, d), d.delete(_)), t(Q, P, b);
    }
    e.exports = rA;
  }), Al = g((A, e) => {
    var t = Lu(), i = ga(), o = xu(), u = $u(), h = LA(), c = Qa(), p = ya();
    function f(F, y, I, k, G) {
      F !== y && o(y, function(J, eA) {
        if (G || (G = new t()), h(J)) u(F, y, eA, I, f, k, G);
        else {
          var rA = k ? k(p(F, eA), J, eA + "", F, y, G) : void 0;
          rA === void 0 && (rA = J), i(F, eA, rA);
        }
      }, c);
    }
    e.exports = f;
  }), Fa = g((A, e) => {
    function t(i) {
      return i;
    }
    e.exports = t;
  }), el = g((A, e) => {
    function t(i, o, u) {
      switch (u.length) {
        case 0:
          return i.call(o);
        case 1:
          return i.call(o, u[0]);
        case 2:
          return i.call(o, u[0], u[1]);
        case 3:
          return i.call(o, u[0], u[1], u[2]);
      }
      return i.apply(o, u);
    }
    e.exports = t;
  }), tl = g((A, e) => {
    var t = el(), i = Math.max;
    function o(u, h, c) {
      return h = i(h === void 0 ? u.length - 1 : h, 0), function() {
        for (var p = arguments, f = -1, F = i(p.length - h, 0), y = Array(F); ++f < F; ) y[f] = p[h + f];
        f = -1;
        for (var I = Array(h + 1); ++f < h; ) I[f] = p[f];
        return I[h] = c(y), t(u, this, I);
      };
    }
    e.exports = o;
  }), rl = g((A, e) => {
    function t(i) {
      return function() {
        return i;
      };
    }
    e.exports = t;
  }), il = g((A, e) => {
    var t = rl(), i = Ba(), o = Fa(), u = i ? function(h, c) {
      return i(h, "toString", { configurable: !0, enumerable: !1, value: t(c), writable: !0 });
    } : o;
    e.exports = u;
  }), nl = g((A, e) => {
    var t = 800, i = 16, o = Date.now;
    function u(h) {
      var c = 0, p = 0;
      return function() {
        var f = o(), F = i - (f - p);
        if (p = f, F > 0) {
          if (++c >= t) return arguments[0];
        } else c = 0;
        return h.apply(void 0, arguments);
      };
    }
    e.exports = u;
  }), al = g((A, e) => {
    var t = il(), i = nl(), o = i(t);
    e.exports = o;
  }), sl = g((A, e) => {
    var t = Fa(), i = tl(), o = al();
    function u(h, c) {
      return o(i(h, c, t), h + "");
    }
    e.exports = u;
  }), ol = g((A, e) => {
    var t = v(), i = Si(), o = _a(), u = LA();
    function h(c, p, f) {
      if (!u(f)) return !1;
      var F = typeof p;
      return (F == "number" ? i(f) && o(p, f.length) : F == "string" && p in f) ? t(f[p], c) : !1;
    }
    e.exports = h;
  }), ul = g((A, e) => {
    var t = sl(), i = ol();
    function o(u) {
      return t(function(h, c) {
        var p = -1, f = c.length, F = f > 1 ? c[f - 1] : void 0, y = f > 2 ? c[2] : void 0;
        for (F = u.length > 3 && typeof F == "function" ? (f--, F) : void 0, y && i(c[0], c[1], y) && (F = f < 3 ? void 0 : F, f = 1), h = Object(h); ++p < f; ) {
          var I = c[p];
          I && u(h, I, p, F);
        }
        return h;
      });
    }
    e.exports = o;
  }), Ti = g((A, e) => {
    var t = Al(), i = ul(), o = i(function(u, h, c) {
      t(u, h, c);
    });
    e.exports = o;
  }), Ki = g((A, e) => {
    var t = CA(), i = Bt(), o = "[object Symbol]";
    function u(h) {
      return typeof h == "symbol" || i(h) && t(h) == o;
    }
    e.exports = u;
  }), ll = g((A, e) => {
    var t = Ht(), i = Ki(), o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u = /^\w*$/;
    function h(c, p) {
      if (t(c)) return !1;
      var f = typeof c;
      return f == "number" || f == "symbol" || f == "boolean" || c == null || i(c) ? !0 : u.test(c) || !o.test(c) || p != null && c in Object(p);
    }
    e.exports = h;
  }), hl = g((A, e) => {
    var t = ca(), i = "Expected a function";
    function o(u, h) {
      if (typeof u != "function" || h != null && typeof h != "function") throw new TypeError(i);
      var c = function() {
        var p = arguments, f = h ? h.apply(this, p) : p[0], F = c.cache;
        if (F.has(f)) return F.get(f);
        var y = u.apply(this, p);
        return c.cache = F.set(f, y) || F, y;
      };
      return c.cache = new (o.Cache || t)(), c;
    }
    o.Cache = t, e.exports = o;
  }), cl = g((A, e) => {
    var t = hl(), i = 500;
    function o(u) {
      var h = t(u, function(p) {
        return c.size === i && c.clear(), p;
      }), c = h.cache;
      return h;
    }
    e.exports = o;
  }), Bl = g((A, e) => {
    var t = cl(), i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, o = /\\(\\)?/g, u = t(function(h) {
      var c = [];
      return h.charCodeAt(0) === 46 && c.push(""), h.replace(i, function(p, f, F, y) {
        c.push(F ? y.replace(o, "$1") : f || p);
      }), c;
    });
    e.exports = u;
  }), gl = g((A, e) => {
    function t(i, o) {
      for (var u = -1, h = i == null ? 0 : i.length, c = Array(h); ++u < h; ) c[u] = o(i[u], u, i);
      return c;
    }
    e.exports = t;
  }), pl = g((A, e) => {
    var t = sA(), i = gl(), o = Ht(), u = Ki(), h = t ? t.prototype : void 0, c = h ? h.toString : void 0;
    function p(f) {
      if (typeof f == "string") return f;
      if (o(f)) return i(f, p) + "";
      if (u(f)) return c ? c.call(f) : "";
      var F = f + "";
      return F == "0" && 1 / f == -1 / 0 ? "-0" : F;
    }
    e.exports = p;
  }), fl = g((A, e) => {
    var t = pl();
    function i(o) {
      return o == null ? "" : t(o);
    }
    e.exports = i;
  }), dl = g((A, e) => {
    var t = Ht(), i = ll(), o = Bl(), u = fl();
    function h(c, p) {
      return t(c) ? c : i(c, p) ? [c] : o(u(c));
    }
    e.exports = h;
  }), Cl = g((A, e) => {
    var t = Ki();
    function i(o) {
      if (typeof o == "string" || t(o)) return o;
      var u = o + "";
      return u == "0" && 1 / o == -1 / 0 ? "-0" : u;
    }
    e.exports = i;
  }), wl = g((A, e) => {
    var t = dl(), i = Cl();
    function o(u, h) {
      h = t(h, u);
      for (var c = 0, p = h.length; u != null && c < p; ) u = u[i(h[c++])];
      return c && c == p ? u : void 0;
    }
    e.exports = o;
  }), Cr = g((A, e) => {
    var t = wl();
    function i(o, u, h) {
      var c = o == null ? void 0 : t(o, u);
      return c === void 0 ? h : c;
    }
    e.exports = i;
  }), ml = g((A, e) => {
    (function(t, i) {
      typeof A == "object" && typeof e < "u" ? e.exports = i() : (t = t || self).RBush = i();
    })(A, function() {
      function t(Q, S, P, Z, j) {
        (function W(d, m, _, x, b) {
          for (; x > _; ) {
            if (x - _ > 600) {
              var U = x - _ + 1, T = m - _ + 1, M = Math.log(U), H = 0.5 * Math.exp(2 * M / 3), O = 0.5 * Math.sqrt(M * H * (U - H) / U) * (T - U / 2 < 0 ? -1 : 1), K = Math.max(_, Math.floor(m - T * H / U + O)), z = Math.min(x, Math.floor(m + (U - T) * H / U + O));
              W(d, m, K, z, b);
            }
            var lA = d[m], hA = _, gA = x;
            for (i(d, _, m), b(d[x], lA) > 0 && i(d, _, x); hA < gA; ) {
              for (i(d, hA, gA), hA++, gA--; b(d[hA], lA) < 0; ) hA++;
              for (; b(d[gA], lA) > 0; ) gA--;
            }
            b(d[_], lA) === 0 ? i(d, _, gA) : i(d, ++gA, x), gA <= m && (_ = gA + 1), m <= gA && (x = gA - 1);
          }
        })(Q, S, P || 0, Z || Q.length - 1, j || o);
      }
      function i(Q, S, P) {
        var Z = Q[S];
        Q[S] = Q[P], Q[P] = Z;
      }
      function o(Q, S) {
        return Q < S ? -1 : Q > S ? 1 : 0;
      }
      var u = function(Q) {
        Q === void 0 && (Q = 9), this._maxEntries = Math.max(4, Q), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
      };
      function h(Q, S, P) {
        if (!P) return S.indexOf(Q);
        for (var Z = 0; Z < S.length; Z++) if (P(Q, S[Z])) return Z;
        return -1;
      }
      function c(Q, S) {
        p(Q, 0, Q.children.length, S, Q);
      }
      function p(Q, S, P, Z, j) {
        j || (j = eA(null)), j.minX = 1 / 0, j.minY = 1 / 0, j.maxX = -1 / 0, j.maxY = -1 / 0;
        for (var W = S; W < P; W++) {
          var d = Q.children[W];
          f(j, Q.leaf ? Z(d) : d);
        }
        return j;
      }
      function f(Q, S) {
        return Q.minX = Math.min(Q.minX, S.minX), Q.minY = Math.min(Q.minY, S.minY), Q.maxX = Math.max(Q.maxX, S.maxX), Q.maxY = Math.max(Q.maxY, S.maxY), Q;
      }
      function F(Q, S) {
        return Q.minX - S.minX;
      }
      function y(Q, S) {
        return Q.minY - S.minY;
      }
      function I(Q) {
        return (Q.maxX - Q.minX) * (Q.maxY - Q.minY);
      }
      function k(Q) {
        return Q.maxX - Q.minX + (Q.maxY - Q.minY);
      }
      function G(Q, S) {
        return Q.minX <= S.minX && Q.minY <= S.minY && S.maxX <= Q.maxX && S.maxY <= Q.maxY;
      }
      function J(Q, S) {
        return S.minX <= Q.maxX && S.minY <= Q.maxY && S.maxX >= Q.minX && S.maxY >= Q.minY;
      }
      function eA(Q) {
        return { children: Q, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
      }
      function rA(Q, S, P, Z, j) {
        for (var W = [S, P]; W.length; ) if (!((P = W.pop()) - (S = W.pop()) <= Z)) {
          var d = S + Math.ceil((P - S) / Z / 2) * Z;
          t(Q, d, S, P, j), W.push(S, d, d, P);
        }
      }
      return u.prototype.all = function() {
        return this._all(this.data, []);
      }, u.prototype.search = function(Q) {
        var S = this.data, P = [];
        if (!J(Q, S)) return P;
        for (var Z = this.toBBox, j = []; S; ) {
          for (var W = 0; W < S.children.length; W++) {
            var d = S.children[W], m = S.leaf ? Z(d) : d;
            J(Q, m) && (S.leaf ? P.push(d) : G(Q, m) ? this._all(d, P) : j.push(d));
          }
          S = j.pop();
        }
        return P;
      }, u.prototype.collides = function(Q) {
        var S = this.data;
        if (!J(Q, S)) return !1;
        for (var P = []; S; ) {
          for (var Z = 0; Z < S.children.length; Z++) {
            var j = S.children[Z], W = S.leaf ? this.toBBox(j) : j;
            if (J(Q, W)) {
              if (S.leaf || G(Q, W)) return !0;
              P.push(j);
            }
          }
          S = P.pop();
        }
        return !1;
      }, u.prototype.load = function(Q) {
        if (!Q || !Q.length) return this;
        if (Q.length < this._minEntries) {
          for (var S = 0; S < Q.length; S++) this.insert(Q[S]);
          return this;
        }
        var P = this._build(Q.slice(), 0, Q.length - 1, 0);
        if (this.data.children.length) if (this.data.height === P.height) this._splitRoot(this.data, P);
        else {
          if (this.data.height < P.height) {
            var Z = this.data;
            this.data = P, P = Z;
          }
          this._insert(P, this.data.height - P.height - 1, !0);
        }
        else this.data = P;
        return this;
      }, u.prototype.insert = function(Q) {
        return Q && this._insert(Q, this.data.height - 1), this;
      }, u.prototype.clear = function() {
        return this.data = eA([]), this;
      }, u.prototype.remove = function(Q, S) {
        if (!Q) return this;
        for (var P, Z, j, W = this.data, d = this.toBBox(Q), m = [], _ = []; W || m.length; ) {
          if (W || (W = m.pop(), Z = m[m.length - 1], P = _.pop(), j = !0), W.leaf) {
            var x = h(Q, W.children, S);
            if (x !== -1) return W.children.splice(x, 1), m.push(W), this._condense(m), this;
          }
          j || W.leaf || !G(W, d) ? Z ? (P++, W = Z.children[P], j = !1) : W = null : (m.push(W), _.push(P), P = 0, Z = W, W = W.children[0]);
        }
        return this;
      }, u.prototype.toBBox = function(Q) {
        return Q;
      }, u.prototype.compareMinX = function(Q, S) {
        return Q.minX - S.minX;
      }, u.prototype.compareMinY = function(Q, S) {
        return Q.minY - S.minY;
      }, u.prototype.toJSON = function() {
        return this.data;
      }, u.prototype.fromJSON = function(Q) {
        return this.data = Q, this;
      }, u.prototype._all = function(Q, S) {
        for (var P = []; Q; ) Q.leaf ? S.push.apply(S, Q.children) : P.push.apply(P, Q.children), Q = P.pop();
        return S;
      }, u.prototype._build = function(Q, S, P, Z) {
        var j, W = P - S + 1, d = this._maxEntries;
        if (W <= d) return c(j = eA(Q.slice(S, P + 1)), this.toBBox), j;
        Z || (Z = Math.ceil(Math.log(W) / Math.log(d)), d = Math.ceil(W / Math.pow(d, Z - 1))), (j = eA([])).leaf = !1, j.height = Z;
        var m = Math.ceil(W / d), _ = m * Math.ceil(Math.sqrt(d));
        rA(Q, S, P, _, this.compareMinX);
        for (var x = S; x <= P; x += _) {
          var b = Math.min(x + _ - 1, P);
          rA(Q, x, b, m, this.compareMinY);
          for (var U = x; U <= b; U += m) {
            var T = Math.min(U + m - 1, b);
            j.children.push(this._build(Q, U, T, Z - 1));
          }
        }
        return c(j, this.toBBox), j;
      }, u.prototype._chooseSubtree = function(Q, S, P, Z) {
        for (; Z.push(S), !S.leaf && Z.length - 1 !== P; ) {
          for (var j = 1 / 0, W = 1 / 0, d = void 0, m = 0; m < S.children.length; m++) {
            var _ = S.children[m], x = I(_), b = (U = Q, T = _, (Math.max(T.maxX, U.maxX) - Math.min(T.minX, U.minX)) * (Math.max(T.maxY, U.maxY) - Math.min(T.minY, U.minY)) - x);
            b < W ? (W = b, j = x < j ? x : j, d = _) : b === W && x < j && (j = x, d = _);
          }
          S = d || S.children[0];
        }
        var U, T;
        return S;
      }, u.prototype._insert = function(Q, S, P) {
        var Z = P ? Q : this.toBBox(Q), j = [], W = this._chooseSubtree(Z, this.data, S, j);
        for (W.children.push(Q), f(W, Z); S >= 0 && j[S].children.length > this._maxEntries; ) this._split(j, S), S--;
        this._adjustParentBBoxes(Z, j, S);
      }, u.prototype._split = function(Q, S) {
        var P = Q[S], Z = P.children.length, j = this._minEntries;
        this._chooseSplitAxis(P, j, Z);
        var W = this._chooseSplitIndex(P, j, Z), d = eA(P.children.splice(W, P.children.length - W));
        d.height = P.height, d.leaf = P.leaf, c(P, this.toBBox), c(d, this.toBBox), S ? Q[S - 1].children.push(d) : this._splitRoot(P, d);
      }, u.prototype._splitRoot = function(Q, S) {
        this.data = eA([Q, S]), this.data.height = Q.height + 1, this.data.leaf = !1, c(this.data, this.toBBox);
      }, u.prototype._chooseSplitIndex = function(Q, S, P) {
        for (var Z, j, W, d, m, _, x, b = 1 / 0, U = 1 / 0, T = S; T <= P - S; T++) {
          var M = p(Q, 0, T, this.toBBox), H = p(Q, T, P, this.toBBox), O = (j = M, W = H, d = void 0, m = void 0, _ = void 0, x = void 0, d = Math.max(j.minX, W.minX), m = Math.max(j.minY, W.minY), _ = Math.min(j.maxX, W.maxX), x = Math.min(j.maxY, W.maxY), Math.max(0, _ - d) * Math.max(0, x - m)), K = I(M) + I(H);
          O < b ? (b = O, Z = T, U = K < U ? K : U) : O === b && K < U && (U = K, Z = T);
        }
        return Z || P - S;
      }, u.prototype._chooseSplitAxis = function(Q, S, P) {
        var Z = Q.leaf ? this.compareMinX : F, j = Q.leaf ? this.compareMinY : y;
        this._allDistMargin(Q, S, P, Z) < this._allDistMargin(Q, S, P, j) && Q.children.sort(Z);
      }, u.prototype._allDistMargin = function(Q, S, P, Z) {
        Q.children.sort(Z);
        for (var j = this.toBBox, W = p(Q, 0, S, j), d = p(Q, P - S, P, j), m = k(W) + k(d), _ = S; _ < P - S; _++) {
          var x = Q.children[_];
          f(W, Q.leaf ? j(x) : x), m += k(W);
        }
        for (var b = P - S - 1; b >= S; b--) {
          var U = Q.children[b];
          f(d, Q.leaf ? j(U) : U), m += k(d);
        }
        return m;
      }, u.prototype._adjustParentBBoxes = function(Q, S, P) {
        for (var Z = P; Z >= 0; Z--) f(S[Z], Q);
      }, u.prototype._condense = function(Q) {
        for (var S = Q.length - 1, P = void 0; S >= 0; S--) Q[S].children.length === 0 ? S > 0 ? (P = Q[S - 1].children).splice(P.indexOf(Q[S]), 1) : this.clear() : c(Q[S], this.toBBox);
      }, u;
    });
  });
  Array.prototype.findIndex = Array.prototype.findIndex || function(A) {
    if (this === null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
    if (typeof A != "function") throw new TypeError("callback must be a function");
    for (var e = Object(this), t = e.length >>> 0, i = arguments[1], o = 0; o < t; o++) if (A.call(i, e[o], o, e)) return o;
    return -1;
  }, Array.prototype.find = Array.prototype.find || function(A) {
    if (this === null) throw new TypeError("Array.prototype.find called on null or undefined");
    if (typeof A != "function") throw new TypeError("callback must be a function");
    for (var e = Object(this), t = e.length >>> 0, i = arguments[1], o = 0; o < t; o++) {
      var u = e[o];
      if (A.call(i, u, o, e)) return u;
    }
  }, typeof Object.assign != "function" && (Object.assign = function(A) {
    if (A == null) throw new TypeError("Cannot convert undefined or null to object");
    A = Object(A);
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      if (t != null) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (A[i] = t[i]);
    }
    return A;
  }), function(A) {
    A.forEach(function(e) {
      e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function() {
        this.parentNode.removeChild(this);
      } });
    });
  }([Element.prototype, CharacterData.prototype, DocumentType.prototype]), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function(A, e) {
    if (this == null) throw new TypeError('"this" is null or not defined');
    var t = Object(this), i = t.length >>> 0;
    if (i === 0) return !1;
    var o = e | 0, u = Math.max(o >= 0 ? o : i - Math.abs(o), 0);
    function h(c, p) {
      return c === p || typeof c == "number" && typeof p == "number" && isNaN(c) && isNaN(p);
    }
    for (; u < i; ) {
      if (h(t[u], A)) return !0;
      u++;
    }
    return !1;
  } });
  var yl = { version: "2.19.2" }, Ea = C(Ti()), _l = { tooltips: { placeMarker: "Click to place marker", placeMarkerTouch: "Tap the map to place a marker", firstVertex: "Click to place first vertex", continueLine: "Click to continue drawing", finishLine: "Click any existing marker to finish", finishPoly: "Click first marker to finish", finishRect: "Click to finish", startCircle: "Click to place circle center", finishCircle: "Click to finish circle", placeCircleMarker: "Click to place circle marker", placeText: "Click to place text", selectFirstLayerFor: "Select first layer for {action}", selectSecondLayerFor: "Select second layer for {action}" }, actions: { finish: "Finish", cancel: "Cancel", removeLastVertex: "Remove Last Vertex" }, buttonTitles: { drawMarkerButton: "Draw Marker", drawPolyButton: "Draw Polygons", drawLineButton: "Draw Polyline", drawCircleButton: "Draw Circle", drawRectButton: "Draw Rectangle", editButton: "Edit Layers", dragButton: "Drag Layers", cutButton: "Cut Layers", deleteButton: "Remove Layers", drawCircleMarkerButton: "Draw Circle Marker", snappingButton: "Snap dragged marker to other layers and vertices", pinningButton: "Pin shared vertices together", rotateButton: "Rotate Layers", drawTextButton: "Draw Text", scaleButton: "Scale Layers", autoTracingButton: "Auto trace Line", snapGuidesButton: "Show SnapGuides", unionButton: "Union layers", differenceButton: "Subtract layers" }, measurements: { totalLength: "Length", segmentLength: "Segment length", area: "Area", radius: "Radius", perimeter: "Perimeter", height: "Height", width: "Width", coordinates: "Position", coordinatesMarker: "Position Marker" } }, Ql = { tooltips: { placeMarker: "Platziere den Marker mit Klick", placeMarkerTouch: "Tippe auf die Karte, um einen Marker zu platzieren", firstVertex: "Platziere den ersten Marker mit Klick", continueLine: "Klicke, um weiter zu zeichnen", finishLine: "Beende mit Klick auf existierenden Marker", finishPoly: "Beende mit Klick auf ersten Marker", finishRect: "Beende mit Klick", startCircle: "Platziere das Kreiszentrum mit Klick", finishCircle: "Beende den Kreis mit Klick", placeCircleMarker: "Platziere den Kreismarker mit Klick", placeText: "Platziere den Text mit Klick" }, actions: { finish: "Beenden", cancel: "Abbrechen", removeLastVertex: "Letzten Vertex löschen" }, buttonTitles: { drawMarkerButton: "Marker zeichnen", drawPolyButton: "Polygon zeichnen", drawLineButton: "Polyline zeichnen", drawCircleButton: "Kreis zeichnen", drawRectButton: "Rechteck zeichnen", editButton: "Layer editieren", dragButton: "Layer bewegen", cutButton: "Layer schneiden", deleteButton: "Layer löschen", drawCircleMarkerButton: "Kreismarker zeichnen", snappingButton: "Bewegter Layer an andere Layer oder Vertexe einhacken", pinningButton: "Vertexe an der gleichen Position verknüpfen", rotateButton: "Layer drehen", drawTextButton: "Text zeichnen", scaleButton: "Layer skalieren", autoTracingButton: "Linie automatisch nachzeichen" }, measurements: { totalLength: "Länge", segmentLength: "Segment Länge", area: "Fläche", radius: "Radius", perimeter: "Umfang", height: "Höhe", width: "Breite", coordinates: "Position", coordinatesMarker: "Position Marker" } }, Fl = { tooltips: { placeMarker: "Clicca per posizionare un Marker", placeMarkerTouch: "Tocca la mappa per posizionare un marker", firstVertex: "Clicca per posizionare il primo vertice", continueLine: "Clicca per continuare a disegnare", finishLine: "Clicca qualsiasi marker esistente per terminare", finishPoly: "Clicca il primo marker per terminare", finishRect: "Clicca per terminare", startCircle: "Clicca per posizionare il punto centrale del cerchio", finishCircle: "Clicca per terminare il cerchio", placeCircleMarker: "Clicca per posizionare un Marker del cherchio" }, actions: { finish: "Termina", cancel: "Annulla", removeLastVertex: "Rimuovi l'ultimo vertice" }, buttonTitles: { drawMarkerButton: "Disegna Marker", drawPolyButton: "Disegna Poligoni", drawLineButton: "Disegna Polilinea", drawCircleButton: "Disegna Cerchio", drawRectButton: "Disegna Rettangolo", editButton: "Modifica Livelli", dragButton: "Sposta Livelli", cutButton: "Ritaglia Livelli", deleteButton: "Elimina Livelli", drawCircleMarkerButton: "Disegna Marker del Cerchio", snappingButton: "Snap ha trascinato il pennarello su altri strati e vertici", pinningButton: "Pin condiviso vertici insieme", rotateButton: "Ruota livello" } }, El = { tooltips: { placeMarker: "Klik untuk menempatkan marker", placeMarkerTouch: "Ketuk peta untuk menempatkan marker", firstVertex: "Klik untuk menempatkan vertex pertama", continueLine: "Klik untuk meneruskan digitasi", finishLine: "Klik pada sembarang marker yang ada untuk mengakhiri", finishPoly: "Klik marker pertama untuk mengakhiri", finishRect: "Klik untuk mengakhiri", startCircle: "Klik untuk menempatkan titik pusat lingkaran", finishCircle: "Klik untuk mengakhiri lingkaran", placeCircleMarker: "Klik untuk menempatkan penanda lingkarann" }, actions: { finish: "Selesai", cancel: "Batal", removeLastVertex: "Hilangkan Vertex Terakhir" }, buttonTitles: { drawMarkerButton: "Digitasi Marker", drawPolyButton: "Digitasi Polygon", drawLineButton: "Digitasi Polyline", drawCircleButton: "Digitasi Lingkaran", drawRectButton: "Digitasi Segi Empat", editButton: "Edit Layer", dragButton: "Geser Layer", cutButton: "Potong Layer", deleteButton: "Hilangkan Layer", drawCircleMarkerButton: "Digitasi Penanda Lingkaran", snappingButton: "Jepretkan penanda yang ditarik ke lapisan dan simpul lain", pinningButton: "Sematkan simpul bersama bersama", rotateButton: "Putar lapisan" } }, vl = { tooltips: { placeMarker: "Adaugă un punct", placeMarkerTouch: "Atingeți harta pentru a plasa un punct", firstVertex: "Apasă aici pentru a adăuga primul Vertex", continueLine: "Apasă aici pentru a continua desenul", finishLine: "Apasă pe orice obiect pentru a finisa desenul", finishPoly: "Apasă pe primul obiect pentru a finisa", finishRect: "Apasă pentru a finisa", startCircle: "Apasă pentru a desena un cerc", finishCircle: "Apasă pentru a finisa un cerc", placeCircleMarker: "Adaugă un punct" }, actions: { finish: "Termină", cancel: "Anulează", removeLastVertex: "Șterge ultimul Vertex" }, buttonTitles: { drawMarkerButton: "Adaugă o bulină", drawPolyButton: "Desenează un poligon", drawLineButton: "Desenează o linie", drawCircleButton: "Desenează un cerc", drawRectButton: "Desenează un dreptunghi", editButton: "Editează straturile", dragButton: "Mută straturile", cutButton: "Taie straturile", deleteButton: "Șterge straturile", drawCircleMarkerButton: "Desenează marcatorul cercului", snappingButton: "Fixați marcatorul glisat pe alte straturi și vârfuri", pinningButton: "Fixați vârfurile partajate împreună", rotateButton: "Rotiți stratul" } }, Ul = { tooltips: { placeMarker: "Нажмите, чтобы нанести маркер", placeMarkerTouch: "Коснитесь карты, чтобы разместить маркер", firstVertex: "Нажмите, чтобы нанести первый объект", continueLine: "Нажмите, чтобы продолжить рисование", finishLine: "Нажмите любой существующий маркер для завершения", finishPoly: "Выберите первую точку, чтобы закончить", finishRect: "Нажмите, чтобы закончить", startCircle: "Нажмите, чтобы добавить центр круга", finishCircle: "Нажмите, чтобы задать радиус", placeCircleMarker: "Нажмите, чтобы нанести круговой маркер" }, actions: { finish: "Завершить", cancel: "Отменить", removeLastVertex: "Отменить последнее действие" }, buttonTitles: { drawMarkerButton: "Добавить маркер", drawPolyButton: "Рисовать полигон", drawLineButton: "Рисовать кривую", drawCircleButton: "Рисовать круг", drawRectButton: "Рисовать прямоугольник", editButton: "Редактировать слой", dragButton: "Перенести слой", cutButton: "Вырезать слой", deleteButton: "Удалить слой", drawCircleMarkerButton: "Добавить круговой маркер", snappingButton: "Привязать перетаскиваемый маркер к другим слоям и вершинам", pinningButton: "Связать общие точки вместе", rotateButton: "Поворот слоя" } }, Ll = { tooltips: { placeMarker: "Presiona para colocar un marcador", placeMarkerTouch: "Toca el mapa para colocar un marcador", firstVertex: "Presiona para colocar el primer vértice", continueLine: "Presiona para continuar dibujando", finishLine: "Presiona cualquier marcador existente para finalizar", finishPoly: "Presiona el primer marcador para finalizar", finishRect: "Presiona para finalizar", startCircle: "Presiona para colocar el centro del círculo", finishCircle: "Presiona para finalizar el círculo", placeCircleMarker: "Presiona para colocar un marcador de círculo" }, actions: { finish: "Finalizar", cancel: "Cancelar", removeLastVertex: "Eliminar último vértice" }, buttonTitles: { drawMarkerButton: "Dibujar Marcador", drawPolyButton: "Dibujar Polígono", drawLineButton: "Dibujar Línea", drawCircleButton: "Dibujar Círculo", drawRectButton: "Dibujar Rectángulo", editButton: "Editar Capas", dragButton: "Arrastrar Capas", cutButton: "Cortar Capas", deleteButton: "Eliminar Capas", drawCircleMarkerButton: "Dibujar Marcador de Círculo", snappingButton: "El marcador de Snap arrastrado a otras capas y vértices", pinningButton: "Fijar juntos los vértices compartidos", rotateButton: "Rotar capa" } }, bl = { tooltips: { placeMarker: "Klik om een marker te plaatsen", placeMarkerTouch: "Tik op de kaart om een marker te plaatsen", firstVertex: "Klik om het eerste punt te plaatsen", continueLine: "Klik om te blijven tekenen", finishLine: "Klik op een bestaand punt om te beëindigen", finishPoly: "Klik op het eerst punt om te beëindigen", finishRect: "Klik om te beëindigen", startCircle: "Klik om het middelpunt te plaatsen", finishCircle: "Klik om de cirkel te beëindigen", placeCircleMarker: "Klik om een marker te plaatsen" }, actions: { finish: "Bewaar", cancel: "Annuleer", removeLastVertex: "Verwijder laatste punt" }, buttonTitles: { drawMarkerButton: "Plaats Marker", drawPolyButton: "Teken een vlak", drawLineButton: "Teken een lijn", drawCircleButton: "Teken een cirkel", drawRectButton: "Teken een vierkant", editButton: "Bewerk", dragButton: "Verplaats", cutButton: "Knip", deleteButton: "Verwijder", drawCircleMarkerButton: "Plaats Marker", snappingButton: "Snap gesleepte marker naar andere lagen en hoekpunten", pinningButton: "Speld gedeelde hoekpunten samen", rotateButton: "Laag roteren" } }, xl = { tooltips: { placeMarker: "Cliquez pour placer un marqueur", placeMarkerTouch: "Appuyez sur la carte pour placer un marqueur", firstVertex: "Cliquez pour placer le premier sommet", continueLine: "Cliquez pour continuer à dessiner", finishLine: "Cliquez sur n'importe quel marqueur pour terminer", finishPoly: "Cliquez sur le premier marqueur pour terminer", finishRect: "Cliquez pour terminer", startCircle: "Cliquez pour placer le centre du cercle", finishCircle: "Cliquez pour finir le cercle", placeCircleMarker: "Cliquez pour placer le marqueur circulaire" }, actions: { finish: "Terminer", cancel: "Annuler", removeLastVertex: "Retirer le dernier sommet" }, buttonTitles: { drawMarkerButton: "Placer des marqueurs", drawPolyButton: "Dessiner des polygones", drawLineButton: "Dessiner des polylignes", drawCircleButton: "Dessiner un cercle", drawRectButton: "Dessiner un rectangle", editButton: "Éditer des calques", dragButton: "Déplacer des calques", cutButton: "Couper des calques", deleteButton: "Supprimer des calques", drawCircleMarkerButton: "Dessiner un marqueur circulaire", snappingButton: "Glisser le marqueur vers d'autres couches et sommets", pinningButton: "Épingler ensemble les sommets partagés", rotateButton: "Tourner des calques" } }, Ml = { tooltips: { placeMarker: "单击放置标记", placeMarkerTouch: "点击地图放置标记", firstVertex: "单击放置首个顶点", continueLine: "单击继续绘制", finishLine: "单击任何存在的标记以完成", finishPoly: "单击第一个标记以完成", finishRect: "单击完成", startCircle: "单击放置圆心", finishCircle: "单击完成圆形", placeCircleMarker: "点击放置圆形标记" }, actions: { finish: "完成", cancel: "取消", removeLastVertex: "移除最后的顶点" }, buttonTitles: { drawMarkerButton: "绘制标记", drawPolyButton: "绘制多边形", drawLineButton: "绘制线段", drawCircleButton: "绘制圆形", drawRectButton: "绘制长方形", editButton: "编辑图层", dragButton: "拖拽图层", cutButton: "剪切图层", deleteButton: "删除图层", drawCircleMarkerButton: "画圆圈标记", snappingButton: "将拖动的标记捕捉到其他图层和顶点", pinningButton: "将共享顶点固定在一起", rotateButton: "旋转图层" } }, Il = { tooltips: { placeMarker: "單擊放置標記", placeMarkerTouch: "點擊地圖放置標記", firstVertex: "單擊放置第一個頂點", continueLine: "單擊繼續繪製", finishLine: "單擊任何存在的標記以完成", finishPoly: "單擊第一個標記以完成", finishRect: "單擊完成", startCircle: "單擊放置圓心", finishCircle: "單擊完成圓形", placeCircleMarker: "點擊放置圓形標記" }, actions: { finish: "完成", cancel: "取消", removeLastVertex: "移除最後一個頂點" }, buttonTitles: { drawMarkerButton: "放置標記", drawPolyButton: "繪製多邊形", drawLineButton: "繪製線段", drawCircleButton: "繪製圓形", drawRectButton: "繪製方形", editButton: "編輯圖形", dragButton: "移動圖形", cutButton: "裁切圖形", deleteButton: "刪除圖形", drawCircleMarkerButton: "畫圓圈標記", snappingButton: "將拖動的標記對齊到其他圖層和頂點", pinningButton: "將共享頂點固定在一起", rotateButton: "旋轉圖形" } }, kl = { tooltips: { placeMarker: "Clique para posicionar o marcador", placeMarkerTouch: "Toque no mapa para posicionar um marcador", firstVertex: "Clique para posicionar o primeiro vértice", continueLine: "Clique para continuar desenhando", finishLine: "Clique em qualquer marcador existente para finalizar", finishPoly: "Clique no primeiro marcador para finalizar", finishRect: "Clique para finalizar", startCircle: "Clique para posicionar o centro do círculo", finishCircle: "Clique para finalizar o círculo", placeCircleMarker: "Clique para posicionar o marcador circular", placeText: "Clique para inserir texto" }, actions: { finish: "Finalizar", cancel: "Cancelar", removeLastVertex: "Remover último vértice" }, buttonTitles: { drawMarkerButton: "Desenhar Marcador", drawPolyButton: "Desenhar Polígonos", drawLineButton: "Desenhar Linha Poligonal", drawCircleButton: "Desenhar Círculo", drawRectButton: "Desenhar Retângulo", editButton: "Editar Camadas", dragButton: "Arrastar Camadas", cutButton: "Recortar Camadas", deleteButton: "Remover Camadas", drawCircleMarkerButton: "Desenhar Marcador de Círculo", snappingButton: "Ajustar marcador arrastado a outras camadas e vértices", pinningButton: "Unir vértices compartilhados", rotateButton: "Rotacionar Camadas", drawTextButton: "Desenhar Texto", scaleButton: "Redimensionar Camadas", autoTracingButton: "Traçado Automático de Linha" }, measurements: { totalLength: "Comprimento", segmentLength: "Comprimento do Segmento", area: "Área", radius: "Raio", perimeter: "Perímetro", height: "Altura", width: "Largura", coordinates: "Posição", coordinatesMarker: "Marcador de Posição" } }, va = { tooltips: { placeMarker: "Clique para colocar marcador", placeMarkerTouch: "Toque no mapa para colocar um marcador", firstVertex: "Clique para colocar primeiro vértice", continueLine: "Clique para continuar a desenhar", finishLine: "Clique num marcador existente para terminar", finishPoly: "Clique no primeiro marcador para terminar", finishRect: "Clique para terminar", startCircle: "Clique para colocar o centro do círculo", finishCircle: "Clique para terminar o círculo", placeCircleMarker: "Clique para colocar marcador de círculo", placeText: "Clique para colocar texto" }, actions: { finish: "Terminar", cancel: "Cancelar", removeLastVertex: "Remover Último Vértice" }, buttonTitles: { drawMarkerButton: "Desenhar Marcador", drawPolyButton: "Desenhar Polígonos", drawLineButton: "Desenhar Polilinha", drawCircleButton: "Desenhar Círculo", drawRectButton: "Desenhar Retângulo", editButton: "Editar Camadas", dragButton: "Arrastar Camadas", cutButton: "Cortar Camadas", deleteButton: "Remover Camadas", drawCircleMarkerButton: "Desenhar Marcador de Círculo", snappingButton: "Ajustar marcador arrastado a outras camadas e vértices", pinningButton: "Unir vértices partilhados", rotateButton: "Rodar Camadas", drawTextButton: "Desenhar Texto", scaleButton: "Escalar Camadas", autoTracingButton: "Traçado Automático de Linha" }, measurements: { totalLength: "Comprimento", segmentLength: "Comprimento do Segmento", area: "Área", radius: "Raio", perimeter: "Perímetro", height: "Altura", width: "Largura", coordinates: "Posição", coordinatesMarker: "Marcador de Posição" } }, Dl = { tooltips: { placeMarker: "Kliknij, aby umieścić znacznik", placeMarkerTouch: "Dotknij mapę, aby umieścić znacznik", firstVertex: "Kliknij, aby umieścić pierwszy wierzchołek", continueLine: "Kliknij, aby kontynuować rysowanie", finishLine: "Kliknij dowolny istniejący znacznik, aby zakończyć", finishPoly: "Kliknij pierwszy znacznik, aby zakończyć", finishRect: "Kliknij, aby zakończyć", startCircle: "Kliknij, aby umieścić środek okręgu", finishCircle: "Kliknij, aby zakończyć okrąg", placeCircleMarker: "Kliknij, aby umieścić znacznik okręgu", placeText: "Kliknij, aby umieścić tekst" }, actions: { finish: "Zakończ", cancel: "Anuluj", removeLastVertex: "Usuń ostatni wierzchołek" }, buttonTitles: { drawMarkerButton: "Rysuj znacznik", drawPolyButton: "Rysuj wielokąt", drawLineButton: "Rysuj linię", drawCircleButton: "Rysuj okrąg", drawRectButton: "Rysuj prostokąt", editButton: "Edytuj warstwy", dragButton: "Przeciągnij warstwy", cutButton: "Wytnij warstwy", deleteButton: "Usuń warstwy", drawCircleMarkerButton: "Rysuj znacznik okrągły", snappingButton: "Przyciągnij przenoszony znacznik do innych warstw i wierzchołków", pinningButton: "Przypnij wspólne wierzchołki razem", rotateButton: "Obróć warstwy", drawTextButton: "Rysuj tekst", scaleButton: "Skaluj warstwy", autoTracingButton: "Automatyczne śledzenie linii" }, measurements: { totalLength: "Długość", segmentLength: "Długość odcinka", area: "Obszar", radius: "Promień", perimeter: "Obwód", height: "Wysokość", width: "Szerokość", coordinates: "Pozycja", coordinatesMarker: "Znacznik pozycji" } }, Hl = { tooltips: { placeMarker: "Klicka för att placera markör", placeMarkerTouch: "Tryck på kartan för att placera en markör", firstVertex: "Klicka för att placera första hörnet", continueLine: "Klicka för att fortsätta rita", finishLine: "Klicka på en existerande punkt för att slutföra", finishPoly: "Klicka på den första punkten för att slutföra", finishRect: "Klicka för att slutföra", startCircle: "Klicka för att placera cirkelns centrum", finishCircle: "Klicka för att slutföra cirkeln", placeCircleMarker: "Klicka för att placera cirkelmarkör" }, actions: { finish: "Slutför", cancel: "Avbryt", removeLastVertex: "Ta bort sista hörnet" }, buttonTitles: { drawMarkerButton: "Rita Markör", drawPolyButton: "Rita Polygoner", drawLineButton: "Rita Linje", drawCircleButton: "Rita Cirkel", drawRectButton: "Rita Rektangel", editButton: "Redigera Lager", dragButton: "Dra Lager", cutButton: "Klipp i Lager", deleteButton: "Ta bort Lager", drawCircleMarkerButton: "Rita Cirkelmarkör", snappingButton: "Snäpp dra markören till andra lager och hörn", pinningButton: "Fäst delade hörn tillsammans", rotateButton: "Rotera lagret" } }, Sl = { tooltips: { placeMarker: "Κάντε κλικ για να τοποθετήσετε Δείκτη", placeMarkerTouch: "Πατήστε στο χάρτη για να τοποθετήσετε δείκτη", firstVertex: "Κάντε κλικ για να τοποθετήσετε το πρώτο σημείο", continueLine: "Κάντε κλικ για να συνεχίσετε να σχεδιάζετε", finishLine: "Κάντε κλικ σε οποιονδήποτε υπάρχον σημείο για να ολοκληρωθεί", finishPoly: "Κάντε κλικ στο πρώτο σημείο για να τελειώσετε", finishRect: "Κάντε κλικ για να τελειώσετε", startCircle: "Κάντε κλικ για να τοποθετήσετε κέντρο Κύκλου", finishCircle: "Κάντε κλικ για να ολοκληρώσετε τον Κύκλο", placeCircleMarker: "Κάντε κλικ για να τοποθετήσετε Κυκλικό Δείκτη" }, actions: { finish: "Τέλος", cancel: "Ακύρωση", removeLastVertex: "Κατάργηση τελευταίου σημείου" }, buttonTitles: { drawMarkerButton: "Σχεδίαση Δείκτη", drawPolyButton: "Σχεδίαση Πολυγώνου", drawLineButton: "Σχεδίαση Γραμμής", drawCircleButton: "Σχεδίαση Κύκλου", drawRectButton: "Σχεδίαση Ορθογωνίου", editButton: "Επεξεργασία Επιπέδων", dragButton: "Μεταφορά Επιπέδων", cutButton: "Αποκοπή Επιπέδων", deleteButton: "Κατάργηση Επιπέδων", drawCircleMarkerButton: "Σχεδίαση Κυκλικού Δείκτη", snappingButton: "Προσκόλληση του Δείκτη μεταφοράς σε άλλα Επίπεδα και Κορυφές", pinningButton: "Περικοπή κοινών κορυφών μαζί", rotateButton: "Περιστρέψτε το στρώμα" } }, Tl = { tooltips: { placeMarker: "Kattintson a jelölő elhelyezéséhez", placeMarkerTouch: "Érintse meg a térképet a jelölő elhelyezéséhez", firstVertex: "Kattintson az első pont elhelyezéséhez", continueLine: "Kattintson a következő pont elhelyezéséhez", finishLine: "A befejezéshez kattintson egy meglévő pontra", finishPoly: "A befejezéshez kattintson az első pontra", finishRect: "Kattintson a befejezéshez", startCircle: "Kattintson a kör középpontjának elhelyezéséhez", finishCircle: "Kattintson a kör befejezéséhez", placeCircleMarker: "Kattintson a körjelölő elhelyezéséhez" }, actions: { finish: "Befejezés", cancel: "Mégse", removeLastVertex: "Utolsó pont eltávolítása" }, buttonTitles: { drawMarkerButton: "Jelölő rajzolása", drawPolyButton: "Poligon rajzolása", drawLineButton: "Vonal rajzolása", drawCircleButton: "Kör rajzolása", drawRectButton: "Négyzet rajzolása", editButton: "Elemek szerkesztése", dragButton: "Elemek mozgatása", cutButton: "Elemek vágása", deleteButton: "Elemek törlése", drawCircleMarkerButton: "Kör jelölő rajzolása", snappingButton: "Kapcsolja a jelöltőt másik elemhez vagy ponthoz", pinningButton: "Közös pontok összekötése", rotateButton: "Fólia elforgatása" } }, Kl = { tooltips: { placeMarker: "Tryk for at placere en markør", placeMarkerTouch: "Tryk på kortet for at placere en markør", firstVertex: "Tryk for at placere det første punkt", continueLine: "Tryk for at fortsætte linjen", finishLine: "Tryk på et eksisterende punkt for at afslutte", finishPoly: "Tryk på det første punkt for at afslutte", finishRect: "Tryk for at afslutte", startCircle: "Tryk for at placere cirklens center", finishCircle: "Tryk for at afslutte cirklen", placeCircleMarker: "Tryk for at placere en cirkelmarkør" }, actions: { finish: "Afslut", cancel: "Afbryd", removeLastVertex: "Fjern sidste punkt" }, buttonTitles: { drawMarkerButton: "Placer markør", drawPolyButton: "Tegn polygon", drawLineButton: "Tegn linje", drawCircleButton: "Tegn cirkel", drawRectButton: "Tegn firkant", editButton: "Rediger", dragButton: "Træk", cutButton: "Klip", deleteButton: "Fjern", drawCircleMarkerButton: "Tegn cirkelmarkør", snappingButton: "Fastgør trukket markør til andre elementer", pinningButton: "Sammenlæg delte elementer", rotateButton: "Roter laget" } }, Ol = { tooltips: { placeMarker: "Klikk for å plassere punkt", placeMarkerTouch: "Trykk på kartet for å plassere et punkt", firstVertex: "Klikk for å plassere første punkt", continueLine: "Klikk for å tegne videre", finishLine: "Klikk på et eksisterende punkt for å fullføre", finishPoly: "Klikk første punkt for å fullføre", finishRect: "Klikk for å fullføre", startCircle: "Klikk for å sette sirkel midtpunkt", finishCircle: "Klikk for å fullføre sirkel", placeCircleMarker: "Klikk for å plassere sirkel", placeText: "Klikk for å plassere tekst" }, actions: { finish: "Fullfør", cancel: "Kanseller", removeLastVertex: "Fjern forrige punkt" }, buttonTitles: { drawMarkerButton: "Tegn punkt", drawPolyButton: "Tegn flate", drawLineButton: "Tegn linje", drawCircleButton: "Tegn sirkel", drawRectButton: "Tegn rektangel", editButton: "Rediger objekter", dragButton: "Dra objekter", cutButton: "Kutt objekter", deleteButton: "Fjern objekter", drawCircleMarkerButton: "Tegn sirkel-punkt", snappingButton: "Fest dratt punkt til andre objekter og punkt", pinningButton: "Pin delte punkter sammen", rotateButton: "Rotér objekter", drawTextButton: "Tegn tekst", scaleButton: "Skalér objekter", autoTracingButton: "Automatisk sporing av linje" }, measurements: { totalLength: "Lengde", segmentLength: "Segmentlengde", area: "Område", radius: "Radius", perimeter: "Omriss", height: "Høyde", width: "Bredde", coordinates: "Posisjon", coordinatesMarker: "Posisjonsmarkør" } }, Rl = { tooltips: { placeMarker: "کلیک برای جانمایی نشان", placeMarkerTouch: "روی نقشه ضربه بزنید تا نشان بگذارید", firstVertex: "کلیک برای رسم اولین رأس", continueLine: "کلیک برای ادامه رسم", finishLine: "کلیک روی هر نشان موجود برای پایان", finishPoly: "کلیک روی اولین نشان برای پایان", finishRect: "کلیک برای پایان", startCircle: "کلیک برای رسم مرکز دایره", finishCircle: "کلیک برای پایان رسم دایره", placeCircleMarker: "کلیک برای رسم نشان دایره", placeText: "کلیک برای نوشتن متن" }, actions: { finish: "پایان", cancel: "لفو", removeLastVertex: "حذف آخرین رأس" }, buttonTitles: { drawMarkerButton: "درج نشان", drawPolyButton: "رسم چندضلعی", drawLineButton: "رسم خط", drawCircleButton: "رسم دایره", drawRectButton: "رسم چهارضلعی", editButton: "ویرایش لایه‌ها", dragButton: "جابجایی لایه‌ها", cutButton: "برش لایه‌ها", deleteButton: "حذف لایه‌ها", drawCircleMarkerButton: "رسم نشان دایره", snappingButton: "نشانگر را به لایه‌ها و رئوس دیگر بکشید", pinningButton: "رئوس مشترک را با هم پین کنید", rotateButton: "چرخش لایه", drawTextButton: "رسم متن", scaleButton: "مقیاس‌گذاری", autoTracingButton: "ردیاب خودکار" }, measurements: { totalLength: "طول", segmentLength: "طول بخش", area: "ناحیه", radius: "شعاع", perimeter: "محیط", height: "ارتفاع", width: "عرض", coordinates: "موقعیت", coordinatesMarker: "موقعیت نشان" } }, Pl = { tooltips: { placeMarker: "Натисніть, щоб нанести маркер", placeMarkerTouch: "Торкніться карти, щоб розмістити маркер", firstVertex: "Натисніть, щоб нанести першу вершину", continueLine: "Натисніть, щоб продовжити малювати", finishLine: "Натисніть будь-який існуючий маркер для завершення", finishPoly: "Виберіть перший маркер, щоб завершити", finishRect: "Натисніть, щоб завершити", startCircle: "Натисніть, щоб додати центр кола", finishCircle: "Натисніть, щоб завершити коло", placeCircleMarker: "Натисніть, щоб нанести круговий маркер" }, actions: { finish: "Завершити", cancel: "Відмінити", removeLastVertex: "Видалити попередню вершину" }, buttonTitles: { drawMarkerButton: "Малювати маркер", drawPolyButton: "Малювати полігон", drawLineButton: "Малювати криву", drawCircleButton: "Малювати коло", drawRectButton: "Малювати прямокутник", editButton: "Редагувати шари", dragButton: "Перенести шари", cutButton: "Вирізати шари", deleteButton: "Видалити шари", drawCircleMarkerButton: "Малювати круговий маркер", snappingButton: "Прив’язати перетягнутий маркер до інших шарів та вершин", pinningButton: "Зв'язати спільні вершини разом", rotateButton: "Повернути шар" } }, Gl = { tooltips: { placeMarker: "İşaretçi yerleştirmek için tıklayın", placeMarkerTouch: "İşaretçi yerleştirmek için haritaya dokunun", firstVertex: "İlk tepe noktasını yerleştirmek için tıklayın", continueLine: "Çizime devam etmek için tıklayın", finishLine: "Bitirmek için mevcut herhangi bir işaretçiyi tıklayın", finishPoly: "Bitirmek için ilk işaretçiyi tıklayın", finishRect: "Bitirmek için tıklayın", startCircle: "Daire merkezine yerleştirmek için tıklayın", finishCircle: "Daireyi bitirmek için tıklayın", placeCircleMarker: "Daire işaretçisi yerleştirmek için tıklayın" }, actions: { finish: "Bitir", cancel: "İptal", removeLastVertex: "Son köşeyi kaldır" }, buttonTitles: { drawMarkerButton: "Çizim İşaretçisi", drawPolyButton: "Çokgenler çiz", drawLineButton: "Çoklu çizgi çiz", drawCircleButton: "Çember çiz", drawRectButton: "Dikdörtgen çiz", editButton: "Katmanları düzenle", dragButton: "Katmanları sürükle", cutButton: "Katmanları kes", deleteButton: "Katmanları kaldır", drawCircleMarkerButton: "Daire işaretçisi çiz", snappingButton: "Sürüklenen işaretçiyi diğer katmanlara ve köşelere yapıştır", pinningButton: "Paylaşılan köşeleri birbirine sabitle", rotateButton: "Katmanı döndür" } }, Nl = { tooltips: { placeMarker: "Kliknutím vytvoříte značku", placeMarkerTouch: "Klepnutím na mapu umístíte značku", firstVertex: "Kliknutím vytvoříte první objekt", continueLine: "Kliknutím pokračujte v kreslení", finishLine: "Kliknutí na libovolnou existující značku pro dokončení", finishPoly: "Vyberte první bod pro dokončení", finishRect: "Klikněte pro dokončení", startCircle: "Kliknutím přidejte střed kruhu", finishCircle: "Нажмите, чтобы задать радиус", placeCircleMarker: "Kliknutím nastavte poloměr" }, actions: { finish: "Dokončit", cancel: "Zrušit", removeLastVertex: "Zrušit poslední akci" }, buttonTitles: { drawMarkerButton: "Přidat značku", drawPolyButton: "Nakreslit polygon", drawLineButton: "Nakreslit křivku", drawCircleButton: "Nakreslit kruh", drawRectButton: "Nakreslit obdélník", editButton: "Upravit vrstvu", dragButton: "Přeneste vrstvu", cutButton: "Vyjmout vrstvu", deleteButton: "Smazat vrstvu", drawCircleMarkerButton: "Přidat kruhovou značku", snappingButton: "Navázat tažnou značku k dalším vrstvám a vrcholům", pinningButton: "Spojit společné body dohromady", rotateButton: "Otočte vrstvu" } }, Vl = { tooltips: { placeMarker: "クリックしてマーカーを配置", placeMarkerTouch: "地図をタップしてマーカーを配置", firstVertex: "クリックして最初の頂点を配置", continueLine: "クリックして描画を続ける", finishLine: "任意のマーカーをクリックして終了", finishPoly: "最初のマーカーをクリックして終了", finishRect: "クリックして終了", startCircle: "クリックして円の中心を配置", finishCircle: "クリックして円の描画を終了", placeCircleMarker: "クリックして円マーカーを配置", placeText: "クリックしてテキストを配置" }, actions: { finish: "終了", cancel: "キャンセル", removeLastVertex: "最後の頂点を削除" }, buttonTitles: { drawMarkerButton: "マーカーを描画", drawPolyButton: "ポリゴンを描画", drawLineButton: "折れ線を描画", drawCircleButton: "円を描画", drawRectButton: "矩形を描画", editButton: "レイヤーを編集", dragButton: "レイヤーをドラッグ", cutButton: "レイヤーを切り取り", deleteButton: "レイヤーを削除", drawCircleMarkerButton: "円マーカーを描画", snappingButton: "ドラッグしたマーカーを他のレイヤーや頂点にスナップする", pinningButton: "共有する頂点を同時に動かす", rotateButton: "レイヤーを回転", drawTextButton: "テキストを描画" } }, Xl = { tooltips: { placeMarker: "Klikkaa asettaaksesi merkin", placeMarkerTouch: "Napauta karttaa asettaaksesi merkin", firstVertex: "Klikkaa asettaakseni ensimmäisen osuuden", continueLine: "Klikkaa jatkaaksesi piirtämistä", finishLine: "Klikkaa olemassa olevaa merkkiä lopettaaksesi", finishPoly: "Klikkaa ensimmäistä merkkiä lopettaaksesi", finishRect: "Klikkaa lopettaaksesi", startCircle: "Klikkaa asettaaksesi ympyrän keskipisteen", finishCircle: "Klikkaa lopettaaksesi ympyrän", placeCircleMarker: "Klikkaa asettaaksesi ympyrämerkin", placeText: "Klikkaa asettaaksesi tekstin" }, actions: { finish: "Valmis", cancel: "Peruuta", removeLastVertex: "Poista viimeinen osuus" }, buttonTitles: { drawMarkerButton: "Piirrä merkkejä", drawPolyButton: "Piirrä monikulmioita", drawLineButton: "Piirrä viivoja", drawCircleButton: "Piirrä ympyrä", drawRectButton: "Piirrä neliskulmioita", editButton: "Muokkaa", dragButton: "Siirrä", cutButton: "Leikkaa", deleteButton: "Poista", drawCircleMarkerButton: "Piirrä ympyrämerkki", snappingButton: "Kiinnitä siirrettävä merkki toisiin muotoihin", pinningButton: "Kiinnitä jaetut muodot yhteen", rotateButton: "Käännä", drawTextButton: "Piirrä tekstiä" } }, Jl = { tooltips: { placeMarker: "마커 위치를 클릭하세요", placeMarkerTouch: "지도를 탭하여 마커를 배치하세요", firstVertex: "첫번째 꼭지점 위치을 클릭하세요", continueLine: "계속 그리려면 클릭하세요", finishLine: "끝내려면 기존 마커를 클릭하세요", finishPoly: "끝내려면 처음 마커를 클릭하세요", finishRect: "끝내려면 클릭하세요", startCircle: "원의 중심이 될 위치를 클릭하세요", finishCircle: "원을 끝내려면 클릭하세요", placeCircleMarker: "원 마커 위치를 클릭하세요", placeText: "텍스트 위치를 클릭하세요" }, actions: { finish: "끝내기", cancel: "취소", removeLastVertex: "마지막 꼭지점 제거" }, buttonTitles: { drawMarkerButton: "마커 그리기", drawPolyButton: "다각형 그리기", drawLineButton: "다각선 그리기", drawCircleButton: "원 그리기", drawRectButton: "직사각형 그리기", editButton: "레이어 편집하기", dragButton: "레이어 끌기", cutButton: "레이어 자르기", deleteButton: "레이어 제거하기", drawCircleMarkerButton: "원 마커 그리기", snappingButton: "잡아끈 마커를 다른 레이어 및 꼭지점에 들러붙게 하기", pinningButton: "공유 꼭지점을 함께 찍기", rotateButton: "레이어 회전하기", drawTextButton: "텍스트 그리기" } }, Yl = { tooltips: { placeMarker: "Маркерди жайгаштыруу үчүн басыңыз", placeMarkerTouch: "Маркерди жайгаштыруу үчүн картага тийиңиз", firstVertex: "Биринчи чокуну жайгаштырууну үчүн басыңыз", continueLine: "Сүрөт тартууну улантуу үчүн басыңыз", finishLine: "Аяктоо үчүн учурдагы маркерди басыңыз", finishPoly: "Бүтүрүү үчүн биринчи маркерди басыңыз", finishRect: "Бүтүрүү үчүн басыңыз", startCircle: "Айлананын борборун жайгаштырууну үчүн басыңыз", finishCircle: "Айлананы бүтүрүү үчүн басыңыз", placeCircleMarker: "Тегерек маркерди жайгаштыруу үчүн басыңыз", placeText: "Текстти жайгаштыруу үчүн басыңыз" }, actions: { finish: "Аягы", cancel: "Жок кылуу", removeLastVertex: "Акыркы чокуну өчүрүү" }, buttonTitles: { drawMarkerButton: "Маркерди чизуу", drawPolyButton: "Полигон чизуу", drawLineButton: "Полилиния чизуу", drawCircleButton: "Дайынды чизуу", drawRectButton: "Прямоугольник чизуу", editButton: "Слоопту түзөтүү", dragButton: "Слоопту карап сүйлөү", cutButton: "Слооптун башын кесүү", deleteButton: "Слооптун өчүрүү", drawCircleMarkerButton: "Дайынды маркерди чизуу", snappingButton: "Башка слооптордун жана вертекстердин арасына чекилдөө", pinningButton: "Бөлүшкөн вертекстерди бирге тутуштуруу", rotateButton: "Слооптун өзгөртүү", drawTextButton: "Текст чизуу", scaleButton: "Слооптун өлчөмүн өзгөртүү", autoTracingButton: "Автоматтык тизмеги чизуу" }, measurements: { totalLength: "Узундук", segmentLength: "Сегмент узундугу", area: "Аймак", radius: "Радиус", perimeter: "Периметр", height: "Диаметр", width: "Кенчилик", coordinates: "Координаттар", coordinatesMarker: "Маркердин координаттары" } }, zl = va, gt = { en: _l, de: Ql, it: Fl, id: El, ro: vl, ru: Ul, es: Ll, nl: bl, fr: xl, pt: zl, pt_br: kl, pt_pt: va, zh: Ml, zh_tw: Il, pl: Dl, sv: Hl, el: Sl, hu: Tl, da: Kl, no: Ol, fa: Rl, ua: Pl, tr: Gl, cz: Nl, ja: Vl, fi: Xl, ko: Jl, ky: Yl }, jl = { _globalEditModeEnabled: !1, enableGlobalEditMode(A) {
    let e = { ...A };
    this._globalEditModeEnabled = !0, this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()), L.PM.Utils.findLayers(this.map).forEach((t) => {
      this._isRelevantForEdit(t) && t.pm.enable(e);
    }), this.throttledReInitEdit || (this.throttledReInitEdit = L.Util.throttle(this.handleLayerAdditionInGlobalEditMode, 100, this)), this._addedLayersEdit = {}, this.map.on("layeradd", this._layerAddedEdit, this), this.map.on("layeradd", this.throttledReInitEdit, this), this._fireGlobalEditModeToggled(!0);
  }, disableGlobalEditMode() {
    this._globalEditModeEnabled = !1, L.PM.Utils.findLayers(this.map).forEach((A) => {
      A.pm.disable();
    }), this.map.off("layeradd", this._layerAddedEdit, this), this.map.off("layeradd", this.throttledReInitEdit, this), this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()), this._fireGlobalEditModeToggled(!1);
  }, globalEditEnabled() {
    return this.globalEditModeEnabled();
  }, globalEditModeEnabled() {
    return this._globalEditModeEnabled;
  }, toggleGlobalEditMode(A = this.globalOptions) {
    this.globalEditModeEnabled() ? this.disableGlobalEditMode() : this.enableGlobalEditMode(A);
  }, handleLayerAdditionInGlobalEditMode() {
    let A = this._addedLayersEdit;
    if (this._addedLayersEdit = {}, this.globalEditModeEnabled()) for (let e in A) {
      let t = A[e];
      this._isRelevantForEdit(t) && t.pm.enable({ ...this.globalOptions });
    }
  }, _layerAddedEdit({ layer: A }) {
    this._addedLayersEdit[L.stamp(A)] = A;
  }, _isRelevantForEdit(A) {
    return A.pm && !(A instanceof L.LayerGroup) && (!L.PM.optIn && !A.options.pmIgnore || L.PM.optIn && A.options.pmIgnore === !1) && !A._pmTempLayer && A.pm.options.allowEditing;
  } }, Wl = jl, Zl = { _globalDragModeEnabled: !1, enableGlobalDragMode() {
    let A = L.PM.Utils.findLayers(this.map);
    this._globalDragModeEnabled = !0, this._addedLayersDrag = {}, A.forEach((e) => {
      this._isRelevantForDrag(e) && e.pm.enableLayerDrag();
    }), this.throttledReInitDrag || (this.throttledReInitDrag = L.Util.throttle(this.reinitGlobalDragMode, 100, this)), this.map.on("layeradd", this._layerAddedDrag, this), this.map.on("layeradd", this.throttledReInitDrag, this), this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()), this._fireGlobalDragModeToggled(!0);
  }, disableGlobalDragMode() {
    let A = L.PM.Utils.findLayers(this.map);
    this._globalDragModeEnabled = !1, A.forEach((e) => {
      e.pm.disableLayerDrag();
    }), this.map.off("layeradd", this._layerAddedDrag, this), this.map.off("layeradd", this.throttledReInitDrag, this), this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()), this._fireGlobalDragModeToggled(!1);
  }, globalDragModeEnabled() {
    return !!this._globalDragModeEnabled;
  }, toggleGlobalDragMode() {
    this.globalDragModeEnabled() ? this.disableGlobalDragMode() : this.enableGlobalDragMode();
  }, reinitGlobalDragMode() {
    let A = this._addedLayersDrag;
    if (this._addedLayersDrag = {}, this.globalDragModeEnabled()) for (let e in A) {
      let t = A[e];
      this._isRelevantForDrag(t) && t.pm.enableLayerDrag();
    }
  }, _layerAddedDrag({ layer: A }) {
    this._addedLayersDrag[L.stamp(A)] = A;
  }, _isRelevantForDrag(A) {
    return A.pm && !(A instanceof L.LayerGroup) && (!L.PM.optIn && !A.options.pmIgnore || L.PM.optIn && A.options.pmIgnore === !1) && !A._pmTempLayer && A.pm.options.draggable;
  } }, ql = Zl, $l = { _globalRemovalModeEnabled: !1, enableGlobalRemovalMode() {
    this._globalRemovalModeEnabled = !0, this.map.eachLayer((A) => {
      this._isRelevantForRemoval(A) && (A.pm.enabled() && A.pm.disable(), A.on("click", this.removeLayer, this));
    }), this.throttledReInitRemoval || (this.throttledReInitRemoval = L.Util.throttle(this.handleLayerAdditionInGlobalRemovalMode, 100, this)), this._addedLayersRemoval = {}, this.map.on("layeradd", this._layerAddedRemoval, this), this.map.on("layeradd", this.throttledReInitRemoval, this), this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()), this._fireGlobalRemovalModeToggled(!0);
  }, disableGlobalRemovalMode() {
    this._globalRemovalModeEnabled = !1, this.map.eachLayer((A) => {
      A.off("click", this.removeLayer, this);
    }), this.map.off("layeradd", this._layerAddedRemoval, this), this.map.off("layeradd", this.throttledReInitRemoval, this), this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()), this._fireGlobalRemovalModeToggled(!1);
  }, globalRemovalEnabled() {
    return this.globalRemovalModeEnabled();
  }, globalRemovalModeEnabled() {
    return !!this._globalRemovalModeEnabled;
  }, toggleGlobalRemovalMode() {
    this.globalRemovalModeEnabled() ? this.disableGlobalRemovalMode() : this.enableGlobalRemovalMode();
  }, removeLayer(A) {
    let e = A.target;
    this._isRelevantForRemoval(e) && !e.pm.dragging() && (e.removeFrom(this.map.pm._getContainingLayer()), e.remove(), e instanceof L.LayerGroup ? (this._fireRemoveLayerGroup(e), this._fireRemoveLayerGroup(this.map, e)) : (e.pm._fireRemove(e), e.pm._fireRemove(this.map, e)));
  }, _isRelevantForRemoval(A) {
    return A.pm && !(A instanceof L.LayerGroup) && (!L.PM.optIn && !A.options.pmIgnore || L.PM.optIn && A.options.pmIgnore === !1) && !A._pmTempLayer && A.pm.options.allowRemoval;
  }, handleLayerAdditionInGlobalRemovalMode() {
    let A = this._addedLayersRemoval;
    if (this._addedLayersRemoval = {}, this.globalRemovalModeEnabled()) for (let e in A) {
      let t = A[e];
      this._isRelevantForRemoval(t) && (t.pm.enabled() && t.pm.disable(), t.on("click", this.removeLayer, this));
    }
  }, _layerAddedRemoval({ layer: A }) {
    this._addedLayersRemoval[L.stamp(A)] = A;
  } }, Ah = $l, eh = { _globalRotateModeEnabled: !1, enableGlobalRotateMode() {
    this._globalRotateModeEnabled = !0, L.PM.Utils.findLayers(this.map).filter((A) => A instanceof L.Polyline).forEach((A) => {
      this._isRelevantForRotate(A) && A.pm.enableRotate();
    }), this.throttledReInitRotate || (this.throttledReInitRotate = L.Util.throttle(this.handleLayerAdditionInGlobalRotateMode, 100, this)), this._addedLayersRotate = {}, this.map.on("layeradd", this._layerAddedRotate, this), this.map.on("layeradd", this.throttledReInitRotate, this), this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()), this._fireGlobalRotateModeToggled();
  }, disableGlobalRotateMode() {
    this._globalRotateModeEnabled = !1, L.PM.Utils.findLayers(this.map).filter((A) => A instanceof L.Polyline).forEach((A) => {
      A.pm.disableRotate();
    }), this.map.off("layeradd", this._layerAddedRotate, this), this.map.off("layeradd", this.throttledReInitRotate, this), this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()), this._fireGlobalRotateModeToggled();
  }, globalRotateModeEnabled() {
    return !!this._globalRotateModeEnabled;
  }, toggleGlobalRotateMode() {
    this.globalRotateModeEnabled() ? this.disableGlobalRotateMode() : this.enableGlobalRotateMode();
  }, _isRelevantForRotate(A) {
    return A.pm && A instanceof L.Polyline && !(A instanceof L.LayerGroup) && (!L.PM.optIn && !A.options.pmIgnore || L.PM.optIn && A.options.pmIgnore === !1) && !A._pmTempLayer && A.pm.options.allowRotation;
  }, handleLayerAdditionInGlobalRotateMode() {
    let A = this._addedLayersRotate;
    if (this._addedLayersRotate = {}, this.globalRotateModeEnabled()) for (let e in A) {
      let t = A[e];
      this._isRelevantForRemoval(t) && t.pm.enableRotate();
    }
  }, _layerAddedRotate({ layer: A }) {
    this._addedLayersRotate[L.stamp(A)] = A;
  } }, th = eh, rh = C(Ti()), ih = { _fireDrawStart(A = "Draw", e = {}) {
    this.__fire(this._map, "pm:drawstart", { shape: this._shape, workingLayer: this._layer }, A, e);
  }, _fireDrawEnd(A = "Draw", e = {}) {
    this.__fire(this._map, "pm:drawend", { shape: this._shape }, A, e);
  }, _fireCreate(A, e = "Draw", t = {}) {
    this.__fire(this._map, "pm:create", { shape: this._shape, marker: A, layer: A }, e, t);
  }, _fireCenterPlaced(A = "Draw", e = {}) {
    let t = A === "Draw" ? this._layer : void 0, i = A !== "Draw" ? this._layer : void 0;
    this.__fire(this._layer, "pm:centerplaced", { shape: this._shape, workingLayer: t, layer: i, latlng: this._layer.getLatLng() }, A, e);
  }, _fireCut(A, e, t, i = "Draw", o = {}) {
    this.__fire(A, "pm:cut", { shape: this._shape, layer: e, originalLayer: t }, i, o);
  }, _fireEdit(A = this._layer, e = "Edit", t = {}) {
    this.__fire(A, "pm:edit", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireEnable(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:enable", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireDisable(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:disable", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireUpdate(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:update", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireMarkerDragStart(A, e = void 0, t = "Edit", i = {}) {
    this.__fire(this._layer, "pm:markerdragstart", { layer: this._layer, markerEvent: A, shape: this.getShape(), indexPath: e }, t, i);
  }, _fireMarkerDrag(A, e = void 0, t = "Edit", i = {}) {
    this.__fire(this._layer, "pm:markerdrag", { layer: this._layer, markerEvent: A, shape: this.getShape(), indexPath: e }, t, i);
  }, _fireMarkerDragEnd(A, e = void 0, t = void 0, i = "Edit", o = {}) {
    this.__fire(this._layer, "pm:markerdragend", { layer: this._layer, markerEvent: A, shape: this.getShape(), indexPath: e, intersectionReset: t }, i, o);
  }, _fireDragStart(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:dragstart", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireDrag(A, e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:drag", { ...A, shape: this.getShape() }, e, t);
  }, _fireDragEnd(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:dragend", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireDragEnable(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:dragenable", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireDragDisable(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:dragdisable", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireRemove(A, e = A, t = "Edit", i = {}) {
    this.__fire(A, "pm:remove", { layer: e, shape: this.getShape() }, t, i);
  }, _fireVertexAdded(A, e, t, i = "Edit", o = {}) {
    this.__fire(this._layer, "pm:vertexadded", { layer: this._layer, workingLayer: this._layer, marker: A, indexPath: e, latlng: t, shape: this.getShape() }, i, o);
  }, _fireVertexRemoved(A, e, t = "Edit", i = {}) {
    this.__fire(this._layer, "pm:vertexremoved", { layer: this._layer, marker: A, indexPath: e, shape: this.getShape() }, t, i);
  }, _fireVertexClick(A, e, t = "Edit", i = {}) {
    this.__fire(this._layer, "pm:vertexclick", { layer: this._layer, markerEvent: A, indexPath: e, shape: this.getShape() }, t, i);
  }, _fireIntersect(A, e = this._layer, t = "Edit", i = {}) {
    this.__fire(e, "pm:intersect", { layer: this._layer, intersection: A, shape: this.getShape() }, t, i);
  }, _fireLayerReset(A, e, t = "Edit", i = {}) {
    this.__fire(this._layer, "pm:layerreset", { layer: this._layer, markerEvent: A, indexPath: e, shape: this.getShape() }, t, i);
  }, _fireChange(A, e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:change", { layer: this._layer, latlngs: A, shape: this.getShape() }, e, t);
  }, _fireTextChange(A, e = "Edit", t = {}) {
    this.__fire(this._layer, "pm:textchange", { layer: this._layer, text: A, shape: this.getShape() }, e, t);
  }, _fireTextFocus(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:textfocus", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireTextBlur(A = "Edit", e = {}) {
    this.__fire(this._layer, "pm:textblur", { layer: this._layer, shape: this.getShape() }, A, e);
  }, _fireSnapDrag(A, e, t = "Snapping", i = {}) {
    this.__fire(A, "pm:snapdrag", e, t, i);
  }, _fireSnap(A, e, t = "Snapping", i = {}) {
    this.__fire(A, "pm:snap", e, t, i);
  }, _fireUnsnap(A, e, t = "Snapping", i = {}) {
    this.__fire(A, "pm:unsnap", e, t, i);
  }, _fireRotationEnable(A, e, t = "Rotation", i = {}) {
    this.__fire(A, "pm:rotateenable", { layer: this._layer, helpLayer: this._rotatePoly, shape: this.getShape() }, t, i);
  }, _fireRotationDisable(A, e = "Rotation", t = {}) {
    this.__fire(A, "pm:rotatedisable", { layer: this._layer, shape: this.getShape() }, e, t);
  }, _fireRotationStart(A, e, t = "Rotation", i = {}) {
    this.__fire(A, "pm:rotatestart", { layer: this._rotationLayer, helpLayer: this._layer, startAngle: this._startAngle, originLatLngs: e }, t, i);
  }, _fireRotation(A, e, t, i = this._rotationLayer, o = "Rotation", u = {}) {
    this.__fire(A, "pm:rotate", { layer: i, helpLayer: this._layer, startAngle: this._startAngle, angle: i.pm.getAngle(), angleDiff: e, oldLatLngs: t, newLatLngs: i.getLatLngs() }, o, u);
  }, _fireRotationEnd(A, e, t, i = "Rotation", o = {}) {
    this.__fire(A, "pm:rotateend", { layer: this._rotationLayer, helpLayer: this._layer, startAngle: e, angle: this._rotationLayer.pm.getAngle(), originLatLngs: t, newLatLngs: this._rotationLayer.getLatLngs() }, i, o);
  }, _fireActionClick(A, e, t, i = "Toolbar", o = {}) {
    this.__fire(this._map, "pm:actionclick", { text: A.text, action: A, btnName: e, button: t }, i, o);
  }, _fireButtonClick(A, e, t = "Toolbar", i = {}) {
    this.__fire(this._map, "pm:buttonclick", { btnName: A, button: e }, t, i);
  }, _fireLangChange(A, e, t, i, o = "Global", u = {}) {
    this.__fire(this.map, "pm:langchange", { oldLang: A, activeLang: e, fallback: t, translations: i }, o, u);
  }, _fireGlobalDragModeToggled(A, e = "Global", t = {}) {
    this.__fire(this.map, "pm:globaldragmodetoggled", { enabled: A, map: this.map }, e, t);
  }, _fireGlobalEditModeToggled(A, e = "Global", t = {}) {
    this.__fire(this.map, "pm:globaleditmodetoggled", { enabled: A, map: this.map }, e, t);
  }, _fireGlobalRemovalModeToggled(A, e = "Global", t = {}) {
    this.__fire(this.map, "pm:globalremovalmodetoggled", { enabled: A, map: this.map }, e, t);
  }, _fireGlobalCutModeToggled(A = "Global", e = {}) {
    this.__fire(this._map, "pm:globalcutmodetoggled", { enabled: !!this._enabled, map: this._map }, A, e);
  }, _fireGlobalDrawModeToggled(A = "Global", e = {}) {
    this.__fire(this._map, "pm:globaldrawmodetoggled", { enabled: this._enabled, shape: this._shape, map: this._map }, A, e);
  }, _fireGlobalRotateModeToggled(A = "Global", e = {}) {
    this.__fire(this.map, "pm:globalrotatemodetoggled", { enabled: this.globalRotateModeEnabled(), map: this.map }, A, e);
  }, _fireRemoveLayerGroup(A, e = A, t = "Edit", i = {}) {
    this.__fire(A, "pm:remove", { layer: e, shape: void 0 }, t, i);
  }, _fireKeyeventEvent(A, e, t, i = "Global", o = {}) {
    this.__fire(this.map, "pm:keyevent", { event: A, eventType: e, focusOn: t }, i, o);
  }, __fire(A, e, t, i, o = {}) {
    t = (0, rh.default)(t, o, { source: i }), L.PM.Utils._fireEvent(A, e, t);
  } }, wr = ih, nh = () => ({ _lastEvents: { keydown: void 0, keyup: void 0, current: void 0 }, _initKeyListener(A) {
    this.map = A, L.DomEvent.on(document, "keydown keyup", this._onKeyListener, this), L.DomEvent.on(window, "blur", this._onBlur, this), A.once("unload", this._unbindKeyListenerEvents, this);
  }, _handleEscapeKey(A) {
    let e = this.map.pm;
    return !e.getGlobalOptions().exitModeOnEscape || !(e.globalDrawModeEnabled() || e.globalEditModeEnabled() || e.globalDragModeEnabled() || e.globalRemovalModeEnabled() || e.globalRotateModeEnabled() || e.globalCutModeEnabled()) ? !1 : (A.preventDefault(), e.globalDrawModeEnabled() && e.disableDraw(), e.globalEditModeEnabled() && e.disableGlobalEditMode(), e.globalDragModeEnabled() && e.disableGlobalDragMode(), e.globalRemovalModeEnabled() && e.disableGlobalRemovalMode(), e.globalRotateModeEnabled() && e.disableGlobalRotateMode(), e.globalCutModeEnabled() && e.disableGlobalCutMode(), !0);
  }, _handleEnterKey(A) {
    let e = this.map.pm;
    if (!e.getGlobalOptions().finishOnEnter) return !1;
    let t = e.Draw.getActiveShape();
    if (!t) return !1;
    let i = e.Draw[t];
    return !i || !i._finishShape || !this._canFinishShape(i, t) ? !1 : (A.preventDefault(), i._finishShape(), !0);
  }, _canFinishShape(A, e) {
    var t;
    if (["Marker", "CircleMarker", "Text"].includes(e)) return !1;
    if (e === "Rectangle") return A._startMarker !== void 0;
    if (e === "Circle") return A._centerMarker && ((t = A._layerGroup) == null ? void 0 : t.hasLayer(A._centerMarker));
    if (A._layer && A._layer.getLatLngs) {
      let i = A._layer.getLatLngs();
      if (e === "Line") return (i.flat ? i.flat() : i).length >= 2;
      if (e === "Polygon" || e === "Cut") return i.length >= 3;
    }
    return !1;
  }, _unbindKeyListenerEvents() {
    L.DomEvent.off(document, "keydown keyup", this._onKeyListener, this), L.DomEvent.off(window, "blur", this._onBlur, this);
  }, _onKeyListener(A) {
    let e = "document";
    this.map.getContainer().contains(A.target) && (e = "map");
    let t = { event: A, eventType: A.type, focusOn: e };
    this._lastEvents[A.type] = t, this._lastEvents.current = t, this.map.pm._fireKeyeventEvent(A, A.type, e), A.type === "keydown" && (A.key === "Escape" && this._handleEscapeKey(A), A.key === "Enter" && this._handleEnterKey(A));
  }, _onBlur(A) {
    A.altKey = !1;
    let e = { event: A, eventType: A.type, focusOn: "document" };
    this._lastEvents[A.type] = e, this._lastEvents.current = e;
  }, getLastKeyEvent(A = "current") {
    return this._lastEvents[A];
  }, isShiftKeyPressed() {
    var A;
    return (A = this._lastEvents.current) == null ? void 0 : A.event.shiftKey;
  }, isAltKeyPressed() {
    var A;
    return (A = this._lastEvents.current) == null ? void 0 : A.event.altKey;
  }, isCtrlKeyPressed() {
    var A;
    return (A = this._lastEvents.current) == null ? void 0 : A.event.ctrlKey;
  }, isMetaKeyPressed() {
    var A;
    return (A = this._lastEvents.current) == null ? void 0 : A.event.metaKey;
  }, getPressedKey() {
    var A;
    return (A = this._lastEvents.current) == null ? void 0 : A.event.key;
  } }), ah = nh, Ua = C(Cr());
  function dA(A) {
    let e = L.PM.activeLang;
    return (0, Ua.default)(gt[e], A) || (0, Ua.default)(gt.en, A) || A;
  }
  function sh() {
    return window.matchMedia ? !window.matchMedia("(pointer: coarse)").matches : !0;
  }
  function Oi(A) {
    for (let e = 0; e < A.length; e += 1) {
      let t = A[e];
      if (Array.isArray(t)) {
        if (Oi(t)) return !0;
      } else if (t != null && t !== "") return !0;
    }
    return !1;
  }
  function mr(A) {
    return A.reduce((e, t) => {
      if (t.length !== 0) {
        let i = Array.isArray(t) ? mr(t) : t;
        Array.isArray(i) ? i.length !== 0 && e.push(i) : e.push(i);
      }
      return e;
    }, []);
  }
  function oh(A, e, t) {
    let i = { a: L.CRS.Earth.R, b: 63567523142e-4, f: 0.0033528106647474805 }, { a: o, b: u, f: h } = i, c = A.lng, p = A.lat, f = t, F = Math.PI, y = e * F / 180, I = Math.sin(y), k = Math.cos(y), G = (1 - h) * Math.tan(p * F / 180), J = 1 / Math.sqrt(1 + G * G), eA = G * J, rA = Math.atan2(G, k), Q = J * I, S = 1 - Q * Q, P = S * (o * o - u * u) / (u * u), Z = 1 + P / 16384 * (4096 + P * (-768 + P * (320 - 175 * P))), j = P / 1024 * (256 + P * (-128 + P * (74 - 47 * P))), W = f / (u * Z), d = 2 * Math.PI, m, _, x;
    for (; Math.abs(W - d) > 1e-12; ) {
      m = Math.cos(2 * rA + W), _ = Math.sin(W), x = Math.cos(W);
      let z = j * _ * (m + j / 4 * (x * (-1 + 2 * m * m) - j / 6 * m * (-3 + 4 * _ * _) * (-3 + 4 * m * m)));
      d = W, W = f / (u * Z) + z;
    }
    let b = eA * _ - J * x * k, U = Math.atan2(eA * x + J * _ * k, (1 - h) * Math.sqrt(Q * Q + b * b)), T = Math.atan2(_ * I, J * x - eA * _ * k), M = h / 16 * S * (4 + h * (4 - 3 * S)), H = T - (1 - M) * h * Q * (W + M * _ * (m + M * x * (-1 + 2 * m * m))), O = c + H * 180 / F, K = U * 180 / F;
    return L.latLng(O, K);
  }
  function La(A, e, t, i, o = !0) {
    let u, h, c, p = [];
    for (let f = 0; f < t; f += 1) {
      if (o) u = f * 360 / t + i, h = oh(A, u, e), c = L.latLng(h.lng, h.lat);
      else {
        let F = A.lat + Math.cos(2 * f * Math.PI / t) * e, y = A.lng + Math.sin(2 * f * Math.PI / t) * e;
        c = L.latLng(F, y);
      }
      p.push(c);
    }
    return p;
  }
  function uh(A, e, t) {
    e = (e + 360) % 360;
    let i = Math.PI / 180, o = 180 / Math.PI, { R: u } = L.CRS.Earth, h = A.lng * i, c = A.lat * i, p = e * i, f = Math.sin(c), F = Math.cos(c), y = Math.cos(t / u), I = Math.sin(t / u), k = Math.asin(f * y + F * I * Math.cos(p)), G = h + Math.atan2(Math.sin(p) * I * F, y - f * Math.sin(k));
    G *= o;
    let J = G - 360, eA = G < -180 ? G + 360 : G;
    return G = G > 180 ? J : eA, L.latLng([k * o, G]);
  }
  function Ri(A, e, t) {
    let i = A.latLngToContainerPoint(e), o = A.latLngToContainerPoint(t), u = Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI + 90;
    return u += u < 0 ? 360 : 0, u;
  }
  function yr(A, e, t, i) {
    let o = Ri(A, e, t);
    return uh(e, o, i);
  }
  function lh(A, e, t = "asc") {
    if (!e || Object.keys(e).length === 0) return (p, f) => p - f;
    let i = Object.keys(e), o, u = i.length - 1, h = {};
    for (; u >= 0; ) o = i[u], h[o.toLowerCase()] = e[o], u -= 1;
    function c(p) {
      if (p instanceof L.Marker) return "Marker";
      if (p instanceof L.Circle) return "Circle";
      if (p instanceof L.CircleMarker) return "CircleMarker";
      if (p instanceof L.Rectangle) return "Rectangle";
      if (p instanceof L.Polygon) return "Polygon";
      if (p instanceof L.Polyline) return "Line";
    }
    return (p, f) => {
      let F, y;
      if (F = c(p.layer).toLowerCase(), y = c(f.layer).toLowerCase(), !F || !y) return 0;
      let I = F in h ? h[F] : Number.MAX_SAFE_INTEGER, k = y in h ? h[y] : Number.MAX_SAFE_INTEGER, G = 0;
      return I < k ? G = -1 : I > k && (G = 1), t === "desc" ? G * -1 : G;
    };
  }
  function Ne(A, e = A.getLatLngs()) {
    return A instanceof L.Polygon ? L.polygon(e).getLatLngs() : L.polyline(e).getLatLngs();
  }
  function ba(A, e) {
    var t, i, o, u;
    if ((i = (t = e.options.crs) == null ? void 0 : t.projection) != null && i.MAX_LATITUDE) {
      let h = (u = (o = e.options.crs) == null ? void 0 : o.projection) == null ? void 0 : u.MAX_LATITUDE;
      A.lat = Math.max(Math.min(h, A.lat), -h);
    }
    return A;
  }
  function pt(A) {
    return A.options.renderer || A._map && (A._map._getPaneRenderer(A.options.pane) || A._map.options.renderer || A._map._renderer) || A._renderer;
  }
  function hh(A, e) {
    if (A = A.trim().toLowerCase(), e[A]) return A;
    let t = A.replace(/[-_\s]/g, "_").match(/^([a-z]{2,3})(?:_([a-z]{2,3}))?$/);
    if (t) {
      let i = [];
      t[2] && i.push(`${t[1]}_${t[2]}`), i.push(t[1]);
      for (let o of i) if (e[o]) return o;
    }
    return A;
  }
  var ch = L.Class.extend({ includes: [Wl, ql, Ah, th, wr], initialize(A) {
    this.map = A, this.Draw = new L.PM.Draw(A), this.Toolbar = new L.PM.Toolbar(A), this.Keyboard = ah(), this.globalOptions = { snappable: !0, layerGroup: void 0, snappingOrder: ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"], panes: { vertexPane: "markerPane", layerPane: "overlayPane", markerPane: "markerPane" }, draggable: !0, exitModeOnEscape: !1, finishOnEnter: !1 }, this.Keyboard._initKeyListener(A);
  }, setLang(A = "en", e, t = "en") {
    A = hh(A, gt);
    let i = L.PM.activeLang;
    e && (gt[A] = (0, Ea.default)(gt[t], e)), L.PM.activeLang = A, this.map.pm.Toolbar.reinit(), this._fireLangChange(i, A, t, gt[A]);
  }, addControls(A) {
    this.Toolbar.addControls(A);
  }, removeControls() {
    this.Toolbar.removeControls();
  }, toggleControls() {
    this.Toolbar.toggleControls();
  }, controlsVisible() {
    return this.Toolbar.isVisible;
  }, enableDraw(A = "Polygon", e) {
    A === "Poly" && (A = "Polygon"), this.Draw.enable(A, e);
  }, disableDraw(A = "Polygon") {
    A === "Poly" && (A = "Polygon"), this.Draw.disable(A);
  }, setPathOptions(A, e = {}) {
    let t = e.ignoreShapes || [], i = e.merge || !1;
    this.map.pm.Draw.shapes.forEach((o) => {
      t.indexOf(o) === -1 && this.map.pm.Draw[o].setPathOptions(A, i);
    });
  }, getGlobalOptions() {
    return this.globalOptions;
  }, setGlobalOptions(A) {
    let e = (0, Ea.default)(this.globalOptions, A);
    e.editable && (e.resizeableCircleMarker = e.editable, delete e.editable);
    let t = !1;
    this.map.pm.Draw.CircleMarker.enabled() && !!this.map.pm.Draw.CircleMarker.options.resizeableCircleMarker != !!e.resizeableCircleMarker && (this.map.pm.Draw.CircleMarker.disable(), t = !0);
    let i = !1;
    this.map.pm.Draw.Circle.enabled() && !!this.map.pm.Draw.Circle.options.resizeableCircle != !!e.resizeableCircle && (this.map.pm.Draw.Circle.disable(), i = !0), this.map.pm.Draw.shapes.forEach((o) => {
      this.map.pm.Draw[o].setOptions(e);
    }), t && this.map.pm.Draw.CircleMarker.enable(), i && this.map.pm.Draw.Circle.enable(), L.PM.Utils.findLayers(this.map).forEach((o) => {
      o.pm.setOptions(e);
    }), this.map.fire("pm:globaloptionschanged"), this.globalOptions = e, this.applyGlobalOptions();
  }, applyGlobalOptions() {
    L.PM.Utils.findLayers(this.map).forEach((A) => {
      A.pm.enabled() && A.pm.applyOptions();
    });
  }, globalDrawModeEnabled() {
    return !!this.Draw.getActiveShape();
  }, globalCutModeEnabled() {
    return !!this.Draw.Cut.enabled();
  }, enableGlobalCutMode(A) {
    return this.Draw.Cut.enable(A);
  }, toggleGlobalCutMode(A) {
    return this.Draw.Cut.toggle(A);
  }, disableGlobalCutMode() {
    return this.Draw.Cut.disable();
  }, getGeomanLayers(A = !1) {
    let e = L.PM.Utils.findLayers(this.map);
    if (!A) return e;
    let t = L.featureGroup();
    return t._pmTempLayer = !0, e.forEach((i) => {
      t.addLayer(i);
    }), t;
  }, getGeomanDrawLayers(A = !1) {
    let e = L.PM.Utils.findLayers(this.map).filter((i) => i._drawnByGeoman === !0);
    if (!A) return e;
    let t = L.featureGroup();
    return t._pmTempLayer = !0, e.forEach((i) => {
      t.addLayer(i);
    }), t;
  }, _getContainingLayer() {
    return this.globalOptions.layerGroup && this.globalOptions.layerGroup instanceof L.LayerGroup ? this.globalOptions.layerGroup : this.map;
  }, _isCRSSimple() {
    return this.map.options.crs === L.CRS.Simple;
  }, _touchEventCounter: 0, _addTouchEvents(A) {
    this._touchEventCounter === 0 && (L.DomEvent.on(A, "touchmove", this._canvasTouchMove, this), L.DomEvent.on(A, "touchstart touchend touchcancel", this._canvasTouchClick, this)), this._touchEventCounter += 1;
  }, _removeTouchEvents(A) {
    this._touchEventCounter === 1 && (L.DomEvent.off(A, "touchmove", this._canvasTouchMove, this), L.DomEvent.off(A, "touchstart touchend touchcancel", this._canvasTouchClick, this)), this._touchEventCounter = this._touchEventCounter <= 1 ? 0 : this._touchEventCounter - 1;
  }, _canvasTouchMove(A) {
    pt(this.map)._onMouseMove(this._createMouseEvent("mousemove", A));
  }, _canvasTouchClick(A) {
    let e = "";
    A.type === "touchstart" || A.type === "pointerdown" ? e = "mousedown" : (A.type === "touchend" || A.type === "pointerup" || A.type === "touchcancel" || A.type === "pointercancel") && (e = "mouseup"), e && pt(this.map)._onClick(this._createMouseEvent(e, A));
  }, _createMouseEvent(A, e) {
    let t, i = e.touches[0] || e.changedTouches[0];
    try {
      t = new MouseEvent(A, { bubbles: e.bubbles, cancelable: e.cancelable, view: e.view, detail: i.detail, screenX: i.screenX, screenY: i.screenY, clientX: i.clientX, clientY: i.clientY, ctrlKey: e.ctrlKey, altKey: e.altKey, shiftKey: e.shiftKey, metaKey: e.metaKey, button: e.button, relatedTarget: e.relatedTarget });
    } catch {
      t = document.createEvent("MouseEvents"), t.initMouseEvent(A, e.bubbles, e.cancelable, e.view, i.detail, i.screenX, i.screenY, i.clientX, i.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
    }
    return t;
  } }), Bh = ch, gh = L.Control.extend({ includes: [wr], options: { position: "topleft", disableByOtherButtons: !0 }, initialize(A) {
    this._button = L.Util.extend({}, this.options, A);
  }, onAdd(A) {
    return this._map = A, this._map.pm.Toolbar.options.oneBlock ? this._container = this._map.pm.Toolbar._createContainer(this.options.position) : this._button.tool === "edit" ? this._container = this._map.pm.Toolbar.editContainer : this._button.tool === "options" ? this._container = this._map.pm.Toolbar.optionsContainer : this._button.tool === "custom" ? this._container = this._map.pm.Toolbar.customContainer : this._container = this._map.pm.Toolbar.drawContainer, this._renderButton(), this._container;
  }, _renderButton() {
    let A = this.buttonsDomNode;
    this.buttonsDomNode = this._makeButton(this._button), A ? A.replaceWith(this.buttonsDomNode) : this._container.appendChild(this.buttonsDomNode);
  }, onRemove() {
    return this.buttonsDomNode.remove(), this._container;
  }, getText() {
    return this._button.text;
  }, getIconUrl() {
    return this._button.iconUrl;
  }, destroy() {
    this._button = {}, this._update();
  }, toggle(A) {
    return typeof A == "boolean" ? this._button.toggleStatus = A : this._button.toggleStatus = !this._button.toggleStatus, this._applyStyleClasses(), this._updateActiveAction(this._button), this._button.toggleStatus;
  }, toggled() {
    return this._button.toggleStatus;
  }, onCreate() {
    this.toggle(!1);
  }, disable() {
    this.toggle(!1), this._button.disabled = !0, this._updateDisabled();
  }, enable() {
    this._button.disabled = !1, this._updateDisabled(), this._updateActiveAction(this._button);
  }, _triggerClick(A) {
    A && A.preventDefault(), !this._button.disabled && (this._button.onClick(A, { button: this, event: A }), this._clicked(A), this._button.afterClick(A, { button: this, event: A }));
  }, _makeButton(A) {
    let e = this.options.position.indexOf("right") > -1 ? "pos-right" : "", t = L.DomUtil.create("div", `button-container  ${e}`, this._container);
    A.title && t.setAttribute("title", A.title);
    let i = L.DomUtil.create("a", "leaflet-buttons-control-button", t);
    i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.href = "#";
    let o = L.DomUtil.create("div", `leaflet-pm-actions-container ${e}`, t), u = A.actions, h = { cancel: { text: dA("actions.cancel"), title: dA("actions.cancel"), onClick() {
      this._triggerClick();
    } }, finishMode: { text: dA("actions.finish"), title: dA("actions.finish"), onClick() {
      this._triggerClick();
    } }, removeLastVertex: { text: dA("actions.removeLastVertex"), title: dA("actions.removeLastVertex"), onClick() {
      this._map.pm.Draw[A.jsClass]._removeLastVertex();
    } }, finish: { text: dA("actions.finish"), title: dA("actions.finish"), onClick(p) {
      this._map.pm.Draw[A.jsClass]._finishShape(p);
    } } };
    A._preparedActions = u.map((p) => {
      let f = typeof p == "string" ? p : p.name, F;
      if (h[f]) F = h[f];
      else if (p.text) F = p;
      else return F;
      let y = L.DomUtil.create("a", `leaflet-pm-action ${e} action-${f}`, o);
      if (y.setAttribute("role", "button"), y.setAttribute("tabindex", "0"), y.href = "#", F.title && (y.title = F.title), y.innerHTML = F.text, L.DomEvent.disableClickPropagation(y), L.DomEvent.on(y, "click", L.DomEvent.stop), F._node = y, !A.disabled && F.onClick) {
        let I = (k) => {
          k.preventDefault();
          let G = "", { buttons: J } = this._map.pm.Toolbar;
          for (let eA in J) if (J[eA]._button === A) {
            G = eA;
            break;
          }
          this._fireActionClick(F, G, A);
        };
        L.DomEvent.addListener(y, "click", I, this), L.DomEvent.addListener(y, "click", F.onClick, this), L.DomEvent.addListener(y, "click", () => this._updateActiveAction(A));
      }
      return F;
    }), this._updateActiveAction(A), A.toggleStatus && L.DomUtil.addClass(t, "active");
    let c = L.DomUtil.create("div", "control-icon", i);
    return A.iconUrl && c.setAttribute("src", A.iconUrl), A.className && L.DomUtil.addClass(c, A.className), L.DomEvent.disableClickPropagation(i), L.DomEvent.on(i, "click", L.DomEvent.stop), A.disabled || (L.DomEvent.addListener(i, "click", this._onBtnClick, this), L.DomEvent.addListener(i, "click", this._triggerClick, this)), A.disabled && (L.DomUtil.addClass(i, "pm-disabled"), i.setAttribute("aria-disabled", "true")), t;
  }, _applyStyleClasses() {
    this._container && (!this._button.toggleStatus || this._button.cssToggle === !1 ? (L.DomUtil.removeClass(this.buttonsDomNode, "active"), L.DomUtil.removeClass(this._container, "activeChild")) : (L.DomUtil.addClass(this.buttonsDomNode, "active"), L.DomUtil.addClass(this._container, "activeChild")));
  }, _onBtnClick() {
    if (this._button.disabled) return;
    this._button.disableOtherButtons && this._map.pm.Toolbar.triggerClickOnToggledButtons(this);
    let A = "", { buttons: e } = this._map.pm.Toolbar;
    for (let t in e) if (e[t]._button === this._button) {
      A = t;
      break;
    }
    this._fireButtonClick(A, this._button);
  }, _clicked() {
    this._button.doToggle && this.toggle();
  }, _updateDisabled() {
    if (!this._container) return;
    let A = "pm-disabled", e = this.buttonsDomNode.children[0];
    this._button.disabled ? (L.DomUtil.addClass(e, A), e.setAttribute("aria-disabled", "true")) : (L.DomUtil.removeClass(e, A), e.setAttribute("aria-disabled", "false"));
  }, _updateActiveAction(A) {
    var e;
    (e = A._preparedActions) == null || e.forEach((t) => {
      t != null && t._node && (t.isActive && t.isActive.call(this) ? L.DomUtil.addClass(t._node, "active-action") : L.DomUtil.removeClass(t._node, "active-action"));
    });
  } }), ph = gh;
  L.Control.PMButton = ph;
  var fh = L.Class.extend({ options: { drawMarker: !0, drawRectangle: !0, drawPolyline: !0, drawPolygon: !0, drawCircle: !0, drawCircleMarker: !0, drawText: !0, editMode: !0, dragMode: !0, cutPolygon: !0, removalMode: !0, rotateMode: !0, snappingOption: !0, drawControls: !0, editControls: !0, optionsControls: !0, customControls: !0, oneBlock: !1, position: "topleft", positions: { draw: "", edit: "", options: "", custom: "" } }, customButtons: [], initialize(A) {
    this.customButtons = [], this.options.positions = { draw: "", edit: "", options: "", custom: "" }, this.init(A);
  }, reinit() {
    let A = this.isVisible;
    this.removeControls(), this._defineButtons(), A && this.addControls();
  }, init(A) {
    this.map = A, this.buttons = {}, this.isVisible = !1, this.drawContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"), this.editContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"), this.optionsContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control"), this.customContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control"), this._defineButtons();
  }, _createContainer(A) {
    let e = `${A}Container`;
    return this[e] || (this[e] = L.DomUtil.create("div", `leaflet-pm-toolbar leaflet-pm-${A} leaflet-bar leaflet-control`)), this[e];
  }, getButtons() {
    return this.buttons;
  }, addControls(A = this.options) {
    typeof A.editPolygon < "u" && (A.editMode = A.editPolygon), typeof A.deleteLayer < "u" && (A.removalMode = A.deleteLayer), L.Util.setOptions(this, A), this.applyIconStyle(), this.isVisible = !0, this._showHideButtons();
  }, applyIconStyle() {
    let A = this.getButtons(), e = { geomanIcons: { drawMarker: "control-icon leaflet-pm-icon-marker", drawPolyline: "control-icon leaflet-pm-icon-polyline", drawRectangle: "control-icon leaflet-pm-icon-rectangle", drawPolygon: "control-icon leaflet-pm-icon-polygon", drawCircle: "control-icon leaflet-pm-icon-circle", drawCircleMarker: "control-icon leaflet-pm-icon-circle-marker", editMode: "control-icon leaflet-pm-icon-edit", dragMode: "control-icon leaflet-pm-icon-drag", cutPolygon: "control-icon leaflet-pm-icon-cut", removalMode: "control-icon leaflet-pm-icon-delete", drawText: "control-icon leaflet-pm-icon-text" } };
    for (let t in A) {
      let i = A[t];
      L.Util.setOptions(i, { className: e.geomanIcons[t] });
    }
  }, removeControls() {
    let A = this.getButtons();
    for (let e in A) A[e].remove();
    this.isVisible = !1;
  }, deleteControl(A) {
    let e = this._btnNameMapping(A);
    this.buttons[e] && (this.buttons[e].remove(), delete this.buttons[e]);
  }, toggleControls(A = this.options) {
    this.isVisible ? this.removeControls() : this.addControls(A);
  }, _addButton(A, e) {
    return this.buttons[A] = e, this.options[A] = !!this.options[A] || !1, this.buttons[A];
  }, triggerClickOnToggledButtons(A) {
    for (let e in this.buttons) {
      let t = this.buttons[e];
      t._button.disableByOtherButtons && t !== A && t.toggled() && t._triggerClick();
    }
  }, toggleButton(A, e, t = !0) {
    A === "editPolygon" && (A = "editMode"), A === "deleteLayer" && (A = "removalMode");
    let i = A;
    return t && this.triggerClickOnToggledButtons(this.buttons[i]), this.buttons[i] ? this.buttons[i].toggle(e) : !1;
  }, _defineButtons() {
    let A = { className: "control-icon leaflet-pm-icon-marker", title: dA("buttonTitles.drawMarkerButton"), jsClass: "Marker", onClick: () => {
    }, afterClick: (I, k) => {
      this.map.pm.Draw[k.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] }, e = { title: dA("buttonTitles.drawPolyButton"), className: "control-icon leaflet-pm-icon-polygon", jsClass: "Polygon", onClick: () => {
    }, afterClick: (I, k) => {
      this.map.pm.Draw[k.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["finish", "removeLastVertex", "cancel"] }, t = { className: "control-icon leaflet-pm-icon-polyline", title: dA("buttonTitles.drawLineButton"), jsClass: "Line", onClick: () => {
    }, afterClick: (I, k) => {
      this.map.pm.Draw[k.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["finish", "removeLastVertex", "cancel"] }, i = { title: dA("buttonTitles.drawCircleButton"), className: "control-icon leaflet-pm-icon-circle", jsClass: "Circle", onClick: () => {
    }, afterClick: (I, k) => {
      this.map.pm.Draw[k.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] }, o = { title: dA("buttonTitles.drawCircleMarkerButton"), className: "control-icon leaflet-pm-icon-circle-marker", jsClass: "CircleMarker", onClick: () => {
    }, afterClick: (I, k) => {
      this.map.pm.Draw[k.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] }, u = { title: dA("buttonTitles.drawRectButton"), className: "control-icon leaflet-pm-icon-rectangle", jsClass: "Rectangle", onClick: () => {
    }, afterClick: (I, k) => {
      this.map.pm.Draw[k.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] }, h = { title: dA("buttonTitles.editButton"), className: "control-icon leaflet-pm-icon-edit", onClick: () => {
    }, afterClick: () => {
      this.map.pm.toggleGlobalEditMode();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finishMode"] }, c = { title: dA("buttonTitles.dragButton"), className: "control-icon leaflet-pm-icon-drag", onClick: () => {
    }, afterClick: () => {
      this.map.pm.toggleGlobalDragMode();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finishMode"] }, p = { title: dA("buttonTitles.cutButton"), className: "control-icon leaflet-pm-icon-cut", jsClass: "Cut", onClick: () => {
    }, afterClick: (I, k) => {
      this.map.pm.Draw[k.button._button.jsClass].toggle({ snappable: !0, cursorMarker: !0, allowSelfIntersection: !1 });
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finish", "removeLastVertex", "cancel"] }, f = { title: dA("buttonTitles.deleteButton"), className: "control-icon leaflet-pm-icon-delete", onClick: () => {
    }, afterClick: () => {
      this.map.pm.toggleGlobalRemovalMode();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finishMode"] }, F = { title: dA("buttonTitles.rotateButton"), className: "control-icon leaflet-pm-icon-rotate", onClick: () => {
    }, afterClick: () => {
      this.map.pm.toggleGlobalRotateMode();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, tool: "edit", actions: ["finishMode"] }, y = { className: "control-icon leaflet-pm-icon-text", title: dA("buttonTitles.drawTextButton"), jsClass: "Text", onClick: () => {
    }, afterClick: (I, k) => {
      this.map.pm.Draw[k.button._button.jsClass].toggle();
    }, doToggle: !0, toggleStatus: !1, disableOtherButtons: !0, position: this.options.position, actions: ["cancel"] };
    this._addButton("drawMarker", new L.Control.PMButton(A)), this._addButton("drawPolyline", new L.Control.PMButton(t)), this._addButton("drawRectangle", new L.Control.PMButton(u)), this._addButton("drawPolygon", new L.Control.PMButton(e)), this._addButton("drawCircle", new L.Control.PMButton(i)), this._addButton("drawCircleMarker", new L.Control.PMButton(o)), this._addButton("drawText", new L.Control.PMButton(y)), this._addButton("editMode", new L.Control.PMButton(h)), this._addButton("dragMode", new L.Control.PMButton(c)), this._addButton("cutPolygon", new L.Control.PMButton(p)), this._addButton("removalMode", new L.Control.PMButton(f)), this._addButton("rotateMode", new L.Control.PMButton(F));
  }, _showHideButtons() {
    if (!this.isVisible) return;
    this.removeControls(), this.isVisible = !0;
    let A = this.getButtons(), e = [];
    this.options.drawControls === !1 && (e = e.concat(Object.keys(A).filter((t) => !A[t]._button.tool))), this.options.editControls === !1 && (e = e.concat(Object.keys(A).filter((t) => A[t]._button.tool === "edit"))), this.options.optionsControls === !1 && (e = e.concat(Object.keys(A).filter((t) => A[t]._button.tool === "options"))), this.options.customControls === !1 && (e = e.concat(Object.keys(A).filter((t) => A[t]._button.tool === "custom")));
    for (let t in A) if (this.options[t] && e.indexOf(t) === -1) {
      let i = A[t]._button.tool;
      i || (i = "draw"), A[t].setPosition(this._getBtnPosition(i)), A[t].addTo(this.map);
    }
  }, _getBtnPosition(A) {
    return this.options.positions && this.options.positions[A] ? this.options.positions[A] : this.options.position;
  }, setBlockPosition(A, e) {
    this.options.positions[A] = e, this._showHideButtons(), this.changeControlOrder();
  }, getBlockPositions() {
    return this.options.positions;
  }, copyDrawControl(A, e) {
    if (e) typeof e != "object" && (e = { name: e });
    else throw new TypeError("Button has no name");
    let t = this._btnNameMapping(A);
    if (!e.name) throw new TypeError("Button has no name");
    if (this.buttons[e.name]) throw new TypeError("Button with this name already exists");
    let i = this.map.pm.Draw.createNewDrawInstance(e.name, t);
    e = { ...this.buttons[t]._button, ...e };
    let o = this.createCustomControl(e);
    return { drawInstance: i, control: o };
  }, createCustomControl(A) {
    if (!A.name) throw new TypeError("Button has no name");
    if (this.buttons[A.name]) throw new TypeError("Button with this name already exists");
    A.onClick || (A.onClick = () => {
    }), A.afterClick || (A.afterClick = () => {
    }), A.toggle !== !1 && (A.toggle = !0), A.block && (A.block = A.block.toLowerCase()), (!A.block || A.block === "draw") && (A.block = ""), A.className ? A.className.indexOf("control-icon") === -1 && (A.className = `control-icon ${A.className}`) : A.className = "control-icon";
    let e = { tool: A.block, className: A.className, title: A.title || "", jsClass: A.name, onClick: A.onClick, afterClick: A.afterClick, doToggle: A.toggle, toggleStatus: !1, disableOtherButtons: A.disableOtherButtons ?? !0, disableByOtherButtons: A.disableByOtherButtons ?? !0, cssToggle: A.toggle, position: this.options.position, actions: A.actions || [], disabled: !!A.disabled };
    this.options[A.name] !== !1 && (this.options[A.name] = !0);
    let t = this._addButton(A.name, new L.Control.PMButton(e));
    return this.changeControlOrder(), t;
  }, controlExists(A) {
    return !!this.getButton(A);
  }, getButton(A) {
    return this.getButtons()[A];
  }, getButtonsInBlock(A) {
    let e = {};
    if (A) for (let t in this.getButtons()) {
      let i = this.getButtons()[t];
      (i._button.tool === A || A === "draw" && !i._button.tool) && (e[t] = i);
    }
    return e;
  }, changeControlOrder(A = []) {
    let e = this._shapeMapping(), t = [];
    A.forEach((u) => {
      e[u] ? t.push(e[u]) : t.push(u);
    });
    let i = this.getButtons(), o = {};
    t.forEach((u) => {
      i[u] && (o[u] = i[u]);
    }), Object.keys(i).filter((u) => !i[u]._button.tool || i[u]._button.tool === "draw").forEach((u) => {
      t.indexOf(u) === -1 && (o[u] = i[u]);
    }), Object.keys(i).filter((u) => i[u]._button.tool === "edit").forEach((u) => {
      t.indexOf(u) === -1 && (o[u] = i[u]);
    }), Object.keys(i).filter((u) => i[u]._button.tool === "options").forEach((u) => {
      t.indexOf(u) === -1 && (o[u] = i[u]);
    }), Object.keys(i).filter((u) => i[u]._button.tool === "custom").forEach((u) => {
      t.indexOf(u) === -1 && (o[u] = i[u]);
    }), Object.keys(i).forEach((u) => {
      t.indexOf(u) === -1 && (o[u] = i[u]);
    }), this.map.pm.Toolbar.buttons = o, this._showHideButtons();
  }, getControlOrder() {
    let A = this.getButtons(), e = [];
    for (let t in A) e.push(t);
    return e;
  }, changeActionsOfControl(A, e) {
    let t = this._btnNameMapping(A);
    if (!t) throw new TypeError("No name passed");
    if (!e) throw new TypeError("No actions passed");
    if (!this.buttons[t]) throw new TypeError("Button with this name not exists");
    this.buttons[t]._button.actions = e, this.changeControlOrder();
  }, setButtonDisabled(A, e) {
    let t = this._btnNameMapping(A);
    e ? this.buttons[t].disable() : this.buttons[t].enable();
  }, _shapeMapping() {
    return { Marker: "drawMarker", Circle: "drawCircle", Polygon: "drawPolygon", Rectangle: "drawRectangle", Polyline: "drawPolyline", Line: "drawPolyline", CircleMarker: "drawCircleMarker", Edit: "editMode", Drag: "dragMode", Cut: "cutPolygon", Removal: "removalMode", Rotate: "rotateMode", Text: "drawText" };
  }, _btnNameMapping(A) {
    let e = this._shapeMapping();
    return e[A] ? e[A] : A;
  } }), dh = fh, Ch = C(Ti()), wh = { _initSnappableMarkers() {
    this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, this._assignEvents(this._markers), this._layer.off("pm:dragstart", this._unsnap, this), this._layer.on("pm:dragstart", this._unsnap, this);
  }, _disableSnapping() {
    this._layer.off("pm:dragstart", this._unsnap, this);
  }, _assignEvents(A) {
    A.forEach((e) => {
      if (Array.isArray(e)) {
        this._assignEvents(e);
        return;
      }
      e.off("drag", this._handleSnapping, this), e.on("drag", this._handleSnapping, this), e.off("dragend", this._cleanupSnapping, this), e.on("dragend", this._cleanupSnapping, this);
    });
  }, _cleanupSnapping(A) {
    if (A) {
      let e = A.target;
      e._snapped = !1;
    }
    delete this._snapList, this.throttledList && (this._map.off("layeradd", this.throttledList, this), this.throttledList = void 0), this._map.off("layerremove", this._handleSnapLayerRemoval, this), this.debugIndicatorLines && this.debugIndicatorLines.forEach((e) => {
      e.remove();
    });
  }, _handleThrottleSnapping() {
    this.throttledList && this._createSnapList();
  }, _handleSnapping(A, e = !1) {
    var f, F, y;
    let t = A.target;
    if (t._snapped = !1, this.throttledList || (this.throttledList = L.Util.throttle(this._handleThrottleSnapping, 100, this)), ((f = A == null ? void 0 : A.originalEvent) == null ? void 0 : f.altKey) || ((y = (F = this._map) == null ? void 0 : F.pm) == null ? void 0 : y.Keyboard.isAltKeyPressed())) return !1;
    let i;
    if (e) {
      if (!this._otherSnapLayers || this._otherSnapLayers.length === 0) return !1;
      i = this._otherSnapLayers;
    } else this._snapList === void 0 && (this._createSnapList(), this._map.off("layeradd", this.throttledList, this), this._map.on("layeradd", this.throttledList, this)), i = this._snapList;
    if (i.length <= 0) return !1;
    let o = this._calcClosestLayer(t.getLatLng(), i);
    if (Object.keys(o).length === 0) return !1;
    let u = o.layer instanceof L.Marker || o.layer instanceof L.CircleMarker || !this.options.snapSegment, h;
    u ? h = o.latlng : h = this._checkPrioritiySnapping(o);
    let c = this.options.snapDistance, p = { marker: t, shape: this._shape, snapLatLng: h, segment: o.segment, layer: this._layer, workingLayer: this._layer, layerInteractedWith: o.layer, distance: o.distance };
    if (this._fireSnapDrag(p.marker, p), this._fireSnapDrag(this._layer, p), o.distance < c) {
      t._orgLatLng = t.getLatLng(), t.setLatLng(h), t._snapped = !0, t._snapInfo = p;
      let I = () => {
        this._snapLatLng = h, this._fireSnap(t, p), this._fireSnap(this._layer, p);
      }, k = this._snapLatLng || {}, G = h || {};
      (k.lat !== G.lat || k.lng !== G.lng) && I();
    } else this._snapLatLng && (this._unsnap(p), t._snapped = !1, t._snapInfo = void 0, this._fireUnsnap(p.marker, p), this._fireUnsnap(this._layer, p));
    return !0;
  }, _createSnapList() {
    let A = [], e = [], t = this._map;
    t.off("layerremove", this._handleSnapLayerRemoval, this), t.on("layerremove", this._handleSnapLayerRemoval, this), t.eachLayer((i) => {
      if ((i instanceof L.Polyline || i instanceof L.Marker || i instanceof L.CircleMarker || i instanceof L.ImageOverlay) && i.options.snapIgnore !== !0) {
        if (i.options.snapIgnore === void 0 && (!L.PM.optIn && i.options.pmIgnore === !0 || L.PM.optIn && i.options.pmIgnore !== !1)) return;
        (i instanceof L.Circle || i instanceof L.CircleMarker) && i.pm && i.pm._hiddenPolyCircle ? A.push(i.pm._hiddenPolyCircle) : i instanceof L.ImageOverlay && (i = L.rectangle(i.getBounds())), A.push(i);
        let o = L.polyline([], { color: "red", pmIgnore: !0 });
        o._pmTempLayer = !0, e.push(o), (i instanceof L.Circle || i instanceof L.CircleMarker) && e.push(o);
      }
    }), A = A.filter((i) => this._layer !== i), A = A.filter((i) => i._latlng || i._latlngs && Oi(i._latlngs)), A = A.filter((i) => !i._pmTempLayer), this._otherSnapLayers ? (this._otherSnapLayers.forEach(() => {
      let i = L.polyline([], { color: "red", pmIgnore: !0 });
      i._pmTempLayer = !0, e.push(i);
    }), this._snapList = A.concat(this._otherSnapLayers)) : this._snapList = A, this.debugIndicatorLines = e;
  }, _handleSnapLayerRemoval({ layer: A }) {
    if (!A._leaflet_id) return;
    let e = this._snapList.findIndex((t) => t._leaflet_id === A._leaflet_id);
    e > -1 && this._snapList.splice(e, 1);
  }, _calcClosestLayer(A, e) {
    return this._calcClosestLayers(A, e, 1)[0];
  }, _calcClosestLayers(A, e, t = 1) {
    let i = [], o = {};
    e.forEach((h, c) => {
      var f;
      if (h._parentCopy && h._parentCopy === this._layer || ((f = h.getLatLngs) == null ? void 0 : f.call(h).flat(5).length) < 2) return;
      let p = this._calcLayerDistances(A, h);
      if (p.distance = Math.floor(p.distance), this.debugIndicatorLines) {
        if (!this.debugIndicatorLines[c]) {
          let F = L.polyline([], { color: "red", pmIgnore: !0 });
          F._pmTempLayer = !0, this.debugIndicatorLines[c] = F;
        }
        this.debugIndicatorLines[c].setLatLngs([A, p.latlng]);
      }
      t === 1 && (o.distance === void 0 || p.distance - 5 <= o.distance) ? (p.distance + 5 < o.distance && (i = []), o = p, o.layer = h, i.push(o)) : t !== 1 && (o = {}, o = p, o.layer = h, i.push(o));
    }), t !== 1 && (i = i.sort((h, c) => h.distance - c.distance)), t === -1 && (t = i.length);
    let u = this._getClosestLayerByPriority(i, t);
    return L.Util.isArray(u) ? u : [u];
  }, _calcLayerDistances(A, e) {
    let t = this._map, i = e instanceof L.Marker || e instanceof L.CircleMarker, o = e instanceof L.Polygon, u = A;
    if (i) {
      let h = e.getLatLng();
      return { latlng: { ...h }, distance: this._getDistance(t, h, u) };
    }
    return this._calcLatLngDistances(u, e.getLatLngs(), t, o);
  }, _calcLatLngDistances(A, e, t, i = !1) {
    let o, u, h, c = (p) => {
      p.forEach((f, F) => {
        if (Array.isArray(f)) {
          c(f);
          return;
        }
        if (this.options.snapSegment) {
          let y = f, I;
          i ? I = F + 1 === p.length ? 0 : F + 1 : I = F + 1 === p.length ? void 0 : F + 1;
          let k = p[I];
          if (k) {
            let G = this._getDistanceToSegment(t, A, y, k);
            (u === void 0 || G < u) && (u = G, h = [y, k]);
          }
        } else {
          let y = this._getDistance(t, A, f);
          (u === void 0 || y < u) && (u = y, o = f);
        }
      });
    };
    return c(e), this.options.snapSegment ? { latlng: { ...this._getClosestPointOnSegment(t, A, h[0], h[1]) }, segment: h, distance: u } : { latlng: o, distance: u };
  }, _getClosestLayerByPriority(A, e = 1) {
    A = A.sort((h, c) => h._leaflet_id - c._leaflet_id);
    let t = ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"], i = this._map.pm.globalOptions.snappingOrder || [], o = 0, u = {};
    return i.concat(t).forEach((h) => {
      u[h] || (o += 1, u[h] = o);
    }), A.sort(lh("instanceofShape", u)), e === 1 ? A[0] || {} : A.slice(0, e);
  }, _checkPrioritiySnapping(A) {
    let e = this._map, t = A.segment[0], i = A.segment[1], o = A.latlng, u = o;
    if (this.options.snapVertex) {
      let h = this._getDistance(e, t, o), c = this._getDistance(e, i, o), p = h < c ? t : i, f = h < c ? h : c;
      if (this.options.snapMiddle) {
        let y = L.PM.Utils.calcMiddleLatLng(e, t, i), I = this._getDistance(e, y, o);
        I < h && I < c && (p = y, f = I);
      }
      let F = this.options.snapDistance;
      f < F && (u = p);
    }
    return { ...u };
  }, _unsnap() {
    delete this._snapLatLng;
  }, _getClosestPointOnSegment(A, e, t, i) {
    let o = A.getMaxZoom();
    o === 1 / 0 && (o = A.getZoom());
    let u = A.project(e, o), h = A.project(t, o), c = A.project(i, o), p = L.LineUtil.closestPointOnSegment(u, h, c);
    return A.unproject(p, o);
  }, _getDistanceToSegment(A, e, t, i) {
    let o = A.latLngToContainerPoint(e), u = A.latLngToContainerPoint(t), h = A.latLngToContainerPoint(i);
    return L.LineUtil.pointToSegmentDistance(o, u, h);
  }, _getDistance(A, e, t) {
    return A.latLngToContainerPoint(e).distanceTo(A.latLngToContainerPoint(t));
  } }, xa = wh, mh = L.Class.extend({ includes: [xa, wr], options: { snappable: !0, snapDistance: 20, snapMiddle: !1, allowSelfIntersection: !0, tooltips: !0, templineStyle: {}, hintlineStyle: { color: "#3388ff", dashArray: "5,5" }, pathOptions: null, cursorMarker: !0, finishOn: null, markerStyle: { draggable: !0, icon: L.icon() }, hideMiddleMarkers: !1, minRadiusCircle: null, maxRadiusCircle: null, minRadiusCircleMarker: null, maxRadiusCircleMarker: null, resizeableCircleMarker: !1, resizeableCircle: !0, markerEditable: !0, continueDrawing: !1, snapSegment: !0, requireSnapToFinish: !1, rectangleAngle: 0, textOptions: { text: null, focusAfterDraw: null, removeIfEmpty: null, className: null }, snapVertex: !0 }, setOptions(A) {
    L.Util.setOptions(this, A), this.setStyle(this.options);
  }, setStyle() {
  }, getOptions() {
    return this.options;
  }, initialize(A) {
    let e = new L.Icon.Default();
    e.options.tooltipAnchor = [0, 0], this.options.markerStyle.icon = e, this._map = A, this.shapes = ["Marker", "CircleMarker", "Line", "Polygon", "Rectangle", "Circle", "Cut", "Text"], this.shapes.forEach((t) => {
      this[t] = new L.PM.Draw[t](this._map);
    }), this.Marker.setOptions({ continueDrawing: !0 }), this.CircleMarker.setOptions({ continueDrawing: !0 });
  }, setPathOptions(A, e = !1) {
    e ? this.options.pathOptions = (0, Ch.default)(this.options.pathOptions, A) : this.options.pathOptions = A;
  }, getShapes() {
    return this.shapes;
  }, getShape() {
    return this._shape;
  }, enable(A, e) {
    if (!A) throw new Error(`Error: Please pass a shape as a parameter. Possible shapes are: ${this.getShapes().join(",")}`);
    this.disable(), this[A].enable(e);
  }, disable() {
    this.shapes.forEach((A) => {
      this[A].disable();
    });
  }, addControls() {
    this.shapes.forEach((A) => {
      this[A].addButton();
    });
  }, getActiveShape() {
    let A;
    return this.shapes.forEach((e) => {
      this[e]._enabled && (A = e);
    }), A;
  }, _setGlobalDrawMode() {
    this._shape === "Cut" ? this._fireGlobalCutModeToggled() : this._fireGlobalDrawModeToggled();
    let A = [];
    this._map.eachLayer((e) => {
      (e instanceof L.Polyline || e instanceof L.Marker || e instanceof L.Circle || e instanceof L.CircleMarker || e instanceof L.ImageOverlay) && (e._pmTempLayer || A.push(e));
    }), this._enabled ? A.forEach((e) => {
      L.PM.Utils.disablePopup(e);
    }) : A.forEach((e) => {
      L.PM.Utils.enablePopup(e);
    });
  }, createNewDrawInstance(A, e) {
    let t = this._getShapeFromBtnName(e);
    if (this[A]) throw new TypeError("Draw Type already exists");
    if (!L.PM.Draw[t]) throw new TypeError(`There is no class L.PM.Draw.${t}`);
    return this[A] = new L.PM.Draw[t](this._map), this[A].toolbarButtonName = A, this[A]._shape = A, this.shapes.push(A), this[e] && this[A].setOptions(this[e].options), this[A].setOptions(this[A].options), this[A];
  }, _getShapeFromBtnName(A) {
    let e = { drawMarker: "Marker", drawCircle: "Circle", drawPolygon: "Polygon", drawPolyline: "Line", drawRectangle: "Rectangle", drawCircleMarker: "CircleMarker", editMode: "Edit", dragMode: "Drag", cutPolygon: "Cut", removalMode: "Removal", rotateMode: "Rotate", drawText: "Text" };
    return e[A] ? e[A] : this[A] ? this[A]._shape : A;
  }, _finishLayer(A) {
    A.pm && (A.pm.setOptions(this.options), A.pm._shape = this._shape, A.pm._map = this._map), this._addDrawnLayerProp(A);
  }, _addDrawnLayerProp(A) {
    A._drawnByGeoman = !0;
  }, _setPane(A, e) {
    e === "layerPane" ? A.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane || "overlayPane" : e === "vertexPane" ? A.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane || "markerPane" : e === "markerPane" && (A.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane || "markerPane");
  }, _isFirstLayer() {
    return (this._map || this._layer._map).pm.getGeomanLayers().length === 0;
  } }), VA = mh;
  VA.Marker = VA.extend({ initialize(A) {
    this._map = A, this._shape = "Marker", this.toolbarButtonName = "drawMarker", this._layerIsDragging = !1;
  }, enable(A) {
    L.Util.setOptions(this, A), this._enabled = !0, this._isTouchDevice = !sh(), this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._isTouchDevice ? (this._createTouchHint(), this._hintMarker = L.marker(this._map.getCenter(), { ...this.options.markerStyle, opacity: 0, interactive: !1 }), this._setPane(this._hintMarker, "markerPane"), this._hintMarker._pmTempLayer = !0) : (this._hintMarker = L.marker(this._map.getCenter(), this.options.markerStyle), this._setPane(this._hintMarker, "markerPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this.options.tooltips && this._hintMarker.bindTooltip(dA("tooltips.placeMarker"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._map.on("mousemove", this._syncHintMarker, this)), this._layer = this._hintMarker, this.options.markerEditable && this._map.eachLayer((e) => {
      this.isRelevantMarker(e) && e.pm.enable();
    }), this._fireDrawStart(), this._setGlobalDrawMode();
  }, disable() {
    this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._createMarker, this), this._isTouchDevice ? (this._removeTouchHint(), this._hintMarker = null) : (this._hintMarker.remove(), this._map.off("mousemove", this._syncHintMarker, this)), this._map.eachLayer((A) => {
      this.isRelevantMarker(A) && A.pm.disable();
    }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, enabled() {
    return this._enabled;
  }, toggle(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, isRelevantMarker(A) {
    return A instanceof L.Marker && A.pm && !A._pmTempLayer && !A.pm._initTextMarker;
  }, _syncHintMarker(A) {
    if (this._hintMarker.setLatLng(A.latlng), this.options.snappable) {
      let e = A;
      e.target = this._hintMarker, this._handleSnapping(e);
    }
    this._fireChange(this._hintMarker.getLatLng(), "Draw");
  }, _createMarker(A) {
    if (!A.latlng || this._layerIsDragging || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    this._hintMarker._snapped || this._hintMarker.setLatLng(A.latlng);
    let e = this._hintMarker.getLatLng(), t = new L.Marker(e, this.options.markerStyle);
    this._setPane(t, "markerPane"), this._finishLayer(t), t.pm || (t.options.draggable = !1), t.addTo(this._map.pm._getContainingLayer()), t.pm && this.options.markerEditable ? t.pm.enable() : t.dragging && t.dragging.disable(), this._fireCreate(t), this._cleanupSnapping(), this.options.continueDrawing || this.disable();
  }, setStyle() {
    var A, e;
    (A = this.options.markerStyle) != null && A.icon && ((e = this._hintMarker) == null || e.setIcon(this.options.markerStyle.icon));
  }, _createTouchHint() {
    this.options.tooltips && (this._touchHint = L.DomUtil.create("div", "leaflet-pm-touch-hint"), this._touchHint.textContent = dA("tooltips.placeMarkerTouch"), this._map.getContainer().appendChild(this._touchHint));
  }, _removeTouchHint() {
    this._touchHint && this._touchHint.parentNode && (this._touchHint.parentNode.removeChild(this._touchHint), this._touchHint = null);
  } });
  var ae = 63710088e-1, yh = { centimeters: ae * 100, centimetres: ae * 100, degrees: 360 / (2 * Math.PI), feet: ae * 3.28084, inches: ae * 39.37, kilometers: ae / 1e3, kilometres: ae / 1e3, meters: ae, metres: ae, miles: ae / 1609.344, millimeters: ae * 1e3, millimetres: ae * 1e3, nauticalmiles: ae / 1852, radians: 1, yards: ae * 1.0936 };
  function Ve(A, e, t = {}) {
    let i = { type: "Feature" };
    return (t.id === 0 || t.id) && (i.id = t.id), t.bbox && (i.bbox = t.bbox), i.properties = e || {}, i.geometry = A, i;
  }
  function ft(A, e, t = {}) {
    if (!A) throw new Error("coordinates is required");
    if (!Array.isArray(A)) throw new Error("coordinates must be an Array");
    if (A.length < 2) throw new Error("coordinates must be at least 2 numbers long");
    if (!Ia(A[0]) || !Ia(A[1])) throw new Error("coordinates must contain numbers");
    return Ve({ type: "Point", coordinates: A }, e, t);
  }
  function _r(A, e, t = {}) {
    if (A.length < 2) throw new Error("coordinates must be an array of two or more positions");
    return Ve({ type: "LineString", coordinates: A }, e, t);
  }
  function we(A, e = {}) {
    let t = { type: "FeatureCollection" };
    return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = A, t;
  }
  function _h(A, e = "kilometers") {
    let t = yh[e];
    if (!t) throw new Error(e + " units is invalid");
    return A * t;
  }
  function Ma(A) {
    return A % (2 * Math.PI) * 180 / Math.PI;
  }
  function dt(A) {
    return A % 360 * Math.PI / 180;
  }
  function Ia(A) {
    return !isNaN(A) && A !== null && !Array.isArray(A);
  }
  function Qh(A) {
    return A !== null && typeof A == "object" && !Array.isArray(A);
  }
  function Fh(A) {
    let e, t, i = { type: "FeatureCollection", features: [] };
    if (A.type === "Feature" ? t = A.geometry : t = A, t.type === "LineString") e = [t.coordinates];
    else if (t.type === "MultiLineString") e = t.coordinates;
    else if (t.type === "MultiPolygon") e = [].concat(...t.coordinates);
    else if (t.type === "Polygon") e = t.coordinates;
    else throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");
    return e.forEach((o) => {
      e.forEach((u) => {
        for (let h = 0; h < o.length - 1; h++) for (let c = h; c < u.length - 1; c++) {
          if (o === u && (Math.abs(h - c) === 1 || h === 0 && c === o.length - 2 && o[h][0] === o[o.length - 1][0] && o[h][1] === o[o.length - 1][1])) continue;
          let p = Eh(o[h][0], o[h][1], o[h + 1][0], o[h + 1][1], u[c][0], u[c][1], u[c + 1][0], u[c + 1][1]);
          p && i.features.push(ft([p[0], p[1]]));
        }
      });
    }), i;
  }
  function Eh(A, e, t, i, o, u, h, c) {
    let p, f, F, y, I, k = { x: null, y: null, onLine1: !1, onLine2: !1 };
    return p = (c - u) * (t - A) - (h - o) * (i - e), p === 0 ? k.x !== null && k.y !== null ? k : !1 : (f = e - u, F = A - o, y = (h - o) * f - (c - u) * F, I = (t - A) * f - (i - e) * F, f = y / p, F = I / p, k.x = A + f * (t - A), k.y = e + f * (i - e), f >= 0 && f <= 1 && (k.onLine1 = !0), F >= 0 && F <= 1 && (k.onLine2 = !0), k.onLine1 && k.onLine2 ? [k.x, k.y] : !1);
  }
  var Qr = Fh;
  VA.Line = VA.extend({ initialize(A) {
    this._map = A, this._shape = "Line", this.toolbarButtonName = "drawPolyline", this._doesSelfIntersect = !1;
  }, enable(A) {
    L.Util.setOptions(this, A), this._enabled = !0, this._markers = [], this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.polyline([], { ...this.options.templineStyle, pmIgnore: !1 }), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._layerGroup.addLayer(this._layer), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._layerGroup.addLayer(this._hintline), this._hintMarker = L.marker(this._map.getCenter(), { interactive: !1, zIndexOffset: 100, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(dA("tooltips.firstVertex"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._createVertex, this), this.options.finishOn && this.options.finishOn !== "snap" && this._map.on(this.options.finishOn, this._finishShape, this), this.options.finishOn === "dblclick" && (this.tempMapDoubleClickZoomState = this._map.doubleClickZoom._enabled, this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.disable()), this._map.on("mousemove", this._syncHintMarker, this), this._hintMarker.on("move", this._syncHintLine, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = [], this.isRed = !1, this._fireDrawStart(), this._setGlobalDrawMode();
  }, disable() {
    this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._createVertex, this), this._map.off("mousemove", this._syncHintMarker, this), this.options.finishOn && this.options.finishOn !== "snap" && this._map.off(this.options.finishOn, this._finishShape, this), this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.enable(), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, enabled() {
    return this._enabled;
  }, toggle(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, _syncHintLine() {
    let A = this._layer.getLatLngs();
    if (A.length > 0) {
      let e = A[A.length - 1];
      this._hintline.setLatLngs([e, this._hintMarker.getLatLng()]);
    }
  }, _syncHintMarker(A) {
    if (this._hintMarker.setLatLng(A.latlng), this.options.snappable) {
      let t = A;
      t.target = this._hintMarker, this._handleSnapping(t);
    } else if (this._otherSnapLayers && this._otherSnapLayers.length > 0) {
      let t = A;
      t.target = this._hintMarker, this._handleSnapping(t, !0);
    }
    this.options.allowSelfIntersection || this._handleSelfIntersection(!0, this._hintMarker.getLatLng());
    let e = this._layer._defaultShape().slice();
    e.push(this._hintMarker.getLatLng()), this._change(e);
  }, hasSelfIntersection() {
    return Qr(this._layer.toGeoJSON(15)).features.length > 0;
  }, _handleSelfIntersection(A, e) {
    let t = L.polyline(this._layer.getLatLngs());
    A && (e || (e = this._hintMarker.getLatLng()), t.addLatLng(e));
    let i = Qr(t.toGeoJSON(15));
    this._doesSelfIntersect = i.features.length > 0, this._doesSelfIntersect ? this.isRed || (this.isRed = !0, this._hintline.setStyle({ color: "#f00000ff" }), this._fireIntersect(i, this._map, "Draw")) : this._hintline.isEmpty() || (this.isRed = !1, this._hintline.setStyle(this.options.hintlineStyle));
  }, _createVertex(A) {
    if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, A.latlng), this._doesSelfIntersect)) return;
    this._hintMarker._snapped || this._hintMarker.setLatLng(A.latlng);
    let e = this._hintMarker.getLatLng(), t = this._layer.getLatLngs(), i = t[t.length - 1];
    if (e.equals(t[0]) || t.length > 0 && e.equals(i)) {
      this._finishShape();
      return;
    }
    this._layer._latlngInfo = this._layer._latlngInfo || [], this._layer._latlngInfo.push({ latlng: e, snapInfo: this._hintMarker._snapInfo }), this._layer.addLatLng(e);
    let o = this._createMarker(e);
    this._setTooltipText(), this._setHintLineAfterNewVertex(e), this._fireVertexAdded(o, void 0, e, "Draw"), this._change(this._layer.getLatLngs()), this.options.finishOn === "snap" && this._hintMarker._snapped && this._finishShape(A);
  }, _setHintLineAfterNewVertex(A) {
    this._hintline.setLatLngs([A, A]);
  }, _removeLastVertex() {
    let A = this._markers;
    if (A.length <= 1) {
      this.disable();
      return;
    }
    let e = this._layer.getLatLngs(), t = A[A.length - 1], { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(A, t);
    A.pop(), this._layerGroup.removeLayer(t);
    let o = A[A.length - 1], u = e.indexOf(o.getLatLng());
    e = e.slice(0, u + 1), this._layer.setLatLngs(e), this._layer._latlngInfo.pop(), this._syncHintLine(), this._setTooltipText(), this._fireVertexRemoved(t, i, "Draw"), this._change(this._layer.getLatLngs());
  }, _finishShape() {
    if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!1), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    let A = this._layer.getLatLngs();
    if (A.length <= 1) return;
    let e = L.polyline(A, this.options.pathOptions);
    this._setPane(e, "layerPane"), this._finishLayer(e), e.addTo(this._map.pm._getContainingLayer()), this._fireCreate(e), this.options.snappable && this._cleanupSnapping();
    let t = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(t));
  }, _createMarker(A) {
    let e = new L.Marker(A, { draggable: !1, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(e, "vertexPane"), e._pmTempLayer = !0, this._layerGroup.addLayer(e), this._markers.push(e), e.on("click", this._finishShape, this), e;
  }, _setTooltipText() {
    let { length: A } = this._layer.getLatLngs().flat(), e = "";
    A <= 1 ? e = dA("tooltips.continueLine") : e = dA("tooltips.finishLine"), this._hintMarker.setTooltipContent(e);
  }, _change(A) {
    this._fireChange(A, "Draw");
  }, setStyle() {
    var A, e;
    (A = this._layer) == null || A.setStyle(this.options.templineStyle), (e = this._hintline) == null || e.setStyle(this.options.hintlineStyle);
  } }), VA.Polygon = VA.Line.extend({ initialize(A) {
    this._map = A, this._shape = "Polygon", this.toolbarButtonName = "drawPolygon";
  }, enable(A) {
    L.PM.Draw.Line.prototype.enable.call(this, A), this._layer.pm._shape = "Polygon";
  }, _createMarker(A) {
    let e = new L.Marker(A, { draggable: !1, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(e, "vertexPane"), e._pmTempLayer = !0, this._layerGroup.addLayer(e), this._markers.push(e), this._layer.getLatLngs().flat().length === 1 ? (e.on("click", this._finishShape, this), this._tempSnapLayerIndex = this._otherSnapLayers.push(e) - 1, this.options.snappable && this._cleanupSnapping()) : e.on("click", () => 1), e;
  }, _setTooltipText() {
    let { length: A } = this._layer.getLatLngs().flat(), e = "";
    A <= 2 ? e = dA("tooltips.continueLine") : e = dA("tooltips.finishPoly"), this._hintMarker.setTooltipContent(e);
  }, _finishShape() {
    if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    let A = this._layer.getLatLngs();
    if (A.length <= 2) return;
    let e = L.polygon(A, this.options.pathOptions);
    this._setPane(e, "layerPane"), this._finishLayer(e), e.addTo(this._map.pm._getContainingLayer()), this._fireCreate(e), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex;
    let t = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(t));
  } }), VA.Rectangle = VA.extend({ initialize(A) {
    this._map = A, this._shape = "Rectangle", this.toolbarButtonName = "drawRectangle";
  }, enable(A) {
    if (L.Util.setOptions(this, A), this._enabled = !0, this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.rectangle([[0, 0], [0, 0]], this.options.pathOptions), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._startMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon rect-start-marker" }), draggable: !1, zIndexOffset: -100, opacity: this.options.cursorMarker ? 1 : 0 }), this._setPane(this._startMarker, "vertexPane"), this._startMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._startMarker), this._hintMarker = L.marker(this._map.getCenter(), { zIndexOffset: 150, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(dA("tooltips.firstVertex"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this.options.cursorMarker) {
      this._styleMarkers = [];
      for (let e = 0; e < 2; e += 1) {
        let t = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon rect-style-marker" }), draggable: !1, zIndexOffset: 100 });
        this._setPane(t, "vertexPane"), t._pmTempLayer = !0, this._layerGroup.addLayer(t), this._styleMarkers.push(t);
      }
    }
    this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._placeStartingMarkers, this), this._map.on("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode();
  }, disable() {
    this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._finishShape, this), this._map.off("click", this._placeStartingMarkers, this), this._map.off("mousemove", this._syncHintMarker, this), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, enabled() {
    return this._enabled;
  }, toggle(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, _placeStartingMarkers(A) {
    this._hintMarker._snapped || this._hintMarker.setLatLng(A.latlng);
    let e = this._hintMarker.getLatLng();
    L.DomUtil.addClass(this._startMarker._icon, "visible"), this._startMarker.setLatLng(e), this.options.cursorMarker && this._styleMarkers && this._styleMarkers.forEach((t) => {
      L.DomUtil.addClass(t._icon, "visible"), t.setLatLng(e);
    }), this._map.off("click", this._placeStartingMarkers, this), this._map.on("click", this._finishShape, this), this._hintMarker.setTooltipContent(dA("tooltips.finishRect")), this._setRectangleOrigin();
  }, _setRectangleOrigin() {
    let A = this._startMarker.getLatLng();
    A && (this._layerGroup.addLayer(this._layer), this._layer.setLatLngs([A, A]), this._hintMarker.on("move", this._syncRectangleSize, this));
  }, _syncHintMarker(A) {
    if (this._hintMarker.setLatLng(A.latlng), this.options.snappable) {
      let t = A;
      t.target = this._hintMarker, this._handleSnapping(t);
    }
    let e = this._layerGroup && this._layerGroup.hasLayer(this._layer) ? this._layer.getLatLngs() : [this._hintMarker.getLatLng()];
    this._fireChange(e, "Draw");
  }, _syncRectangleSize() {
    let A = ba(this._startMarker.getLatLng(), this._map), e = ba(this._hintMarker.getLatLng(), this._map), t = L.PM.Utils._getRotatedRectangle(A, e, this.options.rectangleAngle || 0, this._map);
    if (this._layer.setLatLngs(t), this.options.cursorMarker && this._styleMarkers) {
      let i = [];
      t.forEach((o) => {
        !o.equals(A, 1e-8) && !o.equals(e, 1e-8) && i.push(o);
      }), i.forEach((o, u) => {
        try {
          this._styleMarkers[u].setLatLng(o);
        } catch {
        }
      });
    }
  }, _findCorners() {
    let A = this._layer.getLatLngs()[0];
    return L.PM.Utils._getRotatedRectangle(A[0], A[2], this.options.rectangleAngle || 0, this._map);
  }, _finishShape(A) {
    A != null && A.latlng && !this._hintMarker._snapped && this._hintMarker.setLatLng(A.latlng);
    let e = this._hintMarker.getLatLng(), t = this._startMarker.getLatLng();
    if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer() || t.equals(e)) return;
    let i = L.rectangle([t, e], this.options.pathOptions);
    if (this.options.rectangleAngle) {
      let u = L.PM.Utils._getRotatedRectangle(t, e, this.options.rectangleAngle || 0, this._map);
      i.setLatLngs(u), i.pm && i.pm._setAngle(this.options.rectangleAngle || 0);
    }
    this._setPane(i, "layerPane"), this._finishLayer(i), i.addTo(this._map.pm._getContainingLayer()), this._fireCreate(i);
    let o = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(o));
  }, setStyle() {
    var A;
    (A = this._layer) == null || A.setStyle(this.options.pathOptions);
  } }), VA.CircleMarker = VA.extend({ initialize(A) {
    this._map = A, this._shape = "CircleMarker", this.toolbarButtonName = "drawCircleMarker", this._layerIsDragging = !1, this._BaseCircleClass = L.CircleMarker, this._minRadiusOption = "minRadiusCircleMarker", this._maxRadiusOption = "maxRadiusCircleMarker", this._editableOption = "resizeableCircleMarker", this._defaultRadius = 10;
  }, enable(A) {
    if (L.Util.setOptions(this, A), this.options.editable && (this.options.resizeableCircleMarker = this.options.editable, delete this.options.editable), this._enabled = !0, this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._map.getContainer().classList.add("geoman-draw-cursor"), this.options[this._editableOption]) {
      let e = {};
      L.extend(e, this.options.templineStyle), e.radius = 0, this._layerGroup = new L.FeatureGroup(), this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = new this._BaseCircleClass(this._map.getCenter(), e), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._centerMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "marker-icon" }), draggable: !1, zIndexOffset: 100 }), this._setPane(this._centerMarker, "vertexPane"), this._centerMarker._pmTempLayer = !0, this._hintMarker = L.marker(this._map.getCenter(), { zIndexOffset: 110, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(dA("tooltips.startCircle"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._layerGroup.addLayer(this._hintline), this._map.on("click", this._placeCenterMarker, this);
    } else this._map.on("click", this._createMarker, this), this._hintMarker = new this._BaseCircleClass(this._map.getCenter(), { radius: this._defaultRadius, ...this.options.templineStyle }), this._setPane(this._hintMarker, "layerPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this._layer = this._hintMarker, this.options.tooltips && this._hintMarker.bindTooltip(dA("tooltips.placeCircleMarker"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip();
    this._map.on("mousemove", this._syncHintMarker, this), this._extendingEnable(), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode();
  }, _extendingEnable() {
    !this.options[this._editableOption] && this.options.markerEditable && this._map.eachLayer((A) => {
      this.isRelevantMarker(A) && A.pm.enable();
    }), this._layer.bringToBack();
  }, disable() {
    this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this.options[this._editableOption] ? (this._map.off("click", this._finishShape, this), this._map.off("click", this._placeCenterMarker, this), this._map.removeLayer(this._layerGroup)) : (this._map.off("click", this._createMarker, this), this._extendingDisable(), this._hintMarker.remove()), this._map.off("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, _extendingDisable() {
    this._map.eachLayer((A) => {
      this.isRelevantMarker(A) && A.pm.disable();
    });
  }, enabled() {
    return this._enabled;
  }, toggle(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, _placeCenterMarker(A) {
    this._hintMarker._snapped || this._hintMarker.setLatLng(A.latlng), this._layerGroup.addLayer(this._layer), this._layerGroup.addLayer(this._centerMarker);
    let e = this._hintMarker.getLatLng();
    this._centerMarker.setLatLng(e), this._map.off("click", this._placeCenterMarker, this), this._map.on("click", this._finishShape, this), this._placeCircleCenter();
  }, _placeCircleCenter() {
    let A = this._centerMarker.getLatLng();
    A && (this._layer.setLatLng(A), this._hintMarker.on("move", this._syncHintLine, this), this._hintMarker.on("move", this._syncCircleRadius, this), this._hintMarker.setTooltipContent(dA("tooltips.finishCircle")), this._fireCenterPlaced(), this._fireChange(this._layer.getLatLng(), "Draw"));
  }, _syncHintLine() {
    let A = this._centerMarker.getLatLng(), e = this._getNewDestinationOfHintMarker();
    this._hintline.setLatLngs([A, e]);
  }, _syncCircleRadius() {
    let A = this._centerMarker.getLatLng(), e = this._hintMarker.getLatLng(), t = this._distanceCalculation(A, e);
    this.options[this._minRadiusOption] && t < this.options[this._minRadiusOption] ? this._layer.setRadius(this.options[this._minRadiusOption]) : this.options[this._maxRadiusOption] && t > this.options[this._maxRadiusOption] ? this._layer.setRadius(this.options[this._maxRadiusOption]) : this._layer.setRadius(t);
  }, _syncHintMarker(A) {
    if (this._hintMarker.setLatLng(A.latlng), this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()), this.options.snappable) {
      let t = A;
      t.target = this._hintMarker, this._handleSnapping(t);
    }
    this._handleHintMarkerSnapping();
    let e = this._layerGroup && this._layerGroup.hasLayer(this._centerMarker) ? this._centerMarker.getLatLng() : this._hintMarker.getLatLng();
    this._fireChange(e, "Draw");
  }, isRelevantMarker(A) {
    return A instanceof L.CircleMarker && !(A instanceof L.Circle) && A.pm && !A._pmTempLayer;
  }, _createMarker(A) {
    if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer() || !A.latlng || this._layerIsDragging) return;
    this._hintMarker._snapped || this._hintMarker.setLatLng(A.latlng);
    let e = this._hintMarker.getLatLng(), t = new this._BaseCircleClass(e, { radius: this._defaultRadius, ...this.options.pathOptions });
    this._setPane(t, "layerPane"), this._finishLayer(t), t.addTo(this._map.pm._getContainingLayer()), this._extendingCreateMarker(t), this._fireCreate(t), this._cleanupSnapping(), this.options.continueDrawing || this.disable();
  }, _extendingCreateMarker(A) {
    A.pm && this.options.markerEditable && A.pm.enable();
  }, _finishShape(A) {
    if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    A != null && A.latlng && !this._hintMarker._snapped && this._hintMarker.setLatLng(A.latlng);
    let e = this._centerMarker.getLatLng(), t = this._defaultRadius;
    if (this.options[this._editableOption]) {
      let h = this._hintMarker.getLatLng();
      t = this._distanceCalculation(e, h), this.options[this._minRadiusOption] && t < this.options[this._minRadiusOption] ? t = this.options[this._minRadiusOption] : this.options[this._maxRadiusOption] && t > this.options[this._maxRadiusOption] && (t = this.options[this._maxRadiusOption]);
    }
    let i = { ...this.options.pathOptions, radius: t }, o = new this._BaseCircleClass(e, i);
    this._setPane(o, "layerPane"), this._finishLayer(o), o.addTo(this._map.pm._getContainingLayer()), o.pm && o.pm._updateHiddenPolyCircle(), this._fireCreate(o);
    let u = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(u));
  }, _getNewDestinationOfHintMarker() {
    let A = this._hintMarker.getLatLng();
    if (this.options[this._editableOption]) {
      if (!this._layerGroup.hasLayer(this._centerMarker)) return A;
      let e = this._centerMarker.getLatLng(), t = this._distanceCalculation(e, A);
      this.options[this._minRadiusOption] && t < this.options[this._minRadiusOption] ? A = yr(this._map, e, A, this._getMinDistanceInMeter()) : this.options[this._maxRadiusOption] && t > this.options[this._maxRadiusOption] && (A = yr(this._map, e, A, this._getMaxDistanceInMeter()));
    }
    return A;
  }, _getMinDistanceInMeter() {
    return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._minRadiusOption], this._map, this._centerMarker.getLatLng());
  }, _getMaxDistanceInMeter() {
    return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._maxRadiusOption], this._map, this._centerMarker.getLatLng());
  }, _handleHintMarkerSnapping() {
    if (this.options[this._editableOption]) {
      if (this._hintMarker._snapped) {
        let A = this._centerMarker.getLatLng(), e = this._hintMarker.getLatLng(), t = this._distanceCalculation(A, e);
        this._layerGroup.hasLayer(this._centerMarker) && (this.options[this._minRadiusOption] && t < this.options[this._minRadiusOption] ? this._hintMarker.setLatLng(this._hintMarker._orgLatLng) : this.options[this._maxRadiusOption] && t > this.options[this._maxRadiusOption] && this._hintMarker.setLatLng(this._hintMarker._orgLatLng));
      }
      this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker());
    }
  }, setStyle() {
    var e, t;
    let A = {};
    L.extend(A, this.options.templineStyle), this.options[this._editableOption] && (A.radius = 0), (e = this._layer) == null || e.setStyle(A), (t = this._hintline) == null || t.setStyle(this.options.hintlineStyle);
  }, _distanceCalculation(A, e) {
    return this._map.project(A).distanceTo(this._map.project(e));
  } }), VA.Circle = VA.CircleMarker.extend({ initialize(A) {
    this._map = A, this._shape = "Circle", this.toolbarButtonName = "drawCircle", this._BaseCircleClass = L.Circle, this._minRadiusOption = "minRadiusCircle", this._maxRadiusOption = "maxRadiusCircle", this._editableOption = "resizeableCircle", this._defaultRadius = 100;
  }, _extendingEnable() {
  }, _extendingDisable() {
  }, _extendingCreateMarker() {
  }, isRelevantMarker() {
  }, _getMinDistanceInMeter() {
    return this.options[this._minRadiusOption];
  }, _getMaxDistanceInMeter() {
    return this.options[this._maxRadiusOption];
  }, _distanceCalculation(A, e) {
    return this._map.distance(A, e);
  } });
  var ka = class {
    constructor(A = [], e = vh) {
      if (this.data = A, this.length = this.data.length, this.compare = e, this.length > 0) for (let t = (this.length >> 1) - 1; t >= 0; t--) this._down(t);
    }
    push(A) {
      this.data.push(A), this.length++, this._up(this.length - 1);
    }
    pop() {
      if (this.length === 0) return;
      let A = this.data[0], e = this.data.pop();
      return this.length--, this.length > 0 && (this.data[0] = e, this._down(0)), A;
    }
    peek() {
      return this.data[0];
    }
    _up(A) {
      let { data: e, compare: t } = this, i = e[A];
      for (; A > 0; ) {
        let o = A - 1 >> 1, u = e[o];
        if (t(i, u) >= 0) break;
        e[A] = u, A = o;
      }
      e[A] = i;
    }
    _down(A) {
      let { data: e, compare: t } = this, i = this.length >> 1, o = e[A];
      for (; A < i; ) {
        let u = (A << 1) + 1, h = e[u], c = u + 1;
        if (c < this.length && t(e[c], h) < 0 && (u = c, h = e[c]), t(h, o) >= 0) break;
        e[A] = h, A = u;
      }
      e[A] = o;
    }
  };
  function vh(A, e) {
    return A < e ? -1 : A > e ? 1 : 0;
  }
  function Da(A, e) {
    return A.p.x > e.p.x ? 1 : A.p.x < e.p.x ? -1 : A.p.y !== e.p.y ? A.p.y > e.p.y ? 1 : -1 : 1;
  }
  function Uh(A, e) {
    return A.rightSweepEvent.p.x > e.rightSweepEvent.p.x ? 1 : A.rightSweepEvent.p.x < e.rightSweepEvent.p.x ? -1 : A.rightSweepEvent.p.y !== e.rightSweepEvent.p.y ? A.rightSweepEvent.p.y < e.rightSweepEvent.p.y ? 1 : -1 : 1;
  }
  var Ha = class {
    constructor(A, e, t, i) {
      this.p = { x: A[0], y: A[1] }, this.featureId = e, this.ringId = t, this.eventId = i, this.otherEvent = null, this.isLeftEndpoint = null;
    }
    isSamePoint(A) {
      return this.p.x === A.p.x && this.p.y === A.p.y;
    }
  };
  function Lh(A, e) {
    if (A.type === "FeatureCollection") {
      let t = A.features;
      for (let i = 0; i < t.length; i++) Sa(t[i], e);
    } else Sa(A, e);
  }
  var Fr = 0, Er = 0, vr = 0;
  function Sa(A, e) {
    let t = A.type === "Feature" ? A.geometry : A, i = t.coordinates;
    (t.type === "Polygon" || t.type === "MultiLineString") && (i = [i]), t.type === "LineString" && (i = [[i]]);
    for (let o = 0; o < i.length; o++) for (let u = 0; u < i[o].length; u++) {
      let h = i[o][u][0], c = null;
      Er = Er + 1;
      for (let p = 0; p < i[o][u].length - 1; p++) {
        c = i[o][u][p + 1];
        let f = new Ha(h, Fr, Er, vr), F = new Ha(c, Fr, Er, vr + 1);
        f.otherEvent = F, F.otherEvent = f, Da(f, F) > 0 ? (F.isLeftEndpoint = !0, f.isLeftEndpoint = !1) : (f.isLeftEndpoint = !0, F.isLeftEndpoint = !1), e.push(f), e.push(F), h = c, vr = vr + 1;
      }
    }
    Fr = Fr + 1;
  }
  var bh = class {
    constructor(A) {
      this.leftSweepEvent = A, this.rightSweepEvent = A.otherEvent;
    }
  };
  function xh(A, e) {
    if (A === null || e === null || A.leftSweepEvent.ringId === e.leftSweepEvent.ringId && (A.rightSweepEvent.isSamePoint(e.leftSweepEvent) || A.rightSweepEvent.isSamePoint(e.leftSweepEvent) || A.rightSweepEvent.isSamePoint(e.rightSweepEvent) || A.leftSweepEvent.isSamePoint(e.leftSweepEvent) || A.leftSweepEvent.isSamePoint(e.rightSweepEvent))) return !1;
    let t = A.leftSweepEvent.p.x, i = A.leftSweepEvent.p.y, o = A.rightSweepEvent.p.x, u = A.rightSweepEvent.p.y, h = e.leftSweepEvent.p.x, c = e.leftSweepEvent.p.y, p = e.rightSweepEvent.p.x, f = e.rightSweepEvent.p.y, F = (f - c) * (o - t) - (p - h) * (u - i), y = (p - h) * (i - c) - (f - c) * (t - h), I = (o - t) * (i - c) - (u - i) * (t - h);
    if (F === 0) return !1;
    let k = y / F, G = I / F;
    if (k >= 0 && k <= 1 && G >= 0 && G <= 1) {
      let J = t + k * (o - t), eA = i + k * (u - i);
      return [J, eA];
    }
    return !1;
  }
  function Mh(A, e) {
    e = e || !1;
    let t = [], i = new ka([], Uh);
    for (; A.length; ) {
      let o = A.pop();
      if (o.isLeftEndpoint) {
        let u = new bh(o);
        for (let h = 0; h < i.data.length; h++) {
          let c = i.data[h];
          if (e && c.leftSweepEvent.featureId === o.featureId) continue;
          let p = xh(u, c);
          p !== !1 && t.push(p);
        }
        i.push(u);
      } else o.isLeftEndpoint === !1 && i.pop();
    }
    return t;
  }
  function Ih(A, e) {
    let t = new ka([], Da);
    return Lh(A, t), Mh(t, e);
  }
  var kh = Ih, Dh = kh;
  function Ta(A, e, t = {}) {
    let { removeDuplicates: i = !0, ignoreSelfIntersections: o = !0 } = t, u = [];
    A.type === "FeatureCollection" ? u = u.concat(A.features) : A.type === "Feature" ? u.push(A) : (A.type === "LineString" || A.type === "Polygon" || A.type === "MultiLineString" || A.type === "MultiPolygon") && u.push(Ve(A)), e.type === "FeatureCollection" ? u = u.concat(e.features) : e.type === "Feature" ? u.push(e) : (e.type === "LineString" || e.type === "Polygon" || e.type === "MultiLineString" || e.type === "MultiPolygon") && u.push(Ve(e));
    let h = Dh(we(u), o), c = [];
    if (i) {
      let p = {};
      h.forEach((f) => {
        let F = f.join(",");
        p[F] || (p[F] = !0, c.push(f));
      });
    } else c = h;
    return we(c.map((p) => ft(p)));
  }
  var St = Ta, Hh = C(ml(), 1);
  function Pi(A, e, t) {
    if (A !== null) for (var i, o, u, h, c, p, f, F = 0, y = 0, I, k = A.type, G = k === "FeatureCollection", J = k === "Feature", eA = G ? A.features.length : 1, rA = 0; rA < eA; rA++) {
      f = G ? A.features[rA].geometry : J ? A.geometry : A, I = f ? f.type === "GeometryCollection" : !1, c = I ? f.geometries.length : 1;
      for (var Q = 0; Q < c; Q++) {
        var S = 0, P = 0;
        if (h = I ? f.geometries[Q] : f, h !== null) {
          p = h.coordinates;
          var Z = h.type;
          switch (F = 0, Z) {
            case null:
              break;
            case "Point":
              if (e(p, y, rA, S, P) === !1) return !1;
              y++, S++;
              break;
            case "LineString":
            case "MultiPoint":
              for (i = 0; i < p.length; i++) {
                if (e(p[i], y, rA, S, P) === !1) return !1;
                y++, Z === "MultiPoint" && S++;
              }
              Z === "LineString" && S++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (i = 0; i < p.length; i++) {
                for (o = 0; o < p[i].length - F; o++) {
                  if (e(p[i][o], y, rA, S, P) === !1) return !1;
                  y++;
                }
                Z === "MultiLineString" && S++, Z === "Polygon" && P++;
              }
              Z === "Polygon" && S++;
              break;
            case "MultiPolygon":
              for (i = 0; i < p.length; i++) {
                for (P = 0, o = 0; o < p[i].length; o++) {
                  for (u = 0; u < p[i][o].length - F; u++) {
                    if (e(p[i][o][u], y, rA, S, P) === !1) return !1;
                    y++;
                  }
                  P++;
                }
                S++;
              }
              break;
            case "GeometryCollection":
              for (i = 0; i < h.geometries.length; i++) if (Pi(h.geometries[i], e) === !1) return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
  }
  function Ur(A, e) {
    if (A.type === "Feature") e(A, 0);
    else if (A.type === "FeatureCollection") for (var t = 0; t < A.features.length && e(A.features[t], t) !== !1; t++) ;
  }
  function Sh(A, e, t) {
    var i = t;
    return Ur(A, function(o, u) {
      u === 0 && t === void 0 ? i = o : i = e(i, o, u);
    }), i;
  }
  function Th(A, e) {
    var t, i, o, u, h, c, p, f, F, y, I = 0, k = A.type === "FeatureCollection", G = A.type === "Feature", J = k ? A.features.length : 1;
    for (t = 0; t < J; t++) {
      for (c = k ? A.features[t].geometry : G ? A.geometry : A, f = k ? A.features[t].properties : G ? A.properties : {}, F = k ? A.features[t].bbox : G ? A.bbox : void 0, y = k ? A.features[t].id : G ? A.id : void 0, p = c ? c.type === "GeometryCollection" : !1, h = p ? c.geometries.length : 1, o = 0; o < h; o++) {
        if (u = p ? c.geometries[o] : c, u === null) {
          if (e(null, I, f, F, y) === !1) return !1;
          continue;
        }
        switch (u.type) {
          case "Point":
          case "LineString":
          case "MultiPoint":
          case "Polygon":
          case "MultiLineString":
          case "MultiPolygon": {
            if (e(u, I, f, F, y) === !1) return !1;
            break;
          }
          case "GeometryCollection": {
            for (i = 0; i < u.geometries.length; i++) if (e(u.geometries[i], I, f, F, y) === !1) return !1;
            break;
          }
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
      I++;
    }
  }
  function Gi(A, e) {
    Th(A, function(t, i, o, u, h) {
      var c = t === null ? null : t.type;
      switch (c) {
        case null:
        case "Point":
        case "LineString":
        case "Polygon":
          return e(Ve(t, o, { bbox: u, id: h }), i, 0) === !1 ? !1 : void 0;
      }
      var p;
      switch (c) {
        case "MultiPoint":
          p = "Point";
          break;
        case "MultiLineString":
          p = "LineString";
          break;
        case "MultiPolygon":
          p = "Polygon";
          break;
      }
      for (var f = 0; f < t.coordinates.length; f++) {
        var F = t.coordinates[f], y = { type: p, coordinates: F };
        if (e(Ve(y, o), i, f) === !1) return !1;
      }
    });
  }
  function Fe(A, e = {}) {
    if (A.bbox != null && e.recompute !== !0) return A.bbox;
    let t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return Pi(A, (i) => {
      t[0] > i[0] && (t[0] = i[0]), t[1] > i[1] && (t[1] = i[1]), t[2] < i[0] && (t[2] = i[0]), t[3] < i[1] && (t[3] = i[1]);
    }), t;
  }
  function Ni(A) {
    var e;
    if (A.bbox) e = A.bbox;
    else if (Array.isArray(A) && A.length === 4) e = A;
    else if (Array.isArray(A) && A.length === 6) e = [A[0], A[1], A[3], A[4]];
    else if (A.type === "Feature") e = Fe(A);
    else if (A.type === "FeatureCollection") e = Fe(A);
    else throw new Error("invalid geojson");
    return { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
  }
  var Kh = class {
    constructor(A = 9) {
      this.tree = new Hh.default(A), this.tree.toBBox = Ni;
    }
    insert(A) {
      if (A.type !== "Feature") throw new Error("invalid feature");
      return A.bbox = A.bbox ? A.bbox : Fe(A), this.tree.insert(A), this;
    }
    load(A) {
      var e = [];
      return Array.isArray(A) ? A.forEach(function(t) {
        if (t.type !== "Feature") throw new Error("invalid features");
        t.bbox = t.bbox ? t.bbox : Fe(t), e.push(t);
      }) : Ur(A, function(t) {
        if (t.type !== "Feature") throw new Error("invalid features");
        t.bbox = t.bbox ? t.bbox : Fe(t), e.push(t);
      }), this.tree.load(e), this;
    }
    remove(A, e) {
      if (A.type !== "Feature") throw new Error("invalid feature");
      return A.bbox = A.bbox ? A.bbox : Fe(A), this.tree.remove(A, e), this;
    }
    clear() {
      return this.tree.clear(), this;
    }
    search(A) {
      var e = this.tree.search(Ni(A));
      return we(e);
    }
    collides(A) {
      return this.tree.collides(Ni(A));
    }
    all() {
      let A = this.tree.all();
      return we(A);
    }
    toJSON() {
      return this.tree.toJSON();
    }
    fromJSON(A) {
      return this.tree.fromJSON(A), this;
    }
  };
  function Ka(A) {
    return new Kh(A);
  }
  function Oh(A, e) {
    if (e = e ?? {}, !Qh(e)) throw new Error("options is invalid");
    var t = e.precision, i = e.coordinates, o = e.mutate;
    if (t = t == null || isNaN(t) ? 6 : t, i = i == null || isNaN(i) ? 3 : i, !A) throw new Error("<geojson> is required");
    if (typeof t != "number") throw new Error("<precision> must be a number");
    if (typeof i != "number") throw new Error("<coordinates> must be a number");
    (o === !1 || o === void 0) && (A = JSON.parse(JSON.stringify(A)));
    var u = Math.pow(10, t);
    return Pi(A, function(h) {
      Rh(h, u, i);
    }), A;
  }
  function Rh(A, e, t) {
    A.length > t && A.splice(t, A.length);
    for (var i = 0; i < A.length; i++) A[i] = Math.round(A[i] * e) / e;
    return A;
  }
  function Ee(A) {
    if (!A) throw new Error("coord is required");
    if (!Array.isArray(A)) {
      if (A.type === "Feature" && A.geometry !== null && A.geometry.type === "Point") return [...A.geometry.coordinates];
      if (A.type === "Point") return [...A.coordinates];
    }
    if (Array.isArray(A) && A.length >= 2 && !Array.isArray(A[0]) && !Array.isArray(A[1])) return [...A];
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
  }
  function rt(A) {
    if (Array.isArray(A)) return A;
    if (A.type === "Feature") {
      if (A.geometry !== null) return A.geometry.coordinates;
    } else if (A.coordinates) return A.coordinates;
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
  }
  function Lr(A) {
    return A.type === "Feature" ? A.geometry : A;
  }
  function Oa(A, e) {
    return A.type === "FeatureCollection" ? "FeatureCollection" : A.type === "GeometryCollection" ? "GeometryCollection" : A.type === "Feature" && A.geometry !== null ? A.geometry.type : A.type;
  }
  function Ph(A) {
    if (!A) throw new Error("geojson is required");
    let e = [];
    return Gi(A, (t) => {
      Gh(t, e);
    }), we(e);
  }
  function Gh(A, e) {
    let t = [], i = A.geometry;
    if (i !== null) {
      switch (i.type) {
        case "Polygon":
          t = rt(i);
          break;
        case "LineString":
          t = [rt(i)];
      }
      t.forEach((o) => {
        Nh(o, A.properties).forEach((u) => {
          u.id = e.length, e.push(u);
        });
      });
    }
  }
  function Nh(A, e) {
    let t = [];
    return A.reduce((i, o) => {
      let u = _r([i, o], e);
      return u.bbox = Vh(i, o), t.push(u), o;
    }), t;
  }
  function Vh(A, e) {
    let t = A[0], i = A[1], o = e[0], u = e[1], h = t < o ? t : o, c = i < u ? i : u, p = t > o ? t : o, f = i > u ? i : u;
    return [h, c, p, f];
  }
  function Vi(A, e, t = {}) {
    var i = Ee(A), o = Ee(e), u = dt(o[1] - i[1]), h = dt(o[0] - i[0]), c = dt(i[1]), p = dt(o[1]), f = Math.pow(Math.sin(u / 2), 2) + Math.pow(Math.sin(h / 2), 2) * Math.cos(c) * Math.cos(p);
    return _h(2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)), t.units);
  }
  var Xh = Object.defineProperty, Jh = Object.defineProperties, Yh = Object.getOwnPropertyDescriptors, Ra = Object.getOwnPropertySymbols, zh = Object.prototype.hasOwnProperty, jh = Object.prototype.propertyIsEnumerable, Pa = (A, e, t) => e in A ? Xh(A, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : A[e] = t, Wh = (A, e) => {
    for (var t in e || (e = {})) zh.call(e, t) && Pa(A, t, e[t]);
    if (Ra) for (var t of Ra(e)) jh.call(e, t) && Pa(A, t, e[t]);
    return A;
  }, Zh = (A, e) => Jh(A, Yh(e));
  function qh(A, e, t = {}) {
    if (!A || !e) throw new Error("lines and inputPoint are required arguments");
    let i = Ee(e), o = ft([1 / 0, 1 / 0], { lineStringIndex: -1, segmentIndex: -1, totalDistance: -1, lineDistance: -1, segmentDistance: -1, pointDistance: 1 / 0, multiFeatureIndex: -1, index: -1, location: -1, dist: 1 / 0 }), u = 0, h = 0, c = -1;
    return Gi(A, function(p, f, F) {
      c !== F && (c = F, h = 0);
      let y = rt(p), I = y.length - 2;
      for (let k = 0; k < y.length - 1; k++) {
        let G = ft(y[k]), J = Ee(G), eA = ft(y[k + 1]), rA = Ee(eA), Q = Vi(G, eA, t), S, P;
        rA[0] === i[0] && rA[1] === i[1] ? [S, P] = [rA, !0] : J[0] === i[0] && J[1] === i[1] ? [S, P] = [J, !1] : [S, P] = ec(J, rA, i);
        let Z = Vi(e, S, t);
        if (Z < o.properties.pointDistance) {
          let j = Vi(G, S, t);
          o = ft(S, { lineStringIndex: F, segmentIndex: P && k + 1 <= I ? k + 1 : k, totalDistance: u + j, lineDistance: h + j, segmentDistance: j, pointDistance: Z, multiFeatureIndex: -1, index: -1, location: -1, dist: 1 / 0 }), o.properties = Zh(Wh({}, o.properties), { multiFeatureIndex: o.properties.lineStringIndex, index: o.properties.segmentIndex, location: o.properties.totalDistance, dist: o.properties.pointDistance });
        }
        u += Q, h += Q;
      }
    }), o;
  }
  function it(A, e) {
    let [t, i, o] = A, [u, h, c] = e;
    return t * u + i * h + o * c;
  }
  function Tt(A, e) {
    let [t, i, o] = A, [u, h, c] = e;
    return [i * c - o * h, o * u - t * c, t * h - i * u];
  }
  function $h(A) {
    return Math.sqrt(Math.pow(A[0], 2) + Math.pow(A[1], 2) + Math.pow(A[2], 2));
  }
  function Ga(A) {
    let e = $h(A);
    return [A[0] / e, A[1] / e, A[2] / e];
  }
  function Xi(A) {
    let e = dt(A[1]), t = dt(A[0]);
    return [Math.cos(e) * Math.cos(t), Math.cos(e) * Math.sin(t), Math.sin(e)];
  }
  function Ac(A) {
    let [e, t, i] = A, o = Math.min(Math.max(i, -1), 1), u = Ma(Math.asin(o));
    return [Ma(Math.atan2(t, e)), u];
  }
  function ec(A, e, t) {
    let i = Xi(A), o = Xi(e), u = Xi(t), h = Tt(i, o);
    if (h[0] === 0 && h[1] === 0 && h[2] === 0) return it(i, o) > 0 ? [[...e], !0] : [[...t], !1];
    let c = Tt(h, u);
    if (c[0] === 0 && c[1] === 0 && c[2] === 0) return [[...e], !0];
    let p = Tt(c, h), f = Ga(p), F = [-f[0], -f[1], -f[2]], y = it(u, f) > it(u, F) ? f : F, I = Ga(h), k = it(Tt(i, y), I), G = it(Tt(y, o), I);
    return k >= 0 && G >= 0 ? [Ac(y), !1] : it(i, u) > it(o, u) ? [[...A], !1] : [[...e], !0];
  }
  function Na(A, e) {
    if (!A) throw new Error("line is required");
    if (!e) throw new Error("splitter is required");
    let t = Oa(A), i = Oa(e);
    if (t !== "LineString") throw new Error("line must be LineString");
    if (i === "FeatureCollection") throw new Error("splitter cannot be a FeatureCollection");
    if (i === "GeometryCollection") throw new Error("splitter cannot be a GeometryCollection");
    var o = Oh(e, { precision: 7 });
    switch (A.type !== "Feature" && (A = Ve(A)), i) {
      case "Point":
        return Ji(A, o);
      case "MultiPoint":
        return Va(A, o);
      case "LineString":
      case "MultiLineString":
      case "Polygon":
      case "MultiPolygon":
        return Va(A, Ta(A, o, { ignoreSelfIntersections: !0 }));
    }
  }
  function Va(A, e) {
    var t = [], i = Ka();
    return Gi(e, function(o) {
      if (t.forEach(function(c, p) {
        c.id = p;
      }), !t.length) t = Ji(A, o).features, i.load(we(t));
      else {
        var u = i.search(o);
        if (u.features.length) {
          var h = Xa(o, u);
          t = t.filter(function(c) {
            return c.id !== h.id;
          }), i.remove(h), Ur(Ji(h, o), function(c) {
            t.push(c), i.insert(c);
          });
        }
      }
    }), we(t);
  }
  function Ji(A, e) {
    var t = [], i = rt(A)[0], o = rt(A)[A.geometry.coordinates.length - 1];
    if (Yi(i, Ee(e)) || Yi(o, Ee(e))) return we([A]);
    var u = Ka(), h = Ph(A);
    u.load(h);
    var c = u.search(e);
    if (!c.features.length) return we([A]);
    var p = Xa(e, c), f = [i], F = Sh(h, function(y, I, k) {
      var G = rt(I)[1], J = Ee(e);
      return k === p.id ? (y.push(J), t.push(_r(y)), Yi(J, G) ? [J] : [J, G]) : (y.push(G), y);
    }, f);
    return F.length > 1 && t.push(_r(F)), we(t);
  }
  function Xa(A, e) {
    if (!e.features.length) throw new Error("lines must contain features");
    if (e.features.length === 1) return e.features[0];
    var t, i = 1 / 0;
    return Ur(e, function(o) {
      var u = qh(o, A), h = u.properties.dist;
      h < i && (t = o, i = h);
    }), t;
  }
  function Yi(A, e) {
    return A[0] === e[0] && A[1] === e[1];
  }
  var tc = Na, He = 11102230246251565e-32, jA = 134217729, rc = (3 + 8 * He) * He;
  function zi(A, e, t, i, o) {
    let u, h, c, p, f = e[0], F = i[0], y = 0, I = 0;
    F > f == F > -f ? (u = f, f = e[++y]) : (u = F, F = i[++I]);
    let k = 0;
    if (y < A && I < t) for (F > f == F > -f ? (h = f + u, c = u - (h - f), f = e[++y]) : (h = F + u, c = u - (h - F), F = i[++I]), u = h, c !== 0 && (o[k++] = c); y < A && I < t; ) F > f == F > -f ? (h = u + f, p = h - u, c = u - (h - p) + (f - p), f = e[++y]) : (h = u + F, p = h - u, c = u - (h - p) + (F - p), F = i[++I]), u = h, c !== 0 && (o[k++] = c);
    for (; y < A; ) h = u + f, p = h - u, c = u - (h - p) + (f - p), f = e[++y], u = h, c !== 0 && (o[k++] = c);
    for (; I < t; ) h = u + F, p = h - u, c = u - (h - p) + (F - p), F = i[++I], u = h, c !== 0 && (o[k++] = c);
    return (u !== 0 || k === 0) && (o[k++] = u), k;
  }
  function ic(A, e) {
    let t = e[0];
    for (let i = 1; i < A; i++) t += e[i];
    return t;
  }
  function Kt(A) {
    return new Float64Array(A);
  }
  var nc = (3 + 16 * He) * He, ac = (2 + 12 * He) * He, sc = (9 + 64 * He) * He * He, Ct = Kt(4), Ja = Kt(8), Ya = Kt(12), za = Kt(16), $A = Kt(4);
  function oc(A, e, t, i, o, u, h) {
    let c, p, f, F, y, I, k, G, J, eA, rA, Q, S, P, Z, j, W, d, m = A - o, _ = t - o, x = e - u, b = i - u;
    P = m * b, I = jA * m, k = I - (I - m), G = m - k, I = jA * b, J = I - (I - b), eA = b - J, Z = G * eA - (P - k * J - G * J - k * eA), j = x * _, I = jA * x, k = I - (I - x), G = x - k, I = jA * _, J = I - (I - _), eA = _ - J, W = G * eA - (j - k * J - G * J - k * eA), rA = Z - W, y = Z - rA, Ct[0] = Z - (rA + y) + (y - W), Q = P + rA, y = Q - P, S = P - (Q - y) + (rA - y), rA = S - j, y = S - rA, Ct[1] = S - (rA + y) + (y - j), d = Q + rA, y = d - Q, Ct[2] = Q - (d - y) + (rA - y), Ct[3] = d;
    let U = ic(4, Ct), T = ac * h;
    if (U >= T || -U >= T || (y = A - m, c = A - (m + y) + (y - o), y = t - _, f = t - (_ + y) + (y - o), y = e - x, p = e - (x + y) + (y - u), y = i - b, F = i - (b + y) + (y - u), c === 0 && p === 0 && f === 0 && F === 0) || (T = sc * h + rc * Math.abs(U), U += m * F + b * c - (x * f + _ * p), U >= T || -U >= T)) return U;
    P = c * b, I = jA * c, k = I - (I - c), G = c - k, I = jA * b, J = I - (I - b), eA = b - J, Z = G * eA - (P - k * J - G * J - k * eA), j = p * _, I = jA * p, k = I - (I - p), G = p - k, I = jA * _, J = I - (I - _), eA = _ - J, W = G * eA - (j - k * J - G * J - k * eA), rA = Z - W, y = Z - rA, $A[0] = Z - (rA + y) + (y - W), Q = P + rA, y = Q - P, S = P - (Q - y) + (rA - y), rA = S - j, y = S - rA, $A[1] = S - (rA + y) + (y - j), d = Q + rA, y = d - Q, $A[2] = Q - (d - y) + (rA - y), $A[3] = d;
    let M = zi(4, Ct, 4, $A, Ja);
    P = m * F, I = jA * m, k = I - (I - m), G = m - k, I = jA * F, J = I - (I - F), eA = F - J, Z = G * eA - (P - k * J - G * J - k * eA), j = x * f, I = jA * x, k = I - (I - x), G = x - k, I = jA * f, J = I - (I - f), eA = f - J, W = G * eA - (j - k * J - G * J - k * eA), rA = Z - W, y = Z - rA, $A[0] = Z - (rA + y) + (y - W), Q = P + rA, y = Q - P, S = P - (Q - y) + (rA - y), rA = S - j, y = S - rA, $A[1] = S - (rA + y) + (y - j), d = Q + rA, y = d - Q, $A[2] = Q - (d - y) + (rA - y), $A[3] = d;
    let H = zi(M, Ja, 4, $A, Ya);
    P = c * F, I = jA * c, k = I - (I - c), G = c - k, I = jA * F, J = I - (I - F), eA = F - J, Z = G * eA - (P - k * J - G * J - k * eA), j = p * f, I = jA * p, k = I - (I - p), G = p - k, I = jA * f, J = I - (I - f), eA = f - J, W = G * eA - (j - k * J - G * J - k * eA), rA = Z - W, y = Z - rA, $A[0] = Z - (rA + y) + (y - W), Q = P + rA, y = Q - P, S = P - (Q - y) + (rA - y), rA = S - j, y = S - rA, $A[1] = S - (rA + y) + (y - j), d = Q + rA, y = d - Q, $A[2] = Q - (d - y) + (rA - y), $A[3] = d;
    let O = zi(H, Ya, 4, $A, za);
    return za[O - 1];
  }
  function uc(A, e, t, i, o, u) {
    let h = (e - u) * (t - o), c = (A - o) * (i - u), p = h - c, f = Math.abs(h + c);
    return Math.abs(p) >= nc * f ? p : -oc(A, e, t, i, o, u, f);
  }
  function lc(A, e) {
    var t, i, o = 0, u, h, c, p, f, F, y, I = A[0], k = A[1], G = e.length;
    for (t = 0; t < G; t++) {
      i = 0;
      var J = e[t], eA = J.length - 1;
      if (F = J[0], F[0] !== J[eA][0] && F[1] !== J[eA][1]) throw new Error("First and last coordinates in a ring must be the same");
      for (h = F[0] - I, c = F[1] - k, i; i < eA; i++) {
        if (y = J[i + 1], p = y[0] - I, f = y[1] - k, c === 0 && f === 0) {
          if (p <= 0 && h >= 0 || h <= 0 && p >= 0) return 0;
        } else if (f >= 0 && c <= 0 || f <= 0 && c >= 0) {
          if (u = uc(h, p, c, f, 0, 0), u === 0) return 0;
          (u > 0 && f > 0 && c <= 0 || u < 0 && f <= 0 && c > 0) && o++;
        }
        F = y, c = f, h = p;
      }
    }
    return o % 2 !== 0;
  }
  function wt(A, e, t = {}) {
    if (!A) throw new Error("point is required");
    if (!e) throw new Error("polygon is required");
    let i = Ee(A), o = Lr(e), u = o.type, h = e.bbox, c = o.coordinates;
    if (h && hc(i, h) === !1) return !1;
    u === "Polygon" && (c = [c]);
    let p = !1;
    for (var f = 0; f < c.length; ++f) {
      let F = lc(i, c[f]);
      if (F === 0) return !t.ignoreBoundary;
      F && (p = !0);
    }
    return p;
  }
  function hc(A, e) {
    return e[0] <= A[0] && e[1] <= A[1] && e[2] >= A[0] && e[3] >= A[1];
  }
  function Ot(A, e, t = {}) {
    let i = Ee(A), o = rt(e);
    for (let u = 0; u < o.length - 1; u++) {
      let h = !1;
      if (t.ignoreEndVertices && (u === 0 && (h = "start"), u === o.length - 2 && (h = "end"), u === 0 && u + 1 === o.length - 1 && (h = "both")), cc(o[u], o[u + 1], i, h, typeof t.epsilon > "u" ? null : t.epsilon)) return !0;
    }
    return !1;
  }
  function cc(A, e, t, i, o) {
    let u = t[0], h = t[1], c = A[0], p = A[1], f = e[0], F = e[1], y = t[0] - c, I = t[1] - p, k = f - c, G = F - p, J = y * G - I * k;
    if (o !== null) {
      if (Math.abs(J) > o) return !1;
    } else if (J !== 0) return !1;
    if (Math.abs(k) === Math.abs(G) && Math.abs(k) === 0) return i ? !1 : t[0] === A[0] && t[1] === A[1];
    if (i) {
      if (i === "start") return Math.abs(k) >= Math.abs(G) ? k > 0 ? c < u && u <= f : f <= u && u < c : G > 0 ? p < h && h <= F : F <= h && h < p;
      if (i === "end") return Math.abs(k) >= Math.abs(G) ? k > 0 ? c <= u && u < f : f < u && u <= c : G > 0 ? p <= h && h < F : F < h && h <= p;
      if (i === "both") return Math.abs(k) >= Math.abs(G) ? k > 0 ? c < u && u < f : f < u && u < c : G > 0 ? p < h && h < F : F < h && h < p;
    } else return Math.abs(k) >= Math.abs(G) ? k > 0 ? c <= u && u <= f : f <= u && u <= c : G > 0 ? p <= h && h <= F : F <= h && h <= p;
    return !1;
  }
  function Bc(A, e) {
    let t = Lr(A), i = Lr(e), o = t.type, u = i.type, h = t.coordinates, c = i.coordinates;
    switch (o) {
      case "Point":
        if (u === "Point") return Wi(h, c);
        throw new Error("feature2 " + u + " geometry not supported");
      case "MultiPoint":
        switch (u) {
          case "Point":
            return fc(t, i);
          case "MultiPoint":
            return dc(t, i);
          default:
            throw new Error("feature2 " + u + " geometry not supported");
        }
      case "LineString":
        switch (u) {
          case "Point":
            return Ot(i, t, { ignoreEndVertices: !0 });
          case "LineString":
            return mc(t, i);
          case "MultiPoint":
            return Cc(t, i);
          default:
            throw new Error("feature2 " + u + " geometry not supported");
        }
      case "Polygon":
        switch (u) {
          case "Point":
            return wt(i, t, { ignoreBoundary: !0 });
          case "LineString":
            return _c(t, i);
          case "Polygon":
            return ji(t, i);
          case "MultiPoint":
            return wc(t, i);
          case "MultiPolygon":
            return pc(t, i);
          default:
            throw new Error("feature2 " + u + " geometry not supported");
        }
      case "MultiPolygon":
        if (u === "Polygon") return gc(t, i);
        throw new Error("feature2 " + u + " geometry not supported");
      default:
        throw new Error("feature1 " + o + " geometry not supported");
    }
  }
  function gc(A, e) {
    return A.coordinates.some((t) => ji({ type: "Polygon", coordinates: t }, e));
  }
  function pc(A, e) {
    return e.coordinates.every((t) => ji(A, { type: "Polygon", coordinates: t }));
  }
  function fc(A, e) {
    let t, i = !1;
    for (t = 0; t < A.coordinates.length; t++) if (Wi(A.coordinates[t], e.coordinates)) {
      i = !0;
      break;
    }
    return i;
  }
  function dc(A, e) {
    for (let t of e.coordinates) {
      let i = !1;
      for (let o of A.coordinates) if (Wi(t, o)) {
        i = !0;
        break;
      }
      if (!i) return !1;
    }
    return !0;
  }
  function Cc(A, e) {
    let t = !1;
    for (let i of e.coordinates) if (Ot(i, A, { ignoreEndVertices: !0 }) && (t = !0), !Ot(i, A)) return !1;
    return !!t;
  }
  function wc(A, e) {
    for (let t of e.coordinates) if (!wt(t, A, { ignoreBoundary: !0 })) return !1;
    return !0;
  }
  function mc(A, e) {
    let t = !1;
    for (let i of e.coordinates) if (Ot({ type: "Point", coordinates: i }, A, { ignoreEndVertices: !0 }) && (t = !0), !Ot({ type: "Point", coordinates: i }, A, { ignoreEndVertices: !1 })) return !1;
    return t;
  }
  function yc(A, e) {
    let t = A.coordinates, i = [];
    for (let o = 0; o < t.length - 1; o++) {
      let u = _r([t[o], t[o + 1]]), h = Na(u, Ve(e));
      h.features.length === 0 ? i.push(u) : i.push(...h.features);
    }
    return we(i);
  }
  function _c(A, e) {
    let t = Fe(A), i = Fe(e);
    if (!ja(t, i)) return !1;
    for (let h of e.coordinates) if (!wt(h, A)) return !1;
    let o = !1, u = yc(e, A);
    for (let h of u.features) {
      let c = Qc(h.geometry.coordinates[0], h.geometry.coordinates[1]);
      if (!wt(c, A)) return !1;
      !o && wt(c, A, { ignoreBoundary: !0 }) && (o = !0);
    }
    return o;
  }
  function ji(A, e) {
    if (A.type === "Feature" && A.geometry === null || e.type === "Feature" && e.geometry === null) return !1;
    let t = Fe(A), i = Fe(e);
    if (!ja(t, i)) return !1;
    let o = Lr(e).coordinates;
    for (let u of o) for (let h of u) if (!wt(h, A)) return !1;
    return !0;
  }
  function ja(A, e) {
    return !(A[0] > e[0] || A[2] < e[2] || A[1] > e[1] || A[3] < e[3]);
  }
  function Wi(A, e) {
    return A[0] === e[0] && A[1] === e[1];
  }
  function Qc(A, e) {
    return [(A[0] + e[0]) / 2, (A[1] + e[1]) / 2];
  }
  var Fc = Bc, Ec = C(Cr()), vc = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Zi = Math.ceil, oe = Math.floor, te = "[BigNumber Error] ", Wa = te + "Number primitive has more than 15 significant digits: ", me = 1e14, pA = 14, qi = 9007199254740991, $i = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Xe = 1e7, OA = 1e9;
  function Za(A) {
    var e, t, i, o = Q.prototype = { constructor: Q, toString: null, valueOf: null }, u = new Q(1), h = 20, c = 4, p = -7, f = 21, F = -1e7, y = 1e7, I = !1, k = 1, G = 0, J = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: " ", suffix: "" }, eA = "0123456789abcdefghijklmnopqrstuvwxyz", rA = !0;
    function Q(d, m) {
      var _, x, b, U, T, M, H, O, K = this;
      if (!(K instanceof Q)) return new Q(d, m);
      if (m == null) {
        if (d && d._isBigNumber === !0) {
          K.s = d.s, !d.c || d.e > y ? K.c = K.e = null : d.e < F ? K.c = [K.e = 0] : (K.e = d.e, K.c = d.c.slice());
          return;
        }
        if ((M = typeof d == "number") && d * 0 == 0) {
          if (K.s = 1 / d < 0 ? (d = -d, -1) : 1, d === ~~d) {
            for (U = 0, T = d; T >= 10; T /= 10, U++) ;
            U > y ? K.c = K.e = null : (K.e = U, K.c = [d]);
            return;
          }
          O = String(d);
        } else {
          if (!vc.test(O = String(d))) return i(K, O, M);
          K.s = O.charCodeAt(0) == 45 ? (O = O.slice(1), -1) : 1;
        }
        (U = O.indexOf(".")) > -1 && (O = O.replace(".", "")), (T = O.search(/e/i)) > 0 ? (U < 0 && (U = T), U += +O.slice(T + 1), O = O.substring(0, T)) : U < 0 && (U = O.length);
      } else {
        if (vA(m, 2, eA.length, "Base"), m == 10 && rA) return K = new Q(d), j(K, h + K.e + 1, c);
        if (O = String(d), M = typeof d == "number") {
          if (d * 0 != 0) return i(K, O, M, m);
          if (K.s = 1 / d < 0 ? (O = O.slice(1), -1) : 1, Q.DEBUG && O.replace(/^0\.0*|\./, "").length > 15) throw Error(Wa + d);
        } else K.s = O.charCodeAt(0) === 45 ? (O = O.slice(1), -1) : 1;
        for (_ = eA.slice(0, m), U = T = 0, H = O.length; T < H; T++) if (_.indexOf(x = O.charAt(T)) < 0) {
          if (x == ".") {
            if (T > U) {
              U = H;
              continue;
            }
          } else if (!b && (O == O.toUpperCase() && (O = O.toLowerCase()) || O == O.toLowerCase() && (O = O.toUpperCase()))) {
            b = !0, T = -1, U = 0;
            continue;
          }
          return i(K, String(d), M, m);
        }
        M = !1, O = t(O, m, 10, K.s), (U = O.indexOf(".")) > -1 ? O = O.replace(".", "") : U = O.length;
      }
      for (T = 0; O.charCodeAt(T) === 48; T++) ;
      for (H = O.length; O.charCodeAt(--H) === 48; ) ;
      if (O = O.slice(T, ++H)) {
        if (H -= T, M && Q.DEBUG && H > 15 && (d > qi || d !== oe(d))) throw Error(Wa + K.s * d);
        if ((U = U - T - 1) > y) K.c = K.e = null;
        else if (U < F) K.c = [K.e = 0];
        else {
          if (K.e = U, K.c = [], T = (U + 1) % pA, U < 0 && (T += pA), T < H) {
            for (T && K.c.push(+O.slice(0, T)), H -= pA; T < H; ) K.c.push(+O.slice(T, T += pA));
            T = pA - (O = O.slice(T)).length;
          } else T -= H;
          for (; T--; O += "0") ;
          K.c.push(+O);
        }
      } else K.c = [K.e = 0];
    }
    Q.clone = Za, Q.ROUND_UP = 0, Q.ROUND_DOWN = 1, Q.ROUND_CEIL = 2, Q.ROUND_FLOOR = 3, Q.ROUND_HALF_UP = 4, Q.ROUND_HALF_DOWN = 5, Q.ROUND_HALF_EVEN = 6, Q.ROUND_HALF_CEIL = 7, Q.ROUND_HALF_FLOOR = 8, Q.EUCLID = 9, Q.config = Q.set = function(d) {
      var m, _;
      if (d != null) if (typeof d == "object") {
        if (d.hasOwnProperty(m = "DECIMAL_PLACES") && (_ = d[m], vA(_, 0, OA, m), h = _), d.hasOwnProperty(m = "ROUNDING_MODE") && (_ = d[m], vA(_, 0, 8, m), c = _), d.hasOwnProperty(m = "EXPONENTIAL_AT") && (_ = d[m], _ && _.pop ? (vA(_[0], -OA, 0, m), vA(_[1], 0, OA, m), p = _[0], f = _[1]) : (vA(_, -OA, OA, m), p = -(f = _ < 0 ? -_ : _))), d.hasOwnProperty(m = "RANGE")) if (_ = d[m], _ && _.pop) vA(_[0], -OA, -1, m), vA(_[1], 1, OA, m), F = _[0], y = _[1];
        else if (vA(_, -OA, OA, m), _) F = -(y = _ < 0 ? -_ : _);
        else throw Error(te + m + " cannot be zero: " + _);
        if (d.hasOwnProperty(m = "CRYPTO")) if (_ = d[m], _ === !!_) if (_) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) I = _;
        else throw I = !_, Error(te + "crypto unavailable");
        else I = _;
        else throw Error(te + m + " not true or false: " + _);
        if (d.hasOwnProperty(m = "MODULO_MODE") && (_ = d[m], vA(_, 0, 9, m), k = _), d.hasOwnProperty(m = "POW_PRECISION") && (_ = d[m], vA(_, 0, OA, m), G = _), d.hasOwnProperty(m = "FORMAT")) if (_ = d[m], typeof _ == "object") J = _;
        else throw Error(te + m + " not an object: " + _);
        if (d.hasOwnProperty(m = "ALPHABET")) if (_ = d[m], typeof _ == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(_)) rA = _.slice(0, 10) == "0123456789", eA = _;
        else throw Error(te + m + " invalid: " + _);
      } else throw Error(te + "Object expected: " + d);
      return { DECIMAL_PLACES: h, ROUNDING_MODE: c, EXPONENTIAL_AT: [p, f], RANGE: [F, y], CRYPTO: I, MODULO_MODE: k, POW_PRECISION: G, FORMAT: J, ALPHABET: eA };
    }, Q.isBigNumber = function(d) {
      if (!d || d._isBigNumber !== !0) return !1;
      if (!Q.DEBUG) return !0;
      var m, _, x = d.c, b = d.e, U = d.s;
      A: if ({}.toString.call(x) == "[object Array]") {
        if ((U === 1 || U === -1) && b >= -OA && b <= OA && b === oe(b)) {
          if (x[0] === 0) {
            if (b === 0 && x.length === 1) return !0;
            break A;
          }
          if (m = (b + 1) % pA, m < 1 && (m += pA), String(x[0]).length == m) {
            for (m = 0; m < x.length; m++) if (_ = x[m], _ < 0 || _ >= me || _ !== oe(_)) break A;
            if (_ !== 0) return !0;
          }
        }
      } else if (x === null && b === null && (U === null || U === 1 || U === -1)) return !0;
      throw Error(te + "Invalid BigNumber: " + d);
    }, Q.maximum = Q.max = function() {
      return P(arguments, -1);
    }, Q.minimum = Q.min = function() {
      return P(arguments, 1);
    }, Q.random = function() {
      var d = 9007199254740992, m = Math.random() * d & 2097151 ? function() {
        return oe(Math.random() * d);
      } : function() {
        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
      };
      return function(_) {
        var x, b, U, T, M, H = 0, O = [], K = new Q(u);
        if (_ == null ? _ = h : vA(_, 0, OA), T = Zi(_ / pA), I) if (crypto.getRandomValues) {
          for (x = crypto.getRandomValues(new Uint32Array(T *= 2)); H < T; ) M = x[H] * 131072 + (x[H + 1] >>> 11), M >= 9e15 ? (b = crypto.getRandomValues(new Uint32Array(2)), x[H] = b[0], x[H + 1] = b[1]) : (O.push(M % 1e14), H += 2);
          H = T / 2;
        } else if (crypto.randomBytes) {
          for (x = crypto.randomBytes(T *= 7); H < T; ) M = (x[H] & 31) * 281474976710656 + x[H + 1] * 1099511627776 + x[H + 2] * 4294967296 + x[H + 3] * 16777216 + (x[H + 4] << 16) + (x[H + 5] << 8) + x[H + 6], M >= 9e15 ? crypto.randomBytes(7).copy(x, H) : (O.push(M % 1e14), H += 7);
          H = T / 7;
        } else throw I = !1, Error(te + "crypto unavailable");
        if (!I) for (; H < T; ) M = m(), M < 9e15 && (O[H++] = M % 1e14);
        for (T = O[--H], _ %= pA, T && _ && (M = $i[pA - _], O[H] = oe(T / M) * M); O[H] === 0; O.pop(), H--) ;
        if (H < 0) O = [U = 0];
        else {
          for (U = -1; O[0] === 0; O.splice(0, 1), U -= pA) ;
          for (H = 1, M = O[0]; M >= 10; M /= 10, H++) ;
          H < pA && (U -= pA - H);
        }
        return K.e = U, K.c = O, K;
      };
    }(), Q.sum = function() {
      for (var d = 1, m = arguments, _ = new Q(m[0]); d < m.length; ) _ = _.plus(m[d++]);
      return _;
    }, t = /* @__PURE__ */ function() {
      var d = "0123456789";
      function m(_, x, b, U) {
        for (var T, M = [0], H, O = 0, K = _.length; O < K; ) {
          for (H = M.length; H--; M[H] *= x) ;
          for (M[0] += U.indexOf(_.charAt(O++)), T = 0; T < M.length; T++) M[T] > b - 1 && (M[T + 1] == null && (M[T + 1] = 0), M[T + 1] += M[T] / b | 0, M[T] %= b);
        }
        return M.reverse();
      }
      return function(_, x, b, U, T) {
        var M, H, O, K, z, lA, hA, gA, bA = _.indexOf("."), TA = h, wA = c;
        for (bA >= 0 && (K = G, G = 0, _ = _.replace(".", ""), gA = new Q(x), lA = gA.pow(_.length - bA), G = K, gA.c = m(Se(le(lA.c), lA.e, "0"), 10, b, d), gA.e = gA.c.length), hA = m(_, x, b, T ? (M = eA, d) : (M = d, eA)), O = K = hA.length; hA[--K] == 0; hA.pop()) ;
        if (!hA[0]) return M.charAt(0);
        if (bA < 0 ? --O : (lA.c = hA, lA.e = O, lA.s = U, lA = e(lA, gA, TA, wA, b), hA = lA.c, z = lA.r, O = lA.e), H = O + TA + 1, bA = hA[H], K = b / 2, z = z || H < 0 || hA[H + 1] != null, z = wA < 4 ? (bA != null || z) && (wA == 0 || wA == (lA.s < 0 ? 3 : 2)) : bA > K || bA == K && (wA == 4 || z || wA == 6 && hA[H - 1] & 1 || wA == (lA.s < 0 ? 8 : 7)), H < 1 || !hA[0]) _ = z ? Se(M.charAt(1), -TA, M.charAt(0)) : M.charAt(0);
        else {
          if (hA.length = H, z) for (--b; ++hA[--H] > b; ) hA[H] = 0, H || (++O, hA = [1].concat(hA));
          for (K = hA.length; !hA[--K]; ) ;
          for (bA = 0, _ = ""; bA <= K; _ += M.charAt(hA[bA++])) ;
          _ = Se(_, O, M.charAt(0));
        }
        return _;
      };
    }(), e = /* @__PURE__ */ function() {
      function d(x, b, U) {
        var T, M, H, O, K = 0, z = x.length, lA = b % Xe, hA = b / Xe | 0;
        for (x = x.slice(); z--; ) H = x[z] % Xe, O = x[z] / Xe | 0, T = hA * H + O * lA, M = lA * H + T % Xe * Xe + K, K = (M / U | 0) + (T / Xe | 0) + hA * O, x[z] = M % U;
        return K && (x = [K].concat(x)), x;
      }
      function m(x, b, U, T) {
        var M, H;
        if (U != T) H = U > T ? 1 : -1;
        else for (M = H = 0; M < U; M++) if (x[M] != b[M]) {
          H = x[M] > b[M] ? 1 : -1;
          break;
        }
        return H;
      }
      function _(x, b, U, T) {
        for (var M = 0; U--; ) x[U] -= M, M = x[U] < b[U] ? 1 : 0, x[U] = M * T + x[U] - b[U];
        for (; !x[0] && x.length > 1; x.splice(0, 1)) ;
      }
      return function(x, b, U, T, M) {
        var H, O, K, z, lA, hA, gA, bA, TA, wA, _A, WA, Or, nn, an, Le, Nt, he = x.s == b.s ? 1 : -1, Ae = x.c, xA = b.c;
        if (!Ae || !Ae[0] || !xA || !xA[0]) return new Q(!x.s || !b.s || (Ae ? xA && Ae[0] == xA[0] : !xA) ? NaN : Ae && Ae[0] == 0 || !xA ? he * 0 : he / 0);
        for (bA = new Q(he), TA = bA.c = [], O = x.e - b.e, he = U + O + 1, M || (M = me, O = ue(x.e / pA) - ue(b.e / pA), he = he / pA | 0), K = 0; xA[K] == (Ae[K] || 0); K++) ;
        if (xA[K] > (Ae[K] || 0) && O--, he < 0) TA.push(1), z = !0;
        else {
          for (nn = Ae.length, Le = xA.length, K = 0, he += 2, lA = oe(M / (xA[0] + 1)), lA > 1 && (xA = d(xA, lA, M), Ae = d(Ae, lA, M), Le = xA.length, nn = Ae.length), Or = Le, wA = Ae.slice(0, Le), _A = wA.length; _A < Le; wA[_A++] = 0) ;
          Nt = xA.slice(), Nt = [0].concat(Nt), an = xA[0], xA[1] >= M / 2 && an++;
          do {
            if (lA = 0, H = m(xA, wA, Le, _A), H < 0) {
              if (WA = wA[0], Le != _A && (WA = WA * M + (wA[1] || 0)), lA = oe(WA / an), lA > 1) for (lA >= M && (lA = M - 1), hA = d(xA, lA, M), gA = hA.length, _A = wA.length; m(hA, wA, gA, _A) == 1; ) lA--, _(hA, Le < gA ? Nt : xA, gA, M), gA = hA.length, H = 1;
              else lA == 0 && (H = lA = 1), hA = xA.slice(), gA = hA.length;
              if (gA < _A && (hA = [0].concat(hA)), _(wA, hA, _A, M), _A = wA.length, H == -1) for (; m(xA, wA, Le, _A) < 1; ) lA++, _(wA, Le < _A ? Nt : xA, _A, M), _A = wA.length;
            } else H === 0 && (lA++, wA = [0]);
            TA[K++] = lA, wA[0] ? wA[_A++] = Ae[Or] || 0 : (wA = [Ae[Or]], _A = 1);
          } while ((Or++ < nn || wA[0] != null) && he--);
          z = wA[0] != null, TA[0] || TA.splice(0, 1);
        }
        if (M == me) {
          for (K = 1, he = TA[0]; he >= 10; he /= 10, K++) ;
          j(bA, U + (bA.e = K + O * pA - 1) + 1, T, z);
        } else bA.e = O, bA.r = +z;
        return bA;
      };
    }();
    function S(d, m, _, x) {
      var b, U, T, M, H;
      if (_ == null ? _ = c : vA(_, 0, 8), !d.c) return d.toString();
      if (b = d.c[0], T = d.e, m == null) H = le(d.c), H = x == 1 || x == 2 && (T <= p || T >= f) ? xr(H, T) : Se(H, T, "0");
      else if (d = j(new Q(d), m, _), U = d.e, H = le(d.c), M = H.length, x == 1 || x == 2 && (m <= U || U <= p)) {
        for (; M < m; H += "0", M++) ;
        H = xr(H, U);
      } else if (m -= T + (x === 2 && U > T), H = Se(H, U, "0"), U + 1 > M) {
        if (--m > 0) for (H += "."; m--; H += "0") ;
      } else if (m += U - M, m > 0) for (U + 1 == M && (H += "."); m--; H += "0") ;
      return d.s < 0 && b ? "-" + H : H;
    }
    function P(d, m) {
      for (var _, x, b = 1, U = new Q(d[0]); b < d.length; b++) x = new Q(d[b]), (!x.s || (_ = nt(U, x)) === m || _ === 0 && U.s === m) && (U = x);
      return U;
    }
    function Z(d, m, _) {
      for (var x = 1, b = m.length; !m[--b]; m.pop()) ;
      for (b = m[0]; b >= 10; b /= 10, x++) ;
      return (_ = x + _ * pA - 1) > y ? d.c = d.e = null : _ < F ? d.c = [d.e = 0] : (d.e = _, d.c = m), d;
    }
    i = /* @__PURE__ */ function() {
      var d = /^(-?)0([xbo])(?=\w[\w.]*$)/i, m = /^([^.]+)\.$/, _ = /^\.([^.]+)$/, x = /^-?(Infinity|NaN)$/, b = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
      return function(U, T, M, H) {
        var O, K = M ? T : T.replace(b, "");
        if (x.test(K)) U.s = isNaN(K) ? null : K < 0 ? -1 : 1;
        else {
          if (!M && (K = K.replace(d, function(z, lA, hA) {
            return O = (hA = hA.toLowerCase()) == "x" ? 16 : hA == "b" ? 2 : 8, !H || H == O ? lA : z;
          }), H && (O = H, K = K.replace(m, "$1").replace(_, "0.$1")), T != K)) return new Q(K, O);
          if (Q.DEBUG) throw Error(te + "Not a" + (H ? " base " + H : "") + " number: " + T);
          U.s = null;
        }
        U.c = U.e = null;
      };
    }();
    function j(d, m, _, x) {
      var b, U, T, M, H, O, K, z = d.c, lA = $i;
      if (z) {
        A: {
          for (b = 1, M = z[0]; M >= 10; M /= 10, b++) ;
          if (U = m - b, U < 0) U += pA, T = m, H = z[O = 0], K = oe(H / lA[b - T - 1] % 10);
          else if (O = Zi((U + 1) / pA), O >= z.length) if (x) {
            for (; z.length <= O; z.push(0)) ;
            H = K = 0, b = 1, U %= pA, T = U - pA + 1;
          } else break A;
          else {
            for (H = M = z[O], b = 1; M >= 10; M /= 10, b++) ;
            U %= pA, T = U - pA + b, K = T < 0 ? 0 : oe(H / lA[b - T - 1] % 10);
          }
          if (x = x || m < 0 || z[O + 1] != null || (T < 0 ? H : H % lA[b - T - 1]), x = _ < 4 ? (K || x) && (_ == 0 || _ == (d.s < 0 ? 3 : 2)) : K > 5 || K == 5 && (_ == 4 || x || _ == 6 && (U > 0 ? T > 0 ? H / lA[b - T] : 0 : z[O - 1]) % 10 & 1 || _ == (d.s < 0 ? 8 : 7)), m < 1 || !z[0]) return z.length = 0, x ? (m -= d.e + 1, z[0] = lA[(pA - m % pA) % pA], d.e = -m || 0) : z[0] = d.e = 0, d;
          if (U == 0 ? (z.length = O, M = 1, O--) : (z.length = O + 1, M = lA[pA - U], z[O] = T > 0 ? oe(H / lA[b - T] % lA[T]) * M : 0), x) for (; ; ) if (O == 0) {
            for (U = 1, T = z[0]; T >= 10; T /= 10, U++) ;
            for (T = z[0] += M, M = 1; T >= 10; T /= 10, M++) ;
            U != M && (d.e++, z[0] == me && (z[0] = 1));
            break;
          } else {
            if (z[O] += M, z[O] != me) break;
            z[O--] = 0, M = 1;
          }
          for (U = z.length; z[--U] === 0; z.pop()) ;
        }
        d.e > y ? d.c = d.e = null : d.e < F && (d.c = [d.e = 0]);
      }
      return d;
    }
    function W(d) {
      var m, _ = d.e;
      return _ === null ? d.toString() : (m = le(d.c), m = _ <= p || _ >= f ? xr(m, _) : Se(m, _, "0"), d.s < 0 ? "-" + m : m);
    }
    return o.absoluteValue = o.abs = function() {
      var d = new Q(this);
      return d.s < 0 && (d.s = 1), d;
    }, o.comparedTo = function(d, m) {
      return nt(this, new Q(d, m));
    }, o.decimalPlaces = o.dp = function(d, m) {
      var _, x, b, U = this;
      if (d != null) return vA(d, 0, OA), m == null ? m = c : vA(m, 0, 8), j(new Q(U), d + U.e + 1, m);
      if (!(_ = U.c)) return null;
      if (x = ((b = _.length - 1) - ue(this.e / pA)) * pA, b = _[b]) for (; b % 10 == 0; b /= 10, x--) ;
      return x < 0 && (x = 0), x;
    }, o.dividedBy = o.div = function(d, m) {
      return e(this, new Q(d, m), h, c);
    }, o.dividedToIntegerBy = o.idiv = function(d, m) {
      return e(this, new Q(d, m), 0, 1);
    }, o.exponentiatedBy = o.pow = function(d, m) {
      var _, x, b, U, T, M, H, O, K, z = this;
      if (d = new Q(d), d.c && !d.isInteger()) throw Error(te + "Exponent not an integer: " + W(d));
      if (m != null && (m = new Q(m)), M = d.e > 14, !z.c || !z.c[0] || z.c[0] == 1 && !z.e && z.c.length == 1 || !d.c || !d.c[0]) return K = new Q(Math.pow(+W(z), M ? d.s * (2 - br(d)) : +W(d))), m ? K.mod(m) : K;
      if (H = d.s < 0, m) {
        if (m.c ? !m.c[0] : !m.s) return new Q(NaN);
        x = !H && z.isInteger() && m.isInteger(), x && (z = z.mod(m));
      } else {
        if (d.e > 9 && (z.e > 0 || z.e < -1 || (z.e == 0 ? z.c[0] > 1 || M && z.c[1] >= 24e7 : z.c[0] < 8e13 || M && z.c[0] <= 9999975e7))) return U = z.s < 0 && br(d) ? -0 : 0, z.e > -1 && (U = 1 / U), new Q(H ? 1 / U : U);
        G && (U = Zi(G / pA + 2));
      }
      for (M ? (_ = new Q(0.5), H && (d.s = 1), O = br(d)) : (b = Math.abs(+W(d)), O = b % 2), K = new Q(u); ; ) {
        if (O) {
          if (K = K.times(z), !K.c) break;
          U ? K.c.length > U && (K.c.length = U) : x && (K = K.mod(m));
        }
        if (b) {
          if (b = oe(b / 2), b === 0) break;
          O = b % 2;
        } else if (d = d.times(_), j(d, d.e + 1, 1), d.e > 14) O = br(d);
        else {
          if (b = +W(d), b === 0) break;
          O = b % 2;
        }
        z = z.times(z), U ? z.c && z.c.length > U && (z.c.length = U) : x && (z = z.mod(m));
      }
      return x ? K : (H && (K = u.div(K)), m ? K.mod(m) : U ? j(K, G, c, T) : K);
    }, o.integerValue = function(d) {
      var m = new Q(this);
      return d == null ? d = c : vA(d, 0, 8), j(m, m.e + 1, d);
    }, o.isEqualTo = o.eq = function(d, m) {
      return nt(this, new Q(d, m)) === 0;
    }, o.isFinite = function() {
      return !!this.c;
    }, o.isGreaterThan = o.gt = function(d, m) {
      return nt(this, new Q(d, m)) > 0;
    }, o.isGreaterThanOrEqualTo = o.gte = function(d, m) {
      return (m = nt(this, new Q(d, m))) === 1 || m === 0;
    }, o.isInteger = function() {
      return !!this.c && ue(this.e / pA) > this.c.length - 2;
    }, o.isLessThan = o.lt = function(d, m) {
      return nt(this, new Q(d, m)) < 0;
    }, o.isLessThanOrEqualTo = o.lte = function(d, m) {
      return (m = nt(this, new Q(d, m))) === -1 || m === 0;
    }, o.isNaN = function() {
      return !this.s;
    }, o.isNegative = function() {
      return this.s < 0;
    }, o.isPositive = function() {
      return this.s > 0;
    }, o.isZero = function() {
      return !!this.c && this.c[0] == 0;
    }, o.minus = function(d, m) {
      var _, x, b, U, T = this, M = T.s;
      if (d = new Q(d, m), m = d.s, !M || !m) return new Q(NaN);
      if (M != m) return d.s = -m, T.plus(d);
      var H = T.e / pA, O = d.e / pA, K = T.c, z = d.c;
      if (!H || !O) {
        if (!K || !z) return K ? (d.s = -m, d) : new Q(z ? T : NaN);
        if (!K[0] || !z[0]) return z[0] ? (d.s = -m, d) : new Q(K[0] ? T : c == 3 ? -0 : 0);
      }
      if (H = ue(H), O = ue(O), K = K.slice(), M = H - O) {
        for ((U = M < 0) ? (M = -M, b = K) : (O = H, b = z), b.reverse(), m = M; m--; b.push(0)) ;
        b.reverse();
      } else for (x = (U = (M = K.length) < (m = z.length)) ? M : m, M = m = 0; m < x; m++) if (K[m] != z[m]) {
        U = K[m] < z[m];
        break;
      }
      if (U && (b = K, K = z, z = b, d.s = -d.s), m = (x = z.length) - (_ = K.length), m > 0) for (; m--; K[_++] = 0) ;
      for (m = me - 1; x > M; ) {
        if (K[--x] < z[x]) {
          for (_ = x; _ && !K[--_]; K[_] = m) ;
          --K[_], K[x] += me;
        }
        K[x] -= z[x];
      }
      for (; K[0] == 0; K.splice(0, 1), --O) ;
      return K[0] ? Z(d, K, O) : (d.s = c == 3 ? -1 : 1, d.c = [d.e = 0], d);
    }, o.modulo = o.mod = function(d, m) {
      var _, x, b = this;
      return d = new Q(d, m), !b.c || !d.s || d.c && !d.c[0] ? new Q(NaN) : !d.c || b.c && !b.c[0] ? new Q(b) : (k == 9 ? (x = d.s, d.s = 1, _ = e(b, d, 0, 3), d.s = x, _.s *= x) : _ = e(b, d, 0, k), d = b.minus(_.times(d)), !d.c[0] && k == 1 && (d.s = b.s), d);
    }, o.multipliedBy = o.times = function(d, m) {
      var _, x, b, U, T, M, H, O, K, z, lA, hA, gA, bA, TA, wA = this, _A = wA.c, WA = (d = new Q(d, m)).c;
      if (!_A || !WA || !_A[0] || !WA[0]) return !wA.s || !d.s || _A && !_A[0] && !WA || WA && !WA[0] && !_A ? d.c = d.e = d.s = null : (d.s *= wA.s, !_A || !WA ? d.c = d.e = null : (d.c = [0], d.e = 0)), d;
      for (x = ue(wA.e / pA) + ue(d.e / pA), d.s *= wA.s, H = _A.length, z = WA.length, H < z && (gA = _A, _A = WA, WA = gA, b = H, H = z, z = b), b = H + z, gA = []; b--; gA.push(0)) ;
      for (bA = me, TA = Xe, b = z; --b >= 0; ) {
        for (_ = 0, lA = WA[b] % TA, hA = WA[b] / TA | 0, T = H, U = b + T; U > b; ) O = _A[--T] % TA, K = _A[T] / TA | 0, M = hA * O + K * lA, O = lA * O + M % TA * TA + gA[U] + _, _ = (O / bA | 0) + (M / TA | 0) + hA * K, gA[U--] = O % bA;
        gA[U] = _;
      }
      return _ ? ++x : gA.splice(0, 1), Z(d, gA, x);
    }, o.negated = function() {
      var d = new Q(this);
      return d.s = -d.s || null, d;
    }, o.plus = function(d, m) {
      var _, x = this, b = x.s;
      if (d = new Q(d, m), m = d.s, !b || !m) return new Q(NaN);
      if (b != m) return d.s = -m, x.minus(d);
      var U = x.e / pA, T = d.e / pA, M = x.c, H = d.c;
      if (!U || !T) {
        if (!M || !H) return new Q(b / 0);
        if (!M[0] || !H[0]) return H[0] ? d : new Q(M[0] ? x : b * 0);
      }
      if (U = ue(U), T = ue(T), M = M.slice(), b = U - T) {
        for (b > 0 ? (T = U, _ = H) : (b = -b, _ = M), _.reverse(); b--; _.push(0)) ;
        _.reverse();
      }
      for (b = M.length, m = H.length, b - m < 0 && (_ = H, H = M, M = _, m = b), b = 0; m; ) b = (M[--m] = M[m] + H[m] + b) / me | 0, M[m] = me === M[m] ? 0 : M[m] % me;
      return b && (M = [b].concat(M), ++T), Z(d, M, T);
    }, o.precision = o.sd = function(d, m) {
      var _, x, b, U = this;
      if (d != null && d !== !!d) return vA(d, 1, OA), m == null ? m = c : vA(m, 0, 8), j(new Q(U), d, m);
      if (!(_ = U.c)) return null;
      if (b = _.length - 1, x = b * pA + 1, b = _[b]) {
        for (; b % 10 == 0; b /= 10, x--) ;
        for (b = _[0]; b >= 10; b /= 10, x++) ;
      }
      return d && U.e + 1 > x && (x = U.e + 1), x;
    }, o.shiftedBy = function(d) {
      return vA(d, -qi, qi), this.times("1e" + d);
    }, o.squareRoot = o.sqrt = function() {
      var d, m, _, x, b, U = this, T = U.c, M = U.s, H = U.e, O = h + 4, K = new Q("0.5");
      if (M !== 1 || !T || !T[0]) return new Q(!M || M < 0 && (!T || T[0]) ? NaN : T ? U : 1 / 0);
      if (M = Math.sqrt(+W(U)), M == 0 || M == 1 / 0 ? (m = le(T), (m.length + H) % 2 == 0 && (m += "0"), M = Math.sqrt(+m), H = ue((H + 1) / 2) - (H < 0 || H % 2), M == 1 / 0 ? m = "5e" + H : (m = M.toExponential(), m = m.slice(0, m.indexOf("e") + 1) + H), _ = new Q(m)) : _ = new Q(M + ""), _.c[0]) {
        for (H = _.e, M = H + O, M < 3 && (M = 0); ; ) if (b = _, _ = K.times(b.plus(e(U, b, O, 1))), le(b.c).slice(0, M) === (m = le(_.c)).slice(0, M)) if (_.e < H && --M, m = m.slice(M - 3, M + 1), m == "9999" || !x && m == "4999") {
          if (!x && (j(b, b.e + h + 2, 0), b.times(b).eq(U))) {
            _ = b;
            break;
          }
          O += 4, M += 4, x = 1;
        } else {
          (!+m || !+m.slice(1) && m.charAt(0) == "5") && (j(_, _.e + h + 2, 1), d = !_.times(_).eq(U));
          break;
        }
      }
      return j(_, _.e + h + 1, c, d);
    }, o.toExponential = function(d, m) {
      return d != null && (vA(d, 0, OA), d++), S(this, d, m, 1);
    }, o.toFixed = function(d, m) {
      return d != null && (vA(d, 0, OA), d = d + this.e + 1), S(this, d, m);
    }, o.toFormat = function(d, m, _) {
      var x, b = this;
      if (_ == null) d != null && m && typeof m == "object" ? (_ = m, m = null) : d && typeof d == "object" ? (_ = d, d = m = null) : _ = J;
      else if (typeof _ != "object") throw Error(te + "Argument not an object: " + _);
      if (x = b.toFixed(d, m), b.c) {
        var U, T = x.split("."), M = +_.groupSize, H = +_.secondaryGroupSize, O = _.groupSeparator || "", K = T[0], z = T[1], lA = b.s < 0, hA = lA ? K.slice(1) : K, gA = hA.length;
        if (H && (U = M, M = H, H = U, gA -= U), M > 0 && gA > 0) {
          for (U = gA % M || M, K = hA.substr(0, U); U < gA; U += M) K += O + hA.substr(U, M);
          H > 0 && (K += O + hA.slice(U)), lA && (K = "-" + K);
        }
        x = z ? K + (_.decimalSeparator || "") + ((H = +_.fractionGroupSize) ? z.replace(new RegExp("\\d{" + H + "}\\B", "g"), "$&" + (_.fractionGroupSeparator || "")) : z) : K;
      }
      return (_.prefix || "") + x + (_.suffix || "");
    }, o.toFraction = function(d) {
      var m, _, x, b, U, T, M, H, O, K, z, lA, hA = this, gA = hA.c;
      if (d != null && (M = new Q(d), !M.isInteger() && (M.c || M.s !== 1) || M.lt(u))) throw Error(te + "Argument " + (M.isInteger() ? "out of range: " : "not an integer: ") + W(M));
      if (!gA) return new Q(hA);
      for (m = new Q(u), O = _ = new Q(u), x = H = new Q(u), lA = le(gA), U = m.e = lA.length - hA.e - 1, m.c[0] = $i[(T = U % pA) < 0 ? pA + T : T], d = !d || M.comparedTo(m) > 0 ? U > 0 ? m : O : M, T = y, y = 1 / 0, M = new Q(lA), H.c[0] = 0; K = e(M, m, 0, 1), b = _.plus(K.times(x)), b.comparedTo(d) != 1; ) _ = x, x = b, O = H.plus(K.times(b = O)), H = b, m = M.minus(K.times(b = m)), M = b;
      return b = e(d.minus(_), x, 0, 1), H = H.plus(b.times(O)), _ = _.plus(b.times(x)), H.s = O.s = hA.s, U = U * 2, z = e(O, x, U, c).minus(hA).abs().comparedTo(e(H, _, U, c).minus(hA).abs()) < 1 ? [O, x] : [H, _], y = T, z;
    }, o.toNumber = function() {
      return +W(this);
    }, o.toPrecision = function(d, m) {
      return d != null && vA(d, 1, OA), S(this, d, m, 2);
    }, o.toString = function(d) {
      var m, _ = this, x = _.s, b = _.e;
      return b === null ? x ? (m = "Infinity", x < 0 && (m = "-" + m)) : m = "NaN" : (d == null ? m = b <= p || b >= f ? xr(le(_.c), b) : Se(le(_.c), b, "0") : d === 10 && rA ? (_ = j(new Q(_), h + b + 1, c), m = Se(le(_.c), _.e, "0")) : (vA(d, 2, eA.length, "Base"), m = t(Se(le(_.c), b, "0"), 10, d, x, !0)), x < 0 && _.c[0] && (m = "-" + m)), m;
    }, o.valueOf = o.toJSON = function() {
      return W(this);
    }, o._isBigNumber = !0, o[Symbol.toStringTag] = "BigNumber", o[Symbol.for("nodejs.util.inspect.custom")] = o.valueOf, A != null && Q.set(A), Q;
  }
  function ue(A) {
    var e = A | 0;
    return A > 0 || A === e ? e : e - 1;
  }
  function le(A) {
    for (var e, t, i = 1, o = A.length, u = A[0] + ""; i < o; ) {
      for (e = A[i++] + "", t = pA - e.length; t--; e = "0" + e) ;
      u += e;
    }
    for (o = u.length; u.charCodeAt(--o) === 48; ) ;
    return u.slice(0, o + 1 || 1);
  }
  function nt(A, e) {
    var t, i, o = A.c, u = e.c, h = A.s, c = e.s, p = A.e, f = e.e;
    if (!h || !c) return null;
    if (t = o && !o[0], i = u && !u[0], t || i) return t ? i ? 0 : -c : h;
    if (h != c) return h;
    if (t = h < 0, i = p == f, !o || !u) return i ? 0 : !o ^ t ? 1 : -1;
    if (!i) return p > f ^ t ? 1 : -1;
    for (c = (p = o.length) < (f = u.length) ? p : f, h = 0; h < c; h++) if (o[h] != u[h]) return o[h] > u[h] ^ t ? 1 : -1;
    return p == f ? 0 : p > f ^ t ? 1 : -1;
  }
  function vA(A, e, t, i) {
    if (A < e || A > t || A !== oe(A)) throw Error(te + (i || "Argument") + (typeof A == "number" ? A < e || A > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(A));
  }
  function br(A) {
    var e = A.c.length - 1;
    return ue(A.e / pA) == e && A.c[e] % 2 != 0;
  }
  function xr(A, e) {
    return (A.length > 1 ? A.charAt(0) + "." + A.slice(1) : A) + (e < 0 ? "e" : "e+") + e;
  }
  function Se(A, e, t) {
    var i, o;
    if (e < 0) {
      for (o = t + "."; ++e; o += t) ;
      A = o + A;
    } else if (i = A.length, ++e > i) {
      for (o = t, e -= i; --e; o += t) ;
      A += o;
    } else e < i && (A = A.slice(0, e) + "." + A.slice(e));
    return A;
  }
  var Uc = Za(), ve = Uc, Lc = class {
    constructor(A) {
      cA(this, "key");
      cA(this, "left", null);
      cA(this, "right", null);
      this.key = A;
    }
  }, Rt = class extends Lc {
    constructor(A) {
      super(A);
    }
  }, bc = class {
    constructor() {
      cA(this, "size", 0);
      cA(this, "modificationCount", 0);
      cA(this, "splayCount", 0);
    }
    splay(A) {
      let e = this.root;
      if (e == null) return this.compare(A, A), -1;
      let t = null, i = null, o = null, u = null, h = e, c = this.compare, p;
      for (; ; ) if (p = c(h.key, A), p > 0) {
        let f = h.left;
        if (f == null || (p = c(f.key, A), p > 0 && (h.left = f.right, f.right = h, h = f, f = h.left, f == null))) break;
        t == null ? i = h : t.left = h, t = h, h = f;
      } else if (p < 0) {
        let f = h.right;
        if (f == null || (p = c(f.key, A), p < 0 && (h.right = f.left, f.left = h, h = f, f = h.right, f == null))) break;
        o == null ? u = h : o.right = h, o = h, h = f;
      } else break;
      return o != null && (o.right = h.left, h.left = u), t != null && (t.left = h.right, h.right = i), this.root !== h && (this.root = h, this.splayCount++), p;
    }
    splayMin(A) {
      let e = A, t = e.left;
      for (; t != null; ) {
        let i = t;
        e.left = i.right, i.right = e, e = i, t = e.left;
      }
      return e;
    }
    splayMax(A) {
      let e = A, t = e.right;
      for (; t != null; ) {
        let i = t;
        e.right = i.left, i.left = e, e = i, t = e.right;
      }
      return e;
    }
    _delete(A) {
      if (this.root == null || this.splay(A) != 0) return null;
      let e = this.root, t = e, i = e.left;
      if (this.size--, i == null) this.root = e.right;
      else {
        let o = e.right;
        e = this.splayMax(i), e.right = o, this.root = e;
      }
      return this.modificationCount++, t;
    }
    addNewRoot(A, e) {
      this.size++, this.modificationCount++;
      let t = this.root;
      if (t == null) {
        this.root = A;
        return;
      }
      e < 0 ? (A.left = t, A.right = t.right, t.right = null) : (A.right = t, A.left = t.left, t.left = null), this.root = A;
    }
    _first() {
      let A = this.root;
      return A == null ? null : (this.root = this.splayMin(A), this.root);
    }
    _last() {
      let A = this.root;
      return A == null ? null : (this.root = this.splayMax(A), this.root);
    }
    clear() {
      this.root = null, this.size = 0, this.modificationCount++;
    }
    has(A) {
      return this.validKey(A) && this.splay(A) == 0;
    }
    defaultCompare() {
      return (A, e) => A < e ? -1 : A > e ? 1 : 0;
    }
    wrap() {
      return { getRoot: () => this.root, setRoot: (A) => {
        this.root = A;
      }, getSize: () => this.size, getModificationCount: () => this.modificationCount, getSplayCount: () => this.splayCount, setSplayCount: (A) => {
        this.splayCount = A;
      }, splay: (A) => this.splay(A), has: (A) => this.has(A) };
    }
  }, Mr = class zt extends bc {
    constructor(t, i) {
      super();
      cA(this, "root", null);
      cA(this, "compare");
      cA(this, "validKey");
      cA(this, hs, "[object Set]");
      this.compare = t ?? this.defaultCompare(), this.validKey = i ?? ((o) => o != null && o != null);
    }
    delete(t) {
      return this.validKey(t) ? this._delete(t) != null : !1;
    }
    deleteAll(t) {
      for (let i of t) this.delete(i);
    }
    forEach(t) {
      let i = this[Symbol.iterator](), o;
      for (; o = i.next(), !o.done; ) t(o.value, o.value, this);
    }
    add(t) {
      let i = this.splay(t);
      return i != 0 && this.addNewRoot(new Rt(t), i), this;
    }
    addAndReturn(t) {
      let i = this.splay(t);
      return i != 0 && this.addNewRoot(new Rt(t), i), this.root.key;
    }
    addAll(t) {
      for (let i of t) this.add(i);
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
    lastBefore(t) {
      if (t == null) throw "Invalid arguments(s)";
      if (this.root == null) return null;
      if (this.splay(t) < 0) return this.root.key;
      let i = this.root.left;
      if (i == null) return null;
      let o = i.right;
      for (; o != null; ) i = o, o = i.right;
      return i.key;
    }
    firstAfter(t) {
      if (t == null) throw "Invalid arguments(s)";
      if (this.root == null) return null;
      if (this.splay(t) > 0) return this.root.key;
      let i = this.root.right;
      if (i == null) return null;
      let o = i.left;
      for (; o != null; ) i = o, o = i.left;
      return i.key;
    }
    retainAll(t) {
      let i = new zt(this.compare, this.validKey), o = this.modificationCount;
      for (let u of t) {
        if (o != this.modificationCount) throw "Concurrent modification during iteration.";
        this.validKey(u) && this.splay(u) == 0 && i.add(this.root.key);
      }
      i.size != this.size && (this.root = i.root, this.size = i.size, this.modificationCount++);
    }
    lookup(t) {
      return !this.validKey(t) || this.splay(t) != 0 ? null : this.root.key;
    }
    intersection(t) {
      let i = new zt(this.compare, this.validKey);
      for (let o of this) t.has(o) && i.add(o);
      return i;
    }
    difference(t) {
      let i = new zt(this.compare, this.validKey);
      for (let o of this) t.has(o) || i.add(o);
      return i;
    }
    union(t) {
      let i = this.clone();
      return i.addAll(t), i;
    }
    clone() {
      let t = new zt(this.compare, this.validKey);
      return t.size = this.size, t.root = this.copyNode(this.root), t;
    }
    copyNode(t) {
      if (t == null) return null;
      function i(u, h) {
        let c, p;
        do {
          if (c = u.left, p = u.right, c != null) {
            let f = new Rt(c.key);
            h.left = f, i(c, f);
          }
          if (p != null) {
            let f = new Rt(p.key);
            h.right = f, u = p, h = f;
          }
        } while (p != null);
      }
      let o = new Rt(t.key);
      return i(t, o), o;
    }
    toSet() {
      return this.clone();
    }
    entries() {
      return new Mc(this.wrap());
    }
    keys() {
      return this[Symbol.iterator]();
    }
    values() {
      return this[Symbol.iterator]();
    }
    [(cs = Symbol.iterator, hs = Symbol.toStringTag, cs)]() {
      return new xc(this.wrap());
    }
  }, qa = class {
    constructor(A) {
      cA(this, "tree");
      cA(this, "path", new Array());
      cA(this, "modificationCount", null);
      cA(this, "splayCount");
      this.tree = A, this.splayCount = A.getSplayCount();
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
    }
    current() {
      if (!this.path.length) return null;
      let A = this.path[this.path.length - 1];
      return this.getValue(A);
    }
    rebuildPath(A) {
      this.path.splice(0, this.path.length), this.tree.splay(A), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
    }
    findLeftMostDescendent(A) {
      for (; A != null; ) this.path.push(A), A = A.left;
    }
    moveNext() {
      if (this.modificationCount != this.tree.getModificationCount()) {
        if (this.modificationCount == null) {
          this.modificationCount = this.tree.getModificationCount();
          let t = this.tree.getRoot();
          for (; t != null; ) this.path.push(t), t = t.left;
          return this.path.length > 0;
        }
        throw "Concurrent modification during iteration.";
      }
      if (!this.path.length) return !1;
      this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
      let A = this.path[this.path.length - 1], e = A.right;
      if (e != null) {
        for (; e != null; ) this.path.push(e), e = e.left;
        return !0;
      }
      for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === A; ) A = this.path.pop();
      return this.path.length > 0;
    }
  }, xc = class extends qa {
    getValue(A) {
      return A.key;
    }
  }, Mc = class extends qa {
    getValue(A) {
      return [A.key, A.key];
    }
  }, $a = (A) => () => A, An = (A) => {
    let e = A ? (t, i) => i.minus(t).abs().isLessThanOrEqualTo(A) : $a(!1);
    return (t, i) => e(t, i) ? 0 : t.comparedTo(i);
  };
  function Ic(A) {
    let e = A ? (t, i, o, u, h) => t.exponentiatedBy(2).isLessThanOrEqualTo(u.minus(i).exponentiatedBy(2).plus(h.minus(o).exponentiatedBy(2)).times(A)) : $a(!1);
    return (t, i, o) => {
      let u = t.x, h = t.y, c = o.x, p = o.y, f = h.minus(p).times(i.x.minus(c)).minus(u.minus(c).times(i.y.minus(p)));
      return e(f, u, h, c, p) ? 0 : f.comparedTo(0);
    };
  }
  var kc = (A) => A, Dc = (A) => {
    if (A) {
      let e = new Mr(An(A)), t = new Mr(An(A)), i = (u, h) => h.addAndReturn(u), o = (u) => ({ x: i(u.x, e), y: i(u.y, t) });
      return o({ x: new ve(0), y: new ve(0) }), o;
    }
    return kc;
  }, en = (A) => ({ set: (e) => {
    Te = en(e);
  }, reset: () => en(A), compare: An(A), snap: Dc(A), orient: Ic(A) }), Te = en(), Pt = (A, e) => A.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(A.ur.x) && A.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(A.ur.y), tn = (A, e) => {
    if (e.ur.x.isLessThan(A.ll.x) || A.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(A.ll.y) || A.ur.y.isLessThan(e.ll.y)) return null;
    let t = A.ll.x.isLessThan(e.ll.x) ? e.ll.x : A.ll.x, i = A.ur.x.isLessThan(e.ur.x) ? A.ur.x : e.ur.x, o = A.ll.y.isLessThan(e.ll.y) ? e.ll.y : A.ll.y, u = A.ur.y.isLessThan(e.ur.y) ? A.ur.y : e.ur.y;
    return { ll: { x: t, y: o }, ur: { x: i, y: u } };
  }, Ir = (A, e) => A.x.times(e.y).minus(A.y.times(e.x)), As = (A, e) => A.x.times(e.x).plus(A.y.times(e.y)), kr = (A) => As(A, A).sqrt(), Hc = (A, e, t) => {
    let i = { x: e.x.minus(A.x), y: e.y.minus(A.y) }, o = { x: t.x.minus(A.x), y: t.y.minus(A.y) };
    return Ir(o, i).div(kr(o)).div(kr(i));
  }, Sc = (A, e, t) => {
    let i = { x: e.x.minus(A.x), y: e.y.minus(A.y) }, o = { x: t.x.minus(A.x), y: t.y.minus(A.y) };
    return As(o, i).div(kr(o)).div(kr(i));
  }, es = (A, e, t) => e.y.isZero() ? null : { x: A.x.plus(e.x.div(e.y).times(t.minus(A.y))), y: t }, ts = (A, e, t) => e.x.isZero() ? null : { x: t, y: A.y.plus(e.y.div(e.x).times(t.minus(A.x))) }, Tc = (A, e, t, i) => {
    if (e.x.isZero()) return ts(t, i, A.x);
    if (i.x.isZero()) return ts(A, e, t.x);
    if (e.y.isZero()) return es(t, i, A.y);
    if (i.y.isZero()) return es(A, e, t.y);
    let o = Ir(e, i);
    if (o.isZero()) return null;
    let u = { x: t.x.minus(A.x), y: t.y.minus(A.y) }, h = Ir(u, e).div(o), c = Ir(u, i).div(o), p = A.x.plus(c.times(e.x)), f = t.x.plus(h.times(i.x)), F = A.y.plus(c.times(e.y)), y = t.y.plus(h.times(i.y)), I = p.plus(f).div(2), k = F.plus(y).div(2);
    return { x: I, y: k };
  }, Ue = class fo {
    constructor(e, t) {
      cA(this, "point");
      cA(this, "isLeft");
      cA(this, "segment");
      cA(this, "otherSE");
      cA(this, "consumedBy");
      e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
    }
    static compare(e, t) {
      let i = fo.comparePoints(e.point, t.point);
      return i !== 0 ? i : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : Hr.compare(e.segment, t.segment));
    }
    static comparePoints(e, t) {
      return e.x.isLessThan(t.x) ? -1 : e.x.isGreaterThan(t.x) ? 1 : e.y.isLessThan(t.y) ? -1 : e.y.isGreaterThan(t.y) ? 1 : 0;
    }
    link(e) {
      if (e.point === this.point) throw new Error("Tried to link already linked events");
      let t = e.point.events;
      for (let i = 0, o = t.length; i < o; i++) {
        let u = t[i];
        this.point.events.push(u), u.point = this.point;
      }
      this.checkForConsuming();
    }
    checkForConsuming() {
      let e = this.point.events.length;
      for (let t = 0; t < e; t++) {
        let i = this.point.events[t];
        if (i.segment.consumedBy === void 0) for (let o = t + 1; o < e; o++) {
          let u = this.point.events[o];
          u.consumedBy === void 0 && i.otherSE.point.events === u.otherSE.point.events && i.segment.consume(u.segment);
        }
      }
    }
    getAvailableLinkedEvents() {
      let e = [];
      for (let t = 0, i = this.point.events.length; t < i; t++) {
        let o = this.point.events[t];
        o !== this && !o.segment.ringOut && o.segment.isInResult() && e.push(o);
      }
      return e;
    }
    getLeftmostComparator(e) {
      let t = /* @__PURE__ */ new Map(), i = (o) => {
        let u = o.otherSE;
        t.set(o, { sine: Hc(this.point, e.point, u.point), cosine: Sc(this.point, e.point, u.point) });
      };
      return (o, u) => {
        t.has(o) || i(o), t.has(u) || i(u);
        let { sine: h, cosine: c } = t.get(o), { sine: p, cosine: f } = t.get(u);
        return h.isGreaterThanOrEqualTo(0) && p.isGreaterThanOrEqualTo(0) ? c.isLessThan(f) ? 1 : c.isGreaterThan(f) ? -1 : 0 : h.isLessThan(0) && p.isLessThan(0) ? c.isLessThan(f) ? -1 : c.isGreaterThan(f) ? 1 : 0 : p.isLessThan(h) ? -1 : p.isGreaterThan(h) ? 1 : 0;
      };
    }
  }, Kc = class kn {
    constructor(e) {
      cA(this, "events");
      cA(this, "poly");
      cA(this, "_isExteriorRing");
      cA(this, "_enclosingRing");
      this.events = e;
      for (let t = 0, i = e.length; t < i; t++) e[t].segment.ringOut = this;
      this.poly = null;
    }
    static factory(e) {
      let t = [];
      for (let i = 0, o = e.length; i < o; i++) {
        let u = e[i];
        if (!u.isInResult() || u.ringOut) continue;
        let h = null, c = u.leftSE, p = u.rightSE, f = [c], F = c.point, y = [];
        for (; h = c, c = p, f.push(c), c.point !== F; ) for (; ; ) {
          let I = c.getAvailableLinkedEvents();
          if (I.length === 0) {
            let J = f[0].point, eA = f[f.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${J.x}, ${J.y}]. Last matching segment found ends at [${eA.x}, ${eA.y}].`);
          }
          if (I.length === 1) {
            p = I[0].otherSE;
            break;
          }
          let k = null;
          for (let J = 0, eA = y.length; J < eA; J++) if (y[J].point === c.point) {
            k = J;
            break;
          }
          if (k !== null) {
            let J = y.splice(k)[0], eA = f.splice(J.index);
            eA.unshift(eA[0].otherSE), t.push(new kn(eA.reverse()));
            continue;
          }
          y.push({ index: f.length, point: c.point });
          let G = c.getLeftmostComparator(h);
          p = I.sort(G)[0].otherSE;
          break;
        }
        t.push(new kn(f));
      }
      return t;
    }
    getGeom() {
      let e = this.events[0].point, t = [e];
      for (let f = 1, F = this.events.length - 1; f < F; f++) {
        let y = this.events[f].point, I = this.events[f + 1].point;
        Te.orient(y, e, I) !== 0 && (t.push(y), e = y);
      }
      if (t.length === 1) return null;
      let i = t[0], o = t[1];
      Te.orient(i, e, o) === 0 && t.shift(), t.push(t[0]);
      let u = this.isExteriorRing() ? 1 : -1, h = this.isExteriorRing() ? 0 : t.length - 1, c = this.isExteriorRing() ? t.length : -1, p = [];
      for (let f = h; f != c; f += u) p.push([t[f].x.toNumber(), t[f].y.toNumber()]);
      return p;
    }
    isExteriorRing() {
      if (this._isExteriorRing === void 0) {
        let e = this.enclosingRing();
        this._isExteriorRing = e ? !e.isExteriorRing() : !0;
      }
      return this._isExteriorRing;
    }
    enclosingRing() {
      return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
    }
    _calcEnclosingRing() {
      var o, u;
      let e = this.events[0];
      for (let h = 1, c = this.events.length; h < c; h++) {
        let p = this.events[h];
        Ue.compare(e, p) > 0 && (e = p);
      }
      let t = e.segment.prevInResult(), i = t ? t.prevInResult() : null;
      for (; ; ) {
        if (!t) return null;
        if (!i) return t.ringOut;
        if (i.ringOut !== t.ringOut) return ((o = i.ringOut) == null ? void 0 : o.enclosingRing()) !== t.ringOut ? t.ringOut : (u = t.ringOut) == null ? void 0 : u.enclosingRing();
        t = i.prevInResult(), i = t ? t.prevInResult() : null;
      }
    }
  }, rs = class {
    constructor(A) {
      cA(this, "exteriorRing");
      cA(this, "interiorRings");
      this.exteriorRing = A, A.poly = this, this.interiorRings = [];
    }
    addInterior(A) {
      this.interiorRings.push(A), A.poly = this;
    }
    getGeom() {
      let A = this.exteriorRing.getGeom();
      if (A === null) return null;
      let e = [A];
      for (let t = 0, i = this.interiorRings.length; t < i; t++) {
        let o = this.interiorRings[t].getGeom();
        o !== null && e.push(o);
      }
      return e;
    }
  }, Oc = class {
    constructor(A) {
      cA(this, "rings");
      cA(this, "polys");
      this.rings = A, this.polys = this._composePolys(A);
    }
    getGeom() {
      let A = [];
      for (let e = 0, t = this.polys.length; e < t; e++) {
        let i = this.polys[e].getGeom();
        i !== null && A.push(i);
      }
      return A;
    }
    _composePolys(A) {
      var t;
      let e = [];
      for (let i = 0, o = A.length; i < o; i++) {
        let u = A[i];
        if (!u.poly) if (u.isExteriorRing()) e.push(new rs(u));
        else {
          let h = u.enclosingRing();
          h != null && h.poly || e.push(new rs(h)), (t = h == null ? void 0 : h.poly) == null || t.addInterior(u);
        }
      }
      return e;
    }
  }, Rc = class {
    constructor(A, e = Hr.compare) {
      cA(this, "queue");
      cA(this, "tree");
      cA(this, "segments");
      this.queue = A, this.tree = new Mr(e), this.segments = [];
    }
    process(A) {
      let e = A.segment, t = [];
      if (A.consumedBy) return A.isLeft ? this.queue.delete(A.otherSE) : this.tree.delete(e), t;
      A.isLeft && this.tree.add(e);
      let i = e, o = e;
      do
        i = this.tree.lastBefore(i);
      while (i != null && i.consumedBy != null);
      do
        o = this.tree.firstAfter(o);
      while (o != null && o.consumedBy != null);
      if (A.isLeft) {
        let u = null;
        if (i) {
          let c = i.getIntersection(e);
          if (c !== null && (e.isAnEndpoint(c) || (u = c), !i.isAnEndpoint(c))) {
            let p = this._splitSafely(i, c);
            for (let f = 0, F = p.length; f < F; f++) t.push(p[f]);
          }
        }
        let h = null;
        if (o) {
          let c = o.getIntersection(e);
          if (c !== null && (e.isAnEndpoint(c) || (h = c), !o.isAnEndpoint(c))) {
            let p = this._splitSafely(o, c);
            for (let f = 0, F = p.length; f < F; f++) t.push(p[f]);
          }
        }
        if (u !== null || h !== null) {
          let c = null;
          u === null ? c = h : h === null ? c = u : c = Ue.comparePoints(u, h) <= 0 ? u : h, this.queue.delete(e.rightSE), t.push(e.rightSE);
          let p = e.split(c);
          for (let f = 0, F = p.length; f < F; f++) t.push(p[f]);
        }
        t.length > 0 ? (this.tree.delete(e), t.push(A)) : (this.segments.push(e), e.prev = i);
      } else {
        if (i && o) {
          let u = i.getIntersection(o);
          if (u !== null) {
            if (!i.isAnEndpoint(u)) {
              let h = this._splitSafely(i, u);
              for (let c = 0, p = h.length; c < p; c++) t.push(h[c]);
            }
            if (!o.isAnEndpoint(u)) {
              let h = this._splitSafely(o, u);
              for (let c = 0, p = h.length; c < p; c++) t.push(h[c]);
            }
          }
        }
        this.tree.delete(e);
      }
      return t;
    }
    _splitSafely(A, e) {
      this.tree.delete(A);
      let t = A.rightSE;
      this.queue.delete(t);
      let i = A.split(e);
      return i.push(t), A.consumedBy === void 0 && this.tree.add(A), i;
    }
  }, Pc = class {
    constructor() {
      cA(this, "type");
      cA(this, "numMultiPolys");
    }
    run(A, e, t) {
      Gt.type = A;
      let i = [new ns(e, !0)];
      for (let p = 0, f = t.length; p < f; p++) i.push(new ns(t[p], !1));
      if (Gt.numMultiPolys = i.length, Gt.type === "difference") {
        let p = i[0], f = 1;
        for (; f < i.length; ) tn(i[f].bbox, p.bbox) !== null ? f++ : i.splice(f, 1);
      }
      if (Gt.type === "intersection") for (let p = 0, f = i.length; p < f; p++) {
        let F = i[p];
        for (let y = p + 1, I = i.length; y < I; y++) if (tn(F.bbox, i[y].bbox) === null) return [];
      }
      let o = new Mr(Ue.compare);
      for (let p = 0, f = i.length; p < f; p++) {
        let F = i[p].getSweepEvents();
        for (let y = 0, I = F.length; y < I; y++) o.add(F[y]);
      }
      let u = new Rc(o), h = null;
      for (o.size != 0 && (h = o.first(), o.delete(h)); h; ) {
        let p = u.process(h);
        for (let f = 0, F = p.length; f < F; f++) {
          let y = p[f];
          y.consumedBy === void 0 && o.add(y);
        }
        o.size != 0 ? (h = o.first(), o.delete(h)) : h = null;
      }
      Te.reset();
      let c = Kc.factory(u.segments);
      return new Oc(c).getGeom();
    }
  }, Gt = new Pc(), Dr = Gt, Gc = 0, Hr = class li {
    constructor(e, t, i, o) {
      cA(this, "id");
      cA(this, "leftSE");
      cA(this, "rightSE");
      cA(this, "rings");
      cA(this, "windings");
      cA(this, "ringOut");
      cA(this, "consumedBy");
      cA(this, "prev");
      cA(this, "_prevInResult");
      cA(this, "_beforeState");
      cA(this, "_afterState");
      cA(this, "_isInResult");
      this.id = ++Gc, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = i, this.windings = o;
    }
    static compare(e, t) {
      let i = e.leftSE.point.x, o = t.leftSE.point.x, u = e.rightSE.point.x, h = t.rightSE.point.x;
      if (h.isLessThan(i)) return 1;
      if (u.isLessThan(o)) return -1;
      let c = e.leftSE.point.y, p = t.leftSE.point.y, f = e.rightSE.point.y, F = t.rightSE.point.y;
      if (i.isLessThan(o)) {
        if (p.isLessThan(c) && p.isLessThan(f)) return 1;
        if (p.isGreaterThan(c) && p.isGreaterThan(f)) return -1;
        let y = e.comparePoint(t.leftSE.point);
        if (y < 0) return 1;
        if (y > 0) return -1;
        let I = t.comparePoint(e.rightSE.point);
        return I !== 0 ? I : -1;
      }
      if (i.isGreaterThan(o)) {
        if (c.isLessThan(p) && c.isLessThan(F)) return -1;
        if (c.isGreaterThan(p) && c.isGreaterThan(F)) return 1;
        let y = t.comparePoint(e.leftSE.point);
        if (y !== 0) return y;
        let I = e.comparePoint(t.rightSE.point);
        return I < 0 ? 1 : I > 0 ? -1 : 1;
      }
      if (c.isLessThan(p)) return -1;
      if (c.isGreaterThan(p)) return 1;
      if (u.isLessThan(h)) {
        let y = t.comparePoint(e.rightSE.point);
        if (y !== 0) return y;
      }
      if (u.isGreaterThan(h)) {
        let y = e.comparePoint(t.rightSE.point);
        if (y < 0) return 1;
        if (y > 0) return -1;
      }
      if (!u.eq(h)) {
        let y = f.minus(c), I = u.minus(i), k = F.minus(p), G = h.minus(o);
        if (y.isGreaterThan(I) && k.isLessThan(G)) return 1;
        if (y.isLessThan(I) && k.isGreaterThan(G)) return -1;
      }
      return u.isGreaterThan(h) ? 1 : u.isLessThan(h) || f.isLessThan(F) ? -1 : f.isGreaterThan(F) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
    }
    static fromRing(e, t, i) {
      let o, u, h, c = Ue.comparePoints(e, t);
      if (c < 0) o = e, u = t, h = 1;
      else if (c > 0) o = t, u = e, h = -1;
      else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
      let p = new Ue(o, !0), f = new Ue(u, !1);
      return new li(p, f, [i], [h]);
    }
    replaceRightSE(e) {
      this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
    }
    bbox() {
      let e = this.leftSE.point.y, t = this.rightSE.point.y;
      return { ll: { x: this.leftSE.point.x, y: e.isLessThan(t) ? e : t }, ur: { x: this.rightSE.point.x, y: e.isGreaterThan(t) ? e : t } };
    }
    vector() {
      return { x: this.rightSE.point.x.minus(this.leftSE.point.x), y: this.rightSE.point.y.minus(this.leftSE.point.y) };
    }
    isAnEndpoint(e) {
      return e.x.eq(this.leftSE.point.x) && e.y.eq(this.leftSE.point.y) || e.x.eq(this.rightSE.point.x) && e.y.eq(this.rightSE.point.y);
    }
    comparePoint(e) {
      return Te.orient(this.leftSE.point, e, this.rightSE.point);
    }
    getIntersection(e) {
      let t = this.bbox(), i = e.bbox(), o = tn(t, i);
      if (o === null) return null;
      let u = this.leftSE.point, h = this.rightSE.point, c = e.leftSE.point, p = e.rightSE.point, f = Pt(t, c) && this.comparePoint(c) === 0, F = Pt(i, u) && e.comparePoint(u) === 0, y = Pt(t, p) && this.comparePoint(p) === 0, I = Pt(i, h) && e.comparePoint(h) === 0;
      if (F && f) return I && !y ? h : !I && y ? p : null;
      if (F) return y && u.x.eq(p.x) && u.y.eq(p.y) ? null : u;
      if (f) return I && h.x.eq(c.x) && h.y.eq(c.y) ? null : c;
      if (I && y) return null;
      if (I) return h;
      if (y) return p;
      let k = Tc(u, this.vector(), c, e.vector());
      return k === null || !Pt(o, k) ? null : Te.snap(k);
    }
    split(e) {
      let t = [], i = e.events !== void 0, o = new Ue(e, !0), u = new Ue(e, !1), h = this.rightSE;
      this.replaceRightSE(u), t.push(u), t.push(o);
      let c = new li(o, h, this.rings.slice(), this.windings.slice());
      return Ue.comparePoints(c.leftSE.point, c.rightSE.point) > 0 && c.swapEvents(), Ue.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (o.checkForConsuming(), u.checkForConsuming()), t;
    }
    swapEvents() {
      let e = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (let t = 0, i = this.windings.length; t < i; t++) this.windings[t] *= -1;
    }
    consume(e) {
      let t = this, i = e;
      for (; t.consumedBy; ) t = t.consumedBy;
      for (; i.consumedBy; ) i = i.consumedBy;
      let o = li.compare(t, i);
      if (o !== 0) {
        if (o > 0) {
          let u = t;
          t = i, i = u;
        }
        if (t.prev === i) {
          let u = t;
          t = i, i = u;
        }
        for (let u = 0, h = i.rings.length; u < h; u++) {
          let c = i.rings[u], p = i.windings[u], f = t.rings.indexOf(c);
          f === -1 ? (t.rings.push(c), t.windings.push(p)) : t.windings[f] += p;
        }
        i.rings = null, i.windings = null, i.consumedBy = t, i.leftSE.consumedBy = t.leftSE, i.rightSE.consumedBy = t.rightSE;
      }
    }
    prevInResult() {
      return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
    }
    beforeState() {
      if (this._beforeState !== void 0) return this._beforeState;
      if (!this.prev) this._beforeState = { rings: [], windings: [], multiPolys: [] };
      else {
        let e = this.prev.consumedBy || this.prev;
        this._beforeState = e.afterState();
      }
      return this._beforeState;
    }
    afterState() {
      if (this._afterState !== void 0) return this._afterState;
      let e = this.beforeState();
      this._afterState = { rings: e.rings.slice(0), windings: e.windings.slice(0), multiPolys: [] };
      let t = this._afterState.rings, i = this._afterState.windings, o = this._afterState.multiPolys;
      for (let c = 0, p = this.rings.length; c < p; c++) {
        let f = this.rings[c], F = this.windings[c], y = t.indexOf(f);
        y === -1 ? (t.push(f), i.push(F)) : i[y] += F;
      }
      let u = [], h = [];
      for (let c = 0, p = t.length; c < p; c++) {
        if (i[c] === 0) continue;
        let f = t[c], F = f.poly;
        if (h.indexOf(F) === -1) if (f.isExterior) u.push(F);
        else {
          h.indexOf(F) === -1 && h.push(F);
          let y = u.indexOf(f.poly);
          y !== -1 && u.splice(y, 1);
        }
      }
      for (let c = 0, p = u.length; c < p; c++) {
        let f = u[c].multiPoly;
        o.indexOf(f) === -1 && o.push(f);
      }
      return this._afterState;
    }
    isInResult() {
      if (this.consumedBy) return !1;
      if (this._isInResult !== void 0) return this._isInResult;
      let e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
      switch (Dr.type) {
        case "union": {
          let i = e.length === 0, o = t.length === 0;
          this._isInResult = i !== o;
          break;
        }
        case "intersection": {
          let i, o;
          e.length < t.length ? (i = e.length, o = t.length) : (i = t.length, o = e.length), this._isInResult = o === Dr.numMultiPolys && i < o;
          break;
        }
        case "xor": {
          let i = Math.abs(e.length - t.length);
          this._isInResult = i % 2 === 1;
          break;
        }
        case "difference": {
          let i = (o) => o.length === 1 && o[0].isSubject;
          this._isInResult = i(e) !== i(t);
          break;
        }
      }
      return this._isInResult;
    }
  }, is = class {
    constructor(A, e, t) {
      cA(this, "poly");
      cA(this, "isExterior");
      cA(this, "segments");
      cA(this, "bbox");
      if (!Array.isArray(A) || A.length === 0) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      if (this.poly = e, this.isExterior = t, this.segments = [], typeof A[0][0] != "number" || typeof A[0][1] != "number") throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let i = Te.snap({ x: new ve(A[0][0]), y: new ve(A[0][1]) });
      this.bbox = { ll: { x: i.x, y: i.y }, ur: { x: i.x, y: i.y } };
      let o = i;
      for (let u = 1, h = A.length; u < h; u++) {
        if (typeof A[u][0] != "number" || typeof A[u][1] != "number") throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
        let c = Te.snap({ x: new ve(A[u][0]), y: new ve(A[u][1]) });
        c.x.eq(o.x) && c.y.eq(o.y) || (this.segments.push(Hr.fromRing(o, c, this)), c.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = c.x), c.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = c.y), c.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = c.x), c.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = c.y), o = c);
      }
      (!i.x.eq(o.x) || !i.y.eq(o.y)) && this.segments.push(Hr.fromRing(o, i, this));
    }
    getSweepEvents() {
      let A = [];
      for (let e = 0, t = this.segments.length; e < t; e++) {
        let i = this.segments[e];
        A.push(i.leftSE), A.push(i.rightSE);
      }
      return A;
    }
  }, Nc = class {
    constructor(A, e) {
      cA(this, "multiPoly");
      cA(this, "exteriorRing");
      cA(this, "interiorRings");
      cA(this, "bbox");
      if (!Array.isArray(A)) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      this.exteriorRing = new is(A[0], this, !0), this.bbox = { ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y }, ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y } }, this.interiorRings = [];
      for (let t = 1, i = A.length; t < i; t++) {
        let o = new is(A[t], this, !1);
        o.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
      }
      this.multiPoly = e;
    }
    getSweepEvents() {
      let A = this.exteriorRing.getSweepEvents();
      for (let e = 0, t = this.interiorRings.length; e < t; e++) {
        let i = this.interiorRings[e].getSweepEvents();
        for (let o = 0, u = i.length; o < u; o++) A.push(i[o]);
      }
      return A;
    }
  }, ns = class {
    constructor(A, e) {
      cA(this, "isSubject");
      cA(this, "polys");
      cA(this, "bbox");
      if (!Array.isArray(A)) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      try {
        typeof A[0][0][0] == "number" && (A = [A]);
      } catch {
      }
      this.polys = [], this.bbox = { ll: { x: new ve(Number.POSITIVE_INFINITY), y: new ve(Number.POSITIVE_INFINITY) }, ur: { x: new ve(Number.NEGATIVE_INFINITY), y: new ve(Number.NEGATIVE_INFINITY) } };
      for (let t = 0, i = A.length; t < i; t++) {
        let o = new Nc(A[t], this);
        o.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
      }
      this.isSubject = e;
    }
    getSweepEvents() {
      let A = [];
      for (let e = 0, t = this.polys.length; e < t; e++) {
        let i = this.polys[e].getSweepEvents();
        for (let o = 0, u = i.length; o < u; o++) A.push(i[o]);
      }
      return A;
    }
  }, Vc = (A, ...e) => Dr.run("intersection", A, e), Xc = (A, ...e) => Dr.run("difference", A, e);
  Te.set;
  function Sr(A) {
    let e = { type: "Feature" };
    return e.geometry = A, e;
  }
  function Tr(A) {
    return A.type === "Feature" ? A.geometry : A;
  }
  function as(A) {
    return A && A.geometry && A.geometry.coordinates ? A.geometry.coordinates : A;
  }
  function Jc(A) {
    return Sr({ type: "LineString", coordinates: A });
  }
  function Yc(A) {
    return Sr({ type: "MultiLineString", coordinates: A });
  }
  function ss(A) {
    return Sr({ type: "Polygon", coordinates: A });
  }
  function os(A) {
    return Sr({ type: "MultiPolygon", coordinates: A });
  }
  function zc(A, e) {
    let t = Tr(A), i = Tr(e), o = Vc(t.coordinates, i.coordinates);
    return o.length === 0 ? null : o.length === 1 ? ss(o[0]) : os(o);
  }
  function jc(A, e) {
    let t = Tr(A), i = Tr(e), o = Xc(t.coordinates, i.coordinates);
    return o.length === 0 ? null : o.length === 1 ? ss(o[0]) : os(o);
  }
  function us(A) {
    return Array.isArray(A) ? 1 + us(A[0]) : -1;
  }
  function Wc(A) {
    A instanceof L.Polyline && (A = A.toGeoJSON(15));
    let e = as(A), t = us(e), i = [];
    return t > 1 ? e.forEach((o) => {
      i.push(Jc(o));
    }) : i.push(A), i;
  }
  function Zc(A) {
    let e = [];
    return A.eachLayer((t) => {
      e.push(as(t.toGeoJSON(15)));
    }), Yc(e);
  }
  VA.Cut = VA.Polygon.extend({ initialize(A) {
    this._map = A, this._shape = "Cut", this.toolbarButtonName = "cutPolygon";
  }, _finishShape() {
    if (this._editedLayers = [], !this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    let A = this._layer.getLatLngs();
    if (A.length <= 2) return;
    let e = L.polygon(A, this.options.pathOptions);
    e._latlngInfos = this._layer._latlngInfo, this.cut(e), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex, this._editedLayers.forEach(({ layer: i, originalLayer: o }) => {
      this._fireCut(o, i, o), this._fireCut(this._map, i, o), o.pm._fireEdit();
    }), this._editedLayers = [];
    let t = this._hintMarker.getLatLng();
    this.disable(), this.options.continueDrawing && (this.enable(), this._hintMarker.setLatLng(t));
  }, cut(A) {
    let e = this._map._layers, t = A._latlngInfos || [];
    Object.keys(e).map((i) => e[i]).filter((i) => i.pm).filter((i) => !i._pmTempLayer).filter((i) => !L.PM.optIn && !i.options.pmIgnore || L.PM.optIn && i.options.pmIgnore === !1).filter((i) => i instanceof L.Polyline).filter((i) => i !== A).filter((i) => i.pm.options.allowCutting).filter((i) => this.options.layersToCut && L.Util.isArray(this.options.layersToCut) && this.options.layersToCut.length > 0 ? this.options.layersToCut.indexOf(i) > -1 : !0).filter((i) => !this._layerGroup.hasLayer(i)).filter((i) => {
      try {
        let o = !!St(A.toGeoJSON(15), i.toGeoJSON(15)).features.length > 0;
        return o || i instanceof L.Polyline && !(i instanceof L.Polygon) ? o : !!zc(A.toGeoJSON(15), i.toGeoJSON(15));
      } catch {
        return i instanceof L.Polygon && console.error("You can't cut polygons with self-intersections"), !1;
      }
    }).forEach((i) => {
      let o;
      if (i instanceof L.Polygon) {
        o = L.polygon(i.getLatLngs());
        let p = o.getLatLngs();
        t.forEach((f) => {
          if (f && f.snapInfo) {
            let { latlng: F } = f, y = this._calcClosestLayer(F, [o]);
            if (y && y.segment && y.distance < this.options.snapDistance) {
              let { segment: I } = y;
              if (I && I.length === 2) {
                let { indexPath: k, parentPath: G, newIndex: J } = L.PM.Utils._getIndexFromSegment(p, I);
                (k.length > 1 ? (0, Ec.default)(p, G) : p).splice(J, 0, F);
              }
            }
          }
        });
      } else o = i;
      let u = this._cutLayer(A, o), h = L.geoJSON(u, i.options);
      h.getLayers().length === 1 && ([h] = h.getLayers()), this._setPane(h, "layerPane");
      let c = h.addTo(this._map.pm._getContainingLayer());
      if (c.pm.enable(i.pm.options), c.pm.disable(), i._pmTempLayer = !0, A._pmTempLayer = !0, i.remove(), i.removeFrom(this._map.pm._getContainingLayer()), A.remove(), A.removeFrom(this._map.pm._getContainingLayer()), c.getLayers && c.getLayers().length === 0 && this._map.pm.removeLayer({ target: c }), c instanceof L.LayerGroup ? (c.eachLayer((p) => {
        this._addDrawnLayerProp(p);
      }), this._addDrawnLayerProp(c)) : this._addDrawnLayerProp(c), this.options.layersToCut && L.Util.isArray(this.options.layersToCut) && this.options.layersToCut.length > 0) {
        let p = this.options.layersToCut.indexOf(i);
        p > -1 && this.options.layersToCut.splice(p, 1);
      }
      this._editedLayers.push({ layer: c, originalLayer: i });
    });
  }, _cutLayer(A, e) {
    let t = L.geoJSON(), i;
    if (e instanceof L.Polygon) i = jc(e.toGeoJSON(15), A.toGeoJSON(15));
    else {
      let o = Wc(e);
      o.forEach((u) => {
        let h = tc(u, A.toGeoJSON(15)), c;
        h && h.features.length > 0 ? c = L.geoJSON(h) : c = L.geoJSON(u), c.getLayers().forEach((p) => {
          Fc(A.toGeoJSON(15), p.toGeoJSON(15)) || p.addTo(t);
        });
      }), o.length > 1 ? i = Zc(t) : i = t.toGeoJSON(15);
    }
    return i;
  }, _change: L.Util.falseFn }), VA.Text = VA.extend({ initialize(A) {
    this._map = A, this._shape = "Text", this.toolbarButtonName = "drawText";
  }, enable(A) {
    L.Util.setOptions(this, A), this._enabled = !0, this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._hintMarker = L.marker(this._map.getCenter(), { interactive: !1, zIndexOffset: 100, icon: L.divIcon({ className: "marker-icon cursor-marker" }) }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(dA("tooltips.placeText"), { permanent: !0, offset: L.point(0, 10), direction: "bottom", opacity: 0.8 }).openTooltip(), this._layer = this._hintMarker, this._map.on("mousemove", this._syncHintMarker, this), this._map.getContainer().classList.add("geoman-draw-cursor"), this._fireDrawStart(), this._setGlobalDrawMode();
  }, disable() {
    var A;
    this._enabled && (this._enabled = !1, this._map.off("click", this._createMarker, this), (A = this._hintMarker) == null || A.remove(), this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("mousemove", this._syncHintMarker, this), this._map.off("mousemove", this._showHintMarkerAfterMoving, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode());
  }, enabled() {
    return this._enabled;
  }, toggle(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, _syncHintMarker(A) {
    if (this._hintMarker.setLatLng(A.latlng), this.options.snappable) {
      let e = A;
      e.target = this._hintMarker, this._handleSnapping(e);
    }
  }, _createMarker(A) {
    var o, u, h, c;
    if (!A.latlng || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
    this._hintMarker._snapped || this._hintMarker.setLatLng(A.latlng);
    let e = this._hintMarker.getLatLng();
    if (this.textArea = this._createTextArea(), (o = this.options.textOptions) == null ? void 0 : o.className) {
      let p = this.options.textOptions.className.split(" ");
      this.textArea.classList.add(...p);
    }
    let t = this._createTextIcon(this.textArea), i = new L.Marker(e, { textMarker: !0, _textMarkerOverPM: !0, icon: t });
    if (this._setPane(i, "markerPane"), this._finishLayer(i), i.pm || (i.options.draggable = !1), i.addTo(this._map.pm._getContainingLayer()), i.pm) {
      i.pm.textArea = this.textArea, L.setOptions(i.pm, { removeIfEmpty: ((u = this.options.textOptions) == null ? void 0 : u.removeIfEmpty) ?? !0 });
      let p = ((h = this.options.textOptions) == null ? void 0 : h.focusAfterDraw) ?? !0;
      i.pm._createTextMarker(p), (c = this.options.textOptions) != null && c.text && i.pm.setText(this.options.textOptions.text);
    }
    this._fireCreate(i), this._cleanupSnapping(), this.disable(), this.options.continueDrawing && this._map.once("mousemove", this._showHintMarkerAfterMoving, this);
  }, _showHintMarkerAfterMoving(A) {
    this.enable(), this._hintMarker.setLatLng(A.latlng);
  }, _createTextArea() {
    let A = document.createElement("textarea");
    return A.readOnly = !0, A.classList.add("pm-textarea", "pm-disabled"), A;
  }, _createTextIcon(A) {
    return L.divIcon({ className: "pm-text-marker", html: A });
  } });
  var qc = { enableLayerDrag() {
    if (!this.options.draggable || !this._layer._map) return;
    this.disable(), this._layerDragEnabled = !0, this._map || (this._map = this._layer._map), (this._layer instanceof L.Marker || this._layer instanceof L.ImageOverlay) && L.DomEvent.on(this._getDOMElem(), "dragstart", this._stopDOMImageDrag), this._layer.dragging && this._layer.dragging.disable(), this._tempDragCoord = null, pt(this._layer) instanceof L.Canvas ? (this._layer.on("mouseout", this.removeDraggingClass, this), this._layer.on("mouseover", this.addDraggingClass, this)) : this.addDraggingClass(), this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = !0;
    let A = this._getDOMElem();
    A && (pt(this._layer) instanceof L.Canvas ? (this._layer.on("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._addTouchEvents(A)) : L.DomEvent.on(A, "touchstart mousedown", this._simulateMouseDownEvent, this)), this._fireDragEnable();
  }, disableLayerDrag() {
    this._layerDragEnabled = !1, pt(this._layer) instanceof L.Canvas ? (this._layer.off("mouseout", this.removeDraggingClass, this), this._layer.off("mouseover", this.addDraggingClass, this)) : this.removeDraggingClass(), this._originalMapDragState && this._dragging && this._map.dragging.enable(), this._safeToCacheDragState = !1, this._layer.dragging && this._layer.dragging.disable();
    let A = this._getDOMElem();
    A && (pt(this._layer) instanceof L.Canvas ? (this._layer.off("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._removeTouchEvents(A)) : L.DomEvent.off(A, "touchstart mousedown", this._simulateMouseDownEvent, this)), this._layerDragged && this._fireUpdate(), this._layerDragged = !1, this._fireDragDisable();
  }, dragging() {
    return this._dragging;
  }, layerDragEnabled() {
    return !!this._layerDragEnabled;
  }, _simulateMouseDownEvent(A) {
    let e = A.touches ? A.touches[0] : A, t = { originalEvent: e, target: this._layer };
    return t.containerPoint = this._map.mouseEventToContainerPoint(e), t.latlng = this._map.containerPointToLatLng(t.containerPoint), this._dragMixinOnMouseDown(t), !1;
  }, _simulateMouseMoveEvent(A) {
    let e = A.touches ? A.touches[0] : A, t = { originalEvent: e, target: this._layer };
    return t.containerPoint = this._map.mouseEventToContainerPoint(e), t.latlng = this._map.containerPointToLatLng(t.containerPoint), this._dragMixinOnMouseMove(t), !1;
  }, _simulateMouseUpEvent(A) {
    let e = { originalEvent: A.touches ? A.touches[0] : A, target: this._layer };
    return A.type.indexOf("touch") === -1 && (e.containerPoint = this._map.mouseEventToContainerPoint(A), e.latlng = this._map.containerPointToLatLng(e.containerPoint)), this._dragMixinOnMouseUp(e), !1;
  }, _dragMixinOnMouseDown(A) {
    if (A.originalEvent.button > 0) return;
    this._overwriteEventIfItComesFromMarker(A);
    let e = A._fromLayerSync, t = this._syncLayers("_dragMixinOnMouseDown", A);
    if (this._layer instanceof L.Marker && (this.options.snappable && !e && !t ? this._initSnappableMarkers() : this._disableSnapping()), this._layer instanceof L.CircleMarker) {
      let i = "resizeableCircleMarker";
      this._layer instanceof L.Circle && (i = "resizeableCircle"), this.options.snappable && !e && !t ? this._layer.pm.options[i] || this._initSnappableMarkersDrag() : this._layer.pm.options[i] ? this._layer.pm._disableSnapping() : this._layer.pm._disableSnappingDrag();
    }
    this._safeToCacheDragState && (this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = !1), this._tempDragCoord = A.latlng, L.DomEvent.on(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this), L.DomEvent.on(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this);
  }, _dragMixinOnMouseMove(A) {
    this._overwriteEventIfItComesFromMarker(A);
    let e = this._getDOMElem();
    this._syncLayers("_dragMixinOnMouseMove", A), this._dragging || (this._dragging = !0, L.DomUtil.addClass(e, "leaflet-pm-dragging"), this._layer instanceof L.Marker || this._layer.bringToFront(), this._originalMapDragState && this._map.dragging.disable(), this._fireDragStart()), this._tempDragCoord || (this._tempDragCoord = A.latlng), this._onLayerDrag(A), this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle();
  }, _dragMixinOnMouseUp(A) {
    let e = this._getDOMElem();
    return this._syncLayers("_dragMixinOnMouseUp", A), this._originalMapDragState && this._map.dragging.enable(), this._safeToCacheDragState = !0, L.DomEvent.off(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this), L.DomEvent.off(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this), this._dragging ? (this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle(), this._layerDragged = !0, window.setTimeout(() => {
      this._dragging = !1, e && L.DomUtil.removeClass(e, "leaflet-pm-dragging"), this._fireDragEnd(), this._fireEdit(), this._layerEdited = !0;
    }, 10), !0) : !1;
  }, _onLayerDrag(A) {
    let { latlng: e } = A, t = { lat: e.lat - this._tempDragCoord.lat, lng: e.lng - this._tempDragCoord.lng }, i = (o) => o.map((u) => {
      if (Array.isArray(u)) return i(u);
      let h = { lat: u.lat + t.lat, lng: u.lng + t.lng };
      return (u.alt || u.alt === 0) && (h.alt = u.alt), h;
    });
    if (this._layer instanceof L.Circle && this._layer.options.resizeableCircle || this._layer instanceof L.CircleMarker && this._layer.options.resizeableCircleMarker) {
      let o = i([this._layer.getLatLng()]);
      this._layer.setLatLng(o[0]), this._fireChange(this._layer.getLatLng(), "Edit");
    } else if (this._layer instanceof L.CircleMarker || this._layer instanceof L.Marker) {
      let o = this._layer.getLatLng();
      this._layer._snapped && (o = this._layer._orgLatLng);
      let u = i([o]);
      this._layer.setLatLng(u[0]), this._fireChange(this._layer.getLatLng(), "Edit");
    } else if (this._layer instanceof L.ImageOverlay) {
      let o = i([this._layer.getBounds().getNorthWest(), this._layer.getBounds().getSouthEast()]);
      this._layer.setBounds(o), this._fireChange(this._layer.getBounds(), "Edit");
    } else {
      let o = i(this._layer.getLatLngs());
      this._layer.setLatLngs(o), this._fireChange(this._layer.getLatLngs(), "Edit");
    }
    this._tempDragCoord = e, A.layer = this._layer, this._fireDrag(A);
  }, addDraggingClass() {
    let A = this._getDOMElem();
    A && L.DomUtil.addClass(A, "leaflet-pm-draggable");
  }, removeDraggingClass() {
    let A = this._getDOMElem();
    A && L.DomUtil.removeClass(A, "leaflet-pm-draggable");
  }, _getDOMElem() {
    let A = null;
    return this._layer._path ? A = this._layer._path : this._layer._renderer && this._layer._renderer._container ? A = this._layer._renderer._container : this._layer._image ? A = this._layer._image : this._layer._icon && (A = this._layer._icon), A;
  }, _overwriteEventIfItComesFromMarker(A) {
    A.target.getLatLng && (!A.target._radius || A.target._radius <= 10) && (A.containerPoint = this._map.mouseEventToContainerPoint(A.originalEvent), A.latlng = this._map.containerPointToLatLng(A.containerPoint));
  }, _syncLayers(A, e) {
    if (this.enabled()) return !1;
    if (!e._fromLayerSync && this._layer === e.target && this.options.syncLayersOnDrag) {
      e._fromLayerSync = !0;
      let t = [];
      if (L.Util.isArray(this.options.syncLayersOnDrag)) t = this.options.syncLayersOnDrag, this.options.syncLayersOnDrag.forEach((i) => {
        i instanceof L.LayerGroup && (t = t.concat(i.pm.getLayers(!0)));
      });
      else if (this.options.syncLayersOnDrag === !0 && this._parentLayerGroup) for (let i in this._parentLayerGroup) {
        let o = this._parentLayerGroup[i];
        o.pm && (t = o.pm.getLayers(!0));
      }
      return L.Util.isArray(t) && t.length > 0 && (t = t.filter((i) => !!i.pm).filter((i) => !!i.pm.options.draggable), t.forEach((i) => {
        i !== this._layer && i.pm[A] && (i._snapped = !1, i.pm[A](e));
      })), t.length > 0;
    }
    return !1;
  }, _stopDOMImageDrag(A) {
    return A.preventDefault(), !1;
  } }, $c = qc, A0 = C(Cr());
  function e0(A, e, t, i) {
    return t.unproject(e.transform(t.project(A, i)), i);
  }
  function ls(A, e, t) {
    let i = t.getMaxZoom();
    if (i === 1 / 0 && (i = t.getZoom()), L.Util.isArray(A)) {
      let o = [];
      return A.forEach((u) => {
        o.push(ls(u, e, t));
      }), o;
    }
    return A instanceof L.LatLng ? e0(A, e, t, i) : null;
  }
  function mt(A, e) {
    e instanceof L.Layer && (e = e.getLatLng());
    let t = A.getMaxZoom();
    return t === 1 / 0 && (t = A.getZoom()), A.project(e, t);
  }
  function Kr(A, e) {
    let t = A.getMaxZoom();
    return t === 1 / 0 && (t = A.getZoom()), A.unproject(e, t);
  }
  var t0 = { _onRotateStart(A) {
    this._preventRenderingMarkers(!0), this._rotationOriginLatLng = this._getRotationCenter().clone(), this._rotationOriginPoint = mt(this._map, this._rotationOriginLatLng), this._rotationStartPoint = mt(this._map, A.target.getLatLng()), this._initialRotateLatLng = Ne(this._layer), this._startAngle = this.getAngle();
    let e = Ne(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
    this._fireRotationStart(this._rotationLayer, e), this._fireRotationStart(this._map, e);
  }, _onRotate(A) {
    let e = mt(this._map, A.target.getLatLng()), t = this._rotationStartPoint, i = this._rotationOriginPoint, o = Math.atan2(e.y - i.y, e.x - i.x) - Math.atan2(t.y - i.y, t.x - i.x);
    this._layer.setLatLngs(this._rotateLayer(o, this._initialRotateLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
    let u = this;
    function h(F, y = [], I = -1) {
      if (I > -1 && y.push(I), L.Util.isArray(F[0])) F.forEach((k, G) => h(k, y.slice(), G));
      else {
        let k = y.length > 0 ? (0, A0.default)(u._markers, y) : u._markers[0];
        F.forEach((G, J) => {
          k[J].setLatLng(G);
        });
      }
    }
    h(this._layer.getLatLngs());
    let c = Ne(this._rotationLayer);
    this._rotationLayer.setLatLngs(this._rotateLayer(o, this._rotationLayer.pm._rotateOrgLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
    let p = o * 180 / Math.PI;
    p = p < 0 ? p + 360 : p;
    let f = p + this._startAngle;
    this._setAngle(f), this._rotationLayer.pm._setAngle(f), this._fireRotation(this._rotationLayer, p, c), this._fireRotation(this._map, p, c), this._rotationLayer.pm._fireChange(this._rotationLayer.getLatLngs(), "Rotation");
  }, _onRotateEnd() {
    let A = this._startAngle;
    delete this._rotationOriginLatLng, delete this._rotationOriginPoint, delete this._rotationStartPoint, delete this._initialRotateLatLng, delete this._startAngle;
    let e = Ne(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
    this._rotationLayer.pm._rotateOrgLatLng = Ne(this._rotationLayer), this._fireRotationEnd(this._rotationLayer, A, e), this._fireRotationEnd(this._map, A, e), this._rotationLayer.pm._fireEdit(this._rotationLayer, "Rotation"), this._preventRenderingMarkers(!1), this._layerRotated = !0;
  }, _rotateLayer(A, e, t, i, o) {
    let u = mt(o, t);
    return this._matrix = i.clone().rotate(A, u).flip(), ls(e, this._matrix, o);
  }, _setAngle(A) {
    A = A < 0 ? A + 360 : A, this._angle = A % 360;
  }, _getRotationCenter() {
    if (this._rotationCenter) return this._rotationCenter;
    let A = L.polygon(this._layer.getLatLngs(), { stroke: !1, fill: !1, pmIgnore: !0 }).addTo(this._layer._map), e = A.getCenter();
    return A.removeFrom(this._layer._map), e;
  }, enableRotate() {
    if (!this.options.allowRotation) {
      this.disableRotate();
      return;
    }
    this.rotateEnabled() && this.disableRotate(), this._layer instanceof L.Rectangle && this._angle === void 0 && this.setInitAngle(Ri(this._layer._map, this._layer.getLatLngs()[0][0], this._layer.getLatLngs()[0][1]) || 0);
    let A = { fill: !1, stroke: !1, pmIgnore: !1, snapIgnore: !0 };
    this._rotatePoly = L.polygon(this._layer.getLatLngs(), A), this._rotatePoly._pmTempLayer = !0, this._rotatePoly.addTo(this._layer._map), this._rotatePoly.pm._setAngle(this.getAngle()), this._rotatePoly.pm.setRotationCenter(this.getRotationCenter()), this._rotatePoly.pm.setOptions(this._layer._map.pm.getGlobalOptions()), this._rotatePoly.pm.setOptions({ rotate: !0, snappable: !1, hideMiddleMarkers: !0 }), this._rotatePoly.pm._rotationLayer = this._layer, this._rotatePoly.pm.enable(), this._rotateOrgLatLng = Ne(this._layer), this._rotateEnabled = !0, this._layer.on("remove", this.disableRotate, this), this._fireRotationEnable(this._layer), this._fireRotationEnable(this._layer._map);
  }, disableRotate() {
    this.rotateEnabled() && (this._rotatePoly.pm._layerRotated && this._fireUpdate(), this._rotatePoly.pm._layerRotated = !1, this._rotatePoly.pm.disable(), this._rotatePoly.remove(), this._rotatePoly.pm.setOptions({ rotate: !1 }), this._rotatePoly = void 0, this._rotateOrgLatLng = void 0, this._layer.off("remove", this.disableRotate, this), this._rotateEnabled = !1, this._fireRotationDisable(this._layer), this._fireRotationDisable(this._layer._map));
  }, rotateEnabled() {
    return !!this._rotateEnabled;
  }, rotateLayer(A) {
    let e = this.getAngle(), t = this._layer.getLatLngs(), i = A * (Math.PI / 180);
    this._layer.setLatLngs(this._rotateLayer(i, this._layer.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._layer._map)), this._rotateOrgLatLng = L.polygon(this._layer.getLatLngs()).getLatLngs(), this._setAngle(this.getAngle() + A), this.rotateEnabled() && this._rotatePoly && this._rotatePoly.pm.enabled() && (this._rotatePoly.setLatLngs(this._rotateLayer(i, this._rotatePoly.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._rotatePoly._map)), this._rotatePoly.pm._initMarkers());
    let o = this.getAngle() - e;
    o = o < 0 ? o + 360 : o, this._startAngle = e, this._fireRotation(this._layer, o, t, this._layer), this._fireRotation(this._map || this._layer._map, o, t, this._layer), delete this._startAngle, this._fireChange(this._layer.getLatLngs(), "Rotation");
  }, rotateLayerToAngle(A) {
    let e = A - this.getAngle();
    this.rotateLayer(e);
  }, getAngle() {
    return this._angle || 0;
  }, setInitAngle(A) {
    this._setAngle(A);
  }, getRotationCenter() {
    return this._getRotationCenter();
  }, setRotationCenter(A) {
    this._rotationCenter = A, this._rotatePoly && this._rotatePoly.pm.setRotationCenter(A);
  } }, r0 = t0, i0 = L.Class.extend({ includes: [$c, xa, r0, wr], options: { snappable: !0, snapDistance: 20, allowSelfIntersection: !0, allowSelfIntersectionEdit: !1, preventMarkerRemoval: !1, removeLayerBelowMinVertexCount: !0, limitMarkersToCount: -1, hideMiddleMarkers: !1, snapSegment: !0, syncLayersOnDrag: !1, draggable: !0, allowEditing: !0, allowRemoval: !0, allowCutting: !0, allowRotation: !0, addVertexOn: "click", removeVertexOn: "contextmenu", removeVertexValidation: void 0, addVertexValidation: void 0, moveVertexValidation: void 0, resizeableCircleMarker: !1, resizeableCircle: !0, snapMiddle: !1, snapVertex: !0 }, setOptions(A) {
    L.Util.setOptions(this, A);
  }, getOptions() {
    return this.options;
  }, applyOptions() {
  }, isPolygon() {
    return this._layer instanceof L.Polygon;
  }, getShape() {
    return this._shape;
  }, _setPane(A, e) {
    e === "layerPane" ? A.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane || "overlayPane" : e === "vertexPane" ? A.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane || "markerPane" : e === "markerPane" && (A.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane || "markerPane");
  }, remove() {
    (this._map || this._layer._map).pm.removeLayer({ target: this._layer });
  }, _vertexValidation(A, e) {
    let t = e.target, i = { layer: this._layer, marker: t, event: e }, o = "";
    return A === "move" ? o = "moveVertexValidation" : A === "add" ? o = "addVertexValidation" : A === "remove" && (o = "removeVertexValidation"), this.options[o] && typeof this.options[o] == "function" && !this.options[o](i) ? (A === "move" && (t._cancelDragEventChain = t.getLatLng()), !1) : (t._cancelDragEventChain = null, !0);
  }, _vertexValidationDrag(A) {
    return A._cancelDragEventChain ? (A._latlng = A._cancelDragEventChain, A.update(), !1) : !0;
  }, _vertexValidationDragEnd(A) {
    return A._cancelDragEventChain ? (A._cancelDragEventChain = null, !1) : !0;
  } }), RA = i0;
  RA.LayerGroup = L.Class.extend({ initialize(A) {
    this._layerGroup = A, this._layers = this.getLayers(), this._getMap(), this._layers.forEach((i) => this._initLayer(i));
    let e = (i) => {
      if (i.layer._pmTempLayer) return;
      this._layers = this.getLayers();
      let o = this._layers.filter((u) => !u.pm._parentLayerGroup || !(this._layerGroup._leaflet_id in u.pm._parentLayerGroup));
      o.forEach((u) => {
        this._initLayer(u);
      }), o.length > 0 && this._getMap() && this._getMap().pm.globalEditModeEnabled() && this.enabled() && this.enable(this.getOptions());
    };
    this._layerGroup.on("layeradd", L.Util.throttle(e, 100, this), this), this._layerGroup.on("layerremove", (i) => {
      this._removeLayerFromGroup(i.target);
    }, this);
    let t = (i) => {
      i.target._pmTempLayer || (this._layers = this.getLayers());
    };
    this._layerGroup.on("layerremove", L.Util.throttle(t, 100, this), this);
  }, enable(A, e = []) {
    e.length === 0 && (this._layers = this.getLayers()), this._options = A, this._layers.forEach((t) => {
      t instanceof L.LayerGroup ? e.indexOf(t._leaflet_id) === -1 && (e.push(t._leaflet_id), t.pm.enable(A, e)) : t.pm.enable(A);
    });
  }, disable(A = []) {
    A.length === 0 && (this._layers = this.getLayers()), this._layers.forEach((e) => {
      e instanceof L.LayerGroup ? A.indexOf(e._leaflet_id) === -1 && (A.push(e._leaflet_id), e.pm.disable(A)) : e.pm.disable();
    });
  }, enabled(A = []) {
    return A.length === 0 && (this._layers = this.getLayers()), !!this._layers.find((e) => e instanceof L.LayerGroup ? A.indexOf(e._leaflet_id) === -1 ? (A.push(e._leaflet_id), e.pm.enabled(A)) : !1 : e.pm.enabled());
  }, toggleEdit(A, e = []) {
    e.length === 0 && (this._layers = this.getLayers()), this._options = A, this._layers.forEach((t) => {
      t instanceof L.LayerGroup ? e.indexOf(t._leaflet_id) === -1 && (e.push(t._leaflet_id), t.pm.toggleEdit(A, e)) : t.pm.toggleEdit(A);
    });
  }, _initLayer(A) {
    let e = L.Util.stamp(this._layerGroup);
    A.pm._parentLayerGroup || (A.pm._parentLayerGroup = {}), A.pm._parentLayerGroup[e] = this._layerGroup;
  }, _removeLayerFromGroup(A) {
    if (A.pm && A.pm._layerGroup) {
      let e = L.Util.stamp(this._layerGroup);
      delete A.pm._layerGroup[e];
    }
  }, dragging() {
    return this._layers = this.getLayers(), this._layers ? !!this._layers.find((A) => A.pm.dragging()) : !1;
  }, getOptions() {
    return this.options;
  }, _getMap() {
    var A;
    return this._map || ((A = this._layers.find((e) => !!e._map)) == null ? void 0 : A._map) || null;
  }, getLayers(A = !1, e = !0, t = !0, i = []) {
    let o = [];
    return A ? this._layerGroup.getLayers().forEach((u) => {
      o.push(u), u instanceof L.LayerGroup && i.indexOf(u._leaflet_id) === -1 && (i.push(u._leaflet_id), o = o.concat(u.pm.getLayers(!0, !0, !0, i)));
    }) : o = this._layerGroup.getLayers(), t && (o = o.filter((u) => !(u instanceof L.LayerGroup))), e && (o = o.filter((u) => !!u.pm), o = o.filter((u) => !u._pmTempLayer), o = o.filter((u) => !L.PM.optIn && !u.options.pmIgnore || L.PM.optIn && u.options.pmIgnore === !1)), o;
  }, setOptions(A, e = []) {
    e.length === 0 && (this._layers = this.getLayers()), this.options = A, this._layers.forEach((t) => {
      t.pm && (t instanceof L.LayerGroup ? e.indexOf(t._leaflet_id) === -1 && (e.push(t._leaflet_id), t.pm.setOptions(A, e)) : t.pm.setOptions(A));
    });
  } }), RA.Marker = RA.extend({ _shape: "Marker", initialize(A) {
    this._layer = A, this._enabled = !1, this._layer.on("dragend", this._onDragEnd, this);
  }, enable(A = { draggable: !0 }) {
    if (L.Util.setOptions(this, A), !this.options.allowEditing || !this._layer._map) {
      this.disable();
      return;
    }
    this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._enabled = !0, this._layer.on("pm:dragstart", this._onDragStart, this), this._layer.on("pm:dragend", this._onMarkerDragEnd, this), this._fireEnable();
  }, disable() {
    this.enabled() && (this.disableLayerDrag(), this._layer.off("remove", this.disable, this), this._layer.off("contextmenu", this._removeMarker, this), this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable(), this._enabled = !1);
  }, enabled() {
    return this._enabled;
  }, toggleEdit(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, applyOptions() {
    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this.options.draggable ? this.enableLayerDrag() : this.disableLayerDrag(), this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this);
  }, _removeMarker(A) {
    let e = A.target;
    e.remove(), this._fireRemove(e), this._fireRemove(this._map, e);
  }, _onDragStart() {
    this._map.pm.Draw.Marker._layerIsDragging = !0;
  }, _onMarkerDragEnd() {
    this._map.pm.Draw.Marker._layerIsDragging = !1;
  }, _onDragEnd() {
    this._fireEdit(), this._layerEdited = !0;
  }, _initSnappableMarkers() {
    let A = this._layer;
    this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, A.off("pm:drag", this._handleSnapping, this), A.on("pm:drag", this._handleSnapping, this), A.off("pm:dragend", this._cleanupSnapping, this), A.on("pm:dragend", this._cleanupSnapping, this), A.off("pm:dragstart", this._unsnap, this), A.on("pm:dragstart", this._unsnap, this);
  }, _disableSnapping() {
    let A = this._layer;
    A.off("pm:drag", this._handleSnapping, this), A.off("pm:dragend", this._cleanupSnapping, this), A.off("pm:dragstart", this._unsnap, this);
  } });
  var Je = C(Cr()), n0 = { filterMarkerGroup() {
    this.markerCache = [], this.createCache(), this._layer.on("pm:edit", this.createCache, this), this.applyLimitFilters({}), this.throttledApplyLimitFilters || (this.throttledApplyLimitFilters = L.Util.throttle(this.applyLimitFilters, 100, this)), this._layer.on("pm:disable", this._removeMarkerLimitEvents, this), this._layer.on("remove", this._removeMarkerLimitEvents, this), this.options.limitMarkersToCount > -1 && (this._layer.on("pm:vertexremoved", this._initMarkers, this), this._map.on("mousemove", this.throttledApplyLimitFilters, this));
  }, _removeMarkerLimitEvents() {
    this._map.off("mousemove", this.throttledApplyLimitFilters, this), this._layer.off("pm:edit", this.createCache, this), this._layer.off("pm:disable", this._removeMarkerLimitEvents, this), this._layer.off("pm:vertexremoved", this._initMarkers, this);
  }, createCache() {
    let A = [...this._markerGroup.getLayers(), ...this.markerCache];
    this.markerCache = A.filter((e, t, i) => i.indexOf(e) === t);
  }, _removeFromCache(A) {
    let e = this.markerCache.indexOf(A);
    e > -1 && this.markerCache.splice(e, 1);
  }, renderLimits(A) {
    this.markerCache.forEach((e) => {
      A.includes(e) ? this._markerGroup.addLayer(e) : this._markerGroup.removeLayer(e);
    });
  }, applyLimitFilters({ latlng: A = { lat: 0, lng: 0 } }) {
    if (this._preventRenderMarkers) return;
    let e = [...this._filterClosestMarkers(A)];
    this.renderLimits(e);
  }, _filterClosestMarkers(A) {
    let e = [...this.markerCache], t = this.options.limitMarkersToCount;
    return t === -1 ? e : (e.sort((i, o) => {
      let u = i._latlng.distanceTo(A), h = o._latlng.distanceTo(A);
      return u - h;
    }), e.filter((i, o) => t > -1 ? o < t : !0));
  }, _preventRenderMarkers: !1, _preventRenderingMarkers(A) {
    this._preventRenderMarkers = !!A;
  } }, a0 = n0;
  RA.Line = RA.extend({ includes: [a0], _shape: "Line", initialize(A) {
    this._layer = A, this._enabled = !1;
  }, enable(A) {
    if (L.Util.setOptions(this, A), this._map = this._layer._map, !!this._map) {
      if (!this.options.allowEditing) {
        this.disable();
        return;
      }
      this.enabled() && this.disable(), this._enabled = !0, this._initMarkers(), this.applyOptions(), this._layer.on("remove", this.disable, this), this.options.allowSelfIntersection || this._layer.on("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this), this.options.allowSelfIntersection ? this.cachedColor = void 0 : (this._layer.options.color !== "#f00000ff" ? (this.cachedColor = this._layer.options.color, this.isRed = !1) : this.isRed = !0, this._handleLayerStyle()), this._fireEnable();
    }
  }, disable() {
    if (!this.enabled() || this._dragging) return;
    this._enabled = !1, this._markerGroup.clearLayers(), this._markerGroup.removeFrom(this._map), this._layer.off("remove", this.disable, this), this.options.allowSelfIntersection || this._layer.off("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this);
    let A = this._layer._path ? this._layer._path : this._layer._renderer._container;
    L.DomUtil.removeClass(A, "leaflet-pm-draggable"), this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable();
  }, enabled() {
    return this._enabled;
  }, toggleEdit(A) {
    return this.enabled() ? this.disable() : this.enable(A), this.enabled();
  }, applyOptions() {
    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping();
  }, _initMarkers() {
    let A = this._map, e = this._layer.getLatLngs();
    this._markerGroup && (this._markerGroup.removeFrom(A), this._markerGroup.clearLayers()), this._markerGroup = new L.FeatureGroup(), this._markerGroup._pmTempLayer = !0;
    let t = (i) => {
      if (Array.isArray(i[0])) return i.map(t, this);
      let o = i.map(this._createMarker, this);
      return this.options.hideMiddleMarkers !== !0 && i.map((u, h) => {
        let c = this.isPolygon() ? (h + 1) % i.length : h + 1;
        return this._createMiddleMarker(o[h], o[c]);
      }), o;
    };
    this._markers = t(e), this.filterMarkerGroup(), A.addLayer(this._markerGroup);
  }, _createMarker(A) {
    let e = new L.Marker(A, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(e, "vertexPane"), e._pmTempLayer = !0, this.options.rotate ? (e.on("dragstart", this._onRotateStart, this), e.on("drag", this._onRotate, this), e.on("dragend", this._onRotateEnd, this)) : (e.on("click", this._onVertexClick, this), e.on("dragstart", this._onMarkerDragStart, this), e.on("move", this._onMarkerDrag, this), e.on("dragend", this._onMarkerDragEnd, this), this.options.preventMarkerRemoval || e.on(this.options.removeVertexOn, this._removeMarker, this)), this._markerGroup.addLayer(e), e;
  }, _createMiddleMarker(A, e) {
    if (!A || !e) return !1;
    let t = L.PM.Utils.calcMiddleLatLng(this._map, A.getLatLng(), e.getLatLng()), i = this._createMarker(t), o = L.divIcon({ className: "marker-icon marker-icon-middle" });
    return i.setIcon(o), i.leftM = A, i.rightM = e, A._middleMarkerNext = i, e._middleMarkerPrev = i, i.on(this.options.addVertexOn, this._onMiddleMarkerClick, this), i.on("movestart", this._onMiddleMarkerMoveStart, this), i;
  }, _onMiddleMarkerClick(A) {
    let e = A.target;
    if (!this._vertexValidation("add", A)) return;
    let t = L.divIcon({ className: "marker-icon" });
    e.setIcon(t), this._addMarker(e, e.leftM, e.rightM);
  }, _onMiddleMarkerMoveStart(A) {
    let e = A.target;
    if (e.on("moveend", this._onMiddleMarkerMoveEnd, this), !this._vertexValidation("add", A)) {
      e.on("move", this._onMiddleMarkerMovePrevent, this);
      return;
    }
    e._dragging = !0, this._addMarker(e, e.leftM, e.rightM);
  }, _onMiddleMarkerMovePrevent(A) {
    let e = A.target;
    this._vertexValidationDrag(e);
  }, _onMiddleMarkerMoveEnd(A) {
    let e = A.target;
    if (e.off("move", this._onMiddleMarkerMovePrevent, this), e.off("moveend", this._onMiddleMarkerMoveEnd, this), !this._vertexValidationDragEnd(e)) return;
    let t = L.divIcon({ className: "marker-icon" });
    e.setIcon(t), setTimeout(() => {
      delete e._dragging;
    }, 100);
  }, _addMarker(A, e, t) {
    A.off("movestart", this._onMiddleMarkerMoveStart, this), A.off(this.options.addVertexOn, this._onMiddleMarkerClick, this);
    let i = A.getLatLng(), o = this._layer._latlngs;
    delete A.leftM, delete A.rightM;
    let { indexPath: u, index: h, parentPath: c } = L.PM.Utils.findDeepMarkerIndex(this._markers, e), p = u.length > 1 ? (0, Je.default)(o, c) : o, f = u.length > 1 ? (0, Je.default)(this._markers, c) : this._markers;
    p.splice(h + 1, 0, i), f.splice(h + 1, 0, A), this._layer.setLatLngs(o), this.options.hideMiddleMarkers !== !0 && (this._createMiddleMarker(e, A), this._createMiddleMarker(A, t)), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit"), this._fireVertexAdded(A, L.PM.Utils.findDeepMarkerIndex(this._markers, A).indexPath, i), this.options.snappable && this._initSnappableMarkers();
  }, hasSelfIntersection() {
    return Qr(this._layer.toGeoJSON(15)).features.length > 0;
  }, _handleSelfIntersectionOnVertexRemoval() {
    this._handleLayerStyle(!0) && (this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers());
  }, _handleLayerStyle(A) {
    let e = this._layer, t, i;
    if (this.options.allowSelfIntersection ? t = !1 : (i = Qr(this._layer.toGeoJSON(15)), t = i.features.length > 0), t) {
      if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, !0), this.isRed) return t;
      A ? this._flashLayer() : (e.setStyle({ color: "#f00000ff" }), this.isRed = !0), this._fireIntersect(i);
    } else e.setStyle({ color: this.cachedColor }), this.isRed = !1, !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, !1);
    return t;
  }, _flashLayer() {
    this.cachedColor || (this.cachedColor = this._layer.options.color), this._layer.setStyle({ color: "#f00000ff" }), this.isRed = !0, window.setTimeout(() => {
      this._layer.setStyle({ color: this.cachedColor }), this.isRed = !1;
    }, 200);
  }, _updateDisabledMarkerStyle(A, e) {
    A.forEach((t) => {
      Array.isArray(t) ? this._updateDisabledMarkerStyle(t, e) : t._icon && (e && !this._checkMarkerAllowedToDrag(t) ? L.DomUtil.addClass(t._icon, "vertexmarker-disabled") : L.DomUtil.removeClass(t._icon, "vertexmarker-disabled"));
    });
  }, _removeMarker(A) {
    let e = A.target;
    if (!this._vertexValidation("remove", A)) return;
    this.options.allowSelfIntersection || (this._coordsBeforeEdit = Ne(this._layer, this._layer.getLatLngs()));
    let t = this._layer.getLatLngs(), { indexPath: i, index: o, parentPath: u } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
    if (!i) return;
    let h = i.length > 1 ? (0, Je.default)(t, u) : t, c = i.length > 1 ? (0, Je.default)(this._markers, u) : this._markers, p = u[u.length - 1] > 0 && this._layer instanceof L.Polygon;
    if (!this.options.removeLayerBelowMinVertexCount && !p && (h.length <= 2 || this.isPolygon() && h.length <= 3)) {
      this._flashLayer();
      return;
    }
    h.splice(o, 1), this._layer.setLatLngs(t), this.isPolygon() && h.length <= 2 && h.splice(0, h.length);
    let f = !1;
    if (h.length <= 1 && (h.splice(0, h.length), u.length > 1 && i.length > 1 && (t = mr(t)), this._layer.setLatLngs(t), this._initMarkers(), f = !0), Oi(t) || this._layer.remove(), t = mr(t), this._layer.setLatLngs(t), this._markers = mr(this._markers), !f && (c = i.length > 1 ? (0, Je.default)(this._markers, u) : this._markers, e._middleMarkerPrev && (this._markerGroup.removeLayer(e._middleMarkerPrev), this._removeFromCache(e._middleMarkerPrev)), e._middleMarkerNext && (this._markerGroup.removeLayer(e._middleMarkerNext), this._removeFromCache(e._middleMarkerNext)), this._markerGroup.removeLayer(e), this._removeFromCache(e), c)) {
      let F, y;
      if (this.isPolygon() ? (F = (o + 1) % c.length, y = (o + (c.length - 1)) % c.length) : (y = o - 1 < 0 ? void 0 : o - 1, F = o + 1 >= c.length ? void 0 : o + 1), F !== y) {
        let I = c[y], k = c[F];
        this.options.hideMiddleMarkers !== !0 && this._createMiddleMarker(I, k);
      }
      c.splice(o, 1);
    }
    this._fireEdit(), this._layerEdited = !0, this._fireVertexRemoved(e, i), this._fireChange(this._layer.getLatLngs(), "Edit");
  }, updatePolygonCoordsFromMarkerDrag(A) {
    let e = this._layer.getLatLngs(), t = A.getLatLng(), { indexPath: i, index: o, parentPath: u } = L.PM.Utils.findDeepMarkerIndex(this._markers, A), h = i.length > 1 ? (0, Je.default)(e, u) : e;
    t.alt = h[o].alt, h.splice(o, 1, t), this._layer.setLatLngs(e);
  }, _getNeighborMarkers(A) {
    let { indexPath: e, index: t, parentPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, A), o = e.length > 1 ? (0, Je.default)(this._markers, i) : this._markers, u = (t + 1) % o.length, h = (t + (o.length - 1)) % o.length, c = o[h], p = o[u];
    return { prevMarker: c, nextMarker: p };
  }, _checkMarkerAllowedToDrag(A) {
    let { prevMarker: e, nextMarker: t } = this._getNeighborMarkers(A), i = L.polyline([e.getLatLng(), A.getLatLng()]), o = L.polyline([A.getLatLng(), t.getLatLng()]), u = St(this._layer.toGeoJSON(15), i.toGeoJSON(15)).features.filter((c) => {
      let p = c.geometry.coordinates, f = L.latLng(p[1], p[0]);
      return !f.equals(e.getLatLng()) && !f.equals(A.getLatLng());
    }).length, h = St(this._layer.toGeoJSON(15), o.toGeoJSON(15)).features.filter((c) => {
      let p = c.geometry.coordinates, f = L.latLng(p[1], p[0]);
      return !f.equals(t.getLatLng()) && !f.equals(A.getLatLng());
    }).length;
    return !(u < 1 && h < 1);
  }, _onMarkerDragStart(A) {
    let e = A.target;
    if (this._preventRenderingMarkers(!0), this.cachedColor || (this.cachedColor = this._layer.options.color), !this._vertexValidation("move", A)) return;
    let { indexPath: t } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
    this._fireMarkerDragStart(A, t), this.options.allowSelfIntersection || (this._coordsBeforeEdit = Ne(this._layer, this._layer.getLatLngs())), !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() ? this._markerAllowedToDrag = this._checkMarkerAllowedToDrag(e) : this._markerAllowedToDrag = null;
  }, _onMarkerDrag(A) {
    let e = A.target;
    if (!this._vertexValidationDrag(e)) return;
    let { indexPath: t, index: i, parentPath: o } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
    if (!t) return;
    if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() && this._markerAllowedToDrag === !1) {
      this._layer.setLatLngs(this._coordsBeforeEdit), this._initMarkers(), this._handleLayerStyle();
      return;
    }
    this.updatePolygonCoordsFromMarkerDrag(e);
    let u = t.length > 1 ? (0, Je.default)(this._markers, o) : this._markers, h = (i + 1) % u.length, c = (i + (u.length - 1)) % u.length, p = e.getLatLng(), f = u[c].getLatLng(), F = u[h].getLatLng();
    if (e._middleMarkerNext) {
      let y = L.PM.Utils.calcMiddleLatLng(this._map, p, F);
      e._middleMarkerNext.setLatLng(y);
    }
    if (e._middleMarkerPrev) {
      let y = L.PM.Utils.calcMiddleLatLng(this._map, p, f);
      e._middleMarkerPrev.setLatLng(y);
    }
    this.options.allowSelfIntersection || this._handleLayerStyle(), this._fireMarkerDrag(A, t), this._fireChange(this._layer.getLatLngs(), "Edit");
  }, _onMarkerDragEnd(A) {
    let e = A.target;
    if (this._preventRenderingMarkers(!1), !this._vertexValidationDragEnd(e)) return;
    let { indexPath: t } = L.PM.Utils.findDeepMarkerIndex(this._markers, e), i = !this.options.allowSelfIntersection && this.hasSelfIntersection();
    i && this.options.allowSelfIntersectionEdit && this._markerAllowedToDrag && (i = !1);
    let o = !this.options.allowSelfIntersection && i;
    if (this._fireMarkerDragEnd(A, t, o), o) {
      this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers(), this.options.snappable && this._initSnappableMarkers(), this._handleLayerStyle(), this._fireLayerReset(A, t);
      return;
    }
    !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._handleLayerStyle(), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit");
  }, _onVertexClick(A) {
    let e = A.target;
    if (e._dragging) return;
    let { indexPath: t } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
    this._fireVertexClick(A, t);
  } }), RA.Polygon = RA.Line.extend({ _shape: "Polygon", _checkMarkerAllowedToDrag(A) {
    let { prevMarker: e, nextMarker: t } = this._getNeighborMarkers(A), i = L.polyline([e.getLatLng(), A.getLatLng()]), o = L.polyline([A.getLatLng(), t.getLatLng()]), u = St(this._layer.toGeoJSON(15), i.toGeoJSON(15)).features.filter((c) => {
      let p = c.geometry.coordinates, f = L.latLng(p[1], p[0]);
      return !f.equals(e.getLatLng()) && !f.equals(A.getLatLng());
    }).length, h = St(this._layer.toGeoJSON(15), o.toGeoJSON(15)).features.filter((c) => {
      let p = c.geometry.coordinates, f = L.latLng(p[1], p[0]);
      return !f.equals(t.getLatLng()) && !f.equals(A.getLatLng());
    }).length;
    return !(u < 1 && h < 1);
  } }), RA.Rectangle = RA.Polygon.extend({ _shape: "Rectangle", _initMarkers() {
    let A = this._map, e = this._findCorners();
    this._markerGroup && this._markerGroup.clearLayers(), this._markerGroup = new L.FeatureGroup(), this._markerGroup._pmTempLayer = !0, A.addLayer(this._markerGroup), this._markers = [], this._markers[0] = e.map(this._createMarker, this), [this._cornerMarkers] = this._markers, this._layer.getLatLngs()[0].forEach((t, i) => {
      let o = this._cornerMarkers.find((u) => u._index === i);
      o && o.setLatLng(t);
    });
  }, applyOptions() {
    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this._addMarkerEvents();
  }, _createMarker(A, e) {
    let t = new L.Marker(A, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(t, "vertexPane"), t._origLatLng = A, t._index = e, t._pmTempLayer = !0, t.on("click", this._onVertexClick, this), this._markerGroup.addLayer(t), t;
  }, _addMarkerEvents() {
    this._markers[0].forEach((A) => {
      A.on("dragstart", this._onMarkerDragStart, this), A.on("drag", this._onMarkerDrag, this), A.on("dragend", this._onMarkerDragEnd, this), this.options.preventMarkerRemoval || A.on("contextmenu", this._removeMarker, this);
    });
  }, _removeMarker() {
    return null;
  }, _onMarkerDragStart(A) {
    if (!this._vertexValidation("move", A)) return;
    let e = A.target, t = this._cornerMarkers;
    e._oppositeCornerLatLng = t.find((o) => o._index === (e._index + 2) % 4).getLatLng(), e._snapped = !1;
    let { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
    this._fireMarkerDragStart(A, i);
  }, _onMarkerDrag(A) {
    let e = A.target;
    if (!this._vertexValidationDrag(e) || e._index === void 0) return;
    this._adjustRectangleForMarkerMove(e);
    let { indexPath: t } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
    this._fireMarkerDrag(A, t), this._fireChange(this._layer.getLatLngs(), "Edit");
  }, _onMarkerDragEnd(A) {
    let e = A.target;
    if (!this._vertexValidationDragEnd(e)) return;
    this._cornerMarkers.forEach((i) => {
      delete i._oppositeCornerLatLng;
    });
    let { indexPath: t } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
    this._fireMarkerDragEnd(A, t), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit");
  }, _adjustRectangleForMarkerMove(A) {
    L.extend(A._origLatLng, A._latlng);
    let e = L.PM.Utils._getRotatedRectangle(A.getLatLng(), A._oppositeCornerLatLng, this.getAngle(), this._map);
    this._layer.setLatLngs(e), this._adjustAllMarkers(A), this._layer.redraw();
  }, _adjustAllMarkers(A) {
    let e = this._layer.getLatLngs()[0];
    if (e && e.length !== 4 && e.length > 0) e.forEach((t, i) => {
      this._cornerMarkers[i].setLatLng(t);
    }), this._cornerMarkers.slice(e.length).forEach((t) => {
      t.setLatLng(e[0]);
    });
    else if (!e || !e.length) console.error("The layer has no LatLngs");
    else {
      let t = e.findIndex((i) => A.getLatLng().equals(i));
      t > -1 ? (this._cornerMarkers[(A._index + 1) % 4].setLatLng(e[(t + 1) % 4]), this._cornerMarkers[(A._index + 2) % 4].setLatLng(e[(t + 2) % 4]), this._cornerMarkers[(A._index + 3) % 4].setLatLng(e[(t + 3) % 4])) : this._cornerMarkers.forEach((i) => {
        i.setLatLng(e[i._index]);
      });
    }
  }, _findCorners() {
    this._angle === void 0 && this.setInitAngle(Ri(this._map, this._layer.getLatLngs()[0][0], this._layer.getLatLngs()[0][1]) || 0);
    let A = this._layer.getLatLngs()[0];
    return L.PM.Utils._getRotatedRectangle(A[0], A[2], this.getAngle(), this._map || this);
  } }), RA.CircleMarker = RA.extend({ _shape: "CircleMarker", initialize(A) {
    this._layer = A, this._enabled = !1, this._minRadiusOption = "minRadiusCircleMarker", this._maxRadiusOption = "maxRadiusCircleMarker", this._editableOption = "resizeableCircleMarker", this._updateHiddenPolyCircle();
  }, enable(A = { draggable: !0, snappable: !0 }) {
    if (L.Util.setOptions(this, A), this.options.editable && (this.options.resizeableCircleMarker = this.options.editable, delete this.options.editable), !this.options.allowEditing || !this._layer._map) {
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
  }, toggleEdit(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, applyOptions() {
    this.options[this._editableOption] ? (this._initMarkers(), this._map.on("move", this._syncMarkers, this), this.options.snappable ? (this._initSnappableMarkers(), this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this), this._outerMarker.on("move", this._syncHintLine, this), this._outerMarker.on("move", this._syncCircleRadius, this)) : this._disableSnapping()) : (this.options.draggable && this.enableLayerDrag(), this._map.on("move", this._updateHiddenPolyCircle, this), this.options.snappable ? this._initSnappableMarkersDrag() : this._disableSnappingDrag()), this._extendingApplyOptions();
  }, _extendingApplyOptions() {
    this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this);
  }, _initMarkers() {
    let A = this._map;
    this._helperLayers && (this._helperLayers.removeFrom(A), this._helperLayers.clearLayers()), this._helperLayers = new L.FeatureGroup(), this._helperLayers._pmTempLayer = !0, this._helperLayers.addTo(A);
    let e = this._layer.getLatLng(), t = this._layer._radius, i = this._getLatLngOnCircle(e, t);
    this._centerMarker = this._createCenterMarker(e), this._outerMarker = this._createOuterMarker(i), this._markers = [this._centerMarker, this._outerMarker], this._createHintLine(this._centerMarker, this._outerMarker);
  }, _getLatLngOnCircle(A, e) {
    let t = this._map.project(A), i = L.point(t.x + e, t.y);
    return this._map.unproject(i);
  }, _createHintLine(A, e) {
    let t = A.getLatLng(), i = e.getLatLng();
    this._hintline = L.polyline([t, i], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._helperLayers.addLayer(this._hintline);
  }, _createCenterMarker(A) {
    let e = this._createMarker(A);
    return this.options.draggable ? (L.DomUtil.addClass(e._icon, "leaflet-pm-draggable"), e.on("move", this._moveCircle, this)) : e.dragging.disable(), e;
  }, _createOuterMarker(A) {
    let e = this._createMarker(A);
    return e.on("drag", this._resizeCircle, this), e;
  }, _createMarker(A) {
    let e = new L.Marker(A, { draggable: !0, icon: L.divIcon({ className: "marker-icon" }) });
    return this._setPane(e, "vertexPane"), e._origLatLng = A, e._pmTempLayer = !0, e.on("dragstart", this._onMarkerDragStart, this), e.on("drag", this._onMarkerDrag, this), e.on("dragend", this._onMarkerDragEnd, this), e.on("click", this._onVertexClick, this), this._helperLayers.addLayer(e), e;
  }, _moveCircle(A) {
    if (A.target._cancelDragEventChain) return;
    let e = this._centerMarker.getLatLng();
    this._layer.setLatLng(e);
    let t = this._layer._radius, i = this._getLatLngOnCircle(e, t);
    this._outerMarker._latlng = i, this._outerMarker.update(), this._syncHintLine(), this._updateHiddenPolyCircle(), this._fireCenterPlaced("Edit"), this._fireChange(this._layer.getLatLng(), "Edit");
  }, _syncMarkers() {
    let A = this._layer.getLatLng(), e = this._layer._radius, t = this._getLatLngOnCircle(A, e);
    this._outerMarker.setLatLng(t), this._centerMarker.setLatLng(A), this._syncHintLine(), this._updateHiddenPolyCircle();
  }, _resizeCircle() {
    this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()), this._syncHintLine(), this._syncCircleRadius();
  }, _syncCircleRadius() {
    let A = this._centerMarker.getLatLng(), e = this._outerMarker.getLatLng(), t = this._distanceCalculation(A, e);
    this.options[this._minRadiusOption] && t < this.options[this._minRadiusOption] ? this._layer.setRadius(this.options[this._minRadiusOption]) : this.options[this._maxRadiusOption] && t > this.options[this._maxRadiusOption] ? this._layer.setRadius(this.options[this._maxRadiusOption]) : this._layer.setRadius(t), this._updateHiddenPolyCircle(), this._fireChange(this._layer.getLatLng(), "Edit");
  }, _syncHintLine() {
    let A = this._centerMarker.getLatLng(), e = this._outerMarker.getLatLng();
    this._hintline.setLatLngs([A, e]);
  }, _removeMarker() {
    this.options[this._editableOption] && this.disable(), this._layer.remove(), this._fireRemove(this._layer), this._fireRemove(this._map, this._layer);
  }, _onDragStart() {
    this._map.pm.Draw.CircleMarker._layerIsDragging = !0;
  }, _onMarkerDragStart(A) {
    this._vertexValidation("move", A) && this._fireMarkerDragStart(A);
  }, _onMarkerDrag(A) {
    let e = A.target;
    e instanceof L.Marker && !this._vertexValidationDrag(e) || this._fireMarkerDrag(A);
  }, _onMarkerDragEnd(A) {
    this._extedingMarkerDragEnd();
    let e = A.target;
    this._vertexValidationDragEnd(e) && (this.options[this._editableOption] && (this._fireEdit(), this._layerEdited = !0), this._fireMarkerDragEnd(A));
  }, _extedingMarkerDragEnd() {
    this._map.pm.Draw.CircleMarker._layerIsDragging = !1;
  }, _initSnappableMarkersDrag() {
    let A = this._layer;
    this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, A.off("pm:drag", this._handleSnapping, this), A.on("pm:drag", this._handleSnapping, this), A.off("pm:dragend", this._cleanupSnapping, this), A.on("pm:dragend", this._cleanupSnapping, this), A.off("pm:dragstart", this._unsnap, this), A.on("pm:dragstart", this._unsnap, this);
  }, _disableSnappingDrag() {
    let A = this._layer;
    A.off("pm:drag", this._handleSnapping, this), A.off("pm:dragend", this._cleanupSnapping, this), A.off("pm:dragstart", this._unsnap, this);
  }, _updateHiddenPolyCircle() {
    let A = this._layer._map || this._map;
    if (A) {
      let e = L.PM.Utils.pxRadiusToMeterRadius(this._layer.getRadius(), A, this._layer.getLatLng()), t = L.circle(this._layer.getLatLng(), this._layer.options);
      t.setRadius(e);
      let i = A && A.pm._isCRSSimple();
      this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(t, 200, !i).getLatLngs()) : this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(t, 200, !i), this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer);
    }
  }, _getNewDestinationOfOuterMarker() {
    let A = this._centerMarker.getLatLng(), e = this._outerMarker.getLatLng(), t = this._distanceCalculation(A, e);
    return this.options[this._minRadiusOption] && t < this.options[this._minRadiusOption] ? e = yr(this._map, A, e, this._getMinDistanceInMeter(A)) : this.options[this._maxRadiusOption] && t > this.options[this._maxRadiusOption] && (e = yr(this._map, A, e, this._getMaxDistanceInMeter(A))), e;
  }, _handleOuterMarkerSnapping() {
    if (this._outerMarker._snapped) {
      let A = this._centerMarker.getLatLng(), e = this._outerMarker.getLatLng(), t = this._distanceCalculation(A, e);
      this.options[this._minRadiusOption] && t < this.options[this._minRadiusOption] ? this._outerMarker.setLatLng(this._outerMarker._orgLatLng) : this.options[this._maxRadiusOption] && t > this.options[this._maxRadiusOption] && this._outerMarker.setLatLng(this._outerMarker._orgLatLng);
    }
    this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker());
  }, _distanceCalculation(A, e) {
    return this._map.project(A).distanceTo(this._map.project(e));
  }, _getMinDistanceInMeter(A) {
    return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._minRadiusOption], this._map, A);
  }, _getMaxDistanceInMeter(A) {
    return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._maxRadiusOption], this._map, A);
  }, _onVertexClick(A) {
    A.target._dragging || this._fireVertexClick(A, void 0);
  } }), RA.Circle = RA.CircleMarker.extend({ _shape: "Circle", initialize(A) {
    this._layer = A, this._enabled = !1, this._minRadiusOption = "minRadiusCircle", this._maxRadiusOption = "maxRadiusCircle", this._editableOption = "resizeableCircle", this._updateHiddenPolyCircle();
  }, enable(A) {
    L.PM.Edit.CircleMarker.prototype.enable.call(this, A || {});
  }, _extendingEnable() {
  }, _extendingDisable() {
    this._layer.off("remove", this.disable, this);
    let A = this._layer._path ? this._layer._path : this._layer._renderer._container;
    L.DomUtil.removeClass(A, "leaflet-pm-draggable");
  }, _extendingApplyOptions() {
  }, _syncMarkers() {
  }, _removeMarker() {
  }, _onDragStart() {
  }, _extedingMarkerDragEnd() {
  }, _updateHiddenPolyCircle() {
    let A = this._map && this._map.pm._isCRSSimple();
    this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(this._layer, 200, !A).getLatLngs()) : this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(this._layer, 200, !A), this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer);
  }, _distanceCalculation(A, e) {
    return this._map.distance(A, e);
  }, _getMinDistanceInMeter() {
    return this.options[this._minRadiusOption];
  }, _getMaxDistanceInMeter() {
    return this.options[this._maxRadiusOption];
  }, _onVertexClick(A) {
    A.target._dragging || this._fireVertexClick(A, void 0);
  } }), RA.ImageOverlay = RA.extend({ _shape: "ImageOverlay", initialize(A) {
    this._layer = A, this._enabled = !1;
  }, toggleEdit(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, enabled() {
    return this._enabled;
  }, enable(A = { draggable: !0, snappable: !0 }) {
    if (L.Util.setOptions(this, A), this._map = this._layer._map, !!this._map) {
      if (!this.options.allowEditing) {
        this.disable();
        return;
      }
      this.enabled() || this.disable(), this.enableLayerDrag(), this._layer.on("remove", this.disable, this), this._enabled = !0, this._otherSnapLayers = this._findCorners(), this._fireEnable();
    }
  }, disable() {
    this._dragging || (this._map || (this._map = this._layer._map), this.disableLayerDrag(), this._layer.off("remove", this.disable, this), this.enabled() || (this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable()), this._enabled = !1);
  }, _findCorners() {
    let A = this._layer.getBounds(), e = A.getNorthWest(), t = A.getNorthEast(), i = A.getSouthEast(), o = A.getSouthWest();
    return [e, t, i, o];
  } }), RA.Text = RA.extend({ _shape: "Text", initialize(A) {
    this._layer = A, this._enabled = !1;
  }, enable(A) {
    if (L.Util.setOptions(this, A), !!this.textArea) {
      if (!this.options.allowEditing || !this._layer._map) {
        this.disable();
        return;
      }
      this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._safeToCacheDragState = !0, this._focusChange(), this.textArea.readOnly = !1, this.textArea.classList.remove("pm-disabled"), this._layer.on("remove", this.disable, this), L.DomEvent.on(this.textArea, "input", this._autoResize, this), L.DomEvent.on(this.textArea, "focus", this._focusChange, this), L.DomEvent.on(this.textArea, "blur", this._focusChange, this), this._layer.on("dblclick", L.DomEvent.stop), L.DomEvent.off(this.textArea, "mousedown", this._preventTextSelection), this._enabled = !0, this._fireEnable();
    }
  }, disable() {
    if (!this.enabled()) return;
    this._layer.off("remove", this.disable, this), L.DomEvent.off(this.textArea, "input", this._autoResize, this), L.DomEvent.off(this.textArea, "focus", this._focusChange, this), L.DomEvent.off(this.textArea, "blur", this._focusChange, this), document.removeEventListener("click", this._documentClickThis, { capture: !0 }), this._focusChange(), this.textArea.readOnly = !0, this.textArea.classList.add("pm-disabled");
    let A = document.activeElement;
    this.textArea.focus(), this.textArea.selectionStart = 0, this.textArea.selectionEnd = 0, L.DomEvent.on(this.textArea, "mousedown", this._preventTextSelection), A.focus(), this._disableOnBlurActive = !1, this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable(), this._enabled = !1;
  }, enabled() {
    return this._enabled;
  }, toggleEdit(A) {
    this.enabled() ? this.disable() : this.enable(A);
  }, applyOptions() {
    this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping();
  }, _initSnappableMarkers() {
    let A = this._layer;
    this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, A.off("pm:drag", this._handleSnapping, this), A.on("pm:drag", this._handleSnapping, this), A.off("pm:dragend", this._cleanupSnapping, this), A.on("pm:dragend", this._cleanupSnapping, this), A.off("pm:dragstart", this._unsnap, this), A.on("pm:dragstart", this._unsnap, this);
  }, _disableSnapping() {
    let A = this._layer;
    A.off("pm:drag", this._handleSnapping, this), A.off("pm:dragend", this._cleanupSnapping, this), A.off("pm:dragstart", this._unsnap, this);
  }, _autoResize() {
    this.textArea.style.height = "1px", this.textArea.style.width = "1px";
    let A = this.textArea.scrollHeight > 21 ? this.textArea.scrollHeight : 21, e = this.textArea.scrollWidth > 16 ? this.textArea.scrollWidth : 16;
    this.textArea.style.height = `${A}px`, this.textArea.style.width = `${e}px`, this._layer.options.text = this.getText(), this._fireTextChange(this.getText());
  }, _disableOnBlur() {
    this._disableOnBlurActive = !0, setTimeout(() => {
      this.enabled() && (this._documentClickThis = this._documentClickThis || this._documentClick.bind(this), document.addEventListener("click", this._documentClickThis, { capture: !0 }));
    }, 100);
  }, _documentClick(A) {
    A.target !== this.textArea && (this.disable(), !this.getText() && this.options.removeIfEmpty && this.remove());
  }, _focusChange(A = {}) {
    let e = this._hasFocus;
    this._hasFocus = A.type === "focus", !e != !this._hasFocus && (this._hasFocus ? (this._applyFocus(), this._focusText = this.getText(), this._fireTextFocus()) : (this._removeFocus(), this._fireTextBlur(), this._focusText !== this.getText() && (this._fireEdit(), this._layerEdited = !0)));
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
  }, setText(A) {
    A && (this.textArea.value = A), this._autoResize();
  }, getText() {
    return this.textArea.value;
  }, _initTextMarker() {
    if (this.textArea = L.PM.Draw.Text.prototype._createTextArea.call(this), this.options.className) {
      let e = this.options.className.split(" ");
      this.textArea.classList.add(...e);
    }
    let A = L.PM.Draw.Text.prototype._createTextIcon.call(this, this.textArea);
    this._layer.setIcon(A), this._layer.once("add", this._createTextMarker, this);
  }, _createTextMarker(A = !1) {
    this._layer.off("add", this._createTextMarker, this), this._layer.getElement().tabIndex = -1, this.textArea.wrap = "off", this.textArea.style.overflow = "hidden", this.textArea.style.height = L.DomUtil.getStyle(this.textArea, "font-size"), this.textArea.style.width = "1px", this._layer.options.text && this.setText(this._layer.options.text), this._autoResize(), A === !0 && (this.enable(), this.focus(), this._disableOnBlur());
  }, _preventTextSelection(A) {
    A.preventDefault();
  } });
  var rn = function(A, e, t, i, o, u) {
    this._matrix = [A, e, t, i, o, u];
  };
  rn.init = () => new L.PM.Matrix(1, 0, 0, 1, 0, 0), rn.prototype = { transform(A) {
    return this._transform(A.clone());
  }, _transform(A) {
    let e = this._matrix, { x: t, y: i } = A;
    return A.x = e[0] * t + e[1] * i + e[4], A.y = e[2] * t + e[3] * i + e[5], A;
  }, untransform(A) {
    let e = this._matrix;
    return new L.Point((A.x / e[0] - e[4]) / e[0], (A.y / e[2] - e[5]) / e[2]);
  }, clone() {
    let A = this._matrix;
    return new L.PM.Matrix(A[0], A[1], A[2], A[3], A[4], A[5]);
  }, translate(A) {
    if (A === void 0) return new L.Point(this._matrix[4], this._matrix[5]);
    let e, t;
    return typeof A == "number" ? (e = A, t = A) : (e = A.x, t = A.y), this._add(1, 0, 0, 1, e, t);
  }, scale(A, e) {
    if (A === void 0) return new L.Point(this._matrix[0], this._matrix[3]);
    let t, i;
    return e = e || L.point(0, 0), typeof A == "number" ? (t = A, i = A) : (t = A.x, i = A.y), this._add(t, 0, 0, i, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y);
  }, rotate(A, e) {
    let t = Math.cos(A), i = Math.sin(A);
    return e = e || new L.Point(0, 0), this._add(t, i, -i, t, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y);
  }, flip() {
    return this._matrix[1] *= -1, this._matrix[2] *= -1, this;
  }, _add(A, e, t, i, o, u) {
    let h = [[], [], []], c = this._matrix, p = [[c[0], c[2], c[4]], [c[1], c[3], c[5]], [0, 0, 1]], f = [[A, t, o], [e, i, u], [0, 0, 1]], F;
    A && A instanceof L.PM.Matrix && (c = A._matrix, f = [[c[0], c[2], c[4]], [c[1], c[3], c[5]], [0, 0, 1]]);
    for (let y = 0; y < 3; y += 1) for (let I = 0; I < 3; I += 1) {
      F = 0;
      for (let k = 0; k < 3; k += 1) F += p[y][k] * f[k][I];
      h[y][I] = F;
    }
    return this._matrix = [h[0][0], h[1][0], h[0][1], h[1][1], h[0][2], h[1][2]], this;
  } };
  var s0 = rn, o0 = { calcMiddleLatLng(A, e, t) {
    let i = A.project(e), o = A.project(t);
    return A.unproject(i._add(o)._divideBy(2));
  }, findLayers(A) {
    let e = [];
    return A.eachLayer((t) => {
      (t instanceof L.Polyline || t instanceof L.Marker || t instanceof L.Circle || t instanceof L.CircleMarker || t instanceof L.ImageOverlay) && e.push(t);
    }), e = e.filter((t) => !!t.pm), e = e.filter((t) => !t._pmTempLayer), e = e.filter((t) => !L.PM.optIn && !t.options.pmIgnore || L.PM.optIn && t.options.pmIgnore === !1), e;
  }, circleToPolygon(A, e = 60, t = !0) {
    let i = A.getLatLng(), o = A.getRadius(), u = La(i, o, e, 0, t), h = [];
    for (let c = 0; c < u.length; c += 1) {
      let p = [u[c].lat, u[c].lng];
      h.push(p);
    }
    return L.polygon(h, A.options);
  }, disablePopup(A) {
    A.getPopup() && (A._tempPopupCopy = A.getPopup(), A.unbindPopup());
  }, enablePopup(A) {
    A._tempPopupCopy && (A.bindPopup(A._tempPopupCopy), delete A._tempPopupCopy);
  }, _fireEvent(A, e, t, i = !1) {
    A.fire(e, t, i);
    let { groups: o } = this.getAllParentGroups(A);
    o.forEach((u) => {
      u.fire(e, t, i);
    });
  }, getAllParentGroups(A) {
    let e = [], t = [], i = (o) => {
      for (let u in o._eventParents) if (e.indexOf(u) === -1) {
        e.push(u);
        let h = o._eventParents[u];
        t.push(h), i(h);
      }
    };
    return !A._pmLastGroupFetch || !A._pmLastGroupFetch.time || (/* @__PURE__ */ new Date()).getTime() - A._pmLastGroupFetch.time > 1e3 ? (i(A), A._pmLastGroupFetch = { time: (/* @__PURE__ */ new Date()).getTime(), groups: t, groupIds: e }, { groupIds: e, groups: t }) : { groups: A._pmLastGroupFetch.groups, groupIds: A._pmLastGroupFetch.groupIds };
  }, createGeodesicPolygon: La, getTranslation: dA, findDeepCoordIndex(A, e, t = !0) {
    let i, o = (h) => (c, p) => {
      let f = h.concat(p);
      if (t) {
        if (c.lat && c.lat === e.lat && c.lng === e.lng) return i = f, !0;
      } else if (c.lat && L.latLng(c).equals(e)) return i = f, !0;
      return Array.isArray(c) && c.some(o(f));
    };
    A.some(o([]));
    let u = {};
    return i && (u = { indexPath: i, index: i[i.length - 1], parentPath: i.slice(0, i.length - 1) }), u;
  }, findDeepMarkerIndex(A, e) {
    let t, i = (u) => (h, c) => {
      let p = u.concat(c);
      return h._leaflet_id === e._leaflet_id ? (t = p, !0) : Array.isArray(h) && h.some(i(p));
    };
    A.some(i([]));
    let o = {};
    return t && (o = { indexPath: t, index: t[t.length - 1], parentPath: t.slice(0, t.length - 1) }), o;
  }, _getIndexFromSegment(A, e) {
    if (e && e.length === 2) {
      let t = this.findDeepCoordIndex(A, e[0]), i = this.findDeepCoordIndex(A, e[1]), o = Math.max(t.index, i.index);
      return (t.index === 0 || i.index === 0) && o !== 1 && (o += 1), { indexA: t, indexB: i, newIndex: o, indexPath: t.indexPath, parentPath: t.parentPath };
    }
    return null;
  }, _getRotatedRectangle(A, e, t, i) {
    let o = mt(i, A), u = mt(i, e), h = t * Math.PI / 180, c = Math.cos(h), p = Math.sin(h), f = (u.x - o.x) * c + (u.y - o.y) * p, F = (u.y - o.y) * c - (u.x - o.x) * p, y = f * c + o.x, I = f * p + o.y, k = -F * p + o.x, G = F * c + o.y, J = Kr(i, o), eA = Kr(i, { x: y, y: I }), rA = Kr(i, u), Q = Kr(i, { x: k, y: G });
    return [J, eA, rA, Q];
  }, pxRadiusToMeterRadius(A, e, t) {
    let i = e.project(t), o = L.point(i.x + A, i.y);
    return e.distance(e.unproject(o), t);
  } }, u0 = o0;
  L.PM = L.PM || { version: yl.version, Map: Bh, Toolbar: dh, Draw: VA, Edit: RA, Utils: u0, Matrix: s0, activeLang: "en", optIn: !1, initialize(A) {
    this.addInitHooks(A);
  }, setOptIn(A) {
    this.optIn = !!A;
  }, addInitHooks() {
    function A() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Map(this)) : this.options.pmIgnore || (this.pm = new L.PM.Map(this)), this.pm && this.pm.setGlobalOptions({});
    }
    L.Map.addInitHook(A);
    function e() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.LayerGroup(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.LayerGroup(this));
    }
    L.LayerGroup.addInitHook(e);
    function t() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.options.textMarker ? (this.pm = new L.PM.Edit.Text(this), this.options._textMarkerOverPM || this.pm._initTextMarker(), delete this.options._textMarkerOverPM) : this.pm = new L.PM.Edit.Marker(this)) : this.options.pmIgnore || (this.options.textMarker ? (this.pm = new L.PM.Edit.Text(this), this.options._textMarkerOverPM || this.pm._initTextMarker(), delete this.options._textMarkerOverPM) : this.pm = new L.PM.Edit.Marker(this));
    }
    L.Marker.addInitHook(t);
    function i() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.CircleMarker(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.CircleMarker(this));
    }
    L.CircleMarker.addInitHook(i);
    function o() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Line(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Line(this));
    }
    L.Polyline.addInitHook(o);
    function u() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Polygon(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Polygon(this));
    }
    L.Polygon.addInitHook(u);
    function h() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Rectangle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Rectangle(this));
    }
    L.Rectangle.addInitHook(h);
    function c() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Circle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Circle(this));
    }
    L.Circle.addInitHook(c);
    function p() {
      this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.ImageOverlay(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.ImageOverlay(this));
    }
    L.ImageOverlay.addInitHook(p);
  }, reInitLayer(A) {
    A instanceof L.LayerGroup && A.eachLayer((e) => {
      this.reInitLayer(e);
    }), A.pm || L.PM.optIn && A.options.pmIgnore !== !1 || A.options.pmIgnore || (A instanceof L.Map ? A.pm = new L.PM.Map(A) : A instanceof L.Marker ? A.options.textMarker ? (A.pm = new L.PM.Edit.Text(A), A.pm._initTextMarker(), A.pm._createTextMarker(!1)) : A.pm = new L.PM.Edit.Marker(A) : A instanceof L.Circle ? A.pm = new L.PM.Edit.Circle(A) : A instanceof L.CircleMarker ? A.pm = new L.PM.Edit.CircleMarker(A) : A instanceof L.Rectangle ? A.pm = new L.PM.Edit.Rectangle(A) : A instanceof L.Polygon ? A.pm = new L.PM.Edit.Polygon(A) : A instanceof L.Polyline ? A.pm = new L.PM.Edit.Line(A) : A instanceof L.LayerGroup ? A.pm = new L.PM.Edit.LayerGroup(A) : A instanceof L.ImageOverlay && (A.pm = new L.PM.Edit.ImageOverlay(A)));
  } }, L.version === "1.7.1" && L.Canvas.include({ _onClick(A) {
    let e = this._map.mouseEventToLayerPoint(A), t, i;
    for (let o = this._drawFirst; o; o = o.next) t = o.layer, t.options.interactive && t._containsPoint(e) && (!(A.type === "click" || A.type === "preclick") || !this._map._draggableMoved(t)) && (i = t);
    i && (L.DomEvent.fakeStop(A), this._fireEvent([i], A));
  } }), L.PM.initialize();
})();
const g0 = { class: "base-map-wrapper" }, p0 = ["id"], f0 = /* @__PURE__ */ Br({
  __name: "BaseMap",
  props: {
    options: { default: () => ({}) },
    basemap: { default: "tianditu_img" },
    tiandituToken: { default: "93724b915d1898d946ca7dc7b765dda5" },
    showAnnotation: { type: Boolean, default: !0 }
  },
  emits: ["map-ready"],
  setup(n, { expose: r, emit: a }) {
    const s = {
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
    let l = 0;
    const B = n, g = a, w = UA(`base-map-${++l}`), C = UA(null), E = UA(null), v = UA(null), D = () => {
      const iA = { ...{
        center: [35, 110],
        zoom: 4,
        maxZoom: 18,
        minZoom: 2,
        zoomControl: !0
      }, ...B.options }, { center: uA, ...CA } = iA;
      C.value = yt.map(w.value, CA).setView(
        uA,
        iA.zoom
      ), q(B.basemap), g("map-ready", C.value);
    }, R = () => C.value, q = (sA) => {
      if (!C.value) return;
      nA();
      const iA = s[sA];
      if (!iA) return;
      let uA = iA.url;
      if (uA.includes("{tk}") && (uA = uA.replace(/{tk}/g, B.tiandituToken)), E.value = yt.tileLayer(uA, iA.options), E.value.addTo(C.value), B.showAnnotation && iA.annotation) {
        let CA = iA.annotation.url;
        CA.includes("{tk}") && (CA = CA.replace(/{tk}/g, B.tiandituToken)), v.value = yt.tileLayer(
          CA,
          iA.annotation.options
        ), v.value.addTo(C.value);
      }
    }, N = (sA, iA = {}) => {
      C.value && (nA(), E.value = yt.tileLayer(sA, iA), E.value.addTo(C.value));
    }, X = (sA, iA = {}) => {
      C.value && ($(), v.value = yt.tileLayer(sA, {
        transparent: !0,
        zIndex: 3,
        ...iA
      }), v.value.addTo(C.value));
    }, nA = () => {
      C.value && (E.value && (C.value.removeLayer(E.value), E.value = null), $());
    }, $ = () => {
      C.value && v.value && (C.value.removeLayer(v.value), v.value = null);
    }, AA = (sA) => {
      if (C.value)
        if (sA && !v.value) {
          const iA = s[B.basemap];
          if (iA && iA.annotation) {
            let uA = iA.annotation.url.replace(/{tk}/g, B.tiandituToken);
            v.value = yt.tileLayer(uA, iA.annotation.options), v.value.addTo(C.value);
          }
        } else !sA && v.value && $();
    }, BA = (sA, iA) => {
      var uA;
      (uA = C.value) == null || uA.setView(sA, iA);
    }, Y = (sA, iA = {}) => {
      var uA;
      (uA = C.value) == null || uA.fitBounds(sA, { padding: [50, 50], ...iA });
    }, tA = () => {
      C.value && (C.value.remove(), C.value = null);
    }, V = () => Object.keys(s);
    return ra(() => {
      D();
    }), ia(() => {
      tA();
    }), r({
      getMap: R,
      setBasemap: q,
      setCustomBasemap: N,
      setCustomAnnotation: X,
      removeBasemap: nA,
      removeAnnotation: $,
      toggleAnnotation: AA,
      setView: BA,
      fitBounds: Y,
      destroy: tA,
      getBasemapPresets: V
    }), (sA, iA) => (MA(), DA("div", g0, [
      GA("div", {
        id: w.value,
        class: "map-container"
      }, null, 8, p0)
    ]));
  }
}), gr = (n, r) => {
  const a = n.__vccOpts || n;
  for (const [s, l] of r)
    a[s] = l;
  return a;
}, d0 = /* @__PURE__ */ gr(f0, [["__scopeId", "data-v-37eeeb99"]]);
function C0(n, r, a = 10) {
  return !(n.x + n.width + a < r.x || r.x + r.width + a < n.x || n.y + n.height + a < r.y || r.y + r.height + a < n.y);
}
function w0(n, r, a, s, l = 30, B = 600) {
  const w = [
    { dx: 0, dy: -1 },
    // 上
    { dx: 1, dy: -1 },
    // 右上
    { dx: 1, dy: 0 },
    // 右
    { dx: -1, dy: -1 },
    // 左上
    { dx: 1, dy: 1 },
    // 右下
    { dx: -1, dy: 0 },
    // 左
    { dx: 0, dy: 1 },
    // 下
    { dx: -1, dy: 1 }
    // 左下
  ];
  let C = null, E = -1 / 0;
  for (let v = l; v <= B; v += l) {
    for (const D of w) {
      const R = n.x + D.dx * v - r.width / 2, q = n.y + D.dy * v - r.height / 2, N = {
        x: R,
        y: q,
        width: r.width,
        height: r.height
      };
      let X = !1;
      for (const $ of a)
        if (C0(N, $)) {
          X = !0;
          break;
        }
      if (X) continue;
      const nA = m0(N, s, n, v, 10);
      if (nA > E && (E = nA, C = { x: R, y: q }, nA >= 1e3 && v <= l * 3))
        return C;
    }
    if (E >= 1e3)
      return C;
  }
  return C || {
    x: Math.max(10, Math.min(n.x - r.width / 2, s.width - r.width - 10)),
    y: Math.max(10, Math.min(n.y - r.height - 50, s.height - r.height - 10))
  };
}
function m0(n, r, a, s, l) {
  const B = Math.max(n.x, l), g = Math.min(n.x + n.width, r.width - l), w = Math.max(n.y, l), C = Math.min(n.y + n.height, r.height - l), E = Math.max(0, g - B), v = Math.max(0, C - w), D = E * v, R = n.width * n.height, q = D / R;
  let N = 0;
  return q >= 0.99 ? N = 1e3 : N = q * 500, N += (1 - s / 600) * 100, N;
}
function y0(n, r, a = { width: 180, height: 120 }) {
  const s = [], l = r.getContainer(), B = {
    width: l.clientWidth,
    height: l.clientHeight
  }, g = 50;
  return n.map((w) => {
    const C = r.latLngToContainerPoint([w.lat, w.lng]), E = { x: C.x, y: C.y }, v = w.size || a;
    if (!(E.x >= -g && E.x <= B.width + g && E.y >= -g && E.y <= B.height + g))
      return {
        ...w,
        position: { x: -9999, y: -9999 },
        // 放到屏幕外
        anchor: E,
        size: v
      };
    const R = w0(E, v, s, B);
    return s.push({
      x: R.x,
      y: R.y,
      width: v.width,
      height: v.height
    }), {
      ...w,
      position: R,
      anchor: E,
      size: v
    };
  });
}
function Co(n, r) {
  const a = n.x + n.width / 2, s = n.y + n.height / 2, l = r.x - a, B = r.y - s;
  return Math.abs(l) > Math.abs(B) ? l > 0 ? { x: n.x + n.width, y: s } : { x: n.x, y: s } : B > 0 ? { x: a, y: n.y + n.height } : { x: a, y: n.y };
}
const _0 = { class: "leader-panel-wrapper" }, Q0 = {
  key: 0,
  class: "leader-line-svg"
}, F0 = ["x1", "y1", "x2", "y2"], E0 = ["cx", "cy"], v0 = { class: "panel-header" }, U0 = { class: "panel-title" }, L0 = { class: "panel-body" }, b0 = {
  key: 0,
  class: "panel-table"
}, x0 = {
  key: 1,
  class: "panel-text"
}, M0 = /* @__PURE__ */ Br({
  __name: "LeaderPanel",
  props: {
    panel: {},
    map: {},
    showLine: { type: Boolean }
  },
  emits: ["dragEnd", "positionUpdate"],
  setup(n, { emit: r }) {
    const a = n, s = r, l = UA(!1), B = UA({ x: 0, y: 0 }), g = UA({ x: 0, y: 0 }), w = UA({ x: 0, y: 0 }), C = UA(null), E = lt(() => ({
      left: `${g.value.x}px`,
      top: `${g.value.y}px`,
      width: a.panel.size ? `${a.panel.size.width}px` : "auto"
    })), v = lt(() => w.value), D = lt(() => {
      if (!C.value)
        return { x: g.value.x, y: g.value.y };
      const Y = {
        x: g.value.x,
        y: g.value.y,
        width: C.value.offsetWidth || 180,
        height: C.value.offsetHeight || 100
      };
      return Co(Y, w.value);
    });
    Mn(() => a.panel.position, (Y) => {
      Y && (g.value = { ...Y }, In(() => AA()));
    }, { immediate: !0, deep: !0 }), Mn(() => a.panel.anchor, (Y) => {
      Y && (w.value = { ...Y });
    }, { immediate: !0, deep: !0 });
    const R = () => {
      a.map && (a.map.on("move", N), a.map.on("zoom", N));
    }, q = () => {
      a.map && (a.map.off("move", N), a.map.off("zoom", N));
    }, N = () => {
      if (a.panel.lat && a.panel.lng && a.map) {
        const Y = a.map.latLngToContainerPoint([
          a.panel.lat,
          a.panel.lng
        ]);
        w.value = { x: Y.x, y: Y.y };
      }
    }, X = (Y) => {
      Y.button === 0 && (Y.preventDefault(), Y.stopPropagation(), l.value = !0, B.value = {
        x: Y.clientX - g.value.x,
        y: Y.clientY - g.value.y
      }, document.addEventListener("mousemove", nA), document.addEventListener("mouseup", $));
    }, nA = (Y) => {
      l.value && (g.value = {
        x: Y.clientX - B.value.x,
        y: Y.clientY - B.value.y
      }, AA());
    }, $ = () => {
      l.value && (l.value = !1, BA(), s("dragEnd", a.panel.id, { ...g.value }));
    }, AA = () => {
      const Y = C.value ? {
        width: C.value.offsetWidth,
        height: C.value.offsetHeight
      } : null;
      s("positionUpdate", a.panel.id, { ...g.value }, Y);
    }, BA = () => {
      document.removeEventListener("mousemove", nA), document.removeEventListener("mouseup", $);
    };
    return ra(() => {
      R(), In(() => AA());
    }), ia(() => {
      q(), BA();
    }), (Y, tA) => c0((MA(), DA("div", _0, [
      n.showLine ? (MA(), DA("svg", Q0, [
        GA("line", {
          x1: D.value.x,
          y1: D.value.y,
          x2: v.value.x,
          y2: v.value.y,
          stroke: "#e74c3c",
          "stroke-width": "2"
        }, null, 8, F0),
        GA("circle", {
          cx: v.value.x,
          cy: v.value.y,
          r: "5",
          fill: "#e74c3c"
        }, null, 8, E0)
      ])) : sr("", !0),
      GA("div", {
        class: "panel-content",
        style: Bo(E.value),
        onMousedown: X,
        ref_key: "panelContent",
        ref: C
      }, [
        GA("div", v0, [
          GA("span", U0, ot(n.panel.title), 1)
        ]),
        GA("div", L0, [
          n.panel.tableData && n.panel.tableData.length ? (MA(), DA("table", b0, [
            (MA(!0), DA(or, null, ur(n.panel.tableData, (V, sA) => (MA(), DA("tr", { key: sA }, [
              (MA(!0), DA(or, null, ur(V, (iA, uA) => (MA(), DA("td", {
                key: uA,
                class: go({ "cell-label": uA === 0 })
              }, ot(iA), 3))), 128))
            ]))), 128))
          ])) : n.panel.content ? (MA(), DA("div", x0, ot(n.panel.content), 1)) : sr("", !0)
        ])
      ], 36)
    ], 512)), [
      [B0, n.panel.visible !== !1]
    ]);
  }
}), I0 = /* @__PURE__ */ gr(M0, [["__scopeId", "data-v-34e3aa18"]]), k0 = { class: "leader-lines-svg" }, D0 = ["x1", "y1", "x2", "y2"], H0 = ["cx", "cy"], S0 = /* @__PURE__ */ Br({
  __name: "LeaderPanelLayer",
  props: {
    map: {},
    panels: {},
    autoLayout: { type: Boolean }
  },
  emits: ["panelMoved"],
  setup(n, { emit: r }) {
    const a = n, s = r, l = UA([]), B = UA({}), g = UA({}), w = UA(0), C = lt(() => {
      if (w.value, !a.map) return [];
      const Y = a.map.getContainer(), tA = {
        width: Y.clientWidth,
        height: Y.clientHeight
      }, V = 50;
      return l.value.filter((sA) => {
        if (sA.visible === !1) return !1;
        const iA = $(sA);
        return iA.x >= -V && iA.x <= tA.width + V && iA.y >= -V && iA.y <= tA.height + V;
      });
    }), E = (Y, tA) => {
      if (!tA || !l.value.length || Y.length !== tA.length) return !1;
      for (let V = 0; V < Y.length; V++) {
        const sA = Y[V], iA = tA[V];
        if (sA.id !== iA.id || sA.lat !== iA.lat || sA.lng !== iA.lng || sA.title !== iA.title)
          return !1;
      }
      return !0;
    }, v = (Y) => {
      Y.forEach((tA) => {
        const V = l.value.find((sA) => sA.id === tA.id);
        V && (V.visible = tA.visible);
      });
    }, D = (Y) => {
      if (!a.map || !Y.length) {
        l.value = [];
        return;
      }
      l.value = y0(
        Y.map((tA) => ({ ...tA })),
        a.map
      );
    }, R = () => {
      w.value++;
    }, q = () => {
      a.autoLayout && (B.value = {}, g.value = {}, D(a.panels));
    }, N = () => {
      a.autoLayout && (B.value = {}, g.value = {}, D(a.panels));
    }, X = (Y, tA) => {
      const V = l.value.findIndex((sA) => sA.id === Y);
      V !== -1 && (l.value[V].position = tA), s("panelMoved", Y, tA);
    }, nA = (Y, tA, V) => {
      B.value[Y] = tA, V && (g.value[Y] = V);
    }, $ = (Y) => {
      if (w.value, Y.lat && Y.lng && a.map) {
        const tA = a.map.latLngToContainerPoint([Y.lat, Y.lng]);
        return { x: tA.x, y: tA.y };
      }
      return Y.anchor || { x: 0, y: 0 };
    }, AA = (Y) => {
      const tA = B.value[Y.id] || Y.position || { x: 0, y: 0 }, V = g.value[Y.id] || Y.size || { width: 180, height: 100 }, sA = $(Y), iA = {
        x: tA.x,
        y: tA.y,
        width: V.width,
        height: V.height
      };
      return Co(iA, sA);
    }, BA = UA(null);
    return Mn(() => a.panels, (Y, tA) => {
      E(Y, tA) ? v(Y) : D(Y);
    }, { immediate: !0, deep: !0 }), ra(() => {
      a.map && (a.map.on("move", R), a.map.on("moveend", q), a.map.on("zoomend", N));
    }), ia(() => {
      a.map && (a.map.off("move", R), a.map.off("moveend", q), a.map.off("zoomend", N));
    }), (Y, tA) => (MA(), DA("div", {
      class: "leader-panel-layer",
      ref_key: "panelLayer",
      ref: BA
    }, [
      (MA(), DA("svg", k0, [
        (MA(!0), DA(or, null, ur(C.value, (V) => (MA(), DA("g", {
          key: "line-" + V.id
        }, [
          V.visible !== !1 ? (MA(), DA("line", {
            key: 0,
            x1: AA(V).x,
            y1: AA(V).y,
            x2: $(V).x,
            y2: $(V).y,
            stroke: "#e74c3c",
            "stroke-width": "2"
          }, null, 8, D0)) : sr("", !0),
          V.visible !== !1 ? (MA(), DA("circle", {
            key: 1,
            cx: $(V).x,
            cy: $(V).y,
            r: "5",
            fill: "#e74c3c"
          }, null, 8, H0)) : sr("", !0)
        ]))), 128))
      ])),
      (MA(!0), DA(or, null, ur(C.value, (V) => (MA(), po(I0, {
        key: V.id,
        panel: V,
        map: n.map,
        showLine: !1,
        onDragEnd: X,
        onPositionUpdate: nA
      }, null, 8, ["panel", "map"]))), 128))
    ], 512));
  }
}), T0 = /* @__PURE__ */ gr(S0, [["__scopeId", "data-v-28bc6137"]]), K0 = { class: "control-header" }, O0 = { class: "header-actions" }, R0 = { class: "control-body" }, P0 = { class: "auto-layout-switch" }, G0 = { class: "select-all" }, N0 = { class: "panel-list" }, V0 = { class: "panel-label" }, X0 = /* @__PURE__ */ Br({
  __name: "ControlPanel",
  props: {
    panels: {},
    autoLayout: { type: Boolean }
  },
  emits: ["togglePanel", "toggleAll", "autoLayoutChange", "screenshot"],
  setup(n, { emit: r }) {
    const a = n, s = r, l = UA(!1), B = UA(!1), g = lt(() => a.panels.filter((N) => N.visible !== !1).length), w = lt(() => a.panels.length > 0 && g.value === a.panels.length), C = lt(() => g.value > 0 && g.value < a.panels.length), E = () => {
      l.value = !l.value;
    }, v = (N) => {
      s("toggleAll", N.target.checked);
    }, D = (N, X) => {
      s("togglePanel", N, X);
    }, R = (N) => {
      s("autoLayoutChange", N);
    }, q = async () => {
      B.value = !0;
      try {
        await s("screenshot");
      } finally {
        setTimeout(() => {
          B.value = !1;
        }, 500);
      }
    };
    return (N, X) => {
      const nA = sn("a-button"), $ = sn("a-switch"), AA = sn("a-checkbox");
      return MA(), DA("div", {
        class: go(["control-panel", { collapsed: l.value }])
      }, [
        GA("div", K0, [
          X[1] || (X[1] = GA("span", null, "面板控制", -1)),
          GA("div", O0, [
            xt(nA, {
              size: "small",
              type: "primary",
              onClick: q,
              loading: B.value
            }, {
              default: on(() => [...X[0] || (X[0] = [
                un(" 📷 截图 ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        GA("div", R0, [
          GA("div", P0, [
            X[2] || (X[2] = GA("span", null, "拖拽后自动布局", -1)),
            xt($, {
              checked: n.autoLayout,
              onChange: R,
              size: "small"
            }, null, 8, ["checked"])
          ]),
          GA("div", G0, [
            xt(AA, {
              checked: w.value,
              indeterminate: C.value,
              onChange: v
            }, {
              default: on(() => [
                un(" 全选 (" + ot(g.value) + "/" + ot(n.panels.length) + ") ", 1)
              ]),
              _: 1
            }, 8, ["checked", "indeterminate"])
          ]),
          GA("div", N0, [
            (MA(!0), DA(or, null, ur(n.panels, (BA) => (MA(), DA("div", {
              key: BA.id,
              class: "panel-item"
            }, [
              xt(AA, {
                checked: BA.visible !== !1,
                onChange: (Y) => D(BA.id, Y.target.checked)
              }, {
                default: on(() => [
                  GA("span", V0, [
                    GA("span", {
                      class: "panel-color",
                      style: Bo({ background: BA.color || "#e74c3c" })
                    }, null, 4),
                    un(" " + ot(BA.title || BA.id), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["checked", "onChange"])
            ]))), 128))
          ])
        ]),
        GA("div", {
          class: "collapse-btn",
          onClick: E
        }, ot(l.value ? "◀" : "▶"), 1)
      ], 2);
    };
  }
}), J0 = /* @__PURE__ */ gr(X0, [["__scopeId", "data-v-d8c4d04f"]]);
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Dn = function(n, r) {
  return Dn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, s) {
    a.__proto__ = s;
  } || function(a, s) {
    for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (a[l] = s[l]);
  }, Dn(n, r);
};
function _e(n, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Dn(n, r);
  function a() {
    this.constructor = n;
  }
  n.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
}
var Hn = function() {
  return Hn = Object.assign || function(r) {
    for (var a, s = 1, l = arguments.length; s < l; s++) {
      a = arguments[s];
      for (var B in a) Object.prototype.hasOwnProperty.call(a, B) && (r[B] = a[B]);
    }
    return r;
  }, Hn.apply(this, arguments);
};
function ee(n, r, a, s) {
  function l(B) {
    return B instanceof a ? B : new a(function(g) {
      g(B);
    });
  }
  return new (a || (a = Promise))(function(B, g) {
    function w(v) {
      try {
        E(s.next(v));
      } catch (D) {
        g(D);
      }
    }
    function C(v) {
      try {
        E(s.throw(v));
      } catch (D) {
        g(D);
      }
    }
    function E(v) {
      v.done ? B(v.value) : l(v.value).then(w, C);
    }
    E((s = s.apply(n, [])).next());
  });
}
function ZA(n, r) {
  var a = { label: 0, sent: function() {
    if (B[0] & 1) throw B[1];
    return B[1];
  }, trys: [], ops: [] }, s, l, B, g;
  return g = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function w(E) {
    return function(v) {
      return C([E, v]);
    };
  }
  function C(E) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (s = 1, l && (B = E[0] & 2 ? l.return : E[0] ? l.throw || ((B = l.return) && B.call(l), 0) : l.next) && !(B = B.call(l, E[1])).done) return B;
      switch (l = 0, B && (E = [E[0] & 2, B.value]), E[0]) {
        case 0:
        case 1:
          B = E;
          break;
        case 4:
          return a.label++, { value: E[1], done: !1 };
        case 5:
          a.label++, l = E[1], E = [0];
          continue;
        case 7:
          E = a.ops.pop(), a.trys.pop();
          continue;
        default:
          if (B = a.trys, !(B = B.length > 0 && B[B.length - 1]) && (E[0] === 6 || E[0] === 2)) {
            a = 0;
            continue;
          }
          if (E[0] === 3 && (!B || E[1] > B[0] && E[1] < B[3])) {
            a.label = E[1];
            break;
          }
          if (E[0] === 6 && a.label < B[1]) {
            a.label = B[1], B = E;
            break;
          }
          if (B && a.label < B[2]) {
            a.label = B[2], a.ops.push(E);
            break;
          }
          B[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      E = r.call(n, a);
    } catch (v) {
      E = [6, v], l = 0;
    } finally {
      s = B = 0;
    }
    if (E[0] & 5) throw E[1];
    return { value: E[0] ? E[1] : void 0, done: !0 };
  }
}
function Pr(n, r, a) {
  if (arguments.length === 2) for (var s = 0, l = r.length, B; s < l; s++)
    (B || !(s in r)) && (B || (B = Array.prototype.slice.call(r, 0, s)), B[s] = r[s]);
  return n.concat(B || r);
}
var Pe = (
  /** @class */
  function() {
    function n(r, a, s, l) {
      this.left = r, this.top = a, this.width = s, this.height = l;
    }
    return n.prototype.add = function(r, a, s, l) {
      return new n(this.left + r, this.top + a, this.width + s, this.height + l);
    }, n.fromClientRect = function(r, a) {
      return new n(a.left + r.windowBounds.left, a.top + r.windowBounds.top, a.width, a.height);
    }, n.fromDOMRectList = function(r, a) {
      var s = Array.from(a).find(function(l) {
        return l.width !== 0;
      });
      return s ? new n(s.left + r.windowBounds.left, s.top + r.windowBounds.top, s.width, s.height) : n.EMPTY;
    }, n.EMPTY = new n(0, 0, 0, 0), n;
  }()
), Ei = function(n, r) {
  return Pe.fromClientRect(n, r.getBoundingClientRect());
}, Y0 = function(n) {
  var r = n.body, a = n.documentElement;
  if (!r || !a)
    throw new Error("Unable to get document size");
  var s = Math.max(Math.max(r.scrollWidth, a.scrollWidth), Math.max(r.offsetWidth, a.offsetWidth), Math.max(r.clientWidth, a.clientWidth)), l = Math.max(Math.max(r.scrollHeight, a.scrollHeight), Math.max(r.offsetHeight, a.offsetHeight), Math.max(r.clientHeight, a.clientHeight));
  return new Pe(0, 0, s, l);
}, vi = function(n) {
  for (var r = [], a = 0, s = n.length; a < s; ) {
    var l = n.charCodeAt(a++);
    if (l >= 55296 && l <= 56319 && a < s) {
      var B = n.charCodeAt(a++);
      (B & 64512) === 56320 ? r.push(((l & 1023) << 10) + (B & 1023) + 65536) : (r.push(l), a--);
    } else
      r.push(l);
  }
  return r;
}, kA = function() {
  for (var n = [], r = 0; r < arguments.length; r++)
    n[r] = arguments[r];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, n);
  var a = n.length;
  if (!a)
    return "";
  for (var s = [], l = -1, B = ""; ++l < a; ) {
    var g = n[l];
    g <= 65535 ? s.push(g) : (g -= 65536, s.push((g >> 10) + 55296, g % 1024 + 56320)), (l + 1 === a || s.length > 16384) && (B += String.fromCharCode.apply(String, s), s.length = 0);
  }
  return B;
}, gs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", z0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Gr = 0; Gr < gs.length; Gr++)
  z0[gs.charCodeAt(Gr)] = Gr;
var ps = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Nr = 0; Nr < ps.length; Nr++)
  jt[ps.charCodeAt(Nr)] = Nr;
var j0 = function(n) {
  var r = n.length * 0.75, a = n.length, s, l = 0, B, g, w, C;
  n[n.length - 1] === "=" && (r--, n[n.length - 2] === "=" && r--);
  var E = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(r) : new Array(r), v = Array.isArray(E) ? E : new Uint8Array(E);
  for (s = 0; s < a; s += 4)
    B = jt[n.charCodeAt(s)], g = jt[n.charCodeAt(s + 1)], w = jt[n.charCodeAt(s + 2)], C = jt[n.charCodeAt(s + 3)], v[l++] = B << 2 | g >> 4, v[l++] = (g & 15) << 4 | w >> 2, v[l++] = (w & 3) << 6 | C & 63;
  return E;
}, W0 = function(n) {
  for (var r = n.length, a = [], s = 0; s < r; s += 2)
    a.push(n[s + 1] << 8 | n[s]);
  return a;
}, Z0 = function(n) {
  for (var r = n.length, a = [], s = 0; s < r; s += 4)
    a.push(n[s + 3] << 24 | n[s + 2] << 16 | n[s + 1] << 8 | n[s]);
  return a;
}, ht = 5, na = 11, ln = 2, q0 = na - ht, wo = 65536 >> ht, $0 = 1 << ht, hn = $0 - 1, AB = 1024 >> ht, eB = wo + AB, tB = eB, rB = 32, iB = tB + rB, nB = 65536 >> na, aB = 1 << q0, sB = aB - 1, fs = function(n, r, a) {
  return n.slice ? n.slice(r, a) : new Uint16Array(Array.prototype.slice.call(n, r, a));
}, oB = function(n, r, a) {
  return n.slice ? n.slice(r, a) : new Uint32Array(Array.prototype.slice.call(n, r, a));
}, uB = function(n, r) {
  var a = j0(n), s = Array.isArray(a) ? Z0(a) : new Uint32Array(a), l = Array.isArray(a) ? W0(a) : new Uint16Array(a), B = 24, g = fs(l, B / 2, s[4] / 2), w = s[5] === 2 ? fs(l, (B + s[4]) / 2) : oB(s, Math.ceil((B + s[4]) / 4));
  return new lB(s[0], s[1], s[2], s[3], g, w);
}, lB = (
  /** @class */
  function() {
    function n(r, a, s, l, B, g) {
      this.initialValue = r, this.errorValue = a, this.highStart = s, this.highValueIndex = l, this.index = B, this.data = g;
    }
    return n.prototype.get = function(r) {
      var a;
      if (r >= 0) {
        if (r < 55296 || r > 56319 && r <= 65535)
          return a = this.index[r >> ht], a = (a << ln) + (r & hn), this.data[a];
        if (r <= 65535)
          return a = this.index[wo + (r - 55296 >> ht)], a = (a << ln) + (r & hn), this.data[a];
        if (r < this.highStart)
          return a = iB - nB + (r >> na), a = this.index[a], a += r >> ht & sB, a = this.index[a], a = (a << ln) + (r & hn), this.data[a];
        if (r <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, n;
  }()
), ds = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Vr = 0; Vr < ds.length; Vr++)
  hB[ds.charCodeAt(Vr)] = Vr;
var cB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Cs = 50, BB = 1, mo = 2, yo = 3, gB = 4, pB = 5, ws = 7, _o = 8, ms = 9, We = 10, Sn = 11, ys = 12, Tn = 13, fB = 14, Wt = 15, Kn = 16, Xr = 17, Vt = 18, dB = 19, _s = 20, On = 21, Xt = 22, cn = 23, _t = 24, se = 25, Zt = 26, qt = 27, Qt = 28, CB = 29, st = 30, wB = 31, Jr = 32, Yr = 33, Rn = 34, Pn = 35, Gn = 36, lr = 37, Nn = 38, hi = 39, ci = 40, Bn = 41, Qo = 42, mB = 43, yB = [9001, 65288], Fo = "!", fA = "×", zr = "÷", Vn = uB(cB), Ke = [st, Gn], Xn = [BB, mo, yo, pB], Eo = [We, _o], Qs = [qt, Zt], _B = Xn.concat(Eo), Fs = [Nn, hi, ci, Rn, Pn], QB = [Wt, Tn], FB = function(n, r) {
  r === void 0 && (r = "strict");
  var a = [], s = [], l = [];
  return n.forEach(function(B, g) {
    var w = Vn.get(B);
    if (w > Cs ? (l.push(!0), w -= Cs) : l.push(!1), ["normal", "auto", "loose"].indexOf(r) !== -1 && [8208, 8211, 12316, 12448].indexOf(B) !== -1)
      return s.push(g), a.push(Kn);
    if (w === gB || w === Sn) {
      if (g === 0)
        return s.push(g), a.push(st);
      var C = a[g - 1];
      return _B.indexOf(C) === -1 ? (s.push(s[g - 1]), a.push(C)) : (s.push(g), a.push(st));
    }
    if (s.push(g), w === wB)
      return a.push(r === "strict" ? On : lr);
    if (w === Qo || w === CB)
      return a.push(st);
    if (w === mB)
      return B >= 131072 && B <= 196605 || B >= 196608 && B <= 262141 ? a.push(lr) : a.push(st);
    a.push(w);
  }), [s, a, l];
}, gn = function(n, r, a, s) {
  var l = s[a];
  if (Array.isArray(n) ? n.indexOf(l) !== -1 : n === l)
    for (var B = a; B <= s.length; ) {
      B++;
      var g = s[B];
      if (g === r)
        return !0;
      if (g !== We)
        break;
    }
  if (l === We)
    for (var B = a; B > 0; ) {
      B--;
      var w = s[B];
      if (Array.isArray(n) ? n.indexOf(w) !== -1 : n === w)
        for (var C = a; C <= s.length; ) {
          C++;
          var g = s[C];
          if (g === r)
            return !0;
          if (g !== We)
            break;
        }
      if (w !== We)
        break;
    }
  return !1;
}, Es = function(n, r) {
  for (var a = n; a >= 0; ) {
    var s = r[a];
    if (s === We)
      a--;
    else
      return s;
  }
  return 0;
}, EB = function(n, r, a, s, l) {
  if (a[s] === 0)
    return fA;
  var B = s - 1;
  if (Array.isArray(l) && l[B] === !0)
    return fA;
  var g = B - 1, w = B + 1, C = r[B], E = g >= 0 ? r[g] : 0, v = r[w];
  if (C === mo && v === yo)
    return fA;
  if (Xn.indexOf(C) !== -1)
    return Fo;
  if (Xn.indexOf(v) !== -1 || Eo.indexOf(v) !== -1)
    return fA;
  if (Es(B, r) === _o)
    return zr;
  if (Vn.get(n[B]) === Sn || (C === Jr || C === Yr) && Vn.get(n[w]) === Sn || C === ws || v === ws || C === ms || [We, Tn, Wt].indexOf(C) === -1 && v === ms || [Xr, Vt, dB, _t, Qt].indexOf(v) !== -1 || Es(B, r) === Xt || gn(cn, Xt, B, r) || gn([Xr, Vt], On, B, r) || gn(ys, ys, B, r))
    return fA;
  if (C === We)
    return zr;
  if (C === cn || v === cn)
    return fA;
  if (v === Kn || C === Kn)
    return zr;
  if ([Tn, Wt, On].indexOf(v) !== -1 || C === fB || E === Gn && QB.indexOf(C) !== -1 || C === Qt && v === Gn || v === _s || Ke.indexOf(v) !== -1 && C === se || Ke.indexOf(C) !== -1 && v === se || C === qt && [lr, Jr, Yr].indexOf(v) !== -1 || [lr, Jr, Yr].indexOf(C) !== -1 && v === Zt || Ke.indexOf(C) !== -1 && Qs.indexOf(v) !== -1 || Qs.indexOf(C) !== -1 && Ke.indexOf(v) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [qt, Zt].indexOf(C) !== -1 && (v === se || [Xt, Wt].indexOf(v) !== -1 && r[w + 1] === se) || // ( OP | HY ) × NU
  [Xt, Wt].indexOf(C) !== -1 && v === se || // NU ×	(NU | SY | IS)
  C === se && [se, Qt, _t].indexOf(v) !== -1)
    return fA;
  if ([se, Qt, _t, Xr, Vt].indexOf(v) !== -1)
    for (var D = B; D >= 0; ) {
      var R = r[D];
      if (R === se)
        return fA;
      if ([Qt, _t].indexOf(R) !== -1)
        D--;
      else
        break;
    }
  if ([qt, Zt].indexOf(v) !== -1)
    for (var D = [Xr, Vt].indexOf(C) !== -1 ? g : B; D >= 0; ) {
      var R = r[D];
      if (R === se)
        return fA;
      if ([Qt, _t].indexOf(R) !== -1)
        D--;
      else
        break;
    }
  if (Nn === C && [Nn, hi, Rn, Pn].indexOf(v) !== -1 || [hi, Rn].indexOf(C) !== -1 && [hi, ci].indexOf(v) !== -1 || [ci, Pn].indexOf(C) !== -1 && v === ci || Fs.indexOf(C) !== -1 && [_s, Zt].indexOf(v) !== -1 || Fs.indexOf(v) !== -1 && C === qt || Ke.indexOf(C) !== -1 && Ke.indexOf(v) !== -1 || C === _t && Ke.indexOf(v) !== -1 || Ke.concat(se).indexOf(C) !== -1 && v === Xt && yB.indexOf(n[w]) === -1 || Ke.concat(se).indexOf(v) !== -1 && C === Vt)
    return fA;
  if (C === Bn && v === Bn) {
    for (var q = a[B], N = 1; q > 0 && (q--, r[q] === Bn); )
      N++;
    if (N % 2 !== 0)
      return fA;
  }
  return C === Jr && v === Yr ? fA : zr;
}, vB = function(n, r) {
  r || (r = { lineBreak: "normal", wordBreak: "normal" });
  var a = FB(n, r.lineBreak), s = a[0], l = a[1], B = a[2];
  (r.wordBreak === "break-all" || r.wordBreak === "break-word") && (l = l.map(function(w) {
    return [se, st, Qo].indexOf(w) !== -1 ? lr : w;
  }));
  var g = r.wordBreak === "keep-all" ? B.map(function(w, C) {
    return w && n[C] >= 19968 && n[C] <= 40959;
  }) : void 0;
  return [s, l, g];
}, UB = (
  /** @class */
  function() {
    function n(r, a, s, l) {
      this.codePoints = r, this.required = a === Fo, this.start = s, this.end = l;
    }
    return n.prototype.slice = function() {
      return kA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, n;
  }()
), LB = function(n, r) {
  var a = vi(n), s = vB(a, r), l = s[0], B = s[1], g = s[2], w = a.length, C = 0, E = 0;
  return {
    next: function() {
      if (E >= w)
        return { done: !0, value: null };
      for (var v = fA; E < w && (v = EB(a, B, l, ++E, g)) === fA; )
        ;
      if (v !== fA || E === w) {
        var D = new UB(a, v, C, E);
        return C = E, { value: D, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, bB = 1, xB = 2, pr = 4, vs = 8, pi = 10, Us = 47, tr = 92, MB = 9, IB = 32, jr = 34, Jt = 61, kB = 35, DB = 36, HB = 37, Wr = 39, Zr = 40, Yt = 41, SB = 95, re = 45, TB = 33, KB = 60, OB = 62, RB = 64, PB = 91, GB = 93, NB = 61, VB = 123, qr = 63, XB = 125, Ls = 124, JB = 126, YB = 128, bs = 65533, pn = 42, ut = 43, zB = 44, jB = 58, WB = 59, hr = 46, ZB = 0, qB = 8, $B = 11, Ag = 14, eg = 31, tg = 127, be = -1, vo = 48, Uo = 97, Lo = 101, rg = 102, ig = 117, ng = 122, bo = 65, xo = 69, Mo = 70, ag = 85, sg = 90, qA = function(n) {
  return n >= vo && n <= 57;
}, og = function(n) {
  return n >= 55296 && n <= 57343;
}, Ft = function(n) {
  return qA(n) || n >= bo && n <= Mo || n >= Uo && n <= rg;
}, ug = function(n) {
  return n >= Uo && n <= ng;
}, lg = function(n) {
  return n >= bo && n <= sg;
}, hg = function(n) {
  return ug(n) || lg(n);
}, cg = function(n) {
  return n >= YB;
}, $r = function(n) {
  return n === pi || n === MB || n === IB;
}, fi = function(n) {
  return hg(n) || cg(n) || n === SB;
}, xs = function(n) {
  return fi(n) || qA(n) || n === re;
}, Bg = function(n) {
  return n >= ZB && n <= qB || n === $B || n >= Ag && n <= eg || n === tg;
}, je = function(n, r) {
  return n !== tr ? !1 : r !== pi;
}, Ai = function(n, r, a) {
  return n === re ? fi(r) || je(r, a) : fi(n) ? !0 : !!(n === tr && je(n, r));
}, fn = function(n, r, a) {
  return n === ut || n === re ? qA(r) ? !0 : r === hr && qA(a) : qA(n === hr ? r : n);
}, gg = function(n) {
  var r = 0, a = 1;
  (n[r] === ut || n[r] === re) && (n[r] === re && (a = -1), r++);
  for (var s = []; qA(n[r]); )
    s.push(n[r++]);
  var l = s.length ? parseInt(kA.apply(void 0, s), 10) : 0;
  n[r] === hr && r++;
  for (var B = []; qA(n[r]); )
    B.push(n[r++]);
  var g = B.length, w = g ? parseInt(kA.apply(void 0, B), 10) : 0;
  (n[r] === xo || n[r] === Lo) && r++;
  var C = 1;
  (n[r] === ut || n[r] === re) && (n[r] === re && (C = -1), r++);
  for (var E = []; qA(n[r]); )
    E.push(n[r++]);
  var v = E.length ? parseInt(kA.apply(void 0, E), 10) : 0;
  return a * (l + w * Math.pow(10, -g)) * Math.pow(10, C * v);
}, pg = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, fg = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, dg = {
  type: 4
  /* COMMA_TOKEN */
}, Cg = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, wg = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, mg = {
  type: 21
  /* COLUMN_TOKEN */
}, yg = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, _g = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, Qg = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, Fg = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, Eg = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, ei = {
  type: 23
  /* BAD_URL_TOKEN */
}, vg = {
  type: 1
  /* BAD_STRING_TOKEN */
}, Ug = {
  type: 25
  /* CDO_TOKEN */
}, Lg = {
  type: 24
  /* CDC_TOKEN */
}, bg = {
  type: 26
  /* COLON_TOKEN */
}, xg = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Mg = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, Ig = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, kg = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Jn = {
  type: 32
  /* EOF_TOKEN */
}, Io = (
  /** @class */
  function() {
    function n() {
      this._value = [];
    }
    return n.prototype.write = function(r) {
      this._value = this._value.concat(vi(r));
    }, n.prototype.read = function() {
      for (var r = [], a = this.consumeToken(); a !== Jn; )
        r.push(a), a = this.consumeToken();
      return r;
    }, n.prototype.consumeToken = function() {
      var r = this.consumeCodePoint();
      switch (r) {
        case jr:
          return this.consumeStringToken(jr);
        case kB:
          var a = this.peekCodePoint(0), s = this.peekCodePoint(1), l = this.peekCodePoint(2);
          if (xs(a) || je(s, l)) {
            var B = Ai(a, s, l) ? xB : bB, g = this.consumeName();
            return { type: 5, value: g, flags: B };
          }
          break;
        case DB:
          if (this.peekCodePoint(0) === Jt)
            return this.consumeCodePoint(), Cg;
          break;
        case Wr:
          return this.consumeStringToken(Wr);
        case Zr:
          return pg;
        case Yt:
          return fg;
        case pn:
          if (this.peekCodePoint(0) === Jt)
            return this.consumeCodePoint(), Eg;
          break;
        case ut:
          if (fn(r, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(r), this.consumeNumericToken();
          break;
        case zB:
          return dg;
        case re:
          var w = r, C = this.peekCodePoint(0), E = this.peekCodePoint(1);
          if (fn(w, C, E))
            return this.reconsumeCodePoint(r), this.consumeNumericToken();
          if (Ai(w, C, E))
            return this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
          if (C === re && E === OB)
            return this.consumeCodePoint(), this.consumeCodePoint(), Lg;
          break;
        case hr:
          if (fn(r, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(r), this.consumeNumericToken();
          break;
        case Us:
          if (this.peekCodePoint(0) === pn)
            for (this.consumeCodePoint(); ; ) {
              var v = this.consumeCodePoint();
              if (v === pn && (v = this.consumeCodePoint(), v === Us))
                return this.consumeToken();
              if (v === be)
                return this.consumeToken();
            }
          break;
        case jB:
          return bg;
        case WB:
          return xg;
        case KB:
          if (this.peekCodePoint(0) === TB && this.peekCodePoint(1) === re && this.peekCodePoint(2) === re)
            return this.consumeCodePoint(), this.consumeCodePoint(), Ug;
          break;
        case RB:
          var D = this.peekCodePoint(0), R = this.peekCodePoint(1), q = this.peekCodePoint(2);
          if (Ai(D, R, q)) {
            var g = this.consumeName();
            return { type: 7, value: g };
          }
          break;
        case PB:
          return Mg;
        case tr:
          if (je(r, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
          break;
        case GB:
          return Ig;
        case NB:
          if (this.peekCodePoint(0) === Jt)
            return this.consumeCodePoint(), wg;
          break;
        case VB:
          return Qg;
        case XB:
          return Fg;
        case ig:
        case ag:
          var N = this.peekCodePoint(0), X = this.peekCodePoint(1);
          return N === ut && (Ft(X) || X === qr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(r), this.consumeIdentLikeToken();
        case Ls:
          if (this.peekCodePoint(0) === Jt)
            return this.consumeCodePoint(), yg;
          if (this.peekCodePoint(0) === Ls)
            return this.consumeCodePoint(), mg;
          break;
        case JB:
          if (this.peekCodePoint(0) === Jt)
            return this.consumeCodePoint(), _g;
          break;
        case be:
          return Jn;
      }
      return $r(r) ? (this.consumeWhiteSpace(), kg) : qA(r) ? (this.reconsumeCodePoint(r), this.consumeNumericToken()) : fi(r) ? (this.reconsumeCodePoint(r), this.consumeIdentLikeToken()) : { type: 6, value: kA(r) };
    }, n.prototype.consumeCodePoint = function() {
      var r = this._value.shift();
      return typeof r > "u" ? -1 : r;
    }, n.prototype.reconsumeCodePoint = function(r) {
      this._value.unshift(r);
    }, n.prototype.peekCodePoint = function(r) {
      return r >= this._value.length ? -1 : this._value[r];
    }, n.prototype.consumeUnicodeRangeToken = function() {
      for (var r = [], a = this.consumeCodePoint(); Ft(a) && r.length < 6; )
        r.push(a), a = this.consumeCodePoint();
      for (var s = !1; a === qr && r.length < 6; )
        r.push(a), a = this.consumeCodePoint(), s = !0;
      if (s) {
        var l = parseInt(kA.apply(void 0, r.map(function(C) {
          return C === qr ? vo : C;
        })), 16), B = parseInt(kA.apply(void 0, r.map(function(C) {
          return C === qr ? Mo : C;
        })), 16);
        return { type: 30, start: l, end: B };
      }
      var g = parseInt(kA.apply(void 0, r), 16);
      if (this.peekCodePoint(0) === re && Ft(this.peekCodePoint(1))) {
        this.consumeCodePoint(), a = this.consumeCodePoint();
        for (var w = []; Ft(a) && w.length < 6; )
          w.push(a), a = this.consumeCodePoint();
        var B = parseInt(kA.apply(void 0, w), 16);
        return { type: 30, start: g, end: B };
      } else
        return { type: 30, start: g, end: g };
    }, n.prototype.consumeIdentLikeToken = function() {
      var r = this.consumeName();
      return r.toLowerCase() === "url" && this.peekCodePoint(0) === Zr ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Zr ? (this.consumeCodePoint(), { type: 19, value: r }) : { type: 20, value: r };
    }, n.prototype.consumeUrlToken = function() {
      var r = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === be)
        return { type: 22, value: "" };
      var a = this.peekCodePoint(0);
      if (a === Wr || a === jr) {
        var s = this.consumeStringToken(this.consumeCodePoint());
        return s.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === be || this.peekCodePoint(0) === Yt) ? (this.consumeCodePoint(), { type: 22, value: s.value }) : (this.consumeBadUrlRemnants(), ei);
      }
      for (; ; ) {
        var l = this.consumeCodePoint();
        if (l === be || l === Yt)
          return { type: 22, value: kA.apply(void 0, r) };
        if ($r(l))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === be || this.peekCodePoint(0) === Yt ? (this.consumeCodePoint(), { type: 22, value: kA.apply(void 0, r) }) : (this.consumeBadUrlRemnants(), ei);
        if (l === jr || l === Wr || l === Zr || Bg(l))
          return this.consumeBadUrlRemnants(), ei;
        if (l === tr)
          if (je(l, this.peekCodePoint(0)))
            r.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), ei;
        else
          r.push(l);
      }
    }, n.prototype.consumeWhiteSpace = function() {
      for (; $r(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, n.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var r = this.consumeCodePoint();
        if (r === Yt || r === be)
          return;
        je(r, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, n.prototype.consumeStringSlice = function(r) {
      for (var a = 5e4, s = ""; r > 0; ) {
        var l = Math.min(a, r);
        s += kA.apply(void 0, this._value.splice(0, l)), r -= l;
      }
      return this._value.shift(), s;
    }, n.prototype.consumeStringToken = function(r) {
      var a = "", s = 0;
      do {
        var l = this._value[s];
        if (l === be || l === void 0 || l === r)
          return a += this.consumeStringSlice(s), { type: 0, value: a };
        if (l === pi)
          return this._value.splice(0, s), vg;
        if (l === tr) {
          var B = this._value[s + 1];
          B !== be && B !== void 0 && (B === pi ? (a += this.consumeStringSlice(s), s = -1, this._value.shift()) : je(l, B) && (a += this.consumeStringSlice(s), a += kA(this.consumeEscapedCodePoint()), s = -1));
        }
        s++;
      } while (!0);
    }, n.prototype.consumeNumber = function() {
      var r = [], a = pr, s = this.peekCodePoint(0);
      for ((s === ut || s === re) && r.push(this.consumeCodePoint()); qA(this.peekCodePoint(0)); )
        r.push(this.consumeCodePoint());
      s = this.peekCodePoint(0);
      var l = this.peekCodePoint(1);
      if (s === hr && qA(l))
        for (r.push(this.consumeCodePoint(), this.consumeCodePoint()), a = vs; qA(this.peekCodePoint(0)); )
          r.push(this.consumeCodePoint());
      s = this.peekCodePoint(0), l = this.peekCodePoint(1);
      var B = this.peekCodePoint(2);
      if ((s === xo || s === Lo) && ((l === ut || l === re) && qA(B) || qA(l)))
        for (r.push(this.consumeCodePoint(), this.consumeCodePoint()), a = vs; qA(this.peekCodePoint(0)); )
          r.push(this.consumeCodePoint());
      return [gg(r), a];
    }, n.prototype.consumeNumericToken = function() {
      var r = this.consumeNumber(), a = r[0], s = r[1], l = this.peekCodePoint(0), B = this.peekCodePoint(1), g = this.peekCodePoint(2);
      if (Ai(l, B, g)) {
        var w = this.consumeName();
        return { type: 15, number: a, flags: s, unit: w };
      }
      return l === HB ? (this.consumeCodePoint(), { type: 16, number: a, flags: s }) : { type: 17, number: a, flags: s };
    }, n.prototype.consumeEscapedCodePoint = function() {
      var r = this.consumeCodePoint();
      if (Ft(r)) {
        for (var a = kA(r); Ft(this.peekCodePoint(0)) && a.length < 6; )
          a += kA(this.consumeCodePoint());
        $r(this.peekCodePoint(0)) && this.consumeCodePoint();
        var s = parseInt(a, 16);
        return s === 0 || og(s) || s > 1114111 ? bs : s;
      }
      return r === be ? bs : r;
    }, n.prototype.consumeName = function() {
      for (var r = ""; ; ) {
        var a = this.consumeCodePoint();
        if (xs(a))
          r += kA(a);
        else if (je(a, this.peekCodePoint(0)))
          r += kA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(a), r;
      }
    }, n;
  }()
), ko = (
  /** @class */
  function() {
    function n(r) {
      this._tokens = r;
    }
    return n.create = function(r) {
      var a = new Io();
      return a.write(r), new n(a.read());
    }, n.parseValue = function(r) {
      return n.create(r).parseComponentValue();
    }, n.parseValues = function(r) {
      return n.create(r).parseComponentValues();
    }, n.prototype.parseComponentValue = function() {
      for (var r = this.consumeToken(); r.type === 31; )
        r = this.consumeToken();
      if (r.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(r);
      var a = this.consumeComponentValue();
      do
        r = this.consumeToken();
      while (r.type === 31);
      if (r.type === 32)
        return a;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, n.prototype.parseComponentValues = function() {
      for (var r = []; ; ) {
        var a = this.consumeComponentValue();
        if (a.type === 32)
          return r;
        r.push(a), r.push();
      }
    }, n.prototype.consumeComponentValue = function() {
      var r = this.consumeToken();
      switch (r.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(r.type);
        case 19:
          return this.consumeFunction(r);
      }
      return r;
    }, n.prototype.consumeSimpleBlock = function(r) {
      for (var a = { type: r, values: [] }, s = this.consumeToken(); ; ) {
        if (s.type === 32 || Hg(s, r))
          return a;
        this.reconsumeToken(s), a.values.push(this.consumeComponentValue()), s = this.consumeToken();
      }
    }, n.prototype.consumeFunction = function(r) {
      for (var a = {
        name: r.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var s = this.consumeToken();
        if (s.type === 32 || s.type === 3)
          return a;
        this.reconsumeToken(s), a.values.push(this.consumeComponentValue());
      }
    }, n.prototype.consumeToken = function() {
      var r = this._tokens.shift();
      return typeof r > "u" ? Jn : r;
    }, n.prototype.reconsumeToken = function(r) {
      this._tokens.unshift(r);
    }, n;
  }()
), fr = function(n) {
  return n.type === 15;
}, Dt = function(n) {
  return n.type === 17;
}, QA = function(n) {
  return n.type === 20;
}, Dg = function(n) {
  return n.type === 0;
}, Yn = function(n, r) {
  return QA(n) && n.value === r;
}, Do = function(n) {
  return n.type !== 31;
}, kt = function(n) {
  return n.type !== 31 && n.type !== 4;
}, xe = function(n) {
  var r = [], a = [];
  return n.forEach(function(s) {
    if (s.type === 4) {
      if (a.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      r.push(a), a = [];
      return;
    }
    s.type !== 31 && a.push(s);
  }), a.length && r.push(a), r;
}, Hg = function(n, r) {
  return r === 11 && n.type === 12 || r === 28 && n.type === 29 ? !0 : r === 2 && n.type === 3;
}, et = function(n) {
  return n.type === 17 || n.type === 15;
}, HA = function(n) {
  return n.type === 16 || et(n);
}, Ho = function(n) {
  return n.length > 1 ? [n[0], n[1]] : [n[0]];
}, JA = {
  type: 17,
  number: 0,
  flags: pr
}, aa = {
  type: 16,
  number: 50,
  flags: pr
}, Ze = {
  type: 16,
  number: 100,
  flags: pr
}, $t = function(n, r, a) {
  var s = n[0], l = n[1];
  return [FA(s, r), FA(typeof l < "u" ? l : s, a)];
}, FA = function(n, r) {
  if (n.type === 16)
    return n.number / 100 * r;
  if (fr(n))
    switch (n.unit) {
      case "rem":
      case "em":
        return 16 * n.number;
      case "px":
      default:
        return n.number;
    }
  return n.number;
}, So = "deg", To = "grad", Ko = "rad", Oo = "turn", Ui = {
  name: "angle",
  parse: function(n, r) {
    if (r.type === 15)
      switch (r.unit) {
        case So:
          return Math.PI * r.number / 180;
        case To:
          return Math.PI / 200 * r.number;
        case Ko:
          return r.number;
        case Oo:
          return Math.PI * 2 * r.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ro = function(n) {
  return n.type === 15 && (n.unit === So || n.unit === To || n.unit === Ko || n.unit === Oo);
}, Po = function(n) {
  var r = n.filter(QA).map(function(a) {
    return a.value;
  }).join(" ");
  switch (r) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [JA, JA];
    case "to top":
    case "bottom":
      return ge(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [JA, Ze];
    case "to right":
    case "left":
      return ge(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Ze, Ze];
    case "to bottom":
    case "top":
      return ge(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Ze, JA];
    case "to left":
    case "right":
      return ge(270);
  }
  return 0;
}, ge = function(n) {
  return Math.PI * n / 180;
}, $e = {
  name: "color",
  parse: function(n, r) {
    if (r.type === 18) {
      var a = Sg[r.name];
      if (typeof a > "u")
        throw new Error('Attempting to parse an unsupported color function "' + r.name + '"');
      return a(n, r.values);
    }
    if (r.type === 5) {
      if (r.value.length === 3) {
        var s = r.value.substring(0, 1), l = r.value.substring(1, 2), B = r.value.substring(2, 3);
        return qe(parseInt(s + s, 16), parseInt(l + l, 16), parseInt(B + B, 16), 1);
      }
      if (r.value.length === 4) {
        var s = r.value.substring(0, 1), l = r.value.substring(1, 2), B = r.value.substring(2, 3), g = r.value.substring(3, 4);
        return qe(parseInt(s + s, 16), parseInt(l + l, 16), parseInt(B + B, 16), parseInt(g + g, 16) / 255);
      }
      if (r.value.length === 6) {
        var s = r.value.substring(0, 2), l = r.value.substring(2, 4), B = r.value.substring(4, 6);
        return qe(parseInt(s, 16), parseInt(l, 16), parseInt(B, 16), 1);
      }
      if (r.value.length === 8) {
        var s = r.value.substring(0, 2), l = r.value.substring(2, 4), B = r.value.substring(4, 6), g = r.value.substring(6, 8);
        return qe(parseInt(s, 16), parseInt(l, 16), parseInt(B, 16), parseInt(g, 16) / 255);
      }
    }
    if (r.type === 20) {
      var w = Re[r.value.toUpperCase()];
      if (typeof w < "u")
        return w;
    }
    return Re.TRANSPARENT;
  }
}, At = function(n) {
  return (255 & n) === 0;
}, PA = function(n) {
  var r = 255 & n, a = 255 & n >> 8, s = 255 & n >> 16, l = 255 & n >> 24;
  return r < 255 ? "rgba(" + l + "," + s + "," + a + "," + r / 255 + ")" : "rgb(" + l + "," + s + "," + a + ")";
}, qe = function(n, r, a, s) {
  return (n << 24 | r << 16 | a << 8 | Math.round(s * 255) << 0) >>> 0;
}, Ms = function(n, r) {
  if (n.type === 17)
    return n.number;
  if (n.type === 16) {
    var a = r === 3 ? 1 : 255;
    return r === 3 ? n.number / 100 * a : Math.round(n.number / 100 * a);
  }
  return 0;
}, Is = function(n, r) {
  var a = r.filter(kt);
  if (a.length === 3) {
    var s = a.map(Ms), l = s[0], B = s[1], g = s[2];
    return qe(l, B, g, 1);
  }
  if (a.length === 4) {
    var w = a.map(Ms), l = w[0], B = w[1], g = w[2], C = w[3];
    return qe(l, B, g, C);
  }
  return 0;
};
function dn(n, r, a) {
  return a < 0 && (a += 1), a >= 1 && (a -= 1), a < 1 / 6 ? (r - n) * a * 6 + n : a < 1 / 2 ? r : a < 2 / 3 ? (r - n) * 6 * (2 / 3 - a) + n : n;
}
var ks = function(n, r) {
  var a = r.filter(kt), s = a[0], l = a[1], B = a[2], g = a[3], w = (s.type === 17 ? ge(s.number) : Ui.parse(n, s)) / (Math.PI * 2), C = HA(l) ? l.number / 100 : 0, E = HA(B) ? B.number / 100 : 0, v = typeof g < "u" && HA(g) ? FA(g, 1) : 1;
  if (C === 0)
    return qe(E * 255, E * 255, E * 255, 1);
  var D = E <= 0.5 ? E * (C + 1) : E + C - E * C, R = E * 2 - D, q = dn(R, D, w + 1 / 3), N = dn(R, D, w), X = dn(R, D, w - 1 / 3);
  return qe(q * 255, N * 255, X * 255, v);
}, Sg = {
  hsl: ks,
  hsla: ks,
  rgb: Is,
  rgba: Is
}, rr = function(n, r) {
  return $e.parse(n, ko.create(r).parseComponentValue());
}, Re = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, Tg = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    return r.map(function(a) {
      if (QA(a))
        switch (a.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Kg = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Li = function(n, r) {
  var a = $e.parse(n, r[0]), s = r[1];
  return s && HA(s) ? { color: a, stop: s } : { color: a, stop: null };
}, Ds = function(n, r) {
  var a = n[0], s = n[n.length - 1];
  a.stop === null && (a.stop = JA), s.stop === null && (s.stop = Ze);
  for (var l = [], B = 0, g = 0; g < n.length; g++) {
    var w = n[g].stop;
    if (w !== null) {
      var C = FA(w, r);
      C > B ? l.push(C) : l.push(B), B = C;
    } else
      l.push(null);
  }
  for (var E = null, g = 0; g < l.length; g++) {
    var v = l[g];
    if (v === null)
      E === null && (E = g);
    else if (E !== null) {
      for (var D = g - E, R = l[E - 1], q = (v - R) / (D + 1), N = 1; N <= D; N++)
        l[E + N - 1] = q * N;
      E = null;
    }
  }
  return n.map(function(X, nA) {
    var $ = X.color;
    return { color: $, stop: Math.max(Math.min(1, l[nA] / r), 0) };
  });
}, Og = function(n, r, a) {
  var s = r / 2, l = a / 2, B = FA(n[0], r) - s, g = l - FA(n[1], a);
  return (Math.atan2(g, B) + Math.PI * 2) % (Math.PI * 2);
}, Rg = function(n, r, a) {
  var s = typeof n == "number" ? n : Og(n, r, a), l = Math.abs(r * Math.sin(s)) + Math.abs(a * Math.cos(s)), B = r / 2, g = a / 2, w = l / 2, C = Math.sin(s - Math.PI / 2) * w, E = Math.cos(s - Math.PI / 2) * w;
  return [l, B - E, B + E, g - C, g + C];
}, ye = function(n, r) {
  return Math.sqrt(n * n + r * r);
}, Hs = function(n, r, a, s, l) {
  var B = [
    [0, 0],
    [0, r],
    [n, 0],
    [n, r]
  ];
  return B.reduce(function(g, w) {
    var C = w[0], E = w[1], v = ye(a - C, s - E);
    return (l ? v < g.optimumDistance : v > g.optimumDistance) ? {
      optimumCorner: w,
      optimumDistance: v
    } : g;
  }, {
    optimumDistance: l ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Pg = function(n, r, a, s, l) {
  var B = 0, g = 0;
  switch (n.size) {
    case 0:
      n.shape === 0 ? B = g = Math.min(Math.abs(r), Math.abs(r - s), Math.abs(a), Math.abs(a - l)) : n.shape === 1 && (B = Math.min(Math.abs(r), Math.abs(r - s)), g = Math.min(Math.abs(a), Math.abs(a - l)));
      break;
    case 2:
      if (n.shape === 0)
        B = g = Math.min(ye(r, a), ye(r, a - l), ye(r - s, a), ye(r - s, a - l));
      else if (n.shape === 1) {
        var w = Math.min(Math.abs(a), Math.abs(a - l)) / Math.min(Math.abs(r), Math.abs(r - s)), C = Hs(s, l, r, a, !0), E = C[0], v = C[1];
        B = ye(E - r, (v - a) / w), g = w * B;
      }
      break;
    case 1:
      n.shape === 0 ? B = g = Math.max(Math.abs(r), Math.abs(r - s), Math.abs(a), Math.abs(a - l)) : n.shape === 1 && (B = Math.max(Math.abs(r), Math.abs(r - s)), g = Math.max(Math.abs(a), Math.abs(a - l)));
      break;
    case 3:
      if (n.shape === 0)
        B = g = Math.max(ye(r, a), ye(r, a - l), ye(r - s, a), ye(r - s, a - l));
      else if (n.shape === 1) {
        var w = Math.max(Math.abs(a), Math.abs(a - l)) / Math.max(Math.abs(r), Math.abs(r - s)), D = Hs(s, l, r, a, !1), E = D[0], v = D[1];
        B = ye(E - r, (v - a) / w), g = w * B;
      }
      break;
  }
  return Array.isArray(n.size) && (B = FA(n.size[0], s), g = n.size.length === 2 ? FA(n.size[1], l) : B), [B, g];
}, Gg = function(n, r) {
  var a = ge(180), s = [];
  return xe(r).forEach(function(l, B) {
    if (B === 0) {
      var g = l[0];
      if (g.type === 20 && g.value === "to") {
        a = Po(l);
        return;
      } else if (Ro(g)) {
        a = Ui.parse(n, g);
        return;
      }
    }
    var w = Li(n, l);
    s.push(w);
  }), {
    angle: a,
    stops: s,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, ti = function(n, r) {
  var a = ge(180), s = [];
  return xe(r).forEach(function(l, B) {
    if (B === 0) {
      var g = l[0];
      if (g.type === 20 && ["top", "left", "right", "bottom"].indexOf(g.value) !== -1) {
        a = Po(l);
        return;
      } else if (Ro(g)) {
        a = (Ui.parse(n, g) + ge(270)) % ge(360);
        return;
      }
    }
    var w = Li(n, l);
    s.push(w);
  }), {
    angle: a,
    stops: s,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ng = function(n, r) {
  var a = ge(180), s = [], l = 1, B = 0, g = 3, w = [];
  return xe(r).forEach(function(C, E) {
    var v = C[0];
    if (E === 0) {
      if (QA(v) && v.value === "linear") {
        l = 1;
        return;
      } else if (QA(v) && v.value === "radial") {
        l = 2;
        return;
      }
    }
    if (v.type === 18) {
      if (v.name === "from") {
        var D = $e.parse(n, v.values[0]);
        s.push({ stop: JA, color: D });
      } else if (v.name === "to") {
        var D = $e.parse(n, v.values[0]);
        s.push({ stop: Ze, color: D });
      } else if (v.name === "color-stop") {
        var R = v.values.filter(kt);
        if (R.length === 2) {
          var D = $e.parse(n, R[1]), q = R[0];
          Dt(q) && s.push({
            stop: { type: 16, number: q.number * 100, flags: q.flags },
            color: D
          });
        }
      }
    }
  }), l === 1 ? {
    angle: (a + ge(180)) % ge(360),
    stops: s,
    type: l
  } : { size: g, shape: B, stops: s, position: w, type: l };
}, Go = "closest-side", No = "farthest-side", Vo = "closest-corner", Xo = "farthest-corner", Jo = "circle", Yo = "ellipse", zo = "cover", jo = "contain", Vg = function(n, r) {
  var a = 0, s = 3, l = [], B = [];
  return xe(r).forEach(function(g, w) {
    var C = !0;
    if (w === 0) {
      var E = !1;
      C = g.reduce(function(D, R) {
        if (E)
          if (QA(R))
            switch (R.value) {
              case "center":
                return B.push(aa), D;
              case "top":
              case "left":
                return B.push(JA), D;
              case "right":
              case "bottom":
                return B.push(Ze), D;
            }
          else (HA(R) || et(R)) && B.push(R);
        else if (QA(R))
          switch (R.value) {
            case Jo:
              return a = 0, !1;
            case Yo:
              return a = 1, !1;
            case "at":
              return E = !0, !1;
            case Go:
              return s = 0, !1;
            case zo:
            case No:
              return s = 1, !1;
            case jo:
            case Vo:
              return s = 2, !1;
            case Xo:
              return s = 3, !1;
          }
        else if (et(R) || HA(R))
          return Array.isArray(s) || (s = []), s.push(R), !1;
        return D;
      }, C);
    }
    if (C) {
      var v = Li(n, g);
      l.push(v);
    }
  }), {
    size: s,
    shape: a,
    stops: l,
    position: B,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, ri = function(n, r) {
  var a = 0, s = 3, l = [], B = [];
  return xe(r).forEach(function(g, w) {
    var C = !0;
    if (w === 0 ? C = g.reduce(function(v, D) {
      if (QA(D))
        switch (D.value) {
          case "center":
            return B.push(aa), !1;
          case "top":
          case "left":
            return B.push(JA), !1;
          case "right":
          case "bottom":
            return B.push(Ze), !1;
        }
      else if (HA(D) || et(D))
        return B.push(D), !1;
      return v;
    }, C) : w === 1 && (C = g.reduce(function(v, D) {
      if (QA(D))
        switch (D.value) {
          case Jo:
            return a = 0, !1;
          case Yo:
            return a = 1, !1;
          case jo:
          case Go:
            return s = 0, !1;
          case No:
            return s = 1, !1;
          case Vo:
            return s = 2, !1;
          case zo:
          case Xo:
            return s = 3, !1;
        }
      else if (et(D) || HA(D))
        return Array.isArray(s) || (s = []), s.push(D), !1;
      return v;
    }, C)), C) {
      var E = Li(n, g);
      l.push(E);
    }
  }), {
    size: s,
    shape: a,
    stops: l,
    position: B,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Xg = function(n) {
  return n.type === 1;
}, Jg = function(n) {
  return n.type === 2;
}, sa = {
  name: "image",
  parse: function(n, r) {
    if (r.type === 22) {
      var a = {
        url: r.value,
        type: 0
        /* URL */
      };
      return n.cache.addImage(r.value), a;
    }
    if (r.type === 18) {
      var s = Wo[r.name];
      if (typeof s > "u")
        throw new Error('Attempting to parse an unsupported image function "' + r.name + '"');
      return s(n, r.values);
    }
    throw new Error("Unsupported image type " + r.type);
  }
};
function Yg(n) {
  return !(n.type === 20 && n.value === "none") && (n.type !== 18 || !!Wo[n.name]);
}
var Wo = {
  "linear-gradient": Gg,
  "-moz-linear-gradient": ti,
  "-ms-linear-gradient": ti,
  "-o-linear-gradient": ti,
  "-webkit-linear-gradient": ti,
  "radial-gradient": Vg,
  "-moz-radial-gradient": ri,
  "-ms-radial-gradient": ri,
  "-o-radial-gradient": ri,
  "-webkit-radial-gradient": ri,
  "-webkit-gradient": Ng
}, zg = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(n, r) {
    if (r.length === 0)
      return [];
    var a = r[0];
    return a.type === 20 && a.value === "none" ? [] : r.filter(function(s) {
      return kt(s) && Yg(s);
    }).map(function(s) {
      return sa.parse(n, s);
    });
  }
}, jg = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    return r.map(function(a) {
      if (QA(a))
        switch (a.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Wg = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(n, r) {
    return xe(r).map(function(a) {
      return a.filter(HA);
    }).map(Ho);
  }
}, Zg = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    return xe(r).map(function(a) {
      return a.filter(QA).map(function(s) {
        return s.value;
      }).join(" ");
    }).map(qg);
  }
}, qg = function(n) {
  switch (n) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, It;
(function(n) {
  n.AUTO = "auto", n.CONTAIN = "contain", n.COVER = "cover";
})(It || (It = {}));
var $g = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    return xe(r).map(function(a) {
      return a.filter(Ap);
    });
  }
}, Ap = function(n) {
  return QA(n) || HA(n);
}, bi = function(n) {
  return {
    name: "border-" + n + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, ep = bi("top"), tp = bi("right"), rp = bi("bottom"), ip = bi("left"), xi = function(n) {
  return {
    name: "border-radius-" + n,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(r, a) {
      return Ho(a.filter(HA));
    }
  };
}, np = xi("top-left"), ap = xi("top-right"), sp = xi("bottom-right"), op = xi("bottom-left"), Mi = function(n) {
  return {
    name: "border-" + n + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(r, a) {
      switch (a) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, up = Mi("top"), lp = Mi("right"), hp = Mi("bottom"), cp = Mi("left"), Ii = function(n) {
  return {
    name: "border-" + n + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(r, a) {
      return fr(a) ? a.number : 0;
    }
  };
}, Bp = Ii("top"), gp = Ii("right"), pp = Ii("bottom"), fp = Ii("left"), dp = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Cp = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, wp = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    return r.filter(QA).reduce(
      function(a, s) {
        return a | mp(s.value);
      },
      0
      /* NONE */
    );
  }
}, mp = function(n) {
  switch (n) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, yp = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, _p = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(n, r) {
    return r.type === 20 && r.value === "normal" ? 0 : r.type === 17 || r.type === 15 ? r.number : 0;
  }
}, di;
(function(n) {
  n.NORMAL = "normal", n.STRICT = "strict";
})(di || (di = {}));
var Qp = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "strict":
        return di.STRICT;
      case "normal":
      default:
        return di.NORMAL;
    }
  }
}, Fp = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Ss = function(n, r) {
  return QA(n) && n.value === "normal" ? 1.2 * r : n.type === 17 ? r * n.number : HA(n) ? FA(n, r) : r;
}, Ep = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(n, r) {
    return r.type === 20 && r.value === "none" ? null : sa.parse(n, r);
  }
}, vp = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, zn = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, ki = function(n) {
  return {
    name: "margin-" + n,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Up = ki("top"), Lp = ki("right"), bp = ki("bottom"), xp = ki("left"), Mp = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    return r.filter(QA).map(function(a) {
      switch (a.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, Ip = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Di = function(n) {
  return {
    name: "padding-" + n,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, kp = Di("top"), Dp = Di("right"), Hp = Di("bottom"), Sp = Di("left"), Tp = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, Kp = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, Op = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(n, r) {
    return r.length === 1 && Yn(r[0], "none") ? [] : xe(r).map(function(a) {
      for (var s = {
        color: Re.TRANSPARENT,
        offsetX: JA,
        offsetY: JA,
        blur: JA
      }, l = 0, B = 0; B < a.length; B++) {
        var g = a[B];
        et(g) ? (l === 0 ? s.offsetX = g : l === 1 ? s.offsetY = g : s.blur = g, l++) : s.color = $e.parse(n, g);
      }
      return s;
    });
  }
}, Rp = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Pp = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(n, r) {
    if (r.type === 20 && r.value === "none")
      return null;
    if (r.type === 18) {
      var a = Vp[r.name];
      if (typeof a > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + r.name + '"');
      return a(r.values);
    }
    return null;
  }
}, Gp = function(n) {
  var r = n.filter(function(a) {
    return a.type === 17;
  }).map(function(a) {
    return a.number;
  });
  return r.length === 6 ? r : null;
}, Np = function(n) {
  var r = n.filter(function(C) {
    return C.type === 17;
  }).map(function(C) {
    return C.number;
  }), a = r[0], s = r[1];
  r[2], r[3];
  var l = r[4], B = r[5];
  r[6], r[7], r[8], r[9], r[10], r[11];
  var g = r[12], w = r[13];
  return r[14], r[15], r.length === 16 ? [a, s, l, B, g, w] : null;
}, Vp = {
  matrix: Gp,
  matrix3d: Np
}, Ts = {
  type: 16,
  number: 50,
  flags: pr
}, Xp = [Ts, Ts], Jp = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(n, r) {
    var a = r.filter(HA);
    return a.length !== 2 ? Xp : [a[0], a[1]];
  }
}, Yp = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, ir;
(function(n) {
  n.NORMAL = "normal", n.BREAK_ALL = "break-all", n.KEEP_ALL = "keep-all";
})(ir || (ir = {}));
var zp = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "break-all":
        return ir.BREAK_ALL;
      case "keep-all":
        return ir.KEEP_ALL;
      case "normal":
      default:
        return ir.NORMAL;
    }
  }
}, jp = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(n, r) {
    if (r.type === 20)
      return { auto: !0, order: 0 };
    if (Dt(r))
      return { auto: !1, order: r.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Zo = {
  name: "time",
  parse: function(n, r) {
    if (r.type === 15)
      switch (r.unit.toLowerCase()) {
        case "s":
          return 1e3 * r.number;
        case "ms":
          return r.number;
      }
    throw new Error("Unsupported time type");
  }
}, Wp = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(n, r) {
    return Dt(r) ? r.number : 1;
  }
}, Zp = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, qp = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    return r.filter(QA).map(function(a) {
      switch (a.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(a) {
      return a !== 0;
    });
  }
}, $p = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    var a = [], s = [];
    return r.forEach(function(l) {
      switch (l.type) {
        case 20:
        case 0:
          a.push(l.value);
          break;
        case 17:
          a.push(l.number.toString());
          break;
        case 4:
          s.push(a.join(" ")), a.length = 0;
          break;
      }
    }), a.length && s.push(a.join(" ")), s.map(function(l) {
      return l.indexOf(" ") === -1 ? l : "'" + l + "'";
    });
  }
}, Af = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, ef = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(n, r) {
    if (Dt(r))
      return r.number;
    if (QA(r))
      switch (r.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, tf = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(n, r) {
    return r.filter(QA).map(function(a) {
      return a.value;
    });
  }
}, rf = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(n, r) {
    switch (r) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, KA = function(n, r) {
  return (n & r) !== 0;
}, nf = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(n, r) {
    if (r.length === 0)
      return [];
    var a = r[0];
    return a.type === 20 && a.value === "none" ? [] : r;
  }
}, af = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(n, r) {
    if (r.length === 0)
      return null;
    var a = r[0];
    if (a.type === 20 && a.value === "none")
      return null;
    for (var s = [], l = r.filter(Do), B = 0; B < l.length; B++) {
      var g = l[B], w = l[B + 1];
      if (g.type === 20) {
        var C = w && Dt(w) ? w.number : 1;
        s.push({ counter: g.value, increment: C });
      }
    }
    return s;
  }
}, sf = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(n, r) {
    if (r.length === 0)
      return [];
    for (var a = [], s = r.filter(Do), l = 0; l < s.length; l++) {
      var B = s[l], g = s[l + 1];
      if (QA(B) && B.value !== "none") {
        var w = g && Dt(g) ? g.number : 0;
        a.push({ counter: B.value, reset: w });
      }
    }
    return a;
  }
}, of = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    return r.filter(fr).map(function(a) {
      return Zo.parse(n, a);
    });
  }
}, uf = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(n, r) {
    if (r.length === 0)
      return null;
    var a = r[0];
    if (a.type === 20 && a.value === "none")
      return null;
    var s = [], l = r.filter(Dg);
    if (l.length % 2 !== 0)
      return null;
    for (var B = 0; B < l.length; B += 2) {
      var g = l[B].value, w = l[B + 1].value;
      s.push({ open: g, close: w });
    }
    return s;
  }
}, Ks = function(n, r, a) {
  if (!n)
    return "";
  var s = n[Math.min(r, n.length - 1)];
  return s ? a ? s.open : s.close : "";
}, lf = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(n, r) {
    return r.length === 1 && Yn(r[0], "none") ? [] : xe(r).map(function(a) {
      for (var s = {
        color: 255,
        offsetX: JA,
        offsetY: JA,
        blur: JA,
        spread: JA,
        inset: !1
      }, l = 0, B = 0; B < a.length; B++) {
        var g = a[B];
        Yn(g, "inset") ? s.inset = !0 : et(g) ? (l === 0 ? s.offsetX = g : l === 1 ? s.offsetY = g : l === 2 ? s.blur = g : s.spread = g, l++) : s.color = $e.parse(n, g);
      }
      return s;
    });
  }
}, hf = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(n, r) {
    var a = [
      0,
      1,
      2
      /* MARKERS */
    ], s = [];
    return r.filter(QA).forEach(function(l) {
      switch (l.value) {
        case "stroke":
          s.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          s.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          s.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), a.forEach(function(l) {
      s.indexOf(l) === -1 && s.push(l);
    }), s;
  }
}, cf = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Bf = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(n, r) {
    return fr(r) ? r.number : 0;
  }
}, gf = (
  /** @class */
  function() {
    function n(r, a) {
      var s, l;
      this.animationDuration = oA(r, of, a.animationDuration), this.backgroundClip = oA(r, Tg, a.backgroundClip), this.backgroundColor = oA(r, Kg, a.backgroundColor), this.backgroundImage = oA(r, zg, a.backgroundImage), this.backgroundOrigin = oA(r, jg, a.backgroundOrigin), this.backgroundPosition = oA(r, Wg, a.backgroundPosition), this.backgroundRepeat = oA(r, Zg, a.backgroundRepeat), this.backgroundSize = oA(r, $g, a.backgroundSize), this.borderTopColor = oA(r, ep, a.borderTopColor), this.borderRightColor = oA(r, tp, a.borderRightColor), this.borderBottomColor = oA(r, rp, a.borderBottomColor), this.borderLeftColor = oA(r, ip, a.borderLeftColor), this.borderTopLeftRadius = oA(r, np, a.borderTopLeftRadius), this.borderTopRightRadius = oA(r, ap, a.borderTopRightRadius), this.borderBottomRightRadius = oA(r, sp, a.borderBottomRightRadius), this.borderBottomLeftRadius = oA(r, op, a.borderBottomLeftRadius), this.borderTopStyle = oA(r, up, a.borderTopStyle), this.borderRightStyle = oA(r, lp, a.borderRightStyle), this.borderBottomStyle = oA(r, hp, a.borderBottomStyle), this.borderLeftStyle = oA(r, cp, a.borderLeftStyle), this.borderTopWidth = oA(r, Bp, a.borderTopWidth), this.borderRightWidth = oA(r, gp, a.borderRightWidth), this.borderBottomWidth = oA(r, pp, a.borderBottomWidth), this.borderLeftWidth = oA(r, fp, a.borderLeftWidth), this.boxShadow = oA(r, lf, a.boxShadow), this.color = oA(r, dp, a.color), this.direction = oA(r, Cp, a.direction), this.display = oA(r, wp, a.display), this.float = oA(r, yp, a.cssFloat), this.fontFamily = oA(r, $p, a.fontFamily), this.fontSize = oA(r, Af, a.fontSize), this.fontStyle = oA(r, rf, a.fontStyle), this.fontVariant = oA(r, tf, a.fontVariant), this.fontWeight = oA(r, ef, a.fontWeight), this.letterSpacing = oA(r, _p, a.letterSpacing), this.lineBreak = oA(r, Qp, a.lineBreak), this.lineHeight = oA(r, Fp, a.lineHeight), this.listStyleImage = oA(r, Ep, a.listStyleImage), this.listStylePosition = oA(r, vp, a.listStylePosition), this.listStyleType = oA(r, zn, a.listStyleType), this.marginTop = oA(r, Up, a.marginTop), this.marginRight = oA(r, Lp, a.marginRight), this.marginBottom = oA(r, bp, a.marginBottom), this.marginLeft = oA(r, xp, a.marginLeft), this.opacity = oA(r, Wp, a.opacity);
      var B = oA(r, Mp, a.overflow);
      this.overflowX = B[0], this.overflowY = B[B.length > 1 ? 1 : 0], this.overflowWrap = oA(r, Ip, a.overflowWrap), this.paddingTop = oA(r, kp, a.paddingTop), this.paddingRight = oA(r, Dp, a.paddingRight), this.paddingBottom = oA(r, Hp, a.paddingBottom), this.paddingLeft = oA(r, Sp, a.paddingLeft), this.paintOrder = oA(r, hf, a.paintOrder), this.position = oA(r, Kp, a.position), this.textAlign = oA(r, Tp, a.textAlign), this.textDecorationColor = oA(r, Zp, (s = a.textDecorationColor) !== null && s !== void 0 ? s : a.color), this.textDecorationLine = oA(r, qp, (l = a.textDecorationLine) !== null && l !== void 0 ? l : a.textDecoration), this.textShadow = oA(r, Op, a.textShadow), this.textTransform = oA(r, Rp, a.textTransform), this.transform = oA(r, Pp, a.transform), this.transformOrigin = oA(r, Jp, a.transformOrigin), this.visibility = oA(r, Yp, a.visibility), this.webkitTextStrokeColor = oA(r, cf, a.webkitTextStrokeColor), this.webkitTextStrokeWidth = oA(r, Bf, a.webkitTextStrokeWidth), this.wordBreak = oA(r, zp, a.wordBreak), this.zIndex = oA(r, jp, a.zIndex);
    }
    return n.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, n.prototype.isTransparent = function() {
      return At(this.backgroundColor);
    }, n.prototype.isTransformed = function() {
      return this.transform !== null;
    }, n.prototype.isPositioned = function() {
      return this.position !== 0;
    }, n.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, n.prototype.isFloating = function() {
      return this.float !== 0;
    }, n.prototype.isInlineLevel = function() {
      return KA(
        this.display,
        4
        /* INLINE */
      ) || KA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || KA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || KA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || KA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || KA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, n;
  }()
), pf = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r, a) {
      this.content = oA(r, nf, a.content), this.quotes = oA(r, uf, a.quotes);
    }
    return n;
  }()
), Os = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r, a) {
      this.counterIncrement = oA(r, af, a.counterIncrement), this.counterReset = oA(r, sf, a.counterReset);
    }
    return n;
  }()
), oA = function(n, r, a) {
  var s = new Io(), l = a !== null && typeof a < "u" ? a.toString() : r.initialValue;
  s.write(l);
  var B = new ko(s.read());
  switch (r.type) {
    case 2:
      var g = B.parseComponentValue();
      return r.parse(n, QA(g) ? g.value : r.initialValue);
    case 0:
      return r.parse(n, B.parseComponentValue());
    case 1:
      return r.parse(n, B.parseComponentValues());
    case 4:
      return B.parseComponentValue();
    case 3:
      switch (r.format) {
        case "angle":
          return Ui.parse(n, B.parseComponentValue());
        case "color":
          return $e.parse(n, B.parseComponentValue());
        case "image":
          return sa.parse(n, B.parseComponentValue());
        case "length":
          var w = B.parseComponentValue();
          return et(w) ? w : JA;
        case "length-percentage":
          var C = B.parseComponentValue();
          return HA(C) ? C : JA;
        case "time":
          return Zo.parse(n, B.parseComponentValue());
      }
      break;
  }
}, ff = "data-html2canvas-debug", df = function(n) {
  var r = n.getAttribute(ff);
  switch (r) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, jn = function(n, r) {
  var a = df(n);
  return a === 1 || r === a;
}, Me = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r, a) {
      if (this.context = r, this.textNodes = [], this.elements = [], this.flags = 0, jn(
        a,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new gf(r, window.getComputedStyle(a, null)), qn(a) && (this.styles.animationDuration.some(function(s) {
        return s > 0;
      }) && (a.style.animationDuration = "0s"), this.styles.transform !== null && (a.style.transform = "none")), this.bounds = Ei(this.context, a), jn(
        a,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return n;
  }()
), Cf = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Rs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ar = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ii = 0; ii < Rs.length; ii++)
  Ar[Rs.charCodeAt(ii)] = ii;
var wf = function(n) {
  var r = n.length * 0.75, a = n.length, s, l = 0, B, g, w, C;
  n[n.length - 1] === "=" && (r--, n[n.length - 2] === "=" && r--);
  var E = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(r) : new Array(r), v = Array.isArray(E) ? E : new Uint8Array(E);
  for (s = 0; s < a; s += 4)
    B = Ar[n.charCodeAt(s)], g = Ar[n.charCodeAt(s + 1)], w = Ar[n.charCodeAt(s + 2)], C = Ar[n.charCodeAt(s + 3)], v[l++] = B << 2 | g >> 4, v[l++] = (g & 15) << 4 | w >> 2, v[l++] = (w & 3) << 6 | C & 63;
  return E;
}, mf = function(n) {
  for (var r = n.length, a = [], s = 0; s < r; s += 2)
    a.push(n[s + 1] << 8 | n[s]);
  return a;
}, yf = function(n) {
  for (var r = n.length, a = [], s = 0; s < r; s += 4)
    a.push(n[s + 3] << 24 | n[s + 2] << 16 | n[s + 1] << 8 | n[s]);
  return a;
}, ct = 5, oa = 11, Cn = 2, _f = oa - ct, qo = 65536 >> ct, Qf = 1 << ct, wn = Qf - 1, Ff = 1024 >> ct, Ef = qo + Ff, vf = Ef, Uf = 32, Lf = vf + Uf, bf = 65536 >> oa, xf = 1 << _f, Mf = xf - 1, Ps = function(n, r, a) {
  return n.slice ? n.slice(r, a) : new Uint16Array(Array.prototype.slice.call(n, r, a));
}, If = function(n, r, a) {
  return n.slice ? n.slice(r, a) : new Uint32Array(Array.prototype.slice.call(n, r, a));
}, kf = function(n, r) {
  var a = wf(n), s = Array.isArray(a) ? yf(a) : new Uint32Array(a), l = Array.isArray(a) ? mf(a) : new Uint16Array(a), B = 24, g = Ps(l, B / 2, s[4] / 2), w = s[5] === 2 ? Ps(l, (B + s[4]) / 2) : If(s, Math.ceil((B + s[4]) / 4));
  return new Df(s[0], s[1], s[2], s[3], g, w);
}, Df = (
  /** @class */
  function() {
    function n(r, a, s, l, B, g) {
      this.initialValue = r, this.errorValue = a, this.highStart = s, this.highValueIndex = l, this.index = B, this.data = g;
    }
    return n.prototype.get = function(r) {
      var a;
      if (r >= 0) {
        if (r < 55296 || r > 56319 && r <= 65535)
          return a = this.index[r >> ct], a = (a << Cn) + (r & wn), this.data[a];
        if (r <= 65535)
          return a = this.index[qo + (r - 55296 >> ct)], a = (a << Cn) + (r & wn), this.data[a];
        if (r < this.highStart)
          return a = Lf - bf + (r >> oa), a = this.index[a], a += r >> ct & Mf, a = this.index[a], a = (a << Cn) + (r & wn), this.data[a];
        if (r <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, n;
  }()
), Gs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Hf = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ni = 0; ni < Gs.length; ni++)
  Hf[Gs.charCodeAt(ni)] = ni;
var Sf = 1, mn = 2, yn = 3, Ns = 4, Vs = 5, Tf = 7, Xs = 8, _n = 9, Qn = 10, Js = 11, Ys = 12, zs = 13, js = 14, Fn = 15, Kf = function(n) {
  for (var r = [], a = 0, s = n.length; a < s; ) {
    var l = n.charCodeAt(a++);
    if (l >= 55296 && l <= 56319 && a < s) {
      var B = n.charCodeAt(a++);
      (B & 64512) === 56320 ? r.push(((l & 1023) << 10) + (B & 1023) + 65536) : (r.push(l), a--);
    } else
      r.push(l);
  }
  return r;
}, Of = function() {
  for (var n = [], r = 0; r < arguments.length; r++)
    n[r] = arguments[r];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, n);
  var a = n.length;
  if (!a)
    return "";
  for (var s = [], l = -1, B = ""; ++l < a; ) {
    var g = n[l];
    g <= 65535 ? s.push(g) : (g -= 65536, s.push((g >> 10) + 55296, g % 1024 + 56320)), (l + 1 === a || s.length > 16384) && (B += String.fromCharCode.apply(String, s), s.length = 0);
  }
  return B;
}, Rf = kf(Cf), ce = "×", En = "÷", Pf = function(n) {
  return Rf.get(n);
}, Gf = function(n, r, a) {
  var s = a - 2, l = r[s], B = r[a - 1], g = r[a];
  if (B === mn && g === yn)
    return ce;
  if (B === mn || B === yn || B === Ns || g === mn || g === yn || g === Ns)
    return En;
  if (B === Xs && [Xs, _n, Js, Ys].indexOf(g) !== -1 || (B === Js || B === _n) && (g === _n || g === Qn) || (B === Ys || B === Qn) && g === Qn || g === zs || g === Vs || g === Tf || B === Sf)
    return ce;
  if (B === zs && g === js) {
    for (; l === Vs; )
      l = r[--s];
    if (l === js)
      return ce;
  }
  if (B === Fn && g === Fn) {
    for (var w = 0; l === Fn; )
      w++, l = r[--s];
    if (w % 2 === 0)
      return ce;
  }
  return En;
}, Nf = function(n) {
  var r = Kf(n), a = r.length, s = 0, l = 0, B = r.map(Pf);
  return {
    next: function() {
      if (s >= a)
        return { done: !0, value: null };
      for (var g = ce; s < a && (g = Gf(r, B, ++s)) === ce; )
        ;
      if (g !== ce || s === a) {
        var w = Of.apply(null, r.slice(l, s));
        return l = s, { value: w, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Vf = function(n) {
  for (var r = Nf(n), a = [], s; !(s = r.next()).done; )
    s.value && a.push(s.value.slice());
  return a;
}, Xf = function(n) {
  var r = 123;
  if (n.createRange) {
    var a = n.createRange();
    if (a.getBoundingClientRect) {
      var s = n.createElement("boundtest");
      s.style.height = r + "px", s.style.display = "block", n.body.appendChild(s), a.selectNode(s);
      var l = a.getBoundingClientRect(), B = Math.round(l.height);
      if (n.body.removeChild(s), B === r)
        return !0;
    }
  }
  return !1;
}, Jf = function(n) {
  var r = n.createElement("boundtest");
  r.style.width = "50px", r.style.display = "block", r.style.fontSize = "12px", r.style.letterSpacing = "0px", r.style.wordSpacing = "0px", n.body.appendChild(r);
  var a = n.createRange();
  r.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var s = r.firstChild, l = vi(s.data).map(function(C) {
    return kA(C);
  }), B = 0, g = {}, w = l.every(function(C, E) {
    a.setStart(s, B), a.setEnd(s, B + C.length);
    var v = a.getBoundingClientRect();
    B += C.length;
    var D = v.x > g.x || v.y > g.y;
    return g = v, E === 0 ? !0 : D;
  });
  return n.body.removeChild(r), w;
}, Yf = function() {
  return typeof new Image().crossOrigin < "u";
}, zf = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, jf = function(n) {
  var r = new Image(), a = n.createElement("canvas"), s = a.getContext("2d");
  if (!s)
    return !1;
  r.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    s.drawImage(r, 0, 0), a.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, Ws = function(n) {
  return n[0] === 0 && n[1] === 255 && n[2] === 0 && n[3] === 255;
}, Wf = function(n) {
  var r = n.createElement("canvas"), a = 100;
  r.width = a, r.height = a;
  var s = r.getContext("2d");
  if (!s)
    return Promise.reject(!1);
  s.fillStyle = "rgb(0, 255, 0)", s.fillRect(0, 0, a, a);
  var l = new Image(), B = r.toDataURL();
  l.src = B;
  var g = Wn(a, a, 0, 0, l);
  return s.fillStyle = "red", s.fillRect(0, 0, a, a), Zs(g).then(function(w) {
    s.drawImage(w, 0, 0);
    var C = s.getImageData(0, 0, a, a).data;
    s.fillStyle = "red", s.fillRect(0, 0, a, a);
    var E = n.createElement("div");
    return E.style.backgroundImage = "url(" + B + ")", E.style.height = a + "px", Ws(C) ? Zs(Wn(a, a, 0, 0, E)) : Promise.reject(!1);
  }).then(function(w) {
    return s.drawImage(w, 0, 0), Ws(s.getImageData(0, 0, a, a).data);
  }).catch(function() {
    return !1;
  });
}, Wn = function(n, r, a, s, l) {
  var B = "http://www.w3.org/2000/svg", g = document.createElementNS(B, "svg"), w = document.createElementNS(B, "foreignObject");
  return g.setAttributeNS(null, "width", n.toString()), g.setAttributeNS(null, "height", r.toString()), w.setAttributeNS(null, "width", "100%"), w.setAttributeNS(null, "height", "100%"), w.setAttributeNS(null, "x", a.toString()), w.setAttributeNS(null, "y", s.toString()), w.setAttributeNS(null, "externalResourcesRequired", "true"), g.appendChild(w), w.appendChild(l), g;
}, Zs = function(n) {
  return new Promise(function(r, a) {
    var s = new Image();
    s.onload = function() {
      return r(s);
    }, s.onerror = a, s.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(n));
  });
}, XA = {
  get SUPPORT_RANGE_BOUNDS() {
    var n = Xf(document);
    return Object.defineProperty(XA, "SUPPORT_RANGE_BOUNDS", { value: n }), n;
  },
  get SUPPORT_WORD_BREAKING() {
    var n = XA.SUPPORT_RANGE_BOUNDS && Jf(document);
    return Object.defineProperty(XA, "SUPPORT_WORD_BREAKING", { value: n }), n;
  },
  get SUPPORT_SVG_DRAWING() {
    var n = jf(document);
    return Object.defineProperty(XA, "SUPPORT_SVG_DRAWING", { value: n }), n;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var n = typeof Array.from == "function" && typeof window.fetch == "function" ? Wf(document) : Promise.resolve(!1);
    return Object.defineProperty(XA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: n }), n;
  },
  get SUPPORT_CORS_IMAGES() {
    var n = Yf();
    return Object.defineProperty(XA, "SUPPORT_CORS_IMAGES", { value: n }), n;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var n = zf();
    return Object.defineProperty(XA, "SUPPORT_RESPONSE_TYPE", { value: n }), n;
  },
  get SUPPORT_CORS_XHR() {
    var n = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(XA, "SUPPORT_CORS_XHR", { value: n }), n;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var n = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(XA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: n }), n;
  }
}, nr = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r, a) {
      this.text = r, this.bounds = a;
    }
    return n;
  }()
), Zf = function(n, r, a, s) {
  var l = Ad(r, a), B = [], g = 0;
  return l.forEach(function(w) {
    if (a.textDecorationLine.length || w.trim().length > 0)
      if (XA.SUPPORT_RANGE_BOUNDS) {
        var C = qs(s, g, w.length).getClientRects();
        if (C.length > 1) {
          var E = ua(w), v = 0;
          E.forEach(function(R) {
            B.push(new nr(R, Pe.fromDOMRectList(n, qs(s, v + g, R.length).getClientRects()))), v += R.length;
          });
        } else
          B.push(new nr(w, Pe.fromDOMRectList(n, C)));
      } else {
        var D = s.splitText(w.length);
        B.push(new nr(w, qf(n, s))), s = D;
      }
    else XA.SUPPORT_RANGE_BOUNDS || (s = s.splitText(w.length));
    g += w.length;
  }), B;
}, qf = function(n, r) {
  var a = r.ownerDocument;
  if (a) {
    var s = a.createElement("html2canvaswrapper");
    s.appendChild(r.cloneNode(!0));
    var l = r.parentNode;
    if (l) {
      l.replaceChild(s, r);
      var B = Ei(n, s);
      return s.firstChild && l.replaceChild(s.firstChild, s), B;
    }
  }
  return Pe.EMPTY;
}, qs = function(n, r, a) {
  var s = n.ownerDocument;
  if (!s)
    throw new Error("Node has no owner document");
  var l = s.createRange();
  return l.setStart(n, r), l.setEnd(n, r + a), l;
}, ua = function(n) {
  if (XA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var r = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(r.segment(n)).map(function(a) {
      return a.segment;
    });
  }
  return Vf(n);
}, $f = function(n, r) {
  if (XA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var a = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(a.segment(n)).map(function(s) {
      return s.segment;
    });
  }
  return td(n, r);
}, Ad = function(n, r) {
  return r.letterSpacing !== 0 ? ua(n) : $f(n, r);
}, ed = [32, 160, 4961, 65792, 65793, 4153, 4241], td = function(n, r) {
  for (var a = LB(n, {
    lineBreak: r.lineBreak,
    wordBreak: r.overflowWrap === "break-word" ? "break-word" : r.wordBreak
  }), s = [], l, B = function() {
    if (l.value) {
      var g = l.value.slice(), w = vi(g), C = "";
      w.forEach(function(E) {
        ed.indexOf(E) === -1 ? C += kA(E) : (C.length && s.push(C), s.push(kA(E)), C = "");
      }), C.length && s.push(C);
    }
  }; !(l = a.next()).done; )
    B();
  return s;
}, rd = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r, a, s) {
      this.text = id(a.data, s.textTransform), this.textBounds = Zf(r, this.text, s, a);
    }
    return n;
  }()
), id = function(n, r) {
  switch (r) {
    case 1:
      return n.toLowerCase();
    case 3:
      return n.replace(nd, ad);
    case 2:
      return n.toUpperCase();
    default:
      return n;
  }
}, nd = /(^|\s|:|-|\(|\))([a-z])/g, ad = function(n, r, a) {
  return n.length > 0 ? r + a.toUpperCase() : n;
}, $o = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      return l.src = s.currentSrc || s.src, l.intrinsicWidth = s.naturalWidth, l.intrinsicHeight = s.naturalHeight, l.context.cache.addImage(l.src), l;
    }
    return r;
  }(Me)
), Au = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      return l.canvas = s, l.intrinsicWidth = s.width, l.intrinsicHeight = s.height, l;
    }
    return r;
  }(Me)
), eu = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this, B = new XMLSerializer(), g = Ei(a, s);
      return s.setAttribute("width", g.width + "px"), s.setAttribute("height", g.height + "px"), l.svg = "data:image/svg+xml," + encodeURIComponent(B.serializeToString(s)), l.intrinsicWidth = s.width.baseVal.value, l.intrinsicHeight = s.height.baseVal.value, l.context.cache.addImage(l.svg), l;
    }
    return r;
  }(Me)
), tu = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      return l.value = s.value, l;
    }
    return r;
  }(Me)
), Zn = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      return l.start = s.start, l.reversed = typeof s.reversed == "boolean" && s.reversed === !0, l;
    }
    return r;
  }(Me)
), sd = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], od = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], ud = function(n) {
  return n.width > n.height ? new Pe(n.left + (n.width - n.height) / 2, n.top, n.height, n.height) : n.width < n.height ? new Pe(n.left, n.top + (n.height - n.width) / 2, n.width, n.width) : n;
}, ld = function(n) {
  var r = n.type === hd ? new Array(n.value.length + 1).join("•") : n.value;
  return r.length === 0 ? n.placeholder || "" : r;
}, Ci = "checkbox", wi = "radio", hd = "password", $s = 707406591, la = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      switch (l.type = s.type.toLowerCase(), l.checked = s.checked, l.value = ld(s), (l.type === Ci || l.type === wi) && (l.styles.backgroundColor = 3739148031, l.styles.borderTopColor = l.styles.borderRightColor = l.styles.borderBottomColor = l.styles.borderLeftColor = 2779096575, l.styles.borderTopWidth = l.styles.borderRightWidth = l.styles.borderBottomWidth = l.styles.borderLeftWidth = 1, l.styles.borderTopStyle = l.styles.borderRightStyle = l.styles.borderBottomStyle = l.styles.borderLeftStyle = 1, l.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], l.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], l.bounds = ud(l.bounds)), l.type) {
        case Ci:
          l.styles.borderTopRightRadius = l.styles.borderTopLeftRadius = l.styles.borderBottomRightRadius = l.styles.borderBottomLeftRadius = sd;
          break;
        case wi:
          l.styles.borderTopRightRadius = l.styles.borderTopLeftRadius = l.styles.borderBottomRightRadius = l.styles.borderBottomLeftRadius = od;
          break;
      }
      return l;
    }
    return r;
  }(Me)
), ru = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this, B = s.options[s.selectedIndex || 0];
      return l.value = B && B.text || "", l;
    }
    return r;
  }(Me)
), iu = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      return l.value = s.value, l;
    }
    return r;
  }(Me)
), nu = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      l.src = s.src, l.width = parseInt(s.width, 10) || 0, l.height = parseInt(s.height, 10) || 0, l.backgroundColor = l.styles.backgroundColor;
      try {
        if (s.contentWindow && s.contentWindow.document && s.contentWindow.document.documentElement) {
          l.tree = su(a, s.contentWindow.document.documentElement);
          var B = s.contentWindow.document.documentElement ? rr(a, getComputedStyle(s.contentWindow.document.documentElement).backgroundColor) : Re.TRANSPARENT, g = s.contentWindow.document.body ? rr(a, getComputedStyle(s.contentWindow.document.body).backgroundColor) : Re.TRANSPARENT;
          l.backgroundColor = At(B) ? At(g) ? l.styles.backgroundColor : g : B;
        }
      } catch {
      }
      return l;
    }
    return r;
  }(Me)
), cd = ["OL", "UL", "MENU"], Bi = function(n, r, a, s) {
  for (var l = r.firstChild, B = void 0; l; l = B)
    if (B = l.nextSibling, ou(l) && l.data.trim().length > 0)
      a.textNodes.push(new rd(n, l, a.styles));
    else if (Mt(l))
      if (cu(l) && l.assignedNodes)
        l.assignedNodes().forEach(function(w) {
          return Bi(n, w, a, s);
        });
      else {
        var g = au(n, l);
        g.styles.isVisible() && (Bd(l, g, s) ? g.flags |= 4 : gd(g.styles) && (g.flags |= 2), cd.indexOf(l.tagName) !== -1 && (g.flags |= 8), a.elements.push(g), l.slot, l.shadowRoot ? Bi(n, l.shadowRoot, g, s) : !mi(l) && !uu(l) && !yi(l) && Bi(n, l, g, s));
      }
}, au = function(n, r) {
  return $n(r) ? new $o(n, r) : lu(r) ? new Au(n, r) : uu(r) ? new eu(n, r) : pd(r) ? new tu(n, r) : fd(r) ? new Zn(n, r) : dd(r) ? new la(n, r) : yi(r) ? new ru(n, r) : mi(r) ? new iu(n, r) : hu(r) ? new nu(n, r) : new Me(n, r);
}, su = function(n, r) {
  var a = au(n, r);
  return a.flags |= 4, Bi(n, r, a, a), a;
}, Bd = function(n, r, a) {
  return r.styles.isPositionedWithZIndex() || r.styles.opacity < 1 || r.styles.isTransformed() || ha(n) && a.styles.isTransparent();
}, gd = function(n) {
  return n.isPositioned() || n.isFloating();
}, ou = function(n) {
  return n.nodeType === Node.TEXT_NODE;
}, Mt = function(n) {
  return n.nodeType === Node.ELEMENT_NODE;
}, qn = function(n) {
  return Mt(n) && typeof n.style < "u" && !gi(n);
}, gi = function(n) {
  return typeof n.className == "object";
}, pd = function(n) {
  return n.tagName === "LI";
}, fd = function(n) {
  return n.tagName === "OL";
}, dd = function(n) {
  return n.tagName === "INPUT";
}, Cd = function(n) {
  return n.tagName === "HTML";
}, uu = function(n) {
  return n.tagName === "svg";
}, ha = function(n) {
  return n.tagName === "BODY";
}, lu = function(n) {
  return n.tagName === "CANVAS";
}, Ao = function(n) {
  return n.tagName === "VIDEO";
}, $n = function(n) {
  return n.tagName === "IMG";
}, hu = function(n) {
  return n.tagName === "IFRAME";
}, eo = function(n) {
  return n.tagName === "STYLE";
}, wd = function(n) {
  return n.tagName === "SCRIPT";
}, mi = function(n) {
  return n.tagName === "TEXTAREA";
}, yi = function(n) {
  return n.tagName === "SELECT";
}, cu = function(n) {
  return n.tagName === "SLOT";
}, to = function(n) {
  return n.tagName.indexOf("-") > 0;
}, md = (
  /** @class */
  function() {
    function n() {
      this.counters = {};
    }
    return n.prototype.getCounterValue = function(r) {
      var a = this.counters[r];
      return a && a.length ? a[a.length - 1] : 1;
    }, n.prototype.getCounterValues = function(r) {
      var a = this.counters[r];
      return a || [];
    }, n.prototype.pop = function(r) {
      var a = this;
      r.forEach(function(s) {
        return a.counters[s].pop();
      });
    }, n.prototype.parse = function(r) {
      var a = this, s = r.counterIncrement, l = r.counterReset, B = !0;
      s !== null && s.forEach(function(w) {
        var C = a.counters[w.counter];
        C && w.increment !== 0 && (B = !1, C.length || C.push(1), C[Math.max(0, C.length - 1)] += w.increment);
      });
      var g = [];
      return B && l.forEach(function(w) {
        var C = a.counters[w.counter];
        g.push(w.counter), C || (C = a.counters[w.counter] = []), C.push(w.reset);
      }), g;
    }, n;
  }()
), ro = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, io = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, yd = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, _d = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, Et = function(n, r, a, s, l, B) {
  return n < r || n > a ? cr(n, l, B.length > 0) : s.integers.reduce(function(g, w, C) {
    for (; n >= w; )
      n -= w, g += s.values[C];
    return g;
  }, "") + B;
}, Bu = function(n, r, a, s) {
  var l = "";
  do
    a || n--, l = s(n) + l, n /= r;
  while (n * r >= r);
  return l;
}, IA = function(n, r, a, s, l) {
  var B = a - r + 1;
  return (n < 0 ? "-" : "") + (Bu(Math.abs(n), B, s, function(g) {
    return kA(Math.floor(g % B) + r);
  }) + l);
}, at = function(n, r, a) {
  a === void 0 && (a = ". ");
  var s = r.length;
  return Bu(Math.abs(n), s, !1, function(l) {
    return r[Math.floor(l % s)];
  }) + a;
}, Lt = 1, Ye = 2, ze = 4, er = 8, Oe = function(n, r, a, s, l, B) {
  if (n < -9999 || n > 9999)
    return cr(n, 4, l.length > 0);
  var g = Math.abs(n), w = l;
  if (g === 0)
    return r[0] + w;
  for (var C = 0; g > 0 && C <= 4; C++) {
    var E = g % 10;
    E === 0 && KA(B, Lt) && w !== "" ? w = r[E] + w : E > 1 || E === 1 && C === 0 || E === 1 && C === 1 && KA(B, Ye) || E === 1 && C === 1 && KA(B, ze) && n > 100 || E === 1 && C > 1 && KA(B, er) ? w = r[E] + (C > 0 ? a[C - 1] : "") + w : E === 1 && C > 0 && (w = a[C - 1] + w), g = Math.floor(g / 10);
  }
  return (n < 0 ? s : "") + w;
}, no = "十百千萬", ao = "拾佰仟萬", so = "マイナス", vn = "마이너스", cr = function(n, r, a) {
  var s = a ? ". " : "", l = a ? "、" : "", B = a ? ", " : "", g = a ? " " : "";
  switch (r) {
    case 0:
      return "•" + g;
    case 1:
      return "◦" + g;
    case 2:
      return "◾" + g;
    case 5:
      var w = IA(n, 48, 57, !0, s);
      return w.length < 4 ? "0" + w : w;
    case 4:
      return at(n, "〇一二三四五六七八九", l);
    case 6:
      return Et(n, 1, 3999, ro, 3, s).toLowerCase();
    case 7:
      return Et(n, 1, 3999, ro, 3, s);
    case 8:
      return IA(n, 945, 969, !1, s);
    case 9:
      return IA(n, 97, 122, !1, s);
    case 10:
      return IA(n, 65, 90, !1, s);
    case 11:
      return IA(n, 1632, 1641, !0, s);
    case 12:
    case 49:
      return Et(n, 1, 9999, io, 3, s);
    case 35:
      return Et(n, 1, 9999, io, 3, s).toLowerCase();
    case 13:
      return IA(n, 2534, 2543, !0, s);
    case 14:
    case 30:
      return IA(n, 6112, 6121, !0, s);
    case 15:
      return at(n, "子丑寅卯辰巳午未申酉戌亥", l);
    case 16:
      return at(n, "甲乙丙丁戊己庚辛壬癸", l);
    case 17:
    case 48:
      return Oe(n, "零一二三四五六七八九", no, "負", l, Ye | ze | er);
    case 47:
      return Oe(n, "零壹貳參肆伍陸柒捌玖", ao, "負", l, Lt | Ye | ze | er);
    case 42:
      return Oe(n, "零一二三四五六七八九", no, "负", l, Ye | ze | er);
    case 41:
      return Oe(n, "零壹贰叁肆伍陆柒捌玖", ao, "负", l, Lt | Ye | ze | er);
    case 26:
      return Oe(n, "〇一二三四五六七八九", "十百千万", so, l, 0);
    case 25:
      return Oe(n, "零壱弐参四伍六七八九", "拾百千万", so, l, Lt | Ye | ze);
    case 31:
      return Oe(n, "영일이삼사오육칠팔구", "십백천만", vn, B, Lt | Ye | ze);
    case 33:
      return Oe(n, "零一二三四五六七八九", "十百千萬", vn, B, 0);
    case 32:
      return Oe(n, "零壹貳參四五六七八九", "拾百千", vn, B, Lt | Ye | ze);
    case 18:
      return IA(n, 2406, 2415, !0, s);
    case 20:
      return Et(n, 1, 19999, _d, 3, s);
    case 21:
      return IA(n, 2790, 2799, !0, s);
    case 22:
      return IA(n, 2662, 2671, !0, s);
    case 22:
      return Et(n, 1, 10999, yd, 3, s);
    case 23:
      return at(n, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return at(n, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return IA(n, 3302, 3311, !0, s);
    case 28:
      return at(n, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", l);
    case 29:
      return at(n, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", l);
    case 34:
      return IA(n, 3792, 3801, !0, s);
    case 37:
      return IA(n, 6160, 6169, !0, s);
    case 38:
      return IA(n, 4160, 4169, !0, s);
    case 39:
      return IA(n, 2918, 2927, !0, s);
    case 40:
      return IA(n, 1776, 1785, !0, s);
    case 43:
      return IA(n, 3046, 3055, !0, s);
    case 44:
      return IA(n, 3174, 3183, !0, s);
    case 45:
      return IA(n, 3664, 3673, !0, s);
    case 46:
      return IA(n, 3872, 3881, !0, s);
    case 3:
    default:
      return IA(n, 48, 57, !0, s);
  }
}, gu = "data-html2canvas-ignore", oo = (
  /** @class */
  function() {
    function n(r, a, s) {
      if (this.context = r, this.options = s, this.scrolledElements = [], this.referenceElement = a, this.counters = new md(), this.quoteDepth = 0, !a.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(a.ownerDocument.documentElement, !1);
    }
    return n.prototype.toIFrame = function(r, a) {
      var s = this, l = Qd(r, a);
      if (!l.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var B = r.defaultView.pageXOffset, g = r.defaultView.pageYOffset, w = l.contentWindow, C = w.document, E = vd(l).then(function() {
        return ee(s, void 0, void 0, function() {
          var v, D;
          return ZA(this, function(R) {
            switch (R.label) {
              case 0:
                return this.scrolledElements.forEach(xd), w && (w.scrollTo(a.left, a.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (w.scrollY !== a.top || w.scrollX !== a.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(w.scrollX - a.left, w.scrollY - a.top, 0, 0))), v = this.options.onclone, D = this.clonedReferenceElement, typeof D > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : C.fonts && C.fonts.ready ? [4, C.fonts.ready] : [3, 2];
              case 1:
                R.sent(), R.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Ed(C)] : [3, 4];
              case 3:
                R.sent(), R.label = 4;
              case 4:
                return typeof v == "function" ? [2, Promise.resolve().then(function() {
                  return v(C, D);
                }).then(function() {
                  return l;
                })] : [2, l];
            }
          });
        });
      });
      return C.open(), C.write(Ld(document.doctype) + "<html></html>"), bd(this.referenceElement.ownerDocument, B, g), C.replaceChild(C.adoptNode(this.documentElement), C.documentElement), C.close(), E;
    }, n.prototype.createElementClone = function(r) {
      if (jn(
        r,
        2
        /* CLONE */
      ))
        debugger;
      if (lu(r))
        return this.createCanvasClone(r);
      if (Ao(r))
        return this.createVideoClone(r);
      if (eo(r))
        return this.createStyleClone(r);
      var a = r.cloneNode(!1);
      return $n(a) && ($n(r) && r.currentSrc && r.currentSrc !== r.src && (a.src = r.currentSrc, a.srcset = ""), a.loading === "lazy" && (a.loading = "eager")), to(a) ? this.createCustomElementClone(a) : a;
    }, n.prototype.createCustomElementClone = function(r) {
      var a = document.createElement("html2canvascustomelement");
      return Un(r.style, a), a;
    }, n.prototype.createStyleClone = function(r) {
      try {
        var a = r.sheet;
        if (a && a.cssRules) {
          var s = [].slice.call(a.cssRules, 0).reduce(function(B, g) {
            return g && typeof g.cssText == "string" ? B + g.cssText : B;
          }, ""), l = r.cloneNode(!1);
          return l.textContent = s, l;
        }
      } catch (B) {
        if (this.context.logger.error("Unable to access cssRules property", B), B.name !== "SecurityError")
          throw B;
      }
      return r.cloneNode(!1);
    }, n.prototype.createCanvasClone = function(r) {
      var a;
      if (this.options.inlineImages && r.ownerDocument) {
        var s = r.ownerDocument.createElement("img");
        try {
          return s.src = r.toDataURL(), s;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", r);
        }
      }
      var l = r.cloneNode(!1);
      try {
        l.width = r.width, l.height = r.height;
        var B = r.getContext("2d"), g = l.getContext("2d");
        if (g)
          if (!this.options.allowTaint && B)
            g.putImageData(B.getImageData(0, 0, r.width, r.height), 0, 0);
          else {
            var w = (a = r.getContext("webgl2")) !== null && a !== void 0 ? a : r.getContext("webgl");
            if (w) {
              var C = w.getContextAttributes();
              (C == null ? void 0 : C.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", r);
            }
            g.drawImage(r, 0, 0);
          }
        return l;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", r);
      }
      return l;
    }, n.prototype.createVideoClone = function(r) {
      var a = r.ownerDocument.createElement("canvas");
      a.width = r.offsetWidth, a.height = r.offsetHeight;
      var s = a.getContext("2d");
      try {
        return s && (s.drawImage(r, 0, 0, a.width, a.height), this.options.allowTaint || s.getImageData(0, 0, a.width, a.height)), a;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", r);
      }
      var l = r.ownerDocument.createElement("canvas");
      return l.width = r.offsetWidth, l.height = r.offsetHeight, l;
    }, n.prototype.appendChildNode = function(r, a, s) {
      (!Mt(a) || !wd(a) && !a.hasAttribute(gu) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(a))) && (!this.options.copyStyles || !Mt(a) || !eo(a)) && r.appendChild(this.cloneNode(a, s));
    }, n.prototype.cloneChildNodes = function(r, a, s) {
      for (var l = this, B = r.shadowRoot ? r.shadowRoot.firstChild : r.firstChild; B; B = B.nextSibling)
        if (Mt(B) && cu(B) && typeof B.assignedNodes == "function") {
          var g = B.assignedNodes();
          g.length && g.forEach(function(w) {
            return l.appendChildNode(a, w, s);
          });
        } else
          this.appendChildNode(a, B, s);
    }, n.prototype.cloneNode = function(r, a) {
      if (ou(r))
        return document.createTextNode(r.data);
      if (!r.ownerDocument)
        return r.cloneNode(!1);
      var s = r.ownerDocument.defaultView;
      if (s && Mt(r) && (qn(r) || gi(r))) {
        var l = this.createElementClone(r);
        l.style.transitionProperty = "none";
        var B = s.getComputedStyle(r), g = s.getComputedStyle(r, ":before"), w = s.getComputedStyle(r, ":after");
        this.referenceElement === r && qn(l) && (this.clonedReferenceElement = l), ha(l) && kd(l);
        var C = this.counters.parse(new Os(this.context, B)), E = this.resolvePseudoContent(r, l, g, ar.BEFORE);
        to(r) && (a = !0), Ao(r) || this.cloneChildNodes(r, l, a), E && l.insertBefore(E, l.firstChild);
        var v = this.resolvePseudoContent(r, l, w, ar.AFTER);
        return v && l.appendChild(v), this.counters.pop(C), (B && (this.options.copyStyles || gi(r)) && !hu(r) || a) && Un(B, l), (r.scrollTop !== 0 || r.scrollLeft !== 0) && this.scrolledElements.push([l, r.scrollLeft, r.scrollTop]), (mi(r) || yi(r)) && (mi(l) || yi(l)) && (l.value = r.value), l;
      }
      return r.cloneNode(!1);
    }, n.prototype.resolvePseudoContent = function(r, a, s, l) {
      var B = this;
      if (s) {
        var g = s.content, w = a.ownerDocument;
        if (!(!w || !g || g === "none" || g === "-moz-alt-content" || s.display === "none")) {
          this.counters.parse(new Os(this.context, s));
          var C = new pf(this.context, s), E = w.createElement("html2canvaspseudoelement");
          Un(s, E), C.content.forEach(function(D) {
            if (D.type === 0)
              E.appendChild(w.createTextNode(D.value));
            else if (D.type === 22) {
              var R = w.createElement("img");
              R.src = D.value, R.style.opacity = "1", E.appendChild(R);
            } else if (D.type === 18) {
              if (D.name === "attr") {
                var q = D.values.filter(QA);
                q.length && E.appendChild(w.createTextNode(r.getAttribute(q[0].value) || ""));
              } else if (D.name === "counter") {
                var N = D.values.filter(kt), X = N[0], nA = N[1];
                if (X && QA(X)) {
                  var $ = B.counters.getCounterValue(X.value), AA = nA && QA(nA) ? zn.parse(B.context, nA.value) : 3;
                  E.appendChild(w.createTextNode(cr($, AA, !1)));
                }
              } else if (D.name === "counters") {
                var BA = D.values.filter(kt), X = BA[0], Y = BA[1], nA = BA[2];
                if (X && QA(X)) {
                  var tA = B.counters.getCounterValues(X.value), V = nA && QA(nA) ? zn.parse(B.context, nA.value) : 3, sA = Y && Y.type === 0 ? Y.value : "", iA = tA.map(function(LA) {
                    return cr(LA, V, !1);
                  }).join(sA);
                  E.appendChild(w.createTextNode(iA));
                }
              }
            } else if (D.type === 20)
              switch (D.value) {
                case "open-quote":
                  E.appendChild(w.createTextNode(Ks(C.quotes, B.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  E.appendChild(w.createTextNode(Ks(C.quotes, --B.quoteDepth, !1)));
                  break;
                default:
                  E.appendChild(w.createTextNode(D.value));
              }
          }), E.className = Aa + " " + ea;
          var v = l === ar.BEFORE ? " " + Aa : " " + ea;
          return gi(a) ? a.className.baseValue += v : a.className += v, E;
        }
      }
    }, n.destroy = function(r) {
      return r.parentNode ? (r.parentNode.removeChild(r), !0) : !1;
    }, n;
  }()
), ar;
(function(n) {
  n[n.BEFORE = 0] = "BEFORE", n[n.AFTER = 1] = "AFTER";
})(ar || (ar = {}));
var Qd = function(n, r) {
  var a = n.createElement("iframe");
  return a.className = "html2canvas-container", a.style.visibility = "hidden", a.style.position = "fixed", a.style.left = "-10000px", a.style.top = "0px", a.style.border = "0", a.width = r.width.toString(), a.height = r.height.toString(), a.scrolling = "no", a.setAttribute(gu, "true"), n.body.appendChild(a), a;
}, Fd = function(n) {
  return new Promise(function(r) {
    if (n.complete) {
      r();
      return;
    }
    if (!n.src) {
      r();
      return;
    }
    n.onload = r, n.onerror = r;
  });
}, Ed = function(n) {
  return Promise.all([].slice.call(n.images, 0).map(Fd));
}, vd = function(n) {
  return new Promise(function(r, a) {
    var s = n.contentWindow;
    if (!s)
      return a("No window assigned for iframe");
    var l = s.document;
    s.onload = n.onload = function() {
      s.onload = n.onload = null;
      var B = setInterval(function() {
        l.body.childNodes.length > 0 && l.readyState === "complete" && (clearInterval(B), r(n));
      }, 50);
    };
  });
}, Ud = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Un = function(n, r) {
  for (var a = n.length - 1; a >= 0; a--) {
    var s = n.item(a);
    Ud.indexOf(s) === -1 && r.style.setProperty(s, n.getPropertyValue(s));
  }
  return r;
}, Ld = function(n) {
  var r = "";
  return n && (r += "<!DOCTYPE ", n.name && (r += n.name), n.internalSubset && (r += n.internalSubset), n.publicId && (r += '"' + n.publicId + '"'), n.systemId && (r += '"' + n.systemId + '"'), r += ">"), r;
}, bd = function(n, r, a) {
  n && n.defaultView && (r !== n.defaultView.pageXOffset || a !== n.defaultView.pageYOffset) && n.defaultView.scrollTo(r, a);
}, xd = function(n) {
  var r = n[0], a = n[1], s = n[2];
  r.scrollLeft = a, r.scrollTop = s;
}, Md = ":before", Id = ":after", Aa = "___html2canvas___pseudoelement_before", ea = "___html2canvas___pseudoelement_after", uo = `{
    content: "" !important;
    display: none !important;
}`, kd = function(n) {
  Dd(n, "." + Aa + Md + uo + `
         .` + ea + Id + uo);
}, Dd = function(n, r) {
  var a = n.ownerDocument;
  if (a) {
    var s = a.createElement("style");
    s.textContent = r, n.appendChild(s);
  }
}, pu = (
  /** @class */
  function() {
    function n() {
    }
    return n.getOrigin = function(r) {
      var a = n._link;
      return a ? (a.href = r, a.href = a.href, a.protocol + a.hostname + a.port) : "about:blank";
    }, n.isSameOrigin = function(r) {
      return n.getOrigin(r) === n._origin;
    }, n.setContext = function(r) {
      n._link = r.document.createElement("a"), n._origin = n.getOrigin(r.location.href);
    }, n._origin = "about:blank", n;
  }()
), Hd = (
  /** @class */
  function() {
    function n(r, a) {
      this.context = r, this._options = a, this._cache = {};
    }
    return n.prototype.addImage = function(r) {
      var a = Promise.resolve();
      return this.has(r) || (bn(r) || Od(r)) && (this._cache[r] = this.loadImage(r)).catch(function() {
      }), a;
    }, n.prototype.match = function(r) {
      return this._cache[r];
    }, n.prototype.loadImage = function(r) {
      return ee(this, void 0, void 0, function() {
        var a, s, l, B, g = this;
        return ZA(this, function(w) {
          switch (w.label) {
            case 0:
              return a = pu.isSameOrigin(r), s = !Ln(r) && this._options.useCORS === !0 && XA.SUPPORT_CORS_IMAGES && !a, l = !Ln(r) && !a && !bn(r) && typeof this._options.proxy == "string" && XA.SUPPORT_CORS_XHR && !s, !a && this._options.allowTaint === !1 && !Ln(r) && !bn(r) && !l && !s ? [
                2
                /*return*/
              ] : (B = r, l ? [4, this.proxy(B)] : [3, 2]);
            case 1:
              B = w.sent(), w.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + r.substring(0, 256)), [4, new Promise(function(C, E) {
                var v = new Image();
                v.onload = function() {
                  return C(v);
                }, v.onerror = E, (Rd(B) || s) && (v.crossOrigin = "anonymous"), v.src = B, v.complete === !0 && setTimeout(function() {
                  return C(v);
                }, 500), g._options.imageTimeout > 0 && setTimeout(function() {
                  return E("Timed out (" + g._options.imageTimeout + "ms) loading image");
                }, g._options.imageTimeout);
              })];
            case 3:
              return [2, w.sent()];
          }
        });
      });
    }, n.prototype.has = function(r) {
      return typeof this._cache[r] < "u";
    }, n.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, n.prototype.proxy = function(r) {
      var a = this, s = this._options.proxy;
      if (!s)
        throw new Error("No proxy defined");
      var l = r.substring(0, 256);
      return new Promise(function(B, g) {
        var w = XA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", C = new XMLHttpRequest();
        C.onload = function() {
          if (C.status === 200)
            if (w === "text")
              B(C.response);
            else {
              var D = new FileReader();
              D.addEventListener("load", function() {
                return B(D.result);
              }, !1), D.addEventListener("error", function(R) {
                return g(R);
              }, !1), D.readAsDataURL(C.response);
            }
          else
            g("Failed to proxy resource " + l + " with status code " + C.status);
        }, C.onerror = g;
        var E = s.indexOf("?") > -1 ? "&" : "?";
        if (C.open("GET", "" + s + E + "url=" + encodeURIComponent(r) + "&responseType=" + w), w !== "text" && C instanceof XMLHttpRequest && (C.responseType = w), a._options.imageTimeout) {
          var v = a._options.imageTimeout;
          C.timeout = v, C.ontimeout = function() {
            return g("Timed out (" + v + "ms) proxying " + l);
          };
        }
        C.send();
      });
    }, n;
  }()
), Sd = /^data:image\/svg\+xml/i, Td = /^data:image\/.*;base64,/i, Kd = /^data:image\/.*/i, Od = function(n) {
  return XA.SUPPORT_SVG_DRAWING || !Pd(n);
}, Ln = function(n) {
  return Kd.test(n);
}, Rd = function(n) {
  return Td.test(n);
}, bn = function(n) {
  return n.substr(0, 4) === "blob";
}, Pd = function(n) {
  return n.substr(-3).toLowerCase() === "svg" || Sd.test(n);
}, aA = (
  /** @class */
  function() {
    function n(r, a) {
      this.type = 0, this.x = r, this.y = a;
    }
    return n.prototype.add = function(r, a) {
      return new n(this.x + r, this.y + a);
    }, n;
  }()
), vt = function(n, r, a) {
  return new aA(n.x + (r.x - n.x) * a, n.y + (r.y - n.y) * a);
}, ai = (
  /** @class */
  function() {
    function n(r, a, s, l) {
      this.type = 1, this.start = r, this.startControl = a, this.endControl = s, this.end = l;
    }
    return n.prototype.subdivide = function(r, a) {
      var s = vt(this.start, this.startControl, r), l = vt(this.startControl, this.endControl, r), B = vt(this.endControl, this.end, r), g = vt(s, l, r), w = vt(l, B, r), C = vt(g, w, r);
      return a ? new n(this.start, s, g, C) : new n(C, w, B, this.end);
    }, n.prototype.add = function(r, a) {
      return new n(this.start.add(r, a), this.startControl.add(r, a), this.endControl.add(r, a), this.end.add(r, a));
    }, n.prototype.reverse = function() {
      return new n(this.end, this.endControl, this.startControl, this.start);
    }, n;
  }()
), Be = function(n) {
  return n.type === 1;
}, Gd = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r) {
      var a = r.styles, s = r.bounds, l = $t(a.borderTopLeftRadius, s.width, s.height), B = l[0], g = l[1], w = $t(a.borderTopRightRadius, s.width, s.height), C = w[0], E = w[1], v = $t(a.borderBottomRightRadius, s.width, s.height), D = v[0], R = v[1], q = $t(a.borderBottomLeftRadius, s.width, s.height), N = q[0], X = q[1], nA = [];
      nA.push((B + C) / s.width), nA.push((N + D) / s.width), nA.push((g + X) / s.height), nA.push((E + R) / s.height);
      var $ = Math.max.apply(Math, nA);
      $ > 1 && (B /= $, g /= $, C /= $, E /= $, D /= $, R /= $, N /= $, X /= $);
      var AA = s.width - C, BA = s.height - R, Y = s.width - D, tA = s.height - X, V = a.borderTopWidth, sA = a.borderRightWidth, iA = a.borderBottomWidth, uA = a.borderLeftWidth, CA = FA(a.paddingTop, r.bounds.width), LA = FA(a.paddingRight, r.bounds.width), NA = FA(a.paddingBottom, r.bounds.width), mA = FA(a.paddingLeft, r.bounds.width);
      this.topLeftBorderDoubleOuterBox = B > 0 || g > 0 ? EA(s.left + uA / 3, s.top + V / 3, B - uA / 3, g - V / 3, yA.TOP_LEFT) : new aA(s.left + uA / 3, s.top + V / 3), this.topRightBorderDoubleOuterBox = B > 0 || g > 0 ? EA(s.left + AA, s.top + V / 3, C - sA / 3, E - V / 3, yA.TOP_RIGHT) : new aA(s.left + s.width - sA / 3, s.top + V / 3), this.bottomRightBorderDoubleOuterBox = D > 0 || R > 0 ? EA(s.left + Y, s.top + BA, D - sA / 3, R - iA / 3, yA.BOTTOM_RIGHT) : new aA(s.left + s.width - sA / 3, s.top + s.height - iA / 3), this.bottomLeftBorderDoubleOuterBox = N > 0 || X > 0 ? EA(s.left + uA / 3, s.top + tA, N - uA / 3, X - iA / 3, yA.BOTTOM_LEFT) : new aA(s.left + uA / 3, s.top + s.height - iA / 3), this.topLeftBorderDoubleInnerBox = B > 0 || g > 0 ? EA(s.left + uA * 2 / 3, s.top + V * 2 / 3, B - uA * 2 / 3, g - V * 2 / 3, yA.TOP_LEFT) : new aA(s.left + uA * 2 / 3, s.top + V * 2 / 3), this.topRightBorderDoubleInnerBox = B > 0 || g > 0 ? EA(s.left + AA, s.top + V * 2 / 3, C - sA * 2 / 3, E - V * 2 / 3, yA.TOP_RIGHT) : new aA(s.left + s.width - sA * 2 / 3, s.top + V * 2 / 3), this.bottomRightBorderDoubleInnerBox = D > 0 || R > 0 ? EA(s.left + Y, s.top + BA, D - sA * 2 / 3, R - iA * 2 / 3, yA.BOTTOM_RIGHT) : new aA(s.left + s.width - sA * 2 / 3, s.top + s.height - iA * 2 / 3), this.bottomLeftBorderDoubleInnerBox = N > 0 || X > 0 ? EA(s.left + uA * 2 / 3, s.top + tA, N - uA * 2 / 3, X - iA * 2 / 3, yA.BOTTOM_LEFT) : new aA(s.left + uA * 2 / 3, s.top + s.height - iA * 2 / 3), this.topLeftBorderStroke = B > 0 || g > 0 ? EA(s.left + uA / 2, s.top + V / 2, B - uA / 2, g - V / 2, yA.TOP_LEFT) : new aA(s.left + uA / 2, s.top + V / 2), this.topRightBorderStroke = B > 0 || g > 0 ? EA(s.left + AA, s.top + V / 2, C - sA / 2, E - V / 2, yA.TOP_RIGHT) : new aA(s.left + s.width - sA / 2, s.top + V / 2), this.bottomRightBorderStroke = D > 0 || R > 0 ? EA(s.left + Y, s.top + BA, D - sA / 2, R - iA / 2, yA.BOTTOM_RIGHT) : new aA(s.left + s.width - sA / 2, s.top + s.height - iA / 2), this.bottomLeftBorderStroke = N > 0 || X > 0 ? EA(s.left + uA / 2, s.top + tA, N - uA / 2, X - iA / 2, yA.BOTTOM_LEFT) : new aA(s.left + uA / 2, s.top + s.height - iA / 2), this.topLeftBorderBox = B > 0 || g > 0 ? EA(s.left, s.top, B, g, yA.TOP_LEFT) : new aA(s.left, s.top), this.topRightBorderBox = C > 0 || E > 0 ? EA(s.left + AA, s.top, C, E, yA.TOP_RIGHT) : new aA(s.left + s.width, s.top), this.bottomRightBorderBox = D > 0 || R > 0 ? EA(s.left + Y, s.top + BA, D, R, yA.BOTTOM_RIGHT) : new aA(s.left + s.width, s.top + s.height), this.bottomLeftBorderBox = N > 0 || X > 0 ? EA(s.left, s.top + tA, N, X, yA.BOTTOM_LEFT) : new aA(s.left, s.top + s.height), this.topLeftPaddingBox = B > 0 || g > 0 ? EA(s.left + uA, s.top + V, Math.max(0, B - uA), Math.max(0, g - V), yA.TOP_LEFT) : new aA(s.left + uA, s.top + V), this.topRightPaddingBox = C > 0 || E > 0 ? EA(s.left + Math.min(AA, s.width - sA), s.top + V, AA > s.width + sA ? 0 : Math.max(0, C - sA), Math.max(0, E - V), yA.TOP_RIGHT) : new aA(s.left + s.width - sA, s.top + V), this.bottomRightPaddingBox = D > 0 || R > 0 ? EA(s.left + Math.min(Y, s.width - uA), s.top + Math.min(BA, s.height - iA), Math.max(0, D - sA), Math.max(0, R - iA), yA.BOTTOM_RIGHT) : new aA(s.left + s.width - sA, s.top + s.height - iA), this.bottomLeftPaddingBox = N > 0 || X > 0 ? EA(s.left + uA, s.top + Math.min(tA, s.height - iA), Math.max(0, N - uA), Math.max(0, X - iA), yA.BOTTOM_LEFT) : new aA(s.left + uA, s.top + s.height - iA), this.topLeftContentBox = B > 0 || g > 0 ? EA(s.left + uA + mA, s.top + V + CA, Math.max(0, B - (uA + mA)), Math.max(0, g - (V + CA)), yA.TOP_LEFT) : new aA(s.left + uA + mA, s.top + V + CA), this.topRightContentBox = C > 0 || E > 0 ? EA(s.left + Math.min(AA, s.width + uA + mA), s.top + V + CA, AA > s.width + uA + mA ? 0 : C - uA + mA, E - (V + CA), yA.TOP_RIGHT) : new aA(s.left + s.width - (sA + LA), s.top + V + CA), this.bottomRightContentBox = D > 0 || R > 0 ? EA(s.left + Math.min(Y, s.width - (uA + mA)), s.top + Math.min(BA, s.height + V + CA), Math.max(0, D - (sA + LA)), R - (iA + NA), yA.BOTTOM_RIGHT) : new aA(s.left + s.width - (sA + LA), s.top + s.height - (iA + NA)), this.bottomLeftContentBox = N > 0 || X > 0 ? EA(s.left + uA + mA, s.top + tA, Math.max(0, N - (uA + mA)), X - (iA + NA), yA.BOTTOM_LEFT) : new aA(s.left + uA + mA, s.top + s.height - (iA + NA));
    }
    return n;
  }()
), yA;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 1] = "TOP_RIGHT", n[n.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", n[n.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(yA || (yA = {}));
var EA = function(n, r, a, s, l) {
  var B = 4 * ((Math.sqrt(2) - 1) / 3), g = a * B, w = s * B, C = n + a, E = r + s;
  switch (l) {
    case yA.TOP_LEFT:
      return new ai(new aA(n, E), new aA(n, E - w), new aA(C - g, r), new aA(C, r));
    case yA.TOP_RIGHT:
      return new ai(new aA(n, r), new aA(n + g, r), new aA(C, E - w), new aA(C, E));
    case yA.BOTTOM_RIGHT:
      return new ai(new aA(C, r), new aA(C, r + w), new aA(n + g, E), new aA(n, E));
    case yA.BOTTOM_LEFT:
    default:
      return new ai(new aA(C, E), new aA(C - g, E), new aA(n, r + w), new aA(n, r));
  }
}, _i = function(n) {
  return [n.topLeftBorderBox, n.topRightBorderBox, n.bottomRightBorderBox, n.bottomLeftBorderBox];
}, Nd = function(n) {
  return [
    n.topLeftContentBox,
    n.topRightContentBox,
    n.bottomRightContentBox,
    n.bottomLeftContentBox
  ];
}, Qi = function(n) {
  return [
    n.topLeftPaddingBox,
    n.topRightPaddingBox,
    n.bottomRightPaddingBox,
    n.bottomLeftPaddingBox
  ];
}, Vd = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r, a, s) {
      this.offsetX = r, this.offsetY = a, this.matrix = s, this.type = 0, this.target = 6;
    }
    return n;
  }()
), si = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r, a) {
      this.path = r, this.target = a, this.type = 1;
    }
    return n;
  }()
), Xd = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r) {
      this.opacity = r, this.type = 2, this.target = 6;
    }
    return n;
  }()
), Jd = function(n) {
  return n.type === 0;
}, fu = function(n) {
  return n.type === 1;
}, Yd = function(n) {
  return n.type === 2;
}, lo = function(n, r) {
  return n.length === r.length ? n.some(function(a, s) {
    return a === r[s];
  }) : !1;
}, zd = function(n, r, a, s, l) {
  return n.map(function(B, g) {
    switch (g) {
      case 0:
        return B.add(r, a);
      case 1:
        return B.add(r + s, a);
      case 2:
        return B.add(r + s, a + l);
      case 3:
        return B.add(r, a + l);
    }
    return B;
  });
}, du = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r) {
      this.element = r, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return n;
  }()
), Cu = (
  /** @class */
  function() {
    function n(r, a) {
      if (this.container = r, this.parent = a, this.effects = [], this.curves = new Gd(this.container), this.container.styles.opacity < 1 && this.effects.push(new Xd(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var s = this.container.bounds.left + this.container.styles.transformOrigin[0].number, l = this.container.bounds.top + this.container.styles.transformOrigin[1].number, B = this.container.styles.transform;
        this.effects.push(new Vd(s, l, B));
      }
      if (this.container.styles.overflowX !== 0) {
        var g = _i(this.curves), w = Qi(this.curves);
        lo(g, w) ? this.effects.push(new si(
          g,
          6
          /* CONTENT */
        )) : (this.effects.push(new si(
          g,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new si(
          w,
          4
          /* CONTENT */
        )));
      }
    }
    return n.prototype.getEffects = function(r) {
      for (var a = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, s = this.parent, l = this.effects.slice(0); s; ) {
        var B = s.effects.filter(function(C) {
          return !fu(C);
        });
        if (a || s.container.styles.position !== 0 || !s.parent) {
          if (l.unshift.apply(l, B), a = [
            2,
            3
            /* FIXED */
          ].indexOf(s.container.styles.position) === -1, s.container.styles.overflowX !== 0) {
            var g = _i(s.curves), w = Qi(s.curves);
            lo(g, w) || l.unshift(new si(
              w,
              6
              /* CONTENT */
            ));
          }
        } else
          l.unshift.apply(l, B);
        s = s.parent;
      }
      return l.filter(function(C) {
        return KA(C.target, r);
      });
    }, n;
  }()
), ta = function(n, r, a, s) {
  n.container.elements.forEach(function(l) {
    var B = KA(
      l.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), g = KA(
      l.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), w = new Cu(l, n);
    KA(
      l.styles.display,
      2048
      /* LIST_ITEM */
    ) && s.push(w);
    var C = KA(
      l.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : s;
    if (B || g) {
      var E = B || l.styles.isPositioned() ? a : r, v = new du(w);
      if (l.styles.isPositioned() || l.styles.opacity < 1 || l.styles.isTransformed()) {
        var D = l.styles.zIndex.order;
        if (D < 0) {
          var R = 0;
          E.negativeZIndex.some(function(N, X) {
            return D > N.element.container.styles.zIndex.order ? (R = X, !1) : R > 0;
          }), E.negativeZIndex.splice(R, 0, v);
        } else if (D > 0) {
          var q = 0;
          E.positiveZIndex.some(function(N, X) {
            return D >= N.element.container.styles.zIndex.order ? (q = X + 1, !1) : q > 0;
          }), E.positiveZIndex.splice(q, 0, v);
        } else
          E.zeroOrAutoZIndexOrTransformedOrOpacity.push(v);
      } else
        l.styles.isFloating() ? E.nonPositionedFloats.push(v) : E.nonPositionedInlineLevel.push(v);
      ta(w, v, B ? v : a, C);
    } else
      l.styles.isInlineLevel() ? r.inlineLevel.push(w) : r.nonInlineLevel.push(w), ta(w, r, a, C);
    KA(
      l.flags,
      8
      /* IS_LIST_OWNER */
    ) && wu(l, C);
  });
}, wu = function(n, r) {
  for (var a = n instanceof Zn ? n.start : 1, s = n instanceof Zn ? n.reversed : !1, l = 0; l < r.length; l++) {
    var B = r[l];
    B.container instanceof tu && typeof B.container.value == "number" && B.container.value !== 0 && (a = B.container.value), B.listValue = cr(a, B.container.styles.listStyleType, !0), a += s ? -1 : 1;
  }
}, jd = function(n) {
  var r = new Cu(n, null), a = new du(r), s = [];
  return ta(r, a, a, s), wu(r.container, s), a;
}, ho = function(n, r) {
  switch (r) {
    case 0:
      return pe(n.topLeftBorderBox, n.topLeftPaddingBox, n.topRightBorderBox, n.topRightPaddingBox);
    case 1:
      return pe(n.topRightBorderBox, n.topRightPaddingBox, n.bottomRightBorderBox, n.bottomRightPaddingBox);
    case 2:
      return pe(n.bottomRightBorderBox, n.bottomRightPaddingBox, n.bottomLeftBorderBox, n.bottomLeftPaddingBox);
    case 3:
    default:
      return pe(n.bottomLeftBorderBox, n.bottomLeftPaddingBox, n.topLeftBorderBox, n.topLeftPaddingBox);
  }
}, Wd = function(n, r) {
  switch (r) {
    case 0:
      return pe(n.topLeftBorderBox, n.topLeftBorderDoubleOuterBox, n.topRightBorderBox, n.topRightBorderDoubleOuterBox);
    case 1:
      return pe(n.topRightBorderBox, n.topRightBorderDoubleOuterBox, n.bottomRightBorderBox, n.bottomRightBorderDoubleOuterBox);
    case 2:
      return pe(n.bottomRightBorderBox, n.bottomRightBorderDoubleOuterBox, n.bottomLeftBorderBox, n.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return pe(n.bottomLeftBorderBox, n.bottomLeftBorderDoubleOuterBox, n.topLeftBorderBox, n.topLeftBorderDoubleOuterBox);
  }
}, Zd = function(n, r) {
  switch (r) {
    case 0:
      return pe(n.topLeftBorderDoubleInnerBox, n.topLeftPaddingBox, n.topRightBorderDoubleInnerBox, n.topRightPaddingBox);
    case 1:
      return pe(n.topRightBorderDoubleInnerBox, n.topRightPaddingBox, n.bottomRightBorderDoubleInnerBox, n.bottomRightPaddingBox);
    case 2:
      return pe(n.bottomRightBorderDoubleInnerBox, n.bottomRightPaddingBox, n.bottomLeftBorderDoubleInnerBox, n.bottomLeftPaddingBox);
    case 3:
    default:
      return pe(n.bottomLeftBorderDoubleInnerBox, n.bottomLeftPaddingBox, n.topLeftBorderDoubleInnerBox, n.topLeftPaddingBox);
  }
}, qd = function(n, r) {
  switch (r) {
    case 0:
      return oi(n.topLeftBorderStroke, n.topRightBorderStroke);
    case 1:
      return oi(n.topRightBorderStroke, n.bottomRightBorderStroke);
    case 2:
      return oi(n.bottomRightBorderStroke, n.bottomLeftBorderStroke);
    case 3:
    default:
      return oi(n.bottomLeftBorderStroke, n.topLeftBorderStroke);
  }
}, oi = function(n, r) {
  var a = [];
  return Be(n) ? a.push(n.subdivide(0.5, !1)) : a.push(n), Be(r) ? a.push(r.subdivide(0.5, !0)) : a.push(r), a;
}, pe = function(n, r, a, s) {
  var l = [];
  return Be(n) ? l.push(n.subdivide(0.5, !1)) : l.push(n), Be(a) ? l.push(a.subdivide(0.5, !0)) : l.push(a), Be(s) ? l.push(s.subdivide(0.5, !0).reverse()) : l.push(s), Be(r) ? l.push(r.subdivide(0.5, !1).reverse()) : l.push(r), l;
}, mu = function(n) {
  var r = n.bounds, a = n.styles;
  return r.add(a.borderLeftWidth, a.borderTopWidth, -(a.borderRightWidth + a.borderLeftWidth), -(a.borderTopWidth + a.borderBottomWidth));
}, Fi = function(n) {
  var r = n.styles, a = n.bounds, s = FA(r.paddingLeft, a.width), l = FA(r.paddingRight, a.width), B = FA(r.paddingTop, a.width), g = FA(r.paddingBottom, a.width);
  return a.add(s + r.borderLeftWidth, B + r.borderTopWidth, -(r.borderRightWidth + r.borderLeftWidth + s + l), -(r.borderTopWidth + r.borderBottomWidth + B + g));
}, $d = function(n, r) {
  return n === 0 ? r.bounds : n === 2 ? Fi(r) : mu(r);
}, AC = function(n, r) {
  return n === 0 ? r.bounds : n === 2 ? Fi(r) : mu(r);
}, xn = function(n, r, a) {
  var s = $d(bt(n.styles.backgroundOrigin, r), n), l = AC(bt(n.styles.backgroundClip, r), n), B = eC(bt(n.styles.backgroundSize, r), a, s), g = B[0], w = B[1], C = $t(bt(n.styles.backgroundPosition, r), s.width - g, s.height - w), E = tC(bt(n.styles.backgroundRepeat, r), C, B, s, l), v = Math.round(s.left + C[0]), D = Math.round(s.top + C[1]);
  return [E, v, D, g, w];
}, Ut = function(n) {
  return QA(n) && n.value === It.AUTO;
}, ui = function(n) {
  return typeof n == "number";
}, eC = function(n, r, a) {
  var s = r[0], l = r[1], B = r[2], g = n[0], w = n[1];
  if (!g)
    return [0, 0];
  if (HA(g) && w && HA(w))
    return [FA(g, a.width), FA(w, a.height)];
  var C = ui(B);
  if (QA(g) && (g.value === It.CONTAIN || g.value === It.COVER)) {
    if (ui(B)) {
      var E = a.width / a.height;
      return E < B != (g.value === It.COVER) ? [a.width, a.width / B] : [a.height * B, a.height];
    }
    return [a.width, a.height];
  }
  var v = ui(s), D = ui(l), R = v || D;
  if (Ut(g) && (!w || Ut(w))) {
    if (v && D)
      return [s, l];
    if (!C && !R)
      return [a.width, a.height];
    if (R && C) {
      var q = v ? s : l * B, N = D ? l : s / B;
      return [q, N];
    }
    var X = v ? s : a.width, nA = D ? l : a.height;
    return [X, nA];
  }
  if (C) {
    var $ = 0, AA = 0;
    return HA(g) ? $ = FA(g, a.width) : HA(w) && (AA = FA(w, a.height)), Ut(g) ? $ = AA * B : (!w || Ut(w)) && (AA = $ / B), [$, AA];
  }
  var BA = null, Y = null;
  if (HA(g) ? BA = FA(g, a.width) : w && HA(w) && (Y = FA(w, a.height)), BA !== null && (!w || Ut(w)) && (Y = v && D ? BA / s * l : a.height), Y !== null && Ut(g) && (BA = v && D ? Y / l * s : a.width), BA !== null && Y !== null)
    return [BA, Y];
  throw new Error("Unable to calculate background-size for element");
}, bt = function(n, r) {
  var a = n[r];
  return typeof a > "u" ? n[0] : a;
}, tC = function(n, r, a, s, l) {
  var B = r[0], g = r[1], w = a[0], C = a[1];
  switch (n) {
    case 2:
      return [
        new aA(Math.round(s.left), Math.round(s.top + g)),
        new aA(Math.round(s.left + s.width), Math.round(s.top + g)),
        new aA(Math.round(s.left + s.width), Math.round(C + s.top + g)),
        new aA(Math.round(s.left), Math.round(C + s.top + g))
      ];
    case 3:
      return [
        new aA(Math.round(s.left + B), Math.round(s.top)),
        new aA(Math.round(s.left + B + w), Math.round(s.top)),
        new aA(Math.round(s.left + B + w), Math.round(s.height + s.top)),
        new aA(Math.round(s.left + B), Math.round(s.height + s.top))
      ];
    case 1:
      return [
        new aA(Math.round(s.left + B), Math.round(s.top + g)),
        new aA(Math.round(s.left + B + w), Math.round(s.top + g)),
        new aA(Math.round(s.left + B + w), Math.round(s.top + g + C)),
        new aA(Math.round(s.left + B), Math.round(s.top + g + C))
      ];
    default:
      return [
        new aA(Math.round(l.left), Math.round(l.top)),
        new aA(Math.round(l.left + l.width), Math.round(l.top)),
        new aA(Math.round(l.left + l.width), Math.round(l.height + l.top)),
        new aA(Math.round(l.left), Math.round(l.height + l.top))
      ];
  }
}, rC = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", co = "Hidden Text", iC = (
  /** @class */
  function() {
    function n(r) {
      this._data = {}, this._document = r;
    }
    return n.prototype.parseMetrics = function(r, a) {
      var s = this._document.createElement("div"), l = this._document.createElement("img"), B = this._document.createElement("span"), g = this._document.body;
      s.style.visibility = "hidden", s.style.fontFamily = r, s.style.fontSize = a, s.style.margin = "0", s.style.padding = "0", s.style.whiteSpace = "nowrap", g.appendChild(s), l.src = rC, l.width = 1, l.height = 1, l.style.margin = "0", l.style.padding = "0", l.style.verticalAlign = "baseline", B.style.fontFamily = r, B.style.fontSize = a, B.style.margin = "0", B.style.padding = "0", B.appendChild(this._document.createTextNode(co)), s.appendChild(B), s.appendChild(l);
      var w = l.offsetTop - B.offsetTop + 2;
      s.removeChild(B), s.appendChild(this._document.createTextNode(co)), s.style.lineHeight = "normal", l.style.verticalAlign = "super";
      var C = l.offsetTop - s.offsetTop + 2;
      return g.removeChild(s), { baseline: w, middle: C };
    }, n.prototype.getMetrics = function(r, a) {
      var s = r + " " + a;
      return typeof this._data[s] > "u" && (this._data[s] = this.parseMetrics(r, a)), this._data[s];
    }, n;
  }()
), yu = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(r, a) {
      this.context = r, this.options = a;
    }
    return n;
  }()
), nC = 1e4, aC = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      return l._activeEffects = [], l.canvas = s.canvas ? s.canvas : document.createElement("canvas"), l.ctx = l.canvas.getContext("2d"), s.canvas || (l.canvas.width = Math.floor(s.width * s.scale), l.canvas.height = Math.floor(s.height * s.scale), l.canvas.style.width = s.width + "px", l.canvas.style.height = s.height + "px"), l.fontMetrics = new iC(document), l.ctx.scale(l.options.scale, l.options.scale), l.ctx.translate(-s.x, -s.y), l.ctx.textBaseline = "bottom", l._activeEffects = [], l.context.logger.debug("Canvas renderer initialized (" + s.width + "x" + s.height + ") with scale " + s.scale), l;
    }
    return r.prototype.applyEffects = function(a) {
      for (var s = this; this._activeEffects.length; )
        this.popEffect();
      a.forEach(function(l) {
        return s.applyEffect(l);
      });
    }, r.prototype.applyEffect = function(a) {
      this.ctx.save(), Yd(a) && (this.ctx.globalAlpha = a.opacity), Jd(a) && (this.ctx.translate(a.offsetX, a.offsetY), this.ctx.transform(a.matrix[0], a.matrix[1], a.matrix[2], a.matrix[3], a.matrix[4], a.matrix[5]), this.ctx.translate(-a.offsetX, -a.offsetY)), fu(a) && (this.path(a.path), this.ctx.clip()), this._activeEffects.push(a);
    }, r.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, r.prototype.renderStack = function(a) {
      return ee(this, void 0, void 0, function() {
        var s;
        return ZA(this, function(l) {
          switch (l.label) {
            case 0:
              return s = a.element.container.styles, s.isVisible() ? [4, this.renderStackContent(a)] : [3, 2];
            case 1:
              l.sent(), l.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderNode = function(a) {
      return ee(this, void 0, void 0, function() {
        return ZA(this, function(s) {
          switch (s.label) {
            case 0:
              if (KA(
                a.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return a.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(a)] : [3, 3];
            case 1:
              return s.sent(), [4, this.renderNodeContent(a)];
            case 2:
              s.sent(), s.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderTextWithLetterSpacing = function(a, s, l) {
      var B = this;
      if (s === 0)
        this.ctx.fillText(a.text, a.bounds.left, a.bounds.top + l);
      else {
        var g = ua(a.text);
        g.reduce(function(w, C) {
          return B.ctx.fillText(C, w, a.bounds.top + l), w + B.ctx.measureText(C).width;
        }, a.bounds.left);
      }
    }, r.prototype.createFontStyle = function(a) {
      var s = a.fontVariant.filter(function(g) {
        return g === "normal" || g === "small-caps";
      }).join(""), l = hC(a.fontFamily).join(", "), B = fr(a.fontSize) ? "" + a.fontSize.number + a.fontSize.unit : a.fontSize.number + "px";
      return [
        [a.fontStyle, s, a.fontWeight, B, l].join(" "),
        l,
        B
      ];
    }, r.prototype.renderTextNode = function(a, s) {
      return ee(this, void 0, void 0, function() {
        var l, B, g, w, C, E, v, D, R = this;
        return ZA(this, function(q) {
          return l = this.createFontStyle(s), B = l[0], g = l[1], w = l[2], this.ctx.font = B, this.ctx.direction = s.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", C = this.fontMetrics.getMetrics(g, w), E = C.baseline, v = C.middle, D = s.paintOrder, a.textBounds.forEach(function(N) {
            D.forEach(function(X) {
              switch (X) {
                case 0:
                  R.ctx.fillStyle = PA(s.color), R.renderTextWithLetterSpacing(N, s.letterSpacing, E);
                  var nA = s.textShadow;
                  nA.length && N.text.trim().length && (nA.slice(0).reverse().forEach(function($) {
                    R.ctx.shadowColor = PA($.color), R.ctx.shadowOffsetX = $.offsetX.number * R.options.scale, R.ctx.shadowOffsetY = $.offsetY.number * R.options.scale, R.ctx.shadowBlur = $.blur.number, R.renderTextWithLetterSpacing(N, s.letterSpacing, E);
                  }), R.ctx.shadowColor = "", R.ctx.shadowOffsetX = 0, R.ctx.shadowOffsetY = 0, R.ctx.shadowBlur = 0), s.textDecorationLine.length && (R.ctx.fillStyle = PA(s.textDecorationColor || s.color), s.textDecorationLine.forEach(function($) {
                    switch ($) {
                      case 1:
                        R.ctx.fillRect(N.bounds.left, Math.round(N.bounds.top + E), N.bounds.width, 1);
                        break;
                      case 2:
                        R.ctx.fillRect(N.bounds.left, Math.round(N.bounds.top), N.bounds.width, 1);
                        break;
                      case 3:
                        R.ctx.fillRect(N.bounds.left, Math.ceil(N.bounds.top + v), N.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  s.webkitTextStrokeWidth && N.text.trim().length && (R.ctx.strokeStyle = PA(s.webkitTextStrokeColor), R.ctx.lineWidth = s.webkitTextStrokeWidth, R.ctx.lineJoin = window.chrome ? "miter" : "round", R.ctx.strokeText(N.text, N.bounds.left, N.bounds.top + E)), R.ctx.strokeStyle = "", R.ctx.lineWidth = 0, R.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.renderReplacedElement = function(a, s, l) {
      if (l && a.intrinsicWidth > 0 && a.intrinsicHeight > 0) {
        var B = Fi(a), g = Qi(s);
        this.path(g), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(l, 0, 0, a.intrinsicWidth, a.intrinsicHeight, B.left, B.top, B.width, B.height), this.ctx.restore();
      }
    }, r.prototype.renderNodeContent = function(a) {
      return ee(this, void 0, void 0, function() {
        var s, l, B, g, w, C, AA, AA, E, v, D, R, Y, q, N, tA, X, nA, $, AA, BA, Y, tA;
        return ZA(this, function(V) {
          switch (V.label) {
            case 0:
              this.applyEffects(a.getEffects(
                4
                /* CONTENT */
              )), s = a.container, l = a.curves, B = s.styles, g = 0, w = s.textNodes, V.label = 1;
            case 1:
              return g < w.length ? (C = w[g], [4, this.renderTextNode(C, B)]) : [3, 4];
            case 2:
              V.sent(), V.label = 3;
            case 3:
              return g++, [3, 1];
            case 4:
              if (!(s instanceof $o)) return [3, 8];
              V.label = 5;
            case 5:
              return V.trys.push([5, 7, , 8]), [4, this.context.cache.match(s.src)];
            case 6:
              return AA = V.sent(), this.renderReplacedElement(s, l, AA), [3, 8];
            case 7:
              return V.sent(), this.context.logger.error("Error loading image " + s.src), [3, 8];
            case 8:
              if (s instanceof Au && this.renderReplacedElement(s, l, s.canvas), !(s instanceof eu)) return [3, 12];
              V.label = 9;
            case 9:
              return V.trys.push([9, 11, , 12]), [4, this.context.cache.match(s.svg)];
            case 10:
              return AA = V.sent(), this.renderReplacedElement(s, l, AA), [3, 12];
            case 11:
              return V.sent(), this.context.logger.error("Error loading svg " + s.svg.substring(0, 255)), [3, 12];
            case 12:
              return s instanceof nu && s.tree ? (E = new r(this.context, {
                scale: this.options.scale,
                backgroundColor: s.backgroundColor,
                x: 0,
                y: 0,
                width: s.width,
                height: s.height
              }), [4, E.render(s.tree)]) : [3, 14];
            case 13:
              v = V.sent(), s.width && s.height && this.ctx.drawImage(v, 0, 0, s.width, s.height, s.bounds.left, s.bounds.top, s.bounds.width, s.bounds.height), V.label = 14;
            case 14:
              if (s instanceof la && (D = Math.min(s.bounds.width, s.bounds.height), s.type === Ci ? s.checked && (this.ctx.save(), this.path([
                new aA(s.bounds.left + D * 0.39363, s.bounds.top + D * 0.79),
                new aA(s.bounds.left + D * 0.16, s.bounds.top + D * 0.5549),
                new aA(s.bounds.left + D * 0.27347, s.bounds.top + D * 0.44071),
                new aA(s.bounds.left + D * 0.39694, s.bounds.top + D * 0.5649),
                new aA(s.bounds.left + D * 0.72983, s.bounds.top + D * 0.23),
                new aA(s.bounds.left + D * 0.84, s.bounds.top + D * 0.34085),
                new aA(s.bounds.left + D * 0.39363, s.bounds.top + D * 0.79)
              ]), this.ctx.fillStyle = PA($s), this.ctx.fill(), this.ctx.restore()) : s.type === wi && s.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(s.bounds.left + D / 2, s.bounds.top + D / 2, D / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = PA($s), this.ctx.fill(), this.ctx.restore())), sC(s) && s.value.length) {
                switch (R = this.createFontStyle(B), Y = R[0], q = R[1], N = this.fontMetrics.getMetrics(Y, q).baseline, this.ctx.font = Y, this.ctx.fillStyle = PA(B.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = uC(s.styles.textAlign), tA = Fi(s), X = 0, s.styles.textAlign) {
                  case 1:
                    X += tA.width / 2;
                    break;
                  case 2:
                    X += tA.width;
                    break;
                }
                nA = tA.add(X, 0, 0, -tA.height / 2 + 1), this.ctx.save(), this.path([
                  new aA(tA.left, tA.top),
                  new aA(tA.left + tA.width, tA.top),
                  new aA(tA.left + tA.width, tA.top + tA.height),
                  new aA(tA.left, tA.top + tA.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new nr(s.value, nA), B.letterSpacing, N), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!KA(
                s.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (s.styles.listStyleImage === null) return [3, 19];
              if ($ = s.styles.listStyleImage, $.type !== 0) return [3, 18];
              AA = void 0, BA = $.url, V.label = 15;
            case 15:
              return V.trys.push([15, 17, , 18]), [4, this.context.cache.match(BA)];
            case 16:
              return AA = V.sent(), this.ctx.drawImage(AA, s.bounds.left - (AA.width + 10), s.bounds.top), [3, 18];
            case 17:
              return V.sent(), this.context.logger.error("Error loading list-style-image " + BA), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              a.listValue && s.styles.listStyleType !== -1 && (Y = this.createFontStyle(B)[0], this.ctx.font = Y, this.ctx.fillStyle = PA(B.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", tA = new Pe(s.bounds.left, s.bounds.top + FA(s.styles.paddingTop, s.bounds.width), s.bounds.width, Ss(B.lineHeight, B.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new nr(a.listValue, tA), B.letterSpacing, Ss(B.lineHeight, B.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), V.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderStackContent = function(a) {
      return ee(this, void 0, void 0, function() {
        var s, l, $, B, g, $, w, C, $, E, v, $, D, R, $, q, N, $, X, nA, $;
        return ZA(this, function(AA) {
          switch (AA.label) {
            case 0:
              if (KA(
                a.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(a.element)];
            case 1:
              AA.sent(), s = 0, l = a.negativeZIndex, AA.label = 2;
            case 2:
              return s < l.length ? ($ = l[s], [4, this.renderStack($)]) : [3, 5];
            case 3:
              AA.sent(), AA.label = 4;
            case 4:
              return s++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(a.element)];
            case 6:
              AA.sent(), B = 0, g = a.nonInlineLevel, AA.label = 7;
            case 7:
              return B < g.length ? ($ = g[B], [4, this.renderNode($)]) : [3, 10];
            case 8:
              AA.sent(), AA.label = 9;
            case 9:
              return B++, [3, 7];
            case 10:
              w = 0, C = a.nonPositionedFloats, AA.label = 11;
            case 11:
              return w < C.length ? ($ = C[w], [4, this.renderStack($)]) : [3, 14];
            case 12:
              AA.sent(), AA.label = 13;
            case 13:
              return w++, [3, 11];
            case 14:
              E = 0, v = a.nonPositionedInlineLevel, AA.label = 15;
            case 15:
              return E < v.length ? ($ = v[E], [4, this.renderStack($)]) : [3, 18];
            case 16:
              AA.sent(), AA.label = 17;
            case 17:
              return E++, [3, 15];
            case 18:
              D = 0, R = a.inlineLevel, AA.label = 19;
            case 19:
              return D < R.length ? ($ = R[D], [4, this.renderNode($)]) : [3, 22];
            case 20:
              AA.sent(), AA.label = 21;
            case 21:
              return D++, [3, 19];
            case 22:
              q = 0, N = a.zeroOrAutoZIndexOrTransformedOrOpacity, AA.label = 23;
            case 23:
              return q < N.length ? ($ = N[q], [4, this.renderStack($)]) : [3, 26];
            case 24:
              AA.sent(), AA.label = 25;
            case 25:
              return q++, [3, 23];
            case 26:
              X = 0, nA = a.positiveZIndex, AA.label = 27;
            case 27:
              return X < nA.length ? ($ = nA[X], [4, this.renderStack($)]) : [3, 30];
            case 28:
              AA.sent(), AA.label = 29;
            case 29:
              return X++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.mask = function(a) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(a.slice(0).reverse()), this.ctx.closePath();
    }, r.prototype.path = function(a) {
      this.ctx.beginPath(), this.formatPath(a), this.ctx.closePath();
    }, r.prototype.formatPath = function(a) {
      var s = this;
      a.forEach(function(l, B) {
        var g = Be(l) ? l.start : l;
        B === 0 ? s.ctx.moveTo(g.x, g.y) : s.ctx.lineTo(g.x, g.y), Be(l) && s.ctx.bezierCurveTo(l.startControl.x, l.startControl.y, l.endControl.x, l.endControl.y, l.end.x, l.end.y);
      });
    }, r.prototype.renderRepeat = function(a, s, l, B) {
      this.path(a), this.ctx.fillStyle = s, this.ctx.translate(l, B), this.ctx.fill(), this.ctx.translate(-l, -B);
    }, r.prototype.resizeImage = function(a, s, l) {
      var B;
      if (a.width === s && a.height === l)
        return a;
      var g = (B = this.canvas.ownerDocument) !== null && B !== void 0 ? B : document, w = g.createElement("canvas");
      w.width = Math.max(1, s), w.height = Math.max(1, l);
      var C = w.getContext("2d");
      return C.drawImage(a, 0, 0, a.width, a.height, 0, 0, s, l), w;
    }, r.prototype.renderBackgroundImage = function(a) {
      return ee(this, void 0, void 0, function() {
        var s, l, B, g, w, C;
        return ZA(this, function(E) {
          switch (E.label) {
            case 0:
              s = a.styles.backgroundImage.length - 1, l = function(v) {
                var D, R, q, CA, YA, zA, mA, SA, iA, N, CA, YA, zA, mA, SA, X, nA, $, AA, BA, Y, tA, V, sA, iA, uA, CA, LA, NA, mA, SA, Qe, YA, zA, fe, ie, ne, Ie, ke, de, De, Ce;
                return ZA(this, function(Ge) {
                  switch (Ge.label) {
                    case 0:
                      if (v.type !== 0) return [3, 5];
                      D = void 0, R = v.url, Ge.label = 1;
                    case 1:
                      return Ge.trys.push([1, 3, , 4]), [4, B.context.cache.match(R)];
                    case 2:
                      return D = Ge.sent(), [3, 4];
                    case 3:
                      return Ge.sent(), B.context.logger.error("Error loading background-image " + R), [3, 4];
                    case 4:
                      return D && (q = xn(a, s, [
                        D.width,
                        D.height,
                        D.width / D.height
                      ]), CA = q[0], YA = q[1], zA = q[2], mA = q[3], SA = q[4], iA = B.ctx.createPattern(B.resizeImage(D, mA, SA), "repeat"), B.renderRepeat(CA, iA, YA, zA)), [3, 6];
                    case 5:
                      Xg(v) ? (N = xn(a, s, [null, null, null]), CA = N[0], YA = N[1], zA = N[2], mA = N[3], SA = N[4], X = Rg(v.angle, mA, SA), nA = X[0], $ = X[1], AA = X[2], BA = X[3], Y = X[4], tA = document.createElement("canvas"), tA.width = mA, tA.height = SA, V = tA.getContext("2d"), sA = V.createLinearGradient($, BA, AA, Y), Ds(v.stops, nA).forEach(function(tt) {
                        return sA.addColorStop(tt.stop, PA(tt.color));
                      }), V.fillStyle = sA, V.fillRect(0, 0, mA, SA), mA > 0 && SA > 0 && (iA = B.ctx.createPattern(tA, "repeat"), B.renderRepeat(CA, iA, YA, zA))) : Jg(v) && (uA = xn(a, s, [
                        null,
                        null,
                        null
                      ]), CA = uA[0], LA = uA[1], NA = uA[2], mA = uA[3], SA = uA[4], Qe = v.position.length === 0 ? [aa] : v.position, YA = FA(Qe[0], mA), zA = FA(Qe[Qe.length - 1], SA), fe = Pg(v, YA, zA, mA, SA), ie = fe[0], ne = fe[1], ie > 0 && ne > 0 && (Ie = B.ctx.createRadialGradient(LA + YA, NA + zA, 0, LA + YA, NA + zA, ie), Ds(v.stops, ie * 2).forEach(function(tt) {
                        return Ie.addColorStop(tt.stop, PA(tt.color));
                      }), B.path(CA), B.ctx.fillStyle = Ie, ie !== ne ? (ke = a.bounds.left + 0.5 * a.bounds.width, de = a.bounds.top + 0.5 * a.bounds.height, De = ne / ie, Ce = 1 / De, B.ctx.save(), B.ctx.translate(ke, de), B.ctx.transform(1, 0, 0, De, 0, 0), B.ctx.translate(-ke, -de), B.ctx.fillRect(LA, Ce * (NA - de) + de, mA, SA * Ce), B.ctx.restore()) : B.ctx.fill())), Ge.label = 6;
                    case 6:
                      return s--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, B = this, g = 0, w = a.styles.backgroundImage.slice(0).reverse(), E.label = 1;
            case 1:
              return g < w.length ? (C = w[g], [5, l(C)]) : [3, 4];
            case 2:
              E.sent(), E.label = 3;
            case 3:
              return g++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderSolidBorder = function(a, s, l) {
      return ee(this, void 0, void 0, function() {
        return ZA(this, function(B) {
          return this.path(ho(l, s)), this.ctx.fillStyle = PA(a), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.renderDoubleBorder = function(a, s, l, B) {
      return ee(this, void 0, void 0, function() {
        var g, w;
        return ZA(this, function(C) {
          switch (C.label) {
            case 0:
              return s < 3 ? [4, this.renderSolidBorder(a, l, B)] : [3, 2];
            case 1:
              return C.sent(), [
                2
                /*return*/
              ];
            case 2:
              return g = Wd(B, l), this.path(g), this.ctx.fillStyle = PA(a), this.ctx.fill(), w = Zd(B, l), this.path(w), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderNodeBackgroundAndBorders = function(a) {
      return ee(this, void 0, void 0, function() {
        var s, l, B, g, w, C, E, v, D = this;
        return ZA(this, function(R) {
          switch (R.label) {
            case 0:
              return this.applyEffects(a.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), s = a.container.styles, l = !At(s.backgroundColor) || s.backgroundImage.length, B = [
                { style: s.borderTopStyle, color: s.borderTopColor, width: s.borderTopWidth },
                { style: s.borderRightStyle, color: s.borderRightColor, width: s.borderRightWidth },
                { style: s.borderBottomStyle, color: s.borderBottomColor, width: s.borderBottomWidth },
                { style: s.borderLeftStyle, color: s.borderLeftColor, width: s.borderLeftWidth }
              ], g = oC(bt(s.backgroundClip, 0), a.curves), l || s.boxShadow.length ? (this.ctx.save(), this.path(g), this.ctx.clip(), At(s.backgroundColor) || (this.ctx.fillStyle = PA(s.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(a.container)]) : [3, 2];
            case 1:
              R.sent(), this.ctx.restore(), s.boxShadow.slice(0).reverse().forEach(function(q) {
                D.ctx.save();
                var N = _i(a.curves), X = q.inset ? 0 : nC, nA = zd(N, -X + (q.inset ? 1 : -1) * q.spread.number, (q.inset ? 1 : -1) * q.spread.number, q.spread.number * (q.inset ? -2 : 2), q.spread.number * (q.inset ? -2 : 2));
                q.inset ? (D.path(N), D.ctx.clip(), D.mask(nA)) : (D.mask(N), D.ctx.clip(), D.path(nA)), D.ctx.shadowOffsetX = q.offsetX.number + X, D.ctx.shadowOffsetY = q.offsetY.number, D.ctx.shadowColor = PA(q.color), D.ctx.shadowBlur = q.blur.number, D.ctx.fillStyle = q.inset ? PA(q.color) : "rgba(0,0,0,1)", D.ctx.fill(), D.ctx.restore();
              }), R.label = 2;
            case 2:
              w = 0, C = 0, E = B, R.label = 3;
            case 3:
              return C < E.length ? (v = E[C], v.style !== 0 && !At(v.color) && v.width > 0 ? v.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                v.color,
                v.width,
                w,
                a.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return R.sent(), [3, 11];
            case 5:
              return v.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                v.color,
                v.width,
                w,
                a.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return R.sent(), [3, 11];
            case 7:
              return v.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(v.color, v.width, w, a.curves)];
            case 8:
              return R.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(v.color, w, a.curves)];
            case 10:
              R.sent(), R.label = 11;
            case 11:
              w++, R.label = 12;
            case 12:
              return C++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.renderDashedDottedBorder = function(a, s, l, B, g) {
      return ee(this, void 0, void 0, function() {
        var w, C, E, v, D, R, q, N, X, nA, $, AA, BA, Y, tA, V, tA, V;
        return ZA(this, function(sA) {
          return this.ctx.save(), w = qd(B, l), C = ho(B, l), g === 2 && (this.path(C), this.ctx.clip()), Be(C[0]) ? (E = C[0].start.x, v = C[0].start.y) : (E = C[0].x, v = C[0].y), Be(C[1]) ? (D = C[1].end.x, R = C[1].end.y) : (D = C[1].x, R = C[1].y), l === 0 || l === 2 ? q = Math.abs(E - D) : q = Math.abs(v - R), this.ctx.beginPath(), g === 3 ? this.formatPath(w) : this.formatPath(C.slice(0, 2)), N = s < 3 ? s * 3 : s * 2, X = s < 3 ? s * 2 : s, g === 3 && (N = s, X = s), nA = !0, q <= N * 2 ? nA = !1 : q <= N * 2 + X ? ($ = q / (2 * N + X), N *= $, X *= $) : (AA = Math.floor((q + X) / (N + X)), BA = (q - AA * N) / (AA - 1), Y = (q - (AA + 1) * N) / AA, X = Y <= 0 || Math.abs(X - BA) < Math.abs(X - Y) ? BA : Y), nA && (g === 3 ? this.ctx.setLineDash([0, N + X]) : this.ctx.setLineDash([N, X])), g === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = s) : this.ctx.lineWidth = s * 2 + 1.1, this.ctx.strokeStyle = PA(a), this.ctx.stroke(), this.ctx.setLineDash([]), g === 2 && (Be(C[0]) && (tA = C[3], V = C[0], this.ctx.beginPath(), this.formatPath([new aA(tA.end.x, tA.end.y), new aA(V.start.x, V.start.y)]), this.ctx.stroke()), Be(C[1]) && (tA = C[1], V = C[2], this.ctx.beginPath(), this.formatPath([new aA(tA.end.x, tA.end.y), new aA(V.start.x, V.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.render = function(a) {
      return ee(this, void 0, void 0, function() {
        var s;
        return ZA(this, function(l) {
          switch (l.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = PA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), s = jd(a), [4, this.renderStack(s)];
            case 1:
              return l.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, r;
  }(yu)
), sC = function(n) {
  return n instanceof iu || n instanceof ru ? !0 : n instanceof la && n.type !== wi && n.type !== Ci;
}, oC = function(n, r) {
  switch (n) {
    case 0:
      return _i(r);
    case 2:
      return Nd(r);
    case 1:
    default:
      return Qi(r);
  }
}, uC = function(n) {
  switch (n) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, lC = ["-apple-system", "system-ui"], hC = function(n) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? n.filter(function(r) {
    return lC.indexOf(r) === -1;
  }) : n;
}, cC = (
  /** @class */
  function(n) {
    _e(r, n);
    function r(a, s) {
      var l = n.call(this, a, s) || this;
      return l.canvas = s.canvas ? s.canvas : document.createElement("canvas"), l.ctx = l.canvas.getContext("2d"), l.options = s, l.canvas.width = Math.floor(s.width * s.scale), l.canvas.height = Math.floor(s.height * s.scale), l.canvas.style.width = s.width + "px", l.canvas.style.height = s.height + "px", l.ctx.scale(l.options.scale, l.options.scale), l.ctx.translate(-s.x, -s.y), l.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + s.width + "x" + s.height + " at " + s.x + "," + s.y + ") with scale " + s.scale), l;
    }
    return r.prototype.render = function(a) {
      return ee(this, void 0, void 0, function() {
        var s, l;
        return ZA(this, function(B) {
          switch (B.label) {
            case 0:
              return s = Wn(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, a), [4, BC(s)];
            case 1:
              return l = B.sent(), this.options.backgroundColor && (this.ctx.fillStyle = PA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(l, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, r;
  }(yu)
), BC = function(n) {
  return new Promise(function(r, a) {
    var s = new Image();
    s.onload = function() {
      r(s);
    }, s.onerror = a, s.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(n));
  });
}, gC = (
  /** @class */
  function() {
    function n(r) {
      var a = r.id, s = r.enabled;
      this.id = a, this.enabled = s, this.start = Date.now();
    }
    return n.prototype.debug = function() {
      for (var r = [], a = 0; a < arguments.length; a++)
        r[a] = arguments[a];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Pr([this.id, this.getTime() + "ms"], r)) : this.info.apply(this, r));
    }, n.prototype.getTime = function() {
      return Date.now() - this.start;
    }, n.prototype.info = function() {
      for (var r = [], a = 0; a < arguments.length; a++)
        r[a] = arguments[a];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Pr([this.id, this.getTime() + "ms"], r));
    }, n.prototype.warn = function() {
      for (var r = [], a = 0; a < arguments.length; a++)
        r[a] = arguments[a];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Pr([this.id, this.getTime() + "ms"], r)) : this.info.apply(this, r));
    }, n.prototype.error = function() {
      for (var r = [], a = 0; a < arguments.length; a++)
        r[a] = arguments[a];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Pr([this.id, this.getTime() + "ms"], r)) : this.info.apply(this, r));
    }, n.instances = {}, n;
  }()
), pC = (
  /** @class */
  function() {
    function n(r, a) {
      var s;
      this.windowBounds = a, this.instanceName = "#" + n.instanceCount++, this.logger = new gC({ id: this.instanceName, enabled: r.logging }), this.cache = (s = r.cache) !== null && s !== void 0 ? s : new Hd(this, r);
    }
    return n.instanceCount = 1, n;
  }()
), fC = function(n, r) {
  return r === void 0 && (r = {}), dC(n, r);
};
typeof window < "u" && pu.setContext(window);
var dC = function(n, r) {
  return ee(void 0, void 0, void 0, function() {
    var a, s, l, B, g, w, C, E, v, D, R, q, N, X, nA, $, AA, BA, Y, tA, sA, V, sA, iA, uA, CA, LA, NA, mA, SA, Qe, YA, zA, fe, ie, ne, Ie, ke, de, De;
    return ZA(this, function(Ce) {
      switch (Ce.label) {
        case 0:
          if (!n || typeof n != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (a = n.ownerDocument, !a)
            throw new Error("Element is not attached to a Document");
          if (s = a.defaultView, !s)
            throw new Error("Document is not attached to a Window");
          return l = {
            allowTaint: (iA = r.allowTaint) !== null && iA !== void 0 ? iA : !1,
            imageTimeout: (uA = r.imageTimeout) !== null && uA !== void 0 ? uA : 15e3,
            proxy: r.proxy,
            useCORS: (CA = r.useCORS) !== null && CA !== void 0 ? CA : !1
          }, B = Hn({ logging: (LA = r.logging) !== null && LA !== void 0 ? LA : !0, cache: r.cache }, l), g = {
            windowWidth: (NA = r.windowWidth) !== null && NA !== void 0 ? NA : s.innerWidth,
            windowHeight: (mA = r.windowHeight) !== null && mA !== void 0 ? mA : s.innerHeight,
            scrollX: (SA = r.scrollX) !== null && SA !== void 0 ? SA : s.pageXOffset,
            scrollY: (Qe = r.scrollY) !== null && Qe !== void 0 ? Qe : s.pageYOffset
          }, w = new Pe(g.scrollX, g.scrollY, g.windowWidth, g.windowHeight), C = new pC(B, w), E = (YA = r.foreignObjectRendering) !== null && YA !== void 0 ? YA : !1, v = {
            allowTaint: (zA = r.allowTaint) !== null && zA !== void 0 ? zA : !1,
            onclone: r.onclone,
            ignoreElements: r.ignoreElements,
            inlineImages: E,
            copyStyles: E
          }, C.logger.debug("Starting document clone with size " + w.width + "x" + w.height + " scrolled to " + -w.left + "," + -w.top), D = new oo(C, n, v), R = D.clonedReferenceElement, R ? [4, D.toIFrame(a, w)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return q = Ce.sent(), N = ha(R) || Cd(R) ? Y0(R.ownerDocument) : Ei(C, R), X = N.width, nA = N.height, $ = N.left, AA = N.top, BA = CC(C, R, r.backgroundColor), Y = {
            canvas: r.canvas,
            backgroundColor: BA,
            scale: (ie = (fe = r.scale) !== null && fe !== void 0 ? fe : s.devicePixelRatio) !== null && ie !== void 0 ? ie : 1,
            x: ((ne = r.x) !== null && ne !== void 0 ? ne : 0) + $,
            y: ((Ie = r.y) !== null && Ie !== void 0 ? Ie : 0) + AA,
            width: (ke = r.width) !== null && ke !== void 0 ? ke : Math.ceil(X),
            height: (de = r.height) !== null && de !== void 0 ? de : Math.ceil(nA)
          }, E ? (C.logger.debug("Document cloned, using foreign object rendering"), sA = new cC(C, Y), [4, sA.render(R)]) : [3, 3];
        case 2:
          return tA = Ce.sent(), [3, 5];
        case 3:
          return C.logger.debug("Document cloned, element located at " + $ + "," + AA + " with size " + X + "x" + nA + " using computed rendering"), C.logger.debug("Starting DOM parsing"), V = su(C, R), BA === V.styles.backgroundColor && (V.styles.backgroundColor = Re.TRANSPARENT), C.logger.debug("Starting renderer for element at " + Y.x + "," + Y.y + " with size " + Y.width + "x" + Y.height), sA = new aC(C, Y), [4, sA.render(V)];
        case 4:
          tA = Ce.sent(), Ce.label = 5;
        case 5:
          return (!((De = r.removeContainer) !== null && De !== void 0) || De) && (oo.destroy(q) || C.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), C.logger.debug("Finished rendering"), [2, tA];
      }
    });
  });
}, CC = function(n, r, a) {
  var s = r.ownerDocument, l = s.documentElement ? rr(n, getComputedStyle(s.documentElement).backgroundColor) : Re.TRANSPARENT, B = s.body ? rr(n, getComputedStyle(s.body).backgroundColor) : Re.TRANSPARENT, g = typeof a == "string" ? rr(n, a) : a === null ? Re.TRANSPARENT : 4294967295;
  return r === s.documentElement ? At(l) ? At(B) ? g : B : l : g;
};
async function wC(n, r = "screenshot.png", a = {}) {
  try {
    const s = {
      useCORS: !0,
      allowTaint: !0,
      backgroundColor: "#ffffff",
      scale: 2,
      // 高清截图
      logging: !1,
      ...a
    }, l = await fC(n, s);
    return mC(l, r), !0;
  } catch (s) {
    return console.error("截图失败:", s), !1;
  }
}
function mC(n, r) {
  const a = document.createElement("a");
  a.download = r, a.href = n.toDataURL("image/png"), document.body.appendChild(a), a.click(), document.body.removeChild(a);
}
function yC(n = "screenshot") {
  const a = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:T]/g, "").slice(0, 14);
  return `${n}_${a}.png`;
}
const _C = /* @__PURE__ */ Br({
  __name: "index",
  setup(n) {
    const r = UA(null), a = UA(null), s = UA(null), l = UA(null), B = UA(!1), g = UA([]), w = UA(!0), C = (X) => {
      l.value = X, B.value = !0, l.value.setView([22.5, 113.5], 7), In(() => {
        E();
      });
    }, E = () => {
      g.value = [
        // 珠江口区域
        {
          id: "panel-1",
          title: "潮位站A",
          lat: 22.55,
          lng: 113.95,
          visible: !0,
          tableData: [
            ["站点名称", "潮位站A"],
            ["最高潮位", "2.85m"],
            ["警戒潮位", "2.50m"],
            ["风险等级", "中等"]
          ]
        },
        {
          id: "panel-2",
          title: "潮位站B",
          lat: 22.48,
          lng: 114.12,
          visible: !0,
          tableData: [
            ["站点名称", "潮位站B"],
            ["最高潮位", "3.12m"],
            ["警戒潮位", "2.80m"],
            ["风险等级", "高"]
          ]
        },
        {
          id: "panel-3",
          title: "海堤段1",
          lat: 22.62,
          lng: 114.25,
          visible: !0,
          tableData: [
            ["海堤名称", "海堤段1"],
            ["堤顶高程", "4.5m"],
            ["设计标准", "50年一遇"],
            ["漫堤风险", "低"]
          ]
        },
        {
          id: "panel-4",
          title: "海堤段2",
          lat: 22.35,
          lng: 113.88,
          visible: !0,
          tableData: [
            ["海堤名称", "海堤段2"],
            ["堤顶高程", "3.8m"],
            ["设计标准", "20年一遇"],
            ["漫堤风险", "高"]
          ]
        },
        {
          id: "panel-5",
          title: "监测点C",
          lat: 22.72,
          lng: 114.05,
          visible: !0,
          tableData: [
            ["监测点", "C"],
            ["当前水位", "1.25m"],
            ["警戒潮位", "1.80m"],
            ["24h变化", "+0.15m"]
          ]
        },
        {
          id: "panel-6",
          title: "风险区域1",
          lat: 22.42,
          lng: 114.35,
          visible: !0,
          tableData: [
            ["区域", "风险区域1"],
            ["面积", "2.5km²"],
            ["影响人口", "约1.2万"],
            ["风险等级", "中高"]
          ]
        },
        // 湛江区域
        {
          id: "panel-7",
          title: "湛江潮位站",
          lat: 21.27,
          lng: 110.4,
          visible: !0,
          tableData: [
            ["站点名称", "湛江站"],
            ["最高潮位", "2.95m"],
            ["警戒潮位", "2.60m"],
            ["风险等级", "中等"]
          ]
        },
        {
          id: "panel-8",
          title: "雷州海堤",
          lat: 20.92,
          lng: 110.08,
          visible: !0,
          tableData: [
            ["海堤名称", "雷州海堤"],
            ["堤顶高程", "4.2m"],
            ["设计标准", "30年一遇"],
            ["漫堤风险", "中"]
          ]
        },
        // 汕头区域
        {
          id: "panel-9",
          title: "汕头潮位站",
          lat: 23.35,
          lng: 116.68,
          visible: !0,
          tableData: [
            ["站点名称", "汕头站"],
            ["最高潮位", "2.68m"],
            ["警戒潮位", "2.30m"],
            ["风险等级", "中"]
          ]
        },
        {
          id: "panel-10",
          title: "潮阳海堤",
          lat: 23.28,
          lng: 116.58,
          visible: !0,
          tableData: [
            ["海堤名称", "潮阳海堤"],
            ["堤顶高程", "5.0m"],
            ["设计标准", "50年一遇"],
            ["漫堤风险", "低"]
          ]
        },
        // 阳江区域
        {
          id: "panel-11",
          title: "阳江潮位站",
          lat: 21.85,
          lng: 111.98,
          visible: !0,
          tableData: [
            ["站点名称", "阳江站"],
            ["最高潮位", "3.05m"],
            ["警戒潮位", "2.70m"],
            ["风险等级", "高"]
          ]
        },
        {
          id: "panel-12",
          title: "海陵岛海堤",
          lat: 21.65,
          lng: 111.92,
          visible: !0,
          tableData: [
            ["海堤名称", "海陵岛海堤"],
            ["堤顶高程", "4.8m"],
            ["设计标准", "100年一遇"],
            ["漫堤风险", "极低"]
          ]
        },
        // 珠海区域
        {
          id: "panel-13",
          title: "珠海潮位站",
          lat: 22.27,
          lng: 113.58,
          visible: !0,
          tableData: [
            ["站点名称", "珠海站"],
            ["最高潮位", "2.78m"],
            ["警戒潮位", "2.40m"],
            ["风险等级", "中"]
          ]
        },
        {
          id: "panel-14",
          title: "横琴海堤",
          lat: 22.12,
          lng: 113.52,
          visible: !0,
          tableData: [
            ["海堤名称", "横琴海堤"],
            ["堤顶高程", "5.5m"],
            ["设计标准", "200年一遇"],
            ["漫堤风险", "极低"]
          ]
        },
        // 惠州区域
        {
          id: "panel-15",
          title: "惠州潮位站",
          lat: 22.78,
          lng: 114.68,
          visible: !0,
          tableData: [
            ["站点名称", "惠州站"],
            ["最高潮位", "2.55m"],
            ["警戒潮位", "2.20m"],
            ["风险等级", "低"]
          ]
        },
        {
          id: "panel-16",
          title: "大亚湾海堤",
          lat: 22.72,
          lng: 114.52,
          visible: !0,
          tableData: [
            ["海堤名称", "大亚湾海堤"],
            ["堤顶高程", "4.6m"],
            ["设计标准", "50年一遇"],
            ["漫堤风险", "低"]
          ]
        },
        // 东江流域
        {
          id: "panel-17",
          title: "东江监测点",
          lat: 23.12,
          lng: 114.42,
          visible: !0,
          tableData: [
            ["监测点", "东江站"],
            ["当前水位", "8.5m"],
            ["警戒水位", "12.0m"],
            ["24h变化", "+0.32m"]
          ]
        },
        // 西江流域
        {
          id: "panel-18",
          title: "西江监测点",
          lat: 23.05,
          lng: 112.48,
          visible: !0,
          tableData: [
            ["监测点", "西江站"],
            ["当前水位", "6.8m"],
            ["警戒水位", "10.5m"],
            ["24h变化", "-0.18m"]
          ]
        }
      ];
    }, v = (X, nA) => {
      const $ = g.value.find((AA) => AA.id === X);
      $ && ($.position = nA);
    }, D = (X, nA) => {
      const $ = g.value.find((AA) => AA.id === X);
      $ && ($.visible = nA);
    }, R = (X) => {
      g.value.forEach((nA) => {
        nA.visible = X;
      });
    }, q = (X) => {
      w.value = X;
    }, N = async () => {
      var AA;
      const X = r.value;
      if (!X) return;
      const nA = (AA = s.value) == null ? void 0 : AA.$el;
      if (!nA) return;
      const $ = nA.style.display;
      nA.style.display = "none";
      try {
        const BA = yC("leader-line-map");
        await wC(X, BA, {
          ignoreElements: (Y) => Y.classList && Y.classList.contains("control-panel")
        }), Bs.success("截图已下载");
      } catch (BA) {
        console.error("截图失败:", BA), Bs.error("截图失败，请重试");
      } finally {
        nA.style.display = $;
      }
    };
    return (X, nA) => (MA(), DA("div", {
      class: "leader-line-page",
      ref_key: "pageContainer",
      ref: r
    }, [
      xt(d0, {
        ref_key: "baseMap",
        ref: a,
        onMapReady: C
      }, null, 512),
      B.value ? (MA(), po(T0, {
        key: 0,
        ref: "panelLayer",
        map: l.value,
        panels: g.value,
        autoLayout: w.value,
        onPanelMoved: v
      }, null, 8, ["map", "panels", "autoLayout"])) : sr("", !0),
      xt(J0, {
        ref_key: "controlPanel",
        ref: s,
        panels: g.value,
        autoLayout: w.value,
        onTogglePanel: D,
        onToggleAll: R,
        onAutoLayoutChange: q,
        onScreenshot: N
      }, null, 8, ["panels", "autoLayout"])
    ], 512));
  }
}), UC = /* @__PURE__ */ gr(_C, [["__scopeId", "data-v-b6c4a024"]]);
export {
  UC as default
};
