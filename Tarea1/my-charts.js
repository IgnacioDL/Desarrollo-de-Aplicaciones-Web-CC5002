window.onload = function () {

    var chart3 = new CanvasJS.Chart("lineChartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Cantidad de Mascotas Censadas por Día"
        },
        axisX: {
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Cantidad de Mascotas",
            includeZero: true,
            crosshair: {
                enabled: true
            }
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "line",
            showInLegend: true,
            name: "Cantidad de Mascotas censadas",
            markerType: "square",
            xValueFormatString: "DD MMM, YYYY",
            color: "#F08080",
            dataPoints: [
                {x: new Date(2020, 9, 22), y: 25},
                {x: new Date(2020, 9, 23), y: 20},
                {x: new Date(2020, 9, 24), y: 21},
                {x: new Date(2020, 9, 25), y: 25},
                {x: new Date(2020, 9, 26), y: 23},
                {x: new Date(2020, 9, 27), y: 26},
                {x: new Date(2020, 9, 28), y: 24},
                {x: new Date(2020, 9, 29), y: 25},
                {x: new Date(2020, 9, 30), y: 26},
                {x: new Date(2020, 10, 1), y: 24},
                {x: new Date(2020, 10, 2), y: 17},
                {x: new Date(2020, 10, 3), y: 26},
                {x: new Date(2020, 10, 4), y: 19},
                {x: new Date(2020, 10, 5), y: 23}
            ]
        }]
    });
    chart3.render();

    function toogleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }


    var chart = new CanvasJS.Chart("BarChartContainer", {
        animationEnabled: true,
        title: {
            text: "Cantidad de Perros y Gatos Censados por Mes"
        },
        axisY: {
            title: "Cantidad de Perros",
            titleFontColor: "#64b5f6",
            lineColor: "#64b5f6",
            labelFontColor: "#64b5f6",
            tickColor: "#64b5f6"
        },
        axisY2: {
            title: "Cantidad de Gatos",
            titleFontColor: "#e57373",
            lineColor: "#e57373",
            labelFontColor: "#e57373",
            tickColor: "#e57373"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            color: "#64b5f6",
            type: "column",
            name: "Perros (n° censados/mes)",
            legendText: "Perros",
            showInLegend: true,
            dataPoints: [
                {label: "Abril", y: 370},
                {label: "Junio", y: 300},
                {label: "Julio", y: 250},
                {label: "Agosto", y: 288},
                {label: "Septiembre", y: 205},
                {label: "Octubre", y: 190}
            ]
        },
            {
                color: "#e57373",
                type: "column",
                name: "Gatos (n° censados/mes)",
                legendText: "Gatos",
                axisYType: "secondary",
                showInLegend: true,
                dataPoints: [
                    {label: "Abril", y: 100},
                    {label: "Junio", y: 90},
                    {label: "Julio", y: 288},
                    {label: "Agosto", y: 120},
                    {label: "Septiembre", y: 102},
                    {label: "Octubre", y: 300}
                ]
            }]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    var chart2 = new CanvasJS.Chart("pieChartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Cantidad de Mascotas Censadas por Tipo"
        },
        legend: {
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                {y: 50, name: "Perros", exploded: true},
                {y: 40, name: "Gatos"},
                {y: 2, name: "Hámster"},
                {y: 1, name: "Pez"},
                {y: 1, name: "Tortuga"},
                {y: 2, name: "Loro"},
                {y: 1, name: "Iguana"},
                {y: 1, name: "Araña"},
                {y: 2, name: "Otro"}
            ]
        }]
    });
    chart2.render();


    function explodePie(e) {
        if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart.render();


    }

}