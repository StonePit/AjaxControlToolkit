(function(){function a(){var a=-2.1987072e12;Type._registerScript("Date.UmAlQuraCalendar.js",["MicrosoftAjaxGlobalization.js"]);__cultureInfo.dateTimeFormat.Calendar.convert={_yearInfo:[[746,a],[1769,-2.1681216e12],[3794,-2.1374496e12],[3748,-2.1067776e12],[3402,-2.076192e12],[2710,-2.0456064e12],[1334,-2.0150208e12],[2741,-1.9844352e12],[3498,-1.9537632e12],[2980,-1.9230912e12],[2889,-1.8925056e12],[2707,-1.86192e12],[1323,-1.8313344e12],[2647,-1.8007488e12],[1206,-1.7700768e12],[2741,-1.7394912e12],[1450,-1.7088192e12],[3413,-1.6782336e12],[3370,-1.6475616e12],[2646,-1.616976e12],[1198,-1.5863904e12],[2397,-1.5558048e12],[748,-1.5251328e12],[1749,-1.4945472e12],[1706,-1.4638752e12],[1365,-1.4332896e12],[1195,-1.402704e12],[2395,-1.3721184e12],[698,-1.3414464e12],[1397,-1.3108608e12],[2994,-1.2801888e12],[1892,-1.2495168e12],[1865,-1.2189312e12],[1621,-1.1883456e12],[683,-1.15776e12],[1371,-1.1271744e12],[2778,-1.0965024e12],[1748,-1.0658304e12],[3785,-1.0352448e12],[3474,-1.0045728e12],[3365,-9.739872e11],[2637,-9.434016e11],[685,-9.12816e11],[1389,-8.822304e11],[2922,-8.515584e11],[2898,-8.208864e11],[2725,-7.903008e11],[2635,-7.597152e11],[1175,-7.291296e11],[2359,-6.98544e11],[694,-6.67872e11],[1397,-6.372864e11],[3434,-6.066144e11],[3410,-5.759424e11],[2710,-5.453568e11],[2349,-5.147712e11],[605,-4.841856e11],[1245,-4.536e11],[2778,-4.22928e11],[1492,-3.92256e11],[3497,-3.616704e11],[3410,-3.309984e11],[2730,-3.004128e11],[1238,-2.698272e11],[2486,-2.392416e11],[884,-2.085696e11],[1897,-1.77984e11],[1874,-1.47312e11],[1701,-1.167264e11],[1355,-8.61408e10],[2731,-5.55552e10],[1370,-2.48832e10],[2773,5.7024e9],[3538,3.63744e10],[3492,6.70464e10],[3401,9.7632e10],[2709,1.282176e11],[1325,1.588032e11],[2653,1.893888e11],[1370,2.200608e11],[2773,2.506464e11],[1706,2.813184e11],[1685,3.11904e11],[1323,3.424896e11],[2647,3.730752e11],[1198,4.037472e11],[2422,4.343328e11],[1388,4.650048e11],[2901,4.955904e11],[2730,5.262624e11],[2645,5.56848e11],[1197,5.874336e11],[2397,6.180192e11],[730,6.486912e11],[1497,6.792768e11],[3506,7.099488e11],[2980,7.406208e11],[2890,7.712064e11],[2645,8.01792e11],[693,8.323776e11],[1397,8.629632e11],[2922,8.936352e11],[3026,9.243072e11],[3012,9.549792e11],[2953,9.855648e11],[2709,1.0161504e12],[1325,1.046736e12],[1453,1.0773216e12],[2922,1.1079936e12],[1748,1.1386656e12],[3529,1.1692512e12],[3474,1.1999232e12],[2726,1.2305088e12],[2390,1.2610944e12],[686,1.29168e12],[1389,1.3222656e12],[874,1.3529376e12],[2901,1.3835232e12],[2730,1.4141952e12],[2381,1.4447808e12],[1181,1.4753664e12],[2397,1.505952e12],[698,1.536624e12],[1461,1.5672096e12],[1450,1.5978816e12],[3413,1.6284672e12],[2714,1.6591392e12],[2350,1.6897248e12],[622,1.7203104e12],[1373,1.750896e12],[2778,1.781568e12],[1748,1.81224e12],[1701,1.8428256e12],[0,1.8734112e12]],minDate:a,maxDate:1873411199999,toGregorian:function(h,g,i){var d=i-1,c=h-1318;if(c<0||c>=this._yearInfo.length)return null;var e=this._yearInfo[c],a=new Date(e[1]),b=e[0];a.setMinutes(a.getMinutes()+a.getTimezoneOffset());for(var f=0;f<g;f++){d+=29+(b&1);b=b>>1}a.setDate(a.getDate()+d);return a},fromGregorian:function(h){var b=this,c=h-h.getTimezoneOffset()*6e4;if(c<b.minDate||c>b.maxDate)return null;var a=0,g=1;while(c>b._yearInfo[++a][1]);if(c!==b._yearInfo[a][1])a--;var i=b._yearInfo[a],f=Math.floor((c-i[1])/8.64e7),d=i[0];a+=1318;var e=29+(d&1);while(f>=e){f-=e;d=d>>1;e=29+(d&1);g++}return[a,g-1,f+1]}}}if(window.Sys&&Sys.loader)Sys.loader.registerScript("UmAlQuraCalendar",null,a);else a()})();