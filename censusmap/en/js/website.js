L.TopoJSON = L.GeoJSON.extend({  
  addData: function(jsonData) {    
    if (jsonData.type === "Topology") {
      for (key in jsonData.objects) {
        geojson = topojson.feature(jsonData, jsonData.objects[key]);
        L.GeoJSON.prototype.addData.call(this, geojson);
      }
    }    
    else {
      L.GeoJSON.prototype.addData.call(this, jsonData);
    }
  }  
});

var toggleCharts = function(chart, map, chartsContainer, click_icon){
	var chart = "#chart_" + chart.split('_')[1];
	var clicks = $(chart).data('clicks');
	if($(chart).is('.show-chart')){
	  	$('.chart').removeClass('show-chart');
	}
	else if(!$(chart).is('.show-chart')){
		$('.chart').removeClass('show-chart');
		$(chart).animate(300).toggleClass('show-chart');
	}
}

$(document).ready(function(){
	var $map = $('#map');
	var $chartsContainer = $('.charts_container');
	var $clickIcon = $('.click_icon');
	$clickIcon.on('click', function(){
		var chart = $(this).attr('id');
		toggleCharts(chart, $map, $chartsContainer);
	});
});

$(document).ready(function(){
    $(".accordion").accordion({
		heightStyle: "content",
		collapsible: true,
        navigation: true,
		animate: 300,
        autoHeight: false,
		}) 
     });

 $(function() {
    $( "#dialog" ).dialog({
    	width: 407,
    	modal: true
    });
  });

//HIGHCHART FUNCTION POP dev
$(function () {
    $('#chart_pop').highcharts({
        chart: {
            type: 'column',
            spacingBottom: 40,
		    spacingTop: 40,
		    spacingLeft: 40,
	        spacingRight: 40,
        },
        title: {
            text: 'Population Change'
        },
        subtitle: {
            text: '1956 － 2010'
        },
        credits: {
            	enabled: false
        	},
        exporting: {
        		enabled: false
        	},
        xAxis: {
            categories: [
                '1956',
                '1966',
                '1980',
                '1990',
                '2000',
                '2010'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Population'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'total population',
            data: [9390381, 12992763, 17866008, 20401305, 22276672, 23162123]

        }, {
            name: 'total men pop.',
            data: [4796195, 6684006	, 9320105, 10540635, 11392050, 11635225]

        }, {
            name: 'total women pop.',
            data: [4594186, 6308757, 8545903, 9860670, 10884622, 11526898]

        }]
    });
});
//HIGHCHART FUNCTION POP AGE SCRIPT 1956
$(function () {
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(document).ready(function () {
        $('#chart_1956').highcharts({
            chart: {
                type: 'bar',
                spacingBottom: 40,
		        spacingTop: 40,
		        spacingLeft: 40,
		        spacingRight: 40,
            },
            title: {
                text: 'Population Pyramid'
            },
            subtitle: {
            	text: '1956'
        	},
        	credits: {
            	enabled: false
        	},
        	exporting: {
        		enabled: false
        	},
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -1500000,
                max: 1500000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                name: 'men',
                data: [-930097, -708733, -478299, -487623, -336419, -362280, -325520, -281719, -251974, -205500, -153693, -109738, -71686, -47206, -45708, -0, -0, -0, -0, -0, -0]
            }, {
                name: 'women',
                data: [886484,	670598,	448470,	463230,	403966,	356909,	297371,	240970,	203159,	173283,	133860,	105011,	74621,	57448,	78806, 0, 0, 0, 0, 0, 0]
            }]
        });
    });
});
//HIGHCHART FUNCTION POP AGE SCRIPT 1966
$(function () {
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(document).ready(function () {
        $('#chart_1966').highcharts({
            chart: {
                type: 'bar',
                spacingBottom: 40,
		        spacingTop: 40,
		        spacingLeft: 40,
		        spacingRight: 40,
            },
            title: {
                text: 'Population Pyramid'
            },
            subtitle: {
            	text: '1966'
        	},
        	credits: {
            	enabled: false
        	},
        	exporting: {
        		enabled: false
        	},
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -1500000,
                max: 1500000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                name: 'men',
                data: [-1018498, -996308, -919856, -682964, -324702, -461254, -430342, -436479, -377743, -306094, -261970, -185797, -127501, -79309, -43250, -20839, -11100, -0, -0, -0, -0]
            }, {
                name: 'women',
                data: [959981, 943937, 872920,	671050,	446428,	458478,	399311,	354333,	293547,	234241,	195507,	161451,	119448,	86079, 54002, 32911, 25133, 0, 0, 0, 0]
            }]
        });
    });
});
//HIGHCHART FUNCTION POP AGE SCRIPT 1980
$(function () {
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(document).ready(function () {
        $('#chart_1980').highcharts({
            chart: {
                type: 'bar',
                spacingBottom: 40,
		        spacingTop: 40,
		        spacingLeft: 40,
		        spacingRight: 40,
            },
            title: {
                text: 'Population Pyramid'
            },
            subtitle: {
            	text: '1980'
        	},
        	credits: {
            	enabled: false
        	},
        	exporting: {
        		enabled: false
        	},
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -1500000,
                max: 1500000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                name: 'men',
                data: [-1031881, -935627, -989923, -1028905, -983464, -887073, -603824, -466043, -451844, -438471, -482632, -382148, -258184, -191160, -106484, -53474, -21252, -6289, -1427, -0, -0]
            }, {
                name: 'women',
                data: [965542,	882684,	933591,	978227,	938374,	847952,	570999,	441155,	434682,	379402,	328450,	263468,	195323,	160336,	111672,	65555,	32559,	11954,	3978, 0, 0]
            }]
        });
    });
});
//HIGHCHART FUNCTION POP AGE SCRIPT 1990
$(function () {
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(document).ready(function () {
        $('#chart_1990').highcharts({
            chart: {
                type: 'bar',
                spacingBottom: 40,
		        spacingTop: 40,
		        spacingLeft: 40,
		        spacingRight: 40,
            },
            title: {
                text: 'Population Pyramid'
            },
            subtitle: {
            	text: '1990'
        	},
        	credits: {
            	enabled: false
        	},
        	exporting: {
        		enabled: false
        	},
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -1500000,
                max: 1500000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                name: 'men',
                data: [-836309, -974530, -1038378, -919522, -974754, -1011861, -957301, -859616, -585909, -450964, -428066, -402381, -422559, -312353, -188119, -113229, -45807, -15456, -3521, -0, -0]
            }, {
                name: 'women',
                data: [776979, 918758, 980411, 876950, 927382, 962696, 914217, 825028, 559328, 436578, 423910, 362900, 305387, 234097, 158691, 109717,	57792, 22810, 7039, 0, 0]
            }]
        });
    });
});
//HIGHCHART FUNCTION POP AGE SCRIPT 2000
$(function () {
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(document).ready(function () {
        $('#chart_2000').highcharts({
            chart: {
                type: 'bar',
                spacingBottom: 40,
		        spacingTop: 40,
		        spacingLeft: 40,
		        spacingRight: 40,
            },
            title: {
                text: 'Population Pyramid'
            },
            subtitle: {
            	text: '2000'
        	},
        	credits: {
            	enabled: false
        	},
        	exporting: {
        		enabled: false
        	},
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -1500000,
                max: 1500000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                name: 'men',
                data: [-776698,	-841773, -831160, -964868, -1023835, -905239, -957030, -990211, -931580, -829386, -550932, -405574,	-372741, -333391,	-326658, -205981, -94920, -38710, -9168, -1807, -388]
            }, {
                name: 'women',
                data: [712544, 773385, 767533, 910495, 977952, 873639, 923495, 958242, 908597, 815063, 545257, 412352, 395783, 325651, 255964, 172188, 93801, 45555, 13791,	2757, 578]
            }]
        });
    });
});
//HIGHCHART FUNCTION POP AGE SCRIPT 2010
$(function () {
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(document).ready(function () {
        $('#chart_2010').highcharts({
            chart: {
                type: 'bar',
                spacingBottom: 40,
		        spacingTop: 40,
		        spacingLeft: 40,
		        spacingRight: 40,
            },
            title: {
                text: 'Population Pyramid'
            },
            subtitle: {
            	text: '2010'
        	},
        	credits: {
            	enabled: false
        	},
        	exporting: {
        		enabled: false
        	},
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -1500000,
                max: 1500000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                name: 'men',
                data: [-503400, -605233, -782666, -836734, -821067, -953304, -1012113, -889468,	-932140, -952466, -883709, -773674,	-500740, -351553,	-298770, -234614, -188509, -85006, -23822, -5201, -1036]
            }, {
                name: 'women',
                data: [460693, 553071, 719248, 771420, 765670, 933395, 1016997,	902236,	930305,	952402,	896683,	798855,	526541,	385297,	350116,	262595,	175596,	88264, 29574, 6865, 1075]
            }]
        });
    });
});
//HIGHCHART FUNCTION PIE CHART 1956
$(function () {
	$(document).ready(function () {
		$('#chart_pie').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				spacingBottom: 40,
				spacingTop: 40,
				spacingLeft: 40,
				spacingRight: 40
			},
			title: {
				text: 'Ethnic Minorities'
			},
			subtitle: {
				text: '1956'
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false
					},
					showInLegend: true
				}
			},
			series: [{
				type: 'pie',
				name: '%',
				data: [
				['Amis', 0.786],
                ['Atayal', 0.487],
                ['Paiwan', 0.426],
                ['Bunun', 0.197],
                ['Puyuma', 0.067],
                ['Rukai', 0.033],
                ['Tsou', 0.030],
                ['Saisiyat', 0.024],
                ['Yami', 0.019],
				]
			}]
		});
	});
});
//HIGHCHART FUNCTION PIE CHART 1956
$(function () {
    $(document).ready(function () {
        $('#chart_pie2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                spacingBottom: 40,
		        spacingTop: 40,
		        spacingLeft: 40,
		        spacingRight: 40,
            },
            title: {
                text: 'Ethnic Minorities'
            },
            subtitle: {
            	text: '2000'
        	},
            credits: {
            	enabled: false
        	},
        	exporting: {
        		enabled: false
        	},
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: '%',
                data: [
                    ['Amis', 0.666],
                    ['Atayal', 0.411],
                    ['Paiwan', 0.314],
                    ['Bunun', 0.183],
                    ['Puyuma', 0.0429],
                    ['Rukai', 0.0541],
                    ['Caozu', 0.0276],
                    ['Saisiyat', 0.0237],
                    ['Yami', 0.0173],
                ]
            }]
        });
    });
});
 //HIGHCHART MARRIAGE 1956 - 2000
