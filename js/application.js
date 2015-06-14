$(function () {
    // var SERIES = [
    //     [
    //         [Date.UTC(1980,  3, 1), 10000],
    //         [Date.UTC(1980,  6, 1), 11000],
    //         [Date.UTC(1980,  9, 1), 12000],
    //         [Date.UTC(1980,  12, 1), 13000],
    //     ],
    //     [
    //         [Date.UTC(1981,  1, 1), 13500],
    //         [Date.UTC(1981,  3, 1), 13500],
    //         [Date.UTC(1981,  6, 1), 13500],
    //         [Date.UTC(1981,  9, 1), 15000],
    //         [Date.UTC(1981,  12, 1), 16000],
    //     ],
    //     [
    //         [Date.UTC(1982,  1, 1), 16500],
    //         [Date.UTC(1982,  3, 1), 16500],
    //         [Date.UTC(1982,  6, 1), 16500],
    //         [Date.UTC(1982,  9, 1), 16000],
    //         [Date.UTC(1982,  12, 1), 16000],
    //     ],
    // ]

    var SERIES = [
        [
            [Date.UTC(1985, 3), 12590],
            [Date.UTC(1985, 6), 12923],
            [Date.UTC(1985, 9), 12700],
            [Date.UTC(1985, 12), 13113],
        ],
        [
            [Date.UTC(1986, 3), 15860],
            [Date.UTC(1986, 6), 17654],
            [Date.UTC(1986, 9), 17853],
            [Date.UTC(1986, 12), 18701],
        ],
        [
            [Date.UTC(1987, 3), 21567],
            [Date.UTC(1987, 6), 24176],
            [Date.UTC(1987, 9), 26011],
            [Date.UTC(1987, 12), 21564],
        ],
        [
            [Date.UTC(1988, 3), 26260],
            [Date.UTC(1988, 6), 27769],
            [Date.UTC(1988, 9), 27924],
            [Date.UTC(1988, 12), 30159],
        ],
        [
            [Date.UTC(1989, 3), 32839],
            [Date.UTC(1989, 6), 32949],
            [Date.UTC(1989, 9), 35637],
            [Date.UTC(1989, 12), 38916],
        ],
        [
            [Date.UTC(1990, 3), 29980],
            [Date.UTC(1990, 6), 31940],
            [Date.UTC(1990, 9), 20984],
            [Date.UTC(1990, 12), 23849],
        ],
        [
            [Date.UTC(1991, 3), 26292],
            [Date.UTC(1991, 6), 23291],
            [Date.UTC(1991, 9), 23916],
            [Date.UTC(1991, 12), 22984],
        ],
        [
            [Date.UTC(1992, 3), 19346],
            [Date.UTC(1992, 6), 15952],
            [Date.UTC(1992, 9), 17399],
            [Date.UTC(1992, 12), 16925],
        ],
        [
            [Date.UTC(1993, 3), 18591],
            [Date.UTC(1993, 6), 19590],
            [Date.UTC(1993, 9), 20106],
            [Date.UTC(1993, 12), 17417],
        ],
        [
            [Date.UTC(1994, 3), 19112],
            [Date.UTC(1994, 6), 20644],
            [Date.UTC(1994, 9), 19564],
            [Date.UTC(1994, 12), 19723],
        ],
        [
            [Date.UTC(1995, 3), 16140],
            [Date.UTC(1995, 6), 14517],
            [Date.UTC(1995, 9), 17913],
            [Date.UTC(1995, 12), 19868],
        ],
        [
            [Date.UTC(1996, 3), 21407],
            [Date.UTC(1996, 6), 22531],
            [Date.UTC(1996, 9), 21556],
            [Date.UTC(1996, 12), 19361],
        ],
        [
            [Date.UTC(1997, 3), 18003],
            [Date.UTC(1997, 6), 20605],
            [Date.UTC(1997, 9), 17888],
            [Date.UTC(1997, 12), 15259],
        ],
        [
            [Date.UTC(1998, 3), 16527],
            [Date.UTC(1998, 6), 15830],
            [Date.UTC(1998, 9), 13406],
            [Date.UTC(1998, 12), 13842],
        ],
        [
            [Date.UTC(1999, 3), 15837],
            [Date.UTC(1999, 6), 17530],
            [Date.UTC(1999, 9), 17605],
            [Date.UTC(1999, 12), 18934],
        ],
        [
            [Date.UTC(2000, 3), 20337],
            [Date.UTC(2000, 6), 17411],
            [Date.UTC(2000, 9), 15747],
            [Date.UTC(2000, 12), 13786],
        ],
        [
            [Date.UTC(2001, 3), 13000],
            [Date.UTC(2001, 6), 12969],
            [Date.UTC(2001, 9), 9775],
            [Date.UTC(2001, 12), 10543],
        ],
        [
            [Date.UTC(2002, 3), 11025],
            [Date.UTC(2002, 6), 10622],
            [Date.UTC(2002, 9), 9383],
            [Date.UTC(2002, 12), 8579],
        ],
        [
            [Date.UTC(2003, 3), 7973],
            [Date.UTC(2003, 6), 9083],
            [Date.UTC(2003, 9), 10219],
            [Date.UTC(2003, 12), 10677],
        ],
        [
            [Date.UTC(2004, 3), 11715],
            [Date.UTC(2004, 6), 11859],
            [Date.UTC(2004, 9), 10824],
            [Date.UTC(2004, 12), 11489],
        ],
        [
            [Date.UTC(2005, 3), 11669],
            [Date.UTC(2005, 6), 11584],
            [Date.UTC(2005, 9), 13574],
            [Date.UTC(2005, 12), 16111],
        ],
        [
            [Date.UTC(2006, 3), 17060],
            [Date.UTC(2006, 6), 15505],
            [Date.UTC(2006, 9), 16128],
            [Date.UTC(2006, 12), 17226],
        ],
        [
            [Date.UTC(2007, 3), 17288],
            [Date.UTC(2007, 6), 18138],
            [Date.UTC(2007, 9), 16786],
            [Date.UTC(2007, 12), 15308],
        ],
        [
            [Date.UTC(2008, 3), 12526],
            [Date.UTC(2008, 6), 13481],
            [Date.UTC(2008, 9), 11260],
            [Date.UTC(2008, 12), 8860],
        ],
        [
            [Date.UTC(2009, 3), 8110],
            [Date.UTC(2009, 6), 9958],
            [Date.UTC(2009, 9), 10133],
            [Date.UTC(2009, 12), 10546],
        ],
        [
            [Date.UTC(2010, 3), 11090],
            [Date.UTC(2010, 6), 9383],
            [Date.UTC(2010, 9), 9369],
            [Date.UTC(2010, 12), 10229],
        ],
        [
            [Date.UTC(2011, 3), 9755],
            [Date.UTC(2011, 6), 9816],
            [Date.UTC(2011, 9), 8700],
            [Date.UTC(2011, 12), 8455],
        ],
        [
            [Date.UTC(2012, 3), 10084],
            [Date.UTC(2012, 6), 9007],
            [Date.UTC(2012, 9), 8870],
            [Date.UTC(2012, 12), 10395],
        ],
        [
            [Date.UTC(2013, 3), 12398],
            [Date.UTC(2013, 6), 13677],
            [Date.UTC(2013, 9), 14456],
            [Date.UTC(2013, 12), 16291],
        ],
        [
            [Date.UTC(2014, 3), 14828],
            [Date.UTC(2014, 6), 15162],
            [Date.UTC(2014, 9), 16174],
            [Date.UTC(2014, 12), 17451],
        ],
        [
            [Date.UTC(2015, 3), 19207],
            [Date.UTC(2015, 6), 20407],
        ]
    ]

    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        var series_point = 0;
                        // set up the updating of the chart each second
                        var series = this.series[0];

                        setInterval(function () {

                            if (!SERIES[series_point]) {
                                return false;
                            }

                            $.each(SERIES[series_point], function(idx, data_set) {
                                series.addPoint(data_set, true, true);
                            });
                            series_point += 1;
                        }, 1000);
                    }
                }
            },
            title: {
                text: '日経平均推移'
            },
            xAxis: {
                title: {
                    text: '年'
                },
                // X軸に関しては時間軸サポートで詳細なフォーマットを指定可能
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%y/%m/%e',
                    week: '%y/%m/%e',
                    month: '%Y/%m',
                    year: '%Y'
                },
                plotLines: [{
                    color: 'white', // Color value
                    value: 4, // Value of where the line will appear
                    width: 4 // Width of the line
                }]
            },
            yAxis: {
                title: {
                    text: '株価(円)'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                },
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Nikkei 1970-1985',
                data: [
                    [Date.UTC(1970, 6), 2138],
                    [Date.UTC(1970, 9), 2065],
                    [Date.UTC(1970, 12), 1987],
                    [Date.UTC(1971, 3), 2403],
                    [Date.UTC(1971, 6), 2637],
                    [Date.UTC(1971, 9), 2428],
                    [Date.UTC(1971, 12), 2714],
                    [Date.UTC(1972, 3), 3188],
                    [Date.UTC(1972, 6), 3711],
                    [Date.UTC(1972, 9), 4353],
                    [Date.UTC(1972, 12), 5208],
                    [Date.UTC(1973, 3), 5226],
                    [Date.UTC(1973, 6), 4675],
                    [Date.UTC(1973, 9), 4607],
                    [Date.UTC(1973, 12), 4307],
                    [Date.UTC(1974, 3), 4474],
                    [Date.UTC(1974, 6), 4614],
                    [Date.UTC(1974, 9), 3950],
                    [Date.UTC(1974, 12), 3817],
                    [Date.UTC(1975, 3), 4485],
                    [Date.UTC(1975, 6), 4533],
                    [Date.UTC(1975, 9), 3886],
                    [Date.UTC(1975, 12), 4359],
                    [Date.UTC(1976, 3), 4596],
                    [Date.UTC(1976, 6), 4852],
                    [Date.UTC(1976, 9), 4830],
                    [Date.UTC(1976, 12), 4991],
                    [Date.UTC(1977, 3), 5036],
                    [Date.UTC(1977, 6), 4976],
                    [Date.UTC(1977, 9), 5264],
                    [Date.UTC(1977, 12), 4866],
                    [Date.UTC(1978, 3), 5448],
                    [Date.UTC(1978, 6), 5543],
                    [Date.UTC(1978, 9), 5783],
                    [Date.UTC(1978, 12), 6002],
                    [Date.UTC(1979, 3), 6141],
                    [Date.UTC(1979, 6), 6273],
                    [Date.UTC(1979, 9), 6591],
                    [Date.UTC(1979, 12), 6569],
                    [Date.UTC(1980, 3), 6556],
                    [Date.UTC(1980, 6), 6871],
                    [Date.UTC(1980, 9), 7076],
                    [Date.UTC(1980, 12), 7116],
                    [Date.UTC(1981, 3), 7334],
                    [Date.UTC(1981, 6), 7867],
                    [Date.UTC(1981, 9), 7456],
                    [Date.UTC(1981, 12), 7682],
                    [Date.UTC(1982, 3), 7260],
                    [Date.UTC(1982, 6), 7214],
                    [Date.UTC(1982, 9), 6911],
                    [Date.UTC(1982, 12), 8017],
                    [Date.UTC(1983, 3), 8479],
                    [Date.UTC(1983, 6), 8871],
                    [Date.UTC(1983, 9), 9403],
                    [Date.UTC(1983, 12), 9894],
                    [Date.UTC(1984, 3), 10968],
                    [Date.UTC(1984, 6), 10428],
                    [Date.UTC(1984, 9), 10637],
                    [Date.UTC(1984, 12), 11543],
                ]
            }]
        });
    });

    // $(".card-slide").on("click", function () {
    //     $("#container").trigger("click");
    // });
});