$(function () {
 	$('#chart_marriage').highcharts({
 		chart: {
 			spacingBottom: 40,
 			spacingTop: 40,
 			spacingLeft: 40,
 			spacingRight: 40,
 		},
 		credits: {
 			enabled: false
 		},
 		exporting: {
 			enabled: false
 		},
 		title: {
 			text: 'Changes in marrital status'
 		},
 		xAxis: {
            categories: ['1956', '1966', '1980', '1990', '2000', '2010'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
 		yAxis: {
 			title: {
 				text: '%'
 			},
 			min: 0
 		},
 		tooltip: {
 			pointFormat: '{point.y:.2f}％'
 		},

 		plotOptions: {
 			spline: {
 				marker: {
 					enabled: true
 				}
 			}
 		},
 		series: [{
 			name: 'Marital status: widowed',
 			data: [
 			[11.5],
 			[9.3],
 			[7.4],
 			[7.4],
 			[7.9],
 			[null]
 			]
 		}, {
 			name: 'Marital status: divorced',
 			data: [
 			[1.4],
 			[2.4],
 			[2.1],
 			[3.0],
 			[4.4],
 			[null]
 			]
 		}]
 	});
});
//HIGHCHART EDUCATION 1956 - 2000
$(function () {
	$('#chart_education').highcharts({
		chart: {
			spacingBottom: 40,
			spacingTop: 40,
			spacingLeft: 40,
			spacingRight: 40,
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		title: {
			text: 'Changes in education attainment'
		},
		xAxis: {
            categories: ['1956', '1966', '1980', '1990', '2000', '2010'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
		yAxis: {
			title: {
				text: '%'
			},
			min: 0
		},
		tooltip: {
			pointFormat: '{point.y:.2f}％'
		},

		plotOptions: {
			spline: {
				marker: {
					enabled: true
				}
			}
		},
		series: [{
			name: 'Illiteracy rate',
			data: [
			[43],
			[24.7],
			[12.6],
			[8.5],
			[3.8],
			[null]
			]
		}, {
			name: 'primary education',
			data: [
			[41.7],
			[48.3],
			[52.1],
			[40.0],
			[30.8],
			[null]
			]
		}, {
			name: 'junior high school education',
			data: [
			[9.0],
			[14.0],
			[24.2],
			[24.7],
			[20.8],
			[null]
			]
		}, {
			name: 'high school education',
			data: [
			[6.2],
			[9.2],
			[24.8],
			[32.8],
			[35.5],
			[null]
			]
		}, {
			name: 'college and above',
			data: [
			[3.1],
			[3.8],
			[11.9],
			[18.0],
			[26.8],
			[null]
			]
		}]
	});
});
//HIGHCHART CLICK EMPLOYEMENT
$(function () {
	$('#chart_employement').highcharts({
		chart: {
			spacingBottom: 40,
			spacingTop: 40,
			spacingLeft: 40,
			spacingRight: 40,
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		title: {
			text: 'Changes in employement rate'
		},
		xAxis: {
            categories: ['1956', '1966', '1980', '1990', '2000'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
		yAxis: {
			title: {
				text: '%'
			},
			min: 0
		},
		tooltip: {
			pointFormat: '{point.y:.2f}％'
		},

		plotOptions: {
			spline: {
				marker: {
					enabled: true
				}
			}
		},
		series: [{
			name: 'Total employement rate',
			data: [
			[51.5],
			[53.8],
			[52.1],
			[52.3],
			[null]		
			]
		}, {
			name: 'Men employement rate',
			data: [
			[81.9],
			[75.0],
			[72.3],
			[68.7],
			[null]		
			]
		}, {
			name: 'Women employement rate',
			data: [
			[20.3],
			[24.9],
			[29.8],
			[34.5],
			[null]		
			]
		}]
	});
});
//HIGHCHART CLICK OCCUPATION
$(function () {
	$('#chart_occupation').highcharts({
		chart: {
			spacingBottom: 40,
			spacingTop: 40,
			spacingLeft: 40,
			spacingRight: 40,
		},
		credits: {
			enabled: false
		},
		exporting: {
			enabled: false
		},
		title: {
			text: 'Changes in occupation'
		},
		xAxis: {
            categories: ['1966', '1980', '1990'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
		yAxis: {
			title: {
				text: '%'
			},
			min: 0
		},
		tooltip: {
			pointFormat: '{point.y:.2f}％'
		},

		plotOptions: {
			spline: {
				marker: {
					enabled: true
				}
			}
		},
		series: [{
			name: 'Professional tech.',
			data: [
			[4.39],
			[4.89],
			[6.11]	
			]
		}, {
			name: 'Gov. and Senior Officials',
			data: [
			[1.32],
			[0.92],
			[0.69]	
			]
		}, {
			name: 'Clerical Support Workers',
			data: [
			[5.31],
			[8.87],
			[11.14]	
			]
		}, {
			name: 'Sales and Business',
			data: [
			[6.24],
			[7.79],
			[9.52]	
			]
		}, {
			name: 'Service Workers',
			data: [
			[10.31],
			[5.53],
			[7.16]	
			]
		}, {
			name: 'Agricultural Workers',
			data: [
			[49.48],
			[34.94],
			[34.28]	
			]
		}, {
			name: 'Operators and Laborers',
			data: [
			[22.82],
			[32.02],
			[31.06]	
			]
		}]
	});
});

var aerial = new L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '<a href="mailto:levi.westerveld@gmail.com">Levi Westerveld</a> - <a href="http://140.112.64.66/website/wenlab/">NTU Lab for Geospatial Computational Science</a> - <a href="http://www.geog.ntu.edu.tw/tw/">NTU Geography Department</a> - <a href="http://www.psc.ntu.edu.tw/">NTU Population and Gender Studies Center</a>',
    maxZoom: 11,
    minZoom: 6
}); 
var aerial2 = new L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '<a href="mailto:levi.westerveld@gmail.com">Levi Westerveld</a> - <a href="http://140.112.64.66/website/wenlab/">NTU Lab for Geospatial Computational Science</a> - <a href="http://www.geog.ntu.edu.tw/tw/">NTU Geography Department</a> - <a href="http://www.psc.ntu.edu.tw/">NTU Population and Gender Studies Center</a>',
    maxZoom: 11,
    minZoom: 6
}); 

//STYLE for TOWNS admin boundaries
function townStyle(feature) {
	if (feature.properties.change == 1)
		return {
			"fillColor": "black",
			"fillOpacity": 0.3,
			"weight": 1,
			"color": "blue"
		};
		else if (feature.properties.change == 2)
			return {
				"fillColor": "black",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "blue"
			};
			else if (feature.properties.change == 0)
				return {
					"fillColor": "gold",
					"fillOpacity": 0,
					"weight": 0.5,
					"color": "red"
				};
			}
//STYLE for POPULATION DENSITY 
function popStyle(feature) {
	if (feature.properties.pop_den <= 50)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.pop_den >= 50 && feature.properties.pop_den < 500)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.pop_den >= 500 && feature.properties.pop_den < 1000)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.pop_den >= 1000 && feature.properties.pop_den < 5000)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.pop_den >= 5000 && feature.properties.pop_den < 10000)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.pop_den >= 10000)
							return {
								"fillColor": "#bd0026",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
						}
//STYLE for MINORITIES TOTAL
function totalStyle(feature) {
	if (feature.properties.total <= 10)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.total >= 10 && feature.properties.total < 20)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.total >= 20 && feature.properties.total < 40)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.total >= 40 && feature.properties.total < 60)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.total >= 60 && feature.properties.total < 80)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.total >= 80)
							return {
								"fillColor": "#bd0026",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							}
//STYLE for ATAYAL
function atayalStyle(feature) {
	if (feature.properties.atyal <= 0.5)
		return {
			"fillColor": "#ff0000",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.atayal >= 0.5 && feature.properties.atayal < 10)
			return {
				"fillColor": "#ff0000",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.atayal >= 10 && feature.properties.atayal < 20)
				return {
					"fillColor": "#ff0000",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.atayal >= 20 && feature.properties.atayal < 30)
					return {
						"fillColor": "#ff0000",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.atayal >= 30 && feature.properties.atayal < 40)
						return {
							"fillColor": "#ff0000",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.atayal >= 40 && feature.properties.atayal < 50)
							return {
								"fillColor": "#ff0000",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.atayal >= 50 && feature.properties.atayal < 60)
								return {
									"fillColor": "#ff0000",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.atayal >= 60 && feature.properties.atayal < 70)
									return {
										"fillColor": "#ff0000",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.atayal >= 70 && feature.properties.atayal < 80)
										return {
											"fillColor": "#ff0000",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.atayal >= 80 && feature.properties.atayal < 90)
											return {
												"fillColor": "#ff0000",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.atayal >= 90)
												return {
													"fillColor": "#ff0000",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for BUNUN
function bununStyle(feature) {
	if (feature.properties.bunun <= 0.5)
		return {
			"fillColor": "#ffaa00",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.bunun >= 0.5 && feature.properties.bunun < 10)
			return {
				"fillColor": "#ffaa00",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.bunun >= 10 && feature.properties.bunun < 20)
				return {
					"fillColor": "#ffaa00",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.bunun >= 20 && feature.properties.bunun < 30)
					return {
						"fillColor": "#ffaa00",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.bunun >= 30 && feature.properties.bunun < 40)
						return {
							"fillColor": "#ffaa00",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.bunun >= 40 && feature.properties.bunun < 50)
							return {
								"fillColor": "#ffaa00",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.bunun >= 50 && feature.properties.bunun < 60)
								return {
									"fillColor": "#ffaa00",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.bunun >= 60 && feature.properties.bunun < 70)
									return {
										"fillColor": "#ffaa00",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.bunun >= 70 && feature.properties.bunun < 80)
										return {
											"fillColor": "#ffaa00",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.bunun >= 80 && feature.properties.bunun < 90)
											return {
												"fillColor": "#ffaa00",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.bunun >= 90)
												return {
													"fillColor": "#ffaa00",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for SAISIYAT
function saisiyatStyle(feature) {
	if (feature.properties.saisiyat <= 0.5)
		return {
			"fillColor": "#64664d",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.saisiyat >= 0.5 && feature.properties.saisiyat < 10)
			return {
				"fillColor": "#64664d",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.saisiyat >= 10 && feature.properties.saisiyat < 20)
				return {
					"fillColor": "#64664d",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.saisiyat >= 20 && feature.properties.saisiyat < 30)
					return {
						"fillColor": "#64664d",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.saisiyat >= 30 && feature.properties.saisiyat < 40)
						return {
							"fillColor": "#64664d",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.saisiyat >= 40 && feature.properties.saisiyat < 50)
							return {
								"fillColor": "#64664d",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.saisiyat >= 50 && feature.properties.saisiyat < 60)
								return {
									"fillColor": "#64664d",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.saisiyat >= 60 && feature.properties.saisiyat < 70)
									return {
										"fillColor": "#64664d",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.saisiyat >= 70 && feature.properties.saisiyat < 80)
										return {
											"fillColor": "#64664d",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.saisiyat >= 80 && feature.properties.saisiyat < 90)
											return {
												"fillColor": "#64664d",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.saisiyat >= 90)
												return {
													"fillColor": "#64664d",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for TSOU
function tsouStyle(feature) {
	if (feature.properties.tsou<= 0.5)
		return {
			"fillColor": "#4d003d",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.tsou >= 0.5 && feature.properties.tsou < 10)
			return {
				"fillColor": "#4d003d",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.tsou >= 10 && feature.properties.tsou < 20)
				return {
					"fillColor": "#4d003d",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.tsou >= 20 && feature.properties.tsou < 30)
					return {
						"fillColor": "#4d003d",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.tsou >= 30 && feature.properties.tsou < 40)
						return {
							"fillColor": "#4d003d",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.tsou >= 40 && feature.properties.tsou < 50)
							return {
								"fillColor": "#4d003d",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.tsou >= 50 && feature.properties.tsou < 60)
								return {
									"fillColor": "#4d003d",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.tsou >= 60 && feature.properties.tsou < 70)
									return {
										"fillColor": "#4d003d",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.tsou >= 70 && feature.properties.tsou < 80)
										return {
											"fillColor": "#4d003d",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.tsou >= 80 && feature.properties.tsou < 90)
											return {
												"fillColor": "#4d003d",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.tsou >= 90)
												return {
													"fillColor": "#4d003d",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for PAIWAN
function paiwanStyle(feature) {
	if (feature.properties.paiwan <= 0.5)
		return {
			"fillColor": "#00ff88",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.paiwan >= 0.5 && feature.properties.paiwan < 10)
			return {
				"fillColor": "#00ff88",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.paiwan >= 10 && feature.properties.paiwan < 20)
				return {
					"fillColor": "#00ff88",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.paiwan >= 20 && feature.properties.paiwan < 30)
					return {
						"fillColor": "#00ff88",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.paiwan >= 30 && feature.properties.paiwan < 40)
						return {
							"fillColor": "#00ff88",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.paiwan >= 40 && feature.properties.paiwan < 50)
							return {
								"fillColor": "#00ff88",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.paiwan >= 50 && feature.properties.paiwan < 60)
								return {
									"fillColor": "#00ff88",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.paiwan >= 60 && feature.properties.paiwan < 70)
									return {
										"fillColor": "#00ff88",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.paiwan >= 70 && feature.properties.paiwan < 80)
										return {
											"fillColor": "#00ff88",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.paiwan >= 80 && feature.properties.paiwan < 90)
											return {
												"fillColor": "#00ff88",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.paiwan >= 90)
												return {
													"fillColor": "#00ff88",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for RUKAI
function rukaiStyle(feature) {
	if (feature.properties.rukai <= 0.5)
		return {
			"fillColor": "#00ccff",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.rukai >= 0.5 && feature.properties.rukai < 10)
			return {
				"fillColor": "#00ccff",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.rukai >= 10 && feature.properties.rukai < 20)
				return {
					"fillColor": "#00ccff",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.rukai >= 20 && feature.properties.rukai < 30)
					return {
						"fillColor": "#00ccff",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.rukai >= 30 && feature.properties.rukai < 40)
						return {
							"fillColor": "#00ccff",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.rukai >= 40 && feature.properties.rukai < 50)
							return {
								"fillColor": "#00ccff",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.rukai >= 50 && feature.properties.rukai < 60)
								return {
									"fillColor": "#00ccff",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.rukai >= 60 && feature.properties.rukai < 70)
									return {
										"fillColor": "#00ccff",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.rukai >= 70 && feature.properties.rukai < 80)
										return {
											"fillColor": "#00ccff",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.rukai >= 80 && feature.properties.rukai< 90)
											return {
												"fillColor": "#00ccff",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.rukai >= 90)
												return {
													"fillColor": "#00ccff",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for YAMI
function yamiStyle(feature) {
	if (feature.properties.yami <= 0.5)
		return {
			"fillColor": "#ff0066",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.yami >= 0.5 && feature.properties.yami < 10)
			return {
				"fillColor": "#ff0066",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.yami >= 10 && feature.properties.yami < 20)
				return {
					"fillColor": "#ff0066",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.yami >= 20 && feature.properties.yami < 30)
					return {
						"fillColor": "#ff0066",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.yami >= 30 && feature.properties.yami < 40)
						return {
							"fillColor": "#ff0066",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.yami >= 40 && feature.properties.yami < 50)
							return {
								"fillColor": "#ff0066",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.yami >= 50 && feature.properties.yami < 60)
								return {
									"fillColor": "#ff0066",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.yami>= 60 && feature.properties.yami < 70)
									return {
										"fillColor": "#ff0066",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.yami >= 70 && feature.properties.yami < 80)
										return {
											"fillColor": "#ff0066",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.yami >= 80 && feature.properties.yami < 90)
											return {
												"fillColor": "#ff0066",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.yami >= 90)
												return {
													"fillColor": "#ff0066",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for AMIS
function amisStyle(feature) {
	if (feature.properties.amis <= 0.5)
		return {
			"fillColor": "#0066ff",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.amis >= 0.5 && feature.properties.amis < 10)
			return {
				"fillColor": "#0066ff",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.amis >= 10 && feature.properties.amis < 20)
				return {
					"fillColor": "#0066ff",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.amis >= 20 && feature.properties.amis < 30)
					return {
						"fillColor": "#0066ff",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.amis >= 30 && feature.properties.amis < 40)
						return {
							"fillColor": "#0066ff",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.amis >= 40 && feature.properties.amis < 50)
							return {
								"fillColor": "#0066ff",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.amis >= 50 && feature.properties.amis < 60)
								return {
									"fillColor": "#0066ff",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.amis >= 60 && feature.properties.amis < 70)
									return {
										"fillColor": "#0066ff",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.amis >= 70 && feature.properties.amis < 80)
										return {
											"fillColor": "#0066ff",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.amis >= 80 && feature.properties.amis < 90)
											return {
												"fillColor": "#0066ff",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.amis >= 90)
												return {
													"fillColor": "#0066ff",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for PUYUMA
function puyumaStyle(feature) {
	if (feature.properties.puyuma <= 0.5)
		return {
			"fillColor": "#ee00ff",
			"fillOpacity": 0.2,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.puyuma >= 0.5 && feature.properties.puyuma < 10)
			return {
				"fillColor": "#ee00ff",
				"fillOpacity": 0.25,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.puyuma >= 10 && feature.properties.puyuma < 20)
				return {
					"fillColor": "#ee00ff",
					"fillOpacity": 0.3,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.puyuma >= 20 && feature.properties.puyuma < 30)
					return {
						"fillColor": "#ee00ff",
						"fillOpacity": 0.35,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.puyuma >= 30 && feature.properties.puyuma < 40)
						return {
							"fillColor": "#ee00ff",
							"fillOpacity": 0.4,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.puyuma >= 40 && feature.properties.puyuma < 50)
							return {
								"fillColor": "#ee00ff",
								"fillOpacity": 0.45,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.puyuma >= 50 && feature.properties.puyuma < 60)
								return {
									"fillColor": "#ee00ff",
									"fillOpacity": 0.5,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.puyuma >= 60 && feature.properties.puyuma < 70)
									return {
										"fillColor": "#ee00ff",
										"fillOpacity": 0.55,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.puyuma >= 70 && feature.properties.puyuma < 80)
										return {
											"fillColor": "#ee00ff",
											"fillOpacity": 0.6,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.puyuma >= 80 && feature.properties.puyuma < 90)
											return {
												"fillColor": "#ee00ff",
												"fillOpacity": 0.65,
												"weight": 1,
												"color": "black"
											};
											else if (feature.properties.puyuma >= 90)
												return {
													"fillColor": "#ee00ff",
													"fillOpacity": 0.7,
													"weight": 1,
													"color": "black"
												};
											}
//STYLE for POPULATION AGE young
function youngStyle(feature) {
	if (feature.properties.young <= 0.1)
		return {
			"fillColor": "#ffffcc",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.young >= 0.1 && feature.properties.young < 0.2)
			return {
				"fillColor": "#ffeda0",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.young >= 0.2 && feature.properties.young < 0.25)
				return {
					"fillColor": "#fed976",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.young >= 0.25 && feature.properties.young < 0.3)
					return {
						"fillColor": "#feb24c",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.young >= 0.3 && feature.properties.young < 0.35)
						return {
							"fillColor": "#fd8d3c",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.young >= 0.35 && feature.properties.young < 0.40)
							return {
								"fillColor": "#fc4e2a",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.young >= 0.40 && feature.properties.young < 0.45)
								return {
									"fillColor": "#e31a1c",
									"fillOpacity": 0.7,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.young >= 0.45 && feature.properties.young < 0.5)
									return {
										"fillColor": "#bd0026",
										"fillOpacity": 0.7,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.young >= 0.5)
										return {
											"fillColor": "#800026",
											"fillOpacity": 0.7,
											"weight": 1,
											"color": "black"
										};
									}
//STYLE for POPULATION AGE adult
function adultStyle(feature) {
	if (feature.properties.adult <= 0.5)
		return {
			"fillColor": "#ffffcc",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.adult >= 0.5 && feature.properties.adult < 0.55)
			return {
				"fillColor": "#ffeda0",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.adult >= 0.55 && feature.properties.adult < 0.60)
				return {
					"fillColor": "#fed976",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.adult >= 0.60 && feature.properties.adult < 0.65)
					return {
						"fillColor": "#feb24c",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.adult >= 0.65 && feature.properties.adult < 0.70)
						return {
							"fillColor": "#fd8d3c",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.adult >= 0.7 && feature.properties.adult < 0.75)
							return {
								"fillColor": "#fc4e2a",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.adult >= 0.75 && feature.properties.adult < 0.8)
								return {
									"fillColor": "#e31a1c",
									"fillOpacity": 0.7,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.adult >= 0.8)
									return {
										"fillColor": "#b10026",
										"fillOpacity": 0.7,
										"weight": 1,
										"color": "black"
									};
									}
//STYLE for POPULATION AGE old
function oldStyle(feature) {
	if (feature.properties.old <= 0.03)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.old >= 0.03 && feature.properties.old < 0.07)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.old >= 0.07 && feature.properties.old < 0.14)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.old >= 0.14 && feature.properties.old < 0.20)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.old >= 0.20 && feature.properties.old < 0.25)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.old >= 0.25)
							return {
								"fillColor": "#bd0026",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							}
//STYLE for WORKING POPULATION 
function workStyle(feature) {
	if (feature.properties.work <= 0.4)
		return {
			"fillColor": "#ffffcc",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.work >= 0.4 && feature.properties.work < 0.5)
			return {
				"fillColor": "#ffeda0",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.work >= 0.5 && feature.properties.work < 0.6)
				return {
					"fillColor": "#fed976",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.work >= 0.6 && feature.properties.work < 0.7)
					return {
						"fillColor": "#feb24c",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.work >= 0.7 && feature.properties.work < 0.8)
						return {
							"fillColor": "#fd8d3c",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.work >= 0.8 && feature.properties.work < 0.9)
							return {
								"fillColor": "#fc4e2a",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.work >= 0.9 && feature.properties.work < 1)
								return {
									"fillColor": "#e31a1c",
									"fillOpacity": 0.7,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.work >= 1)
									return {
										"fillColor": "#b10026",
										"fillOpacity": 0.7,
										"weight": 1,
										"color": "black"
									};
									}
//STYLE for REPRODUCTIVE WOMEN RATIO
function womenStyle(feature) {
	if (feature.properties.women <= 0.4)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.women >= 0.4 && feature.properties.women < 0.45)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.women >= 0.45 && feature.properties.women < 0.50)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.women >= 0.50 && feature.properties.women < 0.55)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.women >= 0.55 && feature.properties.women < 0.60)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.women >= 0.60)
							return {
								"fillColor": "#bd0026",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							}
//STYLE for RATIO
function ratioStyle(feature) {
	if (feature.properties.ratio <= 90)
		return {
			"fillColor": "#762a83",
			"fillOpacity": 0.8,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.ratio >= 90 && feature.properties.ratio < 95)
			return {
				"fillColor": "#9970ab",
				"fillOpacity": 0.7,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.ratio >= 95 && feature.properties.ratio < 97.5)
				return {
					"fillColor": "#c2a5cf",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.ratio >= 97.5 && feature.properties.ratio < 100)
					return {
						"fillColor": "#e7d4e8",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.ratio >= 100 && feature.properties.ratio < 102.5)
						return {
							"fillColor": "#d9f0d3",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.ratio >= 102.5 && feature.properties.ratio < 105)
							return {
								"fillColor": "#a6dba0",
								"fillOpacity": 0.6,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.ratio >= 105 && feature.properties.ratio < 110)
								return {
									"fillColor": "#5aae61",
									"fillOpacity": 0.7,
									"weight": 1,
									"color": "black"
								};
									else if (feature.properties.ratio>= 110)
										return {
											"fillColor": "#1b7837",
											"fillOpacity": 0.8,
											"weight": 1,
											"color": "black"
										};
									}
//STYLE for UNMARRIED
function unmarriedStyle(feature) {
	if (feature.properties.unmarried <= 100)
		return {
			"fillColor": "#e7d4e8",
			"fillOpacity": 0.8,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.unmarried >= 100 && feature.properties.unmarried < 110)
			return {
				"fillColor": "#edf8fb",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.unmarried >= 110 && feature.properties.unmarried < 120)
				return {
					"fillColor": "#bfd3e6",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.unmarried >= 120 && feature.properties.unmarried < 130)
					return {
						"fillColor": "#9ebcda",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.unmarried >= 130 && feature.properties.unmarried < 140)
						return {
							"fillColor": "#8c96c6",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.unmarried >= 140 && feature.properties.unmarried < 150)
							return {
								"fillColor": "#8c6bb1",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.unmarried >= 150 && feature.properties.unmarried < 200)
								return {
									"fillColor": "#88419d",
									"fillOpacity": 0.7,
									"weight": 1,
									"color": "black"
								};
									else if (feature.properties.unmarried >= 200)
										return {
											"fillColor": "#6e016b",
											"fillOpacity": 0.7,
											"weight": 1,
											"color": "black"
										};
									}
//STYLE for WIDOW
function widowStyle(feature) {
	if (feature.properties.widow <= 5)
		return {
			"fillColor": "#f1eef6",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.widow >= 5 && feature.properties.widow < 10)
			return {
				"fillColor": "#bdc9e1",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.widow >= 10 && feature.properties.widow < 15)
				return {
					"fillColor": "#74a9cf",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.widow >= 15 && feature.properties.widow < 20)
					return {
						"fillColor": "#2b8cbe",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.widow >= 20)
						return {
							"fillColor": "#045a8d",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
					}
//STYLE for DIVORCE
function divorcedStyle(feature) {
	if (feature.properties.divorced <= 2.5)
		return {
			"fillColor": "#f1eef6",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.divorced >= 2.5 && feature.properties.divorced < 5.0)
			return {
				"fillColor": "#bdc9e1",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.divorced >= 5.0 && feature.properties.divorced < 10.0)
				return {
					"fillColor": "#74a9cf",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.divorced >= 10.0)
					return {
						"fillColor": "#0570b0",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
				}
//STYLE for ILLITERATE
function illiterateStyle(feature) {
	if (feature.properties.illiterate <= 5)
		return {
			"fillColor": "#ffffd4",
			"fillOpacity": 0.8,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.illiterate >= 5 && feature.properties.illiterate < 10)
			return {
				"fillColor": "#fee391",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.illiterate >= 10 && feature.properties.illiterate < 20)
				return {
					"fillColor": "#fec44f",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.illiterate >= 20 && feature.properties.illiterate < 30)
					return {
						"fillColor": "#fe9929",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.illiterate >= 30 && feature.properties.illiterate < 50)
						return {
							"fillColor": "#ec7014",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.illiterate >= 50 && feature.properties.illiterate < 70)
							return {
								"fillColor": "#cc4c02",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
									else if (feature.properties.illiterate >= 70)
										return {
											"fillColor": "#8c2d04",
											"fillOpacity": 0.7,
											"weight": 1,
											"color": "black"
										};
									}
//STYLE for XIAO
function xiaoStyle(feature) {
	if (feature.properties.xiao <= 5)
		return {
			"fillColor": "#ffffd4",
			"fillOpacity": 0.8,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.xiao >= 5 && feature.properties.xiao < 10)
			return {
				"fillColor": "#fee391",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.xiao >= 10 && feature.properties.xiao < 20)
				return {
					"fillColor": "#fec44f",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.xiao >= 20 && feature.properties.xiao < 30)
					return {
						"fillColor": "#fe9929",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.xiao >= 30 && feature.properties.xiao < 50)
						return {
							"fillColor": "#ec7014",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.xiao >= 50 && feature.properties.xiao < 70)
							return {
								"fillColor": "#cc4c02",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
									else if (feature.properties.xiao >= 70)
										return {
											"fillColor": "#8c2d04",
											"fillOpacity": 0.7,
											"weight": 1,
											"color": "black"
										};
									}
//STYLE for CHU
function chuStyle(feature) {
	if (feature.properties.chu <= 5)
		return {
			"fillColor": "#ffffd4",
			"fillOpacity": 0.8,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.chu >= 5 && feature.properties.chu < 10)
			return {
				"fillColor": "#fee391",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.chu >= 10 && feature.properties.chu < 15)
				return {
					"fillColor": "#fec44f",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.chu >= 15 && feature.properties.chu < 20)
					return {
						"fillColor": "#fe9929",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.chu >= 20 && feature.properties.chu < 30)
						return {
							"fillColor": "#d95f0e",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.chu >= 30)
								return {
									"fillColor": "#993404",
									"fillOpacity": 0.7,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for GAO
function gaoStyle(feature) {
	if (feature.properties.gao <= 5)
		return {
			"fillColor": "#ffffd4",
			"fillOpacity": 0.8,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.gao >= 5 && feature.properties.gao < 10)
			return {
				"fillColor": "#fee391",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.gao >= 10 && feature.properties.gao < 15)
				return {
					"fillColor": "#fec44f",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.gao >= 15 && feature.properties.gao < 20)
					return {
						"fillColor": "#fe9929",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.gao >= 20 && feature.properties.gao < 30)
						return {
							"fillColor": "#ec7014",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.gao >= 30 && feature.properties.gao < 40)
						return {
							"fillColor": "#cc4c02",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.gao >= 40)
								return {
									"fillColor": "#8c2d04",
									"fillOpacity": 0.7,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for DA
function daStyle(feature) {
	if (feature.properties.da <= 5)
		return {
			"fillColor": "#ffffd4",
			"fillOpacity": 0.8,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.da >= 5 && feature.properties.da < 10)
			return {
				"fillColor": "#fee391",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.da >= 10 && feature.properties.da < 15)
				return {
					"fillColor": "#fec44f",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.da >= 15 && feature.properties.da < 20)
					return {
						"fillColor": "#fe9929",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.da >= 20 && feature.properties.da < 30)
						return {
							"fillColor": "#ec7014",
							"fillOpacity": 0.6,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.da >= 30 && feature.properties.da < 50)
							return {
								"fillColor": "#cc4c02",
								"fillOpacity": 0.6,
								"weight": 1,
								"color": "black"
							};
								else if (feature.properties.da >= 50)
									return {
										"fillColor": "#8c2d04",
										"fillOpacity": 0.7,
										"weight": 1,
										"color": "black"
									};
								}
//STYLE for LABOR
function laborStyle(feature) {
		if (feature.properties.labor <= 40)
			return {
				"fillColor": "#ffffb2",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.labor >= 40 && feature.properties.labor < 50)
				return {
					"fillColor": "#fed976",
					"fillOpacity": 0.6,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.labor >= 50 && feature.properties.labor < 60)
					return {
						"fillColor": "#feb24c",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.labor >= 60 && feature.properties.labor < 70)
						return {
							"fillColor": "#fd8d3c",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.labor >= 70 && feature.properties.labor < 80)
							return {
								"fillColor": "#f03b20",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
								else if (feature.properties.labor >= 80)
									return {
										"fillColor": "#bd0026",
										"fillOpacity": 0.7,
										"weight": 1,
										"color": "black"
									};
								}
//STYLE for M_LAB
function mlabStyle(feature) {
            if (feature.properties.m_lab <= 20)
                return {
                    "fillColor": "#ffffcc",
                    "fillOpacity": 0.6,
                    "weight": 1,
                    "color": "black"
                };
                else if (feature.properties.m_lab >= 20 && feature.properties.m_lab < 30)
                    return {
                        "fillColor": "#ffeda0",
                        "fillOpacity": 0.6,
                        "weight": 1,
                        "color": "black"
                    };
                    else if (feature.properties.m_lab >= 30 && feature.properties.m_lab < 40)
                        return {
                            "fillColor": "#fed976",
                            "fillOpacity": 0.7,
                            "weight": 1,
                            "color": "black"
                        };
                        else if (feature.properties.m_lab >= 40 && feature.properties.m_lab < 50)
                            return {
                                "fillColor": "#feb24c",
                                "fillOpacity": 0.7,
                                "weight": 1,
                                "color": "black"
                            };
                            else if (feature.properties.m_lab >= 50 && feature.properties.m_lab < 60)
                                return {
                                    "fillColor": "#fd8d3c",
                                    "fillOpacity": 0.6,
                                    "weight": 1,
                                    "color": "black"
                                };
                                else if (feature.properties.m_lab >= 60 && feature.properties.m_lab < 70)
                                    return {
                                        "fillColor": "#fc4e2a",
                                        "fillOpacity": 0.6,
                                        "weight": 1,
                                        "color": "black"
                                    };
                                    else if (feature.properties.m_lab >= 70 && feature.properties.m_lab < 80)
                                        return {
                                            "fillColor": "#e31a1c",
                                            "fillOpacity": 0.7,
                                            "weight": 1,
                                            "color": "black"
                                        };
                                            else if (feature.properties.m_lab >= 80 && feature.properties.m_lab < 90)
                                            return {
                                                "fillColor": "#bd0026",
                                                "fillOpacity": 0.7,
                                                "weight": 1,
                                                "color": "black"
                                            };
                                                else if (feature.properties.m_lab >= 90)
                                                    return {
                                                        "fillColor": "#800026",
                                                        "fillOpacity": 0.7,
                                                        "weight": 1,
                                                        "color": "black"
                                                    };
                                                }
//STYLE for W_LAB
function wlabStyle(feature) {
            if (feature.properties.w_lab <= 20)
                return {
                    "fillColor": "#ffffcc",
                    "fillOpacity": 0.6,
                    "weight": 1,
                    "color": "black"
                };
                else if (feature.properties.w_lab >= 20 && feature.properties.w_lab < 30)
                    return {
                        "fillColor": "#ffeda0",
                        "fillOpacity": 0.6,
                        "weight": 1,
                        "color": "black"
                    };
                    else if (feature.properties.w_lab >= 30 && feature.properties.w_lab < 40)
                        return {
                            "fillColor": "#fed976",
                            "fillOpacity": 0.7,
                            "weight": 1,
                            "color": "black"
                        };
                        else if (feature.properties.w_lab >= 40 && feature.properties.w_lab < 50)
                            return {
                                "fillColor": "#feb24c",
                                "fillOpacity": 0.7,
                                "weight": 1,
                                "color": "black"
                            };
                            else if (feature.properties.w_lab >= 50 && feature.properties.w_lab < 60)
                                return {
                                    "fillColor": "#fd8d3c",
                                    "fillOpacity": 0.6,
                                    "weight": 1,
                                    "color": "black"
                                };
                                else if (feature.properties.w_lab >= 60 && feature.properties.w_lab < 70)
                                    return {
                                        "fillColor": "#fc4e2a",
                                        "fillOpacity": 0.6,
                                        "weight": 1,
                                        "color": "black"
                                    };
                                    else if (feature.properties.w_lab >= 70 && feature.properties.w_lab < 80)
                                        return {
                                            "fillColor": "#e31a1c",
                                            "fillOpacity": 0.7,
                                            "weight": 1,
                                            "color": "black"
                                        };
                                            else if (feature.properties.w_lab >= 80 && feature.properties.w_lab < 90)
                                            return {
                                                "fillColor": "#bd0026",
                                                "fillOpacity": 0.7,
                                                "weight": 1,
                                                "color": "black"
                                            };
                                                else if (feature.properties.w_lab >= 90)
                                                    return {
                                                        "fillColor": "#800026",
                                                        "fillOpacity": 0.7,
                                                        "weight": 1,
                                                        "color": "black"
                                                    };
                                                }
//STYLE for EMPLO
function emploStyle(feature) {
		if (feature.properties.emplo <= 5)
			return {
				"fillColor": "#ffffb2",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
				else if (feature.properties.emplo >= 5 && feature.properties.emplo < 10)
					return {
						"fillColor": "#fecc5c",
						"fillOpacity": 0.6,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.emplo >= 10 && feature.properties.emplo < 15)
						return {
							"fillColor": "#fd8d3c",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.emplo >= 15 && feature.properties.emplo < 20)
							return {
								"fillColor": "#f03b20",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
								else if (feature.properties.emplo >= 20)
									return {
										"fillColor": "#bd0026",
										"fillOpacity": 0.7,
										"weight": 1,
										"color": "black"
									};
								}
//STYLE for AGRI
function agriStyle(feature) {
	if (feature.properties.agri <= 10)
		return {
			"fillColor": "#ffffcc",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.agri >= 10 && feature.properties.agri < 20)
			return {
				"fillColor": "#ffeda0",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.agri >= 20 && feature.properties.agri < 30)
				return {
					"fillColor": "#fed976",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.agri >= 30 && feature.properties.agri < 40)
					return {
						"fillColor": "#feb24c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.agri >= 40 && feature.properties.agri < 50)
						return {
							"fillColor": "#fd8d3c",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.agri >= 50 && feature.properties.agri < 60)
							return {
								"fillColor": "#fc4e2a",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.agri >= 60 && feature.properties.agri < 70)
								return {
									"fillColor": "#e31a1c",
									"fillOpacity": 0.8,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.agri >= 70 && feature.properties.agri < 80)
									return {
										"fillColor": "#bd0026",
										"fillOpacity": 0.8,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.agri >= 80 && feature.properties.agri < 90)
										return {
											"fillColor": "#800026",
											"fillOpacity": 0.8,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.agri >= 90)
											return {
												"fillColor": "#32000f",
												"fillOpacity": 0.9,
												"weight": 1,
												"color": "black"
											};
										}
//STYLE for MANU
function manuStyle(feature) {
	if (feature.properties.manu <= 5)
		return {
			"fillColor": "#ffffcc",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.manu >= 5 && feature.properties.manu < 10)
			return {
				"fillColor": "#ffeda0",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.manu >= 10 && feature.properties.manu < 20)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.manu >= 20 && feature.properties.manu < 30)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.manu >= 30 && feature.properties.manu < 40)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.manu >= 40 && feature.properties.manu < 50)
						return {
							"fillColor": "#fc4e2a",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.manu >= 50 && feature.properties.manu < 60)
							return {
								"fillColor": "#e31a1c",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
								else if (feature.properties.manu >= 60)
									return {
										"fillColor": "#b10026",
										"fillOpacity": 0.9,
										"weight": 1,
										"color": "black"
									};
								}
//STYLE for CONS
function consStyle(feature) {
	if (feature.properties.cons <= 5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.cons >= 5 && feature.properties.cons < 10)
			return {
				"fillColor": "#fecc5c",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.cons >= 10 && feature.properties.cons < 15)
				return {
					"fillColor": "#fd8d3c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.cons >= 15 && feature.properties.cons < 20)
					return {
						"fillColor": "#f03b20",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
						else if (feature.properties.cons >= 20)
							return {
								"fillColor": "#bd0026",
								"fillOpacity": 0.9,
								"weight": 1,
								"color": "black"
							};
						}
//STYLE for BUSI
function busiStyle(feature) {
	if (feature.properties.busi <= 5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.busi >= 5 && feature.properties.busi < 10)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.busi >= 10 && feature.properties.busi < 20)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.busi >= 20 && feature.properties.busi < 30)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.busi >= 30 && feature.properties.busi < 40)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.busi >= 40)
								return {
									"fillColor": "#bd0026",
									"fillOpacity": 0.9,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for TRAN
function tranStyle(feature) {
	if (feature.properties.tran <= 5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.tran >= 5 && feature.properties.tran < 10)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.tran >= 10 && feature.properties.tran < 15)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.tran >= 15 && feature.properties.tran < 20)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.tran >= 20 && feature.properties.tran < 40)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.tran >= 40)
								return {
									"fillColor": "#bd0026",
									"fillOpacity": 0.9,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for INDU
function induStyle(feature) {
	if (feature.properties.indu <= 2.5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.indu >= 2.5 && feature.properties.indu < 5)
			return {
				"fillColor": "#fecc5c",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.indu >= 5 && feature.properties.indu < 10)
				return {
					"fillColor": "#fd8d3c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
					else if (feature.properties.indu >= 10)
						return {
							"fillColor": "#e31a1c",
							"fillOpacity": 0.9,
							"weight": 1,
							"color": "black"
						};
					}
//STYLE for SERV
function servStyle(feature) {
	if (feature.properties.serv <= 5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.serv >= 5 && feature.properties.serv < 10)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.serv >= 10 && feature.properties.serv < 20)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.serv >= 20 && feature.properties.serv < 30)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.serv >= 30 && feature.properties.serv < 40)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.serv >= 40)
								return {
									"fillColor": "#bd0026",
									"fillOpacity": 0.9,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for SPEC
function specStyle(feature) {
	if (feature.properties.spec <= 2.5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.spec >= 2.5 && feature.properties.spec < 5)
			return {
				"fillColor": "#fecc5c",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.spec >= 5 && feature.properties.spec < 10)
				return {
					"fillColor": "#fd8d3c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.spec >= 10 && feature.properties.spec < 15)
					return {
						"fillColor": "#f03b20",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
						else if (feature.properties.spec >= 15)
							return {
								"fillColor": "#bd0026",
								"fillOpacity": 0.9,
								"weight": 1,
								"color": "black"
							};
						}
//STYLE for MANA
function manaStyle(feature) {
	if (feature.properties.mana <= 2.5)
		return {
			"fillColor": "#ffeda0",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.mana >= 2.5 && feature.properties.mana < 5)
			return {
				"fillColor": "#feb24c",
				"fillOpacity": 0.7,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.mana >= 5)
				return {
					"fillColor": "#f03b20",
					"fillOpacity": 0.8,
					"weight": 1,
					"color": "black"
				};
			}
//STYLE for SUKE
function sukeStyle(feature) {
	if (feature.properties.suke <= 5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.suke >= 5 && feature.properties.suke < 10)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.suke >= 10 && feature.properties.suke < 20)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.suke >= 20 && feature.properties.suke < 30)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.suke >= 30 && feature.properties.suke < 40)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.suke >= 40)
								return {
									"fillColor": "#bd0026",
									"fillOpacity": 0.9,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for SALE
function saleStyle(feature) {
	if (feature.properties.sale <= 5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.sale >= 5 && feature.properties.sale < 10)
			return {
				"fillColor": "#fecc5c",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.sale >= 10 && feature.properties.sale < 20)
				return {
					"fillColor": "#fd8d3c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.sale >= 20 && feature.properties.sale < 30)
					return {
						"fillColor": "#f03b20",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
						else if (feature.properties.sale >= 30)
							return {
								"fillColor": "#bd0026",
								"fillOpacity": 0.9,
								"weight": 1,
								"color": "black"
							};
						}
//STYLE for FUWU
function fuwuStyle(feature) {
	if (feature.properties.fuwu <= 5)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.fuwu >= 5 && feature.properties.fuwu < 10)
			return {
				"fillColor": "#fecc5c",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.fuwu >= 10 && feature.properties.fuwu < 20)
				return {
					"fillColor": "#fd8d3c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.fuwu >= 20 && feature.properties.fuwu < 30)
					return {
						"fillColor": "#f03b20",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
						else if (feature.properties.fuwu >= 30)
							return {
								"fillColor": "#bd0026",
								"fillOpacity": 0.9,
								"weight": 1,
								"color": "black"
							};
						}
//STYLE for FARM
function farmStyle(feature) {
	if (feature.properties.farm <= 10)
		return {
			"fillColor": "#ffffcc",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.farm >= 10 && feature.properties.farm < 20)
			return {
				"fillColor": "#ffeda0",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.farm >= 20 && feature.properties.farm < 30)
				return {
					"fillColor": "#fed976",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.farm >= 30 && feature.properties.farm < 40)
					return {
						"fillColor": "#feb24c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.farm >= 40 && feature.properties.farm < 50)
						return {
							"fillColor": "#fd8d3c",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.farm >= 50 && feature.properties.farm < 60)
							return {
								"fillColor": "#fc4e2a",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
							else if (feature.properties.farm >= 60 && feature.properties.farm < 70)
								return {
									"fillColor": "#e31a1c",
									"fillOpacity": 0.8,
									"weight": 1,
									"color": "black"
								};
								else if (feature.properties.farm >= 70 && feature.properties.farm < 80)
									return {
										"fillColor": "#bd0026",
										"fillOpacity": 0.8,
										"weight": 1,
										"color": "black"
									};
									else if (feature.properties.farm >= 80 && feature.properties.farm < 90)
										return {
											"fillColor": "#800026",
											"fillOpacity": 0.8,
											"weight": 1,
											"color": "black"
										};
										else if (feature.properties.farm >= 90)
											return {
												"fillColor": "#32000f",
												"fillOpacity": 0.9,
												"weight": 1,
												"color": "black"
											};
										}
//STYLE for TRAV
function travStyle(feature) {
	if (feature.properties.trav <= 5)
		return {
			"fillColor": "#ffffcc",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.trav >= 5 && feature.properties.trav < 10)
			return {
				"fillColor": "#ffeda0",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.trav >= 10 && feature.properties.trav < 20)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.trav >= 20 && feature.properties.trav < 30)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.trav >= 30 && feature.properties.trav < 40)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.trav >= 40 && feature.properties.trav < 50)
						return {
							"fillColor": "#fc4e2a",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
						else if (feature.properties.trav >= 50 && feature.properties.trav < 60)
							return {
								"fillColor": "#e31a1c",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
								else if (feature.properties.trav >= 60)
									return {
										"fillColor": "#b10026",
										"fillOpacity": 0.9,
										"weight": 1,
										"color": "black"
									};
								}
//STYLE for PING
function pingStyle(feature) {
	if (feature.properties.ping <= 3)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.ping >= 3 && feature.properties.ping < 4)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.ping >= 4 && feature.properties.ping < 5)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.ping >= 5 && feature.properties.ping < 6)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.ping >= 6 && feature.properties.ping < 10)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.ping >= 10)
								return {
									"fillColor": "#bd0026",
									"fillOpacity": 0.9,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for USE
function useStyle(feature) {
	if (feature.properties.use <= 70)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.use >= 70 && feature.properties.use < 80)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.use >= 80 && feature.properties.use < 85)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.use >= 85 && feature.properties.use < 90)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.use >= 90 && feature.properties.use < 95)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.use >= 95)
								return {
									"fillColor": "#bd0026",
									"fillOpacity": 0.9,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for PRIV
function privStyle(feature) {
	if (feature.properties.priv <= 70)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.priv >= 70 && feature.properties.priv < 80)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.priv >= 80 && feature.properties.priv < 85)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.priv >= 85 && feature.properties.priv < 90)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.priv >= 90 && feature.properties.priv < 95)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.priv >= 95)
								return {
									"fillColor": "#bd0026",
									"fillOpacity": 0.9,
									"weight": 1,
									"color": "black"
								};
							}
//STYLE for BEFO
function befoStyle(feature) {
	if (feature.properties.befo <= 10)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.befo >= 10 && feature.properties.befo < 20)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.befo >= 20 && feature.properties.befo < 30)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.befo >= 30 && feature.properties.befo < 40)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.befo >= 40 && feature.properties.befo < 50)
					return {
						"fillColor": "#fc4e2a",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
						else if (feature.properties.befo >= 50 && feature.properties.befo < 70)
							return {
								"fillColor": "#e31a1c",
								"fillOpacity": 0.7,
								"weight": 1,
								"color": "black"
							};
								else if (feature.properties.befo >= 70)
									return {
										"fillColor": "#b10026",
										"fillOpacity": 0.9,
										"weight": 1,
										"color": "black"
									};
								}
//STYLE for NIAN
function nianStyle(feature) {
	if (feature.properties.nian <= 10)
		return {
			"fillColor": "#ffffb2",
			"fillOpacity": 0.6,
			"weight": 1,
			"color": "black"
		};
		else if (feature.properties.nian >= 10 && feature.properties.nian < 20)
			return {
				"fillColor": "#fed976",
				"fillOpacity": 0.6,
				"weight": 1,
				"color": "black"
			};
			else if (feature.properties.nian >= 20 && feature.properties.nian < 30)
				return {
					"fillColor": "#feb24c",
					"fillOpacity": 0.7,
					"weight": 1,
					"color": "black"
				};
				else if (feature.properties.nian >= 30 && feature.properties.nian < 40)
					return {
						"fillColor": "#fd8d3c",
						"fillOpacity": 0.7,
						"weight": 1,
						"color": "black"
					};
					else if (feature.properties.nian >= 40 && feature.properties.nian < 50)
						return {
							"fillColor": "#f03b20",
							"fillOpacity": 0.7,
							"weight": 1,
							"color": "black"
						};
							else if (feature.properties.nian >= 50)
								return {
									"fillColor": "#bd0026",
									"fillOpacity": 0.9,
									"weight": 1,
									"color": "black"
								};
							}




//BOUNDARIES DATA TOWN
var town_1956 = new L.TopoJSON(null, {
	style: townStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table border="0" style="border-collapse:collapse;" cellpadding="2">' +
			                  '<tr>'  + '<td>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var town_1966 = new L.TopoJSON(null, {
	style: townStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table border="0" style="border-collapse:collapse;" cellpadding="2">' +
			                  '<tr>'  + '<td>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var town_1980 = new L.TopoJSON(null, {
	style: townStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table border="0" style="border-collapse:collapse;" cellpadding="2">' +
			                  '<tr>'  + '<td>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var town_1990 = new L.TopoJSON(null, {
	style: townStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table border="0" style="border-collapse:collapse;" cellpadding="2">' +
			                  '<tr>'  + '<td>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var town_2000 = new L.TopoJSON(null, {
	style: townStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table border="0" style="border-collapse:collapse;" cellpadding="2">' +
			                  '<tr>'  + '<td>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var town_2010 = new L.TopoJSON(null, {
	style: townStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table border="0" style="border-collapse:collapse;" cellpadding="2">' +
			                  '<tr>'  + '<td>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//POP DENSITY DATA
var pop_den_1956 = new L.TopoJSON(null, {
	style: popStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">人口密度 : </th>' + '<td class="tabletd";>' + " " + feature.properties.pop_den + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var pop_den_1966 = new L.TopoJSON(null, {
	style: popStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">人口密度 : </th>' + '<td class="tabletd";>' + " " + feature.properties.pop_den + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var pop_den_1980 = new L.TopoJSON(null, {
	style: popStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">人口密度 : </th>' + '<td class="tabletd";>' + " " + feature.properties.pop_den + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var pop_den_1990 = new L.TopoJSON(null, {
	style: popStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">人口密度 : </th>' + '<td class="tabletd";>' + " " + feature.properties.pop_den + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var pop_den_2000 = new L.TopoJSON(null, {
	style: popStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">人口密度 : </th>' + '<td class="tabletd";>' + " " + feature.properties.pop_den + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var pop_den_2010 = new L.TopoJSON(null, {
	style: popStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">人口密度 : </th>' + '<td class="tabletd";>' + " " + feature.properties.pop_den + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//MINORITIES
var total_1956 = new L.TopoJSON(null, {
	style: totalStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.total + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var total_2000 = new L.TopoJSON(null, {
	style: totalStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.total + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var atayal_1956 = new L.TopoJSON(null, {
	style: atayalStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.atayal + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/atayal_1956.json', function (data) {
	atayal_1956.addData(data); 
});
var bunun_1956 = new L.TopoJSON(null, {
	style: bununStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.bunun + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/bunun_1956.json', function (data) {
	bunun_1956.addData(data); 
});
var saisiyat_1956 = new L.TopoJSON(null, {
	style: saisiyatStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.saisiyat + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/saisiyat_1956.json', function (data) {
	saisiyat_1956.addData(data); 
});
var tsou_1956 = new L.TopoJSON(null, {
	style: tsouStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.tsou + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/tsou_1956.json', function (data) {
	tsou_1956.addData(data); 
});
var paiwan_1956 = new L.TopoJSON(null, {
	style: paiwanStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.paiwan + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/paiwan_1956.json', function (data) {
	paiwan_1956.addData(data); 
});
var rukai_1956 = new L.TopoJSON(null, {
	style: rukaiStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.rukai + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/rukai_1956.json', function (data) {
	rukai_1956.addData(data); 
});
var yami_1956 = new L.TopoJSON(null, {
	style: yamiStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.yami + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/yami_1956.json', function (data) {
	yami_1956.addData(data); 
});
var amis_1956 = new L.TopoJSON(null, {
	style: amisStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.amis + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/amis_1956.json', function (data) {
	amis_1956.addData(data); 
});
var puyuma_1956 = new L.TopoJSON(null, {
	style: puyumaStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.puyuma + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/puyuma_1956.json', function (data) {
	puyuma_1956.addData(data); 
});
var atayal_2000 = new L.TopoJSON(null, {
	style: atayalStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.atayal + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/atayal_2000.json', function (data) {
	atayal_2000.addData(data); 
});
var bunun_2000 = new L.TopoJSON(null, {
	style: bununStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.bunun + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/bunun_2000.json', function (data) {
	bunun_2000.addData(data); 
});
var saisiyat_2000 = new L.TopoJSON(null, {
	style: saisiyatStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.saisiyat + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/saisiyat_2000.json', function (data) {
	saisiyat_2000.addData(data); 
});
var tsou_2000 = new L.TopoJSON(null, {
	style: tsouStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.tsou + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/tsou_2000.json', function (data) {
	tsou_2000.addData(data); 
});
var paiwan_2000 = new L.TopoJSON(null, {
	style: paiwanStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.paiwan + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/paiwan_2000.json', function (data) {
	paiwan_2000.addData(data); 
});
var rukai_2000 = new L.TopoJSON(null, {
	style: rukaiStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.rukai + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/rukai_2000.json', function (data) {
	rukai_2000.addData(data); 
});
var yami_2000 = new L.TopoJSON(null, {
	style: yamiStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.yami + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/yami_2000.json', function (data) {
	yami_2000.addData(data); 
});
var amis_2000 = new L.TopoJSON(null, {
	style: amisStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.amis + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/amis_2000.json', function (data) {
	amis_2000.addData(data); 
});
var puyuma_2000 = new L.TopoJSON(null, {
	style: puyumaStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.puyuma + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
$.getJSON('minorities/puyuma_2000.json', function (data) {
	puyuma_2000.addData(data); 
});
//YOUNG AGE DATA
var young_1966 = new L.TopoJSON(null, {
	style: youngStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.young + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			} 
		}
});
var young_1980 = new L.TopoJSON(null, {
	style: youngStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.young + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var young_1990 = new L.TopoJSON(null, {
	style: youngStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.young + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var young_2000 = new L.TopoJSON(null, {
	style: youngStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.young + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var young_2010 = new L.TopoJSON(null, {
	style: youngStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">%: </th>' + '<td class="tabletd";>' + " " + feature.properties.young + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//ADULT AGE DATA
var adult_1966 = new L.TopoJSON(null, {
	style: adultStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.adult + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var adult_1980 = new L.TopoJSON(null, {
	style: adultStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">%: </th>' + '<td class="tabletd";>' + " " + feature.properties.adult + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var adult_1990 = new L.TopoJSON(null, {
	style: adultStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.adult + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var adult_2000 = new L.TopoJSON(null, {
	style: adultStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.adult + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var adult_2010 = new L.TopoJSON(null, {
	style: adultStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.adult + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//OLD AGE DATA
var old_1966 = new L.TopoJSON(null, {
	style: oldStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.old + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var old_1980 = new L.TopoJSON(null, {
	style: oldStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.old + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var old_1990 = new L.TopoJSON(null, {
	style: oldStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.old + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var old_2000 = new L.TopoJSON(null, {
	style: oldStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.old + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var old_2010 = new L.TopoJSON(null, {
	style: oldStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.old + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//WORK RATIO DATA
var work_1966 = new L.TopoJSON(null, {
	style: workStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.work + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var work_1980 = new L.TopoJSON(null, {
	style: workStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.work + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var work_1990 = new L.TopoJSON(null, {
	style: workStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.work + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var work_2000 = new L.TopoJSON(null, {
	style: workStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.work + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//REPRODUCTIVE WOMEN RATIO DATA
var women_1966 = new L.TopoJSON(null, {
	style: womenStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.women + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var women_1980 = new L.TopoJSON(null, {
	style: womenStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.women + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var women_1990 = new L.TopoJSON(null, {
	style: womenStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.women + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var women_2000 = new L.TopoJSON(null, {
	style: womenStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.women + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//RATIO
var ratio_1956 = new L.TopoJSON(null, {
	style: ratioStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ratio + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ratio_1966 = new L.TopoJSON(null, {
	style: ratioStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ratio + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ratio_1980 = new L.TopoJSON(null, {
	style: ratioStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ratio + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ratio_1990 = new L.TopoJSON(null, {
	style: ratioStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ratio + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ratio_2000 = new L.TopoJSON(null, {
	style: ratioStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ratio + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ratio_2010 = new L.TopoJSON(null, {
	style: ratioStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ratio + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//UNMARRIED
var unmarried_1966 = new L.TopoJSON(null, {
	style: unmarriedStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.unmarried + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var unmarried_1980 = new L.TopoJSON(null, {
	style: unmarriedStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.unmarried + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var unmarried_1990 = new L.TopoJSON(null, {
	style: unmarriedStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.unmarried + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var unmarried_2000 = new L.TopoJSON(null, {
	style: unmarriedStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.unmarried + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//WIDOW
var widow_1966 = new L.TopoJSON(null, {
	style: widowStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.widow + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var widow_1980 = new L.TopoJSON(null, {
	style: widowStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.widow + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var widow_1990 = new L.TopoJSON(null, {
	style: widowStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.widow + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var widow_2000 = new L.TopoJSON(null, {
	style: widowStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.widow + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//DIVORCE
var divorced_1966 = new L.TopoJSON(null, {
	style: divorcedStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.divorced + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var divorced_1980 = new L.TopoJSON(null, {
	style: divorcedStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.divorced + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var divorced_1990 = new L.TopoJSON(null, {
	style: divorcedStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.divorced + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var divorced_2000 = new L.TopoJSON(null, {
	style: divorcedStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.divorced + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//ILLITERATE
var illiterate_1966 = new L.TopoJSON(null, {
	style: illiterateStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.illiterate + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var illiterate_1980 = new L.TopoJSON(null, {
	style: illiterateStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.illiterate + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var illiterate_1990 = new L.TopoJSON(null, {
	style: illiterateStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.illiterate + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var illiterate_2000 = new L.TopoJSON(null, {
	style: illiterateStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.illiterate + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//XIAO
var xiao_1966 = new L.TopoJSON(null, {
	style: xiaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.xiao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var xiao_1980 = new L.TopoJSON(null, {
	style: xiaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.xiao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var xiao_1990 = new L.TopoJSON(null, {
	style: xiaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.xiao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var xiao_2000 = new L.TopoJSON(null, {
	style: xiaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.xiao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var xiao_2010 = new L.TopoJSON(null, {
	style: xiaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.xiao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//CHU
var chu_1966 = new L.TopoJSON(null, {
	style: chuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.chu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var chu_1980 = new L.TopoJSON(null, {
	style: chuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.chu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var chu_1990 = new L.TopoJSON(null, {
	style: chuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.chu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var chu_2000 = new L.TopoJSON(null, {
	style: chuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.chu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var chu_2010 = new L.TopoJSON(null, {
	style: chuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.chu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//GAO
var gao_1966 = new L.TopoJSON(null, {
	style: gaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.gao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var gao_1980 = new L.TopoJSON(null, {
	style: gaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.gao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var gao_1990 = new L.TopoJSON(null, {
	style: gaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.gao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var gao_2000 = new L.TopoJSON(null, {
	style: gaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.gao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var gao_2010 = new L.TopoJSON(null, {
	style: gaoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.gao + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//DA
var da_1966 = new L.TopoJSON(null, {
	style: daStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.da + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var da_1980 = new L.TopoJSON(null, {
	style: daStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.da + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var da_1990 = new L.TopoJSON(null, {
	style: daStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.da + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var da_2000 = new L.TopoJSON(null, {
	style: daStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.da + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var da_2010 = new L.TopoJSON(null, {
	style: daStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.da + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//LABOR
var labor_1966 = new L.TopoJSON(null, {
	style: laborStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.labor + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var labor_1980 = new L.TopoJSON(null, {
	style: laborStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.labor + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var labor_1990 = new L.TopoJSON(null, {
	style: laborStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.labor + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//LABOR
var mlab_1966 = new L.TopoJSON(null, {
    style: mlabStyle,
        onEachFeature: function (feature, layer){
            if (feature.properties){
                var content = '<table class="table_s">' +
                              '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
                              '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.m_lab + '</td>' + '</tr>' +
                              '<table>';
                    layer.bindPopup(content);
            }
        }
});
var mlab_1980 = new L.TopoJSON(null, {
    style: mlabStyle,
        onEachFeature: function (feature, layer){
            if (feature.properties){
                var content = '<table class="table_s">' +
                              '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
                              '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.m_lab + '</td>' + '</tr>' +
                              '<table>';
                    layer.bindPopup(content);
            }
        }
});
var mlab_1990 = new L.TopoJSON(null, {
    style: mlabStyle,
        onEachFeature: function (feature, layer){
            if (feature.properties){
                var content = '<table class="table_s">' +
                              '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
                              '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.m_lab + '</td>' + '</tr>' +
                              '<table>';
                    layer.bindPopup(content);
            }
        }
});
var wlab_1966 = new L.TopoJSON(null, {
    style: wlabStyle,
        onEachFeature: function (feature, layer){
            if (feature.properties){
                var content = '<table class="table_s">' +
                              '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
                              '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.w_lab + '</td>' + '</tr>' +
                              '<table>';
                    layer.bindPopup(content);
            }
        }
});
var wlab_1980 = new L.TopoJSON(null, {
    style: wlabStyle,
        onEachFeature: function (feature, layer){
            if (feature.properties){
                var content = '<table class="table_s">' +
                              '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
                              '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.w_lab + '</td>' + '</tr>' +
                              '<table>';
                    layer.bindPopup(content);
            }
        }
});
var wlab_1990 = new L.TopoJSON(null, {
    style: wlabStyle,
        onEachFeature: function (feature, layer){
            if (feature.properties){
                var content = '<table class="table_s">' +
                              '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
                              '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.w_lab + '</td>' + '</tr>' +
                              '<table>';
                    layer.bindPopup(content);
            }
        }
});
var emplo_1966 = new L.TopoJSON(null, {
	style: emploStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.emplo + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var emplo_1980 = new L.TopoJSON(null, {
	style: emploStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.emplo + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var emplo_1990 = new L.TopoJSON(null, {
	style: emploStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.emplo + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//XING
var agri_1966 = new L.TopoJSON(null, {
	style: agriStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.agri + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var agri_1980 = new L.TopoJSON(null, {
	style: agriStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.agri + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var agri_1990 = new L.TopoJSON(null, {
	style: agriStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.agri + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var manu_1966 = new L.TopoJSON(null, {
	style: manuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.manu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var manu_1980 = new L.TopoJSON(null, {
	style: manuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.manu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var manu_1990 = new L.TopoJSON(null, {
	style: manuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.manu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var cons_1966 = new L.TopoJSON(null, {
	style: consStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.cons + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var cons_1980 = new L.TopoJSON(null, {
	style: consStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.cons + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var cons_1990 = new L.TopoJSON(null, {
	style: consStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.cons + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var busi_1966 = new L.TopoJSON(null, {
	style: busiStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.busi + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var busi_1980 = new L.TopoJSON(null, {
	style: busiStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.busi + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var busi_1990 = new L.TopoJSON(null, {
	style: busiStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.busi + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var tran_1966 = new L.TopoJSON(null, {
	style: tranStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.tran + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var tran_1980 = new L.TopoJSON(null, {
	style: tranStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.tran + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var tran_1990 = new L.TopoJSON(null, {
	style: tranStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.tran + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var indu_1966 = new L.TopoJSON(null, {
	style: induStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.indu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var indu_1980 = new L.TopoJSON(null, {
	style: induStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.indu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var indu_1990 = new L.TopoJSON(null, {
	style: induStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.indu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var serv_1966 = new L.TopoJSON(null, {
	style: servStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.serv + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var serv_1980 = new L.TopoJSON(null, {
	style: servStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.serv + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var serv_1990 = new L.TopoJSON(null, {
	style: servStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.serv + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
//DUI
var spec_1966 = new L.TopoJSON(null, {
	style: specStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.spec + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var spec_1980 = new L.TopoJSON(null, {
	style: specStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.spec + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var spec_1990 = new L.TopoJSON(null, {
	style: specStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.spec + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var mana_1966 = new L.TopoJSON(null, {
	style: manaStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.mana + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var mana_1980 = new L.TopoJSON(null, {
	style: manaStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.mana + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var mana_1990 = new L.TopoJSON(null, {
	style: manaStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.mana + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var suke_1966 = new L.TopoJSON(null, {
	style: sukeStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.suke + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var suke_1980 = new L.TopoJSON(null, {
	style: sukeStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.suke + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var suke_1990 = new L.TopoJSON(null, {
	style: sukeStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.suke + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var sale_1966 = new L.TopoJSON(null, {
	style: saleStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.sale + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var sale_1980 = new L.TopoJSON(null, {
	style: saleStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.sale + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var sale_1990 = new L.TopoJSON(null, {
	style: saleStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.sale + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var fuwu_1966 = new L.TopoJSON(null, {
	style: fuwuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.fuwu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var fuwu_1980 = new L.TopoJSON(null, {
	style: fuwuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.fuwu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var fuwu_1990 = new L.TopoJSON(null, {
	style: fuwuStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.fuwu + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var farm_1966 = new L.TopoJSON(null, {
	style: farmStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.farm + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var farm_1980 = new L.TopoJSON(null, {
	style: farmStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.farm + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var farm_1990 = new L.TopoJSON(null, {
	style: farmStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.farm + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var trav_1966 = new L.TopoJSON(null, {
	style: travStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.trav + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var trav_1980 = new L.TopoJSON(null, {
	style: travStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.trav + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var trav_1990 = new L.TopoJSON(null, {
	style: travStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.trav + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ping_1966 = new L.TopoJSON(null, {
	style: pingStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ping + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ping_1980 = new L.TopoJSON(null, {
	style: pingStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ping + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ping_1990 = new L.TopoJSON(null, {
	style: pingStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ping + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var ping_2000 = new L.TopoJSON(null, {
	style: pingStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.ping + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var use_1966 = new L.TopoJSON(null, {
	style: useStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.use + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var use_1980 = new L.TopoJSON(null, {
	style: useStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.use + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var use_1990 = new L.TopoJSON(null, {
	style: useStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.use + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var use_2000 = new L.TopoJSON(null, {
	style: useStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.use + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var priv_1966 = new L.TopoJSON(null, {
	style: privStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.priv + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var priv_1980 = new L.TopoJSON(null, {
	style: privStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.priv + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var priv_1990 = new L.TopoJSON(null, {
	style: privStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.priv + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var priv_2000 = new L.TopoJSON(null, {
	style: privStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.priv + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var befo_1966 = new L.TopoJSON(null, {
	style: befoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.befo + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var befo_1980 = new L.TopoJSON(null, {
	style: befoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.befo + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var befo_1990 = new L.TopoJSON(null, {
	style: befoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.befo + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var befo_2000 = new L.TopoJSON(null, {
	style: befoStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.befo + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var nian_1966 = new L.TopoJSON(null, {
	style: nianStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.nian + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var nian_1980 = new L.TopoJSON(null, {
	style: nianStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.nian + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var nian_1990 = new L.TopoJSON(null, {
	style: nianStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.nian + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});
var nian_2000 = new L.TopoJSON(null, {
	style: nianStyle,
		onEachFeature: function (feature, layer){
			if (feature.properties){
			    var content = '<table class="table_s">' +
			                  '<trclass="tabletr">'  + '<th class="tableth">鄉鎮名 : </th>' + '<td class="tabletd";>' + " " + feature.properties.town + '</td>' + '</tr>' +
			                  '<tr>'  + '<th class="tableth">% : </th>' + '<td class="tabletd";>' + " " + feature.properties.nian + '</td>' + '</tr>' +
			                  '<table>';
					layer.bindPopup(content);
			}
		}
});


$.getJSON('topojson/1956.topojson', function (data) {
    town_1956.addData(data);
    pop_den_1956.addData(data); 
    total_1956.addData(data);  
    ratio_1956.addData(data); 
});
$.getJSON('topojson/1966.topojson', function (data) {
    town_1966.addData(data); 
    pop_den_1966.addData(data); 
    young_1966.addData(data); 
    adult_1966.addData(data); 
    old_1966.addData(data); 
    work_1966.addData(data); 
    women_1966.addData(data); 
    ratio_1966.addData(data); 
    unmarried_1966.addData(data); 
    widow_1966.addData(data); 
    divorced_1966.addData(data); 
    illiterate_1966.addData(data); 
    xiao_1966.addData(data); 
    chu_1966.addData(data); 
    gao_1966.addData(data); 
    da_1966.addData(data);
    labor_1966.addData(data); 
    mlab_1966.addData(data); 
    wlab_1966.addData(data);
    emplo_1966.addData(data);
    agri_1966.addData(data);
    manu_1966.addData(data);
    cons_1966.addData(data);
    busi_1966.addData(data);
    tran_1966.addData(data);
    indu_1966.addData(data);
    serv_1966.addData(data);
    spec_1966.addData(data);
    mana_1966.addData(data);
    suke_1966.addData(data);
    sale_1966.addData(data);
    fuwu_1966.addData(data);
    farm_1966.addData(data);
    trav_1966.addData(data);
    ping_1966.addData(data);
    use_1966.addData(data);
    priv_1966.addData(data);
    befo_1966.addData(data);
    nian_1966.addData(data);
});
$.getJSON('topojson/1980.topojson', function (data) {
    town_1980.addData(data); 
    pop_den_1980.addData(data); 
    young_1980.addData(data); 
    adult_1980.addData(data); 
    old_1980.addData(data); 
    work_1980.addData(data); 
    women_1980.addData(data); 
    ratio_1980.addData(data); 
    unmarried_1980.addData(data); 
    widow_1980.addData(data); 
    divorced_1980.addData(data); 
    illiterate_1980.addData(data); 
    xiao_1980.addData(data);
    chu_1980.addData(data); 
    gao_1980.addData(data); 
    da_1980.addData(data); 
    labor_1980.addData(data); 
	mlab_1980.addData(data); 
    wlab_1980.addData(data);
    emplo_1980.addData(data);
    agri_1980.addData(data);
    manu_1980.addData(data);
    cons_1980.addData(data);
    busi_1980.addData(data);
    tran_1980.addData(data);
    indu_1980.addData(data);
    serv_1980.addData(data);
    spec_1980.addData(data);
    mana_1980.addData(data);
    suke_1980.addData(data);
    sale_1980.addData(data);
    fuwu_1980.addData(data);
    farm_1980.addData(data);
    trav_1980.addData(data);
    ping_1980.addData(data);
    use_1980.addData(data);
    priv_1980.addData(data);
    befo_1980.addData(data);
    nian_1980.addData(data);
});
$.getJSON('topojson/1990.topojson', function (data) {
    town_1990.addData(data);
    pop_den_1990.addData(data); 
    young_1990.addData(data); 
    adult_1990.addData(data); 
    old_1990.addData(data); 
    work_1990.addData(data); 
    women_1990.addData(data); 
    ratio_1990.addData(data); 
    unmarried_1990.addData(data); 
    widow_1990.addData(data); 
    divorced_1990.addData(data); 
    illiterate_1990.addData(data); 
    xiao_1990.addData(data); 
    chu_1990.addData(data); 
    gao_1990.addData(data); 
    da_1990.addData(data); 
    labor_1990.addData(data);
    mlab_1990.addData(data); 
    wlab_1990.addData(data);
    emplo_1990.addData(data);
    agri_1990.addData(data);
    manu_1990.addData(data);
    cons_1990.addData(data);
    busi_1990.addData(data);
    tran_1990.addData(data);
    indu_1990.addData(data);
    serv_1990.addData(data);
    spec_1990.addData(data);
    mana_1990.addData(data);
    suke_1990.addData(data);
    sale_1990.addData(data);
    fuwu_1990.addData(data);
    farm_1990.addData(data);
    trav_1990.addData(data);
    ping_1990.addData(data);
    use_1990.addData(data);
    priv_1990.addData(data);
    befo_1990.addData(data);
    nian_1990.addData(data);
});
$.getJSON('topojson/2000.topojson', function (data) {
    pop_den_2000.addData(data); 
    town_2000.addData(data); 
    total_2000.addData(data); 
    young_2000.addData(data); 
    adult_2000.addData(data); 
    old_2000.addData(data); 
    work_2000.addData(data); 
    women_2000.addData(data); 
    ratio_2000.addData(data); 
    unmarried_2000.addData(data); 
    widow_2000.addData(data); 
    divorced_2000.addData(data); 
    illiterate_2000.addData(data); 
    xiao_2000.addData(data); 
    chu_2000.addData(data); 
    gao_2000.addData(data); 
    da_2000.addData(data); 
    ping_2000.addData(data);
    use_2000.addData(data);
    priv_2000.addData(data);
    befo_2000.addData(data);
    nian_2000.addData(data);
});
$.getJSON('topojson/2010.topojson', function (data) {
    pop_den_2010.addData(data); 
    young_2010.addData(data); 
    adult_2010.addData(data); 
    old_2010.addData(data); 
    ratio_2010.addData(data); 
    xiao_2010.addData(data); 
    chu_2010.addData(data); 
    gao_2010.addData(data); 
    da_2010.addData(data); 
    town_2010.addData(data); 
});




